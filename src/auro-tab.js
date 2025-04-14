/* eslint-disable no-magic-numbers */
// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { AuroHyperlink } from "@aurodesignsystem/auro-hyperlink/src/auro-hyperlink.js";

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

// Import tab styles
import styleCss from "./tab-style-css.js";

/**
 * Represents a tab within an auro-tabgroup element. When selected, displays the corresponding AuroTabpanel.
 * The auro-tabpanel element should only be used inside an AuroTabgroup element.
 *
 * @attr {Boolean} selected - Mark the tab as selected tab.
 * @attr {Boolean} disabled - Mark the tab as disabled tab.
 */

// build the component class
export class AuroTab extends AuroHyperlink {
  constructor() {
    super();

    this.disabled = false;

    /**
     * The associated AuroTabpanel that will be displayed when this tab is selected.
     * @type {AuroTabpanel}
     * @readonly
     */
    this.panel = null;

    AuroLibraryRuntimeUtils.prototype.handleComponentTagRename(this, 'auro-tab');
  }

  static get properties() {
    return {
      ...super.properties,
      selected: {
        type: Boolean,
        reflect: true
      },
      disabled: {
        type: Boolean,
        reflect: true
      },
    };
  }

  static get styles() {
    return [styleCss];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-tab"] - The name of element that you want to register to.
   *
   * @example
   * Aurotab.register("custom-tab") // this will register this element to <custom-tab/>
   *
   */
  static register(name = "auro-tab") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroTab);
  }

  firstUpdated() {
    // give a unique id to the tab
    if (!this.id) {
      this.id = `auro-tab-generated-${window.crypto.randomUUID()}`;
    }
    this.setAttribute('role', 'tab');

    const anchor = this.shadowRoot.querySelector('a');
    if (anchor) {
      // remove anchor's role to avoid nested interactive elements issue. WCAG 4.1.2
      anchor.setAttribute('role', 'none');
    }
  }

  updated(changedProperties) {
    if (changedProperties.has('selected')) {
      this.setAttribute('tabindex', this.selected ? 0 : -1);
      this.setAttribute('aria-selected', this.selected ? 'true' : 'false');

      if (this.selected) {
        const event = new Event('tab-selected', {
          bubbles: true,
          composed: true,
          detail: this.selected
        });
        this.dispatchEvent(event);
      }
    }
  }
}
