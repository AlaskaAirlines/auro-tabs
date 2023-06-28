// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { AuroHyperlink } from "@aurodesignsystem/auro-hyperlink/src/auro-hyperlink.js";

// Import touch detection lib
import styleCss from "./tab-style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-tabpanel element should only be used for auro-tabgroup only.
 *
 */

// build the component class
export class AuroTab extends AuroHyperlink {
  static get styles() {
    return [styleCss];
  }

  firstUpdated() {
    this.setAttribute('role', 'tab');
  }
}

// default internal definition
if (!customElements.get("auro-tab")) {
  customElements.define("auro-tab", AuroTab);
}
