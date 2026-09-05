export function onTabSelected(e) {
  console.info(`Tab selected: ${e.target.innerText}`);
}

export function addListener() {
  window.addEventListener("tab-selected", onTabSelected);
}

export function removeListener() {
  window.removeEventListener("tab-selected", onTabSelected);
}
