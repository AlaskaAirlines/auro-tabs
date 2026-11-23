<!--
The demo.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/demo.md`
-->

# Tabs

<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/partials/description.md) -->
<!-- The below content is automatically added from ../docs/partials/description.md -->
`auro-tabgroup`, `auro-tab`, and `auro-tabpanel` work together to show one panel of content at a time. Each tab has a matching panel, and activating the tab shows that panel. The tabs sit in a row above the panel.
<!-- AURO-GENERATED-CONTENT:END -->

## Use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ../docs/partials/useCases.md -->
Use `auro-tabgroup` to let people:

* switch between related sections of content without reloading the page or using more space
* browse a large amount of content that you can split into separate sections
<!-- AURO-GENERATED-CONTENT:END -->

### Beta component for Borealis only

Borealis developers can ignore this note.

Default styles aren't supported yet. Consult the Auro engineering and design teams before you use this component.

Because `auro-tab` doesn't have default styling, bring your own styles. Ask your design team or the Auro team for guidance on how to style your tabs.

## Example(s)

### Basic example (unstyled)

The component ships very few default styles. The only ones are focus borders and the active-tab slider color.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basic.html) -->
<!-- The below content is automatically added from ../apiExamples/basic.html -->
<auro-tabgroup variant="unstyled">
<div slot="tabs">
<auro-tab>
        Baggage info
</auro-tab>
<auro-tab>
        Help
</auro-tab>
<auro-tab>
        More
</auro-tab>
<auro-tab>
        No panel
</auro-tab>
</div>
<div slot="panels">
<auro-tabpanel>
<span>Tab 1 content</span>
</auro-tabpanel>
<auro-tabpanel><span>Tab 2 content</span></auro-tabpanel>
<auro-tabpanel><span>Tab 3 content</span></auro-tabpanel>
</div>
</auro-tabgroup>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/basic.html -->

<pre class="language-html"><code class="language-html">&lt;auro-tabgroup variant="unstyled"&gt;
  &lt;div slot="tabs"&gt;
    &lt;auro-tab&gt;
      Baggage info
    &lt;/auro-tab&gt;
    &lt;auro-tab&gt;
      Help
    &lt;/auro-tab&gt;
    &lt;auro-tab&gt;
      More
    &lt;/auro-tab&gt;
    &lt;auro-tab&gt;
      No panel
    &lt;/auro-tab&gt;
  &lt;/div&gt;
  &lt;div slot="panels"&gt;
    &lt;auro-tabpanel&gt;
      &lt;span&gt;Tab 1 content&lt;/span&gt;
    &lt;/auro-tabpanel&gt;
    &lt;auro-tabpanel&gt;&lt;span&gt;Tab 2 content&lt;/span&gt;&lt;/auro-tabpanel&gt;
    &lt;auro-tabpanel&gt;&lt;span&gt;Tab 3 content&lt;/span&gt;&lt;/auro-tabpanel&gt;
  &lt;/div&gt;
&lt;/auro-tabgroup&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Custom tab content

`auro-tab` also supports rich content. Instead of plain text, use HTML markup that fits your design spec. `auro-tabgroup` exposes two CSS parts for custom sliders (the active indicator): `slider` and its parent, `slider-positioner`.

Note: The JavaScript never overwrites your CSS for `slider`. It does set the `width` and `left` properties of `slider-positioner` to position the slider, so it overwrites any values you set for them.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/custom-content.html) -->
<!-- The below content is automatically added from ../apiExamples/custom-content.html -->
<i>
    This example is intended to mimic the new Borealis tab implementation
    for the homepage design.
</i>
<auro-tabgroup variant="unstyled" id="custom-tab-example">
<div slot="tabs">
<auro-tab class="custom-tab">
<div class="custom-tab-content">
<span>Flights</span>
<span role="img" aria-label="airplane emoji">✈️</span>
</div>
</auro-tab>
<auro-tab class="custom-tab">
<div class="custom-tab-content">
<span>Rentals</span>
<span role="img" aria-label="car emoji">🚗</span>
</div>
</auro-tab>
</div>
<div class="custom-panel-wrapper" slot="panels">
<auro-tabpanel>
<span>Tab 1 content</span>
</auro-tabpanel>
<auro-tabpanel>
<span>Tab 2 content</span>
<!-- a radio group -->
<auro-radio-group horizontal>
<span slot="legend">Payment method</span>
<auro-radio id="basicGroupRadio1" label="Credit or debit card" name="creditordebit" value="credit"></auro-radio>
<auro-radio id="basicGroupRadio2" label="Apple Pay" name="applePay" value="applePay"></auro-radio>
<auro-radio id="basicGroupRadio3" label="Alaska Airlines commercial account" name="alaskaCommercial" value="alaskaCommercial"></auro-radio>
</auro-radio-group>
</auro-tabpanel>
</div>
</auro-tabgroup>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/custom-content.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/custom-content.html -->

<pre class="language-html"><code class="language-html">&lt;i&gt;
  This example is intended to mimic the new Borealis tab implementation
  for the homepage design.
&lt;/i&gt;
&#10;&lt;auro-tabgroup variant="unstyled" id="custom-tab-example"&gt;
  &lt;div slot="tabs"&gt;
    &lt;auro-tab class="custom-tab"&gt;
      &lt;div class="custom-tab-content"&gt;
        &lt;span&gt;Flights&lt;/span&gt;
        &lt;span role="img" aria-label="airplane emoji"&gt;✈️&lt;/span&gt;
      &lt;/div&gt;
    &lt;/auro-tab&gt;
    &lt;auro-tab class="custom-tab"&gt;
      &lt;div class="custom-tab-content"&gt;
        &lt;span&gt;Rentals&lt;/span&gt;
        &lt;span role="img" aria-label="car emoji"&gt;🚗&lt;/span&gt;
      &lt;/div&gt;
    &lt;/auro-tab&gt;
  &lt;/div&gt;
  &lt;div class="custom-panel-wrapper" slot="panels"&gt;
    &lt;auro-tabpanel&gt;
      &lt;span&gt;Tab 1 content&lt;/span&gt;
    &lt;/auro-tabpanel&gt;
    &lt;auro-tabpanel&gt;
      &lt;span&gt;Tab 2 content&lt;/span&gt;
&#10;      &lt;!-- a radio group --&gt;
      &lt;auro-radio-group horizontal&gt;
        &lt;span slot="legend"&gt;Payment method&lt;/span&gt;
        &lt;auro-radio id="basicGroupRadio1" label="Credit or debit card" name="creditordebit" value="credit"&gt;&lt;/auro-radio&gt;
        &lt;auro-radio id="basicGroupRadio2" label="Apple Pay" name="applePay" value="applePay"&gt;&lt;/auro-radio&gt;
        &lt;auro-radio id="basicGroupRadio3" label="Alaska Airlines commercial account" name="alaskaCommercial" value="alaskaCommercial"&gt;&lt;/auro-radio&gt;
      &lt;/auro-radio-group&gt;
    &lt;/auro-tabpanel&gt;
  &lt;/div&gt;
&lt;/auro-tabgroup&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
CSS used in the example above:

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/custom-content.css) -->
<!-- The below code snippet is automatically added from ../apiExamples/custom-content.css -->

<pre class="language-css"><code class="language-css">/* hover style example */
.custom-tab:hover,
.custom-tab:focus-within,
.custom-tab:focus:not(:focus-visible) {
  background: #7f7f7f22;
}
&#10;/* :before renders the focus outline, modify this to match your designs */
.custom-tab:focus-within:before,
.custom-tab:focus:not(:focus-visible):before {
  border-color: #c21f39;
}
&#10;/* [selected] attribute can be used to apply styles to current tab */
.custom-tab[selected] {
  font-weight: 700;
}
&#10;.custom-tab-content {
  display: flex;
&#10;  /* explicit width important for modifying active styles */
  width: 60px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px 15px 10px;
}
&#10;#custom-tab-example::part(tabgroup__panels) {
  overflow: hidden;
  border: 1px solid #22222245;
  border-radius: 1rem;
  margin-top: 1rem;
}
&#10;#custom-tab-example::part(slider) {
  width: 20px;
  height: 5px;
  border-radius: 1rem;
  margin-top: -3px;
}
&#10;/* below code shows how to visually hide the slider */
&#10;/* #custom-tab-example::part(slider) {
  width: 0;
  height: 0;
} */
&#10;.custom-panel-wrapper {
  padding: 1rem;
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->

## Generated (looped) tab groups

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/example-tab-group.html) -->
<!-- The below content is automatically added from ../apiExamples/example-tab-group.html -->
<example-group-test></example-group-test>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/example-tab-group.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/example-tab-group.html -->

<pre class="language-html"><code class="language-html">&lt;example-group-test&gt;&lt;/example-group-test&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Accessibility

### Tab role

The tab list has the `tablist` role, each `auro-tab` has the `tab` role, and each `auro-tabpanel` has the `tabpanel` role. Keyboard users move between tabs with the left and right arrow keys, `Home`, and `End`, and select a tab with `Enter` or `Space`.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/role.html) -->
<!-- The below content is automatically added from ../apiExamples/role.html -->
<auro-tabgroup variant="unstyled">
<div slot="tabs">
<auro-tab>
        Baggage info
</auro-tab>
<auro-tab>
        Help
</auro-tab>
<auro-tab>
        More
</auro-tab>
<auro-tab disabled>
        Disabled
</auro-tab>
<auro-tab>
        No panel
</auro-tab>
</div>
<div slot="panels">
<auro-tabpanel>
<span>Tab 1 content</span>
</auro-tabpanel>
<auro-tabpanel><span><a href="https://www.google.com">Tab 2 content</a></span></auro-tabpanel>
<auro-tabpanel><span>Tab 3 content</span></auro-tabpanel>
<auro-tabpanel><span>Disabled content</span></auro-tabpanel>
</div>
</auro-tabgroup>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/role.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/role.html -->

<pre class="language-html"><code class="language-html">&lt;auro-tabgroup variant="unstyled"&gt;
  &lt;div slot="tabs"&gt;
    &lt;auro-tab&gt;
      Baggage info
    &lt;/auro-tab&gt;
    &lt;auro-tab&gt;
      Help
    &lt;/auro-tab&gt;
    &lt;auro-tab&gt;
      More
    &lt;/auro-tab&gt;
    &lt;auro-tab disabled&gt;
      Disabled
    &lt;/auro-tab&gt;
    &lt;auro-tab&gt;
      No panel
    &lt;/auro-tab&gt;
  &lt;/div&gt;
  &lt;div slot="panels"&gt;
    &lt;auro-tabpanel&gt;
      &lt;span&gt;Tab 1 content&lt;/span&gt;
    &lt;/auro-tabpanel&gt;
    &lt;auro-tabpanel&gt;&lt;span&gt;&lt;a href="https://www.google.com"&gt;Tab 2 content&lt;/a&gt;&lt;/span&gt;&lt;/auro-tabpanel&gt;
    &lt;auro-tabpanel&gt;&lt;span&gt;Tab 3 content&lt;/span&gt;&lt;/auro-tabpanel&gt;
    &lt;auro-tabpanel&gt;&lt;span&gt;Disabled content&lt;/span&gt;&lt;/auro-tabpanel&gt;
  &lt;/div&gt;
&lt;/auro-tabgroup&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Recommended use and version control

Every Auro component has two important parts: the [class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) and the custom element. The class is exported and then used to define the web component. When you import this component as described in the [install](#install) section, the class is imported and the `auro-tabgroup`, `auro-tab`, and `auro-tabpanel` custom elements are defined automatically.

To avoid version conflicts with other copies of the component on the page, use the `register(name)` method with a unique name.

<pre class="language-js"><code class="language-js">import { AuroTab, AuroTabgroup, AuroTabpanel } from '@aurodesignsystem/auro-tabs/class';
AuroTab.register('custom-tab');
AuroTabgroup.register('custom-tabgroup');
AuroTabpanel.register('custom-tabpanel');</code></pre>

This creates three new custom elements that work the same as `auro-tabgroup`, `auro-tab`, and `auro-tabpanel`, so you can use them in your HTML.

<div class="exampleWrapper">
<custom-tabgroup variant="unstyled">
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

<pre class="language-html"><code class="language-html">&lt;custom-tabgroup variant="unstyled"&gt;
    &lt;div slot="tabs"&gt;
      &lt;custom-tab&gt;
        Baggage info
      &lt;/custom-tab&gt;
      &lt;custom-tab&gt;
        Help
      &lt;/custom-tab&gt;
      &lt;custom-tab&gt;
        More
      &lt;/custom-tab&gt;
      &lt;custom-tab&gt;
        No panel
      &lt;/custom-tab&gt;
    &lt;/div&gt;
    &lt;div slot="panels"&gt;
      &lt;custom-tabpanel&gt;
        &lt;span&gt;Tab 1 content&lt;/span&gt;
      &lt;/custom-tabpanel&gt;
      &lt;custom-tabpanel&gt;&lt;span&gt;Tab 2 content&lt;/span&gt;&lt;/custom-tabpanel&gt;
      &lt;custom-tabpanel&gt;&lt;span&gt;Tab 3 content&lt;/span&gt;&lt;/custom-tabpanel&gt;
    &lt;/div&gt;
  &lt;/custom-tabgroup&gt;</code></pre>
</auro-accordion>
