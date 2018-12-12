import { hide, show, isHidden } from '../common/scripts/common.js';

/**
 * @type {HTMLVideoElement}
 */
const video                   = document.querySelector('video');
const playPauseButtonEl       = document.getElementById('play-pause-button');
const muteButtonEl            = document.getElementById('mute-button');
const playbackRateMenuItemEls = document.querySelectorAll('.playback-rate [data-playback-rate]');
const playbackRateButtonEl    = document.getElementById('playback-rate-button');
const playbackRateMenuEl      = document.querySelector('.menu');
const sliderEl                = document.querySelector('.slider');

/**
 * Enum for css-classes
 * @enum {String}
 */
const classes = {
  PLAY: 'fa-play',
  PAUSE: 'fa-pause',
  MUTED: 'fa-volume-off',
  UN_MUTED: 'fa-volume-up'
};

/**
 *  initiates listeners
 */
function init() {
  playPauseButtonEl.addEventListener('click', togglePlayPause);
  muteButtonEl.addEventListener('click', toggleMute);
  playbackRateButtonEl.addEventListener('click', togglePlaybackRateMenu);

  playbackRateMenuItemEls.forEach(el => {
    el.addEventListener('click', () => updatePlaybackRate(el))
  });

  setInterval(updateSlider, 30);
}

/**
 * Updates the slider position based on the video position
 */
function updateSlider() {
  sliderEl.style.left = `${video.currentTime * 100 / video.duration}%`;
}

/**
 * Starts and stops the video and changes the icon of the button
 */
function togglePlayPause () {
  if (isPlaying()) {
    video.pause();
    updatePlayPauseButton(true);
  } else {
    video.play().then(() => updatePlayPauseButton(false));
  }
}

/**
 * Toggles whether the video is muted, and updates the button icon
 */
function toggleMute() {
  video.muted = !video.muted;
  muteButtonEl.classList.add(video.muted ? classes.MUTED : classes.UN_MUTED);
  muteButtonEl.classList.remove(video.muted ? classes.UN_MUTED: classes.MUTED);
}

/**
 * Opens and closes the playback rate menu
 */
function togglePlaybackRateMenu() {
  const menu = playbackRateMenuEl;
  const toggle = (isHidden(menu) ? show : hide);
  toggle(menu);
}

/**
 * Updates the video with the selected playback rate, and sets the correct item checked
 * @param {HTMLElement|Element} el
 */
function updatePlaybackRate(el) {
  video.playbackRate = parseFloat(el.dataset.playbackRate);
  playbackRateMenuItemEls.forEach(el => el.classList.remove('checked'));
  el.classList.add('checked');
  hide(playbackRateMenuEl);
}

/**
 * Returns true if the video is playing
 * @returns {boolean}
 */
function isPlaying() {
  return video.paused === false;
}

/**
 * Updates the play/pause button based on the input
 * @param {boolean} isPlaying
 */
function updatePlayPauseButton (isPlaying) {
  playPauseButtonEl.classList.add(isPlaying ? classes.PLAY : classes.PAUSE);
  playPauseButtonEl.classList.remove(isPlaying ? classes.PAUSE : classes.PLAY );
}

// initiate
init();