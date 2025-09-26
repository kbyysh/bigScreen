Cube("/doubleLine/V1.0.4/index.js", ["/node_modules/jquery/dist/jquery.js", "/node_modules/bcore/event.js", "/node_modules/lodash/lodash.js", "/node_modules/echarts/index.js"], function (module, exports, require, load, process, global) {

  function _instanceof(left, right) {if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {return !!right[Symbol.hasInstance](left);} else {return left instanceof right;}}
  var $ = require('/node_modules/jquery/dist/jquery.js');
  var Event = require('/node_modules/bcore/event.js');
  var _ = require('/node_modules/lodash/lodash.js');
  var echarts = require('/node_modules/echarts/index.js');
  load('/_requireModules/css/charts.css.js', '');
  module.exports = Event.extend(function Base(container) {
    this.container = $(container);
  }, {
    render: function render(config, data) {
      this.config = _.defaultsDeep(config || {}, this.config);
      this.data = _.cloneDeep(data);
      var _this = this;
      this.destroy();
      this.container.append('<div class="charts" style="width: 100%; height: 100%;"></div>');
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
          return val.s === item;
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
      var x0Data = [],
      yData = [];
      $.each(firstData[0], function (i, val) {
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
      var result = [],
      total = yData.length,
      len = legendData.length,
      num = total / len;
      for (var n = 0; n < total; n += num) {
        result.push(yData.slice(n, n + num));
      }
      var diyColor = config.colorMatching.diy,
      themeColor = config.colorMatching.themeType;
      if (diyColor.length < legendDataResize.length) {
        var _num = legendDataResize.length - diyColor.length;
        for (var _i2 = 0; _i2 < _num; _i2++) {
          diyColor.push({
            nameDef: '',
            lineLegend: '折线' + _i2,
            lineStartColor: themeColor.color1.slice(legendDataResize.length, themeColor.length)[_i2],
            lineEndColor: themeColor.color2.slice(legendDataResize.length, themeColor.length)[_i2],
            lineLinearGradient: true,
            width: 1,
            lineType: 'solid',
            symbolSize: 6 });

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
      var seriesData = [];
      for (var _i4 = 0; _i4 < config.colorMatching.diy.length; _i4++) {
        var lineStyleObj = {
          width: config.colorMatching.diy[_i4].width,
          type: config.colorMatching.diy[_i4].lineType,
          color: config.colorMatching.diy[_i4].lineLinearGradient ? new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: diyColor[_i4].lineStartColor },
          {
            offset: 1,
            color: diyColor[_i4].lineEndColor }]) :
          diyColor[_i4].lineStartColor },

        itemStyleObjForLine = {
          borderWidth: config.colorMatching.diy[_i4].symbolBorderWidth,
          color: config.colorMatching.diy[_i4].lineLinearGradient ? new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: diyColor[_i4].lineStartColor },
          {
            offset: 1,
            color: diyColor[_i4].lineEndColor }]) :
          diyColor[_i4].lineStartColor },

        labelVal = config.chartsSetting.topDataSetting;
        config.colorMatching.diy[_i4].lineLinearGradient && (lineStyleObj = _.assign(lineStyleObj, {
          shadowColor: config.chartsSetting.lineSetting.shadow ? 'rgba(51,153,255, 0.5)' : '',
          shadowBlur: config.chartsSetting.lineSetting.shadow ? 10 : 0 }));

        var nullState = config.chartsSetting.lineSetting.hideNulls;
        seriesData.push({
          name: config.colorMatching.diy[_i4].nameDef,
          type: 'line',
          smooth: config.chartsSetting.lineSetting.smooth,
          symbolSize: config.colorMatching.diy[_i4].symbolSize,
          symbol: config.colorMatching.diy[_i4].symbolType,
          lineStyle: lineStyleObj,
          itemStyle: itemStyleObjForLine,
          yAxisIndex: config.colorMatching.diy[_i4].radio === 'Y轴' ? 0 : 1,
          animation: config.animation !== null,
          animationDuration: config.animation ? config.animation.initTime : 0,
          animationEasing: config.animation ? config.animation.easing : '',
          animationDurationUpdate: config.animation ? config.animation.updateTime : 0,
          label: {
            show: !!labelVal,
            fontFamily: labelVal ? config.chartsSetting.topDataSetting.fontFamily : '',
            fontWeight: labelVal ? config.chartsSetting.topDataSetting.fontStyle.sel : 'normal',
            fontStyle: labelVal ? config.chartsSetting.topDataSetting.fontStyle.ch[0] : 'normal',
            fontSize: labelVal ? config.chartsSetting.topDataSetting.fontSize : 0,
            color: labelVal ? config.chartsSetting.topDataSetting.color.control === 'auto' ? config.chartsSetting.topDataSetting.color.auto.autoColor : diyColor[_i4].lineStartColor : '',
            position: 'top' },

          data: result[_i4],
          connectNulls: nullState });

      }
      var unitFontSize = function () {
        var y = config.yAxisSetting && config.yAxisSetting.unitTrigger,
        y2 = config.y2AxisSetting && config.y2AxisSetting.unitTrigger;
        if (y && y2) {
          return Math.max(config.yAxisSetting.textSetting.fontSize, config.y2AxisSetting.textSetting.fontSize);
        } else if (y) {
          return config.yAxisSetting.textSetting.fontSize;
        } else if (y2) {
          return config.y2AxisSetting.textSetting.fontSize;
        } else {
          return 0;
        }
      }(),
      t = config.chartsSetting.grid.top,
      b = config.chartsSetting.grid.bottom,
      l = config.chartsSetting.grid.left,
      r = config.chartsSetting.grid.right;
      config.markLine && (config.markLine.type.control === 'average' && config.markLine.type.average.showLabel && config.markLine.type.average.position === 'end' || config.markLine.type.control === 'auto' && config.markLine.type.auto.showLabel && config.markLine.type.auto.position === 'end') && (r += 34);
      for (var _i6 = 0; _i6 < result.length; _i6++) {
        legendDataResize.push(diyColor[_i6].lineLegend);
      }
      var posiLegend = config.legend ? config.legend.shapeSetting.position : null,
      showLegend = !!config.legend,
      gridDetail = {
        left: l,
        right: r,
        containLabel: true },

      legendDetail = {
        show: showLegend,
        textStyle: {
          fontFamily: config.legend ? config.legend.textSetting.fontFamily : '',
          fontWeight: config.legend ? config.legend.textSetting.fontStyle.sel : 'normal',
          fontStyle: config.legend ? config.legend.textSetting.fontStyle.ch : 'normal',
          fontSize: config.legend ? config.legend.textSetting.fontSize : 0,
          color: config.legend ? config.legend.textSetting.color : '' },

        itemHeight: config.legend ? config.legend.textSetting.fontSize : 0,
        itemWidth: config.legend ? config.legend.textSetting.fontSize * 1.78 : 0,
        itemGap: config.legend ? config.legend.shapeSetting.gap : 10,
        padding: [5, 0, 0, 0],
        orient: 'horizontal',
        align: 'auto',
        left: posiLegend ? _this._legendPos[posiLegend].left : 'center',
        data: legendDataResize };

      gridDetail = ['bottomLeft', 'bottomRight', 'bottomCenter'].includes(posiLegend) ? _.assign(_.cloneDeep(gridDetail), {
        top: t + (isShowTitle ? Math.max(config.title.tbPadding + config.title.fontSize, unitFontSize) : unitFontSize),
        bottom: b + (showLegend ? config.legend.textSetting.fontSize / 3 + config.legend.shapeSetting.tbPadding : 0) }) :
      _.assign(_.cloneDeep(gridDetail), {
        top: t + (showLegend ? isShowTitle ? Math.max(config.title.tbPadding + config.title.fontSize, unitFontSize) + config.legend.shapeSetting.tbPadding : unitFontSize + config.legend.shapeSetting.tbPadding : isShowTitle ? Math.max(config.title.tbPadding + config.title.fontSize, unitFontSize) : unitFontSize),
        bottom: b });

      posiLegend && (legendDetail[_this._legendPos[posiLegend].key] = _this._legendPos[posiLegend].value);
      var showXAxisLine = !(!config.xAxisSetting || config.xAxisSetting && !config.xAxisSetting.axisLine),
      showYAxisLine = !(!config.yAxisSetting || config.yAxisSetting && !config.yAxisSetting.axisLine),
      showY2AxisLine = !(!config.y2AxisSetting || config.y2AxisSetting && !config.y2AxisSetting.axisLine),
      showXSplitLine = !(!config.xAxisSetting || config.xAxisSetting && !config.xAxisSetting.splitLine),
      showYSplitLine = !(!config.yAxisSetting || config.yAxisSetting && !config.yAxisSetting.splitLine),
      showY2SplitLine = !(!config.y2AxisSetting || config.y2AxisSetting && !config.y2AxisSetting.splitLine),
      showUnit = !(!config.yAxisSetting || config.yAxisSetting && !config.yAxisSetting.unitTrigger),
      showUnit2 = !(!config.y2AxisSetting || config.y2AxisSetting && !config.y2AxisSetting.unitTrigger),
      minVal,
      minVal2,
      maxVal,
      maxVal2;
      if (config.yAxisSetting) {
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
      if (config.y2AxisSetting) {
        minVal2 = config.y2AxisSetting.label.min ? config.y2AxisSetting.label.min === 'min' ? function (value) {
          return value.min;
        } : function (value) {
          return Math.floor(value.min);
        } : null;
        maxVal2 = config.y2AxisSetting.label.max ? config.y2AxisSetting.label.max === 'max' ? function (value) {
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
          grid: gridDetail,
          tooltip: {
            textStyle: {
              fontSize: config.tooltip.fontSize },

            trigger: 'axis',
            axisPointer: {
              type: 'line' } },


          xAxis: {
            show: config.xAxisSetting,
            position: config.xAxisSetting ? config.xAxisSetting.Xposition : 'bottom',
            boundaryGap: true,
            axisLine: {
              show: showXAxisLine,
              lineStyle: {
                color: config.xAxisSetting && config.xAxisSetting.axisLine ? config.xAxisSetting.axisLine.color : '',
                width: config.xAxisSetting && config.xAxisSetting.axisLine ? config.xAxisSetting.axisLine.width : 0 } },


            splitLine: {
              show: showXSplitLine,
              lineStyle: {
                color: config.xAxisSetting && config.xAxisSetting.splitLine ? config.xAxisSetting.splitLine.color : '',
                type: config.xAxisSetting && config.xAxisSetting.splitLine ? config.xAxisSetting.splitLine.type : 'solid' } },


            axisTick: {
              show: false },

            axisLabel: {
              show: config.xAxisSetting,
              fontSize: config.xAxisSetting ? config.xAxisSetting.textSetting.fontSize : 0,
              fontFamily: config.xAxisSetting ? config.xAxisSetting.textSetting.fontFamily : '',
              fontWeight: config.xAxisSetting ? config.xAxisSetting.textSetting.fontStyle.sel : 'normal',
              fontStyle: config.xAxisSetting ? config.xAxisSetting.textSetting.fontStyle.ch : 'normal',
              color: config.xAxisSetting ? config.xAxisSetting.textSetting.color : '',
              interval: config.xAxisSetting ? config.xAxisSetting.label.labelHide : 0,
              rotate: config.xAxisSetting ? config.xAxisSetting.label.rotate : 0,
              margin: config.xAxisSetting ? config.xAxisSetting.label.margin : 8,
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

            data: x0Data },

          yAxis: [{
            show: config.yAxisSetting,
            position: config.yAxisSetting ? config.yAxisSetting.Yposition : 'left',
            axisLine: {
              show: showYAxisLine,
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
            nameGap: 8,
            nameTextStyle: {
              align: 'left',
              color: config.yAxisSetting ? config.yAxisSetting.textSetting.color : '',
              fontSize: config.yAxisSetting ? config.yAxisSetting.textSetting.fontSize : 0 } },

          {
            show: config.y2AxisSetting,
            position: config.y2AxisSetting ? config.y2AxisSetting.Yposition : 'right',
            axisLine: {
              show: showY2AxisLine,
              lineStyle: {
                color: config.y2AxisSetting && config.y2AxisSetting.axisLine ? config.y2AxisSetting.axisLine.color : '',
                width: config.y2AxisSetting && config.y2AxisSetting.axisLine ? config.y2AxisSetting.axisLine.width : 0 } },


            splitLine: {
              show: showY2SplitLine,
              lineStyle: {
                color: config.y2AxisSetting && config.y2AxisSetting.splitLine ? config.y2AxisSetting.splitLine.color : '',
                type: config.y2AxisSetting && config.y2AxisSetting.splitLine ? config.y2AxisSetting.splitLine.type : 'solid' } },


            axisTick: {
              show: false },

            axisLabel: {
              show: config.y2AxisSetting,
              fontSize: config.y2AxisSetting ? config.y2AxisSetting.textSetting.fontSize : 0,
              fontFamily: config.y2AxisSetting ? config.y2AxisSetting.textSetting.fontFamily : '',
              fontWeight: config.y2AxisSetting ? config.y2AxisSetting.textSetting.fontStyle.sel : 'normal',
              fontStyle: config.y2AxisSetting ? config.y2AxisSetting.textSetting.fontStyle.ch : 'normal',
              color: config.y2AxisSetting ? config.y2AxisSetting.textSetting.color : '',
              margin: config.y2AxisSetting ? config.y2AxisSetting.label.margin : 8,
              formatter: function formatter(value) {
                var res = {
                  default: value,
                  percent: value * 100 + '%',
                  split: _this._numFormat(value) };

                return config.y2AxisSetting ? res[config.y2AxisSetting.label.formatter] : '';
              } },

            min: minVal2,
            max: maxVal2,
            splitNumber: config.y2AxisSetting ? config.y2AxisSetting.label.splitNumber : 5,
            name: showUnit2 ? config.y2AxisSetting.unitTrigger.unit : '',
            nameGap: 8,
            nameTextStyle: {
              align: 'left',
              color: config.y2AxisSetting ? config.y2AxisSetting.textSetting.color : '',
              fontSize: config.y2AxisSetting ? config.y2AxisSetting.textSetting.fontSize : 0 } }],


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
      var _this2 = this;
      ['legendSelect', 'legendUnSelect', 'legendToggleSelect'].includes(args.type) ? _instanceof(args.name, Array) ? args.name.forEach(function (item) {
        _this2.myChart.dispatchAction({
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