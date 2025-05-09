export function selectFirstTab() {
  const tabs = document.querySelector("#select-tab-example");
  tabs.selectTab(tabs.allTabs[0]);
}

export function selectSecondTab() {
  const tabs = document.querySelector("#select-tab-example");
  const tabItems = tabs.allTabs;
  tabs.selectTab([...tabItems][1]);
}

export function selectLastTab() {
  const tabs = document.querySelector("#select-tab-example");
  tabs.selectTab(tabs.allTabs[tabs.allTabs.length - 1]);
}
