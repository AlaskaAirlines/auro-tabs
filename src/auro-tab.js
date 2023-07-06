/* eslint-disable no-magic-numbers */
// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { AuroHyperlink } from "@aurodesignsystem/auro-hyperlink/src/auro-hyperlink.js";
import { v4 as uuidv4 } from 'uuid';

// Import touch detection lib
import styleCss from "./tab-style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-tabpanel element should only be used for auro-tabgroup only.
 *
 * @attr {Boolean} selected - Mark the tab as selected tab.
 * @attr {Boolean} disabled - Mark the tab as disabled tab.
 */

// build the component class
export class AuroTab extends AuroHyperlink {
  constructor() {
    super();

    this.disabled = false;
  }

  // This function is to define props used within the scope of this component
  // Be sure to review  https://lit.dev/docs/components/properties/
  // to understand how to use reflected attributes with your property settings.
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

  firstUpdated() {
    if (!this.href) {
      this.setAttribute('role', 'button');
    }

    // give a unique id to the tab
    if (!this.id) {
      this.id = `auro-tab-generated-${uuidv4()}`;
    }

    // Set a well-defined initial state.
    this.setAttribute('aria-selected', 'false');
    this.setAttribute('tabindex', -1);
    this.upgradeProperty('selected');
  }

  /**
   * This is to safe guard against cases where, for instance, a framework may have added the element
   * to the page and set a value on one of its properties, but lazy loaded its definition.
   * Without this guard, the upgraded element would miss that property and the instance property
   * would prevent the class property setter from ever being called.
   * @param {string} prop The component property.
   */
  upgradeProperty(prop) {
    if (Object.hasOwn(this, prop)) {
      const value = this[prop];
      delete this[prop];
      this[prop] = value;
    }
  }

  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
    const value = this.hasAttribute('selected');
    this.setAttribute('aria-selected', value);

    this.setAttribute('tabindex', value ? 0 : -1);
  }

  /**
   * Setter function for selected property.
   */
  set selected(value) {
    if (value) {
      this.setAttribute('selected', '');
      const event = new Event('tab-selected', {
        bubbles: true,
        composed: true,
        detail: this
      });
      this.dispatchEvent(event);
    } else {
      this.removeAttribute('selected');
    }
  }

  /**
   * Getter for selected property.
   * @returns {Boolean}
   */
  get selected() {
    return this.hasAttribute('selected');
  }
}

// default internal definition
if (!customElements.get("auro-tab")) {
  customElements.define("auro-tab", AuroTab);
}
