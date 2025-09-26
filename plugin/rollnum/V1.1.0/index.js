Cube("/rollnum/V1.1.0/index.js", ["/node_modules/jquery/dist/jquery.js", "/node_modules/bcore/event.js", "/node_modules/lodash/lodash.js", "/node_modules/echarts/lib/util/throttle.js", "/node_modules/highcharts/highcharts.js"], function (module, exports, require, load, process, global) {

  function _instanceof(left, right) {if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {return !!right[Symbol.hasInstance](left);} else {return left instanceof right;}}
  var $ = require('/node_modules/jquery/dist/jquery.js');
  var Event = require('/node_modules/bcore/event.js');
  var _ = require('/node_modules/lodash/lodash.js');
  var _require = require('/node_modules/echarts/lib/util/throttle.js'),
  clear = _require.clear;
  var _require2 = require('/node_modules/highcharts/highcharts.js'),
  clearTimeout = _require2.clearTimeout;
  module.exports = Event.extend(function Base(container) {
    this.container = $(container);
  }, {
    render: function render(config, data) {
      var _this = this;
      this.config = _.defaultsDeep(config || {}, this.config);
      this.data = _.cloneDeep(data);
      this.destroy();
      this._currentNum = {
        value: 0 };

      if (!data) {
        this.container.html('<div class="err-container">数据不匹配</div>');
        return;
      }
      this.totalNum = this.data[0].value;
      this.startNum = this.config.number.update === 'zero' ? 0 : parseInt(this._currentNum['value']);
      this.container.append("<div class=\"roll-num\" style=\"height:100%; overflow:hidden;\">\n                               <div class=\"title\">".concat(config.title.text, "</div>\n                               <div class=\"value-wrap\">\n                                 <span class=\"before\">").concat(config.beforeNum.mark, "</span>\n                                 <span class=\"value\"></span>\n                                 <span class=\"after\">").concat(config.afterNum.mark, "</span>\n                               </div>\n                            </div>"));
      this.container.css({
        backgroundColor: config.background });

      config.number.formatter && (this.totalNum = this._numFormat(this.totalNum));
      if (this.config.number.update === 'zero') {
        this.timer = setInterval(function () {
          if (_this.startNum < _this.totalNum) {
            _this._timedCount();
          } else {
            clearInterval(_this.timer);
            _this.container.find('.value').html(_this.totalNum);
            _this._currentNum['value'] = _this.totalNum;
          }
        }, this.config.number.rush);
      } else if (this.config.number.update === 'currentNum') {
        if (parseInt(this._currentNum['value']) > this.totalNum) {
          this.timer = setInterval(function () {
            if (_this.startNum > _this.totalNum) {
              _this._timedCount();
            } else {
              clearInterval(_this.timer);
              _this.container.find('.value').html(_this.totalNum);
              _this._currentNum['value'] = _this.totalNum;
            }
          }, this.config.number.rush);
        } else {
          this.timer = setInterval(function () {
            if (_this.startNum < _this.totalNum) {
              _this._timedCount();
            } else {
              clearInterval(_this.timer);
              _this.container.find('.value').html(_this.totalNum);
              _this._currentNum['value'] = _this.totalNum;
            }
          }, this.config.number.rush);
        }
      }
      this.changerTimer = setTimeout(function () {
        _this.emit('change', {
          value: Number(_this.totalNum) });

      }, 200);
      if (config.title.linearGradient) {
        this.container.find('.title').css({
          fontSize: config.title.fontSize,
          fontFamily: config.title.fontFamily,
          textAlign: config.title.position,
          letterSpacing: config.title.lrPadding,
          fontWeight: config.title.fontStyle.sel,
          fontStyle: config.title.fontStyle.ch.includes('italic') ? 'italic' : 'normal',
          background: "linear-gradient(to bottom, ".concat(config.title.startColor, ", ").concat(config.title.endColor, ")"),
          '-webkit-background-clip': 'text',
          color: 'transparent' });

        this.container.find('.value-wrap').css({
          textAlign: config.title.position });

      } else {
        this.container.find('.title').css({
          fontSize: config.title.fontSize,
          fontFamily: config.title.fontFamily,
          letterSpacing: config.title.lrPadding,
          textAlign: config.title.position,
          color: config.title.startColor,
          fontWeight: config.title.fontStyle.sel,
          fontStyle: config.title.fontStyle.ch.includes('italic') ? 'italic' : 'normal' });

        this.container.find('.value-wrap').css({
          textAlign: config.title.position });

      }
      if (config.number.linearGradient) {
        this.container.find('.value').css({
          padding: "0 ".concat(Math.round(config.number.fontSize / 10), "px"),
          fontFamily: config.number.fontFamily,
          fontSize: config.number.fontSize,
          letterSpacing: config.number.lrPadding,
          fontWeight: config.number.fontStyle.sel,
          fontStyle: config.number.fontStyle.ch.includes('italic') ? 'italic' : 'normal',
          background: "linear-gradient(to bottom, ".concat(config.number.startColor, ", ").concat(config.number.endColor, ")"),
          '-webkit-background-clip': 'text',
          color: 'transparent' });

      } else {
        this.container.find('.value').css({
          padding: "0 ".concat(Math.round(config.number.fontSize / 10), "px"),
          color: config.number.startColor,
          fontFamily: config.number.fontFamily,
          fontSize: config.number.fontSize,
          letterSpacing: config.number.lrPadding,
          fontWeight: config.number.fontStyle.sel,
          fontStyle: config.number.fontStyle.ch.includes('italic') ? 'italic' : 'normal' });

      }
      if (config.beforeNum.linearGradient) {
        this.container.find('.before').css({
          fontSize: config.beforeNum.fontSize,
          background: "linear-gradient(to bottom, ".concat(config.beforeNum.startColor, ", ").concat(config.beforeNum.endColor, ")"),
          '-webkit-background-clip': 'text',
          color: 'transparent' });

      } else {
        this.container.find('.before').css({
          fontSize: config.beforeNum.fontSize,
          color: config.beforeNum.startColor });

      }
      if (config.afterNum.linearGradient) {
        this.container.find('.after').css({
          fontSize: config.afterNum.fontSize,
          background: "linear-gradient(to bottom, ".concat(config.afterNum.startColor, ", ").concat(config.afterNum.endColor, ")"),
          '-webkit-background-clip': 'text',
          color: 'transparent' });

      } else {
        this.container.find('.after').css({
          fontSize: config.afterNum.fontSize,
          color: config.afterNum.startColor });

      }
    },
    _numFormat: function _numFormat(num) {
      return num.replace(/\d+/, function (n) {
        return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
          return $1 + ',';
        });
      });
    },
    _timedCount: function _timedCount() {
      var count = Number(this._currentNum['value']) < Number(this.totalNum) ? Math.round(this.totalNum / 20) : Math.round(this._currentNum['value'] / 20);
      count === 0 && (count = 1);
      this.startNum < Number(this.totalNum) ? this.startNum += count : this.startNum -= count;
      this.container.find('.value').html(this.startNum);
    },
    empty: function empty() {
      this.container.find('.value').html(0);
    },
    updateConfig: function updateConfig(config) {
      if (_instanceof(config, Object) && !config.length) {
        this.render(config, this.data);
      } else {
        console.warn('更新组件配置失败，传入参数有误');
      }
    },
    destroy: function destroy() {
      clearInterval(this.timer);
      clearTimeout(this.changeTimer);
      this.container.empty();
    } });return module.exports;});