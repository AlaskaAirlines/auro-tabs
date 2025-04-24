import {
  elementUpdated,
  expect,
  fixture,
  html,
  waitUntil,
} from "@open-wc/testing";
import { setViewport } from "@web/test-runner-commands";
import "../demo";

describe("auro-tabgroup", () => {
  it("auro-tabgroup is accessible", async () => {
    const el = await fixture(getTabGroup(3));

    await expect(el).to.be.accessible();
  });

  it("auro-tabgroup custom element is defined", async () => {
    const el = await !!customElements.get("auro-tabgroup");

    await expect(el).to.be.true;
  });

  it("auro-tabs full example is rendered", async () => {
    const el = await fixture(getTabGroup(3));
    await expect(el.checkVisibility()).to.be.true;
  });

  it("trigger keyhandler", async () => {
    const el = await fixture(getTabGroup());
    const tabs = [...el.querySelectorAll("auro-tab")];

    const firstTab = tabs[0];
    firstTab.focus();

    const panels = tabs.map((t) => t.panel);

    const arrayKeys = [
      "ArrowRight",
      "ArrowLeft",
      "Home",
      "End",
      "ArrowRight",
      "ArrowLeft",
    ];
    const expectedIndex = [1, 0, 0, 4, 0, 4];

    for (let i = 0; i < arrayKeys.length; i++) {
      el.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: arrayKeys[i],
        }),
      );

      await elementUpdated(el);

      await expect(el.currentTabIndex).to.equal(expectedIndex[i]);

      const currentPanel = el.currentTab.panel;
      await expect(currentPanel).to.equal(panels[el.currentTabIndex]);
    }
  });

  it("trigger click handler", async () => {
    const el = await fixture(getTabGroup());

    const CLICK_INDEX = 3;
    const tabs = el.querySelectorAll("auro-tab");
    await tabs[CLICK_INDEX].click();

    await expect(el.currentTabIndex).to.equal(CLICK_INDEX);
    const currentPanel = el.currentTab.panel;
    await expect(currentPanel.textContent).to.equal(
      `Tabpanel ${CLICK_INDEX + 1}`,
    );
  });

  it("shows only selected tab's panel", async () => {
    const el = await fixture(html`
      <auro-tabgroup>
        <auro-tab slot="tab" selected>Tab 1</auro-tab>
        <auro-tabpanel slot="panel">Tabpanel 1</auro-tabpanel>
        <auro-tab slot="tab">Tab 2</auro-tab>
        <auro-tabpanel slot="panel">Tabpanel 2</auro-tabpanel>
        <auro-tab slot="tab">Tab 3</auro-tab>
        <auro-tabpanel slot="panel">Tabpanel 3</auro-tabpanel>
        <auro-tab slot="tab">Tab 4</auro-tab>
        <auro-tabpanel slot="panel">Tabpanel 4</auro-tabpanel>
        <auro-tab slot="tab">Tab 5</auro-tab>
        <auro-tabpanel slot="panel">Tabpanel 5</auro-tabpanel>
      </auro-tabgroup>
    `);

    const CLICK_INDEX = 3;
    const tabs = el.querySelectorAll("auro-tab");
    await tabs[CLICK_INDEX].click();

    await expect(el.currentTabIndex).to.equal(CLICK_INDEX);
    const panels = el.querySelectorAll("auro-tabpanel");
    for (const p of panels) {
      await expect(p.checkVisibility()).not.to.equal(p.hidden);
    }
  });

  it("all tabs and panels have id", async () => {
    const el = await fixture(getTabGroup());

    const tabs = el.querySelectorAll("auro-tab");
    for (const t of tabs) {
      await expect(t.id).to.exist;
    }

    const panels = el.querySelectorAll("auro-tabpanel");
    for (const p of panels) {
      await expect(p.id).to.exist;
    }
  });

  it("scrolls container when clicks arrow buttons", async () => {
    await setViewport({
      width: 550,
      height: 800,
    });
    const el = await fixture(getTabGroup(30));
    await elementUpdated(el);

    const container = el.shadowRoot.querySelector(".tabGroupContainer");

    // Guard Clause
    if (!container) {
      throw new Error("AuroTabs | Scroll Testing: Tab container not found");
    }

    // Get the right arrow and click it
    const rightR = el.shadowRoot.querySelector(".chevronRight");
    let leftR = el.shadowRoot.querySelector(".chevronLeft");
    expect(leftR).to.be.null;

    await rightR.click();
    await elementUpdated(el);

    // Wait and see if the element scrolls
    await waitUntil(() => container.scrollLeft > 0);

    // Get the left chevron and make sure it exists now that we scrolled
    leftR = el.shadowRoot.querySelector(".chevronLeft");
    expect(leftR).to.not.be.null;

    // Test the left click and the hiding of the chevron once we are no longer scrolled
    await leftR.click();
    await elementUpdated(el);
    await waitUntil(() => container.scrollLeft === 0);
    expect(leftR.checkVisibility()).to.be.false;
  });

  it("do not show arrow buttons in a small screen", async () => {
    await setViewport({
      width: 500,
      height: 800,
    });
    const el = await fixture(getTabGroup(20));

    const arrows = el.shadowRoot.querySelector(".chevronRight, .chevronLeft");
    await expect(arrows).to.be.null;
  });
});

function getTabGroup(tabcount = 5) {
  const pairs = [];
  for (let i = 0; i < tabcount; i++) {
    pairs.push(html`
      <auro-tab slot="tab">Tab ${i + 1}</auro-tab>
      <auro-tabpanel slot="panel">Tabpanel ${i + 1}</auro-tabpanel>
    `);
  }

  return html`<auro-tabgroup>${pairs}</auro-tabgroup>`;
}
