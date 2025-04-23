# auro-tab

Represents a tab within an auro-tabgroup element. When selected, displays the corresponding AuroTabpanel.
The auro-tabpanel element should only be used inside an AuroTabgroup element.

## Properties

| Property   | Attribute  | Type      | Default | Description                   |
|------------|------------|-----------|---------|-------------------------------|
| `disabled` | `disabled` | `Boolean` | "false" | Mark the tab as disabled tab. |
| `selected` | `selected` | `Boolean` | "false" | Mark the tab as selected tab. |

## Events

| Event          |
|----------------|
| `tab-selected` |


# auro-tabgroup

The auro-tabgroup element is a container element for tabs and panels.
All children of `<auro-tabgroup>` should be either `<auro-tab>` or
`<auro-tabpanel>`. This element is stateless, meaning that no values are
cached and therefore, changes during runtime work.

## Properties

| Property | Type      |
|----------|-----------|
| `busy`   | `boolean` |

## Slots

| Name    | Description                             |
|---------|-----------------------------------------|
| `panel` | Slot component named for auro-tabpanel. |
| `tab`   | Slot component named for auro-tab.      |


# auro-tabpanel

Represents a panel to be displayed when the corresponding tab is selected in an AuroTabgroup element.
The auro-tabpanel element should only be used inside an AuroTabgroup element.

## Properties

| Property | Attribute | Type      | Default |
|----------|-----------|-----------|---------|
| `hidden` | `hidden`  | `boolean` | "false" |
