import { AuroTab } from "../../src/auro-tab.js";

/**
 * Represents a tab within an auro-tabgroup element. When selected, displays the corresponding AuroTabpanel.
 * The auro-tabpanel element should only be used inside an AuroTabgroup element.
 */
class AuroTabWCA extends AuroTab {}

if (!customElements.get("auro-tab")) {
  customElements.define("auro-tab", AuroTabWCA);
}
