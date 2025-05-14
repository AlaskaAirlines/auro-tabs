import { AuroTab } from "../src/auro-tab";
/* eslint-disable max-classes-per-file */
import { AuroTabgroup } from "../src/auro-tabgroup";
import { AuroTabpanel } from "../src/auro-tabpanel";

import { registerExampleGroup } from "./generatedTabExample";

AuroTabpanel.register();
AuroTab.register();
AuroTabgroup.register();

registerExampleGroup();

/**
 * Register Custom Element with `${prefix}-tab`, `${prefix}-tabgroup` and `${prefix}-tabpanel`.
 * @param {string} prefix - prefix for the names of the custom elements.
 * @returns {void}
 */
const registerAll = (prefix) => {
  AuroTab.register(`${prefix}-tab`);
  AuroTabgroup.register(`${prefix}-tabgroup`);
  AuroTabpanel.register(`${prefix}-tabpanel`);
};

export { AuroTab, AuroTabgroup, AuroTabpanel, registerAll };
