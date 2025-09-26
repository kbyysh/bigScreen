Cube("/nowtime/V1.1.2/index.js", ["/node_modules/jquery/dist/jquery.js", "/node_modules/bcore/event.js", "/node_modules/lodash/lodash.js"], function (module, exports, require, load, process, global) {

  function _instanceof(left, right) {if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {return !!right[Symbol.hasInstance](left);} else {return left instanceof right;}}
  var $ = require('/node_modules/jquery/dist/jquery.js');
  var Event = require('/node_modules/bcore/event.js');
  var _ = require('/node_modules/lodash/lodash.js');
  load('/_requireModules/css/charts.css.js', '');
  module.exports = Event.extend(function Base(container) {
    this.container = $(container);
  }, {
    render: function render(config, data) {
      this.config = _.defaultsDeep(config || {}, this.config);
      this.data = _.cloneDeep(data);
      this.destroy();
      var styleYear = config.setting.yearPart.fontStyle;
      var styleDate = config.setting.datePart.fontStyle;
      var styleWeek, weekfontFamily, weekfontfontSize, weekfontStyle, weekColor;
      if (styleYear.ch.includes('italic')) {
        italicYear = 'italic';
      } else {
        italicYear = 'normal';
      }
      if (styleDate.ch.includes('italic')) {
        italicDate = 'italic';
      } else {
        italicDate = 'normal';
      }
      if (styleYear.ch.includes('underline')) {
        textdecorationYear = 'underline';
      } else {
        textdecorationYear = 'none';
      }
      if (styleDate.ch.includes('underline')) {
        textdecorationDate = 'underline';
      } else {
        textdecorationDate = 'none';
      }
      var _this = this;
      function check(i) {
        var num;
        i < 10 ? num = '0' + i : num = i;
        return num;
      }
      this.timer = setInterval(function () {
        var time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth() + 1;
        var day = time.getDate();
        var h = time.getHours();
        var m = time.getMinutes();
        var s = time.getSeconds();
        month = check(month);
        day = check(day);
        h = check(h);
        m = check(m);
        s = check(s);
        _this.container.html('<div class="time-wrap">' + '<div  class="main-wrap">' + '<div class="year" style="font-family:' + config.setting.yearPart.fontFamily + ';font-size:' + config.setting.yearPart.fontSize + 'px;font-weight:' + config.setting.yearPart.fontStyle.sel + ';font-style:' + italicYear + ';color:' + config.setting.yearPart.color + ';"><span>' + year + '/' + month + '/' + day + '</span></div>' + '<div class="hms" style="font-family:' + config.setting.datePart.fontFamily + ';font-size:' + config.setting.datePart.fontSize + 'px;font-weight:' + config.setting.datePart.fontStyle.sel + ';font-style:' + italicDate + ';color:' + config.setting.datePart.color + ';">' + h + ':' + m + ':' + s + '</div>' + '</div>' + '</div>');
        var spanWeek, divWeek;
        var week = '日一二三四五六'.charAt(new Date().getDay());
        if (config.setting.weekPart != null) {
          styleWeek = config.setting.weekPart.fontStyle;
          if (styleWeek.ch.includes('italic')) {
            italicWeek = 'italic';
          } else {
            italicWeek = 'normal';
          }
          weekfontFamily = config.setting.weekPart.fontFamily;
          weekfontfontSize = config.setting.weekPart.fontSize;
          weekfontStyle = config.setting.weekPart.fontStyle;
          weekColor = config.setting.weekPart.color;
          divWeek = '<span class="week" style="display:inline-block;font-family:' + weekfontFamily + ';font-size:' + weekfontfontSize + 'px;font-weight:' + weekfontStyle.sel + ';font-style:' + italicWeek + ';color:' + weekColor + ';">' + '星期' + week + '</span>';
          _this.container.find('.main-wrap>.year').append(divWeek);
        }
        var isWrap = config.setting.showType.show.control;
        if (isWrap == 'two') {
          _this.container.find('.main-wrap').removeClass('nowrap').addClass('wrap');
          _this.container.find('.main-wrap>.year').css({
            marginBottom: config.setting.showType.show.two.topB + 'px',
            marginRight: config.setting.showType.show.two.leftR + 'px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center' });

          _this.container.find('.main-wrap>.year>.week').css({
            marginLeft: config.setting.showType.show.two.leftR + 'px',
            minWidth: weekfontfontSize * 3 + 'px' });

        }
        if (isWrap == 'one') {
          _this.container.find('.main-wrap').removeClass('wrap').addClass('nowrap');
          _this.container.find('.main-wrap>.year').css({
            marginRight: config.setting.showType.show.one.leftR + 'px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center' });

          _this.container.find('.main-wrap>.year>.week').css({
            marginLeft: config.setting.showType.show.one.leftR + 'px',
            minWidth: weekfontfontSize * 3 + 'px' });

        }
        config.setTimer.showTyper.inputDate == year + '/' + month + '/' + day && config.setTimer.showTyper.inputTimer == h + ':' + m + ':' + s && _this.emit('eventTime');
        _this.emit('change', {
          value: year + '/' + month + '/' + day + ' ' + h + ':' + m + ':' + s });

      }, 1000);
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
      this.container.empty();
    } });return module.exports;});