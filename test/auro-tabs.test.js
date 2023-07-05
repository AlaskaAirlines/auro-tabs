import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-tabgroup';
import '../src/auro-tab';
import '../src/auro-tabpanel';

describe('auro-tabgroup', () => {
  it('auro-tabgroup is accessible', async () => {
    const el = await fixture(html`
      <auro-tabgroup>
        <auro-tab>Tab 1</auro-tab>
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
        <auro-tab>Tab 1</auro-tab>
        <auro-tabpanel>Tabpanel 1</auro-tabpanel>
      </auro-tabgroup>
    `);
  });

  it('trigger keyhandler', async () => {
    const el = await fixture(html`
      <auro-tabgroup>
        <auro-tab selected>Tab 1</auro-tab>
        <auro-tabpanel>Tabpanel 1</auro-tabpanel>
        <auro-tab>Tab 2</auro-tab>
        <auro-tabpanel>Tabpanel 2</auro-tabpanel>
      </auro-tabgroup>
    `);

    el.selectTab(el.querySelector('auro-tab'))

    const arrayKeys = ['ArrowRight', 'ArrowRight', 'ArrowLeft', 'ArrowLeft', 'Home', 'End', ' ', 'Enter', 'a']

    arrayKeys.forEach(key => {
      el.dispatchEvent(new KeyboardEvent('keydown', {
        bubbles: true,
        composed: true,
        key,
      }));
    })

    el.dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      composed: true,
      altKey: 'b',
    }));
  });

  it('trigger navigation prev & nextTab', async () => {
    const el = await fixture(html`
      <auro-tabgroup>
        <auro-tab selected>Tab 1</auro-tab>
        <auro-tabpanel>Tabpanel 1</auro-tabpanel>
        <auro-tab>Tab 2</auro-tab>
        <auro-tabpanel>Tabpanel 2</auro-tabpanel>
      </auro-tabgroup>
    `);

    el.prevTab();
    el.nextTab();
  })

  it('trigger click handler', async () => {
    const el = await fixture(html`
      <auro-tabgroup>
        <auro-tab selected>Tab 1</auro-tab>
        <auro-tabpanel>Tabpanel 1</auro-tabpanel>
        <auro-tab>Tab 2</auro-tab>
        <auro-tabpanel>Tabpanel 2</auro-tabpanel>
      </auro-tabgroup>
    `);

    el.click()
    el.querySelector('auro-tab').click()
  })
});
