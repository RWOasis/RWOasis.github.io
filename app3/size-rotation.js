/* global AFRAME */
AFRAME.registerComponent('size-rotation', {
  init: function () {
    this.bindMethods();
    this.el.sceneEl.addEventListener('sliderchanged2', this.onSliderChanged2);
  },

  bindMethods: function () {
    this.onSliderChanged2 = this.onSliderChanged2.bind(this);
  },

  onSliderChanged2: function (evt) {

    var rotation = evt.detail.value;
    this.el.object3D.rotation.set(0, rotation, 0);
  }
});
