Cube("/shapeOval/V1.0.0/index.js", ["/node_modules/jquery/dist/jquery.js", "/node_modules/bcore/event.js", "/node_modules/lodash/lodash.js"], function (module, exports, require, load, process, global) {

  var $ = require('/node_modules/jquery/dist/jquery.js');
  var Event = require('/node_modules/bcore/event.js');
  var _ = require('/node_modules/lodash/lodash.js');
  module.exports = Event.extend(function Base(container) {
    this.container = $(container);
  }, {
    render: function render(config, data) {
      this.destroy();
      var _this = this;
      setTimeout(function () {
        var w = _this.container.width();
        var h = _this.container.height();
        _this.container.append('<div style="position: absolute;transform:rotate(' + config.rotate + 'deg);"><canvas style="position: absolute;top:0;left:0" id="shape" width="' + w + '" height="' + h + '"></canvas></div>');
        var canvas = _this.container.context.firstChild.firstChild;
        canvas.style.opacity = config.opacity;
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        if (w == h) {
          ctx.arc(w / 2, h / 2, (w - config.borderWidth) / 2, 0, 2 * Math.PI);
        } else {
          if (ctx.ellipse) {
            ctx.ellipse(w / 2, h / 2, 0.5 * w - config.borderWidth, 0.5 * h - config.borderWidth, 0, 0, Math.PI * 2);
          } else {
            console.log('no ellipse!');
          }
        }
        ctx.closePath();
        ctx.lineWidth = config.borderWidth;
        ctx.strokeStyle = config.stroke;
        ctx.stroke();
        ctx.fillStyle = config.fill;
        ctx.fill();
        ctx.restore();
      }, 300);
    },
    destroy: function destroy() {
      this.container.empty();
    } });return module.exports;});