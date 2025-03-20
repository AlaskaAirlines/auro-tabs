/* eslint-disable no-magic-numbers,max-lines */
// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit";
import { styleMap } from 'lit/directives/style-map.js';

// Import touch detection lib
import styleCss from "./style-css.js";

// Import icon
import chevronLeft from '@alaskaairux/icons/dist/icons/interface/chevron-left_es6';
import chevronRight from '@alaskaairux/icons/dist/icons/interface/chevron-right_es6';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-tabgroup element is a container element for tabs and panels.
 * All children of `<auro-tabgroup>` should be either `<auro-tab>` or
 * `<auro-tabpanel>`. This element is stateless, meaning that no values are
 * cached and therefore, changes during runtime work.
 *
 * @prop {Number} scrollPosition - Tabgroup container scroll position.
 * @prop {Object} sliderStyles - Slider styles.
 * @slot tab - Slot component named for auro-tab.
 * @slot panel - Slot component named for auro-tabpanel.
 */

// build the component class
export class AuroTabgroup extends LitElement {
  constructor() {
    super();

    this.scrollPosition = 0;
    this.sliderStyles = {};

    this.addEventListener('tab-selected', () => this.setSliderStyles());
  }

  // This function is to define props used within the scope of this component
  // Be sure to review  https://lit.dev/docs/components/properties/
  // to understand how to use reflected attributes with your property settings.
  static get properties() {
    return {
      ...super.properties,
      scrollPosition: {
        type: Number
      },
      sliderStyles: {
        type: Object
      }
    };
  }

  static get styles() {
    return [styleCss];
  }

