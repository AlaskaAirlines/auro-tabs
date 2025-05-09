import { AuroTabgroup } from "../../src/auro-tabgroup.js";

/**
 * The auro-tabgroup element is a container element for tabs and panels.
 * All children of `<auro-tabgroup>` should be either `<auro-tab>` or
 * `<auro-tabpanel>`. This element is stateless, meaning that no values are
 * cached and therefore, changes during runtime work.
 */
class AuroTabgroupWCA extends AuroTabgroup {}

if (!customElements.get("auro-tabgroup")) {
  customElements.define("auro-tabgroup", AuroTabgroupWCA);
}
