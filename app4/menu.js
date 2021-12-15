/* global AFRAME */
AFRAME.registerComponent('menu', {
  init: function () {
    var el = this.el;
    var menuBackGroundEl = document.createElement('a-entity');
    menuBackGroundEl.setAttribute('geometry', {
      primitive: 'box',
      width: 0.6,
      height: 0.42,
      depth: 0.01
    });
    menuBackGroundEl.setAttribute('material', {
      color: 'white'
    });
    menuBackGroundEl.setAttribute('position', '0 0.15 -0.025');
    el.appendChild(menuBackGroundEl);
  }
});
