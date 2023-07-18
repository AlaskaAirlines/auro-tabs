function onTabSelected(e) {
  alert(`Tab selected: ${e.target.innerText}`);
}

function addListener() {
  window.addEventListener('tab-selected', onTabSelected)
}

function removeListener() {
  window.removeEventListener('tab-selected', onTabSelected)
}
