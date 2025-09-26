Cube("/video/V1.0.5/index.js", ["/node_modules/jquery/dist/jquery.js", "/node_modules/bcore/event.js", "/node_modules/lodash/lodash.js"], function (module, exports, require, load, process, global) {

  function _instanceof(left, right) {if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {return !!right[Symbol.hasInstance](left);} else {return left instanceof right;}}
  var $ = require('/node_modules/jquery/dist/jquery.js');
  var Event = require('/node_modules/bcore/event.js');
  var _ = require('/node_modules/lodash/lodash.js');
  load('/_requireModules/css/charts.css.js', '');
  module.exports = Event.extend(function Base(container) {
    this.container = $(container);
    this.eventPlayStartFn = this.eventPlayStart.bind(this);
    this.eventPlayEndFn = this.eventPlayEnd.bind(this);
  }, {
    render: function render(config, data) {
      this.config = _.defaultsDeep(config || {}, this.config);
      !!data && (this.data = _.cloneDeep(data));
      this.destroy();
      var src = !!this.data && this.data.length > 0 && this.data[0].src ? this.data[0].src : this.config.src;
      var attribute = this.config.voice ? 'muted ' : '';
      this.config.Autoplay && (attribute += 'autoplay ');
      this.config.playback && (attribute += 'loop');
      if (this.config.Control) {
        this.container.append("<video src=\"".concat(src, "\" controls=\"controls\" ").concat(attribute, "></video>"));
      } else {
        this.container.append("<video src=\"".concat(src, "\" ").concat(attribute, "></video>"));
      }
      this.container.find('video')[0].addEventListener('play', this.eventPlayStartFn);
      this.container.find('video')[0].addEventListener('ended', this.eventPlayEndFn, false);
    },
    eventPlayStart: function eventPlayStart() {
      this.emit('eventPlayStart');
    },
    eventPlayEnd: function eventPlayEnd() {
      this.emit('eventPlayEnd');
    },
    playStart: function playStart() {
      this.container.find('video')[0].play();
    },
    playPause: function playPause() {
      this.container.find('video')[0].pause();
    },
    updateConfig: function updateConfig(config) {
      if (_instanceof(config, Object) && !config.length) {
        this.render(config, this.data);
      } else {
        console.warn('更新组件配置失败，传入参数有误');
      }
    },
    destroy: function destroy() {
      if (this.container.find('video')[0]) {
        this.container.find('video')[0].removeEventListener('play', this.eventPlayStartFn);
        this.container.find('video')[0].removeEventListener('ended', this.eventPlayEndFn, false);
      }
      this.container.empty();
    } });return module.exports;});