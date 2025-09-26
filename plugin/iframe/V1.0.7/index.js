Cube("/iframe/V1.0.7/index.js", ["/node_modules/jquery/dist/jquery.js", "/node_modules/bcore/event.js", "/node_modules/lodash/lodash.js"], function (module, exports, require, load, process, global) {

  function _instanceof(left, right) {if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {return !!right[Symbol.hasInstance](left);} else {return left instanceof right;}}
  var $ = require('/node_modules/jquery/dist/jquery.js');
  var Event = require('/node_modules/bcore/event.js');
  var _ = require('/node_modules/lodash/lodash.js');
  load('/_requireModules/css/charts.css.js', '');
  module.exports = Event.extend(function Base(container) {
    this.container = $(container);
    this.messageFn = this.message.bind(this);
  }, {
    render: function render(config, data) {
      this.config = _.defaultsDeep(config || {}, this.config);
      this.data = _.cloneDeep(data);
      this.destroy();
      var url = data && data.length && data[0].url ? data[0].url : config.url;
      this.container.append("<iframe class=\"iframe-item\" src=\"".concat(url, "\" frameborder=\"0\" allowfullscreen=\"true\" style=\"transform: scale(").concat(this.config.scaleX || 1, ",").concat(this.config.scaleY || 1, "); transform-origin: 0 0;\"></iframe>"));
      this.container.css({
        backgroundColor: config.background });

      this.emit('change', {
        url: url });

      window.addEventListener('message', this.messageFn);
    },
    message: function message(event) {
      this.emit('message', {
        info: event });

    },
    setUrl: function setUrl(args) {
      var _this = this;
      args && args.url && function () {
        _this.container.find('iframe').attr('src', args.url);
        _this.emit('change', {
          url: args.url });

      }();
    },
    send: function send(args) {
      args && args.info && this.container.find('iframe')[0].contentWindow.postMessage(args.info, args.source ? args.source : '*');
    },
    updateConfig: function updateConfig(config) {
      if (_instanceof(config, Object) && !config.length) {
        this.render(config, this.data);
      } else {
        console.warn('更新组件配置失败，传入参数有误');
      }
    },
    destroy: function destroy() {
      window.removeEventListener('message', this.messageFn);
      this.container.empty();
    } });return module.exports;});