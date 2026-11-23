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
 * A tab that shows its matching panel when selected. Use it only inside an `auro-tabgroup`.
 *
 * **Key capabilities**
 * - **Shows its panel**: Set `selected` to show the matching panel and hide the others.
 * - **Skipped by arrow keys**: Set `disabled` to skip the tab when the arrow keys move between tabs.
 * - **Adapts to dark backgrounds**: Set `appearance="inverse"` on the tab group to restyle its tabs for dark backgrounds.
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
 * @summary An accessible tab that shows its matching panel when selected.
 */
export class AuroTab extends LitElement {
  static get properties() {
    return {
      /**
       * Sets the color scheme for the background the tab sits on. Use `inverse` on dark backgrounds. The tab group sets this for you.
       * @type {"default" | "inverse"}
       * @prop {String} appearance
       * @default "default"
       */
      appearance: {
        type: String,
        reflect: true,
        default: "default"
      },

      /**
       * Shows this tab's panel and hides the others.
       * @prop {boolean} selected
       */
      selected: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Indicates whether the tab is focused.
       * @property {boolean} focused
       * @private
       */
      focused: {
        type: Boolean,
        attribute: false,
        state: true,
      },

      /**
       * Skips the tab when the arrow keys move between tabs and stops clicks from selecting it. Doesn't currently stop the `selectTab` method from selecting it.
       * @property {boolean} disabled
       */
      disabled: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Sets the tab's style variant. Doesn't currently change how the tab looks.
       * @type {"default" | "unstyled"}
       * @property {String} variant
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
    this.appearance = "default";

    // Static properties
    /**
     * @property {AuroTabpanel} panel - The matching panel that shows when this tab is selected.
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
   * @description Applies changes to the component required for proper accessibility
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
   * Registers the element with the browser under a tag name.
   * @param {string} [name="auro-tab"] - The tag name to register the element under.
   *
   * @example
   * AuroTab.register("custom-tab") // registers the element as <custom-tab>
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
