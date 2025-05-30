<!--
The demo.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/demo.md`
-->

# Tabs

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- The below content is automatically added from ./description.md -->
`<auro-tabs>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of showing a set of layered sections of content, known as tab panels, that display one panel of content at a time. Each tab panel has an associated tab element, that when activated, displays the panel. The list of tab elements is arranged along one edge of the currently displayed panel, most commonly the top edge.
<!-- AURO-GENERATED-CONTENT:END -->

## auro-tabs use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- The below content is automatically added from ./useCases.md -->
The `<auro-tabs>` element should be used in situations where users:

* show a list of content without reloading the page or compromising on space
* need to organize large amount of content that can be separated
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

## Default

`auro-tabpanel` needs to be defined directly after `auro-tab` so that it can be paired.
If there is a use-case where a tab doesn't have a tabpanel, then leave the tabpanel undefined.
Example below:

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-tabgroup>
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
  </auro-tabgroup>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-tabgroup>
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
</auro-tabgroup>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## States

There are five states which `auro-tabs` supported:
- default
- hover
- focus
- selected
- disabled

Try hover & focus state by forcing the `<a>` element state inside auro-tab with css styles console.

Selected and Disabled state can be set directly with property: `selected` or `disabled` to the auro-tab itself.
Although, `selected` is automatically added on tab clicked.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/states.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/states.html -->
  <auro-tabgroup>
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
    <auro-tab disabled href="#/" relative="http://localhost:8000/demo" slot="tab">
      Disabled
    </auro-tab>
    <auro-tabpanel slot="panel"><span>Disabled Content</span></auro-tabpanel>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      No Panel
    </auro-tab>
  </auro-tabgroup>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/states.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/states.html -->

```html
<auro-tabgroup>
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
  <auro-tab disabled href="#/" relative="http://localhost:8000/demo" slot="tab">
    Disabled
  </auro-tab>
  <auro-tabpanel slot="panel"><span>Disabled Content</span></auro-tabpanel>
  <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
    No Panel
  </auro-tab>
</auro-tabgroup>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Scroll behaviour

`auro-tabs` in desktop breakpoint (>=768px) will show a button in left & right side, when the number of `auro-tab` exceeds the container size. In mobile breakpoint (<767px), it will normally show a browser scrollbar under the tabgroup.

Example below:

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/scroll.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/scroll.html -->
  <auro-tabgroup>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      Baggage Info
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      Help
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      More
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      More 2
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      More 3
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      More 4
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      More 5
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      More 6
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      More 7
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      More 8
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      More 9
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      More 10
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      More 11
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      More 12
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      More 13
    </auro-tab>
    <auro-tab disabled href="#/" relative="http://localhost:8000/demo" slot="tab">
      Disabled
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      No Panel
    </auro-tab>
  </auro-tabgroup>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/scroll.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/scroll.html -->

```html
<auro-tabgroup>
  <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
    Baggage Info
  </auro-tab>
  <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
    Help
  </auro-tab>
  <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
    More
  </auro-tab>
  <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
    More 2
  </auro-tab>
  <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
    More 3
  </auro-tab>
  <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
    More 4
  </auro-tab>
  <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
    More 5
  </auro-tab>
  <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
    More 6
  </auro-tab>
  <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
    More 7
  </auro-tab>
  <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
    More 8
  </auro-tab>
  <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
    More 9
  </auro-tab>
  <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
    More 10
  </auro-tab>
  <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
    More 11
  </auro-tab>
  <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
    More 12
  </auro-tab>
  <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
    More 13
  </auro-tab>
  <auro-tab disabled href="#/" relative="http://localhost:8000/demo" slot="tab">
    Disabled
  </auro-tab>
  <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
    No Panel
  </auro-tab>
</auro-tabgroup>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Container width: 400px

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/scroll-400.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/scroll-400.html -->
  <div style="width: 400px;">
    <auro-tabgroup>
      <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
        Baggage Info
      </auro-tab>
      <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
        Help
      </auro-tab>
      <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
        More
      </auro-tab>
      <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
        More 2
      </auro-tab>
      <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
        More 3
      </auro-tab>
      <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
        More 4
      </auro-tab>
      <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
        More 5
      </auro-tab>
      <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
        More 6
      </auro-tab>
      <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
        More 7
      </auro-tab>
      <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
        More 8
      </auro-tab>
      <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
        More 9
      </auro-tab>
      <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
        More 10
      </auro-tab>
      <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
        More 11
      </auro-tab>
      <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
        More 12
      </auro-tab>
      <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
        More 13
      </auro-tab>
      <auro-tab disabled href="#/" relative="http://localhost:8000/demo" slot="tab">
        Disabled
      </auro-tab>
      <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
        No Panel
      </auro-tab>
    </auro-tabgroup>
  </div>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/scroll-400.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/scroll-400.html -->

