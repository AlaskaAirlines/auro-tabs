
import { AuroTabpanel } from '../../src/auro-tabpanel.js';

/**
 * Represents a panel to be displayed when the corresponding tab is selected in an AuroTabgroup element.
 * The auro-tabpanel element should only be used inside an AuroTabgroup element.
 */
class AuroTabpanelWCA extends AuroTabpanel {}

if (!customElements.get("auro-tabpanel")) {
  customElements.define("auro-tabpanel", AuroTabpanelWCA);
}
