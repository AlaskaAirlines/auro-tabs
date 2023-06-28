<!--
The demo.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/demo.md`
-->

# Tabs

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## auro-tabs use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom clement. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-tabs` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `registerComponent(name)` method and pass in a unique name.

```js
import './node_modules/@alaskaairux/auro-tabgroup';
registerComponent('custom-tabgroup');
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-tabs` element.

<div class="exampleWrapper">
  <custom-tabgroup class="compact-default">
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      Baggage Info
    </auro-tab>
    <auro-tabpanel slot="panel">
      <span>Tab 1 Content</span>
    </auro-tabpanel>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      Help
    </auro-tab>
    <auro-tabpanel slot="panel"><span>Tab 2 Content</span></auro-tabpanel>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      More
    </auro-tab>
    <auro-tabpanel slot="panel"><span>Tab 3 Content</span></auro-tabpanel>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      No Panel
    </auro-tab>
  </custom-tabgroup>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<custom-tabgroup class="compact-default">
  <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
    Baggage Info
  </auro-tab>
  <auro-tabpanel slot="panel">
    <span>Tab 1 Content</span>
  </auro-tabpanel>
  <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
    Help
  </auro-tab>
  <auro-tabpanel slot="panel"><span>Tab 2 Content</span></auro-tabpanel>
  <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
    More
  </auro-tab>
  <auro-tabpanel slot="panel"><span>Tab 3 Content</span></auro-tabpanel>
  <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
    No Panel
  </auro-tab>
</custom-tabgroup>
```
</auro-accordion>
