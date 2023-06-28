// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit";
import { styleMap } from 'lit/directives/style-map.js';

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
  constructor() {
    super();

    this.sliderStyles = {};

    this.addEventListener('tab-selected', () => this.setSliderStyles());
  }

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

  async firstUpdated() {
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'tablist');
    }

    this.addEventListener('keydown', this.onKeyDown);
    this.addEventListener('click', this.onClick);

    await Promise.all([
      customElements.whenDefined('auro-tab'),
      customElements.whenDefined('auro-tabpanel'),
    ]);

    this.setSliderStyles();
  }

  disconnectedCallback() {
    this.removeEventListener('keydown', this.onKeyDown);
    this.removeEventListener('click', this.onClick);
  }

  allPanels() {
    return Array.from(this.querySelectorAll('auro-tabpanel'));
  }

  allTabs() {
    return Array.from(this.querySelectorAll('auro-tab'));
  }

  prevTab() {
    const tabs = this.allTabs();
    // Use `findIndex()` to find the index of the currently
    // selected element and subtracts one to get the index of the previous
    // element.
    const newIdx =
      tabs.findIndex((tab) => tab.selected) - 1;
    // Add `tabs.length` to make sure the index is a positive number
    // and get the modulus to wrap around if necessary.
    return tabs[(newIdx + tabs.length) % tabs.length];
  }

  nextTab() {
    const tabs = this.allTabs();
    const newIdx = tabs.findIndex((tab) => tab.selected) + 1;
    return tabs[newIdx % tabs.length];
  }

  firstTab() {
    const tabs = this.allTabs();
    return tabs[0];
  }

  lastTab() {
    const tabs = this.allTabs();
    return tabs[tabs.length - 1];
  }

  reset() {
    const tabs = this.allTabs();

    tabs.forEach((tab) => {
      tab.selected = false;
    });
  }

  selectTab(newTab) {
    // Deselect all tabs and hide all panels.
    this.reset();
    newTab.selected = true;

    const tabs = this.allTabs();
    this.focusedTabIdx = tabs.findIndex((tab) => tab === newTab);
  }

  onKeyDown(event) {
    const KEYCODE = {
      DOWN: 'ArrowDown',
      LEFT: 'ArrowLeft',
      RIGHT: 'ArrowRight',
      UP: 'ArrowUp',
      HOME: 'Home',
      END: 'End',
      ENTER: 'Enter',
      SPACE: ' ',
    };

    // Don’t handle modifier shortcuts typically used by assistive technology.
    if (event.altKey) {
      return;
    }

    // The switch-case will determine which tab should be marked as focused
    // depending on the key that was pressed.
    const tabs = this.allTabs();
    let newTab = null;
    switch (event.key) {
      case KEYCODE.LEFT:
      case KEYCODE.UP:
        if (this.focusedTabIdx === 0) {
          this.focusedTabIdx = tabs.length - 1;
        } else {
          this.focusedTabIdx -= 1;
        }
        newTab = tabs[this.focusedTabIdx];
        break;
      case KEYCODE.RIGHT:
      case KEYCODE.DOWN:
        if (this.focusedTabIdx === tabs.length - 1) {
          this.focusedTabIdx = 0;
        } else {
          this.focusedTabIdx += 1;
        }
        newTab = tabs[this.focusedTabIdx];
        break;
      case KEYCODE.HOME:
        newTab = this.firstTab();
        break;
      case KEYCODE.END:
        newTab = this.lastTab();
        break;
      case KEYCODE.ENTER:
      case KEYCODE.SPACE:
        newTab = tabs[this.focusedTabIdx];
        this.selectTab(newTab);
        break;
      // Any other key press is ignored and passed back to the browser.
      default:
        return;
    }

    // The browser might have some native functionality bound to the arrow
    // keys, home or end. The element calls `preventDefault()` to prevent the
    // browser from taking any actions.
    event.preventDefault();
    // Focus to the new tab, that has been determined in the switch-case.
    newTab.focus();
  }

  /**
   * @param {Event} event HTML click Event.
   * `onClick()` handles clicks inside the tab panel.
   */
  onClick(event) {
    const roleIsNotTab = event.target.getAttribute('role') !== 'tab';
    const closestTab = event.target.closest(['[role=tab]']);

    // If the click was not targeted on a tab element itself,
    // it was a click inside the a panel or on empty space. Nothing to do.
    // actually this is going to be known issue for custom auro-tab component name in the future
    if (roleIsNotTab && !closestTab && event.target.localName !== 'auro-tab') {
      return;
    }

    if (closestTab) {
      this.selectTab(closestTab);
    } else {
      this.selectTab(event.target);
    }
  }

  setSliderStyles () {
    this.sliderStyles.width = 0;
    const tabs = this.allTabs();

    const activeTab = tabs.find((tab) => tab.selected);
    this.sliderStyles = {
      width: activeTab ? `${activeTab.clientWidth}px` : 0,
      left: activeTab ? `${activeTab.offsetLeft}px` : 0,
    };
    this.requestUpdate();
  }

  // function that renders the HTML and CSS into the scope of the component
  render() {
    const sliderStyles = styleMap(this.sliderStyles);

    return html`
    <div class="tabgroupContainer">
      <div class="tabgroup">
        <slot name="tab"></slot>
        <div class="slider" style=${sliderStyles}></div>
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
