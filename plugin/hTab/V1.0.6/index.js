Cube("/hTab/V1.0.6/index.js", ["/node_modules/jquery/dist/jquery.js", "/node_modules/lodash/lodash.js", "/node_modules/bcore/event.js"], function (module, exports, require, load, process, global) {

  function _instanceof(left, right) {if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {return !!right[Symbol.hasInstance](left);} else {return left instanceof right;}}
  var $ = require('/node_modules/jquery/dist/jquery.js');
  var _ = require('/node_modules/lodash/lodash.js');
  var Event = require('/node_modules/bcore/event.js');
  module.exports = Event.extend(function Base(container) {
    this.container = $(container);
    this.imgBaseUrl = "".concat(window.baseUrl, "hTab/img/");
  }, {
    render: function render(config, data) {
      this.config = _.defaultsDeep(config || {}, this.config);
      this.data = _.cloneDeep(data);
      var _this = this,
      TabDhStyle = config.TabDhStyle,
      defaultVal = TabDhStyle.TabQjStyle.defaultVal,
      ScrCase = TabDhStyle.TabPtStyle.method,
      ScrCaseClick = TabDhStyle.TabXZStyle.method,
      ScrCaseHover = TabDhStyle.TabXfStyle.method,
      src = this._getPic(ScrCase),
      srcClick = this._getPic(ScrCaseClick),
      srcHover = this._getPic(ScrCaseHover);
      this.container.empty();
      this.container.append("<ul class=\"tab-container\"></ul>");
      for (var i = 0; i < this.data.length; i++) {
        var aHref = this.data[i].src === '' ? 'javascript:void(0)' : this.data[i].src;
        this.container.find('.tab-container').append("<li>".concat(this.data[i].name, "<a href=\"").concat(aHref, "\" target=\"").concat(this.data[i].blank ? '_blank' : '', "\"></a></li>"));
        $(this.container.find('.tab-container li')[i]).css({
          backgroundImage: "url(".concat(src, ")") });

        if (config.TabDhStyle.TabQjStyle.defBuilding === 'name' && this.data[i].name == defaultVal || config.TabDhStyle.TabQjStyle.defBuilding === 'TabID' && this.data[i].tabID == defaultVal) {
          $(this.container.find('.tab-container li')[i]).attr('clicked', true);
          $(this.container.find('.tab-container li')[i]).css({
            color: TabDhStyle.TabXZStyle.bgColor,
            backgroundImage: "url(".concat(srcClick, ")"),
            fontWeight: TabDhStyle.TabQjStyle.selectdFont ? 700 : 500 });

        }
      }
      var lineHeight = this.container.height();
      this.container.find('.tab-container').css({
        display: 'flex',
        color: TabDhStyle.TabPtStyle.bgColor,
        height: '100%',
        lineHeight: lineHeight + 'px',
        fontSize: TabDhStyle.TabQjStyle.fontSize + 'px',
        fontFamily: TabDhStyle.TabQjStyle.fontFamily,
        letterSpacing: TabDhStyle.TabQjStyle.fontWidth + 'px',
        justifyContent: 'space-between',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center center' });

      var TabWidth;
      if (TabDhStyle.TabQjStyle.width.control === 'PaddingWidth') {
        TabWidth = TabDhStyle.TabQjStyle.width.PaddingWidth.width + 'px';
        this.container.find('.tab-container li').css({
          padding: "0 ".concat(TabWidth),
          position: 'relative',
          textAlign: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center center' });

      } else {
        TabWidth = TabDhStyle.TabQjStyle.width.AllWidth.width + 'px';
        this.container.find('.tab-container li').css({
          width: TabWidth,
          position: 'relative',
          textAlign: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center center' });

      }
      this.container.find('.tab-container li a').css({
        width: '100%',
        height: '100%',
        display: 'inline-block',
        position: 'absolute',
        top: 0,
        left: 0 });

      if (TabDhStyle.TabXfStyle.method.control !== 'NotypeBgc') {
        this.container.find('.tab-container li').hover(function () {
          var hasBeenClicked = $(this).attr('clicked');
          if (!hasBeenClicked || hasBeenClicked === 'false') {
            $(this).css({
              color: TabDhStyle.TabXfStyle.bgColor,
              backgroundImage: "url(".concat(srcHover, ")") }).
            siblings('li[clicked != true]').css({
              backgroundImage: "url(".concat(src, ")"),
              color: TabDhStyle.TabPtStyle.bgColor });

          }
        }, function () {
          var hasBeenClicked = $(this).attr('clicked');
          if (!hasBeenClicked || hasBeenClicked === 'false') {
            _this.container.find('.tab-container li[clicked != true]').css({
              color: TabDhStyle.TabPtStyle.bgColor,
              backgroundImage: "url(".concat(src, ")") });

          }
        });
      }
      if (TabDhStyle.TabXZStyle.method.control !== 'NotypeBgc') {
        this.container.find('.tab-container li').on('click', function () {
          var hasBeenClicked = $(this).attr('clicked');
          if (!hasBeenClicked || hasBeenClicked === 'false') {
            $(this).attr('clicked', true).css({
              color: TabDhStyle.TabXZStyle.bgColor,
              backgroundImage: "url(".concat(srcClick, ")"),
              fontWeight: TabDhStyle.TabQjStyle.selectdFont === true ? 700 : 500 }).
            siblings('li').attr('clicked', false).css({
              backgroundImage: "url(".concat(src, ")"),
              fontWeight: 500,
              color: TabDhStyle.TabPtStyle.bgColor });

            _this.emit('eventClick', {
              value: $(this)[0].innerText });

          }
        });
      }
    },
    _getPic: function _getPic(obj) {
      var pic = '';
      switch (obj.control) {
        case 'typeBgc':
          pic = this.imgBaseUrl + obj.typeBgc.photoSelect + '.png';
          break;
        case 'typeBgctUpload':
          pic = obj.typeBgctUpload.src;
          break;
        case 'NotypeBgc':
          pic = '';
          break;
        default:
          break;}

      return pic;
    },
    setFieldValue: function setFieldValue(args) {
      var value = '';
      _.isString(args) && (value = args);
      _.isPlainObject(args) && args.hasOwnProperty('value') && (value = args.value);
      if (!value) {
        return;
      }
      var select = this.container.find('.tab-container li[clicked=true]');
      if (!select[0] || value !== select[0].innerText) {
        var index = -1;
        this.container.find('.tab-container li').map(function (i, item) {
          item.innerText === value && (index = i);
        });
        if (index > -1) {
          this.container.find(".tab-container li:eq(".concat(index, ")")).attr('clicked', true).css({
            color: this.config.TabDhStyle.TabXZStyle.bgColor,
            backgroundImage: "url(".concat(this._getPic(this.config.TabDhStyle.TabXZStyle.method), ")"),
            fontWeight: this.config.TabDhStyle.TabQjStyle.selectdFont === true ? 700 : 500 }).
          siblings('li').attr('clicked', false).css({
            fontWeight: 500,
            color: this.config.TabDhStyle.TabPtStyle.bgColor,
            backgroundImage: "url(".concat(this._getPic(this.config.TabDhStyle.TabPtStyle.method), ")") });

          this.emit('eventClick', {
            value: value });

        }
      }
    },
    updateConfig: function updateConfig(config) {
      if (_instanceof(config, Object) && !config.length) {
        this.render(config, this.data);
      } else {
        console.warn('更新组件配置失败，传入参数有误');
      }
    },
    destroy: function destroy() {
      this.container.find('.tab-container li').off('click mouseenter mouseleave');
      this.container.empty();
    } });return module.exports;});