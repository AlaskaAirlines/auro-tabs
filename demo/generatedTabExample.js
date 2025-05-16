import { LitElement, html } from "lit";

export class ExampleTabGroup extends LitElement {
  /**
   *
   * @param {number} tabCount
   * @return {TemplateResult[]}
   */
  generateTabs(tabCount) {
    /** @type {TemplateResult[]} */
    const tabs = [];
    for (let i = 0; i <= tabCount; i++) {
      tabs.push(html`<auro-tab>Auto-generated ${i}</auro-tab>`);
    }

    return tabs;
  }

  /**
   *
   * @param {number} tabCount
   * @return {TemplateResult[]}
   */
  generatePanels(tabCount) {
    /** @type {TemplateResult[]} */
    const panels = [];
    for (let i = 0; i <= tabCount; i++) {
      panels.push(html`<auro-tabpanel>Auto-generated ${i}</auro-tabpanel>`);
    }

    return panels;
  }

  renderTabContent() {
    return html`
        <span>some content</span>
    `;
  }

  renderPanelContent() {
    return html`
        <span>some content</span>
    `;
  }

  render() {
    return html`
        <auro-tabgroup>
          <div slot="tabs">
            ${this.generateTabs(5)}
            <auro-tab>
              ${this.renderTabContent()}
            </auro-tab>
          </div>
          <div slot="panels">
            ${this.generatePanels(5)}
            <auro-tabpanel>
              ${this.renderPanelContent()}
            </auro-tabpanel>
          </div>
        </auro-tabgroup>
    `;
  }
}

export function registerExampleGroup() {
  customElements.define("example-group-test", ExampleTabGroup);
}
