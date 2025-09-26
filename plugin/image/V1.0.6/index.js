Cube("/image/V1.0.6/index.js", ["/node_modules/jquery/dist/jquery.js", "/node_modules/bcore/event.js", "/node_modules/lodash/lodash.js"], function (module, exports, require, load, process, global) {

  function _instanceof(left, right) {if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {return !!right[Symbol.hasInstance](left);} else {return left instanceof right;}}
  var $ = require('/node_modules/jquery/dist/jquery.js');
  var Event = require('/node_modules/bcore/event.js');
  var _ = require('/node_modules/lodash/lodash.js');
  load('/_requireModules/css/charts.css.js', '');
  module.exports = Event.extend(function Base(container) {
    this.container = $(container);
    this.imgBaseUrl = "".concat(window.baseUrl, "image/img/");
  }, {
    render: function render(config, data) {
      var _this = this;
      this.config = _.defaultsDeep(config || {}, this.config);
      this.data = _.cloneDeep(data);
      this.destroy();
      var tar = config.links.target ? '_blank' : '_self';
      var imgSrc = data && data[0] && data[0].imgSrc ? data[0].imgSrc : config.imgSetting.src;
      imgSrc === '' && (imgSrc = "".concat(this.imgBaseUrl, "base.png"));
      var url = data && data[0] && data[0].url ? data[0].url : config.links.linkTo;
      url = url === '' ? 'javascript:;' : url.indexOf('http://') === -1 && url.indexOf('https://') === -1 ? "http://".concat(url) : url;
      this.container.append("<a href=\"".concat(url, "\" target=\"").concat(tar, "\">\n      <img class=\"img\" src=\"").concat(imgSrc, "\" style=\"\n        transform: rotate(").concat(config.imgSetting.rotate, "deg);\n        opacity: ").concat(config.imgSetting.opacity, "\"\n      />\n    </a>"));
      this.container.css({
        backgroundColor: config.background });

      this.container.find('img').on('click', function () {
        _this.emit('eventClick');
      });
    },
    updateConfig: function updateConfig(config) {
      if (_instanceof(config, Object) && !config.length) {
        this.render(config, this.data);
      } else {
        console.warn('更新组件配置失败，传入参数有误');
      }
    },
    destroy: function destroy() {
      this.container.find('img').off('click');
      this.container.empty();
    } });return module.exports;});