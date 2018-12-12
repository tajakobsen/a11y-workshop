import { hide, show } from '../common/scripts/common.js';

const showButtonEl   = document.getElementById('button-show-dialog');
const dialogEl       = document.getElementById('dialog');
const closeButtonEl  = document.getElementById('button-dialog-close');
const selectButtonEl = document.getElementById('button-dialog-select');
const displayJobEl   = document.getElementById('display-job');
const imageEl        = document.querySelector('img');

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
  showButtonEl.addEventListener('click', () => show(dialogEl));
  closeButtonEl.addEventListener('click', () => hide(dialogEl));
  selectButtonEl.addEventListener('click', () => {
    const job = getSelectedJob();
    updateDescription(job);
    updateImage(job);
    hide(dialogEl);
  });
}

/**
 * Returns the selected job
 * @returns {String}
 */
function getSelectedJob () {
  return document.querySelector('input[name="job"]:checked').value;
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

init();