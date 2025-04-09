# auro-tab

The auro-tabpanel element should only be used for auro-tabgroup only.

## Properties

| Property         | Attribute        | Modifiers | Type           | Default | Description                                      |
|------------------|------------------|-----------|----------------|---------|--------------------------------------------------|
| `disabled`       | `disabled`       |           | `Boolean`      | false   | Mark the tab as disabled tab.                    |
| `download`       | `download`       |           | `Boolean`      | false   | If true, the linked resource will be downloaded when the hyperlink is clicked. |
| `fluid`          | `fluid`          |           | `Boolean`      |         | If true and `type="cta"`, the hyperlink will have a fluid-width UI. |
| `href`           | `href`           |           | `String`       |         | Defines the URL of the linked page.              |
| `ondark`         | `ondark`         |           | `Boolean`      | false   | If true, the hyperlink will be styled for use on a dark background. |
| `panel`          |                  | readonly  | `AuroTabpanel` | null    | The associated AuroTabpanel that will be displayed when this tab is selected. |
| `referrerpolicy` | `referrerpolicy` |           | `Boolean`      |         | If true, sets `strict-origin-when-cross-origin` to control the referrer information sent with requests. |
| `rel`            | `rel`            |           | `String`       |         | Defines the relationship between the current document and the linked document. |
| `relative`       | `relative`       |           | `Boolean`      | false   | If true, the auto URL re-write feature will be disabled. |
| `role`           | `role`           |           | `String`       |         | Defines ARIA roles; currently supports `button` for extended experiences. |
| `safeUri`        |                  | readonly  | `string`       |         | Returns a safe URI based on the provided `href` and `relative` parameters.<br />If `href` is truthy, it generates a safe URL using the `safeUrl` function.<br />Otherwise, it returns an empty string. |
| `secondary`      | `secondary`      |           | `Boolean`      | false   | If true and `type="cta"`, the hyperlink will have a secondary UI. |
| `selected`       | `selected`       |           | `Boolean`      |         | Mark the tab as selected tab.                    |
| `small`          | `small`          |           | `Boolean`      | false   | If true and `type="cta"`, the hyperlink will have a small UI. |
| `target`         | `target`         |           | `String`       |         | Defines where to open the linked document.       |
| `tertiary`       | `tertiary`       |           | `Boolean`      | false   | If true and `type="cta"`, the hyperlink will have a tertiary UI. |
| `type`           | `type`           |           | `String`       |         | Defines the type of hyperlink; accepts `nav` or `cta`. |

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

| Property          | Modifiers | Type     |
|-------------------|-----------|----------|
| `currentTab`      | readonly  |          |
| `currentTabIndex` | readonly  | `number` |

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
