export class TabIndexUtil {
  // we check if previous tab have 'disabled' attribute and check the following previous tab for the same thing,
  // and keeps goind on until we found the one that's not disabled.
  static getPreviousNotDisabledIndex(focusedIdx, tabs) {
    let newIdx = focusedIdx;
    const decrement = () => {
      if (newIdx === 0) {
        newIdx = tabs.length - 1;
      } else {
        newIdx -= 1;
      }
    };
    // do increment for first time.
    decrement();

    while (tabs[newIdx].hasAttribute("disabled")) {
      decrement();
    }
    return newIdx;
  }

  // we check if next tab have 'disabled' attribute and check the following next tab for the same thing,
  // and keeps goind on until we found the one that's not disabled.
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