```html
<div style="width: 400px;">
  <auro-tabgroup>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      Baggage Info
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      Help
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      More
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      More 2
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      More 3
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      More 4
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      More 5
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      More 6
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      More 7
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      More 8
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      More 9
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      More 10
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      More 11
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      More 12
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      More 13
    </auro-tab>
    <auro-tab disabled href="#/" relative="http://localhost:8000/demo" slot="tab">
      Disabled
    </auro-tab>
    <auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
      No Panel
    </auro-tab>
  </auro-tabgroup>
</div>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Custom tab content

Auro tab also supports rich content inside of a tab. Instead of passing simple text, use html markup as needed to fit
your design spec. The wrapper `auro-tabgroup` also exposes two css parts for custom sliders (active indicator) -
`slider` and the parent `slider-positioner`.

Note: `slider` css is not overwritten by the JavaScript logic, while `slider-positioner` **width** and **left** properties
are used internally to position the slider and will be automatically overwritten.

<div class="exampleWrapper">
<auro-tabgroup id="custom-tab-example">
  <auro-tab slot="tab">
    <div class="custom-tab">
      <span>Flights</span>
      <span role="img" aria-label="airplane emoji">✈️</span>
    </div>
  </auro-tab>
  <auro-tabpanel slot="panel">
    <span>Tab 1 Content</span>
  </auro-tabpanel>
  <auro-tab slot="tab">
    <div class="custom-tab">
      <span>Rentals</span>
      <span role="img" aria-label="car emoji">🚗</span>
    </div>
  </auro-tab>
  <auro-tabpanel slot="panel">
    <span>Tab 2 Content</span>
  </auro-tabpanel>
</auro-tabgroup>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
    <!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/custom-content.html) -->
    <!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

CSS used in the example above:
```css
#custom-tab-example::part(slider) {
  height: 5px;
  margin-top: -3px;
  border-radius: 1rem;
  width: 25px;
}

.custom-tab {
  padding: 5px 15px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.custom-panel-wrapper {
  padding: 1rem;
}
```


## Accessibility

### Tab Role

Each of `auro-tabgroup`, `auro-tab`, and `auro-tabpanel` have predefined role as tablist, button, or tabpanel. Except for auro-tab which is an extension of `auro-hyperlink`. If `href` property is defined, then the `auro-tab` role is not set.

Q: Why `auro-tab`'s role assigned as 'button' instead of 'tab' ?

A: Because auro-tab is currently extends the [auro-hyperlink](https://auro.alaskaair.com/components/auro/hyperlink) component,  it is either to be rendered as `<a>` element or return as its given slot. The element needs to be a [focusable element](https://allyjs.io/data-tables/focusable.html), and left & right arrow can be used to navigate through the tab items, for that reason we give it role 'button'.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/role.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/role.html -->
  <auro-tabgroup>
    <auro-tab slot="tab">
      Baggage Info
    </auro-tab>
    <auro-tabpanel slot="panel">
      <span>Tab 1 Content</span>
    </auro-tabpanel>
    <auro-tab slot="tab">
      Help
    </auro-tab>
    <auro-tabpanel slot="panel"><span><a href="https://www.google.com">Tab 2 Content</a></span></auro-tabpanel>
    <auro-tab slot="tab">
      More
    </auro-tab>
    <auro-tabpanel slot="panel"><span>Tab 3 Content</span></auro-tabpanel>
    <auro-tab disabled slot="tab">
      Disabled
    </auro-tab>
    <auro-tabpanel slot="panel"><span>Disabled Content</span></auro-tabpanel>
    <auro-tab slot="tab">
      No Panel
    </auro-tab>
  </auro-tabgroup>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/role.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/role.html -->

```html
<auro-tabgroup>
  <auro-tab slot="tab">
    Baggage Info
  </auro-tab>
  <auro-tabpanel slot="panel">
    <span>Tab 1 Content</span>
  </auro-tabpanel>
  <auro-tab slot="tab">
    Help
  </auro-tab>
  <auro-tabpanel slot="panel"><span><a href="https://www.google.com">Tab 2 Content</a></span></auro-tabpanel>
  <auro-tab slot="tab">
    More
  </auro-tab>
  <auro-tabpanel slot="panel"><span>Tab 3 Content</span></auro-tabpanel>
  <auro-tab disabled slot="tab">
    Disabled
  </auro-tab>
  <auro-tabpanel slot="panel"><span>Disabled Content</span></auro-tabpanel>
  <auro-tab slot="tab">
    No Panel
  </auro-tab>
</auro-tabgroup>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom clement. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-tabs` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `registerComponent(name, type)` method and pass in a unique name.

`type` can be either `'group(default)' | 'tab' | 'panel'`

```js
import '@alaskaairux/auro-tabs';
registerComponent('custom-tabgroup');
registerComponent('custom-tab', 'tab');
registerComponent('custom-tabpanel', 'tabpanel');
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-tabgroup` element.

<div class="exampleWrapper">
  <custom-tabgroup>
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
  <custom-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
    Baggage Info
  </custom-tab>
  <custom-tabpanel slot="panel">
    <span>Tab 1 Content</span>
  </custom-tabpanel>
  <custom-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
    Help
  </custom-tab>
  <custom-tabpanel slot="panel"><span>Tab 2 Content</span></custom-tabpanel>
  <custom-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
    More
  </custom-tab>
  <custom-tabpanel slot="panel"><span>Tab 3 Content</span></custom-tabpanel>
  <custom-tab href="#/" relative="http://localhost:8000/demo" slot="tab">
    No Panel
  </custom-tab>
</custom-tabgroup>
```
</auro-accordion>
