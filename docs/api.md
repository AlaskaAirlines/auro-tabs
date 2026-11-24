# auro-tab

A tab that shows its matching panel when selected. Use it only inside an `auro-tabgroup`.

**Key capabilities**
- **Shows its panel**: Set `selected` to show the matching panel and hide the others.
- **Skipped by arrow keys**: Set `disabled` to skip the tab when the arrow keys move between tabs.
- **Adapts to dark backgrounds**: Set `appearance="inverse"` on the tab group to restyle its tabs for dark backgrounds.

**Example**
```html
<auro-tabgroup>
  <div slot="tabs">
    <auro-tab>Baggage info</auro-tab>
  </div>
  <div slot="panels">
    <auro-tabpanel>Baggage details</auro-tabpanel>
  </div>
</auro-tabgroup>
```

### Properties and attributes

| Properties | Attributes | Modifiers | Type                   | Default   | Description                                                                                                                                              |
| ---------- | ---------- | --------- | ---------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appearance | appearance |           | "default" \| "inverse" | `default` | Sets the color scheme for the background the tab sits on. Use `inverse` on dark backgrounds. The tab group sets this for you.                            |
| disabled   | disabled   |           | boolean                |           | Skips the tab when the arrow keys move between tabs and stops clicks from selecting it. Doesn't currently stop the `selectTab` method from selecting it. |
| selected   | selected   |           | boolean                |           | Shows this tab's panel and hides the others.                                                                                                             |

### Methods

| Name     | Parameters                                                    | Return | Description                                              |
| -------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. |

### CSS shadow parts

| Name     | Description                                   |
| -------- | --------------------------------------------- |
| tab-root | The wrapper element around the tab's content. |

# auro-tabgroup

Groups tabs and panels so that one panel shows at a time.

**Key capabilities**
- **Selects on focus**: Set `selectonfocus` to select a tab as soon as the arrow keys, `Home`, or `End` move focus to it.
- **Adapts to dark backgrounds**: Set `appearance="inverse"` to restyle the tabs for dark backgrounds.
- **Keyboard navigation**: Always on. The left and right arrow keys, `Home`, and `End` move between tabs.

**Example**
```html
<auro-tabgroup>
  <div slot="tabs">
    <auro-tab>First tab</auro-tab>
    <auro-tab>Second tab</auro-tab>
  </div>
  <div slot="panels">
    <auro-tabpanel>First panel</auro-tabpanel>
    <auro-tabpanel>Second panel</auro-tabpanel>
  </div>
</auro-tabgroup>
```

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
```html
<auro-tabgroup>
  <div slot="tabs">
    <auro-tab>Baggage info</auro-tab>
  </div>
  <div slot="panels">
    <auro-tabpanel>Baggage details</auro-tabpanel>
  </div>
</auro-tabgroup>
```

### Properties and attributes

| Properties | Attributes | Modifiers | Type    | Default | Description                                                                                  |
| ---------- | ---------- | --------- | ------- | ------- | -------------------------------------------------------------------------------------------- |
| hidden     | hidden     |           | boolean |         | Hides the panel and removes it from the keyboard tab order. The tab group sets this for you. |

### Methods

| Name     | Parameters                                                    | Return | Description                                              |
| -------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. |