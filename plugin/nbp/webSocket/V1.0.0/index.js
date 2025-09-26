Cube("/nbp/webSocket/V1.0.0/index.js", ["/node_modules/bcore/event.js", "/node_modules/lodash/lodash.js"], function (module, exports, require, load, process, global) {

  var Event = require('/node_modules/bcore/event.js');
  var _ = require('/node_modules/lodash/lodash.js');
  var rec = new Event();
  module.exports = Event.extend(function Base(config) {
    this.init(config);
  }, {
    init: function init(config) {
      this.destroy();
      this.config = _.defaultsDeep(config || {}, this.config);
      this.createHandler();
      this.connection();
    },
    connection: function connection() {
      var _this = this;
      this.ws = new WebSocket(this.config.server);
      this.ws.onclose = function () {
        console.log('reconnection socket');
        _this.connection();
      };
      this.ws.onopen = function () {
        console.log('connected');
        _this.createReceive();
      };
      this.ws.onmessage = function (msg) {
        var message = JSON.parse(msg.data);
        try {
          if (_this.config.mapping) {
            message[_this.config.mapping] && rec.emit(message[_this.config.mapping], message);
          } else {
            message.event && rec.emit(message.event, message);
          }
        } catch (error) {
          message.event && rec.emit(message.event, message);
        }
      };
    },
    createHandler: function createHandler() {
      var _this2 = this;
      var send = this.config.send;
      send && send.length && send.forEach(function (item) {
        item.id && item.name && (_this2["send".concat(item.id)] = function (data) {
          _this2.ws.send(JSON.stringify(data));
        });
      });
    },
    createReceive: function createReceive() {
      var _this3 = this;
      var receive = this.config.receive;
      receive && receive.length && receive.forEach(function (item) {
        item.name && rec.on(item.name, function (data) {
          _this3.emit("receive".concat(item.id), data);
        });
      });
    },
    destroy: function destroy() {
      this.ws && this.ws.close && this.ws.close();
      this.off();
      this.ws = null;
    } });return module.exports;});