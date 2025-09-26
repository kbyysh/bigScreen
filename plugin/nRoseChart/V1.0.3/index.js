Cube("/nRoseChart/V1.0.3/index.js", ["/node_modules/jquery/dist/jquery.js", "/node_modules/bcore/event.js", "/node_modules/lodash/lodash.js", "/node_modules/echarts5/dist/echarts.js"], function (module, exports, require, load, process, global) {

  function _instanceof(left, right) {if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {return !!right[Symbol.hasInstance](left);} else {return left instanceof right;}}
  var $ = require('/node_modules/jquery/dist/jquery.js');
  var Event = require('/node_modules/bcore/event.js');
  var _ = require('/node_modules/lodash/lodash.js');
  var echarts = require('/node_modules/echarts5/dist/echarts.js');
  load('/_requireModules/css/charts.css.js', '');
  module.exports = Event.extend(function Base(container) {
    this.container = $(container);
    this.imgBaseUrl = "".concat(window.baseUrl, "nRoseChart/img/");
  }, {
    render: function render(config, data) {
      this.config = _.defaultsDeep(config || {}, this.config);
      this.data = _.cloneDeep(data);
      var _this = this,
      centerWidth = config.Image.centerImage ? Math.min(this.container.width(), this.container.height()) * config.Image.centerImage.imageSize / 100 : 0,
      bottomWidth = config.Image.bottomImage ? Math.min(this.container.width(), this.container.height()) * config.Image.bottomImage.imageSize / 100 : 0,
      centerUrl = config.Image.centerImage ? config.Image.centerImage.bgPic.control === 'builtInImg' ? "".concat(_this.imgBaseUrl + config.Image.centerImage.bgPic.builtInImg.photoSelect, ".png") : "".concat(config.Image.centerImage.bgPic.localImg.src) : '',
      bottomUrl = config.Image.bottomImage ? config.Image.bottomImage.bgPic.control === 'builtInImg' ? "".concat(_this.imgBaseUrl + config.Image.bottomImage.bgPic.builtInImg.photoSelect, ".png") : "".concat(config.Image.bottomImage.bgPic.localImg.src) : '';
      this.destroy();
      this.container.append("\n           <div class=\"bottomBg\"></div>\n           <div class=\"centerBg\"></div>\n           <div class=\"charts\" style=\"position: absolute;top:0%;left:0%;width:100%;height:100%;z-index:20\"></div>\n           <div class=\"charts1\" style=\"position: absolute;top:0%;left:0%;width:100%;height:100%;z-index:40;\"></div>\n           <div class=\"charts2\" style=\"position: absolute;top:0%;left:0%;width:100%;height:100%;z-index:30;\"></div>\n           ");
      this.container.css('position', 'relative');
      this.container.find('.bottomBg').css({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%)translateY(-50%)',
        width: bottomWidth + 'px',
        height: bottomWidth + 'px',
        background: 'url(' + bottomUrl + ')no-repeat',
        backgroundSize: '100% 100%' });

      this.container.find('.centerBg').css({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%)translateY(-50%)',
        width: centerWidth + 'px',
        height: centerWidth + 'px',
        background: 'url(' + centerUrl + ')no-repeat',
        backgroundSize: '100% 100%',
        zIndex: 10 });

      var titleOption = config.title ? {
        text: config.title.text,
        textStyle: {
          color: config.title.color,
          fontStyle: config.title.fontStyle.ch.includes('italic') ? 'italic' : 'normal',
          fontWeight: config.title.fontStyle.sel ? config.title.fontStyle.sel : 'normal',
          fontFamily: config.title.fontFamily,
          fontSize: config.title.fontSize },

        x: config.title.position,
        padding: [config.title.tbPadding, config.title.lrPadding] } :
      {
        text: '' },

      centerPosi = ['50%', '50%'];
      this.centerPosi = centerPosi;
      var cloneData = _.cloneDeep(this.data),
      newData = [];
      $.each(cloneData, function (index, value) {
        var reg = /^[-]?[0-9]+\.?[0-9]+?$/.test(value.y);
        typeof value.y === 'string' && reg && (value.y = Number(value.y));
        var isObj = _instanceof(value, Object);
        if (!(!isObj || isObj && value.length !== undefined || Object.keys(cloneData).length === 0 || !value.x)) {
          newData.push(cloneData[index]);
        }
      });
      if (!newData && newData.length) {
        this.container.html('<div class="err-container">数据不匹配</div>');
        return;
      }
      var legendData = [],
      originDataX = [],
      seriesArr = [];
      newData.filter(function (i) {
        legendData.push(i['s']);
        originDataX.push(i['x']);
      });
      legendData = Array.from(new Set(legendData));
      originDataX = Array.from(new Set(originDataX));
      legendData.forEach(function (item) {
        var everyData = $.grep(newData, function (val) {
          return val.s == item;
        });
        seriesArr.push(everyData);
      });
      var series1 = [],
      series2 = [],
      restArr = [];
      seriesArr.forEach(function (val) {
        val.length === originDataX.length ? restArr.push(val) : function () {
          val.length === 1 && function () {
            var index = originDataX.indexOf(val[0].x);
            originDataX.forEach(function (item) {
              series1.push({
                x: item,
                y: 0,
                s: val[0].s });

            });
            series1[index].y = val[0].y;
          }();
          val.length === originDataX.length - 1 && function () {
            var xdata = [];
            val.filter(function (item) {
              xdata.push(item.x);
            });
            var diff = originDataX.filter(function (n) {
              return xdata.indexOf(n) === -1;
            });
            var index = originDataX.indexOf(diff[0]);
            series2 = val;
            series2.splice(index, 0, {
              x: originDataX[index],
              y: 0,
              s: val[0].s });

          }();
        }();
      });
      var newSeriesData = [];
      newSeriesData.push(series1, series2);
      restArr.forEach(function (item) {
        newSeriesData.push(item);
      });
      newData = $.grep(newSeriesData, function (item) {
        return item.length !== 0;
      });
      var legendDataResize = [];
      newData.filter(function (i) {
        legendDataResize.push(i[0]['s']);
      });
      var firstData = $.grep(newData, function (item) {
        return item.s === legendDataResize[0] || item[0].s === legendDataResize[0];
      });
      switch (config.chartsSetting.data.sortData) {
        case 'increase':
          firstData = firstData[0].sort(function (a, b) {
            return a.y - b.y;
          });
          break;
        case 'reduce':
          firstData = firstData[0].sort(function (a, b) {
            return b.y - a.y;
          });
          break;
        case 'none':
          firstData = firstData[0];
          break;
        default:
          break;}

      if (!config.chartsSetting.hideNulls) {
        firstData = firstData.filter(function (item) {
          return item.y != null;
        });
      }
      var x0Data = [],
      yData = [];
      $.each(firstData, function (i, val) {
        x0Data.push(val.x);
        yData.push(val.y);
      });
      for (var i = 1; i < newData.length; i++) {
        var _loop = function _loop(j) {
          var index = (newData[i] || []).findIndex(function (item) {
            return item.x === x0Data[j];
          });
          yData.push(newData[i][index].y);
        };
        for (var j = 0; j < x0Data.length; j++) {
          _loop(j);
        }
      }
      var maxValue = Math.max.apply(Math, yData),
      stackData = [],
      maxArr = [];
      yData.forEach(function (item) {
        stackData.push(maxValue - item);
      });
      for (var _i2 = 0; _i2 < yData.length / legendDataResize.length; _i2++) {
        maxArr.push(maxValue);
      }
      var result = [],
      stackArr = [],
      total = yData.length,
      len = legendData.length,
      num = total / len;
      for (var n = 0; n < total; n += num) {
        result.push(yData.slice(n, n + num));
        stackArr.push(stackData.slice(n, n + num));
      }
      var diyColor = config.colorMatching.diy,
      themeColor = config.colorMatching.themeType;
      if (diyColor.length < legendDataResize.length) {
        var _num = legendDataResize.length - diyColor.length;
        for (var _i4 = 0; _i4 < _num; _i4++) {
          diyColor.push({
            key: '',
            nameDef: '',
            startColor: themeColor.color1[_i4 % themeColor.color1.length],
            endColor: themeColor.color2[_i4 % themeColor.color2.length],
            linearGradient: true });

        }
      }
      var lrPadding = config.legend ? config.legend.default.position.control === 'leftVertical' || config.legend.default.position.control === 'rightVertical' ? config.legend.default.position[config.legend.default.position.control].padding : 0 : '';
      var legendDetail = config.legend ? {
        show: true,
        textStyle: {
          color: config.legend.font.color,
          fontFamily: config.legend.font.fontFamily,
          fontSize: config.legend.font.fontSize,
          fontWeight: config.legend.font.fontStyle.sel,
          fontStyle: config.legend.font.fontStyle.ch.includes('italic') ? 'italic' : 'normal' },

        itemHeight: config.legend.font.fontSize,
        itemWidth: config.legend.font.fontSize,
        itemGap: config.legend.default.gap,
        padding: [config.legend.default.position[config.legend.default.position.control].padding, lrPadding],
        icon: config.legend.default.shape,
        data: legendDataResize } :
      {
        show: false };

      config.legend && (legendDetail = _.assign(legendDetail, _this._legendPos[config.legend.default.position.control]));
      var series = [],
      seriesData = [],
      totalData = [],
      labelData = [],
      barColor,
      empColor;
      for (var _i6 = 0; _i6 < legendDataResize.length; _i6++) {
        if (config.colorMatching.diy[_i6]) {
          switch (config.colorMatching.diy[_i6].linearGradient) {
            case true:
              barColor = {
                type: 'linear',
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [{
                  offset: 0,
                  color: diyColor[_i6].startColor },
                {
                  offset: 1,
                  color: diyColor[_i6].endColor }] },

              empColor = diyColor[_i6].startColor;
              break;
            case false:
              barColor = diyColor[_i6].startColor, empColor = diyColor[_i6].startColor;
              break;
            default:
              break;}

        } else {
          switch (config.colorMatching.diy[diyColor.length - 1].linearGradient) {
            case true:
              barColor = {
                type: 'linear',
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [{
                  offset: 0,
                  color: diyColor[diyColor.length - 1].startColor },
                {
                  offset: 1,
                  color: diyColor[diyColor.length - 1].endColor }] },

              empColor = diyColor[diyColor.length - 1].startColor;
              break;
            case false:
              barColor = diyColor[diyColor.length - 1].startColor, empColor = diyColor[diyColor.length - 1].startColor;
              break;
            default:
              break;}

        }
        seriesData.push({
          type: 'bar',
          barGap: '-100%',
          barCategoryGap: config.chartsSetting.default.radiusSpacing + '%',
          name: legendDataResize[_i6],
          connectNulls: config.chartsSetting.hideNulls,
          data: result[_i6],
          tooltip: {
            formatter: function formatter(params) {
              return "\n                <div style=\"width: auto; height: auto;\">\n                  <h1\n                    style=\"\n                      font-weight: normal;\n                      font-size: ".concat(config.tooltip.fontSize, "px;\n                      color: #fff;\n                    \"\n                  >").concat(params.seriesName, "</h1>\n                  <p\n                    style=\"\n                      font-size: ").concat(config.tooltip.fontSize, "px;\n                      color: #fff;\n                      padding-top: 6px;\n                    \"\n                  >\n                    <span\n                      style=\"\n                        display: inline-block;\n                        width: 8px;\n                        height: 8px;\n                        border-radius: 4px;\n                        background-image: linear-gradient(\n                          to top,\n                          ").concat(params.color.colorStops[0].color, ",\n                          ").concat(params.color.colorStops[1].color, "\n                        )\n                      \"\n                    ></span>\n                    <span>").concat(params.name, ":</span>&nbsp;\n                    <span>").concat(params.data, "</span>\n                  </p>\n                </div>\n              ");
            },
            backgroundColor: 'rgba(0,0,0,0.8)',
            borderWidth: 0,
            textStyle: {
              fontSize: config.tooltip.fontSize,
              color: '#fff' } },


          z: 5,
          coordinateSystem: 'polar',
          stack: 'a',
          itemStyle: {
            color: barColor },

          emphasis: {
            color: empColor },

          label: config.chartsSetting.divisionText && config.chartsSetting.divisionText.mode === 'single' ? {
            show: true,
            position: 'end',
            distance: config.chartsSetting.divisionText.offset,
            color: config.chartsSetting.divisionText.color,
            fontFamily: config.chartsSetting.divisionText.fontFamily,
            fontSize: config.chartsSetting.divisionText.fontSize,
            fontWeight: config.chartsSetting.divisionText.fontStyle.sel,
            fontStyle: config.chartsSetting.divisionText.fontStyle.ch[0] } :
          {
            show: false } });


      }
      result[0].forEach(function (item, index) {
        var sum = 0;
        for (var _i8 = 0; _i8 < legendDataResize.length; _i8++) {
          sum += result[_i8][index];
        }
        totalData.push(sum);
      });
      seriesData.push({
        type: 'bar',
        barGap: '-100%',
        barCategoryGap: config.chartsSetting.default.radiusSpacing + '%',
        name: legendDataResize.length > 1 ? 'total' : legendDataResize[0],
        tooltip: {
          show: false },

        connectNulls: config.chartsSetting.hideNulls,
        data: totalData,
        z: 4,
        coordinateSystem: 'polar',
        label: config.chartsSetting.divisionText && config.chartsSetting.divisionText.mode === 'all' ? {
          show: true,
          position: 'end',
          distance: config.chartsSetting.divisionText.offset,
          color: config.chartsSetting.divisionText.color,
          fontFamily: config.chartsSetting.divisionText.fontFamily,
          fontSize: config.chartsSetting.divisionText.fontSize,
          fontWeight: config.chartsSetting.divisionText.fontStyle.sel,
          fontStyle: config.chartsSetting.divisionText.fontStyle.ch[0] } :
        {
          show: false } });


      x0Data.forEach(function (item) {
        labelData.push({
          name: item,
          value: 1 });

      });
      if (config.label.text != null) {
        switch (config.label.text.shape) {
          case 'circle':
            for (var _i10 = 0; _i10 < labelData.length; _i10++) {
              labelData[_i10]['label'] = {};
              labelData[_i10]['label']['rotate'] = _this._angleText(_i10, labelData.length, config.chartsSetting.default.startAngle);
            }
            break;
          case 'rect':
            break;
          default:
            break;}

      }
      series.push({
        type: 'pie',
        center: _this.centerPosi,
        radius: [config.chartsSetting.default.radiusOutside + '%', config.chartsSetting.default.radiusOutside + 30 + '%'],
        startAngle: config.chartsSetting.default.startAngle,
        z: 1,
        label: {
          show: true,
          fontSize: config.label.text != null ? config.label.text.fontSize : 18,
          fontWeight: config.label.text != null ? config.label.text.fontStyle.sel : 400,
          fontStyle: config.label.text != null ? config.label.text.fontStyle.ch[0] : '',
          fontFamily: config.label.text != null ? config.label.text.fontFamily : 'sans-serif',
          color: config.label.text != null ? config.label.text.color : 'transparent',
          padding: [0, 0, config.label.text != null ? config.label.text.iconSpacing : 0, 0],
          position: 'inside',
          formatter: config.label.text != null ? function (value, index) {
            switch (config.label.text.labelFormatter[0]) {
              case 'showAll':
                return '{radius|' + '' + '}' + '\n' + value.name;
                break;
              case 'wrap':
                var newParamsName = '',
                paramsNameNumber = value.name.length,
                provideNumber = Number(config.label.text.labelFormatter[1]),
                rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                if (paramsNameNumber > provideNumber) {
                  for (var p = 0; p < rowNumber; p++) {
                    var tempStr = '';
                    var start = p * provideNumber;
                    var end = start + provideNumber;
                    if (p == rowNumber - 1) {
                      tempStr = value.name.substring(start, paramsNameNumber);
                    } else {
                      tempStr = value.name.substring(start, end) + '\n';
                    }
                    newParamsName += tempStr;
                  }
                } else {
                  newParamsName = value.name;
                }
                return '{radius|' + '' + '}' + '\n' + newParamsName;
                break;
              case 'subStr':
                if (value.name.length > Number(config.label.text.labelFormatter[1])) {
                  return '{radius|' + '' + '}' + '\n' + value.name.substr(0, Number(config.label.text.labelFormatter[1])) + '...';
                } else {
                  return '{radius|' + '' + '}' + '\n' + value.name;
                }
                break;
              default:
                return value.name;
                break;}

          } : function () {
            return '{radius|' + '}';
          },
          rich: {
            radius: {
              lineHeight: config.label.value != null ? config.label.value.padding : 15,
              width: config.label.value != null ? config.label.value.radius : 0,
              height: config.label.value != null ? config.label.value.radius : 0,
              backgroundColor: config.label.value != null ? config.label.value.color : 'transparent',
              borderRadius: config.label.value != null ? config.label.value.radius / 2 : 0 } } },



        itemStyle: {
          color: config.chartsSetting.default.radiusOutsideColor },

        legend: {
          show: false },

        roseType: 'area',
        animation: false,
        silent: true,
        data: labelData },
      {
        type: 'pie',
        radius: config.chartsSetting.default.radiusOutside + '%',
        z: 1,
        center: _this.centerPosi,
        label: {
          show: false,
          position: 'inside' },

        itemStyle: {
          color: config.chartsSetting.default.radiusOutsideColor },

        animation: false,
        silent: true,
        data: [0] });

      var angleAxis;
      if (config.chartsSetting.divisionLine != null) {
        angleAxis = {
          data: x0Data,
          type: 'category',
          backgroundColor: 'red',
          startAngle: config.chartsSetting.default.startAngle,
          z: 2,
          splitLine: {
            show: true,
            lineStyle: {
              color: config.chartsSetting.divisionLine.color,
              width: config.chartsSetting.divisionLine.lineWidth } },


          axisTick: {
            show: true,
            length: _this.container.width() / 100 * config.chartsSetting.divisionLine.lineHeight,
            lineStyle: {
              color: config.chartsSetting.divisionLine.color,
              width: config.chartsSetting.divisionLine.lineWidth } },


          axisLabel: {
            show: false },

          axisLine: {
            show: false } };


      } else {
        angleAxis = {
          data: x0Data,
          type: 'category',
          backgroundColor: 'red',
          startAngle: config.chartsSetting.default.startAngle,
          z: 2,
          splitLine: {
            show: false },

          axisTick: {
            show: false },

          axisLabel: {
            show: false },

          axisLine: {
            show: false } };


      }
      setTimeout(function () {
        _this.myChart = echarts.init(_this.container.find('.charts')[0]);
        config.animation && config.animation.ansy === 'clear' && _this.myChart.clear();
        _this.myChart.setOption({
          title: titleOption,
          series: series },
        true, false);
      }, 300);
      _this._centerImage(config, _this);
      _this._bottomImage(config, _this, angleAxis, seriesData, legendDetail);
    },
    _legendPos: {
      topCenter: {
        orient: 'horizontal',
        top: 'top',
        left: 'center' },

      topLeft: {
        orient: 'horizontal',
        top: 'top',
        left: 'left' },

      topRight: {
        orient: 'horizontal',
        top: 'top',
        left: 'right' },

      bottomCenter: {
        orient: 'horizontal',
        bottom: 5,
        left: 'center' },

      bottomLeft: {
        orient: 'horizontal',
        bottom: 5,
        left: 'left' },

      bottomRight: {
        orient: 'horizontal',
        bottom: 5,
        left: 'right' },

      leftVertical: {
        orient: 'vertical',
        x: 'left',
        y: 'center' },

      rightVertical: {
        orient: 'vertical',
        x: 'right',
        y: 'center' } },


    _centerImage: function _centerImage(config, _this) {
      var series2 = config.chartsSetting.radiusCenter ? [{
        type: 'pie',
        radius: config.chartsSetting.radiusCenter.centerRadiusOutside + '%',
        z: 1,
        center: _this.centerPosi,
        label: {
          show: false,
          position: 'inside' },

        itemStyle: {
          color: config.chartsSetting.radiusCenter.linearGradient ? new echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
            offset: 0,
            color: config.chartsSetting.radiusCenter.radiusCenterStart },
          {
            offset: 1,
            color: config.chartsSetting.radiusCenter.radiusCenterEnd }],
          false) : config.chartsSetting.radiusCenter.radiusCenterStart,
          borderWidth: 0 },

        animation: false,
        silent: true,
        data: [0] }] :
      [];
      setTimeout(function () {
        _this.myChart2 = echarts.init(_this.container.find('.charts2')[0]);
        config.animation && config.animation.ansy === 'clear' && _this.myChart2.clear();
        _this.myChart2.setOption({
          tooltip: {
            show: false },

          series: series2 },
        true, false);
      }, 400);
    },
    _bottomImage: function _bottomImage(config, _this, angleAxis, series, legendDetail) {
      _this.myChart3 = echarts.init(_this.container.find('.charts1')[0]);
      config.animation && config.animation.ansy === 'clear' && _this.myChart3.clear();
      _this.myChart3.setOption({
        legend: legendDetail,
        tooltip: {
          show: true,
          textStyle: {
            fontSize: config.tooltip.fontSize },

          confine: true },

        angleAxis: angleAxis,
        radiusAxis: {
          splitLine: {
            show: false },

          axisTick: {
            show: false },

          axisLabel: {
            show: false },

          axisLine: {
            show: false },

          splitArea: {
            show: false,
            areaStyle: {
              color: '#19f1f53d' } } },



        polar: {
          center: _this.centerPosi,
          radius: [config.chartsSetting.default.radiusInner + '%', config.chartsSetting.default.radiusOutside + '%'] },

        animation: config.animation !== null,
        animationDuration: config.animation ? config.animation.initTime : 0,
        animationEasing: config.animation ? config.animation.easing : '',
        animationDurationUpdate: config.animation ? config.animation.updateTime : 0,
        series: series },
      true, false);
      _this.myChart3.on('click', function (params) {
        _this.emit('eventClick', {
          value: params.value,
          name: params.name,
          seriesName: params.seriesName,
          seriesIndex: params.seriesIndex,
          seriesId: params.seriesId });

      });
    },
    _angleText: function _angleText(i, num, angleNum) {
      var everyAngle = 360 / num;
      var currentAngle = i * everyAngle + everyAngle / 2;
      return 270 - currentAngle + angleNum;
    },
    _numFormat: function _numFormat(num) {
      num = num.toString().split('.');
      var arr = num[0].split('').reverse();
      var res = [];
      for (var i = 0, len = arr.length; i < len; i++) {
        i % 3 === 0 && i !== 0 && res.push(',');
        res.push(arr[i]);
      }
      res.reverse();
      if (num[1]) {
        res = res.join('').concat('.' + num[1]);
      } else {
        res = res.join('');
      }
      return res;
    },
    highlight: function highlight(args) {
      var base = {
        type: 'highlight' };

      args.hasOwnProperty('seriesIndex') && (base.seriesIndex = args.seriesIndex);
      args.hasOwnProperty('seriesId') && (base.seriesId = args.seriesId);
      args.hasOwnProperty('seriesName') && (base.seriesName = args.seriesName);
      args.hasOwnProperty('dataIndex') && (base.dataIndex = args.dataIndex);
      args.hasOwnProperty('name') && (base.name = args.name);
      this.myChart3.dispatchAction(base);
    },
    cancelHighlight: function cancelHighlight(args) {
      var base = {
        type: 'downplay' };

      args.hasOwnProperty('seriesIndex') && (base.seriesIndex = args.seriesIndex);
      args.hasOwnProperty('seriesId') && (base.seriesId = args.seriesId);
      args.hasOwnProperty('seriesName') && (base.seriesName = args.seriesName);
      args.hasOwnProperty('dataIndex') && (base.dataIndex = args.dataIndex);
      args.hasOwnProperty('name') && (base.name = args.name);
      this.myChart3.dispatchAction(base);
    },
    showTooltip: function showTooltip(args) {
      var base = {
        type: 'showTip' };

      args.hasOwnProperty('seriesIndex') && (base.seriesIndex = args.seriesIndex);
      args.hasOwnProperty('dataIndex') && (base.dataIndex = args.dataIndex);
      args.hasOwnProperty('name') && (base.name = args.name);
      args.hasOwnProperty('position') && (base.position = args.position);
      this.myChart3.dispatchAction(base);
    },
    hideTooltip: function hideTooltip() {
      this.myChart3.dispatchAction({
        type: 'hideTip' });

    },
    legend: function legend(args) {
      var _this2 = this;
      ['legendSelect', 'legendUnSelect', 'legendToggleSelect'].includes(args.type) ? _instanceof(args.name, Array) ? args.name.forEach(function (item) {
        _this2.myChart3.dispatchAction({
          type: args.type,
          name: item });

      }) : this.myChart3.dispatchAction({
        type: args.type,
        name: args.name }) :
      this.myChart3.dispatchAction({
        type: args.type });

    },
    updateConfig: function updateConfig(config) {
      if (_instanceof(config, Object) && !config.length) {
        this.render(config, this.data);
      } else {
        console.warn('更新组件配置失败，传入参数有误');
      }
    },
    destroy: function destroy() {
      if (!!this.myChart) {
        this.myChart.dispose();
        this.myChart2.dispose();
        this.myChart3.dispose();
        this.myChart3.off('click');
      }
      this.container.empty();
    } });return module.exports;});