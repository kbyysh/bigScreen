Cube("/word3D/V1.0.1/index.js", ["/node_modules/jquery/dist/jquery.js", "/node_modules/bcore/event.js", "/node_modules/lodash/lodash.js", "/_requireModules/js/tarCloud.js"], function (module, exports, require, load, process, global) {

  function _instanceof(left, right) {if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {return !!right[Symbol.hasInstance](left);} else {return left instanceof right;}}
  var $ = require('/node_modules/jquery/dist/jquery.js');
  var Event = require('/node_modules/bcore/event.js');
  var _ = require('/node_modules/lodash/lodash.js');
  var Tagcloud = require('/_requireModules/js/tarCloud.js');
  load('/_requireModules/css/charts.css.js', '');
  module.exports = Event.extend(function Base(container) {
    this.container = $(container);
  }, {
    render: function render(config, data) {
      var _this = this;
      this.config = _.defaultsDeep(config || {}, this.config);
      this.data = _.cloneDeep(data);
      this.destroy();
      this.random = (Math.random() * 10000).toFixed(0);
      var tagcloud = Tagcloud(window, document);
      this.container.append("<div style=\"overflow:hidden;height:100%;\">\n      <div class=\"wrapper\">\n        <div style=\"position: relative; margin-top: ".concat(config.style.radius + config.style.fontSizeMax, "px;\" class=\"tagcloud").concat(this.random, "\"></div>\n      </div>\n    </div>"));
      var colorLista = [],
      tagList = [],
      fontSizeMax = config.style.fontSizeMax,
      fontSizeMin = config.style.fontSizeMin,
      test;
      fontSizeMax < fontSizeMin && (fontSizeMin = fontSizeMax - 1);
      config.colorMatching.diy.map(function (v) {
        colorLista.push(v.selColor);
      });
      var colorList = Array.reverse(colorLista);
      colorList.length === 0 && (colorList = [config.colorMatching.themeType.color1[0]]);
      var tagListValue = [];
      data.map(function (v) {
        tagList.push(v.name);
        tagListValue.push(v.value);
      });
      var fontSizeSection = fontSizeMax - fontSizeMin,
      valMax = Math.max.apply(Math, tagListValue);
      data.map(function (v) {
        var num = v.value / valMax;
        v.num = num;
        v.fontSize = Math.floor(num * fontSizeSection + fontSizeMin);
        v.color = colorList[Math.floor((v.value / valMax - 0.00001) * colorList.length)];
      });
      test && function () {
        clearInterval(test[0].up);
        _this.container.find(".tagcloud".concat(_this.random)).html('');
      }();
      data.forEach(function (item) {
        _this.container.find(".tagcloud".concat(_this.random)).append("<a\n        href=\"#\"\n        cc-value=\"".concat(item.value, "\"\n        cc-fontSize =\"").concat(item.fontSize, "\"\n        style=\"font-size: ").concat(item.fontSize, "px; color: ").concat(item.color, "\"\n      >").concat(item.name, "</a>"));
      });
      test = tagcloud({
        selector: ".tagcloud".concat(this.random),
        radius: config.style.radius,
        mspeed: 10,
        ispeed: config.style.defSpeed,
        direction: config.style.direction });

      this.container.find(".tagcloud".concat(this.random, " a")).on('click', function (e) {
        _this.emit('eventClick', {
          name: $(e.target).html(),
          value: Number($(e.target).attr('cc-value')) });

      });
    },
    updateConfig: function updateConfig(config) {
      if (_instanceof(config, Object) && !config.length) {
        this.render(config, this.data);
      } else {
        console.warn('更新组件配置失败，传入参数有误');
      }
    },
    destroy: function destroy() {
      this.container.find(".tagcloud".concat(this.random, " a")).off('click');
      this.container.empty();
    } });return module.exports;});