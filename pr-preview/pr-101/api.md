<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-tab

Represents a tab within an auro-tabgroup element. When selected, displays the corresponding AuroTabpanel.
The auro-tabpanel element should only be used inside an AuroTabgroup element.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type                    | Default   | Description                                                             |
| ---------- | ---------- | --------- | ----------------------- | --------- | ----------------------------------------------------------------------- |
| appearance | appearance |           | "default" \| "inverse"  | `default` | Defines whether the component will be on lighter or darker backgrounds. |
| disabled   | disabled   |           | boolean                 | `false`   | Indicates whether the tab is disabled.                                  |
| selected   | selected   |           | boolean                 | `false`   | Indicates whether the tab is selected.                                  |
| variant    | variant    |           | "default" \| "unstyled" | `default` | The variant of the tab.                                                 |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |

# auro-tabgroup

The auro-tabgroup element is a container element for tabs and panels.
All children of `<auro-tabgroup>` should be either `<auro-tab>` or
`<auro-tabpanel>`. This element is stateless, meaning that no values are
cached and therefore, changes during runtime work.

### Properties & Attributes

| Properties    | Attributes    | Modifiers | Type                   | Default   | Description                                                             |
| ------------- | ------------- | --------- | ---------------------- | --------- | ----------------------------------------------------------------------- |
| appearance    | appearance    |           | "default" \| "inverse" | `default` | Defines whether the component will be on lighter or darker backgrounds. |
| selectOnFocus | selectonfocus |           | boolean                | `false`   | Whether or not to select the tab on focus.                              |
| ondark        | ondark        |           | boolean                | `false`   | DEPRECATED - use `appearance` instead.                                  |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |

### Slots

| Name  | Description                             |
| ----- | --------------------------------------- |
| panel | Slot component named for auro-tabpanel. |
| tab   | Slot component named for auro-tab.      |

### CSS Shadow Parts

| Name              | Description                                                                    |
| ----------------- | ------------------------------------------------------------------------------ |
| slider            | The slider element.                                                            |
| slider-positioner | The slider positioner element (non-visual, only used to center slider on tab). |
| tabgroup__panels  | The panel wrapper element.                                                     |
| tabgroup__root    | The root element of the tab group.                                             |
| tabgroup__tabs    | The "tabs list" internal wrapper element.                                      |

# auro-tabpanel

Represents a panel to be displayed when the corresponding tab is selected in an AuroTabgroup element.
The auro-tabpanel element should only be used inside an AuroTabgroup element.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type    | Default | Description                            |
| ---------- | ---------- | --------- | ------- | ------- | -------------------------------------- |
| hidden     | hidden     |           | boolean | `false` | Indicates whether the panel is hidden. |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
<!-- The below content is automatically added from ./../apiExamples/basic.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

<pre class="language-html"><code class="language-html">&lt;auro-tabgroup variant="unstyled"&gt;
  &lt;div slot="tabs"&gt;
    &lt;auro-tab&gt;
      Baggage Info
    &lt;/auro-tab&gt;
    &lt;auro-tab&gt;
      Help
    &lt;/auro-tab&gt;
    &lt;auro-tab&gt;
      More
    &lt;/auro-tab&gt;
    &lt;auro-tab&gt;
      No Panel
    &lt;/auro-tab&gt;
  &lt;/div&gt;
  &lt;div slot="panels"&gt;
    &lt;auro-tabpanel&gt;
      &lt;span&gt;Tab 1 Content&lt;/span&gt;
    &lt;/auro-tabpanel&gt;
    &lt;auro-tabpanel&gt;&lt;span&gt;Tab 2 Content&lt;/span&gt;&lt;/auro-tabpanel&gt;
    &lt;auro-tabpanel&gt;&lt;span&gt;Tab 3 Content&lt;/span&gt;&lt;/auro-tabpanel&gt;
  &lt;/div&gt;
&lt;/auro-tabgroup&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Method Examples

