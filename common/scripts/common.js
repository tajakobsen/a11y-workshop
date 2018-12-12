/**
 * Shows a hidden element
 * @param {Element} el
 */
export function show(el) {
  el.classList.remove('hidden');
}

/**
 * Hides an element
 * @param {Element} el
 */
export function hide(el) {
  el.classList.add('hidden');
}

/**
 * Returns true if the hidden css class is applied to an element
 * @param {Element} el
 * @returns {boolean}
 */
export function isHidden(el) {
  return el.classList.contains('hidden')
}