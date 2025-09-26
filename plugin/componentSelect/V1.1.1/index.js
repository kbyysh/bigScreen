Cube("/componentSelect/V1.1.1/index.js", ["/node_modules/jquery/dist/jquery.js", "/node_modules/bcore/event.js", "/_requireModules/js/jquery.nicescroll.min.js", "/node_modules/lodash/lodash.js"], function (module, exports, require, load, process, global) {

  function _instanceof(left, right) {if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {return !!right[Symbol.hasInstance](left);} else {return left instanceof right;}}
  var $ = require('/node_modules/jquery/dist/jquery.js');
  var Event = require('/node_modules/bcore/event.js');
  require('/_requireModules/js/jquery.nicescroll.min.js');
  var _ = require('/node_modules/lodash/lodash.js');
  load('/_requireModules/css/charts.css.js', '');
  module.exports = Event.extend(function Base(container) {
    this.container = $(container);
  }, {
    render: function render(config, data) {
      var _this2 = this;
      this.config = _.defaultsDeep(config || {}, this.config);
      this.data = _.cloneDeep(data);
      var _this = this,
      random = (Math.random() * 10000).toFixed(0),
      componentsItemClass = "baseDropDownBox".concat(random);
      this.destroy();
      this.container.append("<div class=\"components-container\">\n        <div class=\"select-box\">\n          <input class=\"".concat(componentsItemClass, "\" placeholder=\"\"/>\n          <i class=\"icon-067\"></i>\n        </div>\n        <ul class=\"option-list\" style=\"display: none;\"></ul>\n      </div>"));
      var str = '';
      data.forEach(function (item) {
        str += "<li data-value=\"".concat(item.value, "\">").concat(item.name, "</li>");
      });
      this.container.find('.option-list').html(str);
      $("<style>\n      .".concat(componentsItemClass, "::-webkit-input-placeholder{\n        font-family: ").concat(config.textValue.normal.fontFamily, ";\n        font-size: ").concat(config.textValue.normal.fontSize, "px;\n        font-weight: ").concat(config.textValue.normal.fontStyle.sel, ";\n        font-style: ").concat(config.textValue.normal.fontStyle.ch, ";\n        color: ").concat(config.textValue.normal.color, ";\n      }\n    </style>")).appendTo('head');
      this.container.find('input').css({
        outline: 'none',
        boxSizing: 'border-box',
        backgroundColor: config.inputStyle.bgColor,
        borderRadius: config.inputStyle.radius,
        textIndent: config.inputStyle.textIndent + 'px',
        borderWidth: config.inputStyle.borderNormal.width,
        borderStyle: 'solid',
        borderColor: config.inputStyle.borderNormal.color,
        fontFamily: config.textValue.selected.fontFamily,
        fontSize: config.textValue.selected.fontSize + 'px',
        fontWeight: config.textValue.selected.fontStyle.sel,
        fontStyle: config.textValue.selected.fontStyle.ch,
        color: config.textValue.selected.color });

      this.container.find('input').attr('readonly', !config.inputStyle.disabled);
      this.container.find('input').hover(function () {
        $(this).css({
          borderWidth: config.inputStyle.borderHover.width,
          borderColor: config.inputStyle.borderHover.color });

      }, function () {
        $(this).css({
          borderWidth: config.inputStyle.borderNormal.width,
          borderColor: config.inputStyle.borderNormal.color });

      });
      this.container.find('input').on('focus', function () {
        $(this).css({
          borderWidth: config.inputStyle.borderSelected.width,
          borderColor: config.inputStyle.borderSelected.color,
          boxShadow: '0 0 2px' + config.inputStyle.borderSelected.color,
          fontFamily: config.textValue.selected.fontFamily,
          fontSize: config.textValue.selected.fontSize + 'px',
          fontWeight: config.textValue.selected.fontStyle.sel,
          fontStyle: config.textValue.selected.fontStyle.ch,
          color: config.textValue.selected.color });

      });
      this.container.find('input').on('blur', function () {
        $(this).css({
          borderWidth: config.inputStyle.borderNormal.width,
          borderColor: config.inputStyle.borderNormal.color,
          boxShadow: '0 0 2px' + config.inputStyle.borderNormal.color,
          fontFamily: config.textValue.selected.fontFamily,
          fontSize: config.textValue.selected.fontSize + 'px',
          fontWeight: config.textValue.selected.fontStyle.sel,
          fontStyle: config.textValue.selected.fontStyle.ch,
          color: config.textValue.selected.color });

        setTimeout(function () {
          _this.container.find('.option-list').hide();
          _this.container.find('.select-box i').removeClass('icon-068').addClass('icon-067');
        }, 300);
      });
      this.container.find('.select-box i').css({
        position: 'absolute',
        top: '50%',
        fontSize: config.inputStyle.arrow.width,
        lineHeight: config.inputStyle.arrow.width + 'px',
        color: config.inputStyle.arrow.color,
        right: config.inputStyle.arrow.right + 'px',
        marginTop: -(config.inputStyle.arrow.width * 0.5) + 'px' });

      this.container.find('.option-list').css({
        width: '100%',
        maxHeight: config.optionStyle.container.maxHeight + 'px',
        boxSizing: 'border-box',
        marginTop: config.optionStyle.container.top + 'px',
        backgroundColor: config.optionStyle.container.bgColor,
        borderWidth: config.optionStyle.container.borderWidth + 'px',
        borderColor: config.optionStyle.container.borderColor,
        borderStyle: 'solid',
        borderRadius: config.optionStyle.container.radius + 'px' });

      this.container.find('.option-list li').css({
        height: config.optionStyle.container.optionHeight + 'px',
        lineHeight: config.optionStyle.container.optionHeight + 'px',
        backgroundColor: config.optionStyle.optionNormal.bgColor,
        color: config.optionStyle.optionNormal.color,
        textIndent: config.inputStyle.textIndent + 'px',
        fontSize: config.optionStyle.optionNormal.fontSize + 'px',
        fontWeight: config.optionStyle.optionNormal.fontStyle.sel,
        fontStyle: config.optionStyle.optionNormal.fontStyle.ch });

      this.container.find('.option-list li').hover(function () {
        $(this).css({
          backgroundColor: config.optionStyle.optionHover.bgColor,
          color: config.optionStyle.optionHover.color,
          fontSize: config.optionStyle.optionHover.fontSize + 'px',
          fontWeight: config.optionStyle.optionHover.fontStyle.sel,
          fontStyle: config.optionStyle.optionHover.fontStyle.ch });

      }, function () {
        $(this).css({
          backgroundColor: config.optionStyle.optionNormal.bgColor,
          color: config.optionStyle.optionNormal.color,
          fontSize: config.optionStyle.optionNormal.fontSize + 'px',
          fontWeight: config.optionStyle.optionNormal.fontStyle.sel,
          fontStyle: config.optionStyle.optionNormal.fontStyle.ch });

      });
      this.container.find('.select-box').on('click', function () {
        _this2.container.find('.option-list').toggle();
        if (_this2.container.find('.option-list').css('display') === 'block') {
          _this2.container.find('.select-box i').removeClass('icon-067').addClass('icon-068');
          _this2.container.find('.option-list').getNiceScroll().resize();
        } else {
          _this2.container.find('.select-box i').removeClass('icon-068').addClass('icon-067');
        }
      });
      this.container.find('.option-list li').on('click', function () {
        $(this).css({
          backgroundColor: '#3399ff',
          color: '#fff',
          fontSize: '16px',
          fontWeight: 'normal',
          fontStyle: [] });

        var key = $.trim($(this).text());
        key !== _this.container.find('.select-box input').val() && _this.emit('select', {
          name: key,
          value: $(this).attr('data-value') });

        _this.container.find('.select-box input').val(key);
        _this.container.find('.option-list').hide();
        _this.container.find('.select-box i').removeClass('icon-068').addClass('icon-067');
      });
      this.container.find('.option-list').niceScroll({
        cursorcolor: '#4A5D75',
        cursoropacitymax: 0.5,
        touchbehavior: false,
        cursorwidth: '6px',
        cursorborder: '0',
        cursorborderradius: '3px',
        autohidemode: true,
        zindex: 'auto',
        railvalign: 'defaul',
        railpadding: {
          top: 0,
          right: 0,
          left: 0,
          bottom: 0 } });


      config.inputStyle.inputDefault.control === 'defaulteCheck' ? function () {
        _this2.container.find('.select-box input').attr('placeholder', '');
        _this2.container.find('.select-box input').val(config.inputStyle.inputDefault.defaulteCheck.checked);
      }() : function () {
        _this2.container.find('.select-box input').val('');
        _this2.container.find('.select-box input').attr('placeholder', config.inputStyle.inputDefault.tip.placeholder);
      }();
      var select = data.filter(function (val) {
        return val.name === _this2.config.inputStyle.inputDefault.defaulteCheck.checked;
      });
      setTimeout(function () {
        select.length && _this2.emit('select', select[0]);
      }, 500);
    },
    setSelect: function setSelect(args) {
      var _this3 = this;
      args && args.name ? function () {
        var index = _this3.data.findIndex(function (val) {
          return val.name === args.name;
        }),
        select = _this3.container.find('.select-box input').val();
        index > -1 && select !== args.name && function () {
          _this3.container.find('.select-box input').val(args.name);
          _this3.emit('select', _.cloneDeep(_this3.data[index]));
        }();
      }() : console.warn('设置当前单选框选中值，传入参数有误');
    },
    empty: function empty() {
      this.container.find('.select-box input').val('');
      this.emit('select', null);
    },
    emptyToDef: function emptyToDef() {
      var _this4 = this;
      this.container.find('.select-box input').val() !== this.config.inputStyle.inputDefault.defaulteCheck.checked && function () {
        var select = _this4.data.filter(function (val) {
          return val.name === _this4.config.inputStyle.inputDefault.defaulteCheck.checked;
        });
        _this4.container.find('.select-box input').val(_this4.config.inputStyle.inputDefault.defaulteCheck.checked);
        _this4.emit('select', select.length ? select[0] : null);
      }();
    },
    updateConfig: function updateConfig(config) {
      if (_instanceof(config, Object) && !config.length) {
        this.render(config, this.data);
      } else {
        console.warn('更新组件配置失败，传入参数有误');
      }
    },
    destroy: function destroy() {
      this.container.find('input').off('blur focus mouseenter mouseleave');
      this.container.find('.option-list li').off('mouseenter mouseleave click');
      this.container.find('.select-box').off('click');
      this.container.empty();
    } });return module.exports;});