#### <a name="selectTab"></a>`selectTab`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
We can programatically select a tab by passing the auro-tab element to the parameter of `selectTab` method.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/selectTab.html) -->
<!-- The below content is automatically added from ./../apiExamples/selectTab.html -->
<div style="margin-bottom: 36px;">
<button onClick="selectFirstTab()">Select First Tab</button>
<button onClick="selectSecondTab()">Select Second Tab</button>
<button onClick="selectLastTab()">Select Last Tab</button>
</div>
<auro-tabgroup id="select-tab-example">
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/selectTab.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/selectTab.html -->

<pre class="language-html"><code class="language-html">&lt;div style="margin-bottom: 36px;"&gt;
  &lt;button onClick="selectFirstTab()"&gt;Select First Tab&lt;/button&gt;
  &lt;button onClick="selectSecondTab()"&gt;Select Second Tab&lt;/button&gt;
  &lt;button onClick="selectLastTab()"&gt;Select Last Tab&lt;/button&gt;
&lt;/div&gt;
&lt;auro-tabgroup id="select-tab-example"&gt;
  &lt;auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab"&gt;
    Baggage Info
  &lt;/auro-tab&gt;
  &lt;auro-tabpanel slot="panel"&gt;
    &lt;span&gt;Tab 1 Content&lt;/span&gt;
  &lt;/auro-tabpanel&gt;
  &lt;auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab"&gt;
    Help
  &lt;/auro-tab&gt;
  &lt;auro-tabpanel slot="panel"&gt;&lt;span&gt;Tab 2 Content&lt;/span&gt;&lt;/auro-tabpanel&gt;
  &lt;auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab"&gt;
    More
  &lt;/auro-tab&gt;
  &lt;auro-tabpanel slot="panel"&gt;&lt;span&gt;Tab 3 Content&lt;/span&gt;&lt;/auro-tabpanel&gt;
  &lt;auro-tab href="#/" relative="http://localhost:8000/demo" slot="tab"&gt;
    No Panel
  &lt;/auro-tab&gt;
&lt;/auro-tabgroup&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../demo/utils/onTabSelected.js) -->
<!-- The below code snippet is automatically added from ./../demo/utils/onTabSelected.js -->

<pre class="language-js"><code class="language-js">export function onTabSelected(e) {
  console.info(`Tab selected: ${e.target.innerText}`);
}
export function addListener() {
  window.addEventListener("tab-selected", onTabSelected);
}
export function removeListener() {
  window.removeEventListener("tab-selected", onTabSelected);
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Event Examples

#### `tab-selected`

Tab component will fire `tab-selected` event when selected.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/tab-selected.html) -->
<!-- The below content is automatically added from ./../apiExamples/tab-selected.html -->
<div style="margin-bottom: 36px;">
<button onClick="addListener()">Add event listener</button>
<button onClick="removeListener()">Remove event listener</button>
</div>
<auro-tabgroup id="tab-selected-example">
<auro-tab slot="tab">
      Baggage Info
</auro-tab>
<auro-tabpanel slot="panel">
<span>Tab 1 Content</span>
</auro-tabpanel>
<auro-tab slot="tab">
      Select me!
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/tab-selected.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/tab-selected.html -->

<pre class="language-html"><code class="language-html">&lt;div style="margin-bottom: 36px;"&gt;
  &lt;button onClick="addListener()"&gt;Add event listener&lt;/button&gt;
  &lt;button onClick="removeListener()"&gt;Remove event listener&lt;/button&gt;
&lt;/div&gt;
&lt;auro-tabgroup id="tab-selected-example"&gt;
  &lt;auro-tab slot="tab"&gt;
    Baggage Info
  &lt;/auro-tab&gt;
  &lt;auro-tabpanel slot="panel"&gt;
    &lt;span&gt;Tab 1 Content&lt;/span&gt;
  &lt;/auro-tabpanel&gt;
  &lt;auro-tab slot="tab"&gt;
    Select me!
  &lt;/auro-tab&gt;
  &lt;auro-tabpanel slot="panel"&gt;&lt;span&gt;&lt;a href="https://www.google.com"&gt;Tab 2 Content&lt;/a&gt;&lt;/span&gt;&lt;/auro-tabpanel&gt;
  &lt;auro-tab slot="tab"&gt;
    More
  &lt;/auro-tab&gt;
  &lt;auro-tabpanel slot="panel"&gt;&lt;span&gt;Tab 3 Content&lt;/span&gt;&lt;/auro-tabpanel&gt;
  &lt;auro-tab disabled slot="tab"&gt;
    Disabled
  &lt;/auro-tab&gt;
  &lt;auro-tabpanel slot="panel"&gt;&lt;span&gt;Disabled Content&lt;/span&gt;&lt;/auro-tabpanel&gt;
  &lt;auro-tab slot="tab"&gt;
    No Panel
  &lt;/auro-tab&gt;
