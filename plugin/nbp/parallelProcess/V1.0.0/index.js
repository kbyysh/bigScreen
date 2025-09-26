Cube("/nbp/parallelProcess/V1.0.0/index.js", ["/node_modules/bcore/event.js", "/node_modules/lodash/lodash.js"], function (module, exports, require, load, process, global) {

  var Event = require('/node_modules/bcore/event.js');
  var _ = require('/node_modules/lodash/lodash.js');
  module.exports = Event.extend(function Base(config) {
    this.init(config);
  }, {
    init: function init(config) {
      var _this = this;
      _this.config = _.defaultsDeep(config || {}, _this.config);
      (_this.config.handlers || []).forEach(function (item) {
        var fnc = null;
        _.isString(item.code) && (fnc = new Function('data', item.code));
        item._code = fnc;
        _this['handler-'.concat(item.id)] = _this.createHandler(item);
      });
    },
    createHandler: function createHandler(obj) {
      var _this = this;
      return function (data) {
        _this.emit('handler-'.concat(obj.id), obj._code(_.cloneDeep(data)));
      };
    },
    onExcute: function onExcute(data) {
      var _this = this;
      this.config.handlers.forEach(function (item) {
        _this['handler-'.concat(item.id)](data);
      });
    } });return module.exports;});