/**
 *  initiates listeners
 */
function init() {
  const tabs = document.querySelectorAll('li');
  const tabPanels = document.querySelectorAll('.tabpanel');

  tabs.forEach(tab => {
    // Add click event listener to
    tab.addEventListener('click', event => onSelect(tabs, tabPanels, event.srcElement));
  });
}

/**
 *
 * @param {NodeList<HTMLElement>} tabs
 * @param {NodeList<HTMLElement>} panels
 * @param {HTMLElement} selectedElement
 */
function onSelect(tabs, panels, selectedElement) {
  const tabPanelId = selectedElement.dataset.tabShow;
  const tabPanelElement = document.getElementById(tabPanelId);

  // show only selected
  addClassToAll(panels, 'hidden');
  tabPanelElement.classList.remove('hidden');

  // set selected
  removeClassFromAll(tabs, 'selected');
  selectedElement.classList.add('selected');
}

/**
 * Adds a class to all elements
 * @param {NodeList<HTMLElement>} elements
 * @param {String} cls
 */
function addClassToAll(elements, cls){
  elements.forEach(el => el.classList.add(cls));
}

/**
 * Removes a class from all elements
 * @param {NodeList<HTMLElement>} elements
 * @param {String} cls
 */
function removeClassFromAll(elements, cls) {
  elements.forEach(el => el.classList.remove(cls));
}

// initiate
init();