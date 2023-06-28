/* eslint-disable max-classes-per-file */
import { AuroTabgroup } from './src/auro-tabgroup';
import { AuroTab } from './src/auro-tab';
import { AuroTabpanel } from './src/auro-tabpanel';

/**
 * Register Custom Element.
 * @param {string} name - Name to use for custom element.
 * @param {string} type - Type of custom tabs element.
 * @returns {void}
 */
const registerComponent = (name = 'custom-tabgroup', type = 'group') => {
  // alias definition
  if (!customElements.get(name)) {
    switch (type) {
      case 'tab':
        customElements.define(name, class extends AuroTab {});
        break;
      case 'panel':
        customElements.define(name, class extends AuroTabpanel {});
        break;
      case 'group':
      default:
        customElements.define(name, class extends AuroTabgroup {});
        break;
    }
  }
};

export { registerComponent };
