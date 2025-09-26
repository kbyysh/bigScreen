Cube("/bar3D/V1.0.5/index.js", ["/node_modules/jquery/dist/jquery.js", "/node_modules/bcore/event.js", "/node_modules/lodash/lodash.js", "/node_modules/echarts/index.js"], function (module, exports, require, load, process, global) {

  function _instanceof(left, right) {if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {return !!right[Symbol.hasInstance](left);} else {return left instanceof right;}}
  var $ = require('/node_modules/jquery/dist/jquery.js');
  var Event = require('/node_modules/bcore/event.js');
  var _ = require('/node_modules/lodash/lodash.js');
  var echarts = require('/node_modules/echarts/index.js');
  load('/_requireModules/css/charts.css.js', '');
  module.exports = Event.extend(function Base(container) {
    this.container = $(container);
  }, {
    render: function render(config, data, old) {
      this.config = _.defaultsDeep(config || {}, this.config);
      this.data = _.cloneDeep(data);
      var _this = this;
      this.destroy();
      this.container.append('<div class="charts" style="width:100%;height:100%;"></div>');
      var zhukuan = config.chartsSetting.barStyle.barCategoryGap,
      isShowTitle = config.title,
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
      });
      switch (config.chartsSetting.sortData) {
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
      (legendData.length === 1 && legendData[0] === undefined && legendDataResize[0] === undefined || legendData[0] === '') && (legendDataResize[0] = ' ');
      var seriesData = [],
      barBorderPosition = config.chartsSetting.barStyle.radiusPosition,
      barBorderRadius,
      markLineData = config.markLine ? config.markLine.type.control === 'average' ? this._getMarkLineData(config, 'average') : this._getMarkLineData(config, 'auto') : {};
      switch (barBorderPosition) {
        case 'all':
          barBorderRadius = config.chartsSetting.barStyle.radius;
          break;
        case 'top':
          barBorderRadius = [config.chartsSetting.barStyle.radius, config.chartsSetting.barStyle.radius, 0, 0];
          break;
        case 'bottom':
          barBorderRadius = [0, 0, config.chartsSetting.barStyle.radius, config.chartsSetting.barStyle.radius];
          break;
        default:
          break;}

      legendDataResize.forEach(function (item, i) {
        var itemStyleObj = {
          normal: {
            barBorderRadius: barBorderRadius,
            color: config.colorMatch.linearGradient ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: config.colorMatch.startColor },
            {
              offset: 1,
              color: config.colorMatch.endColor }]) :
            config.colorMatch.startColor } };


        var seriesBase = {
          name: legendDataResize[i],
          type: 'bar',
          markPoint: {
            symbol: config.markPoint ? config.markPoint.shape : '',
            symbolSize: config.markPoint ? [config.markPoint.width, config.markPoint.height] : [0, 0],
            symbolOffset: config.markPoint ? [config.markPoint.offsetMd, config.markPoint.offsetTd] : [0, 0],
            label: {
              fontSize: config.markPoint ? config.markPoint.fontSize : 0 },

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
          label: {
            show: config.chartsSetting.topDataSetting,
            fontFamily: config.chartsSetting.topDataSetting ? config.chartsSetting.topDataSetting.fontFamily : '',
            fontWeight: config.chartsSetting.topDataSetting ? config.chartsSetting.topDataSetting.fontStyle.sel : 'normal',
            fontStyle: config.chartsSetting.topDataSetting ? config.chartsSetting.topDataSetting.fontStyle.ch[0] : 'normal',
            fontSize: config.chartsSetting.topDataSetting ? config.chartsSetting.topDataSetting.fontSize : 0,
            position: 'top' },

          barGap: config.chartsSetting.barStyle.barGap + '%',
          barCategoryGap: config.chartsSetting.barStyle.barCategoryGap + '%',
          data: result[i] };

        if (config.chartsSetting.barBg) {
          var bgColor = config.chartsSetting.barBg.barBgColor;
          var bgType = config.chartsSetting.barBg.barBgSetting.control;
          var bgWidth = config.chartsSetting.barBg.barBgSetting.dottedBase.width;
          bgType === 'fill' ? seriesData.push(_.assign(_.cloneDeep(seriesBase), {
            stack: legendDataResize[i] }),
          {
            type: 'bar',
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
            symbolSize: [bgWidth + '%', 4],
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
      var t = config.chartsSetting.grid.top,
      b = config.chartsSetting.grid.bottom,
      l = config.chartsSetting.grid.left,
      r = config.chartsSetting.grid.right;
      config.markLine && (config.markLine.type.control === 'average' && config.markLine.type.average.showLabel && config.markLine.type.average.position === 'end' || config.markLine.type.control === 'auto' && config.markLine.type.auto.showLabel && config.markLine.type.auto.position === 'end') && (r = r + 34);
      var posiLegend = config.legend ? config.legend.shapeSetting.position : null,
      showLegend = !!config.legend,
      gridDetail = {
        left: l,
        right: r,
        containLabel: true },

      unitFontSize = config.yAxisSetting && config.yAxisSetting.unitTrigger ? config.yAxisSetting.textSetting.fontSize : 0,
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
        padding: [5, 0, 0, 0],
        orient: 'horizontal',
        align: 'auto',
        left: posiLegend ? _this._legendPos[posiLegend].left : 'center',
        icon: config.legend ? config.legend.shapeSetting.shape : 'rect',
        data: ['s'] };

      gridDetail = ['bottomLeft', 'bottomRight', 'bottomCenter'].includes(posiLegend) ? _.assign(_.cloneDeep(gridDetail), {
        top: t + (isShowTitle ? Math.max(config.title.tbPadding + config.title.fontSize, unitFontSize) : unitFontSize),
        bottom: showLegend ? b + config.legend.textSetting.fontSize / 3 + config.legend.shapeSetting.tbPadding : b }) :
      _.assign(_.cloneDeep(gridDetail), {
        top: t + (showLegend ? isShowTitle ? Math.max(config.title.tbPadding + config.title.fontSize, unitFontSize) + config.legend.shapeSetting.tbPadding : unitFontSize + config.legend.shapeSetting.tbPadding : isShowTitle ? Math.max(config.title.tbPadding + config.title.fontSize, unitFontSize) : unitFontSize),
        bottom: b });

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
      var bgColorStart = config.TValue ? config.TValue.backgroundcolorStart : config.colorMatch.backgroundstartColor,
      bgColorEnd = config.TValue ? config.TValue.backgroundlinearGradient ? config.TValue.backgroundEndColor : null : config.colorMatch.backgroundlinearGradient ? config.colorMatch.backgroundendColor : null;
      var Yinverse = config.xAxisSetting ? config.xAxisSetting.Xposition === 'top' : false,
      oldWidth = old ? old.chartsSetting.barStyle.barCategoryGap : -1;
      setTimeout(function () {
        _this.myChart = echarts.init(_this.container.context.firstChild);
        (config.animation && config.animation.ansy === 'clear' || oldWidth !== zhukuan) && _this.myChart.clear();
        var CubeLeft = echarts.graphic.extendShape({
          shape: {
            x: 0,
            y: 0 },

          buildPath: function buildPath(ctx, shape) {
            var xAxisPoint = shape.xAxisPoint;
            var c0 = [shape.x, shape.y];
            var c1 = [shape.x - zhukuan * 0.75, shape.y - zhukuan * 0.75];
            var c2 = [xAxisPoint[0] - zhukuan * 0.75, xAxisPoint[1] - zhukuan * 0.75];
            var c3 = [xAxisPoint[0], xAxisPoint[1]];
            ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath();
          } });

        var CubeRight = echarts.graphic.extendShape({
          shape: {
            x: 0,
            y: 0 },

          buildPath: function buildPath(ctx, shape) {
            var xAxisPoint = shape.xAxisPoint;
            var c1 = [shape.x, shape.y];
            var c2 = [xAxisPoint[0], xAxisPoint[1]];
            var c3 = [xAxisPoint[0] + zhukuan, xAxisPoint[1] - zhukuan * 0.5];
            var c4 = [shape.x + zhukuan, shape.y - zhukuan * 0.5];
            ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
          } });

        var CubeTop = echarts.graphic.extendShape({
          shape: {
            x: 0,
            y: 0 },

          buildPath: function buildPath(ctx, shape) {
            var c1 = [shape.x, shape.y];
            var c2 = [shape.x + zhukuan, shape.y - zhukuan * 0.5];
            var c3 = [shape.x + zhukuan * 0.25, shape.y - zhukuan * 1.25];
            var c4 = [shape.x - zhukuan * 0.75, shape.y - zhukuan * 0.75];
            ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
          } });

        echarts.graphic.registerShape('CubeLeft', CubeLeft);
        echarts.graphic.registerShape('CubeRight', CubeRight);
        echarts.graphic.registerShape('CubeTop', CubeTop);
        _this.myChart.setOption({
          title: titleOption,
          legend: legendDetail,
          grid: gridDetail,
          tooltip: {
            textStyle: {
              fontSize: config.tooltip.fontSize,
              color: config.tooltip.color },

            trigger: 'item',
            axisPointer: {
              type: 'line' } },


          dataZoom: [{
            type: 'slider',
            show: config.zoom ? true : false,
            height: config.zoom ? config.zoom.height : 10,
            bottom: config.zoom ? config.zoom.bottom : 10,
            borderColor: 'transparent',
            backgroundColor: config.zoom ? config.zoom.backgroundColor : '#adc',
            handleIcon: 'M512 512m-208 0a6.5 6.5 0 1 0 416 0 6.5 6.5 0 1 0-416 0Z M512 192C335.264 192 192 335.264 192 512c0 176.736 143.264 320 320 320s320-143.264 320-320C832 335.264 688.736 192 512 192zM512 800c-159.072 0-288-128.928-288-288 0-159.072 128.928-288 288-288s288 128.928 288 288C800 671.072 671.072 800 512 800z',
            handleColor: config.zoom ? config.zoom.handleStyle.handleColor : '#adc',
            handleSize: config.zoom ? config.zoom.handleSize : 10,
            handleStyle: {
              borderColor: config.zoom ? config.zoom.handleStyle.borderColor : '#adc',
              shadowBlur: config.zoom ? config.zoom.handleStyle.shadowBlur : '#adc',
              shadowOffsetX: config.zoom ? config.zoom.handleStyle.shadowOffsetX : 10,
              shadowOffsetY: config.zoom ? config.zoom.handleStyle.shadowOffsetY : 10,
              shadowColor: config.zoom ? config.zoom.handleStyle.shadowColor : '#adc' },

            showDetail: false,
            start: 0,
            end: config.zoom ? config.zoom.end : 100 }],

          xAxis: {
            show: !!config.xAxisSetting,
            position: config.xAxisSetting ? config.xAxisSetting.Xposition : 'bottom',
            boundaryGap: true,
            axisLine: {
              onZero: false,
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

          yAxis: {
            show: !!config.yAxisSetting,
            inverse: Yinverse,
            position: config.yAxisSetting ? config.yAxisSetting.Yposition : 'left',
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
            nameGap: 8,
            nameTextStyle: {
              align: 'left',
              color: config.yAxisSetting ? config.yAxisSetting.textSetting.color : '',
              fontSize: config.yAxisSetting ? config.yAxisSetting.textSetting.fontSize : 0 } },


          series: [{
            type: 'custom',
            tooltip: {
              textStyle: {
                fontSize: config.tooltip.fontSize },

              trigger: 'item',
              formatter: function formatter(params) {
                return '';
              } },

            renderItem: function renderItem(params, api) {
              var location = api.coord([api.value(0), api.value(1)]);
              var base = {
                shape: {
                  api: api,
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]) },

                style: {
                  fill: config.TValue && yData[params.dataIndex] > config.TValue.max ? config.TValue.backgroundlinearGradient ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: config.TValue.BGTopColor },
                  {
                    offset: 1,
                    color: config.TValue.BGTopColor }]) :
                  config.TValue.BGTopColor : config.colorMatch.backgroundlinearGradient ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: config.colorMatch.BGTopColor },
                  {
                    offset: 1,
                    color: config.colorMatch.BGTopColor }]) :
                  config.colorMatch.BGTopColor } };


              return {
                type: 'group',
                children: [_.assign(_.cloneDeep(base), {
                  type: 'CubeTop' })] };


            },
            data: maxArr },
          {
            type: 'custom',
            tooltip: {
              textStyle: {
                fontSize: config.tooltip.fontSize },

              trigger: 'item',
              formatter: function formatter(params) {
                return '';
              } },

            renderItem: function renderItem(params, api) {
              var location = api.coord([api.value(0), api.value(1)]);
              var base = {
                shape: {
                  api: api,
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]) },

                style: {
                  fill: config.TValue && yData[params.dataIndex] > config.TValue.max ? config.TValue.backgroundlinearGradient ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: config.TValue.backgroundcolorStart },
                  {
                    offset: 1,
                    color: config.TValue.backgroundEndColor }]) :
                  config.TValue.backgroundcolorStart : config.colorMatch.backgroundlinearGradient ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: config.colorMatch.backgroundstartColor },
                  {
                    offset: 1,
                    color: config.colorMatch.backgroundendColor }]) :
                  config.colorMatch.backgroundstartColor } };


              return {
                type: 'group',
                children: [_.assign(_.cloneDeep(base), {
                  type: 'CubeLeft' }),
                _.assign(_.cloneDeep(base), {
                  type: 'CubeRight' })] };


            },
            data: maxArr },
          {
            type: 'custom',
            name: 's',
            markLine: markLineData,
            markPoint: {
              symbol: config.markPoint == null ? '' : config.markPoint.shape,
              symbolSize: config.markPoint == null ? [0, 0] : [config.markPoint.width, config.markPoint.height],
              symbolOffset: config.markPoint == null ? [0, 0] : [config.markPoint.offsetMd, config.markPoint.offsetTd],
              label: {
                fontSize: config.markPoint == null ? 0 : config.markPoint.fontSize } },


            tooltip: {
              formatter: function formatter(params) {
                return "".concat(params.name, "\n").concat(params.data);
              },
              textStyle: {
                fontSize: config.tooltip.fontSize,
                color: config.tooltip.color },

              trigger: 'item',
              axisPointer: {
                type: 'line' } },


            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: config.colorMatch.startColor },
            {
              offset: 1,
              color: config.colorMatch.endColor ? config.colorMatch.endColor : 'green' }]),

            renderItem: function renderItem(params, api) {
              var location = api.coord([api.value(0), api.value(1)]);
              var base = {
                shape: {
                  api: api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]) },

                style: {
                  fill: config.TValue && api.value(1) > config.TValue.max ? config.TValue.linearGradient ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: config.TValue.ZTopColor },
                  {
                    offset: 1,
                    color: config.TValue.ZTopColor }]) :
                  config.TValue.ZTopColor : config.colorMatch.linearGradient ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: config.colorMatch.ZTopColor },
                  {
                    offset: 1,
                    color: config.colorMatch.ZTopColor }]) :
                  config.colorMatch.ZTopColor } };


              return {
                type: 'group',
                children: [_.assign(_.cloneDeep(base), {
                  type: 'CubeTop' })] };


            },
            data: yData },
          {
            type: 'custom',
            name: 's',
            markLine: markLineData,
            markPoint: {
              symbol: config.markPoint == null ? '' : config.markPoint.shape,
              symbolSize: config.markPoint == null ? [0, 0] : [config.markPoint.width, config.markPoint.height],
              symbolOffset: config.markPoint == null ? [0, 0] : [config.markPoint.offsetMd, config.markPoint.offsetTd],
              label: {
                fontSize: config.markPoint == null ? 0 : config.markPoint.fontSize },

              emphasis: {
                itemStyle: {
                  color: 'red' } },


              data: [{
                name: '最大值',
                type: config.markPoint && config.markPoint.max ? 'max' : '' },
              {
                name: '最小值',
                type: config.markPoint && config.markPoint.min ? 'min' : '' }] },


            tooltip: {
              formatter: function formatter(params) {
                return "".concat(params.name, "\n").concat(params.data);
              },
              textStyle: {
                fontSize: config.tooltip.fontSize,
                color: config.tooltip.color },

              trigger: 'item',
              axisPointer: {
                type: 'line' } },


            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: config.colorMatch.startColor },
            {
              offset: 1,
              color: config.colorMatch.endColor ? config.colorMatch.endColor : 'green' }]),

            renderItem: function renderItem(params, api) {
              var location = api.coord([api.value(0), api.value(1)]);
              var base = {
                shape: {
                  api: api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]) },

                style: {
                  fill: config.TValue && api.value(1) > config.TValue.max ? config.TValue.linearGradient ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: config.TValue.colorStart },
                  {
                    offset: 1,
                    color: config.TValue.colorEnd }]) :
                  config.TValue.colorStart : config.colorMatch.linearGradient ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: config.colorMatch.startColor },
                  {
                    offset: 1,
                    color: config.colorMatch.endColor }]) :
                  config.colorMatch.startColor } };


              return {
                type: 'group',
                children: [_.assign(_.cloneDeep(base), {
                  type: 'CubeLeft' }),
                _.assign(_.cloneDeep(base), {
                  type: 'CubeRight' })] };


            },
            data: yData },
          {
            type: 'bar',
            data: yData,
            barWidth: '50',
            label: {
              normal: {
                position: Yinverse ? 'bottom' : 'top',
                show: config.chartsSetting.topDataSetting,
                fontFamily: config.chartsSetting.topDataSetting ? config.chartsSetting.topDataSetting.fontFamily : '',
                fontWeight: config.chartsSetting.topDataSetting ? config.chartsSetting.topDataSetting.fontStyle.sel : 'normal',
                fontStyle: config.chartsSetting.topDataSetting ? config.chartsSetting.topDataSetting.fontStyle.ch[0] : 'normal',
                fontSize: config.chartsSetting.topDataSetting ? config.chartsSetting.topDataSetting.fontSize : 0,
                color: config.chartsSetting.topDataSetting ? config.chartsSetting.topDataSetting.color.control === 'auto' ? config.chartsSetting.topDataSetting.color.auto.autoColor : '#fff' : '',
                offset: !Yinverse ? [2, -25] : [2, 0] },

              showBackground: true,
              backgroundStyle: {
                color: 'red' },

              show: true,
              position: 'insideRight' },

            tooltip: {
              formatter: function formatter(params) {
                return "".concat(params.name, "\n").concat(params.data);
              },
              textStyle: {
                fontSize: config.tooltip.fontSize,
                color: config.tooltip.color },

              trigger: 'item',
              axisPointer: {
                type: 'line' } },


            itemStyle: {
              color: 'transparent' } }] },


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
    _getMarkLineData: function _getMarkLineData(config, type) {
      return {
        symbol: 'none',
        label: {
          show: config.markLine.type[type].showLabel,
          position: config.markLine.type[type].position,
          formatter: config.markLine.type[type].descripts + '\n{c}' },

        emphasis: {
          label: {
            show: config.markLine.type[type].showLabel,
            position: config.markLine.type[type].position,
            formatter: config.markLine.type[type].descripts + '\n{c}' },

          lineStyle: {
            color: config.markLine.type[type].color,
            width: config.markLine.type[type].width } },


        lineStyle: {
          color: config.markLine.type[type].color,
          width: config.markLine.type[type].width },

        data: [type === 'average' ? {
          type: 'average' } :
        {
          yAxis: config.markLine.type.auto.yAxisValue }] };


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