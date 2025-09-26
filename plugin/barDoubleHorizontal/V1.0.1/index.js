Cube("/barDoubleHorizontal/V1.0.1/index.js", ["/node_modules/jquery/dist/jquery.js", "/node_modules/bcore/event.js", "/node_modules/lodash/lodash.js", "/node_modules/echarts5/dist/echarts.js"], function (module, exports, require, load, process, global) {

  function _instanceof(left, right) {if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {return !!right[Symbol.hasInstance](left);} else {return left instanceof right;}}
  var $ = require('/node_modules/jquery/dist/jquery.js');
  var Event = require('/node_modules/bcore/event.js');
  var _ = require('/node_modules/lodash/lodash.js');
  var echarts = require('/node_modules/echarts5/dist/echarts.js');
  load('/_requireModules/css/charts2.css.js', '');
  module.exports = Event.extend(function Base(container) {
    this.container = $(container);
  }, {
    render: function render(config, data) {
      var _this2 = this;
      this.config = _.defaultsDeep(config || {}, this.config);
      this.data = _.cloneDeep(data);
      var _this = this;
      this.destroy();
      this.container.append("<div class=\"charts\" style=\"width:100%;height:100%;\"></div>");
      var isShowTitle = config.title,
      titleOption = isShowTitle ? {
        text: config.title.text,
        textStyle: {
          color: config.title.color,
          fontStyle: config.title.fontStyle.ch.includes('italic') ? 'italic' : 'normal',
          fontWeight: config.title.fontStyle.sel ? config.title.fontStyle.sel : 'normal',
          fontFamily: config.title.fontFamily,
          fontSize: config.title.fontSize },

        x: config.title.position,
        padding: [5, config.title.lrPadding] } :
      {
        text: '' };

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
      if (!newData) {
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
      }).reverse();
      switch (config.chartsSetting.sortData) {
        case 'increase':
          firstData = firstData[0].sort(function (a, b) {
            return b.y - a.y;
          });
          break;
        case 'reduce':
          firstData = firstData[0].sort(function (a, b) {
            return a.y - b.y;
          });
          break;
        case 'none':
          firstData = firstData[0].reverse();
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
        if (_num === 2) {
          for (var _i4 = 0; _i4 < _num; _i4++) {
            diyColor.push({
              key: '',
              nameDef: '',
              startColor: themeColor.color1[_i4],
              endColor: themeColor.color2[_i4],
              linearGradient: true });

          }
        } else {
          for (var _i6 = 0; _i6 < _num; _i6++) {
            diyColor.push({
              key: '',
              nameDef: '',
              startColor: themeColor.color1.slice(diyColor.length, themeColor.length)[_i6],
              endColor: themeColor.color2.slice(diyColor.length, themeColor.length)[_i6],
              linearGradient: true });

          }
        }
      }
      for (var _t2 = 0; _t2 < legendDataResize.length; _t2++) {
        if (diyColor[_t2].nameDef === '') {
          var index = diyColor.indexOf(diyColor[_t2]);
          diyColor[_t2].nameDef = legendDataResize[index];
        }
        legendDataResize[_t2] = diyColor[_t2].nameDef;
      }
      (legendData.length === 1 && legendData[0] === undefined && legendDataResize[0] === undefined || legendData[0] === '') && (legendDataResize[0] = ' ');
      var seriesData = [],
      barBorderPosition = config.chartsSetting.barStyle.radiusPosition,
      barBorderRadius,
      positionLabel;
      legendDataResize.forEach(function (item, i) {
        var markLineData = config.markLine ? config.markLine.type.control === 'average' ? _this2._getMarkLineData(config, diyColor[i].startColor, 'average') : _this2._getMarkLineData(config, diyColor[i].startColor, 'auto') : {};
        switch (barBorderPosition) {
          case 'all':
            barBorderRadius = config.chartsSetting.barStyle.radius;
            break;
          case 'top':
            if (i === 0) {
              barBorderRadius = [config.chartsSetting.barStyle.radius, 0, 0, config.chartsSetting.barStyle.radius];
            } else {
              barBorderRadius = [0, config.chartsSetting.barStyle.radius, config.chartsSetting.barStyle.radius, 0];
            }
            break;
          case 'bottom':
            if (i === 0) {
              barBorderRadius = [0, config.chartsSetting.barStyle.radius, config.chartsSetting.barStyle.radius, 0];
            } else {
              barBorderRadius = [config.chartsSetting.barStyle.radius, 0, 0, config.chartsSetting.barStyle.radius];
            }
            break;
          default:
            break;}

        var itemStyleObj = {
          borderRadius: barBorderRadius,
          color: config.colorMatching.diy[i].linearGradient ? new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: diyColor[i].startColor },
          {
            offset: 1,
            color: diyColor[i].endColor }]) :
          diyColor[i].startColor };

        if (config.chartsSetting.topDataSetting) {
          positionLabel = i !== 0 ? 'bottom' : 'top';
          switch (config.chartsSetting.topDataSetting.fontPosition) {
            case 'followlength':
              positionLabel = i !== 0 ? 'right' : 'left';
              break;
            case 'bottomAlignment':
              positionLabel = i !== 0 ? 'left' : 'right';
              break;
            case 'insideAlignment':
              positionLabel = i !== 0 ? 'insideRight' : 'insideLeft';
              break;
            case 'outsideAlignment':
              positionLabel = i !== 0 ? 'insideLeft' : 'insideRight';
              break;}

        }
        var seriesBase = {
          name: legendDataResize[i],
          type: 'bar',
          xAxisIndex: i === 0 ? 0 : 1,
          yAxisIndex: i === 0 ? 0 : 1,
          markPoint: {
            symbol: config.markPoint ? config.markPoint.shape : '',
            symbolSize: config.markPoint ? [config.markPoint.width, config.markPoint.height] : [0, 0],
            symbolOffset: config.markPoint ? i !== 0 ? [config.markPoint.offsetMd + config.markPoint.width / 2, config.markPoint.offsetTd * -1] : [(config.markPoint.offsetMd + config.markPoint.width / 2) * -1, config.markPoint.offsetTd * -1] : [0, 0],
            symbolRotate: config.markPoint ? '0' : '',
            label: {
              fontSize: config.markPoint ? config.markPoint.fontSize : 0,
              position: config.markPoint ? 'inside' : '',
              color: '#fff',
              distance: config.markPoint ? i !== 0 ? config.markPoint.fontSize / -12 : 3 : '' },

            emphasis: {
              itemStyle: {
                color: diyColor[i].startColor } },


            data: [{
              name: '最大值',
              type: config.markPoint && config.markPoint.max ? 'max' : '' },
            {
              name: '最小值',
              type: config.markPoint && config.markPoint.min ? 'min' : '' }] },


          connectNulls: config.chartsSetting.hideNulls,
          markLine: markLineData,
          animation: config.animation !== null,
          animationDuration: config.animation ? config.animation.initTime : 0,
          animationEasing: config.animation ? config.animation.easing : '',
          animationDurationUpdate: config.animation ? config.animation.updateTime : 0,
          itemStyle: itemStyleObj,
          emphasis: {
            itemStyle: {
              color: diyColor[i].startColor } },


          label: {
            show: config.chartsSetting.topDataSetting,
            fontFamily: config.chartsSetting.topDataSetting ? config.chartsSetting.topDataSetting.fontFamily : '',
            fontWeight: config.chartsSetting.topDataSetting ? config.chartsSetting.topDataSetting.fontStyle.sel : 'normal',
            fontStyle: config.chartsSetting.topDataSetting ? config.chartsSetting.topDataSetting.fontStyle.ch[0] : 'normal',
            fontSize: config.chartsSetting.topDataSetting ? config.chartsSetting.topDataSetting.fontSize : 0,
            offset: config.chartsSetting.topDataSetting ? i !== 0 && config.chartsSetting.topDataSetting.verticalShift !== 0 ? [config.chartsSetting.topDataSetting.horizontalShift, config.chartsSetting.topDataSetting.verticalShift * -1] : [config.chartsSetting.topDataSetting.horizontalShift * -1, config.chartsSetting.topDataSetting.verticalShift * -1] : 0,
            color: config.chartsSetting.topDataSetting ? config.chartsSetting.topDataSetting.color.control === 'auto' ? config.chartsSetting.topDataSetting.color.auto.autoColor : positionLabel === 'insideLeft' || positionLabel === 'insideLeft' ? diyColor[i].endColor : diyColor[i].startColor : '',
            position: positionLabel },

          z: 99,
          barCategoryGap: config.chartsSetting.barStyle.barCategoryGap + '%',
          data: result[i] };

        if (config.chartsSetting.barBg) {
          var bgColor = config.chartsSetting.barBg.barBgColor,
          bgType = config.chartsSetting.barBg.barBgSetting.control,
          bgWidth = config.chartsSetting.barBg.barBgSetting.dottedBase.width;
          bgType === 'fill' ? seriesData.push(_.assign(_.cloneDeep(seriesBase), {
            stack: legendDataResize[i] }),
          {
            type: 'bar',
            xAxisIndex: i,
            yAxisIndex: i,
            stack: legendDataResize[i],
            silent: true,
            itemStyle: {
              color: bgColor },

            emphasis: {
              itemStyle: {
                color: bgColor } },


            animationDelay: config.animation == null ? 0 : config.animation.initTime,
            animationDuration: 1,
            data: stackArr[i] }) :
          seriesData.push(_.assign(_.cloneDeep(seriesBase), {
            z: 2 }),
          {
            type: 'pictorialBar',
            symbol: 'rect',
            symbolRepeat: true,
            xAxisIndex: i,
            yAxisIndex: i,
            symbolSize: [4, bgWidth + '%'],
            symbolMargin: 2,
            silent: true,
            z: 1,
            itemStyle: {
              color: bgColor },

            emphasis: {
              itemStyle: {
                color: bgColor } },


            data: maxArr });

        } else {
          seriesData.push(seriesBase);
        }
      });
      var posiLegend = config.legend ? config.legend.shapeSetting.position : null,
      tootipGrid = ['bottomLeft', 'bottomRight', 'bottomCenter'].includes(posiLegend),
      showLegend = config.legend,
      unitFontSize = config.yAxisSetting && config.yAxisSetting.unitTrigger ? config.yAxisSetting.textSetting.fontSize : 0,
      t = config.chartsSetting.grid.top + (isShowTitle ? (config.title.tbPadding + config.title.fontSize + unitFontSize) / 10 : 0) + (tootipGrid ? 0 : (unitFontSize + (showLegend ? config.legend.shapeSetting.tbPadding : 0)) / 10),
      b = config.chartsSetting.grid.bottom + (tootipGrid ? (unitFontSize + (showLegend ? config.legend.shapeSetting.tbPadding : 0)) / 10 : 0),
      l = config.chartsSetting.grid.left,
      r = config.chartsSetting.grid.right,
      legendDetail = {
        show: showLegend,
        textStyle: {
          fontFamily: config.legend ? config.legend.textSetting.fontFamily : '',
          fontWeight: config.legend ? config.legend.textSetting.fontStyle.sel : 'normal',
          fontStyle: config.legend ? config.legend.textSetting.fontStyle.ch : 'normal',
          fontSize: config.legend ? config.legend.textSetting.fontSize : 0,
          color: config.legend ? config.legend.textSetting.color : '' },

        itemHeight: config.legend ? config.legend.textSetting.fontSize : 0,
        itemWidth: config.legend ? config.legend.textSetting.fontSize : 0,
        itemGap: config.legend ? config.legend.shapeSetting.gap : 10,
        padding: [5, 0, 0, 0],
        orient: 'horizontal',
        align: 'auto',
        left: posiLegend ? _this._legendPos[posiLegend].left : 'center',
        icon: config.legend ? config.legend.shapeSetting.shape : 'rect',
        data: legendDataResize };

      config.markLine && (config.markLine.type.control === 'average' && config.markLine.type.average.showLabel && config.markLine.type.average.position === 'end' || config.markLine.type.control === 'auto' && config.markLine.type.auto.showLabel && config.markLine.type.auto.position === 'end') && (r = r);
      posiLegend && (legendDetail[_this._legendPos[posiLegend].key] = _this._legendPos[posiLegend].value);
      var showXAxisLine = !(!config.xAxisSetting || config.xAxisSetting && !config.xAxisSetting.axisLine),
      showYAxisLine = !(!config.yAxisSetting || config.yAxisSetting && !config.yAxisSetting.axisLine),
      showXSplitLine = !(!config.xAxisSetting || config.xAxisSetting && !config.xAxisSetting.splitLine),
      showYSplitLine = !(!config.yAxisSetting || config.yAxisSetting && !config.yAxisSetting.splitLine),
      showUnit = !(!config.yAxisSetting || config.yAxisSetting && !config.yAxisSetting.unitTrigger),
      minVal,
      maxVal;
      if (config.yAxisSetting != null) {
        minVal = config.yAxisSetting.label.min ? config.yAxisSetting.label.min === 'min' ? function (value) {
          return value.min;
        } : function (value) {
          return Math.floor(value.min);
        } : null;
        maxVal = config.yAxisSetting.label.max ? config.yAxisSetting.label.max === 'max' ? function (value) {
          return value.max;
        } : function (value) {
          return Math.floor(value.max);
        } : null;
      }
      setTimeout(function () {
        _this.myChart = echarts.init(_this.container.context.firstChild);
        config.animation && config.animation.ansy === 'clear' && _this.myChart.clear();
        _this.myChart.setOption({
          title: titleOption,
          color: themeColor,
          legend: legendDetail,
          grid: [{
            show: false,
            left: 3.5 + l + '%',
            top: t + '%',
            bottom: b + '%',
            right: 53 - l / 2 + r / 2 + (config.xAxisSetting ? config.xAxisSetting.label.margin / 10 : 0) + '%' },
          {
            show: false,
            right: r + 2.5 + '%',
            top: t + '%',
            bottom: b + '%',
            left: 53 + l / 2 - r / 2 + (config.xAxisSetting ? config.xAxisSetting.label.margin / 10 : 0) + '%' }],

          tooltip: {
            textStyle: {
              fontSize: config.tooltip.fontSize },

            trigger: 'item',
            axisPointer: {
              type: 'line' } },


          xAxis: [{
            type: 'value',
            show: !!config.yAxisSetting,
            inverse: true,
            axisLine: {
              show: showYAxisLine,
              onZero: false,
              lineStyle: {
                color: config.yAxisSetting && config.yAxisSetting.axisLine ? config.yAxisSetting.axisLine.color : '',
                width: config.yAxisSetting && config.yAxisSetting.axisLine ? config.yAxisSetting.axisLine.width : 0 } },


            splitLine: {
              show: showYSplitLine,
              lineStyle: {
                color: config.yAxisSetting && config.yAxisSetting.splitLine ? config.yAxisSetting.splitLine.color : '',
                type: config.yAxisSetting && config.yAxisSetting.splitLine ? config.yAxisSetting.splitLine.type : 'solid' } },


            axisTick: {
              show: false },

            axisLabel: {
              show: config.yAxisSetting,
              fontSize: config.yAxisSetting ? config.yAxisSetting.textSetting.fontSize : 0,
              fontFamily: config.yAxisSetting ? config.yAxisSetting.textSetting.fontFamily : '',
              fontWeight: config.yAxisSetting ? config.yAxisSetting.textSetting.fontStyle.sel : 'normal',
              fontStyle: config.yAxisSetting ? config.yAxisSetting.textSetting.fontStyle.ch : 'normal',
              color: config.yAxisSetting ? config.yAxisSetting.textSetting.color : '',
              margin: config.yAxisSetting ? config.yAxisSetting.label.margin : 8,
              formatter: function formatter(value) {
                var res = {
                  default: value,
                  percent: value * 100 + '%',
                  split: _this._numFormat(value) };

                return config.yAxisSetting ? res[config.yAxisSetting.label.formatter] : '';
              } },

            min: minVal,
            max: maxVal,
            splitNumber: config.yAxisSetting ? config.yAxisSetting.label.splitNumber : 5,
            name: showUnit ? config.yAxisSetting.unitTrigger.unit : '',
            nameGap: 10,
            nameTextStyle: {
              align: 'left',
              color: config.yAxisSetting ? config.yAxisSetting.textSetting.color : '',
              fontSize: config.yAxisSetting ? config.yAxisSetting.textSetting.fontSize : 0 } },

          {
            gridIndex: 1,
            type: 'value',
            show: !!config.yAxisSetting,
            axisLine: {
              show: showYAxisLine,
              onZero: false,
              lineStyle: {
                color: config.yAxisSetting && config.yAxisSetting.axisLine ? config.yAxisSetting.axisLine.color : '',
                width: config.yAxisSetting && config.yAxisSetting.axisLine ? config.yAxisSetting.axisLine.width : 0 } },


            splitLine: {
              show: showYSplitLine,
              lineStyle: {
                color: config.yAxisSetting && config.yAxisSetting.splitLine ? config.yAxisSetting.splitLine.color : '',
                type: config.yAxisSetting && config.yAxisSetting.splitLine ? config.yAxisSetting.splitLine.type : 'solid' } },


            axisTick: {
              show: false },

            axisLabel: {
              show: config.yAxisSetting,
              fontSize: config.yAxisSetting ? config.yAxisSetting.textSetting.fontSize : 0,
              fontFamily: config.yAxisSetting ? config.yAxisSetting.textSetting.fontFamily : '',
              fontWeight: config.yAxisSetting ? config.yAxisSetting.textSetting.fontStyle.sel : 'normal',
              fontStyle: config.yAxisSetting ? config.yAxisSetting.textSetting.fontStyle.ch : 'normal',
              color: config.yAxisSetting ? config.yAxisSetting.textSetting.color : '',
              margin: config.yAxisSetting ? config.yAxisSetting.label.margin : 8,
              formatter: function formatter(value) {
                var res = {
                  default: value,
                  percent: value * 100 + '%',
                  split: _this._numFormat(value) };

                return config.yAxisSetting ? res[config.yAxisSetting.label.formatter] : '';
              } },

            min: minVal,
            max: maxVal,
            splitNumber: config.yAxisSetting ? config.yAxisSetting.label.splitNumber : 5,
            nameGap: 8,
            nameTextStyle: {
              align: 'left',
              color: config.yAxisSetting ? config.yAxisSetting.textSetting.color : '',
              fontSize: config.yAxisSetting ? config.yAxisSetting.textSetting.fontSize : 0 } }],


          yAxis: [{
            type: 'category',
            show: !!config.xAxisSetting,
            boundaryGap: true,
            position: 'right',
            axisLine: {
              show: showXAxisLine,
              onZero: false,
              lineStyle: {
                color: config.xAxisSetting && config.xAxisSetting.axisLine ? config.xAxisSetting.axisLine.color : '',
                width: config.xAxisSetting && config.xAxisSetting.axisLine ? config.xAxisSetting.axisLine.width : 0 } },


            axisTick: {
              show: false },

            axisLabel: {
              show: config.xAxisSetting,
              align: 'center',
              fontSize: config.xAxisSetting ? config.xAxisSetting.textSetting.fontSize : 0,
              fontFamily: config.xAxisSetting ? config.xAxisSetting.textSetting.fontFamily : '',
              fontWeight: config.xAxisSetting ? config.xAxisSetting.textSetting.fontStyle.sel : 'normal',
              fontStyle: config.xAxisSetting ? config.xAxisSetting.textSetting.fontStyle.ch : 'normal',
              color: config.xAxisSetting ? config.xAxisSetting.textSetting.color : '',
              interval: config.xAxisSetting ? config.xAxisSetting.label.labelHide : 0,
              rotate: config.xAxisSetting ? config.xAxisSetting.label.rotate : 0,
              margin: config.xAxisSetting ? config.xAxisSetting.label.fontMargin : 0,
              formatter: function formatter(value) {
                var res = {
                  showAll: function showAll() {
                    return value;
                  },
                  wrap: function wrap() {
                    var newParamsName = '',
                    paramsNameNumber = value.length,
                    provideNumber = Number(config.xAxisSetting.label.labelFormatter[1]),
                    rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                    if (paramsNameNumber > provideNumber) {
                      for (var p = 0; p < rowNumber; p++) {
                        var start = p * provideNumber,
                        end = start + provideNumber;
                        newParamsName += p === rowNumber - 1 ? value.substring(start, paramsNameNumber) : value.substring(start, end) + '\n';
                      }
                    } else {
                      newParamsName = value;
                    }
                    return newParamsName;
                  },
                  subStr: function subStr() {
                    return value.length > Number(config.xAxisSetting.label.labelFormatter[1]) ? value.substr(0, Number(config.xAxisSetting.label.labelFormatter[1])) + '...' : value;
                  } };

                return config.xAxisSetting ? res[config.xAxisSetting.label.labelFormatter[0]]() : '';
              } },

            data: x0Data,
            splitLine: {
              show: showXSplitLine,
              lineStyle: {
                color: config.xAxisSetting && config.xAxisSetting.splitLine ? config.xAxisSetting.splitLine.color : '',
                type: config.xAxisSetting && config.xAxisSetting.splitLine ? config.xAxisSetting.splitLine.type : 'solid' } } },


          {
            gridIndex: 1,
            type: 'category',
            data: x0Data,
            show: !!config.xAxisSetting,
            axisLine: {
              show: showXAxisLine,
              onZero: false,
              lineStyle: {
                color: config.xAxisSetting && config.xAxisSetting.axisLine ? config.xAxisSetting.axisLine.color : '',
                width: config.xAxisSetting && config.xAxisSetting.axisLine ? config.xAxisSetting.axisLine.width : 0 } },


            axisTick: {
              show: false },

            axisLabel: {
              show: false },

            splitLine: {
              show: showXSplitLine,
              lineStyle: {
                color: config.xAxisSetting && config.xAxisSetting.splitLine ? config.xAxisSetting.splitLine.color : '',
                type: config.xAxisSetting && config.xAxisSetting.splitLine ? config.xAxisSetting.splitLine.type : 'solid' } } }],



          series: seriesData },
        true, false);
        _this.myChart.on('click', function (params) {
          _this.emit('eventClick', {
            value: params.value,
            name: params.name,
            seriesName: params.seriesName,
            seriesIndex: params.seriesIndex,
            seriesId: params.seriesId });

        });
      }, 300);
    },
    _getMarkLineData: function _getMarkLineData(config, color, type) {
      return {
        symbol: 'none',
        label: {
          show: config.markLine.type[type].showLabel,
          color: color,
          position: config.markLine.type[type].position,
          formatter: config.markLine.type[type].descripts + '\n{c}',
          fontSize: config.markLine.type[type].fontSize },

        emphasis: {
          label: {
            show: config.markLine.type[type].showLabel,
            fontSize: config.markLine.type[type].fontSize },

          lineStyle: {
            color: config.markLine.type[type].color,
            width: config.markLine.type[type].width,
            type: 'soild' } },


        lineStyle: {
          color: config.markLine.type[type].color,
          width: config.markLine.type[type].width },

        data: [type === 'average' ? {
          type: 'average' } :
        {
          xAxis: config.markLine.type.auto.yAxisValue }] };


    },
    _legendPos: {
      topCenter: {
        key: 'top',
        value: 'top',
        left: 'center' },

      topLeft: {
        key: 'top',
        value: 'top',
        left: 'left' },

      topRight: {
        key: 'top',
        value: 'top',
        left: 'right' },

      bottomCenter: {
        key: 'bottom',
        value: 5,
        left: 'center' },

      bottomLeft: {
        key: 'bottom',
        value: 5,
        left: 'left' },

      bottomRight: {
        key: 'bottom',
        value: 5,
        left: 'right' } },


    _numFormat: function _numFormat(num) {
      num = num.toString().split('.');
      var arr = num[0].split('').reverse();
      var res = [];
      for (var i = 0, len = arr.length; i < len; i++) {
        i % 3 === 0 && i !== 0 && res.push(',');
        res.push(arr[i]);
      }
      res.reverse();
      return num[1] ? res.join('').concat('.' + num[1]) : res.join('');
    },
    highlight: function highlight(args) {
      var base = {
        type: 'highlight' };

      args.hasOwnProperty('seriesIndex') && (base.seriesIndex = args.seriesIndex);
      args.hasOwnProperty('seriesId') && (base.seriesId = args.seriesId);
      args.hasOwnProperty('seriesName') && (base.seriesName = args.seriesName);
      args.hasOwnProperty('dataIndex') && (base.dataIndex = args.dataIndex);
      args.hasOwnProperty('name') && (base.name = args.name);
      this.myChart.dispatchAction(base);
    },
    cancelHighlight: function cancelHighlight(args) {
      var base = {
        type: 'downplay' };

      args.hasOwnProperty('seriesIndex') && (base.seriesIndex = args.seriesIndex);
      args.hasOwnProperty('seriesId') && (base.seriesId = args.seriesId);
      args.hasOwnProperty('seriesName') && (base.seriesName = args.seriesName);
      args.hasOwnProperty('dataIndex') && (base.dataIndex = args.dataIndex);
      args.hasOwnProperty('name') && (base.name = args.name);
      this.myChart.dispatchAction(base);
    },
    showTooltip: function showTooltip(args) {
      var base = {
        type: 'showTip' };

      args.hasOwnProperty('seriesIndex') && (base.seriesIndex = args.seriesIndex);
      args.hasOwnProperty('dataIndex') && (base.dataIndex = args.dataIndex);
      args.hasOwnProperty('name') && (base.name = args.name);
      args.hasOwnProperty('position') && (base.position = args.position);
      this.myChart.dispatchAction(base);
    },
    hideTooltip: function hideTooltip() {
      this.myChart.dispatchAction({
        type: 'hideTip' });

    },
    legend: function legend(args) {
      var _this3 = this;
      ['legendSelect', 'legendUnSelect', 'legendToggleSelect'].includes(args.type) ? _instanceof(args.name, Array) ? args.name.forEach(function (item) {
        _this3.myChart.dispatchAction({
          type: args.type,
          name: item });

      }) : this.myChart.dispatchAction({
        type: args.type,
        name: args.name }) :
      this.myChart.dispatchAction({
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
        this.myChart.off('click');
      }
      this.container.empty();
    } });return module.exports;});