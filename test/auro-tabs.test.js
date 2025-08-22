import {
  elementUpdated,
  expect,
  fixture,
  html,
  waitUntil,
} from "@open-wc/testing";
import { setViewport } from "@web/test-runner-commands";
import "../src/registered.js";

describe("auro-tabgroup", () => {
  it("auro-tabgroup is accessible", async () => {
    const el = await fixture(html`
      <auro-tabgroup>
        <div slot="tabs">
          <auro-tab selected>Tab 1</auro-tab>
          <auro-tab>Tab 2</auro-tab>
          <auro-tab>Tab 3</auro-tab>
          <auro-tab>Tab 4</auro-tab>
          <auro-tab>Tab 5</auro-tab>
        </div>
        <div slot="panels">
          <auro-tabpanel>Tabpanel 1</auro-tabpanel>
          <auro-tabpanel>Tabpanel 2</auro-tabpanel>
          <auro-tabpanel>Tabpanel 3</auro-tabpanel>
          <auro-tabpanel>Tabpanel 4</auro-tabpanel>
          <auro-tabpanel>Tabpanel 5</auro-tabpanel>
        </div>
      </auro-tabgroup>
    `);

    await elementUpdated(el);

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

  it.skip("trigger keyhandler", async () => {
    const el = await fixture(getTabGroup());
    await elementUpdated(el);

    const tablistRootDiv = el.shadowRoot.querySelector("[role='tablist']");
    const tabs = el.allTabs;
    const panels = el.allPanels;

    const firstTab = tabs[0];
    firstTab.focus();

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
      tablistRootDiv.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: arrayKeys[i],
        }),
      );
      // DEBUG - check role attribute on element
      console.log(tablistRootDiv.getAttribute("role"));

      await elementUpdated(el);

      await expect(el.currentTabIndex).to.equal(expectedIndex[i]);

      const currentPanel = el.currentTab.panel;
      await expect(currentPanel).to.equal(panels[el.currentTabIndex]);
    }
  });

  it("trigger click handler", async () => {
    const el = await fixture(getTabGroup());

    const CLICK_INDEX = 3;
    const tabs = el.allTabs;
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
        <div slot="tabs">
          <auro-tab selected>Tab 1</auro-tab>
          <auro-tab>Tab 2</auro-tab>
          <auro-tab>Tab 3</auro-tab>
          <auro-tab>Tab 4</auro-tab>
          <auro-tab>Tab 5</auro-tab>
        </div>
        <div slot="panels">
          <auro-tabpanel>Tabpanel 1</auro-tabpanel>
          <auro-tabpanel>Tabpanel 2</auro-tabpanel>
          <auro-tabpanel>Tabpanel 3</auro-tabpanel>
          <auro-tabpanel>Tabpanel 4</auro-tabpanel>
          <auro-tabpanel>Tabpanel 5</auro-tabpanel>
        </div>
      </auro-tabgroup>
    `);

    const CLICK_INDEX = 3;
    const tabs = el.allTabs;
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

  // not relevant until we get designs with arrows again
  it.skip("scrolls container when clicks arrow buttons", async () => {
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

  // not relevant until we get designs with arrows again
  it.skip("do not show arrow buttons in a small screen", async () => {
    await setViewport({
      width: 500,
      height: 800,
    });
    const el = await fixture(getTabGroup(20));

    const arrows = el.shadowRoot.querySelector(".chevronRight, .chevronLeft");
    await expect(arrows).to.be.null;
  });
});

function getTabGroup(tabCount = 5) {
  const tabs = [];
  const panels = [];
  for (let i = 0; i < tabCount; i++) {
    tabs.push(html`<auro-tab>Tab ${i + 1}</auro-tab>`);
    panels.push(html`<auro-tabpanel>Tabpanel ${i + 1}</auro-tabpanel>`);
  }

  const renderedHtml = html`
    <auro-tabgroup variant="unstyled">
      <div slot="tabs">
        ${tabs}
      </div>
      <div slot="panels">
        ${panels}
      </div>
    </auro-tabgroup>
  `;

  return html`${renderedHtml}`;
}
