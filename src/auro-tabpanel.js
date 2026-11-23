// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import { html, LitElement } from "lit";

// Import tab panel styles
import styleCss from "./styles/tabpanel-style.scss";

/**
 * The content that shows when its matching tab is selected. Use it only inside an `auro-tabgroup`.
 *
 * **Key capabilities**
 * - **Hides when its tab isn't selected**: The tab group sets `hidden` on every panel except the selected one.
 * - **Reachable by keyboard**: A visible panel is always in the keyboard tab order.
 *
 * **Example**
 * ```html
 * <auro-tabgroup>
 *   <div slot="tabs">
 *     <auro-tab>Baggage info</auro-tab>
 *   </div>
 *   <div slot="panels">
 *     <auro-tabpanel>Baggage details</auro-tabpanel>
 *   </div>
 * </auro-tabgroup>
 * ```
 *
 * @summary An accessible panel that shows when its matching tab is selected.
 */
export class AuroTabpanel extends LitElement {
  static get properties() {
    return {
      /**
       * Hides the panel and removes it from the keyboard tab order. The tab group sets this for you.
       * @property {boolean} hidden
       */
      hidden: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  static get styles() {
    return [styleCss];
  }

  constructor() {
    super();

    AuroTabpanel.incrementInstanceCount();

    this.handleTagName();
    this.setId();
    this.setAttributes();
  }

  /**
   * @static
   * @private
   * @description Increments the instance count of this component.
   * @method incrementInstanceCount
   * @returns {void}
   */
  static incrementInstanceCount() {
    AuroTabpanel.instanceCount = (AuroTabpanel.instanceCount || 0) + 1;
  }

  /**
   * Registers the element with the browser under a tag name.
   * @param {string} [name="auro-tabpanel"] - The tag name to register the element under.
   *
   * @example
   * AuroTabpanel.register("custom-tabpanel") // registers the element as <custom-tabpanel>
   *
   */
  static register(name = "auro-tabpanel") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroTabpanel);
  }

  /**
   * @description Handles any custom tag naming of the component.
   * @method handleTagName
   * @returns {void}
   * @private
   */
  handleTagName() {
    AuroLibraryRuntimeUtils.prototype.handleComponentTagRename(
      this,
      "auro-tabpanel",
    );
  }

  /**
   * @private
   * @description Sets the unique ID for this instance of the component.
   * @method setId
   * @returns {void}
   */
  setId() {
    this.id = this.id || `auro-tabpanel-${AuroTabpanel.instanceCount}`;
  }

  /**
   * @private
   * @description Sets the relevant attributes on the parent element for this component.
   * @method setAttributes
   * @returns {void}
   */
  setAttributes() {
    this.setAttribute("role", "tabpanel");
    this.setAttribute("tabindex", 0);
  }

  updated(changedProperties) {
    if (changedProperties.has("hidden")) {
      this.setAttribute("tabindex", this.hidden ? -1 : 0); // eslint-disable-line no-magic-numbers
    }
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
