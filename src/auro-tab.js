/* eslint-disable no-magic-numbers */
// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------
import { LitElement } from "lit";
import { html } from "lit/static-html.js";

import { AuroDependencyVersioning } from "@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs";
import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";

import { AuroHyperlink } from "@aurodesignsystem/auro-hyperlink/src/auro-hyperlink.js";
import hyperlinkVersion from "./hyperlinkVersion.js";

// Import tab styles
import styleCss from "./tab-style.scss";

/**
 * Represents a tab within an auro-tabgroup element. When selected, displays the corresponding AuroTabpanel.
 * The auro-tabpanel element should only be used inside an AuroTabgroup element.
 *
 * @attr {Boolean} selected - Mark the tab as selected tab.
 * @attr {Boolean} disabled - Mark the tab as disabled tab.
 */
export class AuroTab extends LitElement {
  static get properties() {
    return {
      /**
       * @property {boolean} selected - Indicates whether the tab is selected.
       * @default false
       */
      selected: {
        type: Boolean,
        reflect: true,
      },

      /**
       * @property {boolean} disabled - Indicates whether the tab is disabled.
       * @default false
       */
      disabled: {
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

    /**
     * Generate unique names for dependency components.
     * @private
     */
    const versioning = new AuroDependencyVersioning();

    /**
     * Dynamically generated hyperlink tag for tabs.
     * @private
     * @type {string}
     */
    this.hyperlinkTag = versioning.generateTag(
      "auro-tab-hyperlink",
      hyperlinkVersion,
      AuroHyperlink,
    );

    AuroTab.incrementInstanceCount();

    this.handleTagName();
    this.setId();
    this.setInitialValues();
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
    AuroTab.instanceCount = (AuroTab.instanceCount || 0) + 1;
  }

  /**
   * @private
   * @description Sets the unique ID for this instance of the component.
   * @method setId
   * @returns {void}
   */
  setId() {
    this.id = this.id || `auro-tab-${AuroTab.instanceCount}`;
  }

  /**
   * @description Sets the initial values for the component.
   * @method setInitialValues
   * @private
   */
  setInitialValues() {
    // Dynamic properties
    this.disabled = false;

    // Static properties
    /**
     * @property {AuroTabpanel} panel - The associated AuroTabpanel that will be displayed when this tab is selected.
     * @readonly
     */
    this.panel = null;
  }

  /**
   * @private
   * @description Sets the relevant attributes on the parent element for this component.
   * @method setAttributes
   */
  setAttributes() {
    this.setAttribute("role", "tab");
  }

  /**
   * @description Handles any custom tag naming of the component.
   * @method handleTagName
   * @private
   */
  handleTagName() {
    AuroLibraryRuntimeUtils.prototype.handleComponentTagRename(
      this,
      "auro-tab",
    );
  }

  /**
   * @description Applies changes to the component required for proper a11y functionality
   * @method applyA11y
   * @private
   */
  applyA11y() {
    // remove nested anchor tag's role to avoid nested interactive elements issue. WCAG 4.1.2
    const anchor = this.shadowRoot.querySelector("a");
    if (anchor) {
      anchor.setAttribute("role", "none");
    }
  }

  /**
   * @description Updates the selected state of the tab and emits the tab-selected event.
   * @method updateSelected
   * @returns {void}
   * @private
   */
  updateSelected() {
    // Update relevant attributes
    this.setAttribute("tabindex", this.selected ? 0 : -1);
    this.setAttribute("aria-selected", this.selected ? "true" : "false");

    // Emit event if this tab is selected
    if (this.selected) {
      const event = new Event("tab-selected", {
        bubbles: true,
        composed: true,
        detail: this.selected,
      });
      this.dispatchEvent(event);
    }
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
    this.applyA11y();
  }

  updated(changedProperties) {
    if (changedProperties.has("selected")) {
      this.updateSelected();
    }
  }

  render() {
    return html`
      <${this.hyperlinkTag} tabindex="-1" href="#/" role="tab">
        <slot></slot>
      </${this.hyperlinkTag}>
    `;
  }
}
