import { AuroTabgroup } from "../../src/auro-tabgroup.js";

/**
 * Groups tabs and panels so that one panel shows at a time.
 *
 * **Key capabilities**
 * - **Selects on focus**: Set `selectonfocus` to select a tab as soon as the arrow keys, `Home`, or `End` move focus to it.
 * - **Adapts to dark backgrounds**: Set `appearance="inverse"` to restyle the tabs for dark backgrounds.
 * - **Keyboard navigation**: Always on. The left and right arrow keys, `Home`, and `End` move between tabs.
 *
 * **Example**
 * ```html
 * <auro-tabgroup>
 *   <div slot="tabs">
 *     <auro-tab>First tab</auro-tab>
 *     <auro-tab>Second tab</auro-tab>
 *   </div>
 *   <div slot="panels">
 *     <auro-tabpanel>First panel</auro-tabpanel>
 *     <auro-tabpanel>Second panel</auro-tabpanel>
 *   </div>
 * </auro-tabgroup>
 * ```
 *
 * @summary An accessible group of tabs and panels, with keyboard navigation and a sliding indicator.
 */
class AuroTabgroupWCA extends AuroTabgroup {}

if (!customElements.get("auro-tabgroup")) {
  customElements.define("auro-tabgroup", AuroTabgroupWCA);
}
