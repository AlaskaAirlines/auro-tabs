// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit";
import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

// Import tab panel styles
import styleCss from "./tabpanel-style-css.js";

/**
 * Represents a panel to be displayed when the corresponding tab is selected in an AuroTabgroup element.
 * The auro-tabpanel element should only be used inside an AuroTabgroup element.
 */

// build the component class
export class AuroTabpanel extends LitElement {

  constructor() {
    super();

    this.setAttribute('role', 'tabpanel');
    this.setAttribute('tabindex', 0);

    if (!this.id) {
      this.id = `auro-tabpanel-generated-${window.crypto.randomUUID()}`;
    }

    AuroLibraryRuntimeUtils.prototype.handleComponentTagRename(this, 'auro-tabpanel');
  }

  static get styles() {
    return [styleCss];
  }

  static get properties() {
    return {
      hidden: {
        type: Boolean,
        reflect: true
      },
    };
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-tabpanel"] - The name of element that you want to register to.
   *
   * @example
   * Aurotab.register("custom-tabpanel") // this will register this element to <custom-tab/>
   *
   */
  static register(name = "auro-tabpanel") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroTabpanel);
  }


  updated(changedProperties) {
    if (changedProperties.has('hidden')) {
      this.setAttribute('tabindex', this.hidden ? -1 : 0); // eslint-disable-line no-magic-numbers
    }
  }

  // function that renders the HTML and CSS into the scope of the component
  render() {
    return html`
      <slot></slot>
    `;
  }
}
