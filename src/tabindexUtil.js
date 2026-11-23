/**
 * Finds the next tab to focus while skipping disabled tabs.
 */
export class TabIndexUtil {
  /**
   * Gets the index of the previous tab that isn't disabled, wrapping to the last tab from the first.
   * @param {number} focusedIdx - The index of the currently focused tab.
   * @param {Array<HTMLElement>} tabs - The tabs to search.
   * @returns {number} The index of the previous tab that isn't disabled, or the focused index if every tab is disabled.
   */
  static getPreviousNotDisabledIndex(focusedIdx, tabs) {
    let newIdx = focusedIdx;
    // Visit each tab at most once so a group of only disabled tabs can't loop forever.
    for (let visited = 0; visited < tabs.length; visited += 1) {
      newIdx = newIdx === 0 ? tabs.length - 1 : newIdx - 1;
      if (!tabs[newIdx].hasAttribute("disabled")) {
        return newIdx;
      }
    }
    return focusedIdx;
  }

  /**
   * Gets the index of the next tab that isn't disabled, wrapping to the first tab from the last.
   * @param {number} focusedIdx - The index of the currently focused tab.
   * @param {Array<HTMLElement>} tabs - The tabs to search.
   * @returns {number} The index of the next tab that isn't disabled, or the focused index if every tab is disabled.
   */
  static findNextNotDisabledIndex(focusedIdx, tabs) {
    let newIdx = focusedIdx;
    // Visit each tab at most once so a group of only disabled tabs can't loop forever.
    for (let visited = 0; visited < tabs.length; visited += 1) {
      newIdx = newIdx === tabs.length - 1 ? 0 : newIdx + 1;
      if (!tabs[newIdx].hasAttribute("disabled")) {
        return newIdx;
      }
    }
    return focusedIdx;
  }
}
