import { AuroTabpanel } from "../../src/auro-tabpanel.js";

/**
 * The content that shows when its matching tab is selected. Use it only inside an `auro-tabgroup`.
 *
 * **Key capabilities**
 * - **Hides when its tab isn't selected**: The tab group sets `hidden` on every panel except the selected one.
 * - **Reachable by keyboard**: A visible panel is always in the keyboard tab order.
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
 * @summary An accessible panel that shows when its matching tab is selected.
 */
class AuroTabpanelWCA extends AuroTabpanel {}

if (!customElements.get("auro-tabpanel")) {
  customElements.define("auro-tabpanel", AuroTabpanelWCA);
}
