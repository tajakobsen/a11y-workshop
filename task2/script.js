const images = {
  "Designer": "../common/images/undraw_designer_girl.svg",
  "Developer": "../common/images/undraw_hello.svg",
  "Operations": "../common/images/undraw_maintenance.svg"
};

function init() {
  const showButtonEl   = document.querySelector('#button-show-dialog');
  const dialogEl       = document.querySelector('#dialog');
  const closeButtonEl  = document.querySelector('#button-dialog-close');
  const selectButtonEl = document.querySelector('#button-dialog-select');

  showButtonEl.addEventListener('click', () => show(dialogEl));
  closeButtonEl.addEventListener('click', () => hide(dialogEl));
  selectButtonEl.addEventListener('click', () => {
    const job = getSelectedJob();
    updateDescription(job);
    updateImage(job);
    hide(dialogEl);
  });
}

function getSelectedJob () {
  return document.querySelector('input[name="job"]:checked').value;
}

function updateDescription (job) {
  document.querySelector('#display-job').innerHTML = `My job: <strong>${job}</strong>`;
}

function updateImage(job) {
  document.querySelector('img').src = images[job];
}

function show(el) {
  el.classList.remove('hidden');
}

function hide(el) {
  el.classList.add('hidden');
}

init();