// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit";
import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

// Import tab panel styles
import styleCss from "./tabpanel-style.scss";

/**
 * Represents a panel to be displayed when the corresponding tab is selected in an AuroTabgroup element.
 * The auro-tabpanel element should only be used inside an AuroTabgroup element.
 */
export class AuroTabpanel extends LitElement {

  static get properties() {
    return {

      /**
       * @property {boolean} hidden - Indicates whether the panel is hidden.
       * @default false
       */
      hidden: {
        type: Boolean,
        reflect: true
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

  /**
   * @description Handles any custom tag naming of the component.
   * @method handleTagName
   * @returns {void}
   * @private
   */
  handleTagName() {
    AuroLibraryRuntimeUtils.prototype.handleComponentTagRename(this, 'auro-tabpanel');
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
    this.setAttribute('role', 'tabpanel');
    this.setAttribute('tabindex', 0);
  }

  updated(changedProperties) {
    if (changedProperties.has('hidden')) {
      this.setAttribute('tabindex', this.hidden ? -1 : 0); // eslint-disable-line no-magic-numbers
    }
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
