// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit";

// Import touch detection lib
import styleCss from "./tabpanel-style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-tabpanel element should only be used for auro-tabs only.
 *
 */

// build the component class
export class AuroTabpanel extends LitElement {
  // This function is to define props used within the scope of this component
  // Be sure to review  https://lit.dev/docs/components/properties/
  // to understand how to use reflected attributes with your property settings.
  // static get properties() {
  //   return {
  //     // ...super.properties,
  //   };
  // }

  firstUpdated() {
    this.setAttribute('role', 'tabpanel');
  }

  static get styles() {
    return [styleCss];
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
