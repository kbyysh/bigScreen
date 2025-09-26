Cube("/text/V1.1.3/index.js", ["/node_modules/jquery/dist/jquery.js", "/node_modules/bcore/event.js", "/node_modules/lodash/lodash.js"], function (module, exports, require, load, process, global) {

  function _instanceof(left, right) {if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {return !!right[Symbol.hasInstance](left);} else {return left instanceof right;}}
  var $ = require('/node_modules/jquery/dist/jquery.js');
  var Event = require('/node_modules/bcore/event.js');
  var _ = require('/node_modules/lodash/lodash.js');
  load('/_requireModules/css/charts.css.js', '');
  module.exports = Event.extend(function Base(container) {
    this.container = $(container);
  }, {
    render: function render(config, data) {
      var _this = this;
      this.config = _.defaultsDeep(config || {}, this.config);
      this.data = _.cloneDeep(data);
      this.destroy();
      var url = !data || !data[0].hasOwnProperty('url') ? config.links.linkTo : data[0].url !== '' ? data[0].url : config.links.linkTo;
      url === '' ? url = 'javascript:;' : !(url.includes('http://') || url.includes('https://')) && (url = 'http://' + url);
      var text = !data || !data[0].hasOwnProperty('value') ? config.text.content : data[0].value !== '' ? data[0].value : config.text.content;
      var aStyle = "display: flex; align-items: center; height: 100%; overflow: hidden;",
      base = "width: 100%;\n                  font-size: ".concat(config.text.fontSize, "px;\n                  font-family: ").concat(config.text.fontFamily, ";\n                  font-weight: ").concat(config.text.fontStyle.sel, ";\n                  font-style: ").concat(config.text.fontStyle.ch.includes('italic') ? 'italic' : 'normal', ";\n                  text-decoration: ").concat(config.text.fontStyle.ch.includes('underline') ? 'underline' : 'none', ";\n                  text-align: ").concat(config.text.position, ";\n                  overflow: hidden;\n                  letter-spacing: ").concat(config.text.letterSpacing, "px;\n                  text-shadow: ").concat(config.text.TyNumber ? config.text.TyNumber.TyColor : '', " ").concat(config.text.TyNumber ? config.text.TyNumber.XX : 0, "px ").concat(config.text.TyNumber ? config.text.TyNumber.YY : 0, "px ").concat(config.text.TyNumber ? config.text.TyNumber.ZZ : 0, "px;\n                  transform: rotate(").concat(config.text.Translate, "deg);"),
      divStyle = "".concat(base, "\n                      opacity:").concat(config.text.opacity, "%;\n                      background: linear-gradient(to bottom, ").concat(config.text.startColor, ", ").concat(config.text.endColor, ");\n                      -webkit-background-clip: text;\n                      color: transparent;"),
      divStyle2 = "".concat(base, "\n                       color: ").concat(config.text.startColor, ";");
      this.container.append("<a href=\"".concat(url, "\" target=\"").concat(config.links.target ? '_blank' : '_self', "\" style=\"").concat(aStyle, "\">\n                                       <div class=\"text-wrap\" style=\"").concat(config.text.linearGradient ? divStyle : divStyle2, "\">").concat(text, "</div>\n                                   </a>"));
      this.container.find('.text-wrap').on('click', function () {
        _this.emit('eventClick', {
          value: text });

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
      this.container.find('.text-wrap').off('click');
      this.container.empty();
    } });return module.exports;});