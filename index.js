import { AuroTabs } from './src/auro-tabs';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
 const registerComponent = (name = 'custom-tabs') => {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroTabs {});
  }
}

export { registerComponent }
