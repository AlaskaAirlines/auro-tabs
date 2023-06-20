import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-tabs';

describe('auro-tabs', () => {
  it('sets the CSS class on auro-tabs > div element', async () => {
    const el = await fixture(html`
      <auro-tabs cssclass="testClass"></auro-tabs>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-tabs is accessible', async () => {
    const el = await fixture(html`
      <auro-tabs cssclass="testClass"></auro-tabs>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-tabs custom element is defined', async () => {
    const el = await !!customElements.get("auro-tabs");

    await expect(el).to.be.true;
  });
});
