Cube("/nbp/switch/V1.0.0/index.js", ["/node_modules/bcore/event.js", "/node_modules/lodash/lodash.js"], function (module, exports, require, load, process, global) {

  var Event = require('/node_modules/bcore/event.js');
  var _ = require('/node_modules/lodash/lodash.js');
  module.exports = Event.extend(function Base(config) {
    this.init(config);
  }, {
    init: function init(config) {
      this.config = _.defaultsDeep(config || {}, this.config);
      (this.config.handlers || []).forEach(function (item) {
        var fnc = null;
        _.isString(item.code) && (fnc = new Function('data', item.code));
        item._code = fnc;
      });
    },
    onExcute: function onExcute(data) {
      var _this = this;
      !this.config.handlers.some(function (item) {
        var con = item._code(data);
        return con === true && _this.emit('case-'.concat(item.id), data);
      }) && this.emit('case-default', data);
    } });return module.exports;});