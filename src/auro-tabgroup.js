// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit";
// import { styleMap } from 'lit/directives/style-map.js';

// Import touch detection lib
import styleCss from "./style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-tabgroup element is a container element for tabs and panels.
 * All children of `<auro-tabgroup>` should be either `<auro-tab>` or
 * `<auro-tabpanel>`. This element is stateless, meaning that no values are
 * cached and therefore, changes during runtime work.
 *
 * @attr {Number} pad - Uses fixed pixel values for padding left & right of the tab component wrapper
 * @attr {String} mode - Apply sizing based on provied mode (compact | large). Default to "compact"
 */

// build the component class
export class AuroTabgroup extends LitElement {
  // constructor() {
  //   super();
  // }

  // This function is to define props used within the scope of this component
  // Be sure to review  https://lit.dev/docs/components/properties/
  // to understand how to use reflected attributes with your property settings.
  // static get properties() {
  //   return {
  //     ...super.properties,
  //   };
  // }

  static get styles() {
    return [styleCss];
  }

  firstUpdated() {
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'tablist');
    }
  }

  // function that renders the HTML and CSS into the scope of the component
  render() {
    return html`
    <div class="tabgroupContainer">
      <div class="tabgroup">
        <slot name="tab"></slot>
        <div class="slider"></div>
      </div>
    </div>
    <slot name="panel"></slot>
    `;
  }
}

// default internal definition
if (!customElements.get("auro-tabgroup")) {
  customElements.define("auro-tabgroup", AuroTabgroup);
}
