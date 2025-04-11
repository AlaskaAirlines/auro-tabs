
import { AuroTabpanel } from '../../src/auro-tabpanel.js';

/**
 * The auro-tabpanel element should only be used for auro-tabs only.
 */
class AuroTabpanelWCA extends AuroTabpanel {}

if (!customElements.get("auro-tabpanel")) {
  customElements.define("auro-tabpanel", AuroTabpanelWCA);
}
