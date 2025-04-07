// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit";
import { v4 as uuidv4 } from 'uuid';

// Import touch detection lib
import styleCss from "./tabpanel-style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-tabpanel element should only be used for auro-tabs only.
 *
 */

// build the component class
export class AuroTabpanel extends LitElement {

  constructor() {
    super();

    this.setAttribute('role', 'tabpanel');
    this.setAttribute('tabindex', 0);

    if (!this.id) {
      this.id = `auro-tabpanel-generated-${uuidv4()}`;
    }
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

// default internal definition
if (!customElements.get("auro-tabpanel")) {
  customElements.define("auro-tabpanel", AuroTabpanel);
}
