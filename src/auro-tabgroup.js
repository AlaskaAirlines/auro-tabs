/* eslint-disable no-magic-numbers, max-lines, id-length, no-plusplus */
// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import { html, LitElement } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { ChildItemService } from "./child-service";

// Import styles
import styleCss from "./styles/style.scss";

import { TabIndexUtil } from "./tabindexUtil.js";

// Import icon

const KEYCODE = {
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight",
  HOME: "Home",
  END: "End",
};

/**
 * The auro-tabgroup element is a container element for tabs and panels.
 * All children of `<auro-tabgroup>` should be either `<auro-tab>` or
 * `<auro-tabpanel>`. This element is stateless, meaning that no values are
 * cached and therefore, changes during runtime work.
 *
 * @slot tab - Slot component named for auro-tab.
 * @slot panel - Slot component named for auro-tabpanel.
 * @csspart tabgroup__root - The root element of the tab group.
 * @csspart tabgroup__tabs - The "tabs list" internal wrapper element.
 * @csspart tabgroup__panels - The panel wrapper element.
 * @csspart slider-positioner - The slider positioner element (non-visual, only used to center slider on tab).
 * @csspart slider - The slider element.
 * @attr {Boolean} ondark - DEPRECATED - use `appearance` instead.
 */
export class AuroTabgroup extends LitElement {
  static get properties() {
    return {
      /**
       * Defines whether the component will be on lighter or darker backgrounds.
       * @type {"default" | "inverse" | string}
       * @property {String} appearance
       * @default 'default'
       */
      appearance: {
        type: String,
        reflect: true,
      },

      /**
       * @property {number} scrollPosition - The current scroll position of the tab group container.
       * @default 0
       * @private
       */
      scrollPosition: {
        type: Number,
      },

      /**
       * @property {Boolean} selectOnFocus - Whether or not to select the tab on focus.
       * @default false
       */
      selectOnFocus: {
        type: Boolean,
        reflect: true,
      },

      /**
       * @property {Object} sliderStyles - The styles for the slider element.
       * @default {}
       * @private
       */
      sliderStyles: {
        type: Object,
      },

      /**
       * @property {Boolean} rightChevronIsVisible - Whether or not the right chevron is visible.
       * @default false
       * @private
       */
      rightChevronIsVisible: {
        type: Boolean,
        attribute: false,
        reflect: false,
        default: true,
      },

      /**
       * @property {Boolean} leftChevronIsVisible - Whether or not the left chevron is visible.
       * @default false
       * @private
       */
      leftChevronIsVisible: {
        type: Boolean,
        attribute: false,
        reflect: false,
      },

      /**
       * @property {boolean} ondark - DEPRECATED - use `appearance` instead.
       * @default false
       */
      ondark: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  /**
   * @description All auro-tab elements in the tab group.
   * @returns {Array<AuroTab>}
   * @private
   * @readonly
   */
  get allTabs() {
    return this.tabs.current;
  }

  /**
   * @description All auro-tab elements in the tab group.
   * @returns {Array<AuroTabpanel>}
   * @private
   * @readonly
   */
  get allPanels() {
    return this.panels.current;
  }

  /**
   * @description The index of the currently selected tab.
   * @returns {number}
   * @private
   * @readonly
   */
  get currentTabIndex() {
    return this.focusedTabIdx;
  }

  /**
   * @description Reference to the currently selected tab.
   * @returns {HTMLElement}
   * @private
   * @readonly
   */
  get currentTab() {
    return this.allTabs[this.focusedTabIdx];
  }

  /**
   * @description Getter for tab group container scroll size.
   * @returns {Number}
   * @private
   * @readonly
   */
  get scrollSize() {
    if (this.tabGroupContainer) {
      return (
        this.tabGroupContainer.scrollWidth - this.tabGroupContainer.clientWidth
      );
    }
    return 0;
  }

  /**
   * @description Whether or not the DOM is currently loading/updating elements.
   * @returns {Boolean}
   */
  get busy() {
    return this.getAttribute("aria-busy") === "true";
  }

  set busy(isBusy) {
    this.setAttribute("aria-busy", String(isBusy));
  }

  static get styles() {
    return [styleCss];
  }

  constructor() {
    super();

    this.handleTagName();
    this.setInitialValues();
    this.bindMethods();

    this.tabs = new ChildItemService();
    this.panels = new ChildItemService();

    this.tabs.subscribe(this.#handleTabPanelConnections);
    this.panels.subscribe(this.#handleTabPanelConnections);
  }

  /**
   * @description Handles any custom tag naming of the component.
   * @method handleTagName
   * @private
   */
  handleTagName() {
    AuroLibraryRuntimeUtils.prototype.handleComponentTagRename(
      this,
      "auro-tabgroup",
    );
  }

  /**
   * @description Sets the initial values for the component.
   * @method setInitialValues
   * @private
   */
  setInitialValues() {
    // Dynamic Properties
    this.scrollPosition = 0;
    this.sliderStyles = {};
    this.selectOnFocus = false;
    this.appearance = "default";

    // Static Properties
    /**
     * @property {number} focusedTabIdx - The index of the currently focused tab.
     * @default -1
     * @private
     */
    this.focusedTabIdx = -1;

    /**
     * @property {ResizeObserver} resizeObserver - The resize observer for the tab group.
     * @default undefined
     * @private
     */
    this.resizeObserver = undefined;
  }

  /**
   * @description Binds methods to the class instance where required (do NOT bind all methods).
   * @method bindMethods
   * @private
   */
  bindMethods() {
    this.handleTabSelected = this.handleTabSelected.bind(this);
    this.handleTabFocused = this.handleTabFocused.bind(this);
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

  /**
   * @description Propagates the ondark attribute to child tabs.
   * @method propagateOnDarkToTabs
   * @private
   */
  propagateOnDarkToTabs() {
    this.allTabs.forEach((tab) => {
      if (this.ondark) {
        tab.setAttribute("ondark", "");
      } else {
        tab.removeAttribute("ondark");
      }

      tab.setAttribute("appearance", this.appearance);
    });
  }

  /**
   * Loop through tabs and match with same-index panels.
   * @private
   * @returns {void}
   */
  #associateTabsWithPanels() {
    this.allTabs.forEach((currentTab, i) => {
      const matchingPanel = this.panels.getItemByIndex(i);

      if (!matchingPanel) {
        return;
      }

      // Hide panel
      matchingPanel.hidden = true;

      // Associate tab with the panel, and vice versa
      currentTab.panel = matchingPanel;
      currentTab.setAttribute("aria-controls", matchingPanel.id);
      matchingPanel.setAttribute("aria-labelledby", currentTab.id);

      if (currentTab.selected) {
        this.selectTab(currentTab);
      }
    });
  }

  /**
   * @description Function to add event listeners to the component.
   * @method addEventListeners
   * @private
   */
  addEventListeners() {
    this.addEventListener("tab-selected", this.handleTabSelected);
    this.addEventListener("tab-focused", this.handleTabFocused);
    this.addEventListener("keydown", this.onKeyDown);
    this.addEventListener("click", this.onClick);
  }

  /**
   * @description Function to remove event listeners from the component.
   * @method removeEventListeners
   * @private
   */
  removeEventListeners() {
    this.removeEventListener("keydown", this.onKeyDown);
    this.removeEventListener("click", this.onClick);
    this.resizeObserver?.disconnect();
  }

  /**
   * @description Handler for when an element is added or removed from
   * one of the shadow DOM slots.
   * @private
   */
  #handleTabPanelConnections = () => {
    // Update busy state to reflect changes are happening in the DOM
    this.busy = true;

    this.#associateTabsWithPanels();
    this.propagateOnDarkToTabs();

    // If none of the tabs were set to be focused, focus the first tab
    if (this.focusedTabIdx === -1 && this.allTabs[0]?.panel) {
      this.selectTab(this.allTabs[0]);
    }

    // We are no longer busy making changes
    this.busy = false;
  };

  /**
   * @description Select an auro tab by reference
   * @param {HTMLElement} newTab Selected auro-tab.
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
      console.warn(`No panel with id ${newTab.id}`);
    }
  }

  /**
   * @description Select a tab by its index.
   * @param {number} index - The index of the tab to select.
   */
  selectTabByIndex(index) {
    const tab = this.tabs.current[index];
    if (tab) {
      this.selectTab(tab);
    }
  }

  /**
   * @description Function handler for keyDown event.
   * @private
   * @param {KeyboardEvent} event HTML onkeydown keyboard event.
   */
  onKeyDown(event) {
    // Don’t handle modifier shortcuts typically used by assistive technology.
    if (event.altKey) {
      return;
    }

    // Ignore events from non-tab elements and/or non tablist elements
    const role = event.target.getAttribute("role");
    if (role !== "tab" && role !== "tablist") {
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
        newIdx = TabIndexUtil.getPreviousNotDisabledIndex(
          this.focusedTabIdx,
          tabs,
        );
        break;
      case KEYCODE.RIGHT:
        newIdx = TabIndexUtil.findNextNotDisabledIndex(
          this.focusedTabIdx,
          tabs,
        );
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

    this.focusedTabIdx = newIdx;

    // The browser might have some native functionality bound to the arrow
    // keys, home or end. The element calls `preventDefault()` to prevent the
    // browser from taking any actions.
    event.preventDefault();

    // Focus to the new tab, that has been determined in the switch-case.
    const newTab = tabs[newIdx];

    if (newTab) {
      // Set focus states for tabs
      this.tabs.current.forEach((tab, _index) => {
        tab.setFocused(tab === newTab);
      });

      if (this.selectOnFocus) {
        this.selectTab(newTab);
      }
    }
  }

  /**
   * @description Function handler for click event.
   * @method onClick
   * @param {Event} event HTML click Event.
   * @private
   */
  onClick(event) {
    const roleIsNotTab = event.target.getAttribute("role") !== "tab";
    const closestTab = event.target.closest("[role=tab]");

    // If the click was not targeted on a tab element itself,
    // it was a click inside the a panel or on empty space. Nothing to do.
    // actually this is going to be a known issue for custom auro-tab component name in the future
    if (roleIsNotTab && !closestTab && event.target.localName !== "auro-tab") {
      return;
    }

    if (closestTab) {
      this.selectTab(closestTab);
    } else {
      this.selectTab(event.target);
    }
  }

  /**
   * @description Sets the slider styles for the active tab.
   * @param {Event<tab-selected>} event Dispatched from auro-tab.
   * @private
   */
  handleTabSelected(event) {
    // Set the slider width to zero by default
    this.sliderStyles.width = 0;

    // Get the tab that was focused
    const tab = event.target;

    // Guard Clause: ensure we have a tab to work with
    if (!tab) {
      return;
    }

    // Update the selected tab if it was set externally
    this.selectTab(tab);

    // Update the slider styles based on the tab that was focused
    this.sliderStyles = {
      width: `${tab.clientWidth}px`,
      left: `${tab.offsetLeft - 0.5}px`,
    };
  }

  /**
   * Handles the tab focus event.
   * @param {FocusEvent} event - The focus event.
   * @private
   */
  handleTabFocused(event) {
    const tab = event.target;
    this.focusedTabIdx = this.tabs.current.indexOf(tab) || 0;
  }

  /**
   * @description Function to generate icon based in icon param.
   * @param {string} icon SVG string.
   * @returns {HTMLElement}
   * @private
   */
  generateIcon(icon) {
    const dom = new DOMParser().parseFromString(icon.svg, "text/html");
    return dom.body.firstChild;
  }

  /**
   * @description Function to save the tab group container scroll position state.
   * @method onTabGroupScroll
   * @private
   */
  onTabGroupScroll() {
    this.scrollPosition = this.tabGroupContainer.scrollLeft;
  }

  /**
   * @description Function handler for the scroll button click action.
   * @method scrollTab
   * @param {string} direction Direction of the scroll.
   * @private
   */
  scrollTab(direction) {
    if (this.tabGroupContainer) {
      switch (direction) {
        case "prev":
          if (this.tabGroupContainer.scrollLeft > 0) {
            this.tabGroupContainer.scrollBy({
              left: -this.tabGroupContainer.clientWidth,
              behavior: "smooth",
            });
          }
          break;
        case "next":
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
   * @description Function to set the resize observer for the tab group and set it to observe the tabGroup.
   * @method setResizeObserver
   * @param {HTMLElement} tabGroupContainer The tab group container element.
   * @private
   */
  setResizeObserver(tabGroupContainer) {
    this.resizeObserver = new ResizeObserver(() => {
      this.handleTabSelected({ target: this.currentTab });
    });

    const tabGroup = tabGroupContainer.querySelector(".tabgroup");
    this.resizeObserver.observe(tabGroup, { box: "border-box" });
  }

  /**
   * @description Function to setup the tab group container.
   * @method setupTabGroupContainer
   * @private
   */
  setupTabGroupContainer() {
    this.tabGroupContainer =
      this.shadowRoot.querySelector(".tabgroupContainer");
    this.tabGroupContainer.addEventListener("scroll", () =>
      this.onTabGroupScroll(),
    );
  }

  /**
   * @description Update the chevron visibility when the state of the component changes.
   * @method updateChevronVisibility
   * @private
   */
  updateChevronVisibility() {
    this.leftChevronIsVisible =
      (this.scrollPosition >= this.scrollSize || this.scrollPosition !== 0) &&
      this.scrollSize > 0;
    this.rightChevronIsVisible =
      (this.scrollPosition === 0 || this.scrollPosition < this.scrollSize) &&
      this.scrollSize > 0;
  }

  firstUpdated() {
    this.setupTabGroupContainer();
    this.setResizeObserver(this.tabGroupContainer);
  }

  updated(changedProperties) {
    this.updateChevronVisibility();

    if (
      changedProperties.has("appearance") ||
      changedProperties.has("ondark")
    ) {
      this.propagateOnDarkToTabs();
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListeners();
  }

  disconnectedCallback() {
    this.removeEventListeners();
  }

  /**
   * @private
   */
  #onSlotChange = () => {
    const tabs = this.querySelectorAll("auro-tab, [auro-tab]");
    const panels = this.querySelectorAll("auro-tabpanel, [auro-tabpanel]");

    // Clear previous state
    this.tabs.clear();
    this.panels.clear();

    // Populate new state
    this.tabs.addMany(tabs);
    this.panels.addMany(panels);

    // Connect tabs with panels using child service registrations
    this.#handleTabPanelConnections();
  };

  // function that renders the HTML and CSS into the scope of the component
  render() {
    const sliderStyles = styleMap(this.sliderStyles);

    return html`
      <div part="tabgroup__root" class="tabgroupContainer">
        <div part="tabgroup__tabs" class="tabgroup" role="tablist">
          <slot name="tabs" @slotchange="${this.#onSlotChange}"></slot>
          <div part="slider-positioner" class="sliderPositioner" style=${sliderStyles}>
            <div part="slider" class="slider"></div>
          </div>
        </div>

        <div part="tabgroup__panels">
            <slot name="panels" @slotchange="${this.#onSlotChange}"></slot>
        </div>
      </div>
    `;
  }
}
