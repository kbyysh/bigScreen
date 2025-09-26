Cube("/shapeRect/V1.1.2/index.js", ["/node_modules/jquery/dist/jquery.js", "/node_modules/bcore/event.js", "/node_modules/lodash/lodash.js"], function (module, exports, require, load, process, global) {

  function _instanceof(left, right) {if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {return !!right[Symbol.hasInstance](left);} else {return left instanceof right;}}
  var $ = require('/node_modules/jquery/dist/jquery.js');
  var Event = require('/node_modules/bcore/event.js');
  var _ = require('/node_modules/lodash/lodash.js');
  module.exports = Event.extend(function Base(container) {
    this.container = $(container);
  }, {
    render: function render(config) {
      this.config = _.defaultsDeep(config || {}, this.config);
      this.destroy();
      var borderW = this.config.borderWidth;
      var borderRadius = this.config.radius;
      var rotate = this.config.rotate;
      var opacity = this.config.opacity;
      this.container.append('<div class="rect"></div>');
      this.container.find('.rect').css({
        width: '100%',
        height: '100%',
        opacity: opacity,
        transform: 'rotate(' + rotate + 'deg)',
        overflow: 'hidden',
        'box-sizing': 'border-box',
        border: borderW + 'px solid',
        'border-radius': borderRadius + 'px',
        background: this.config.linearGradientForArea ? 'linear-gradient(' + this.config.fillLinear + ',' + this.config.fillStart + ',' + this.config.fillEnd + ')' : this.config.fillStart,
        'background-color': this.config.fillStart,
        'border-image': this.config.linearGradientForBorder ? 'linear-gradient(' + this.config.strokeLinear + ',' + this.config.strokeStart + ', ' + this.config.strokeEnd + ') 10 10' : this.config.strokeStart,
        'border-color': this.config.linearGradientForBorder ? this.config.strokeStart : this.config.strokeStart });

    },
    updateConfig: function updateConfig(config) {
      if (_instanceof(config, Object) && !config.length) {
        this.render(config);
      } else {
        console.warn('更新组件配置失败，传入参数有误');
      }
    },
    destroy: function destroy() {
      this.container.empty();
    } });return module.exports;});