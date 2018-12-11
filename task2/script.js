const images = {
  "Designer": "../common/images/undraw_designer_girl.svg",
  "Developer": "../common/images/undraw_hello.svg",
  "Operations": "../common/images/undraw_maintenance.svg"
};

function init() {
  const showButton = document.querySelector('#button-show-dialog');
  const dialog = document.querySelector('#dialog');
  const closeButton  = document.querySelector('#button-dialog-close');
  const selectButton = document.querySelector('#button-dialog-select');
  const displayJob  = document.querySelector('#display-job');
  const image  = document.querySelector('img');

  showButton.addEventListener('click', () => show(dialog));
  closeButton.addEventListener('click', () => hide(dialog));
  selectButton.addEventListener('click', () => {
    const job = document.querySelector('input[name="job"]:checked').value;
    displayJob.innerHTML = `My job: <strong>${job}</strong>`;
    image.src = images[job];
    hide(dialog);
  });
}

function show(el) {
  el.classList.remove('hidden');
}

function hide(el) {
  el.classList.add('hidden');
}

init();