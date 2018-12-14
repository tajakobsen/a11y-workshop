import { hide, show } from '../common/scripts/common.js';

const maskEl         = document.querySelector(".mask");
const showButtonEl   = document.getElementById('button-show-dialog');
const closeButtonEl  = document.getElementById('button-dialog-close');
const selectButtonEl = document.getElementById('button-dialog-select');
const displayJobEl   = document.getElementById('display-job');
const imageEl        = document.querySelector('img');
const choiceEls      = document.querySelectorAll('.choice');

/**
 * @type {Object.<string, string>}
 */
const images = {
  "Designer": "../common/images/undraw_designer_girl.svg",
  "Developer": "../common/images/undraw_hello.svg",
  "Operations": "../common/images/undraw_maintenance.svg"
};

/**
 * Initializes the app
 */
function init() {
  showButtonEl.addEventListener('click', () => show(maskEl));
  closeButtonEl.addEventListener('click', () => hide(maskEl));
  selectButtonEl.addEventListener('click', () => {
    if (!selectButtonEl.classList.contains('disabled')) {
      const job = getSelectedJob();
      updateDescription(job);
      updateImage(job);
      hide(maskEl);
    }
  });

  choiceEls.forEach(el => {
    el.addEventListener('click', () => {
      choiceEls.forEach(unselect);
      enable(selectButtonEl);
      select(el);
    })
  })
}

/**
 * Returns the selected job
 * @returns {String}
 */
function getSelectedJob () {
  return document.querySelector('.choice.selected').textContent;
}

/**
 * Updates the description field
 * @param {String} job
 */
function updateDescription (job) {
  displayJobEl.innerHTML = `My job: <strong>${job}</strong>`;
}

/**
 * Updates the image
 * @param {String} job
 */
function updateImage(job) {
  imageEl.src = images[job];
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

/**
 * Removes "disabled" from an element
 * @param {Element} el
 */
function enable(el) {
  el.classList.remove('disabled');
}

init();