&lt;/auro-tabgroup&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../demo/utils/onTabSelected.js) -->
<!-- The below code snippet is automatically added from ./../demo/utils/onTabSelected.js -->

<pre class="language-js"><code class="language-js">export function onTabSelected(e) {
  console.info(`Tab selected: ${e.target.innerText}`);
}
export function addListener() {
  window.addEventListener("tab-selected", onTabSelected);
}
export function removeListener() {
  window.removeEventListener("tab-selected", onTabSelected);
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Slot Examples

#### <a name="tabs"></a>`tabs`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a> - `panels`

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
<!-- The below content is automatically added from ./../apiExamples/basic.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

<pre class="language-html"><code class="language-html">&lt;auro-tabgroup variant="unstyled"&gt;
  &lt;div slot="tabs"&gt;
    &lt;auro-tab&gt;
      Baggage Info
    &lt;/auro-tab&gt;
    &lt;auro-tab&gt;
      Help
    &lt;/auro-tab&gt;
    &lt;auro-tab&gt;
      More
    &lt;/auro-tab&gt;
    &lt;auro-tab&gt;
      No Panel
    &lt;/auro-tab&gt;
  &lt;/div&gt;
  &lt;div slot="panels"&gt;
    &lt;auro-tabpanel&gt;
      &lt;span&gt;Tab 1 Content&lt;/span&gt;
    &lt;/auro-tabpanel&gt;
    &lt;auro-tabpanel&gt;&lt;span&gt;Tab 2 Content&lt;/span&gt;&lt;/auro-tabpanel&gt;
    &lt;auro-tabpanel&gt;&lt;span&gt;Tab 3 Content&lt;/span&gt;&lt;/auro-tabpanel&gt;
  &lt;/div&gt;
&lt;/auro-tabgroup&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Visual State on Dark Background

Set when the tabgroup is used on a dark background.

<div class="exampleWrapper--ondark">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/inverseAppearance.html) -->
<!-- The below content is automatically added from ./../apiExamples/inverseAppearance.html -->
<div style="color: white;">
<auro-tabgroup variant="unstyled" appearance="inverse">
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
</div>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/inverseAppearance.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/inverseAppearance.html -->

<pre class="language-html"><code class="language-html">&lt;div style="color: white;"&gt;
  &lt;auro-tabgroup variant="unstyled" appearance="inverse"&gt;
  &lt;div slot="tabs"&gt;
    &lt;auro-tab&gt;
      Baggage Info
    &lt;/auro-tab&gt;
    &lt;auro-tab&gt;
      Help
    &lt;/auro-tab&gt;
    &lt;auro-tab&gt;
      More
    &lt;/auro-tab&gt;
    &lt;auro-tab&gt;
      No Panel
    &lt;/auro-tab&gt;
  &lt;/div&gt;
  &lt;div slot="panels"&gt;
    &lt;auro-tabpanel&gt;
      &lt;span&gt;Tab 1 Content&lt;/span&gt;
    &lt;/auro-tabpanel&gt;
    &lt;auro-tabpanel&gt;&lt;span&gt;Tab 2 Content&lt;/span&gt;&lt;/auro-tabpanel&gt;
    &lt;auro-tabpanel&gt;&lt;span&gt;Tab 3 Content&lt;/span&gt;&lt;/auro-tabpanel&gt;
  &lt;/div&gt;
&lt;/auro-tabgroup&gt;
&lt;/div&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
