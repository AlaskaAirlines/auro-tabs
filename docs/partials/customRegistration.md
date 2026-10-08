```js
// Import the class only
import { AuroTab, AuroTabgroup, AuroTabpanel } from '@aurodesignsystem/auro-tabs/class';
// Register with a custom name if desired
AuroTab.register('custom-tab');
AuroTabgroup.register('custom-tabgroup');
AuroTabpanel.register('custom-tabpanel');
```

This will create new custom elements `<custom-tabgroup>`, `<custom-tab>` and `<custom-tabpanel>` that behave exactly like `<auro-tabgroup>`, `<auro-tab>` and `<auro-tabpanel>`, allowing both to coexist on the same page without interfering with each other.
