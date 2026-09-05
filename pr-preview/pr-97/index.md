<!--
The demo.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/demo.md`
-->

# Tabs

<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/partials/description.md) -->
<!-- The below content is automatically added from ../docs/partials/description.md -->
`<auro-tabs>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of showing a set of layered sections of content, known as tab panels, that display one panel of content at a time. Each tab panel has an associated tab element, that when activated, displays the panel. The list of tab elements is arranged along one edge of the currently displayed panel, most commonly the top edge.
<!-- AURO-GENERATED-CONTENT:END -->

## auro-tabs use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ../docs/partials/useCases.md -->
The `<auro-tabs>` element should be used in situations where users:

* show a list of content without reloading the page or compromising on space
* need to organize large amount of content that can be separated
<!-- AURO-GENERATED-CONTENT:END -->

### BETA COMPONENT, BOREALIS USE ONLY
Borealis developers please ignore this message!

Default styles are NOT SUPPORTED AT THE TIME OF PUBLICATION :) DO NOT USE THIS WITHOUT CONSULTING THE AURO ENGINEERING AND DESIGN TEAM(S).

As Auro-Tab does not currently have default styling, you are expected to bring your own styles. Please consult your design team
and/or the Auro team for guidance on how to style your tabs.

## Example(s)

### Basic example (unstyled)

We include very few default styles at the time of writing. The only styles we actively
ship are focus borders and active-tab slider colors.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ../apiExamples/basic.html -->
  <auro-tabgroup variant="unstyled">
    <div slot="tabs">
      <auro-tab>
        Baggage Info
      </auro-tab>
      <auro-tab>
        Help
      </auro-tab>
      <auro-tab>
        More
      </auro-tab>
      <auro-tab>
        No Panel
      </auro-tab>
    </div>
    <div slot="panels">
      <auro-tabpanel>
        <span>Tab 1 Content</span>
      </auro-tabpanel>
      <auro-tabpanel><span>Tab 2 Content</span></auro-tabpanel>
      <auro-tabpanel><span>Tab 3 Content</span></auro-tabpanel>
    </div>
  </auro-tabgroup>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/basic.html -->

```html
<auro-tabgroup variant="unstyled">
  <div slot="tabs">
    <auro-tab>
      Baggage Info
    </auro-tab>
    <auro-tab>
      Help
    </auro-tab>
    <auro-tab>
      More
    </auro-tab>
    <auro-tab>
      No Panel
    </auro-tab>
  </div>
  <div slot="panels">
    <auro-tabpanel>
      <span>Tab 1 Content</span>
    </auro-tabpanel>
    <auro-tabpanel><span>Tab 2 Content</span></auro-tabpanel>
    <auro-tabpanel><span>Tab 3 Content</span></auro-tabpanel>
  </div>
</auro-tabgroup>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Custom tab content

Auro tab also supports rich content inside a tab. Instead of passing simple text, use html markup as needed to fit
your design spec. The wrapper `auro-tabgroup` also exposes two css parts for custom sliders (active indicator) -
`slider` and the parent `slider-positioner`.

Note: `slider` css is not overwritten by the JavaScript logic, while `slider-positioner` **width** and **left** properties
are used internally to position the slider and will be automatically overwritten.

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
        <span>Tab 1 Content</span>
      </auro-tabpanel>
      <auro-tabpanel>
        <span>Tab 2 Content</span>
        <!-- a radio group -->
        <auro-radio-group horizontal>
          <span slot="legend">Accordion Test</span>
          <auro-radio id="basicGroupRadio1" label="Credit or debit card" name="creditordebit" value="credit"></auro-radio>
          <auro-radio id="basicGroupRadio2" label="Apple Pay" name="applePay" value="applePay"></auro-radio>
          <auro-radio id="basicGroupRadio3" label="Alaska Airlines Commercial Account" name="alaskaCommercial" value="alaskaCommercial"></auro-radio>
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

```html
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
      <span>Tab 1 Content</span>
    </auro-tabpanel>
    <auro-tabpanel>
      <span>Tab 2 Content</span>
      <!-- a radio group -->
      <auro-radio-group horizontal>
        <span slot="legend">Accordion Test</span>
        <auro-radio id="basicGroupRadio1" label="Credit or debit card" name="creditordebit" value="credit"></auro-radio>
        <auro-radio id="basicGroupRadio2" label="Apple Pay" name="applePay" value="applePay"></auro-radio>
        <auro-radio id="basicGroupRadio3" label="Alaska Airlines Commercial Account" name="alaskaCommercial" value="alaskaCommercial"></auro-radio>
      </auro-radio-group>
    </auro-tabpanel>
  </div>
</auro-tabgroup>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
CSS used in the example above:

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/custom-content.css) -->
<!-- The below code snippet is automatically added from ../apiExamples/custom-content.css -->

