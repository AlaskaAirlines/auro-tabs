import { AuroTab } from "../../src/auro-tab.js";

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
class AuroTabWCA extends AuroTab {}

if (!customElements.get("auro-tab")) {
  customElements.define("auro-tab", AuroTabWCA);
}
