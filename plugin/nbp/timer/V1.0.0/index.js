Cube("/nbp/timer/V1.0.0/index.js", ["/node_modules/bcore/event.js", "/node_modules/lodash/lodash.js"], function (module, exports, require, load, process, global) {

  var Event = require('/node_modules/bcore/event.js');
  var _ = require('/node_modules/lodash/lodash.js');
  module.exports = Event.extend(function Base(config) {
    this.init(config);
  }, {
    isStop: false,
    init: function init(config) {
      this.destroy();
      this.config = _.defaultsDeep(config || {}, this.config);
    },
    run: function run() {
      var _this = this;
      this.isStop = false;
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this.emit('time-end');
        _this.config.isLoop && !_this.isStop && _this.run();
      }, 1e3 * this.config.delayTime);
    },
    stop: function stop() {
      this.isStop = true;
      this.timer && clearTimeout(this.timer);
    },
    destroy: function destroy() {
      this.stop();
      this.timer = null;
    } });return module.exports;});