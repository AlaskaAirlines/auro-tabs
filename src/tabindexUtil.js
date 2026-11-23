/**
 * Finds the next tab to focus while skipping disabled tabs.
 */
export class TabIndexUtil {
  /**
   * Gets the index of the previous tab that isn't disabled, wrapping to the last tab from the first.
   * @param {number} focusedIdx - The index of the currently focused tab.
   * @param {Array<HTMLElement>} tabs - The tabs to search.
   * @returns {number} The index of the previous tab that isn't disabled.
   */
  static getPreviousNotDisabledIndex(focusedIdx, tabs) {
    let newIdx = focusedIdx;
    const decrement = () => {
      if (newIdx === 0) {
        newIdx = tabs.length - 1;
      } else {
        newIdx -= 1;
      }
    };
    // do decrement for first time.
    decrement();

    while (tabs[newIdx].hasAttribute("disabled")) {
      decrement();
    }
    return newIdx;
  }

  /**
   * Gets the index of the next tab that isn't disabled, wrapping to the first tab from the last.
   * @param {number} focusedIdx - The index of the currently focused tab.
   * @param {Array<HTMLElement>} tabs - The tabs to search.
   * @returns {number} The index of the next tab that isn't disabled.
   */
  static findNextNotDisabledIndex(focusedIdx, tabs) {
    let newIdx = focusedIdx;
    const increment = () => {
      if (newIdx === tabs.length - 1) {
        newIdx = 0;
      } else {
        newIdx += 1;
      }
    };
    // do increment for first time.
    increment();

    while (tabs[newIdx].hasAttribute("disabled")) {
      increment();
    }
    return newIdx;
  }
}
