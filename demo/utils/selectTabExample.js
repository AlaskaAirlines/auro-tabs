function getTabs() {
  const tabGroup = document.querySelector("#select-tab-example");
  return { tabGroup, tabs: [...tabGroup.querySelectorAll("auro-tab")] };
}

export function selectFirstTab() {
  const { tabGroup, tabs } = getTabs();
  tabGroup.selectTab(tabs[0]);
}

export function selectSecondTab() {
  const { tabGroup, tabs } = getTabs();
  tabGroup.selectTab(tabs[1]);
}

export function selectLastTab() {
  const { tabGroup, tabs } = getTabs();
  tabGroup.selectTab(tabs[tabs.length - 1]);
}
