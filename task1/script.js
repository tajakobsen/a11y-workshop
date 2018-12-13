import { hide, show } from '../common/scripts/common.js';

const tabs      = document.querySelectorAll('li');
const tabPanels = document.querySelectorAll('.tabpanel');

/**
 *  initiates listeners
 */
function init() {
  tabs.forEach(tab => {
    tab.addEventListener('click', event => onSelect(event.srcElement));
  });
}

/**
 * Shows the selected tabs panel, and highlights it
 * @param {HTMLElement} selectedElement
 */
function onSelect(selectedElement) {
  tabs.forEach(unselect);
  tabPanels.forEach(hide);

  select(selectedElement);
  show(getPanelByTab(selectedElement));
}

/**
 * Returns the tab panel corresponding to a tab
 * @param {HTMLElement} el
 * @returns {HTMLElement}
 */
function getPanelByTab(el) {
  return document.getElementById(el.dataset.tabShow);
}

/**
 * Removes selection from the passed in element
 * @param {Element} el
 */
function unselect(el) {
  el.classList.remove('selected');
}

/**
 * Selects the passed in element
 * @param {Element} el
 */
function select(el) {
  el.classList.add('selected');
}

// initiate
init();