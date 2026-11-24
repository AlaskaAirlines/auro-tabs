<!--
The demo.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/demo.md`
-->

# Tabs

<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/partials/description.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/partials/useCases.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

### Beta component for Borealis only

Borealis developers can ignore this note.

Default styles aren't supported yet. Consult the Auro engineering and design teams before you use this component.

Because the component ships very few default styles, bring your own styles. Ask your design team or the Auro team for guidance on how to style your tabs.

## Examples

### Basic example (unstyled)

The component ships very few default styles, mainly focus borders and the active-tab slider color.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Custom tab content

`auro-tab` also supports rich content. Instead of plain text, use HTML markup that fits your design spec. `auro-tabgroup` exposes two CSS parts for custom sliders (the active indicator): `slider` and its parent, `slider-positioner`.

Note: The JavaScript never overwrites your CSS for `slider`. It does set the `width` and `left` properties of `slider-positioner` to position the slider, so it overwrites any values you set for them.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/custom-content.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/custom-content.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

CSS used in the example above:

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/custom-content.css) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Generated (looped) tab groups

When you don't know how many tabs you need until runtime, build the tabs and panels in a loop. `example-group-test` is a demo-only Lit component, and the code below shows how it renders the tabs and panels.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/example-tab-group.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/example-tab-group.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../demo/generatedTabExample.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Accessibility

### Tab role

The tab list has the `tablist` role, each `auro-tab` has the `tab` role, and each `auro-tabpanel` has the `tabpanel` role. Keyboard users move between tabs with the left and right arrow keys, `Home`, and `End`, and select a tab with `Enter` or `Space`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/role.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/role.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Recommended use and version control

Every Auro component has two important parts: the [class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) and the custom element. The class is exported and then used to define the web component. When you install the component as described in the README, the class is imported and the `auro-tabgroup`, `auro-tab`, and `auro-tabpanel` custom elements are defined automatically.

To avoid version conflicts with other copies of the component on the page, use the `register(name)` method with a unique name.

```js
import { AuroTab, AuroTabgroup, AuroTabpanel } from '@aurodesignsystem/auro-tabs/class';
AuroTab.register('custom-tab');
AuroTabgroup.register('custom-tabgroup');
AuroTabpanel.register('custom-tabpanel');
```

This creates three new custom elements that work the same as `auro-tabgroup`, `auro-tab`, and `auro-tabpanel`, so you can use them in your HTML.

<div class="exampleWrapper">
  <custom-tabgroup>
    <div slot="tabs">
      <custom-tab>
        Baggage info
      </custom-tab>
      <custom-tab>
        Help
      </custom-tab>
      <custom-tab>
        More
      </custom-tab>
      <custom-tab>
        No panel
      </custom-tab>
    </div>
    <div slot="panels">
      <custom-tabpanel>
        <span>Tab 1 content</span>
      </custom-tabpanel>
      <custom-tabpanel><span>Tab 2 content</span></custom-tabpanel>
      <custom-tabpanel><span>Tab 3 content</span></custom-tabpanel>
    </div>
  </custom-tabgroup>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<custom-tabgroup>
    <div slot="tabs">
      <custom-tab>
        Baggage info
      </custom-tab>
      <custom-tab>
        Help
      </custom-tab>
      <custom-tab>
        More
      </custom-tab>
      <custom-tab>
        No panel
      </custom-tab>
    </div>
    <div slot="panels">
      <custom-tabpanel>
        <span>Tab 1 content</span>
      </custom-tabpanel>
      <custom-tabpanel><span>Tab 2 content</span></custom-tabpanel>
      <custom-tabpanel><span>Tab 3 content</span></custom-tabpanel>
    </div>
  </custom-tabgroup>
```
</auro-accordion>

