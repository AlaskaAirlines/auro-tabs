<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-tab

A tab that shows its matching panel when selected. Use it only inside an `auro-tabgroup`.

**Key capabilities**
- **Shows its panel**: Set `selected` to show the matching panel and hide the others.
- **Skipped by arrow keys**: Set `disabled` to skip the tab when the arrow keys move between tabs.
- **Adapts to dark backgrounds**: Set `appearance="inverse"` on the tab group to restyle its tabs for dark backgrounds.

**Example**
<pre class="language-html"><code class="language-html">&lt;auro-tabgroup&gt;
  &lt;div slot="tabs"&gt;
    &lt;auro-tab&gt;Baggage info&lt;/auro-tab&gt;
  &lt;/div&gt;
  &lt;div slot="panels"&gt;
    &lt;auro-tabpanel&gt;Baggage details&lt;/auro-tabpanel&gt;
  &lt;/div&gt;
&lt;/auro-tabgroup&gt;</code></pre>

### Properties and attributes

| Properties | Attributes | Modifiers | Type                    | Default   | Description                                                                                                                                              |
| ---------- | ---------- | --------- | ----------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appearance | appearance |           | "default" \| "inverse"  | `default` | Sets the color scheme for the background the tab sits on. Use `inverse` on dark backgrounds. The tab group sets this for you.                            |
| disabled   | disabled   |           | boolean                 |           | Skips the tab when the arrow keys move between tabs and stops clicks from selecting it. Doesn't currently stop the `selectTab` method from selecting it. |
| selected   | selected   |           | boolean                 |           | Shows this tab's panel and hides the others.                                                                                                             |
| variant    | variant    |           | "default" \| "unstyled" |           | Sets the tab's style variant. Doesn't currently change how the tab looks.                                                                                |

### Methods

| Name     | Parameters                                                    | Return | Description                                              |
| -------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. |

# auro-tabgroup

Groups tabs and panels so that one panel shows at a time.

**Key capabilities**
- **Selects on focus**: Set `selectonfocus` to select a tab as soon as the arrow keys, `Home`, or `End` move focus to it.
- **Adapts to dark backgrounds**: Set `appearance="inverse"` to restyle the tabs for dark backgrounds.
- **Keyboard navigation**: Always on. The left and right arrow keys, `Home`, and `End` move between tabs.

**Example**
<pre class="language-html"><code class="language-html">&lt;auro-tabgroup&gt;
  &lt;div slot="tabs"&gt;
    &lt;auro-tab&gt;First tab&lt;/auro-tab&gt;
    &lt;auro-tab&gt;Second tab&lt;/auro-tab&gt;
  &lt;/div&gt;
  &lt;div slot="panels"&gt;
    &lt;auro-tabpanel&gt;First panel&lt;/auro-tabpanel&gt;
    &lt;auro-tabpanel&gt;Second panel&lt;/auro-tabpanel&gt;
  &lt;/div&gt;
&lt;/auro-tabgroup&gt;</code></pre>

### Properties and attributes

| Properties    | Attributes    | Modifiers | Type                   | Default   | Description                                                                                                                        |
| ------------- | ------------- | --------- | ---------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| appearance    | appearance    |           | "default" \| "inverse" | `default` | Sets the color scheme for the background the tabs sit on. Use `inverse` on dark backgrounds.                                       |
| selectOnFocus | selectonfocus |           | boolean                |           | Selects a tab as soon as the arrow keys, `Home`, or `End` move focus to it. Without it, people press `Enter` or `Space` to select. |
| ondark        | ondark        |           | boolean                |           | Deprecated: Use `appearance="inverse"` instead.                                                                                    |

### Methods

| Name     | Parameters                                                    | Return | Description                                              |
| -------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. |

### Slots

| Name   | Description                                                                          |
| ------ | ------------------------------------------------------------------------------------ |
| panels | The `auro-tabpanel` elements, one per tab, in the same order as the tabs.            |
| tabs   | The `auro-tab` elements for the tab list, wrapped in one element with `slot="tabs"`. |

### CSS shadow parts

| Name              | Description                                                                    |
| ----------------- | ------------------------------------------------------------------------------ |
| slider            | The slider element.                                                            |
| slider-positioner | The slider positioner element (non-visual, only used to center slider on tab). |
| tabgroup__panels  | The panel wrapper element.                                                     |
| tabgroup__root    | The root element of the tab group.                                             |
| tabgroup__tabs    | The wrapper element for the tabs, with the `tablist` role.                     |

# auro-tabpanel

The content that shows when its matching tab is selected. Use it only inside an `auro-tabgroup`.

**Key capabilities**
- **Hides when its tab isn't selected**: The tab group sets `hidden` on every panel except the selected one.
- **Reachable by keyboard**: A visible panel is always in the keyboard tab order.

