Cube("/hZebra/V1.0.1/index.js", ["/node_modules/jquery/dist/jquery.js", "/node_modules/bcore/event.js", "/node_modules/lodash/lodash.js"], function (module, exports, require, load, process, global) {

  function _instanceof(left, right) {if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {return !!right[Symbol.hasInstance](left);} else {return left instanceof right;}}
  var $ = require('/node_modules/jquery/dist/jquery.js');
  var Event = require('/node_modules/bcore/event.js');
  var _ = require('/node_modules/lodash/lodash.js');
  module.exports = Event.extend(function Base(container) {
    this.container = $(container);
    this.imgBaseUrl = "".concat(window.baseUrl, "hZebra/img/");
  }, {
    render: function render(config, data) {
      var _this2 = this;
      this.config = _.defaultsDeep(config || {}, this.config);
      this.data = _.cloneDeep(data);
      this.destroy();
      if (!data) {
        this.container.html('<div class="err-container">数据不匹配</div>');
        return;
      }
      this.container.css({
        position: 'relative',
        boxSizing: 'border-box' });

      var canvasW = this.container.width(),
      canvasH = this.container.height() * config.proportionBar.height / 100,
      gridW = this.container.width() * (100 - config.proportionBar.spacing) / (100 * config.proportionBar.segment - config.proportionBar.spacing),
      gap = config.proportionBar.spacing * gridW / (100 - config.proportionBar.spacing),
      radius = 2 * config.proportionBar.radius < Math.min(gridW, canvasH) ? config.proportionBar.radius : Math.min(gridW, canvasH) / 2,
      drawData = {
        g: gridW + gap,
        w: gridW,
        h: canvasH,
        r: radius },

      bgStyle = config.indicator ? "display: block; position: absolute;\n             right: ".concat(-16 - config.indicator.bgSetting.width, "px;\n             top: 0px;\n             height: ").concat(this.container.height(), "px;\n             width: ").concat(config.indicator.bgSetting.width, "px;\n            ") : 'display: none;',
      bgBoxStyle = config.indicator ? "position:absolute;\n             top: ".concat(config.indicator.bgSetting.offsetY, "px;\n             left: ").concat(config.indicator.bgSetting.offsetX, "px;\n             width: 100%;\n             height: 100%;\n             background:url(").concat(config.indicator.bgSetting.bgPic.control === 'builtInImg' ? this.imgBaseUrl + config.indicator.bgSetting.bgPic.builtInImg.photoSelect + '.png' : config.indicator.bgSetting.bgPic.localImg.src, ") no-repeat;\n             background-size: 100% 100%;\n            ") : '',
      digitalStyle = config.indicator ? "position: absolute;\n             top: calc(50% + ".concat(config.indicator.offsetY, "px);\n             left: calc(50% + ").concat(config.indicator.offsetX, "px);\n             transform: translateX(-50%) translateY(-50%);\n             font-family: ").concat(config.indicator.fontFamily, ";\n             font-size: ").concat(config.indicator.fontSize, "px;\n             font-weight: ").concat(config.indicator.fontStyle.sel, ";\n             font-style: ").concat(config.indicator.fontStyle.ch.includes('italic') ? 'italic' : 'normal', ";\n             color: ").concat(config.indicator.color, ";\n            ") : '';
      this.container.append("<div class=\"hZebra\" style=\"width:100%;height:100%;position:relative;display:flex;align-items:center;\">\n        <canvas width=\"".concat(canvasW, "\" height=\"").concat(canvasH, "\"></canvas>\n        <div class=\"indicator\" style=\"").concat(bgStyle, "\">\n          <div class=\"bgBox\" style=\"").concat(bgBoxStyle, "\"></div>\n          <div class=\"digital\" style=\"").concat(digitalStyle, "\">").concat(config.indicator ? config.indicator.accuracy === 'decimal' ? this.data[0].value.toFixed(2) : Math.floor(this.data[0].value) : '', "% \n          </div>\n        </div>\n      </div>"));
      this.context = this.container.find('canvas')[0].getContext('2d');
      this._drawBar(drawData);
      this._drawGrid(drawData);
      this.timer = setInterval(function () {
        _this2._drawBar(drawData);
        _this2._drawGrid(drawData);
      }, this.config.animation.interval * 1000);
    },
    _drawBar: function _drawBar(drawData) {
      this.context.save();
      this.context.beginPath(0);
      for (var i = 0; i < this.config.proportionBar.segment; i++) {
        this._drawRect(this.context, drawData.w, drawData.h, drawData.r);
        this.context.translate(drawData.g, 0);
      }
      this.context.fillStyle = this.config.proportionBar.fillColor;
      this.context.fill();
      this.context.restore();
    },
    _drawGrid: function _drawGrid(drawData) {
      var _this3 = this;
      var _this = this,
      count = Math.floor(this.config.proportionBar.segment * this.data[0].value / 100),
      more = this.config.proportionBar.segment * this.data[0].value / 100 - count,
      linear = this.context.createLinearGradient(0, 0, Math.floor(drawData.g * count + drawData.w * more), 0);
      if (this.config.proportionBar.linearGragdient) {
        linear.addColorStop(0, this.config.proportionBar.startColor);
        linear.addColorStop(1, this.config.proportionBar.endColor);
      } else {
        linear.addColorStop(0, this.config.proportionBar.startColor);
        linear.addColorStop(1, this.config.proportionBar.startColor);
      }
      this.context.fillStyle = linear;
      this.context.beginPath(0);
      for (var i = 0; i < count; i++) {
        (function (i) {
          setTimeout(function () {
            _this._drawRect(_this.context, drawData.w, drawData.h, drawData.r);
            _this.context.translate(drawData.g, 0);
            _this.context.save();
            _this.context.translate(-(i + 1) * drawData.g, 0);
            _this.context.fill();
            _this.context.restore();
          }, i * _this.config.animation.duration * 1000 / count);
        })(i);
      }
      setTimeout(function () {
        if (drawData.w > 2 * drawData.r) {
          if (drawData.w * more <= drawData.r) {
            _this3._drawRect1(_this3.context, drawData.w * more, drawData.h, drawData.r);
          } else if (drawData.w * more > drawData.r && drawData.w * more <= drawData.w - drawData.r) {
            _this3._drawRect2(_this3.context, drawData.w * more, drawData.h, drawData.r);
          } else {
            _this3._drawRect3(_this3.context, drawData.w * more, drawData.h, drawData.r, drawData.w);
          }
        } else {
          if (drawData.w * more <= drawData.r) {
            _this3._drawRect1(_this3.context, drawData.w * more, drawData.h, drawData.r);
          } else {
            _this3._drawRect4(_this3.context, drawData.w * more, drawData.h, drawData.r);
          }
        }
        _this3.context.translate(-drawData.g * count, 0);
        _this3.context.fill();
      }, _this.config.animation.duration * 1000);
    },
    _drawRect: function _drawRect(ctx, width, height, radius) {
      ctx.moveTo(width, height - radius);
      ctx.arc(width - radius, height - radius, radius, 0, Math.PI / 2);
      ctx.lineTo(radius, height);
      ctx.arc(radius, height - radius, radius, Math.PI / 2, Math.PI);
      ctx.lineTo(0, radius);
      ctx.arc(radius, radius, radius, Math.PI, Math.PI * 3 / 2);
      ctx.lineTo(width - radius, 0);
      ctx.arc(width - radius, radius, radius, Math.PI * 3 / 2, Math.PI * 2);
      ctx.lineTo(width, height - radius);
    },
    _drawRect1: function _drawRect1(ctx, width, height, radius) {
      var angle = Math.acos((radius - width) / radius);
      ctx.moveTo(width, radius - radius * Math.sin(angle));
      ctx.lineTo(width, height - (radius - radius * Math.sin(angle)));
      ctx.arc(radius, height - radius, radius, Math.PI - angle, Math.PI);
      ctx.lineTo(0, height - radius);
      ctx.arc(radius, radius, radius, Math.PI, Math.PI + angle);
    },
    _drawRect2: function _drawRect2(ctx, width, height, radius) {
      ctx.moveTo(width, 0);
      ctx.lineTo(width, height);
      ctx.lineTo(radius, height);
      ctx.arc(radius, height - radius, radius, Math.PI / 2, Math.PI);
      ctx.lineTo(0, radius);
      ctx.arc(radius, radius, radius, Math.PI, Math.PI * 3 / 2);
      ctx.lineTo(width, 0);
    },
    _drawRect3: function _drawRect3(ctx, width, height, radius, canWidth) {
      var angle = Math.acos((radius - canWidth + width) / radius);
      ctx.moveTo(width, radius - radius * Math.sin(angle));
      ctx.lineTo(width, height - (radius - radius * Math.sin(angle)));
      ctx.arc(canWidth - radius, height - radius, radius, angle, Math.PI / 2);
      ctx.lineTo(radius, height);
      ctx.arc(radius, height - radius, radius, Math.PI / 2, Math.PI);
      ctx.lineTo(0, radius);
      ctx.arc(radius, radius, radius, Math.PI, Math.PI * 3 / 2);
      ctx.lineTo(canWidth - radius, 0);
      ctx.arc(canWidth - radius, radius, radius, Math.PI * 3 / 2, Math.PI * 2 - angle);
    },
    _drawRect4: function _drawRect4(ctx, width, height, radius) {
      var angle = Math.acos((width - radius) / radius);
      ctx.moveTo(width, radius - radius * Math.sin(angle));
      ctx.lineTo(width, height - (radius - radius * Math.sin(angle)));
      ctx.arc(radius, height - radius, radius, angle, Math.PI);
      ctx.lineTo(0, radius);
      ctx.arc(radius, radius, radius, Math.PI, 2 * Math.PI - angle);
    },
    updateConfig: function updateConfig(config) {
      if (_instanceof(config, Object) && !config.length) {
        this.render(config, this.data);
      } else {
        console.warn('更新组件配置失败，传入参数有误');
      }
    },
    destroy: function destroy() {
      this.context = null;
      clearInterval(this.timer);
      this.container.empty();
    } });return module.exports;});