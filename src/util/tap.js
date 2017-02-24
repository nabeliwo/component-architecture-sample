/**
 * タップするとclassに「tap」をつける
 */
function on() {
  const elements = document.querySelectorAll('[data-tap="btn"]');
  const eventStartName = (window.ontouchstart === undefined) ? 'mousedown' : 'touchstart';
  const eventEndName = (window.ontouchstart === undefined) ? ['mouseup'] : ['touchmove', 'touchend'];

  for (let i = 0; i < elements.length; i += 1) {
    elements[i].addEventListener(eventStartName, function loop1() {
      this.classList.add('tap');
    }, false);
    for (let j = 0; j < eventEndName.length; j += 1) {
      elements[i].addEventListener(eventEndName[j], function loop2() {
        this.classList.remove('tap');
      }, false);
    }
  }
}

export default {
  on
};
