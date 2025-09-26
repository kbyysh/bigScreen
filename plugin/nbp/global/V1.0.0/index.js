Cube("/nbp/global/V1.0.0/index.js", ["/node_modules/bcore/event.js"], function (module, exports, require, load, process, global) {

  var Event = require('/node_modules/bcore/event.js');
  module.exports = Event.extend(function Base() {
    this.init();
  }, {
    init: function init() {
      var _this = this;
      window.addEventListener('message', function (event) {
        _this.emit('message', {
          info: event });

      });
    },
    complete: function complete() {
      this.emit('complete');
    },
    send: function send(args) {
      args && args.info && window.parent.postMessage(args.info, args.source ? args.source : '*');
    } });return module.exports;});