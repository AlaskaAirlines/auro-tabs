import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-tabgroup';

describe('auro-tabgroup', () => {
  it('auro-tabgroup is accessible', async () => {
    const el = await fixture(html`
      <auro-tabgroup cssclass="testClass"></auro-tabgroup>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-tabgroup custom element is defined', async () => {
    const el = await !!customElements.get("auro-tabgroup");

    await expect(el).to.be.true;
  });
});
