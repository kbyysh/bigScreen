Cube("/videoStream/V1.0.0/index.js", ["/node_modules/jquery/dist/jquery.js", "/node_modules/bcore/event.js", "/node_modules/lodash/lodash.js", "/_requireModules/js/aliplayer.js"], function (module, exports, require, load, process, global) {

  function _instanceof(left, right) {if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {return !!right[Symbol.hasInstance](left);} else {return left instanceof right;}}
  var $ = require('/node_modules/jquery/dist/jquery.js');
  var Event = require('/node_modules/bcore/event.js');
  var _ = require('/node_modules/lodash/lodash.js');
  load('/_requireModules/css/aliplayer.css.js', '');
  var Aliplayer = require('/_requireModules/js/aliplayer.js');
  module.exports = Event.extend(function Base(container) {
    this.container = $(container);
    this.backgroundBaseUrl = "".concat(window.baseUrl, "_requireModules/aliplayer/");
  }, {
    render: function render(config, data) {
      var _this = this;
      this.config = _.defaultsDeep(config || {}, this.config);
      !!data && (this.data = _.cloneDeep(data));
      this.destroy();
      var id = 'player_' + new Date().getTime();
      this.container.append("<div id=\"".concat(id, "\" style=\"width:100%; height:100%; background: #000;\"></div>"));
      var source = !!this.data[0] && !!this.data[0].src ? this.data[0].src : '';
      if (source) {
        this.player = new Aliplayer({
          id: id,
          source: source,
          baseUrl: this.backgroundBaseUrl,
          skinLayout: [{
            name: 'bigPlayButton',
            align: 'cc' },
          {
            name: 'H5Loading',
            align: 'cc' },
          {
            name: 'errorDisplay',
            align: 'tlabs',
            x: 0,
            y: 0 },
          {
            name: 'infoDisplay' },
          {
            name: 'tooltip',
            align: 'blabs',
            x: 0,
            y: 56 },
          {
            name: 'thumbnail' },
          {
            name: 'controlBar',
            align: 'blabs',
            x: 0,
            y: 0,
            children: [{
              name: 'progress',
              align: 'blabs',
              x: 0,
              y: 44 },
            {
              name: 'playButton',
              align: 'tl',
              x: 15,
              y: 12 },
            {
              name: 'fullScreenButton',
              align: 'tr',
              x: 10,
              y: 12 }] }],


          controlBarVisibility: 'hover',
          preload: true,
          isLive: !!this.data[0] && !!this.data[0].isLive ? this.data[0].isLive : false,
          autoplay: false,
          rePlay: this.config.playSetting.rePlay,
          showBuffer: this.config.playSetting.showBuffer },
        function (player) {
          if (_this.config.playSetting.autoplay) {
            player.mute();
            player.play();
          }
          _this.player.on('play', function () {
            _this.emit('play');
          });
          _this.player.on('pause', function () {
            _this.emit('pause');
          });
          _this.player.on('ended', function () {
            _this.emit('ended');
          });
        });
      }
    },
    play: function play() {
      this.player.play();
    },
    pause: function pause() {
      this.player.pause();
    },
    setSpeed: function setSpeed(speed) {
      this.player.setSpeed(speed);
    },
    toggleFullScreen: function toggleFullScreen() {
      console.log();
      this.player.fullscreenService.getIsFullScreen() ? this.player.fullscreenService.cancelFullScreen() : this.player.fullscreenService.requestFullScreen();
    },
    updateConfig: function updateConfig(config) {
      if (_instanceof(config, Object) && !config.length) {
        this.render(config, this.data);
      } else {
        console.warn('更新组件配置失败，传入参数有误');
      }
    },
    destroy: function destroy() {
      this.player && this.player.dispose();
      this.container.empty();
    } });return module.exports;});