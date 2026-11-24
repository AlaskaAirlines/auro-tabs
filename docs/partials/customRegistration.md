```js
// Import the class only
import { AuroTab, AuroTabgroup, AuroTabpanel } from '@aurodesignsystem/auro-tabs/class';
// Register with a custom name if desired
AuroTab.register('custom-tab');
AuroTabgroup.register('custom-tabgroup');
AuroTabpanel.register('custom-tabpanel');
```

This creates new custom elements `<custom-tabgroup>`, `<custom-tab>`, and `<custom-tabpanel>` that behave the same as `<auro-tabgroup>`, `<auro-tab>`, and `<auro-tabpanel>`. Both sets can coexist on the same page without interfering with each other.
