<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-tab

The auro-tabpanel element should only be used for auro-tabgroup only.

## Properties

| Property         | Attribute        | Type      | Default | Description                                      |
|------------------|------------------|-----------|---------|--------------------------------------------------|
| [disabled](#disabled)       | `disabled`       | `Boolean` | false   | Mark the tab as disabled tab.                    |
| [download](#download)       | `download`       | `Boolean` | false   | Specifies that the target will be downloaded when a user clicks on the hyperlink. |
| [fluid](#fluid)          | `fluid`          | `Boolean` |         | Modifier for `type="cta"` fluid-width UI option. |
| [href](#href)           | `href`           | `String`  |         | Specifies the URL of the page link.              |
| [ondark](#ondark)         | `ondark`         | `Boolean` | false   | Specifies dark theme use of hyperlink.           |
| [referrerpolicy](#referrerpolicy) | `referrerpolicy` | `Boolean` |         | Sets `strict-origin-when-cross-origin` to send a full URL when performing a same-origin request, only sends the origin when the protocol security level stays the same (HTTPS→HTTPS), and sends no header to a less secure destination (HTTPS→HTTP). |
| [rel](#rel)            | `rel`            | `String`  |         | Specifies the relationship between the current document and the linked document. |
| [relative](#relative)       | `relative`       | `Boolean` | false   | Add flag to disable auto URL re-write feature.   |
| [role](#role)           | `role`           | `String`  |         | Use for aria roles; currently supports `button` for extended experiences. |
| [secondary](#secondary)      | `secondary`      | `Boolean` | false   | Modifier for `type="cta"` secondary UI option.   |
| [selected](#selected)       | `selected`       | `Boolean` |         | Mark the tab as selected tab.                    |
| [target](#target)         | `target`         | `String`  |         | Specifies where to open the linked document.     |
| [type](#type)           | `type`           | `String`  |         | Enumerable attribute; [`nav`, `cta`]             |

## Methods

| Method            | Type                   | Description                                      |
|-------------------|------------------------|--------------------------------------------------|
| [focus](#focus)           | `(): void`             | Focus this element.                              |
| [upgradeProperty](#upgradeProperty) | `(prop: string): void` | This is to safe guard against cases where, for instance, a framework may have added the element<br />to the page and set a value on one of its properties, but lazy loaded its definition.<br />Without this guard, the upgraded element would miss that property and the instance property<br />would prevent the class property setter from ever being called.<br /><br />**prop**: The component property. |

## Events

| Event          |
|----------------|
| `tab-selected` |

## CSS Shadow Parts

| Part   | Description                  |
|--------|------------------------------|
| [link](#link) | Apply CSS to the `a` element |

# auro-tabgroup

The auro-tabgroup element is a container element for tabs and panels.
All children of `<auro-tabgroup>` should be either `<auro-tab>` or
`<auro-tabpanel>`. This element is stateless, meaning that no values are
cached and therefore, changes during runtime work.

## Properties

| Property         | Attribute        | Type     | Default | Description                         |
|------------------|------------------|----------|---------|-------------------------------------|
| [scrollPosition](#scrollPosition) | `scrollPosition` | `Number` | 0       | Tabgroup container scroll position. |
| [sliderStyles](#sliderStyles)   | `sliderStyles`   | `Object` | {}      | Slider styles.                      |

## Methods

| Method         | Type                                      | Description                                      |
|----------------|-------------------------------------------|--------------------------------------------------|
| [allPanels](#allPanels)    | `(): Array`                               | Function to get all of the auro-tabpanel.        |
| [allTabs](#allTabs)      | `(): Array`                               | Function to get all of the auro-tab.             |
| [firstTab](#firstTab)     | `(): HTMLElement`                         | Function to get the very first tab.              |
| [lastTab](#lastTab)      | `(): HTMLElement`                         | Function to get the very last tab.               |
| [linkPanels](#linkPanels)   | `(): void`                                | Function handler to link the tab with next sibling of tabpanel.<br />Also Set the required aria-controls & aria-labelledby attribute.<br />And finally, select a 'selected' tab if defined or default to first tab. |
| [nextTab](#nextTab)      | `(): HTMLElement`                         | Function to get next tab of the selected one.    |
| [onSlotChange](#onSlotChange) | `(): void`                                | `onSlotChange()` is called whenever an element is added or removed from<br />one of the shadow DOM slots. |
| [panelForTab](#panelForTab)  | `(tab: HTMLElement): HTMLElement \| null` | Function to get the panel for given auro-tab.<br /><br />**tab**: Auro-tab element. |
| [prevTab](#prevTab)      | `(): HTMLElement`                         | Function to get previous tab of the selected one. |
| [reset](#reset)        | `(): void`                                | Function to reset the selected state of the tabs & hide the panel. |
| [scrollTab](#scrollTab)    | `(direction: string): void`               | Function handler for the scroll button click action.<br /><br />**direction**: Direction of the scroll. |
| [selectTab](#selectTab)    | `(newTab: HTMLElement): void`             | Function handler when selecting an auro-tab.<br /><br />**newTab**: Selected auro-tab. |

## Slots

| Name    | Description                             |
|---------|-----------------------------------------|
| [panel](#panel) | Slot component named for auro-tabpanel. |
| [tab](#tab)   | Slot component named for auro-tab.      |

# auro-tabpanel

The auro-tabpanel element should only be used for auro-tabs only.
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

<div class="twoColDemoRow">
  <div>
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

### Attribute Examples

#### <a name="attributeName"></a>`attributeName`<a href="#auro-tabs" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

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

### Property Examples

#### <a name="propertyName"></a>`propertyName`<a href="#auro-tabs" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

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

### Method Examples

#### <a name="methodName"></a>`methodName`<a href="#auro-tabs" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

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

### Event Examples

#### <a name="eventName"></a>`eventName`<a href="#auro-tabs" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

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

### Slot Examples

#### <a name="slotName"></a>`slotName`<a href="#auro-tabs" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

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
