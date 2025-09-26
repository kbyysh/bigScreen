Cube("/lunboList/V1.1.7/index.js", ["/node_modules/jquery/dist/jquery.js", "/node_modules/bcore/event.js", "/node_modules/lodash/lodash.js", "/_requireModules/js/pagination.js"], function (module, exports, require, load, process, global) {

  function _instanceof(left, right) {if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {return !!right[Symbol.hasInstance](left);} else {return left instanceof right;}}
  var $ = require('/node_modules/jquery/dist/jquery.js');
  var Event = require('/node_modules/bcore/event.js');
  var _ = require('/node_modules/lodash/lodash.js');
  var Pagination = require('/_requireModules/js/pagination.js');
  load('/_requireModules/css/charts2.css.js', '');
  load('/_requireModules/css/scrollbar.css.js', '');
  module.exports = Event.extend(function Base(container) {
    this.container = $(container);
    this.imgBaseUrl = "".concat(window.baseUrl, "lunboList/img/");
  }, {
    clickObj: '',
    clickStatus: null,
    jumpNum: 1,
    clickSortVal: null,
    num: null,
    timer: null,
    defSortCode: 1,
    theadName: [],
    theadIndex: [],
    speed: 0,
    isHover: false,
    render: function render(config, data) {
      var _this2 = this;
      this.config = _.defaultsDeep(config || {}, this.config);
      this.data = _.cloneDeep(data);
      this.configDeep = _.cloneDeep(this.config);
      this.num = this.configDeep.listSetting.column;
      this.destroy();
      var _this = this;
      this.isOn = this.configDeep.lunbo.isOn && this.num < this.data.length;
      if (!data || !data.length) {
        this.container.html('<div class="err-container">数据不匹配</div>');
        return;
      }
      this.configDeep.page ? this.configDeep.page.num > data.length && function () {}() : this.configDeep.listSetting.column > data.length && (this.configDeep.listSetting.column = data.length);
      this.configDeep.thead.lineHeight < 5 && (this.configDeep.thead.lineHeight = 5);
      var theadData = this.configDeep.columnRelate.column;
      this.configDeep.columnRelate.column.map(function (v, i) {
        theadData[i] = v.method[v.method.control];
      });
      this.theadName = [];
      theadData.forEach(function (item) {
        _this2.theadName.push(item.value);
        _this2.theadIndex.push(item.key);
      });
      this.dataInit();
      this.defaultSort();
      var overlayStyle = "\n              box-sizing:border-box;\n              display:none;\n              position:absolute;\n              width:100%;\n              top:0px;\n              left:0px;\n              font-size:16px;\n              color:#fff;\n              background-color:rgba(0,0,0,.8);\n              padding:10px;\n              border-radius:5px;\n              text-align:justify;\n              white-space:normal;\n              word-break:break-all;\n              z-index:999;\n            ";
      if (!this.configDeep.page) {
        this.container.append("\n          <div style=\"height: 100%;\">\n            <table class=\"table-item top\" style=\"table-layout: fixed;\">\n              <thead>\n                <tr></tr>\n              </thead>\n            </table>\n            <div class=\"scroll-box \">\n              <table class=\"table-item tab-scroll\" style=\"table-layout: fixed;\">\n                <tbody>\n                  <tr></tr>\n                </tbody>\n              </table>\n            </div>\n            <div class=\"overlay\" style=\"".concat(overlayStyle, "\"></div>\n          </div>\n        "));
      } else {
        this.container.append("\n          <div style=\"height: 100%;\">\n            <table class=\"table-item top\" style=\"table-layout: fixed;\">\n              <thead>\n                <tr></tr>\n              </thead>\n            </table>\n            <div class=\"scroll-box \">\n              <table class=\"table-item tab-scroll\" style=\"table-layout: fixed;\">\n                <tbody>\n                  <tr></tr>\n                  <tr></tr>\n                  <tr></tr>\n                  <tr></tr>\n                  <tr></tr>\n                </tbody>\n              </table>\n            </div>\n            <div id=\"pages\"></div>\n            <div class=\"overlay\" style=\"".concat(overlayStyle, "\"></div>\n          </div>\n        "));
      }
      this.page();
      this.container.find('.tab-scroll tbody').on('click', 'tr', function (event) {
        _this2.emit('eventClick', {
          value: JSON.parse(event.currentTarget.getAttribute('data-item')),
          data: _this2.data[$(event.currentTarget).index()] });

      });
      if (this.num > this.data.length) {
        var h = this.container.find('.tab-scroll tbody tr').height();
        var tdTotal = this.container.find('.tab-scroll tbody tr td').length;
        var tdEvery = tdTotal / this.data.length;
        var tdArr = '';
        for (var i = 1; i <= tdEvery; i++) {
          tdArr += "<td></td>";
        }
        var oddBgArr = '';
        var evenBgArr = '';
        this.configDeep.listSetting.bgStyle ? function () {
          var allArr = 'background:' + "url(".concat(_this2.configDeep.listSetting.bgStyle.bgPic.control === 'localImg' ? _this2.configDeep.listSetting.bgStyle.bgPic.localImg.src : _this2.imgBaseUrl + _this2.configDeep.listSetting.bgStyle.bgPic.buildInImg.photoSelect + '.png', ") no-repeat;") + 'background-size:100% 100%;background-position:center;';
          if (_this2.configDeep.listSetting.bgStyle.where === 'odd' || _this2.configDeep.listSetting.bgStyle.where === 'even') {
            if (_this2.configDeep.listSetting.bgStyle.where === 'odd') {
              oddBgArr = allArr;
            }
            if (_this2.configDeep.listSetting.bgStyle.where === 'even') {
              evenBgArr = allArr;
            }
          } else {
            oddBgArr = allArr;
            evenBgArr = allArr;
          }
        }() : function () {
          oddBgArr = "background-color: ".concat(_this2.configDeep.listSetting.oddBgColor, ";");
          evenBgArr = "background-color: ".concat(_this2.configDeep.listSetting.evenBgColor, ";");
        }();
        for (var i = this.data.length + 1; i <= this.num; i++) {
          if (i % 2 == 0) {
            var aaa2 = "<tr  style=\"".concat(evenBgArr, "height:").concat(h, "px;\">").concat(tdArr, "</tr>");
            this.container.find('.tab-scroll tbody').append(aaa2);
          } else {
            var aaa2 = "<tr  style=\"".concat(oddBgArr, "height:").concat(h, "px;\">").concat(tdArr, "</tr>");
            this.container.find('.tab-scroll tbody').append(aaa2);
          }
        }
      }
      if (!this.configDeep.listSetting.bgStyle) {
        this.container.find('.tab-scroll tbody tr').hover(function () {
          $(this).css({
            backgroundColor: _this.configDeep.listSetting.brightBgColor });

        }, function () {
          _this2.container.find('.table-item.tab-scroll tr:nth-child(odd)').css({
            backgroundColor: _this2.configDeep.listSetting.oddBgColor });

          _this2.container.find('.table-item.tab-scroll tr:nth-child(even)').css({
            backgroundColor: _this2.configDeep.listSetting.evenBgColor });

        });
      } else {
        this.container.find('.tab-scroll tbody tr').hover(function () {
          var BrStyleObj = {
            background: "url(".concat(_this.configDeep.listSetting.bgStyle.BrLPic.control === 'localImg' ? _this.configDeep.listSetting.bgStyle.BrLPic.localImg.src : _this.imgBaseUrl + _this.configDeep.listSetting.bgStyle.BrLPic.buildInImg.photoSelect + '.png', ")no-repeat"),
            backgroundSize: '100% 100%',
            backgroundPosition: 'center' };

          $(this).css(BrStyleObj);
        }, function () {
          var bgStyleObj = {
            background: "url(".concat(_this2.configDeep.listSetting.bgStyle.bgPic.control === 'localImg' ? _this2.configDeep.listSetting.bgStyle.bgPic.localImg.src : _this2.imgBaseUrl + _this2.configDeep.listSetting.bgStyle.bgPic.buildInImg.photoSelect + '.png', ")no-repeat"),
            backgroundSize: '100% 100%',
            backgroundPosition: 'center' };

          if (_this2.configDeep.listSetting.bgStyle.where === 'odd' || _this2.configDeep.listSetting.bgStyle.where === 'even') {
            if (_this2.configDeep.listSetting.bgStyle.where === 'odd') {
              _this2.container.find(".table-item.tab-scroll tr:nth-child(even)").css({
                background: "url(\"\")" });

            } else {
              _this2.container.find(".table-item.tab-scroll tr:nth-child(odd)").css({
                background: "url(\"\")" });

            }
            _this2.container.find(".table-item.tab-scroll tr:nth-child(".concat(_this2.configDeep.listSetting.bgStyle.where, ")")).css(bgStyleObj);
          } else {
            _this2.container.find(".table-item.tab-scroll tr").css(bgStyleObj);
          }
        });
      }
      this.container.mouseenter(function () {
        clearInterval(_this2.timer);
        return false;
      });
      this.container.mouseleave(function () {
        try {
          if (_this2.isOn && _this2.timer) {
            _this2.timer = setInterval(function () {
              _this2.scrollTop();
            }, _this2.configDeep.lunbo.speed * 1000);
          }
        } catch (error) {}
      });
      this.container.find('.tab-scroll tbody tr').on('mouseover', 'td', function () {
        var choose = $(this).parent().parent().index();
        var thHeight = _this.container.height() * _this.configDeep.thead.lineHeight / 100;
        var tabTop = Number(_this.sTab.style.top.split('px')[0]);
        var scrollTop = _this.container.find('.scroll-box').scrollTop();
        var distance = choose === 0 ? tabTop : data.length * $(this).height() + tabTop;
        if (!_this.objData[$(this).parent().index()]) {
          return;
        }
        var i = $(this).parent().index(),
        j = $(this).index(),
        item = Object.keys(_this.objData[i]);
        if ($(this).find('.sonDiv').length > 0 || $(this).find('.ellipsis').length > 0) {
          _this.container.find('.overlay').show().html(_this.objData[i][item[j]]).css({
            top: _this.configDeep.columnRelate.column[j].promptBoxY + $(this).height() * i - scrollTop + distance + thHeight + 'px',
            left: 'calc(50% ' + '+ ' + _this.configDeep.columnRelate.column[j].promptBoxX + 'px)',
            transform: 'translateX(-50%)',
            fontSize: _this.configDeep.columnRelate.column[j].promptBoxFs + 'px',
            width: _this.configDeep.columnRelate.column[j].promptBoxWidth + 'px' });

        }
      });
      this.container.find('.tab-scroll tbody tr').on('mouseout', 'td', function () {
        _this.container.find('.overlay').hide();
      });
      this.container.find('.overlay').on('mouseenter', function () {
        $(this).show();
      });
      this.container.find('.overlay').hover(function () {
        $(this).show();
      }, function () {
        $(this).hide();
      });
    },
    dataInit: function dataInit() {
      var _this3 = this;
      this.objData = [];
      this.data.forEach(function (item) {
        var json = {};
        _this3.theadIndex.forEach(function (obj) {
          json[obj] = item[obj] ? item[obj] : '-';
        });
        _this3.objData.push(json);
      });
    },
    defaultSort: function defaultSort() {
      var _this4 = this;
      this.defSortCode === 1 && this.configDeep.sort && function () {
        Object.keys(_this4.objData[0]).map(function (v) {
          _this4.configDeep.sort.key === v && (_this4.configDeep.sort.sortMode === 'AtoZ' ? _this4.objData.sort(function (a, b) {
            return (/^[0-9]+.?[0-9]*/.test(a[v]) ? a[v] - b[v] : a[v].localeCompare(b[v]));
          }) : _this4.objData.sort(function (a, b) {
            return (/^[0-9]+.?[0-9]*/.test(a[v]) ? b[v] - a[v] : b[v].localeCompare(a[v]));
          }));
        });
      }();
    },
    renderTable: function renderTable() {
      var _this5 = this;
      var containerHeight = this.container.height() * (1 - this.configDeep.thead.lineHeight / 100),
      averageHeight = Math.round(containerHeight / this.num),
      theadHeight = this.container.height() * this.configDeep.thead.lineHeight / 100;
      this.container.find('.tab-scroll')[0] && (this.container.find('.tab-scroll')[0].style.top = 0);
      clearInterval(this.timer);
      this.container.find('.top thead tr').empty();
      this.container.find('.tab-scroll tbody').empty();
      !!this.configDeep.indexColumn && this.container.find('.top thead tr').append("<th style=\"width: ".concat(this.configDeep.indexColumn.width, "px;\">\u5E8F\u53F7</th>"));
      this.theadFn();
      this.renderTbody();
      !!this.configDeep.indexColumn && this.container.find('.table-item.tab-scroll tr td:nth-child(1) span').css({
        display: this.configDeep.indexColumn.icon ? 'inline-block' : 'inline',
        width: this.configDeep.indexColumn.icon ? this.configDeep.indexColumn.icon.size + 'px' : 0,
        height: this.configDeep.indexColumn.icon ? this.configDeep.indexColumn.icon.size + 'px' : 0,
        borderRadius: '50%',
        lineHeight: this.configDeep.indexColumn.icon ? this.configDeep.indexColumn.icon.size + 'px' : 0,
        textAlign: 'center',
        backgroundColor: this.configDeep.indexColumn.icon ? this.configDeep.indexColumn.icon.color : 'transparent',
        fontFamily: this.configDeep.indexColumn.text.fontFamily,
        fontSize: this.configDeep.indexColumn.text.fontSize + 'px',
        color: this.configDeep.indexColumn.text.color,
        fontWeight: this.configDeep.indexColumn.text.fontStyle.sel,
        fontStyle: this.configDeep.indexColumn.text.fontStyle.ch[0] });

      this.configDeep.listSetting.bgStyle ? function () {
        var bgStyleObj = {
          background: "url(".concat(_this5.configDeep.listSetting.bgStyle.bgPic.control === 'localImg' ? _this5.configDeep.listSetting.bgStyle.bgPic.localImg.src : _this5.imgBaseUrl + _this5.configDeep.listSetting.bgStyle.bgPic.buildInImg.photoSelect + '.png', ")no-repeat"),
          backgroundSize: '100% 100%',
          backgroundPosition: 'center' };

        if (_this5.configDeep.listSetting.bgStyle.where === 'odd' || _this5.configDeep.listSetting.bgStyle.where === 'even') {
          _this5.container.find(".table-item.tab-scroll tr:nth-child(".concat(_this5.configDeep.listSetting.bgStyle.where, ")")).css(bgStyleObj);
        } else {
          _this5.container.find(".table-item.tab-scroll tr").css(bgStyleObj);
        }
      }() : function () {
        _this5.container.find('.table-item.tab-scroll tr:nth-child(odd)').css({
          backgroundColor: _this5.configDeep.listSetting.oddBgColor });

        _this5.container.find('.table-item.tab-scroll tr:nth-child(even)').css({
          backgroundColor: _this5.configDeep.listSetting.evenBgColor });

      }();
      this.container.find('.thHead').click(function (obj) {
        _this5.jumpNum = 1;
        _this5.defSortCode = 2;
        _this5.clickSortVal = obj;
        _this5.dataInit();
        _this5.sortClickMode(obj);
        _this5.page();
      });
      this.container.find('.table-item.top tr').css({
        background: this.configDeep.thead.linearGradient ? "linear-gradient(to right, ".concat(this.configDeep.thead.theadBgColorStart, " 0%, ").concat(this.configDeep.thead.theadBgColorEnd, " 100%)") : this.configDeep.thead.theadBgColorStart });

      this.container.find('.table-item.top tr th').css({
        height: theadHeight + 'px',
        fontFamily: this.configDeep.thead.text.fontFamily,
        fontSize: this.configDeep.thead.text.fontSize + 'px',
        fontWeight: this.configDeep.thead.text.fontStyle.sel,
        fontStyle: this.configDeep.thead.text.fontStyle.ch[0],
        color: this.configDeep.thead.text.color });

      averageHeight = Math.round(containerHeight / this.num);
      theadHeight = this.container.height() - averageHeight * this.num;
      this.sTab = this.container.find('.tab-scroll')[0];
      this.tbody = this.container.find('.tab-scroll tbody')[0];
      this.configDeep.page ? function () {
        averageHeight = (_this5.container.height() - theadHeight - _this5.configDeep.page.domHeight) / _this5.num;
        _this5.container.find('.scroll-box').css({
          height: "calc(100% - ".concat(theadHeight + _this5.configDeep.page.domHeight, "px)") });

      }() : this.container.find('.scroll-box').css({
        height: "".concat(100 - this.configDeep.thead.lineHeight, "%") });

      this.configDeep.lunbo.method === 'singleRow' && (this.speed = averageHeight);
      this.configDeep.lunbo.method === 'singlePage' && (this.speed = averageHeight * this.configDeep.listSetting.column);
      this.container.find('.table-item.tab-scroll tr td').css({
        height: averageHeight + 'px',
        fontFamily: this.configDeep.listSetting.text.fontFamily,
        fontSize: this.configDeep.listSetting.text.fontSize + 'px',
        fontWeight: this.configDeep.listSetting.text.fontStyle.sel,
        fontStyle: this.configDeep.listSetting.text.fontStyle.ch[0],
        color: this.configDeep.listSetting.text.color });

      this.lunboFun();
    },
    lunboFun: function lunboFun() {
      var _this6 = this;
      var containerHeight = this.container.height() * (1 - this.configDeep.thead.lineHeight / 100),
      averageHeight = Math.round(containerHeight / this.num),
      step = Math.ceil(this.container.height() / (averageHeight * this.objData.length));
      if (this.isOn && !this.isHover) {
        if (this.configDeep.thead.lineHeight === 100 || this.objData.special === '1') return;
        this.objData.special !== '1' && function () {
          for (var i = 0; i < step; i++) {
            _this6.sTab.appendChild(_this6.tbody.cloneNode(true));
          }
        }();
        this.timer = setInterval(function () {
          _this6.scrollTop();
        }, this.configDeep.lunbo.speed * 1000);
      } else {
        this.configDeep.page ? clearInterval(this.timer) : function () {
          _this6.container.find('.table-item').css({
            height: "".concat(_this6.configDeep.thead.lineHeight, "%") });

          _this6.container.find('.scroll-box').css({
            overflowY: 'scroll' });

          _this6.container.find('.scroll-box').addClass('scrollbar');
          clearInterval(_this6.timer);
        }();
      }
    },
    scrollTop: function scrollTop() {
      var t = this.sTab.offsetTop;
      if (-this.tbody.offsetHeight >= t) {
        this.sTab.style.top = 0;
        this.sTab.style.transition = '0s';
      } else {
        this.sTab.style.transition = '1s';
        this.sTab.style.top = t - this.speed + 'px';
      }
    },
    sortClickMode: function sortClickMode(aa) {
      var _this7 = this;
      this.configDeep.columnRelate.column.map(function (v) {
        v.value === aa.currentTarget.innerText && function () {
          _this7.clickObj = v.value;
          _this7.clickStatus === 'shang' ? _this7.objData.sort(function (a, b) {
            return (/^[0-9]+.?[0-9]*/.test(a[v.key]) ? a[v.key] - b[v.key] : a[v.key].localeCompare(b[v.key]));
          }) : _this7.objData.sort(function (a, b) {
            return (/^[0-9]+.?[0-9]*/.test(a[v.key]) ? b[v.key] - a[v.key] : b[v.key].localeCompare(a[v.key]));
          });
          _this7.container.find('.top thead tr').empty();
          _this7.container.find('.tab-scroll tbody').empty();
          _this7.renderTable();
        }();
      });
      this.clickStatus = this.clickStatus === 'shang' ? 'xia' : 'shang';
    },
    page: function page() {
      var _this8 = this;
      this.configDeep.page && function () {
        var buttonStyle = {
          backgroundColor: _this8.configDeep.page.SelFillColor,
          color: _this8.configDeep.page.SelColor,
          borderColor: _this8.configDeep.page.btnBgc ? 'none' : _this8.configDeep.page.SelBorderColor,
          background: _this8.configDeep.page.btnBgc ? "url(".concat(_this8.configDeep.page.btnBgc.SelBtnSrc, ")") : _this8.configDeep.page.SelFillColor,
          backgroundSize: 'cover' };

        new Pagination({
          _this: _this8,
          element: '#pages',
          type: 1,
          pageIndex: 1,
          pageSize: _this8.configDeep.page.num,
          pageCount: 5,
          total: _this8.data.length,
          jumper: true,
          singlePageHide: false,
          prevText: '<',
          nextText: '>',
          disabled: true,
          currentChange: function currentChange(index) {
            _this8.jumpNum = index;
            _this8.dataInit();
            _this8.defaultSort();
            _this8.clickSortVal && _this8.sortClickMode(_this8.clickSortVal);
            _this8.objData = _this8.objData.slice(_this8.configDeep.page.num * (index - 1), _this8.configDeep.page.num * index);
            var arrV = Object.entries(_this8.objData[0]),
            addObj = {
              special: '1' },

            chazhi;
            arrV.map(function (x) {
              addObj[x[0]] = '';
            });
            _this8.num = _this8.configDeep.page.num;
            _this8.initStyle();
            _this8.container.find('._active_1').css(buttonStyle);
            _this8.renderTable();
          } });

        _this8.initStyle();
        _this8.style();
        !_this8.configDeep.sort && _this8.dataInit();
        _this8.objData = _this8.objData.slice(0, _this8.configDeep.page.num);
        _this8.num = _this8.configDeep.page.num;
        _this8.container.find('._page_container ._pages ._pages_li_1').eq(0).css(buttonStyle);
      }();
      this.renderTable();
    },
    style: function style() {
      var _this9 = this;
      this.container.find('._page_container').css({
        fontFamily: 'ArialMT',
        fontSize: this.configDeep.page.btnFont + 'px',
        height: this.configDeep.page.domHeight + 'px',
        backgroundColor: this.configDeep.page.domBgc,
        userSelect: 'none',
        color: this.configDeep.page.unSelColor,
        display: 'flex',
        alignItems: 'center',
        overFlow: 'hidden' });

      this.container.find('._page_container ._pages').css({
        display: 'inline-block',
        marginLeft: this.configDeep.page.domLeft + 'px' });

      this.configDeep.page.ipt ? function () {
        _this9.container.find('._page_container ._jumper').css({
          display: 'inline-block',
          color: _this9.configDeep.page.unSelColor,
          marginLeft: _this9.configDeep.page.ipt.btnGap });

        _this9.container.find('._page_container ._jumper ._jumper_input').css({
          display: 'inline-block',
          color: _this9.configDeep.page.unSelColor,
          width: _this9.configDeep.page.ipt.iptWidth,
          height: _this9.configDeep.page.btnSize + 6,
          textAlign: 'center',
          margin: '0 5px',
          padding: '3px',
          border: '1px solid ',
          borderRadius: '4px',
          outline: 'none',
          boxSizing: 'border-box',
          borderColor: _this9.configDeep.page.ipt.iptBorlderColor,
          background: _this9.configDeep.page.ipt.unSelIptSrc === '' ? _this9.configDeep.page.ipt.iptFillColor : "url(".concat(_this9.configDeep.page.ipt.unSelIptSrc, ")"),
          backgroundSize: 'cover' });

        _this9.container.find('._page_container ._jumper ._jumper_input:focus').css({
          borderColor: 'green',
          background: "url(".concat(_this9.configDeep.page.ipt.unSelIptSrc, ")"),
          backgroundSize: 'cover' });

      }() : this.container.find('._page_container ._jumper').css({
        display: 'none' });

      this.container.find('._page_container ._jumper ._count').css({
        marginRight: '10px',
        display: 'none' });

      this.container.find('._disabled_c').css({
        color: 'rgb(243, 247, 210) !important' });

    },
    initStyle: function initStyle() {
      this.container.find('._page_container ._pages li').css({
        display: 'inline-block',
        listStyle: 'none',
        color: this.configDeep.page.unSelColor,
        backgroundColor: this.configDeep.page.unSelFillColor,
        fontWeight: '400',
        minWidth: this.configDeep.page.btnSize,
        minHeight: this.configDeep.page.btnSize,
        lineHeight: this.configDeep.page.btnSize + 'px',
        borderColor: this.configDeep.page.btnBgc ? 'none' : this.configDeep.page.unSelBorderColor,
        borderStyle: this.configDeep.page.btnBgc ? 'none' : 'solid',
        borderWidth: this.configDeep.page.btnBgc ? 'none' : this.configDeep.page.btnBorderWidth,
        textAlign: 'center',
        marginLeft: this.configDeep.page.btnGap,
        marginRight: this.configDeep.page.btnGap,
        borderRadius: this.configDeep.page.btnRadius,
        background: this.configDeep.page.btnBgc ? "url(".concat(this.configDeep.page.btnBgc.unSelBtnSrc, ")") : this.configDeep.page.unSelFillColor,
        backgroundSize: 'cover',
        cursor: 'pointer' });

    },
    theadFn: function theadFn() {
      var _this10 = this;
      this.theadName.forEach(function (item, index) {
        var style = "width: ".concat(_this10.configDeep.columnRelate.column[index].width ? _this10.configDeep.columnRelate.column[index].width + 'px' : 'auto', ";\n                    text-align: ").concat(_this10.configDeep.columnRelate.column[index].align, ";\n                    box-sizing:border-box;\n                    ");
        _this10.configDeep.sort ? function () {
          item == _this10.clickObj && (_this10.clickStatus = _this10.clickStatus === 'shang' ? 'xia' : 'shang');
          var spanStyle = item == _this10.clickObj ? "margin-right:1px; color:".concat(_this10.configDeep.sort.Color) : 'margin-right: 1px',
          borderBottom = item == _this10.clickObj ? "border-bottom: ".concat(_this10.configDeep.sort.height, "px solid ").concat(_this10.clickStatus === 'shang' ? _this10.configDeep.sort.SelColor : '#4a657b') : "border-bottom: ".concat(_this10.configDeep.sort.height, "px solid ").concat(_this10.configDeep.sort.unSelColor),
          borderTop = item == _this10.clickObj ? "border-top: ".concat(_this10.configDeep.sort.height, "px solid ").concat(_this10.clickStatus === 'xia' ? _this10.configDeep.sort.SelColor : '#4a657b') : "border-top: ".concat(_this10.configDeep.sort.height, "px solid ").concat(_this10.configDeep.sort.unSelColor);
          _this10.container.find('.top thead tr').append("<th class=\"thHead\" style=\"".concat(style, "\">\n             <div style=\"display: flex; align-items: center; justify-content: center;\">\n               <span style=\"").concat(spanStyle, "\">").concat(item, "</span> \n               <div style=\"display: flex; align-items: center; justify-content: center;\">\n                 <span>\n                   <div style=\"\n                     border-left: ").concat(_this10.configDeep.sort.width, "px solid transparent;\n                     border-right: ").concat(_this10.configDeep.sort.width, "px solid transparent;\n                     ").concat(borderBottom, ";\n                     margin-bottom:1px;\n                   \"></div>\n                   <div style=\"\n                     border-left: ").concat(_this10.configDeep.sort.width, "px solid transparent;\n                     border-right: ").concat(_this10.configDeep.sort.width, "px solid transparent;\n                     ").concat(borderTop, ";\n                   \"></div>\n                 </span>    \n               </div>\n             </div>\n           </th>"));
        }() : _this10.container.find('.top thead tr').append("<th style=\"".concat(style, "\">").concat(item, "</th>"));
      });
    },
    renderTbody: function renderTbody() {
      var _this11 = this;
      var xuhao = 1;
      this.objData.forEach(function (item, index) {
        xuhao = _this11.configDeep.page ? (_this11.jumpNum - 1) * _this11.num + index + 1 : index + 1;
        _this11.container.find('.tab-scroll tbody').append("<tr data-item='".concat(JSON.stringify(item), "'></tr>"));
        if (item.special === '1') {
          !!_this11.configDeep.indexColumn && _this11.container.find('.tab-scroll tbody').append("<td style=\"\n           width: ".concat(_this11.configDeep.indexColumn.width, "px;\n           text-align: center;\n         \"></td>"));
          Object.keys(item).forEach(function (val, i) {
            (!!_this11.configDeep.indexColumn || val !== 'special' || i !== 0) && _this11.container.find(".tab-scroll tbody tr:eq(".concat(index, ")")).append("<td></td>");
          });
        } else {
          !!_this11.configDeep.indexColumn && _this11.container.find(".tab-scroll tbody tr:eq(".concat(index, ")")).append("<td style=\"\n             width: ".concat(_this11.configDeep.indexColumn.width, "px;\n             text-align: center;\n           \">\n           <span>").concat(xuhao, "</span>\n         </td>"));
          Object.keys(item).forEach(function (val, i) {
            var style = "\n              cursor:default;\n              width: ".concat(_this11.configDeep.columnRelate.column[i] ? _this11.configDeep.columnRelate.column[i].width + 'px' : 'auto', ";\n              text-align: ").concat(_this11.configDeep.columnRelate.column[i].align, ";\n              word-break:").concat(_this11.configDeep.columnRelate.column[i].longText === 'wordWrap' ? 'break-all' : 'none', "\n              white-space: ").concat(_this11.configDeep.columnRelate.column[i].longText === 'wordWrap' ? 'normal' : 'nowrap', ";\n              "),
            pianyiStyle = "margin-right:".concat(_this11.configDeep.columnRelate.column[i].offsetMd, "px;"),
            divStyle = "display: flex; align-items: center; justify-content: ".concat(_this11._tacFlex[_this11.configDeep.columnRelate.column[i].align], ";");
            _this11.container.find(".tab-scroll tbody tr:eq(".concat(index, ")")).append("<td style=\"".concat(style, " \n             ").concat((_this11.configDeep.columnRelate.column[i].longText == 'textScroll' && item[val].toString().length > _this11.configDeep.columnRelate.column[i].textScrollNum || _this11.configDeep.columnRelate.column[i].longText == 'subStr' && item[val].toString().length > _this11.configDeep.columnRelate.column[i].textScrollNum) && !_this11.configDeep.columnRelate.column[i].src && !_this11.configDeep.columnRelate.column[i].class && _this11.configDeep.indexColumn ? '' : 'overflow:hidden;', "\n               \">\n               <div style=\"\n                 ").concat(divStyle, "\n                 ").concat(_this11.configDeep.columnRelate.column[i].src && !_this11.configDeep.indexColumn ? 'width:100%;' : (_this11.configDeep.columnRelate.column[i].longText == 'textScroll' && item[val].toString().length > _this11.configDeep.columnRelate.column[i].textScrollNum || _this11.configDeep.columnRelate.column[i].longText == 'subStr' && item[val].toString().length > _this11.configDeep.columnRelate.column[i].textScrollNum) && !_this11.configDeep.columnRelate.column[i].class ? 'width:calc(100% - 4px)' : '', "\n               \">\n                 <span style=\"").concat(pianyiStyle, "\"></span>\n                 ").concat(_this11.configDeep.columnRelate.column[i].src ? "<img src=\"".concat(_this11.configDeep.columnRelate.column[i].src, "\" alt=\"\" style=\"\n                     width: ").concat(_this11.configDeep.columnRelate.column[i].offsetWidth, "px;\n                     height: ").concat(_this11.configDeep.columnRelate.column[i].offsetHeight, "px;\n                     margin-right: ").concat(_this11.configDeep.columnRelate.column[i].offsettuwen, "px;\n                   \">") : _this11.configDeep.columnRelate.column[i].class ? "<span class=\"".concat(_this11.configDeep.columnRelate.column[i].class, "\" alt=\"\" style=\"\n                       color:").concat(_this11.configDeep.columnRelate.column[i].svgColor, ";\n                       line-height:").concat(_this11.configDeep.columnRelate.column[i].offsetSize, "px;\n                       font-size:").concat(_this11.configDeep.columnRelate.column[i].offsetSize, "px;\n                       margin-right: ").concat(_this11.configDeep.columnRelate.column[i].offsettuwen, "px;\n                     \"></span>") : '', "\n                 ").concat(_this11.configDeep.columnRelate.column[i].longText === 'textScroll' && item[val].toString().length > _this11.configDeep.columnRelate.column[i].textScrollNum ? "<span class=\"fatherDiv\">\n                     <span class=\"sonDiv\">".concat(item[val], "</span>\n                   </span>") : _this11.configDeep.columnRelate.column[i].longText === 'subStr' && item[val].toString().length > _this11.configDeep.columnRelate.column[i].textScrollNum ? "<span class=\"ellipsis\">".concat(item[val].toString().substr(0, _this11.configDeep.columnRelate.column[i].textScrollNum) + '...', "</span>") : "<span>".concat(item[val], "</span>"), "\n               </div>\n             </td>"));
            if (_this11.configDeep.graphicCustom && _this11.configDeep.graphicCustom.column[i]) {
              var arr = Object.keys(item).length;
              for (var _i2 = 0; _i2 < arr; _i2++) {
                _this11.configDeep.graphicCustom.column.length < arr ? _this11.configDeep.graphicCustom.column.push({
                  method: {
                    control: null,
                    selectIcon: null,
                    upload: {},
                    none: {} } }) :

                '';
              }
              _this11.configDeep.graphicCustom.column.map(function (v) {
                "<span class=\"".concat(_this11.configDeep.columnRelate.column[i].longText !== 'wordWrap' && !v.textShow && v.method.control === 'none' ? item[val].toString().length > _this11.configDeep.columnRelate.column[i].textScrollNum ? 'sonDiv' : _this11.configDeep.indexColumn ? 'sonDiv' : '' : '', "\" style=\"").concat(pianyiStyle, "\"></span>");
                val === v.key && item[val] == v.value && _this11.container.find(".tab-scroll tbody tr:eq(".concat(index, ") td:contains(").concat(item[val], ")")).empty().append("<div style=\"".concat(divStyle, "\">\n                   <span class=\"").concat(_this11.configDeep.columnRelate.column[i].longText !== 'wordWrap' && !v.textShow && v.method.control === 'none' ? item[val].toString().length > _this11.configDeep.columnRelate.column[i].textScrollNum ? 'sonDiv' : _this11.configDeep.indexColumn ? 'sonDiv' : '' : '', "\" style=\"").concat(pianyiStyle, "\"></span>\n                   ").concat(_this11.configDeep.columnRelate.column[i].longText === 'wordWrap' ? _this11.getControl(v, 'two', null, item, val) : item[val].toString().length > _this11.configDeep.columnRelate.column[i].textScrollNum ? _this11.getControl(v, 'two', v.textShow && v.textShow.default.toString().length > _this11.configDeep.columnRelate.column[i].textScrollNum, item, val) : _this11.getControl(v, 'three', v.textShow && v.textShow.default.toString().length > _this11.configDeep.columnRelate.column[i].textScrollNum, item, val), "\n                 </div>"));
              });
            }
          });
        }
      });
    },
    getControl: function getControl(v, type, bol, item, val) {
      var str = {
        selectIcon: "<span class=\"".concat(v.method.selectIcon.class, "\" alt=\"\" style=\"\n         color:").concat(v.method.selectIcon.svgColor, ";\n         line-height:").concat(v.method.selectIcon.offsetSize, "px;\n         font-size:").concat(v.method.selectIcon.offsetSize, "px;\n         margin-right: ").concat(v.method.selectIcon.offsettuwen, "px;\n       \"></span>"),
        upload: "<img src=\"".concat(v.method.upload.src, "\" alt=\"\" style=\"\n         width:").concat(v.method.upload.offsetWidth ? v.method.upload.offsetWidth : 24, "px;\n         height: ").concat(v.method.upload.offsetHeight ? v.method.upload.offsetHeight : 24, "px;\n         margin-right: ").concat(v.method.upload.offsettuwen ? v.method.upload.offsettuwen : 6, "px;\n       \">"),
        none: '' };

      var str2 = {
        one: v.textShow ? "<span style=\"\n           color:".concat(v.textShow.color, ";\n           font-size:").concat(v.textShow.fontSize, "px;\n           font-family: ").concat(v.textShow.fontFamily, ";\n         \">").concat(v.textShow.default, "</span>") : "<span>".concat(item[val], "</span>"),
        two: v.textShow ? bol ? "<span >\n             <span class=\"sonDiv\" style=\"\n               color:".concat(v.textShow.color, ";\n               font-size:").concat(v.textShow.fontSize, "px;\n               font-family: ").concat(v.textShow.fontFamily, ";\n             \">").concat(v.textShow.default, "</span>\n           </span>") : "<span class=\"".concat(this.configDeep.indexColumn ? '' : 'sonDiv', "\" style=\"\n             color:").concat(v.textShow.color, ";\n             font-size:").concat(v.textShow.fontSize, "px;\n             font-family: ").concat(v.textShow.fontFamily, ";\n           \">").concat(v.textShow.default, "</span>") : "<span >\n           <span class=\"sonDiv\">".concat(item[val], "</span>\n         </span>"),
        two2: v.textShow ? bol ? "<span class=\"fatherDiv\">\n           <span class=\"sonDiv\" style=\"\n             color:".concat(v.textShow.color, ";\n             font-size:").concat(v.textShow.fontSize, "px;\n             font-family: ").concat(v.textShow.fontFamily, ";\n           \">").concat(v.textShow.default, "</span>\n         </span>") : "<span class=\"".concat(this.configDeep.indexColumn ? '' : 'sonDiv', "\" style=\"\n           color:").concat(v.textShow.color, ";\n           font-size:").concat(v.textShow.fontSize, "px;\n           font-family: ").concat(v.textShow.fontFamily, ";\n         \">").concat(v.textShow.default, "</span>") : "<span class=\"fatherDiv\">\n         <span class=\"sonDiv\">".concat(item[val], "</span>\n       </span>"),
        three: v.textShow ? bol ? "<span class=\"fatherDiv\">\n             <span class=\"sonDiv\" style=\"\n               color: ".concat(v.textShow.color, ";\n               font-size: ").concat(v.textShow.fontSize, "px;\n               font-family: ").concat(v.textShow.fontFamily, ";\n             \">").concat(v.textShow.default, "</span>\n           </span>") : "<span class=\"".concat(this.configDeep.indexColumn ? '' : 'sonDiv', "\" style=\"\n             color:").concat(v.textShow.color, ";\n             font-size:").concat(v.textShow.fontSize, "px;\n             font-family: ").concat(v.textShow.fontFamily, ";\n           \">").concat(v.textShow.default, "</span>") : "<span class=\"".concat(this.configDeep.indexColumn ? 'sonDiv' : '', "\">").concat(item[val], "</span>") };

      return str[v.method.control] + str2[type];
    },
    _tacFlex: {
      left: 'flex-start',
      center: 'center',
      right: 'flex-end' },

    updateConfig: function updateConfig(config) {
      if (_instanceof(config, Object) && !config.length) {
        this.render(config, this.data);
      } else {
        console.warn('更新组件配置失败，传入参数有误');
      }
    },
    destroy: function destroy() {
      this.container.find('.thHead').off('click');
      this.container.find('.tab-scroll tbody').off('click');
      this.container.off('mouseenter mouseleave');
      this.container.find('.tab-scroll tbody tr').off('mouseover mouseout');
      this.container.find('.overlay').off('mouseenter mouseleave');
      this.clickObj = '';
      this.clickStatus = null;
      this.jumpNum = 1;
      this.clickSortVal = null;
      clearInterval(this.timer);
      this.timer = null;
      this.theadIndex = [];
      this.theadName = [];
      this.defSortCode = 1;
      this.speed = 0;
      this.container.unbind();
      this.container.empty();
      this.isHover = false;
    } });return module.exports;});