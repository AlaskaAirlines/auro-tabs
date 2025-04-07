# auro-tab

The auro-tabpanel element should only be used for auro-tabgroup only.

## Properties

| Property         | Attribute        | Modifiers | Type      | Default | Description                                      |
|------------------|------------------|-----------|-----------|---------|--------------------------------------------------|
| `disabled`       | `disabled`       |           | `Boolean` | false   | Mark the tab as disabled tab.                    |
| `download`       | `download`       |           | `Boolean` | false   | If true, the linked resource will be downloaded when the hyperlink is clicked. |
| `fluid`          | `fluid`          |           | `Boolean` |         | If true and `type="cta"`, the hyperlink will have a fluid-width UI. |
| `href`           | `href`           |           | `String`  |         | Defines the URL of the linked page.              |
| `ondark`         | `ondark`         |           | `Boolean` | false   | If true, the hyperlink will be styled for use on a dark background. |
| `referrerpolicy` | `referrerpolicy` |           | `Boolean` |         | If true, sets `strict-origin-when-cross-origin` to control the referrer information sent with requests. |
| `rel`            | `rel`            |           | `String`  |         | Defines the relationship between the current document and the linked document. |
| `relative`       | `relative`       |           | `Boolean` | false   | If true, the auto URL re-write feature will be disabled. |
| `role`           | `role`           |           | `String`  |         | Defines ARIA roles; currently supports `button` for extended experiences. |
| `safeUri`        |                  | readonly  | `string`  |         | Returns a safe URI based on the provided `href` and `relative` parameters.<br />If `href` is truthy, it generates a safe URL using the `safeUrl` function.<br />Otherwise, it returns an empty string. |
| `secondary`      | `secondary`      |           | `Boolean` | false   | If true and `type="cta"`, the hyperlink will have a secondary UI. |
| `selected`       | `selected`       |           | `Boolean` |         | Mark the tab as selected tab.                    |
| `small`          | `small`          |           | `Boolean` | false   | If true and `type="cta"`, the hyperlink will have a small UI. |
| `target`         | `target`         |           | `String`  |         | Defines where to open the linked document.       |
| `tertiary`       | `tertiary`       |           | `Boolean` | false   | If true and `type="cta"`, the hyperlink will have a tertiary UI. |
| `type`           | `type`           |           | `String`  |         | Defines the type of hyperlink; accepts `nav` or `cta`. |

## Methods

| Method            | Type                   | Description                                      |
|-------------------|------------------------|--------------------------------------------------|
| `upgradeProperty` | `(prop: string): void` | This is to safe guard against cases where, for instance, a framework may have added the element<br />to the page and set a value on one of its properties, but lazy loaded its definition.<br />Without this guard, the upgraded element would miss that property and the instance property<br />would prevent the class property setter from ever being called.<br /><br />**prop**: The component property. |

## Events

| Event          |
|----------------|
| `tab-selected` |

## CSS Shadow Parts

| Part         | Description                                      |
|--------------|--------------------------------------------------|
| `link`       | Allows styling to be applied to the `a` element. |
| `targetIcon` | Allows styling to be applied to the icon that appears next to the hyperlink. |


# auro-tabgroup

The auro-tabgroup element is a container element for tabs and panels.
All children of `<auro-tabgroup>` should be either `<auro-tab>` or
`<auro-tabpanel>`. This element is stateless, meaning that no values are
cached and therefore, changes during runtime work.

## Properties

| Property         | Attribute        | Type     | Default | Description                         |
|------------------|------------------|----------|---------|-------------------------------------|
| `scrollPosition` | `scrollPosition` | `Number` | 0       | Tabgroup container scroll position. |
| `sliderStyles`   | `sliderStyles`   | `Object` | {}      | Slider styles.                      |

## Methods

| Method         | Type                                      | Description                                      |
|----------------|-------------------------------------------|--------------------------------------------------|
| `allPanels`    | `(): Array`                               | Function to get all of the auro-tabpanel.        |
| `allTabs`      | `(): Array`                               | Function to get all of the auro-tab.             |
| `firstTab`     | `(): HTMLElement`                         | Function to get the very first tab.              |
| `lastTab`      | `(): HTMLElement`                         | Function to get the very last tab.               |
| `linkPanels`   | `(): void`                                | Function handler to link the tab with next sibling of tabpanel.<br />And select a 'selected' tab if defined or default to first tab. |
| `nextTab`      | `(): HTMLElement`                         | Function to get next tab of the selected one.    |
| `onSlotChange` | `(): void`                                | `onSlotChange()` is called whenever an element is added or removed from<br />one of the shadow DOM slots. |
| `panelForTab`  | `(tab: HTMLElement): HTMLElement \| null` | Function to get the panel for given auro-tab.<br /><br />**tab**: Auro-tab element. |
| `prevTab`      | `(): HTMLElement`                         | Function to get previous tab of the selected one. |
| `reset`        | `(): void`                                | Function to reset the selected state of the tabs & hide the panel. |
| `scrollTab`    | `(direction: string): void`               | Function handler for the scroll button click action.<br /><br />**direction**: Direction of the scroll. |
| `selectTab`    | `(newTab: HTMLElement): void`             | Function handler when selecting an auro-tab.<br /><br />**newTab**: Selected auro-tab. |

## Slots

| Name    | Description                             |
|---------|-----------------------------------------|
| `panel` | Slot component named for auro-tabpanel. |
| `tab`   | Slot component named for auro-tab.      |


# auro-tabpanel

The auro-tabpanel element should only be used for auro-tabs only.

## Properties

| Property | Attribute | Type      |
|----------|-----------|-----------|
| `hidden` | `hidden`  | `boolean` |