**Example**
<pre class="language-html"><code class="language-html">&lt;auro-tabgroup&gt;
  &lt;div slot="tabs"&gt;
    &lt;auro-tab&gt;Baggage info&lt;/auro-tab&gt;
  &lt;/div&gt;
  &lt;div slot="panels"&gt;
    &lt;auro-tabpanel&gt;Baggage details&lt;/auro-tabpanel&gt;
  &lt;/div&gt;
&lt;/auro-tabgroup&gt;</code></pre>

### Properties and attributes

| Properties | Attributes | Modifiers | Type    | Default | Description                                                                                  |
| ---------- | ---------- | --------- | ------- | ------- | -------------------------------------------------------------------------------------------- |
| hidden     | hidden     |           | boolean |         | Hides the panel and removes it from the keyboard tab order. The tab group sets this for you. |

### Methods

| Name     | Parameters                                                    | Return | Description                                              |
| -------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. |
<!-- AURO-GENERATED-CONTENT:END -->

## API examples

### Basic

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
<!-- The below content is automatically added from ./../apiExamples/basic.html -->
<auro-tabgroup>
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

<pre class="language-html"><code class="language-html">&lt;auro-tabgroup&gt;
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

### Method Examples

#### <a name="selectTab"></a>`selectTab`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Pass an `auro-tab` to `selectTab` to select it in code.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/selectTab.html) -->
<!-- The below content is automatically added from ./../apiExamples/selectTab.html -->
<div style="margin-bottom: 36px;">
<button onClick="selectFirstTab()">Select first tab</button>
<button onClick="selectSecondTab()">Select second tab</button>
<button onClick="selectLastTab()">Select last tab</button>
</div>
<auro-tabgroup id="select-tab-example">
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/selectTab.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/selectTab.html -->

<pre class="language-html"><code class="language-html">&lt;div style="margin-bottom: 36px;"&gt;
  &lt;button onClick="selectFirstTab()"&gt;Select first tab&lt;/button&gt;
  &lt;button onClick="selectSecondTab()"&gt;Select second tab&lt;/button&gt;
  &lt;button onClick="selectLastTab()"&gt;Select last tab&lt;/button&gt;
&lt;/div&gt;
&#10;&lt;auro-tabgroup id="select-tab-example"&gt;
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

A tab fires `tab-selected` when it's selected.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/tab-selected.html) -->
<!-- The below content is automatically added from ./../apiExamples/tab-selected.html -->
<div style="margin-bottom: 36px;">
<button onClick="addListener()">Add event listener</button>
<button onClick="removeListener()">Remove event listener</button>
</div>
<auro-tabgroup id="tab-selected-example">
<div slot="tabs">
<auro-tab>
        Baggage info
</auro-tab>
<auro-tab>
        Select me!
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
<auro-tabpanel><span><a>Tab 2 content</a></span></auro-tabpanel>
<auro-tabpanel><span>Tab 3 content</span></auro-tabpanel>
<auro-tabpanel><span>Disabled content</span></auro-tabpanel>
</div>
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
&#10;&lt;auro-tabgroup id="tab-selected-example"&gt;
  &lt;div slot="tabs"&gt;
    &lt;auro-tab&gt;
      Baggage info
    &lt;/auro-tab&gt;
    &lt;auro-tab&gt;
      Select me!
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
    &lt;auro-tabpanel&gt;&lt;span&gt;&lt;a&gt;Tab 2 content&lt;/a&gt;&lt;/span&gt;&lt;/auro-tabpanel&gt;
    &lt;auro-tabpanel&gt;&lt;span&gt;Tab 3 content&lt;/span&gt;&lt;/auro-tabpanel&gt;
    &lt;auro-tabpanel&gt;&lt;span&gt;Disabled content&lt;/span&gt;&lt;/auro-tabpanel&gt;
  &lt;/div&gt;
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

#### <a name="tabs"></a>`tabs`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a> and `panels`

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
<!-- The below content is automatically added from ./../apiExamples/basic.html -->
<auro-tabgroup>
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

<pre class="language-html"><code class="language-html">&lt;auro-tabgroup&gt;
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

### Visual state on dark background

Use `appearance="inverse"` when the tab group sits on a dark background.

<div class="exampleWrapper--ondark">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/inverseAppearance.html) -->
<!-- The below content is automatically added from ./../apiExamples/inverseAppearance.html -->
<div style="color: white;">
<auro-tabgroup appearance="inverse">
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
</div>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/inverseAppearance.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/inverseAppearance.html -->

<pre class="language-html"><code class="language-html">&lt;div style="color: white;"&gt;
  &lt;auro-tabgroup appearance="inverse"&gt;
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
&lt;/auro-tabgroup&gt;
&lt;/div&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
