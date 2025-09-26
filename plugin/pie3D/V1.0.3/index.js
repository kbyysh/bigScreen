Cube("/pie3D/V1.0.3/index.js", ["/node_modules/jquery/dist/jquery.js", "/node_modules/bcore/event.js", "/node_modules/lodash/lodash.js", "/node_modules/highcharts/highcharts.js", "/node_modules/highcharts/highcharts-3d.js"], function (module, exports, require, load, process, global) {

  function _instanceof(left, right) {if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {return !!right[Symbol.hasInstance](left);} else {return left instanceof right;}}
  var $ = require('/node_modules/jquery/dist/jquery.js');
  var Event = require('/node_modules/bcore/event.js');
  var _ = require('/node_modules/lodash/lodash.js');
  var Highcharts = require('/node_modules/highcharts/highcharts.js');
  var Highcharts3D = require('/node_modules/highcharts/highcharts-3d.js');
  Highcharts3D(Highcharts);
  module.exports = Event.extend(function Base(container) {
    this.container = $(container);
  }, {
    render: function render(config, data) {
      var _this2 = this;
      this.config = _.defaultsDeep(config || {}, this.config);
      this.data = _.cloneDeep(data);
      var _this = this;
      this.destroy();
      this.container.append("<div class=\"charts\" style=\"width: 100%; height: 100%;\"></div>");
      var isEmpty = false;
      data.forEach(function (item) {
        item.y > 0 && (isEmpty = true);
      });
      if (!isEmpty) return;
      var titleOption = config.title ? {
        text: config.title.text,
        style: {
          fontFamily: config.title.fontFamily,
          fontSize: config.title.fontSize,
          color: config.title.color,
          fontStyle: config.title.fontStyle.ch.includes('italic') ? 'italic' : 'normal',
          fontWeight: config.title.fontStyle.sel ? config.title.fontStyle.sel : 'normal' },

        align: config.title.position,
        x: config.title.lrPadding - 8,
        y: 5 + config.title.tbPadding + config.title.fontSize / 2 } :
      {
        text: '' },

      newData = data.map(function (item) {
        return {
          name: item.x,
          value: item.y };

      });
      if (!newData || !newData.length) {
        this.container.html('<div class="err-container">数据不匹配</div>');
        return;
      }
      config.chartsSetting.data.beyondZero && (newData = newData.filter(function (val) {
        return val.value !== 0;
      }));
      var themeColor = config.colorMatching.themeType,
      diyColor = config.colorMatching.diy,
      finalData = this._getsData(newData);
      var curLength = diyColor.length;
      diyColor.length < finalData.length && function () {
        for (var i = curLength; i < finalData.length; i++) {
          diyColor.push({
            key: '',
            nameDef: '',
            startColor: themeColor.color1[i % themeColor.color1.length],
            endColor: themeColor.color2[i % themeColor.color2.length],
            linearGradient: true,
            height: 10 + i * 10 });

        }
      }();
      var colorData = [];
      finalData.forEach(function (item, i) {
        item.h = diyColor[i].height;
        colorData.push({
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 1,
            y2: 1 },

          stops: [[0, diyColor[i].startColor], [1, diyColor[i].linearGradient ? diyColor[i].endColor : diyColor[i].startColor]] });

      });
      var showIntAndPercent = config.legend && config.legend.value ? config.legend.value.formatter.control : [];
      var labelFormatters = config.legend && config.legend.value ? function () {
        var name = config.legend.value.line === 'right' ? "<span style=\"\n               font-style: ".concat(config.legend.font.fontStyle.ch[0], "\"\n               >").concat(this.name, "</span>") : "<span style=\"font-style:".concat(config.legend.font.fontStyle.ch[0], "\">").concat(this.name, "</span><br>");
        var int = showIntAndPercent.includes('int') ? "<span style=\"\n               font-family:".concat(config.legend.value.formatter.int.fontFamily, ";\n               font-size:").concat(config.legend.value.formatter.int.fontSize, ";\n               color:").concat(config.legend.value.formatter.int.color, ";\n               font-weight:").concat(config.legend.value.formatter.int.fontStyle.sel, ";\n               font-style:").concat(config.legend.value.formatter.int.fontStyle.ch[0], "\n             \">").concat(_this._fixedTo(config.legend.value.formatter.int.fixedTo, this.y), "</span>") : '';
        config.legend.value.formatter.int.unitShow && showIntAndPercent.includes('int') ? int += "<span style=\"\n               font-family:".concat(config.legend.value.formatter.int.unitFamily, ";\n               font-size:").concat(config.legend.value.formatter.int.unitSize, ";\n               color:").concat(config.legend.value.formatter.int.unitColor, ";\n               font-weight:").concat(config.legend.value.formatter.int.unitStyle.sel, ";\n               font-style:").concat(config.legend.value.formatter.int.unitStyle.ch[0], "\n             \"> ").concat(config.legend.value.formatter.int.unitText, "</span>") : '';
        var percent = showIntAndPercent.includes('percent') ? "<span style=\"\n               font-family:".concat(config.legend.value.formatter.percent.fontFamily, ";\n               font-size:").concat(config.legend.value.formatter.percent.fontSize, ";\n               color:").concat(config.legend.value.formatter.percent.color, ";\n               font-weight:").concat(config.legend.value.formatter.percent.fontStyle.sel, ";\n               font-style:").concat(config.legend.value.formatter.percent.fontStyle.ch[0], "\n             \">").concat(_this._fixedTo(config.legend.value.formatter.percent.fixedTo, this.percentage, true), "%</span>") : '';
        var fontNum = '1';
        if (config.legend.value.lineGap) {
          for (var i = 0; i < config.legend.value.lineGap; i++) {
            fontNum += '1';
          }
        }
        var fontNum2 = '1';
        if (config.legend.value.percentGap) {
          for (var i = 0; i < config.legend.value.percentGap; i++) {
            fontNum2 += '1';
          }
        }
        var lineGap = config.legend.value.line === 'right' ? "<span style=\"color:red;font-size:1px; opacity: 0;\">".concat(fontNum, "</span>") : "<br/><span style=\"font-size:".concat(config.legend.value.lineGap, "\">  </span><br/>");
        return showIntAndPercent.includes('percent') && showIntAndPercent.includes('int') ? config.legend.value.numPostion === 'numberLeft' ? name + lineGap + int + "<span style=\"color:red;font-size:1px;\">".concat(fontNum2, "</span>") + percent : name + lineGap + percent + "<span style=\"color:red;font-size:1px;\">".concat(fontNum2, "</span>") + int : showIntAndPercent.includes('percent') ? name + percent : name + int;
      } : function () {
        return "<span style=\"font-style:".concat(config.legend.font.fontStyle.ch[0], "\">").concat(this.name, "</span>");
      };
      var legendDetail = config.legend ? {
        layout: config.legend.default.position.control === 'leftVertical' || config.legend.default.position.control === 'rightVertical' ? 'vertical' : 'horizontal',
        align: this._legendPos[config.legend.default.position.control].align,
        verticalAlign: this._legendPos[config.legend.default.position.control].verticalAlign,
        itemDistance: config.legend.default.gap,
        itemStyle: {
          color: config.legend.font.color,
          fontFamily: config.legend.font.fontFamily,
          fontSize: config.legend.font.fontSize,
          fontWeight: config.legend.font.fontStyle.sel },

        labelFormatter: labelFormatters } :
      {
        enabled: false };

      config.legend ? _.assign(legendDetail, config.legend.default.position.control === 'leftVertical' || config.legend.default.position.control === 'rightVertical' ? {
        x: config.legend.default.position[config.legend.default.position.control].padding,
        itemMarginTop: config.legend.default.gap } :
      {
        y: config.legend.default.position[config.legend.default.position.control].padding,
        itemMarginTop: config.legend.default.gap }) :
      '';
      var labelObj = config.label ? function () {
        var showIntAndPercent = config.label.value ? config.label.value.formatter.control : [];
        return !config.label.text && showIntAndPercent.length === 0 ? {
          enabled: false } :
        {
          enabled: true,
          formatter: function formatter() {
            var str = '';
            showIntAndPercent.includes('percent') && (str += "<span style=\"\n                font-family:".concat(config.label.value.formatter.percent.fontFamily, ";\n                font-size:").concat(config.label.value.formatter.percent.fontSize, ";\n                color:").concat(config.label.value.formatter.percent.color, ";\n                font-weight:").concat(config.label.value.formatter.percent.fontStyle.sel, ";\n                font-style:").concat(config.label.value.formatter.percent.fontStyle.ch[0], "\n              \">").concat(_this._fixedTo(config.label.value.formatter.percent.fixedTo, this.percentage, true), "%</span>\n              <br>"));
            config.label.text && (str += "<span style=\"\n                font-family:".concat(config.label.text.fontFamily, ";\n                font-size:").concat(config.label.text.fontSize, ";\n                color:").concat(config.label.text.color, ";\n                font-weight:").concat(config.label.text.fontStyle.sel, ";\n                font-style:").concat(config.label.text.fontStyle.ch[0], "\n              \">").concat(this.key, "</span>"));
            showIntAndPercent.includes('int') && (str += "<span style=\"\n                font-family:".concat(config.label.value.formatter.int.fontFamily, ";\n                font-size:").concat(config.label.value.formatter.int.fontSize, ";\n                color:").concat(config.label.value.formatter.int.color, ";\n                font-weight:").concat(config.label.value.formatter.int.fontStyle.sel, ";\n                font-style:").concat(config.label.value.formatter.int.fontStyle.ch[0], "\n              \">").concat(_this._fixedTo(config.label.value.formatter.int.fixedTo, this.y), "</span>"));
            return str;
          },
          style: {
            textOutline: 'none' },

          connectorColor: config.label.labelLine ? '' : 'transparent',
          distance: config.label.labelLine ? config.label.labelLine.length2 : 20 };

      }() : {
        enabled: false };

      Highcharts.wrap(Highcharts.seriesTypes.pie.prototype, 'translate', function (proceed) {
        proceed.apply(this, [].slice.call(arguments, 1));
        if (!this.chart.is3d()) {
          return;
        }
        var series = this,
        chart = series.chart,
        options = chart.options,
        seriesOptions = series.options,
        depth = seriesOptions.depth || 0,
        options3d = options.chart.options3d,
        alpha = options3d.alpha,
        beta = options3d.beta,
        z = seriesOptions.stacking ? (seriesOptions.stack || 0) * depth : series._i * depth;
        z += depth / 2;
        seriesOptions.grouping && (z = 0);
        Highcharts.each(series.data, function (point) {
          var shapeArgs = point.shapeArgs,
          angle = (shapeArgs.end + shapeArgs.start) / 2,
          ran = point.options.h;
          point.shapeType = 'arc3d';
          shapeArgs.z = z;
          shapeArgs.depth = depth + ran;
          shapeArgs.alpha = alpha;
          shapeArgs.beta = beta;
          shapeArgs.center = series.center;
          shapeArgs.ran = ran;
          point.slicedTranslation = {
            translateX: Math.round(Math.cos(angle) * seriesOptions.slicedOffset * Math.cos(alpha)),
            translateY: Math.round(Math.sin(angle) * seriesOptions.slicedOffset * Math.cos(alpha)) };

        });
      });
      (function (H) {
        H.wrap(Highcharts.SVGRenderer.prototype, 'arc3dPath', function (proceed) {
          var ret = proceed.apply(this, [].slice.call(arguments, 1));
          ret.zTop = (ret.zOut + 0.5) / 100;
          return ret;
        });
      })(Highcharts);
      var finalfinalData = finalData.map(function (item) {
        return {
          name: item.name,
          y: item.value,
          h: item.h };

      }),
      seriesData = [{
        type: 'pie',
        name: '',
        data: finalfinalData }];

      setTimeout(function () {
        _this2.myChart = Highcharts.chart(_this2.container.context.firstChild, {
          title: titleOption,
          tooltip: {
            style: {
              fontSize: config.tooltip.fontSize + 'px' },

            formatter: function formatter() {
              return this.key + ':' + this.y;
            } },

          legend: legendDetail,
          chart: {
            backgroundColor: 'rgba(0,0,0,0)',
            type: 'pie',
            events: {
              load: function load() {
                Highcharts.each(this.series[0].points, function (p) {
                  p.graphic.attr({
                    translateY: -p.shapeArgs.ran });

                  p.graphic.side1.attr({
                    translateY: -p.shapeArgs.ran });

                  p.graphic.side2.attr({
                    translateY: -p.shapeArgs.ran });

                });
              } },

            marginBottom: 0,
            options3d: {
              enabled: true,
              alpha: config.chartsSetting.default.alpha,
              beta: config.chartsSetting.default.beta } },


          credits: {
            enabled: false },

          plotOptions: {
            pie: {
              size: config.chartsSetting.default.radiusOutside + '%',
              innerSize: config.chartsSetting.default.radiusInner + '%',
              allowPointSelect: true,
              cursor: 'pointer',
              depth: config.chartsSetting.default.depth,
              dataLabels: labelObj,
              showInLegend: !!config.legend,
              colors: colorData,
              states: {
                inactive: {
                  opacity: 1 } },


              animation: {
                duration: config.animation ? config.animation.initTime : 0,
                easing: config.animation ? config.animation.easing : '' },

              events: {
                click: function click(event) {
                  _this2.emit('eventClick', {
                    x: event.point.options.name,
                    y: event.point.options.y });

                } } } },



          series: seriesData });

      }, 300);
    },
    _fixedTo: function _fixedTo(key, value, isPercent) {
      return {
        default: isPercent ? parseInt(value) : value,
        parseInt: parseInt(value),
        fixed1: value.toFixed(1),
        fixed2: value.toFixed(2),
        fixed3: value.toFixed(3) }[
      key];
    },
    _getsData: function _getsData(_rowData) {
      var minVal = this.config.chartsSetting.merge ? this.config.chartsSetting.merge.percent / 100 : 0,
      rowData = _.cloneDeep(_rowData),
      sum = rowData.reduce(function (o, v) {
        return o + parseFloat(v.value);
      }, 0),
      val = 0,
      other = [];
      if (isNaN(sum) || sum === 0) {
        return [];
      }
      this.config.chartsSetting.data.sortData && rowData.sort(function (a, b) {
        return b.value - a.value;
      });
      rowData.forEach(function (item) {
        Number(item.value) / parseInt(sum) < minVal ? val += parseFloat(item.value) : other.push(item);
      });
      val > 0 && other.push({
        name: '其他',
        value: val });

      return other;
    },
    _legendPos: {
      topCenter: {
        verticalAlign: 'top',
        align: 'center' },

      topLeft: {
        verticalAlign: 'top',
        align: 'left' },

      topRight: {
        verticalAlign: 'top',
        align: 'right' },

      bottomCenter: {
        verticalAlign: 'bottom',
        align: 'center' },

      bottomLeft: {
        verticalAlign: 'bottom',
        align: 'left' },

      bottomRight: {
        verticalAlign: 'bottom',
        align: 'right' },

      leftVertical: {
        verticalAlign: 'middle',
        align: 'left' },

      rightVertical: {
        verticalAlign: 'middle',
        align: 'right' } },


    select: function select(args) {
      var _this3 = this;
      args.hasOwnProperty('name') && function () {
        var index = _this3.myChart.series[0].data.findIndex(function (val) {
          return val.name === args.name;
        });
        _this3.myChart.series[0].data[index].select();
        _this3.emit('eventClick', {
          x: _this3.myChart.series[0].data[index].name,
          y: _this3.myChart.series[0].data[index].y });

      }();
    },
    unSelect: function unSelect(args) {
      var _this4 = this;
      args.hasOwnProperty('name') && function () {
        var index = _this4.myChart.series[0].data.findIndex(function (val) {
          return val.name === args.name;
        });
        _this4.myChart.series[0].data[index].select(false);
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
      this.myChart && this.myChart.destroy();
      this.container.empty();
    } });return module.exports;});