/* eslint-disable no-magic-numbers */
// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
// ---------------------------------------------------------------------
import { LitElement } from "lit";
import { html } from "lit/static-html.js";

// Import tab styles
import styleCss from "./styles/tab-style.scss";

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
       * Defines whether the component will be on lighter or darker backgrounds.
       * @property {'default', 'inverse'}
       * @default 'default'
       */
      appearance: {
        type: String,
        reflect: true,
      },

      /**
       * @property {boolean} selected - Indicates whether the tab is selected.
       * @default false
       */
      selected: {
        type: Boolean,
        reflect: true,
      },

      /**
       * @property {boolean} focused - Indicates whether the tab is focused.
       * @default false
       * @private
       */
      focused: {
        type: Boolean,
        state: true,
      },

      /**
       * @property {boolean} disabled - Indicates whether the tab is disabled.
       * @default false
       */
      disabled: {
        type: Boolean,
        reflect: true,
      },

      /**
       * @property {"default" | "unstyled" | string} variant - The variant of the tab.
       * @default false
       */
      variant: {
        type: String,
        reflect: true,
      },
    };
  }

  static get styles() {
    return [styleCss];
  }

  constructor() {
    super();

    this.appearance = "default";

    AuroTab.incrementInstanceCount();

    this.handleTagName();
    this.setId();
    this.setInitialValues();
    this.setAttributes();
    this.addEventListeners();
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
   * Add event listeners for the component.
   * @returns {void}
   * @private
   */
  addEventListeners() {
    this.addEventListener("keydown", this.onKeyDown);
  }

  /**
   * Handles the keydown event for the tab.
   * @param {KeyboardEvent} event - The keydown event.
   * @private
   */
  onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      this.selected = true;
      event.preventDefault();
    }
  };

  /**
   * Sets the focus state for the tab.
   * @param {boolean} focused - Whether the tab should be focused.
   * @private
   */
  setFocused(focused) {
    if (focused) this.focus();
    this.focused = focused;
    this.setAttribute("tabindex", focused ? 0 : -1);
    this.dispatchCustomEvent(focused ? "tab-focused" : "tab-blurred", this);
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
    this.setAttribute("tabindex", this.selected || this.focused ? 0 : -1);
    this.setAttribute("aria-selected", this.selected ? "true" : "false");

    // Emit event if this tab is selected
    if (this.selected) {
      this.dispatchCustomEvent("tab-selected", this);
    }
  }

  /**
   * Dispatch a custom event from the component.
   * @param {string} eventName - The name of the event to dispatch.
   * @param {*} detail - The detail payload to include with the event.
   * @private
   */
  dispatchCustomEvent(eventName, detail) {
    const event = new CustomEvent(eventName, {
      bubbles: true,
      composed: true,
      detail,
    });
    this.dispatchEvent(event);
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
      <div part="tab-root" id="tab-root">
        <slot></slot>
      </div>
    `;
  }
}