```css
/* hover style example */
.custom-tab:hover,
.custom-tab:focus-within,
.custom-tab:focus:not(:focus-visible) {
  background: #7f7f7f22;
}

/* :before renders the focus outline, modify this to match your designs */
.custom-tab:focus-within:before,
.custom-tab:focus:not(:focus-visible):before {
  border-color: #c21f39;
}

/* [selected] attribute can be used to apply styles to current tab */
.custom-tab[selected] {
  font-weight: 700;
}

.custom-tab-content {
  display: flex;

  /* explicit width important for modifying active styles */
  width: 60px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px 15px 10px;
}

#custom-tab-example::part(tabgroup__panels) {
  overflow: hidden;
  border: 1px solid #22222245;
  border-radius: 1rem;
  margin-top: 1rem;
}

#custom-tab-example::part(slider) {
  width: 20px;
  height: 5px;
  border-radius: 1rem;
  margin-top: -3px;
}

/* below code shows how to visually hide the slider */

/* #custom-tab-example::part(slider) {
  width: 0;
  height: 0;
} */

.custom-panel-wrapper {
  padding: 1rem;
}
```
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

```html
<example-group-test></example-group-test>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Accessibility

### Tab Role

Each of `auro-tabgroup`, `auro-tab`, and `auro-tabpanel` have predefined role as tablist, button, or tabpanel. Except for auro-tab which is an extension of `auro-hyperlink`. If `href` property is defined, then the `auro-tab` role is not set.

Q: Why `auro-tab`'s role assigned as 'button' instead of 'tab' ?

A: Because auro-tab is currently extends the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink) component,  it is either to be rendered as `<a>` element or return as its given slot. The element needs to be a [focusable element](https://allyjs.io/data-tables/focusable.html), and left & right arrow can be used to navigate through the tab items, for that reason we give it role 'button'.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/role.html) -->
  <!-- The below content is automatically added from ../apiExamples/role.html -->
  <auro-tabgroup variant="unstyled">
    <div slot="tabs">
      <auro-tab>
        Baggage Info
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
        No Panel
      </auro-tab>
    </div>
    <div slot="panels">
      <auro-tabpanel>
        <span>Tab 1 Content</span>
      </auro-tabpanel>
      <auro-tabpanel><span><a href="https://www.google.com">Tab 2 Content</a></span></auro-tabpanel>
      <auro-tabpanel><span>Tab 3 Content</span></auro-tabpanel>
      <auro-tabpanel><span>Disabled Content</span></auro-tabpanel>
    </div>
  </auro-tabgroup>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/role.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/role.html -->

```html
<auro-tabgroup variant="unstyled">
  <div slot="tabs">
    <auro-tab>
      Baggage Info
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
      No Panel
    </auro-tab>
  </div>
  <div slot="panels">
    <auro-tabpanel>
      <span>Tab 1 Content</span>
    </auro-tabpanel>
    <auro-tabpanel><span><a href="https://www.google.com">Tab 2 Content</a></span></auro-tabpanel>
    <auro-tabpanel><span>Tab 3 Content</span></auro-tabpanel>
    <auro-tabpanel><span>Disabled Content</span></auro-tabpanel>
  </div>
</auro-tabgroup>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom clement. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-tabs` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `register(name)` method and pass in a unique name.

```js
import { AuroTab, AuroTabgroup, AuroTabpanel } '@aurodesignsystem/auro-tabs';

AuroTab.register('custom-tab');
AuroTabgroup.register('custom-tabgroup');
AuroTabpanel.register('custom-tabpanel');
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-tabgroup` element.

<div class="exampleWrapper">
  <custom-tabgroup variant="unstyled">
    <div slot="tabs">
      <custom-tab>
        Baggage Info
      </custom-tab>
      <custom-tab>
        Help
      </custom-tab>
      <custom-tab>
        More
      </custom-tab>
      <custom-tab>
        No Panel
      </custom-tab>
    </div>
    <div slot="panels">
      <custom-tabpanel>
        <span>Tab 1 Content</span>
      </custom-tabpanel>
      <custom-tabpanel><span>Tab 2 Content</span></custom-tabpanel>
      <custom-tabpanel><span>Tab 3 Content</span></custom-tabpanel>
    </div>
  </custom-tabgroup>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<custom-tabgroup variant="unstyled">
    <div slot="tabs">
      <custom-tab>
        Baggage Info
      </custom-tab>
      <custom-tab>
        Help
      </custom-tab>
      <custom-tab>
        More
      </custom-tab>
      <custom-tab>
        No Panel
      </custom-tab>
    </div>
    <div slot="panels">
      <custom-tabpanel>
        <span>Tab 1 Content</span>
      </custom-tabpanel>
      <custom-tabpanel><span>Tab 2 Content</span></custom-tabpanel>
      <custom-tabpanel><span>Tab 3 Content</span></custom-tabpanel>
    </div>
  </custom-tabgroup>
```
</auro-accordion>
