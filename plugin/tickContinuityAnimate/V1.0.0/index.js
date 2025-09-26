Cube("/tickContinuityAnimate/V1.0.0/index.js", ["/node_modules/jquery/dist/jquery.js", "/node_modules/bcore/event.js", "/node_modules/lodash/lodash.js"], function (module, exports, require, load, process, global) {

  function _instanceof(left, right) {if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {return !!right[Symbol.hasInstance](left);} else {return left instanceof right;}}
  var $ = require('/node_modules/jquery/dist/jquery.js');
  var Event = require('/node_modules/bcore/event.js');
  var _ = require('/node_modules/lodash/lodash.js');
  load('/_requireModules/css/charts.css.js', '');
  module.exports = Event.extend(function Base(container) {
    this.container = $(container);
  }, {
    render: function render(config) {
      this.config = _.defaultsDeep(config || {}, this.config);
      this.destroy();
      var style = this.config.tickStyle;
      var animation = this.config.animation;
      var dis = style.tickWidth - style.tickDistance;
      var tickBackground = style.linearGradient ? "linear-gradient(to right, ".concat(style.startColor, ", ").concat(style.endColor, ")") : style.startColor;
      var tickDom = '';
      var tickStyle = "\n        width: ".concat(style.width, "px;\n        height: ").concat(style.tickHeight, "px;\n        position: absolute;\n        left: -").concat(style.width, "px;\n        background: ").concat(tickBackground, ";\n        clip-path: polygon(\n          0 0,\n          0 calc(50% - ").concat(style.lineHeight / 2, "px),\n          calc(100% - ").concat(dis, "px) calc(50% - ").concat(style.lineHeight / 2, "px),\n          calc(100% - ").concat(style.tickWidth, "px) 0,\n          100% 50%,\n          calc(100% - ").concat(style.tickWidth, "px) 100%,\n          calc(100% - ").concat(dis, "px) calc(50% + ").concat(style.lineHeight / 2, "px),\n          0 calc(50% + ").concat(style.lineHeight / 2, "px)\n        );\n      ");
      if (animation) {
        tickStyle += "\n          animation-name: tickContinuityMoveAnimate;\n          animation-duration: ".concat(animation.duration, "s;\n          animation-timing-function: linear;\n          animation-iteration-count: infinite;\n          animation-fill-mode: forwards;\n        ");
      }
      for (var i = 0; i < style.size; i++) {
        tickDom += "\n          <div\n            style=\"\n              ".concat(tickStyle, "\n              animation-delay: ").concat(i * (animation.duration / style.size).toFixed(2), "s;\n            \"\n          >\n          </div>\n        ");
      }
      this.container.append("\n        <div\n          style=\"\n            width: 100%;\n            height: 100%;\n            position: relative;\n            display: flex;\n            align-items: center;\n            overflow: hidden;\n          \"\n        >\n          ".concat(tickDom, "\n        </div>\n      "));
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