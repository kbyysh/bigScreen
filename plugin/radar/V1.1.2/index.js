Cube("/radar/V1.1.2/index.js", ["/node_modules/jquery/dist/jquery.js", "/node_modules/bcore/event.js", "/node_modules/lodash/lodash.js", "/node_modules/echarts/index.js"], function (module, exports, require, load, process, global) {

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
      var _this = this;
      this.config = _.defaultsDeep(config || {}, this.config);
      this.data = _.cloneDeep(data);
      this.destroy();
      this.container.append('<div class="charts" style="width: 100%; height: 100%;"></div>');
      if (!data && _instanceof(!data, Array)) {
        this.container.html('<div class="err-container">数据不匹配</div>');
        return;
      }
      var titleOption = config.title ? {
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

      var centerPosi = ['50%', (config.title ? config.title.tbPadding : 50) + '%'];
      var cloneData = _.cloneDeep(this.data);
      var newData = [];
      $.each(cloneData, function (index, value) {
        var reg = /^[-]?[0-9]+\.?[0-9]+?$/.test(value.y);
        typeof value.y === 'string' && reg && (value.y = Number(value.y));
        var isObj = _instanceof(value, Object);
        if (!(!isObj || isObj && value.length !== undefined || Object.keys(cloneData).length === 0 || !value.x)) {
          newData.push(cloneData[index]);
        }
      });
      var legendData = [];
      var originDataX = [];
      var seriesArr = [];
      newData.filter(function (item) {
        legendData.push(item.s);
        originDataX.push(item.x);
      });
      legendData = Array.from(new Set(legendData));
      originDataX = Array.from(new Set(originDataX));
      legendData.forEach(function (item) {
        var everyData = $.grep(newData, function (val) {
          return val.s === item;
        });
        seriesArr.push(everyData);
      });
      var series1 = [];
      var series2 = [];
      var restArr = [];
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
      var newSeriesData = [series1, series2].concat(restArr);
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
      var x0Data = firstData[0].map(function (item) {
        return item.x;
      });
      var yData = [];
      var indexArr = [];
      var xArr = [];
      for (var i = 0; i < newData.length; i++) {
        for (var j = 0; j < x0Data.length; j++) {
          xArr.push(newData[i][j].x);
          indexArr.push(xArr.indexOf(x0Data[j]));
          yData.push(Number(newData[i][indexArr[j]].y));
        }
      }
      var result = [];
      var total = yData.length;
      var len = legendData.length;
      var num = total / len;
      for (var n = 0; n < total; n += num) {
        result.push(yData.slice(n, n + num));
      }
      var diyColor = config.colorMatching.diy;
      var themeColor = config.colorMatching.themeType;
      if (diyColor.length < legendDataResize.length) {
        var _num = legendDataResize.length - diyColor.length;
        for (var _i2 = 0; _i2 < _num; _i2++) {
          diyColor.push({
            key: '',
            nameDef: '',
            startColor: themeColor.color1.slice(legendDataResize.length, themeColor.length)[_i2],
            endColor: themeColor.color2.slice(legendDataResize.length, themeColor.length)[_i2],
            linearGradient: true });

        }
      }
      var _loop = function _loop(t) {
        diyColor[t].nameDef === '' && function () {
          var index = diyColor.indexOf(diyColor[t]);
          diyColor[t].nameDef = legendDataResize[index];
        }();
        legendDataResize[t] = diyColor[t].nameDef;
      };
      for (var t = 0; t < legendDataResize.length; t++) {
        _loop(t);
      }
      (legendDataResize.length === 1 && legendDataResize[0] === undefined || legendDataResize[0] === '') && (legendDataResize[0] = ' ');
      var seriesData = legendDataResize.map(function (item, i) {
        return {
          name: '',
          type: 'radar',
          symbol: config.colorMatching.diy[i].symbolType,
          symbolSize: config.chartsSetting.itemSize,
          itemStyle: {
            borderWidth: config.chartsSetting.lineWidth2,
            borderColor: diyColor[i].symbolStrokeColor,
            color: diyColor[i].symbolColor },

          animation: !!config.animation,
          animationDuration: config.animation ? config.animation.initTime : 0,
          animationEasing: config.animation ? config.animation.easing : '',
          animationDurationUpdate: config.animation ? config.animation.updateTime : 0,
          label: {
            show: !!config.chartsSetting.showData,
            fontFamily: config.chartsSetting.showData ? config.chartsSetting.showData.fontFamily : '',
            fontSize: config.chartsSetting.showData ? config.chartsSetting.showData.fontSize : 0,
            fontWeight: config.chartsSetting.showData ? config.chartsSetting.showData.fontStyle.sel : 'normal',
            fontStyle: config.chartsSetting.showData ? config.chartsSetting.showData.fontStyle.ch[0] : 'normal',
            color: config.chartsSetting.showData ? config.chartsSetting.showData.color : 'normal' },

          lineStyle: {
            width: config.chartsSetting.lineWidth,
            color: diyColor[i].linearGradientForLine ? {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: diyColor[i].strokeColorStart },
              {
                offset: 1,
                color: diyColor[i].strokeColorEnd }],

              global: false } :
            diyColor[i].strokeColorStart },

          areaStyle: {
            normal: {
              opacity: diyColor[i].areaColorOn ? 0.7 : 0,
              color: diyColor[i].linearGradientForArea ? {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: diyColor[i].areaColorStart },
                {
                  offset: 1,
                  color: diyColor[i].areaColorEnd }],

                global: false } :
              diyColor[i].areaColorStart } },


          emphasis: {
            areaStyle: {
              shadowBlur: 10,
              shadowColor: '#fff' } },


          data: [{
            name: item,
            value: result[i] }] };


      });
      var maxVal = Math.max.apply(null, yData);
      var indicatorData = x0Data.map(function (item) {
        return {
          name: item,
          max: maxVal,
          color: config.splitLine ? config.splitLine.textColor : '' };

      });
      var showLegend = !!config.legend;
      var posiLegend = showLegend ? config.legend.shapeSetting.position : null;
      var legendDetail = {
        show: showLegend,
        textStyle: {
          fontFamily: showLegend ? config.legend.textSetting.fontFamily : '',
          fontWeight: showLegend ? config.legend.textSetting.fontStyle.sel : 'normal',
          fontStyle: showLegend ? config.legend.textSetting.fontStyle.ch[0] : 'normal',
          color: showLegend ? config.legend.textSetting.color : '',
          fontSize: showLegend ? config.legend.textSetting.fontSize : 0 },

        itemHeight: showLegend ? config.legend.textSetting.fontSize : 0,
        itemWidth: showLegend ? config.legend.textSetting.fontSize : 0,
        orient: 'horizontal',
        left: posiLegend ? this._legendPos[posiLegend].left : 'center',
        icon: showLegend ? config.legend.shapeSetting.shape : 'rect',
        itemGap: showLegend ? config.legend.shapeSetting.gap : 10,
        padding: [showLegend ? config.legend.shapeSetting.tbPadding : 0, 0],
        data: legendDataResize };

      posiLegend && (legendDetail[this._legendPos[posiLegend].key] = this._legendPos[posiLegend].value);
      setTimeout(function () {
        _this.myChart = echarts.init(_this.container.context.firstChild);
        config.animation && config.animation.ansy === 'clear' && _this.myChart.clear();
        _this.myChart.setOption({
          title: titleOption,
          color: diyColor.map(function (item) {
            return item[1];
          }),
          tooltip: {
            confine: true,
            textStyle: {
              fontSize: config.tooltip.fontSize } },


          legend: legendDetail,
          radar: {
            name: {
              textStyle: {
                fontFamily: config.splitLine ? config.splitLine.textStyle.fontFamily : '',
                fontSize: config.splitLine ? config.splitLine.textStyle.fontSize : 0,
                fontWeight: config.splitLine ? config.splitLine.textStyle.fontStyle.sel : 'normal',
                fontStyle: config.splitLine ? config.splitLine.textStyle.fontStyle.ch[0] : 'normal',
                color: config.splitLine ? config.splitLine.textStyle.color : '' } },


            nameGap: config.splitLine ? config.splitLine.textStyle.margin : 15,
            radius: '60%',
            shape: config.splitLine ? config.splitLine.shape : 'polygon',
            splitNumber: config.splitLine ? config.splitLine.splitNumber : 5,
            center: centerPosi,
            splitArea: {
              show: false },

            axisLine: {
              show: !!config.axis,
              lineStyle: {
                color: config.axis ? config.axis.lineColor : '',
                width: config.axis ? config.axis.width : '' } },


            axisLabel: {
              show: !!(config.axis && config.axis.intervalText.show),
              fontFamily: config.axis ? config.axis.intervalText.fontFamily : '',
              fontSize: config.axis ? config.axis.intervalText.fontSize : 0,
              fontWeight: config.axis ? config.axis.intervalText.fontStyle.sel : 'normal',
              fontStyle: config.axis ? config.axis.intervalText.fontStyle.ch[0] : 'normal',
              color: config.axis ? config.axis.intervalText.color : '' },

            splitLine: {
              show: !!config.splitLine,
              lineStyle: {
                color: config.splitLine ? config.splitLine.color : '',
                type: config.splitLine ? config.splitLine.lineType : 'solid',
                width: config.splitLine ? config.splitLine.width : 0 } },


            indicator: indicatorData },

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