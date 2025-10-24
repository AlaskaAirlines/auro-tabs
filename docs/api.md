# auro-tab

Represents a tab within an auro-tabgroup element. When selected, displays the corresponding AuroTabpanel.
The auro-tabpanel element should only be used inside an AuroTabgroup element.

### Properties & Attributes

| Properties | Attributes | Type                              | Default   | Description                                                             |
| ---------- | ---------- | --------------------------------- | --------- | ----------------------------------------------------------------------- |
| appearance | appearance | "default" \| "inverse" \| string  | "default" | Defines whether the component will be on lighter or darker backgrounds. |
| disabled   | disabled   | boolean                           | false     | Indicates whether the tab is disabled.                                  |
| selected   | selected   | boolean                           | false     | Indicates whether the tab is selected.                                  |
| variant    | variant    | "default" \| "unstyled" \| string | "default" | The variant of the tab.                                                 |
|            | focused    | boolean                           | false     | Indicates whether the tab is focused.                                   |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |

---

# auro-tabgroup

The auro-tabgroup element is a container element for tabs and panels.
All children of `<auro-tabgroup>` should be either `<auro-tab>` or
`<auro-tabpanel>`. This element is stateless, meaning that no values are
cached and therefore, changes during runtime work.

### Properties & Attributes

| Properties | Attributes | Type                             | Default   | Description                                                             |
| ---------- | ---------- | -------------------------------- | --------- | ----------------------------------------------------------------------- |
| appearance | appearance | "default" \| "inverse" \| string | 'default' | Defines whether the component will be on lighter or darker backgrounds. |

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

---

# auro-tabpanel

Represents a panel to be displayed when the corresponding tab is selected in an AuroTabgroup element.
The auro-tabpanel element should only be used inside an AuroTabgroup element.

### Properties & Attributes

| Properties | Attributes | Type    | Default | Description                            |
| ---------- | ---------- | ------- | ------- | -------------------------------------- |
| hidden     | hidden     | boolean | false   | Indicates whether the panel is hidden. |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |