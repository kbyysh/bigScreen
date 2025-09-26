Cube("/graphicList/V1.0.4/index.js", ["/node_modules/jquery/dist/jquery.js", "/node_modules/bcore/event.js", "/node_modules/lodash/lodash.js", "/_requireModules/js/jquery.nicescroll.min.js"], function (module, exports, require, load, process, global) {

  function _instanceof(left, right) {if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {return !!right[Symbol.hasInstance](left);} else {return left instanceof right;}}
  var $ = require('/node_modules/jquery/dist/jquery.js');
  var Event = require('/node_modules/bcore/event.js');
  var _ = require('/node_modules/lodash/lodash.js');
  require('/_requireModules/js/jquery.nicescroll.min.js');
  module.exports = Event.extend(function Base(container) {
    this.container = $(container);
    this.imgBaseUrl = "".concat(window.baseUrl, "graphicList/img/");
  }, {
    render: function render(config, data) {
      var _this = this;
      this.config = _.defaultsDeep(config || {}, this.config);
      this.data = _.cloneDeep(data);
      this.destroy();
      var column = config.columnRelate.column;
      this.container.append("<ul></ul>");
      data.forEach(function (item, index) {
        var res = '';
        column.forEach(function (ite) {
          Object.keys(item).map(function (key, i) {
            if (ite.key == key) {
              res += "<p>\n                <img src=\"\" alt=\"\"/>\n                <span>\n                  <span style=\"position: relative;\">".concat(item[key], "</span>\n                </span> \n              </p>");
            }
          });
        });
        var liBack = config.globalStyle.background.control === 'fillColor' ? config.globalStyle.background.fillColor.linearGradient ? "background-image: linear-gradient(to right, ".concat(config.globalStyle.background.fillColor.startColor, ", ").concat(config.globalStyle.background.fillColor.endColor, ")") : "background-color: ".concat(config.globalStyle.background.fillColor.startColor) : "\n                background-image: url(".concat(config.globalStyle.background.image.src, ");\n                background-repeat: no-repeat;\n                background-size: 100% 100%;\n              ");
        _this.container.find('ul').append("<li class=\"li".concat(index, "\" style=\"").concat(liBack, "\"></li>"));
        config.leftIcon && _this.container.find(".li".concat(index)).append("\n          <div\n            style=\"\n              position: relative;\n              width: ".concat(config.leftIcon.Iconwidth, "px;\n              margin-left: ").concat(config.leftIcon.IconMarginLeft, "px;\n              margin-right: ").concat(config.leftIcon.IconMarginRight, "px;\n            \"\n          >\n            <div\n              class=\"icon\"\n              style=\"\n                position: absolute;\n                text-align: center;\n                line-height: ").concat(config.leftIcon.Iconheight, "px\n              \"\n            >\n            </div>\n          </div>\n        "));
        config.seriesNum && function () {
          var indexBack = config.seriesNum.background.control === 'fillColor' ? config.seriesNum.background.fillColor.linearGradient ? "background-image: linear-gradient(to right, ".concat(config.seriesNum.background.fillColor.startColor, ", ").concat(config.seriesNum.background.fillColor.endColor, ")") : "background-color: ".concat(config.seriesNum.background.fillColor.startColor) : "\n                  background-image: url(".concat(config.seriesNum.background.image.src, ");\n                  background-repeat: no-repeat;\n                  background-size: contain cover;\n                ");
          _this.container.find(".li".concat(index)).append("\n              <div\n                style=\"\n                  display: flex;\n                  align-items: ".concat(config.seriesNum.position, ";\n                  margin-left: ").concat(config.seriesNum.marginLeft, "px;\n                  margin-right: ").concat(config.seriesNum.marginRight, "px;\n                \"\n              >\n                <span\n                  style=\"\n                    display:block;\n                    width: ").concat(config.seriesNum.width, "px;\n                    height: ").concat(config.seriesNum.height, "px;\n                    line-height: ").concat(config.seriesNum.height, "px;\n                    text-align: center;\n                    color: ").concat(config.seriesNum.NumColor, ";\n                    font-family: ").concat(config.seriesNum.fontFamily, ";\n                    font-size: ").concat(config.seriesNum.fontSize, "px;\n                    font-weight: ").concat(config.seriesNum.fontStyle.sel, ";\n                    font-style: ").concat(config.seriesNum.fontStyle.ch.includes('italic') ? 'italic' : 'normal', ";\n                    ").concat(indexBack, "\n                \"\n                >").concat(config.seriesNum.filter ? _this._filterIndex(index + 1, config.seriesNum.filter.num) : index + 1, "</span>\n              </div>\n            "));
        }();
        _this.container.find(".li".concat(index)).append("<div class=\"ulBox\">".concat(res, "</div>"));
        _this.container.find('ul').on('click', "li.li".concat(index), function () {
          _this.emit('eventClick', item);
        });
      });
      var globalStyle = config.globalStyle,
      leftIcon = config.leftIcon;
      this.container.find('ul').css({
        position: 'relative' });

      this.container.find('li').css({
        width: '100%',
        display: 'flex',
        position: 'relative',
        padding: "0 ".concat(globalStyle.lineBetweenleft, "px"),
        boxSizing: 'border-box',
        marginBottom: "".concat(globalStyle.groupBetweentop, "px") });

      var leftIconDis = leftIcon ? leftIcon.Iconwidth + leftIcon.IconMarginLeft + leftIcon.IconMarginRight : 0;
      var seriesNumDis = config.seriesNum ? config.seriesNum.marginLeft + config.seriesNum.marginRight + config.seriesNum.width : 0;
      this.container.find('.ulBox').css({
        width: "calc(100% - ".concat(globalStyle.lineBetweentop + leftIconDis + seriesNumDis, "px)"),
        display: 'flex',
        flexWrap: 'wrap' });

      if (leftIcon) {
        this.container.find('.icon').css({
          width: leftIcon.Iconwidth + 'px',
          height: leftIcon.Iconheight + 'px',
          top: leftIcon.IconOffsetY + 'px' });

        leftIcon.IcondefaultDot && leftIcon.IcondefaultDot.src ? this.container.find('.icon').css({
          backgroundImage: "url(".concat(leftIcon.IcondefaultDot.src, ")"),
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center' }) :
        this.container.find('.icon').css({
          backgroundColor: leftIcon.DotColor,
          borderRadius: leftIcon.Iconwidth + 'px' });

      }
      this.container.find('.ulBox p').css({
        display: 'flex',
        boxSizing: 'border-box',
        fontSize: '18px',
        color: '#fff',
        lineHeight: globalStyle.lineHeight + 'px',
        width: '50%',
        padding: "".concat(globalStyle.lineBetweentop, "px ").concat(globalStyle.lineBetweenleft, "px") });

      this.container.find('.ulBox p span').css({
        width: '100%',
        lineHeight: '2.0',
        overflow: 'hidden',
        whiteSpace: 'nowrap' });

      var codeConfig = config.CodeConfig.column;
      data.forEach(function (item) {
        Object.keys(item).map(function (key) {
          var cIndex = column.findIndex(function (val) {
            return val.key === key;
          });
          cIndex > -1 && function () {
            var columnObj = column[cIndex];
            _this.container.find(".ulBox p:nth-of-type(".concat(cIndex + 1, ")")).css({
              color: columnObj.bgColor,
              width: columnObj.widthPercentage + '%',
              fontSize: columnObj.fontSize,
              textAlign: columnObj.align,
              paddingLeft: columnObj.OffsetX + 'px',
              fontWeight: columnObj.fontStyle.sel,
              fontStyle: columnObj.fontStyle.ch[0],
              fontFamily: columnObj.fontFamily });

            _this.container.find(".ulBox p:nth-of-type(".concat(cIndex + 1, ") span")).css({
              lineHeight: columnObj.lineHeight + 'px' });

            columnObj.longText === 'wordWrap' && _this.container.find(".ulBox p:nth-of-type(".concat(cIndex + 1, ") span")).css({
              whiteSpace: 'normal',
              wordBreak: 'break-all' });

            columnObj.longText === 'ellipsis' && _this.container.find(".ulBox p:nth-of-type(".concat(cIndex + 1, ") span")).css({
              textOverflow: 'ellipsis' });

            columnObj.longText === 'textScroll' && function () {
              var ulbox = _this.container.find('.ulBox');
              for (var k = 0; k < ulbox.length; k++) {
                $(ulbox[k]).find("p:nth-child(".concat(indexccc + 1, ") span")).html("<marquee>".concat(data[k][key], "</marquee>"));
              }
            }();
          }();
        });
      });
      data.forEach(function (item, dIndex) {
        column.forEach(function (obj, index) {
          var cIndex = codeConfig.findIndex(function (val) {
            return val.key === obj.key && val.value === item[val.key];
          });
          cIndex > -1 && codeConfig[cIndex].value === item[obj.key] && function () {
            var code = codeConfig[cIndex];
            code.method.control === 'typeBgc' && _this.container.find("li:nth-of-type(".concat(dIndex + 1, ") .ulBox p:nth-of-type(").concat(index + 1, ") img")).attr('src', _this.imgBaseUrl + code.method.typeBgc.choosePict);
            code.method.control === 'typeBgctUpload' && _this.container.find("li:nth-of-type(".concat(dIndex + 1, ") .ulBox p:nth-of-type(").concat(index + 1, ") img")).attr('src', code.method.typeBgctUpload.src);
            code.method.control === 'NotypeBgc' ? _this.container.find("li:nth-of-type(".concat(dIndex + 1, ") .ulBox p:nth-of-type(").concat(index + 1, ") img")).attr('src', '') : _this.container.find("li:nth-of-type(".concat(dIndex + 1, ") .ulBox p:nth-of-type(").concat(index + 1, ") img")).css({
              width: code.Iconwidth + 'px',
              height: code.Iconheight + 'px',
              verticalAlign: 'text-top',
              marginTop: code.IconOffsetY + 'px',
              marginLeft: code.IconOffsetX + 'px',
              lineHeight: globalStyle.lineHeight + 'px' });

            code.textShow ? function () {
              code.textShow.default !== '' && _this.container.find("li:nth-of-type(".concat(dIndex + 1, ") .ulBox p:nth-of-type(").concat(index + 1, ") span span")).text(code.textShow.default);
              _this.container.find("li:nth-of-type(".concat(dIndex + 1, ") .ulBox p:nth-of-type(").concat(index + 1, ") span")).css({
                color: code.textShow.color,
                marginLeft: code.IconOffsetX < 0 ? code.IconOffsetX / 2 * -1 : '' + 'px' });

            }() : _this.container.find("li:nth-of-type(".concat(dIndex + 1, ") .ulBox p:nth-of-type(").concat(index + 1, ") span span")).text('');
          }();
        });
      });
      var containerHeight = this.container.find('ul li').outerHeight() * globalStyle.lineNumber;
      this.container.css({
        overflow: 'hidden',
        height: '100%' });

      this.container.niceScroll({
        cursorcolor: '#3C4860',
        background: '#283344',
        cursorwidth: '5px',
        cursorborderradius: '5px',
        cursoropacitymax: 1,
        touchbehavior: false,
        cursorborder: '0',
        autohidemode: false });

      !config.globalStyle.scrollShow && this.container.siblings('.nicescroll-rails').css('visibility', 'hidden');
      config.lunbo.isOn ? function () {
        _this.container.getNiceScroll().hide();
        var liList = _this.container.find('li').outerHeight(),
        h = config.lunbo.method === 'singleRow' ? liList : liList * globalStyle.lineNumber,
        len = _this.container.find('ul').children('li').length,
        step = 0;
        _this.timer = setInterval(function () {
          _this.container.find('ul').animate({
            top: -h + 'px' },
          config.lunbo.during * 1000, function () {
            var item = _this.container.find('ul').children('li')[0];
            var fChild = $(item).prop('outerHTML');
            _this.container.find('ul').append(fChild);
            $(item).remove();
            step < len - 1 ? step++ : function () {
              step = 0;
              _this.emit('oneScroll');
            }();
          });
          _this.container.find('ul').animate({
            top: 0 },
          0);
        }, config.lunbo.speed * 1000);
      }() : this.container.getNiceScroll();
    },
    _filterIndex: function _filterIndex(value, num) {
      var str = String(value);
      var length = num - str.length;
      length > 0 && (str = '0000000000000'.substring(0, length) + str);
      return str;
    },
    updateConfig: function updateConfig(config) {
      if (_instanceof(config, Object) && !config.length) {
        this.render(config, this.data);
      } else {
        console.warn('更新组件配置失败，传入参数有误');
      }
    },
    destroy: function destroy() {
      this.container.find('ul').off('click');
      clearInterval(this.timer);
      this.container.empty();
    } });return module.exports;});