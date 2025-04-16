/* eslint-disable no-magic-numbers,max-lines, id-length, no-plusplus */
// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit";
import { styleMap } from 'lit/directives/style-map.js';

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

// Import touch detection lib
import styleCss from "./style-css.js";

import { TabIndexUtil } from "./tabindexUtil.js";

// Import icon
import chevronLeft from '@alaskaairux/icons/dist/icons/interface/chevron-left_es6';
import chevronRight from '@alaskaairux/icons/dist/icons/interface/chevron-right_es6';

const KEYCODE = {
  LEFT: 'ArrowLeft',
  RIGHT: 'ArrowRight',
  HOME: 'Home',
  END: 'End',
};

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-tabgroup element is a container element for tabs and panels.
 * All children of `<auro-tabgroup>` should be either `<auro-tab>` or
 * `<auro-tabpanel>`. This element is stateless, meaning that no values are
 * cached and therefore, changes during runtime work.
 *
 * @slot tab - Slot component named for auro-tab.
 * @slot panel - Slot component named for auro-tabpanel.
 */

// build the component class
export class AuroTabgroup extends LitElement {
  constructor() {
    super();

    /**
     * @private
     */
    this.scrollPosition = 0;

    /**
     * @private
     */
    this.sliderStyles = {};

    /**
     * @private
     */
    this.focusedTabIdx = -1;

    /**
     * @private
     */
    this.resizeObserver = undefined;

    AuroLibraryRuntimeUtils.prototype.handleComponentTagRename(this, 'auro-tabgroup');
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

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-tabgroup"] - The name of element that you want to register to.
   *
   * @example
   * Aurotab.register("custom-tabgroup") // this will register this element to <custom-tab/>
   *
   */
  static register(name = "auro-tabgroup") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroTabgroup);
  }

  firstUpdated() {
    this.setAttribute('aria-busy', "true");

    this.tabGroupContainer = this.shadowRoot.querySelector('.tabgroupContainer');
    this.tabGroupContainer.addEventListener('scroll', () => this.onTabGroupScroll());

    this.resizeObserver = new ResizeObserver(() => {
      this.setSliderStyles({ target: this.currentTab });
    });

    const tabGroup = this.tabGroupContainer.querySelector('.tabgroup');
    this.resizeObserver.observe(tabGroup, { box : 'border-box' });
  }

  connectedCallback() {
    super.connectedCallback();

    this.setSliderStyles = this.setSliderStyles.bind(this);
    this.addEventListener('tab-selected', this.setSliderStyles);
    this.addEventListener('keydown', this.onKeyDown);
    this.addEventListener('click', this.onClick);
  };

  disconnectedCallback() {
    this.removeEventListener('keydown', this.onKeyDown);
    this.removeEventListener('click', this.onClick);
  }

  /**
   * `onSlotChange()` is called whenever an element is added or removed from
   * one of the shadow DOM slots.
   * @private
   */
  onSlotChange() {
    const tabs = this.allTabs;
    // that controls it.
    tabs.forEach((tab) => {
      const panel = tab.nextElementSibling;
      if (panel) {
        if (panel.tagName.toLowerCase() !== 'auro-tabpanel') {
          // eslint-disable-next-line no-console
          console.error(`Tab #${tab.id} is not a` +
              `sibling of a <auro-tabpanel>`);
        } else {
          panel.hidden = true;
          tab.panel = panel;
          tab.setAttribute('aria-controls', panel.id);
          panel.setAttribute('aria-labelledby', tab.id);
        }
      }
      if (tab.selected) {
        this.selectTab(tab);
      }
    });

    if (this.focusedTabIdx === -1) {
      this.selectTab(tabs[0]);
    }
  }

  /**
   * Function to get all of the auro-tab.
   * @private
   * @returns {Array} Array of auro-tab element.
   */
  get allTabs() {
    return Array.from(this.querySelectorAll('auro-tab'));
  }

  /**
   * Function handler when selecting an auro-tab.
   * @private
   * @param {HTMLElement} newTab Selected auro-tab.
   * @returns {void}
   */
  selectTab(newTab) {
    const tabs = this.allTabs;
    this.focusedTabIdx = -1;

    // Deselect all tabs and hide all panels.
    for (let i = 0; i < tabs.length; i++) {
      const tab = tabs[i];
      if (tab === newTab) {
        this.focusedTabIdx = i;
      }
      tab.selected = tab === newTab;

      if (tab.panel) {
        tab.panel.hidden = tab !== newTab;
      }
    }


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

    // If that panel doesn’t exist, abort.
    if (!newTab.panel) {
      // eslint-disable-next-line no-console
      console.error(`No panel with id ${newTab.id}`);
    }
  }

  get currentTabIndex() {
    return this.focusedTabIdx;
  }

  get currentTab() {
    return this.allTabs[this.focusedTabIdx];
  }

  /**
   * @private
   * @param {KeyboardEvent} event HTML onkeydown keyboard event.
   * @returns {void}
   */
  onKeyDown(event) {
    // Don’t handle modifier shortcuts typically used by assistive technology.
    if (event.altKey) {
      return;
    }

    // The switch-case will determine which tab should be marked as focused
    // depending on the key that was pressed.
    const tabs = this.allTabs;
    let newIdx = 0;
    // keyboard support
    // https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-automatic/
    switch (event.key) {
      case KEYCODE.LEFT:
        newIdx = TabIndexUtil.getPreviousNotDisabledIndex(this.focusedTabIdx, tabs);
        break;
      case KEYCODE.RIGHT:
        newIdx = TabIndexUtil.findNextNotDisabledIndex(this.focusedTabIdx, tabs);
        break;
      case KEYCODE.HOME:
        newIdx = 0;
        break;
      case KEYCODE.END:
        newIdx = tabs.length - 1;
        break;
      default:
        // Any other key press is ignored and passed back to the browser.
        return;
    }

    // The browser might have some native functionality bound to the arrow
    // keys, home or end. The element calls `preventDefault()` to prevent the
    // browser from taking any actions.
    event.preventDefault();

    // Focus to the new tab, that has been determined in the switch-case.
    const newTab = tabs[newIdx];
    if (newTab) {
      newTab.focus();
      this.selectTab(newTab);
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
   * @private
   * @param {Event} event Dispatched from auro-tab.
   */
  setSliderStyles (event) {
    this.sliderStyles.width = 0;

    const tab = event.target;
    this.sliderStyles = {
      width: `${tab.clientWidth}px`,
      left: `${tab.offsetLeft - 0.5}px`,
    };
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
   * @private
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
   * @private
   * @returns { Boolean }
   */
  get visibleLeftChevron() {
    return (this.scrollPosition >= this.scrollSize || this.scrollPosition !== 0) && this.scrollSize > 0;
  }

  /**
   * @private
   * @returns { Boolean }
   */
  get visibleRightChevron() {
    return (this.scrollPosition === 0 || this.scrollPosition < this.scrollSize) && this.scrollSize > 0;
  }

  // function that renders the HTML and CSS into the scope of the component
  render() {
    const sliderStyles = styleMap(this.sliderStyles);

    return html`
      <div class="tabgroupContainer" role="tablist">
      ${this.visibleLeftChevron ? html`
        <button part="chevron left" class="chevronLeft" @click=${() => this.scrollTab('prev')} tabindex="-1">
          <div class="icon">${this.generateIcon(chevronLeft)}</div>
        </button>` : ''}
        <div class="tabgroup">
          <slot name="tab" @slotchange=${this.onSlotChange}></slot>
          <div part="slider-positioner" class="sliderPositioner" style=${sliderStyles}>
            <div part="slider" class="slider"></div>
          </div>
        </div>
      ${this.visibleRightChevron ? html`
        <button part="chevron right" class="chevronRight" @click=${() => this.scrollTab('next')} tabindex="-1">
          <div class="icon">${this.generateIcon(chevronRight)}</div>
        </button>` : ''}
      </div>
    <slot name="panel" @slotchange=${this.onSlotChange}></slot>
    `;
  }
}
