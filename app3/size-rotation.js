/* global AFRAME */
AFRAME.registerComponent('size-change', {
  init: function () {
    this.bindMethods();
    this.el.sceneEl.addEventListener('sliderchanged', this.onSliderChanged);
  },

  bindMethods: function () {
    this.onSliderChanged = this.onSliderChanged.bind(this);
  },

  onSliderChanged: function (evt) {

    var rotation = evt.detail.value;
    this.el.object3D.rotation.set(0, rotation, 0);
  }
});
