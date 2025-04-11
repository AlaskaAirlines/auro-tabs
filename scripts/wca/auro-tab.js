
import { AuroTab } from '../../src/auro-tab.js';

/**
 * The auro-tabpanel element should only be used for auro-tabgroup only.
 */
class AuroTabWCA extends AuroTab {}

if (!customElements.get("auro-tab")) {
  customElements.define("auro-tab", AuroTabWCA);
}
