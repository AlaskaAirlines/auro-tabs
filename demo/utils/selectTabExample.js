function selectFirstTab() {
  const tabs = document.querySelector('#select-tab-example')
  tabs.selectTab(tabs.firstTab())
}

function selectSecondTab() {
  const tabs = document.querySelector('#select-tab-example')
  const tabItems = tabs.allTabs()
  tabs.selectTab([...tabItems][1])
}

function selectLastTab() {
  const tabs = document.querySelector('#select-tab-example')
  tabs.selectTab(tabs.lastTab())
}
