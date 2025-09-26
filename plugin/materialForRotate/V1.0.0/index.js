Cube("/materialForRotate/V1.0.0/index.js", ["/node_modules/jquery/dist/jquery.js", "/node_modules/lodash/lodash.js", "/node_modules/bcore/event.js"], function (module, exports, require, load, process, global) {

  function _instanceof(left, right) {if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {return !!right[Symbol.hasInstance](left);} else {return left instanceof right;}}
  var $ = require('/node_modules/jquery/dist/jquery.js');
  var _ = require('/node_modules/lodash/lodash.js');
  var Event = require('/node_modules/bcore/event.js');
  load('/_requireModules/css/charts.css.js', '');
  module.exports = Event.extend(function Base(container) {
    this.container = $(container);
    this.imgBaseUrl = "".concat(window.baseUrl, "materialForRotate/img/");
  }, {
    render: function render(config) {
      var _this = this;
      this.config = _.defaultsDeep(config || {}, this.config);
      this.destroy();
      this.config.styleSetting.pics.forEach(function (value, index) {
        var src = value.chooseImg.control === 'builtInList' ? "".concat(_this.imgBaseUrl + value.chooseImg.builtInList.photoSelect, ".png") : value.chooseImg.localList.src;
        _this._reconfigure(index, value, src);
      });
      this.container.on('click', function () {
        _this.emit('eventClick');
      });
    },
    _reconfigure: function _reconfigure(index, value, src) {
      this.container.css({
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        overflow: 'hidden' });

      this.container.append("<div class=\"plane\" style=\"\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      transform: rotateX(".concat(value.xRotationAngle, "deg) rotateY(").concat(value.yRotationAngle, "deg)\n    \">\n      <div class=\"img-item\" style=\"\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        position: absolute;\n        top: 0;\n        left: 0;\n      \">\n        <img src=\"").concat(src, "\" style=\"\n          width: ").concat(value.sizeProportion, "%;\n          height: ").concat(value.sizeProportion, "%;\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translateX(-50%) translateY(-50%);\n        \"/>\n      </div>\n    </div>"));
      setting = "".concat(value.direction === 'Clockwise' ? 'rotate' : 'rotate_anti', " ").concat(value.period, "ms ").concat(value.rateCurve, " 1"), setting1 = "".concat(value.direction === 'Clockwise' ? 'rotate' : 'rotate_anti', " ").concat(value.period, "ms ").concat(value.rateCurve, " infinite"), $cur = this.container.find('.img-item').eq(index);
      $("<style>\n        @keyframes rotate {\n          0%{\n            transform: rotate(0deg);\n          }\n          100%{\n            transform: rotate(360deg);\n          }\n        }\n        @keyframes rotate_anti {\n          0%{\n            transform: rotate(0deg);\n          }\n          100%{\n            transform: rotate(-360deg);\n          }\n        }\n        </style>").appendTo('head');
      if (value.interval <= 0) {
        $cur.css('animation', setting1);
      } else {
        $cur.css('animation', setting);
        $cur.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
          $cur.css('animation', '');
          setTimeout(function () {
            $cur.css('animation', setting);
          }, value.interval);
        });
      }
    },
    updateConfig: function updateConfig(config) {
      if (_instanceof(config, Object) && !config.length) {
        this.render(config);
      } else {
        console.warn('更新组件配置失败，传入参数有误');
      }
    },
    destroy: function destroy() {
      this.container.off('click');
      this.container.empty();
    } });return module.exports;});