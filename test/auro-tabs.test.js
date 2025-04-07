import { fixture, html, expect, elementUpdated } from '@open-wc/testing';
import '../src/auro-tabgroup';
import '../src/auro-tab';
import '../src/auro-tabpanel';

describe('auro-tabgroup', () => {
  it('auro-tabgroup is accessible', async () => {
    const el = await fixture(html`
      <auro-tabgroup>
        <auro-tab slot="tab">Tab 1</auro-tab>
        <auro-tabpanel slot="panel">Tabpanel 1</auro-tabpanel>
      </auro-tabgroup>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-tabgroup custom element is defined', async () => {
    const el = await !!customElements.get("auro-tabgroup");

    await expect(el).to.be.true;
  });

  it('auro-tabs full example is rendered', async () => {
    await fixture(html`
      <auro-tabgroup>
        <auro-tab slot="tab">Tab 1</auro-tab>
        <auro-tabpanel slot="panel">Tabpanel 1</auro-tabpanel>
      </auro-tabgroup>
    `);
  });

  it('trigger keyhandler', async () => {
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

    const firstTab = el.firstTab();
    firstTab.focus();

    const panels = el.allPanels();

    const arrayKeys = ['ArrowRight', 'ArrowLeft', 'Home', 'End', 'ArrowRight', 'ArrowLeft'];
    const expectedIndex = [1, 0, 0, 4, 0, 4];

    for (let i = 0; i < arrayKeys.length; i++) {
      el.dispatchEvent(new KeyboardEvent('keydown', {
        key: arrayKeys[i],
      }));

      await elementUpdated(el);

      await expect(el.focusedTabIdx).to.equal(expectedIndex[i]);

      const currentPanel = el.querySelector('auro-tabpanel:not([hidden])');
      await expect(currentPanel).to.equal(panels[el.focusedTabIdx]);
    }
  });

  it('trigger navigation prev & nextTab', async () => {
    const el = await fixture(html`
      <auro-tabgroup>
        <auro-tab slot="tab" selected>Tab 1</auro-tab>
        <auro-tabpanel slot="panel">Tabpanel 1</auro-tabpanel>
        <auro-tab slot="tab">Tab 2</auro-tab>
        <auro-tabpanel slot="panel">Tabpanel 2</auro-tabpanel>
      </auro-tabgroup>
    `);

    el.prevTab();
    el.nextTab();
  })

  it('trigger click handler', async () => {
    const el = await fixture(html`
      <auro-tabgroup>
        <auro-tab slot="tab" selected>Tab 1</auro-tab>
        <auro-tabpanel slot="panel">Tabpanel 1</auro-tabpanel>
        <auro-tab slot="tab">Tab 2</auro-tab>
        <auro-tabpanel slot="panel">Tabpanel 2</auro-tabpanel>
      </auro-tabgroup>
    `);

    el.click()
    el.querySelector('auro-tab').click()
  })
});