  async firstUpdated() {
    this.tabSlot = this.shadowRoot.querySelector('slot[name=tab]');
    this.panelSlot = this.shadowRoot.querySelector('slot[name=panel]');

    await this.updateComplete;
    this.tabSlot.addEventListener('slotchange', this.onSlotChange);
    this.panelSlot.addEventListener('slotchange', this.onSlotChange);
    this.addEventListener('keydown', this.onKeyDown);
    this.addEventListener('click', this.onClick);

    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'tablist');
    }
    this.setAttribute('aria-busy', true);

    this.tabGroupContainer = this.shadowRoot.querySelector('.tabgroupContainer');
    this.tabGroupContainer.addEventListener('scroll', () => this.onTabGroupScroll());

    await Promise.all([
      customElements.whenDefined('auro-tab'),
      customElements.whenDefined('auro-tabpanel'),
    ]);

    this.linkPanels();
    this.setSliderStyles();
  }

  disconnectedCallback() {
    this.removeEventListener('keydown', this.onKeyDown);
    this.removeEventListener('click', this.onClick);
  }

  /**
   * `onSlotChange()` is called whenever an element is added or removed from
   * one of the shadow DOM slots.
   */
  onSlotChange() {
    this.linkPanels();
  }

  /**
   * Function handler to link the tab with next sibling of tabpanel.
   * Also Set the required aria-controls & aria-labelledby attribute.
   * And finally, select a 'selected' tab if defined or default to first tab.
   */
  linkPanels() {
    const tabs = this.allTabs();
    // Give each panel a `aria-labelledby` attribute that refers to the tab
    // that controls it.
    tabs.forEach((tab) => {
      const panel = tab.nextElementSibling;
      if (panel) {
        if (panel.tagName.toLowerCase() !== 'auro-tabpanel') {
          // eslint-disable-next-line no-console
          console.error(`Tab #${tab.id} is not a` +
              `sibling of a <auro-tabpanel>`);
          return;
        }

        tab.setAttribute('aria-controls', panel.id);
        panel.setAttribute('aria-labelledby', tab.id);
      }
    });

    // select a tab if defined or select the first tab
    const selectedTab = tabs.find((tab) => tab.selected) || tabs[0];
    this.selectTab(selectedTab);
  }

  /**
   * Function to get all of the auro-tabpanel.
   * @returns {Array} Array of auro-tabpanel element.
   */
  allPanels() {
    return Array.from(this.querySelectorAll('auro-tabpanel'));
  }

  /**
   * Function to get all of the auro-tab.
   * @returns {Array} Array of auro-tab element.
   */
  allTabs() {
    return Array.from(this.querySelectorAll('auro-tab'));
  }

  /**
   * Function to get the panel for given auro-tab.
   * @param {HTMLElement} tab Auro-tab element.
   * @returns {HTMLElement | null} Auro-tabpanel element.
   */
  panelForTab(tab) {
    const panelId = tab.getAttribute('aria-controls');
    if (panelId) {
      return this.querySelector(`#${panelId}`);
    }
    return null;
  }

  /**
   * Function to get previous tab of the selected one.
   * @returns {HTMLElement} Auro-tab element.
   */
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

  /**
   * Function to get next tab of the selected one.
   * @returns {HTMLElement} Auro-tab element.
   */
  nextTab() {
    const tabs = this.allTabs();
    const newIdx = tabs.findIndex((tab) => tab.selected) + 1;
    return tabs[newIdx % tabs.length];
  }

  /**
   * Function to get the very first tab.
   * @returns {HTMLElement} Auro-tab element.
   */
  firstTab() {
    const tabs = this.allTabs();
    return tabs[0];
  }

  /**
   * Function to get the very last tab.
   * @returns {HTMLElement} Auro-tab element.
   */
  lastTab() {
    const tabs = this.allTabs();
    return tabs[tabs.length - 1];
  }

  /**
   * Function to reset the selected state of the tabs & hide the panel.
   */
  reset() {
    const tabs = this.allTabs();
    const panels = this.allPanels();

    tabs.forEach((tab) => {
      tab.selected = false;
    });
    panels.forEach((panel) => {
      panel.hidden = true;
    });
  }

  /**
   * Function handler when selecting an auro-tab.
   * @param {HTMLElement} newTab Selected auro-tab.
   * @returns {void}
   */
  selectTab(newTab) {
    // Deselect all tabs and hide all panels.
    this.reset();
    newTab.selected = true;

    const tabs = this.allTabs();
    // Set focused tab index.
    this.focusedTabIdx = tabs.findIndex((tab) => tab === newTab);

    // This will scroll the container to selected tab to nearly centered
    // of the relative viewport if possible.
    if (this.scrollSize > 0) {
      const tabBounding = newTab.getBoundingClientRect();
      const halfWidth = this.tabGroupContainer.clientWidth / 2;
      this.tabGroupContainer.scrollBy({
        left: tabBounding.x - halfWidth,
        behavior: "smooth",
      });
    }

    // Get the panel that the `newTab` is associated with.
    const newPanel = this.panelForTab(newTab);
    // If that panel doesn’t exist, abort.
    if (!newPanel) {
      // eslint-disable-next-line no-console
      console.error(`No panel with id ${newTab.id}`);
      return;
    }
    newPanel.hidden = false;
  }

  /**
   * Function handler when user do a keyboard action
   * when the focus is inside auro-tabgroup.
   * @private
   * @param {KeyboardEvent} event HTML onkeydown keyboard event.
   * @returns {void}
   */
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
      TAB: 'Tab'
    };

    // Don’t handle modifier shortcuts typically used by assistive technology.
    if (event.altKey) {
      return;
    }

    // The switch-case will determine which tab should be marked as focused
    // depending on the key that was pressed.
    const tabs = this.allTabs();
    let focusedIdx = this.focusedTabIdx;

    // we check if previous tab have 'disabled' attribute and check the following previous tab for the same thing,
    // and keeps goind on until we found the one that's not disabled.
    const findPreviousNotDisabledIndex = () => {
      const decrement = () => {
        if (focusedIdx === 0) {
          focusedIdx = tabs.length - 1;
        } else {
          focusedIdx -= 1;
        }
      };
      // do increment for first time.
      decrement();

      while (tabs[focusedIdx].hasAttribute('disabled')) {
        decrement();
      }
      return focusedIdx;
    };

    // we check if next tab have 'disabled' attribute and check the following next tab for the same thing,
    // and keeps goind on until we found the one that's not disabled.
    const findNextNotDisabledIndex = () => {
      const increment = () => {
        if (focusedIdx === tabs.length - 1) {
          focusedIdx = 0;
        } else {
          focusedIdx += 1;
        }
      };
      // do increment for first time.
      increment();

      while (tabs[focusedIdx].hasAttribute('disabled')) {
        increment();
      }
      return focusedIdx;
    };

    let newTab = null;
    switch (event.key) {
      case KEYCODE.LEFT:
      case KEYCODE.UP:
        this.focusedTabIdx = findPreviousNotDisabledIndex();
        newTab = tabs[this.focusedTabIdx];
        break;
      case KEYCODE.RIGHT:
      case KEYCODE.DOWN:
        this.focusedTabIdx = findNextNotDisabledIndex();
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
        // to check if 'focusedTabIdx' is not equal to undefined or null,
        // because 0 as a first index is a truthy value for this case
        // eslint-disable-next-line no-eq-null, eqeqeq
        if (this.focusedTabIdx != null) {
          newTab = tabs[this.focusedTabIdx];
          this.selectTab(newTab);
        }
        break;
      case KEYCODE.TAB:
        this.focusedTabIdx = tabs.findIndex((tab) => tab.hasAttribute('selected'));
      // eslint-disable-next-line no-fallthrough
      default:
        // Any other key press is ignored and passed back to the browser.
        return;
    }

    // The browser might have some native functionality bound to the arrow
    // keys, home or end. The element calls `preventDefault()` to prevent the
    // browser from taking any actions.
    event.preventDefault();
    // Focus to the new tab, that has been determined in the switch-case.
    if (newTab) {
      newTab.focus();
    }
  }

  /**
   * @private
   * @param {Event} event HTML click Event.
   * `onClick()` handles clicks inside the tab panel.
   */
  onClick(event) {
    const roleIsNotTab = event.target.getAttribute('role') !== 'tab';
    const closestTab = event.target.closest(['[role=tab]']);

    // If the click was not targeted on a tab element itself,
    // it was a click inside the a panel or on empty space. Nothing to do.
    // actually this is going to be a known issue for custom auro-tab component name in the future
    if (roleIsNotTab && !closestTab && event.target.localName !== 'auro-tab') {
      return;
    }

    if (closestTab) {
      this.selectTab(closestTab);
    } else {
      this.selectTab(event.target);
    }
  }

  /**
   * Function to set the slider position & width
   * when a tab is selected.
   * @private
   */
  setSliderStyles () {
    this.sliderStyles.width = 0;
    const tabs = this.allTabs();

    const activeTab = tabs.find((tab) => tab.selected);
    this.sliderStyles = {
      width: activeTab ? `${activeTab.clientWidth}px` : 0,
      left: activeTab ? `${activeTab.offsetLeft - 2}px` : 0,
    };
    this.requestUpdate();
  }

  /**
   * Function to generate icon based in icon param.
   * @private
   * @param {string} icon SVG string.
   * @returns {HTMLElement}
   */
  generateIcon(icon) {
    const dom = new DOMParser().parseFromString(icon.svg, 'text/html');
    return dom.body.firstChild;
  }

  /**
   * Function to save the tab group container scroll position state.
   * @private
   */
  onTabGroupScroll() {
    this.scrollPosition = this.tabGroupContainer.scrollLeft;
  }

  /**
   * Getter for tab group container scroll size.
   * @private
   * @returns {Number}
   */
  get scrollSize () {
    if (this.tabGroupContainer) {
      return this.tabGroupContainer.scrollWidth - this.tabGroupContainer.clientWidth;
    }
    return 0;
  }

  /**
   * Function handler for the scroll button click action.
   * @param {string} direction Direction of the scroll.
   */
  scrollTab(direction) {
    if (this.tabGroupContainer) {
      switch (direction) {
        case 'prev':
          if (this.tabGroupContainer.scrollLeft > 0) {
            this.tabGroupContainer.scrollBy({
              left: -this.tabGroupContainer.clientWidth,
              behavior: "smooth",
            });
          }
          break;
        case 'next':
          if (this.tabGroupContainer.scrollLeft < this.scrollSize) {
            this.tabGroupContainer.scrollBy({
              left: this.tabGroupContainer.clientWidth,
              behavior: "smooth",
            });
          }
          break;
        default:
      }
    }
  }

  /**
   * Getter for arrow left icon HTML.
   * @private
   * @returns {HTMLElement}
   */
  get arrowLeftIcon() {
    return html`
    <button class="chevronLeft" @click=${() => this.scrollTab('prev')}>
      <div class="icon">${this.generateIcon(chevronLeft)}</div>
      <div class="gradientLeft"></div>
    </button>`;
  }

  /**
   * Getter for arrow right icon HTML.
   * @private
   * @returns {HTMLElement}
   */
  get arrowRightIcon() {
    return html`
    <button class="chevronRight" @click=${() => this.scrollTab('next')}>
      <div class="gradientRight"></div>
      <div class="icon">${this.generateIcon(chevronRight)}</div>
    </button>`;
  }

  /**
   * Conditional rendering for left scroll button.
   * @returns {HTMLElement | null} Arrow left icon.
   * @private
   */
  renderLeftScrollTab() {
    if ((this.scrollPosition >= this.scrollSize || this.scrollPosition !== 0) && this.scrollSize > 0) {
      return this.arrowLeftIcon;
    }
    return null;
  }

  /**
   * Conditional rendering for right scroll button.
   * @returns {HTMLElement | null} Arrow right icon.
   * @private
   */
  renderRightScrollTab() {
    if ((this.scrollPosition === 0 || this.scrollPosition < this.scrollSize) && this.scrollSize > 0) {
      return this.arrowRightIcon;
    }
    return null;
  }

  // function that renders the HTML and CSS into the scope of the component
  render() {
    const sliderStyles = styleMap(this.sliderStyles);

    return html`
    <div class="tabgroupContainer">
      ${this.renderLeftScrollTab()}
      <div class="tabgroup">
        <slot name="tab"></slot>
        <div class="slider" style=${sliderStyles}></div>
      </div>
      ${this.renderRightScrollTab()}
    </div>
    <slot name="panel"></slot>
    `;
  }
}

// default internal definition
if (!customElements.get("auro-tabgroup")) {
  customElements.define("auro-tabgroup", AuroTabgroup);
}
