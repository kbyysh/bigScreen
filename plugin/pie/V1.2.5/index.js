Cube("/pie/V1.2.5/index.js", ["/node_modules/jquery/dist/jquery.js", "/node_modules/bcore/event.js", "/node_modules/lodash/lodash.js", "/node_modules/echarts/index.js"], function (module, exports, require, load, process, global) {

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
      this.container.find('.charts').css({
        transform: "rotateX(".concat(config.chartsSetting.default.rotatex || 0, "deg") });

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

      horizontalPos = config.chartsSetting.default.horizontalPos && config.chartsSetting.default.horizontalPos.control === 'horizontal' ? config.chartsSetting.default.horizontalPos.horizontal.width + '%' : '50%',
      verticalPos = config.chartsSetting.default.verticalPos && config.chartsSetting.default.verticalPos.control === 'vertical' ? config.chartsSetting.default.verticalPos.vertical.width + '%' : '50%';
      centerPosi = [horizontalPos, verticalPos];
      var minVal = config.chartsSetting.merge ? config.chartsSetting.merge.percent / 100 : 0,
      cloneData = _.cloneDeep(this.data);
      if (!cloneData) {
        this.container.html('<div class="err-container">数据不匹配</div>');
        return;
      }
      cloneData = cloneData.map(function (item) {
        return {
          name: item.x,
          value: item.y };

      });
      var themeColor = config.colorMatching.themeType,
      diyColor = config.colorMatching.diy;
      config.chartsSetting.data.beyondZero && (cloneData = cloneData.filter(function (item) {
        return item.value > 0;
      }));
      var finalData = _this._getsData(cloneData, minVal);
      if (diyColor.length < finalData.length) {
        var num = finalData.length - diyColor.length;
        for (var i = 0; i < num; i++) {
          diyColor.push({
            key: '',
            nameDef: '',
            startColor: themeColor.color1[i % themeColor.color1.length],
            endColor: themeColor.color2[i % themeColor.color2.length],
            linearGradient: true });

        }
      }
      finalData.map(function (item, i) {
        return diyColor[i].linearGradient ? _.assign(item, {
          label: {
            color: diyColor[i].startColor },

          emphasis: {
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: diyColor[i].startColor },
              {
                offset: 1,
                color: diyColor[i].endColor }]) } },



          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: diyColor[i].startColor },
              {
                offset: 1,
                color: diyColor[i].endColor }]) } } }) :



        _.assign(item, {
          emphasis: {
            itemStyle: {
              color: diyColor[i].startColor } },


          itemStyle: {
            normal: {
              color: diyColor[i].startColor } } });



      });
      if (config.chartsSetting.gap) {
        var gapData = [];
        finalData.forEach(function (item) {
          gapData.push(item, {
            value: config.chartsSetting.gap.num,
            name: '',
            itemStyle: {
              normal: {
                color: 'rgba(0,0,0,0)' } } });



        });
        finalData = gapData;
      }
      var objData = _this._array2obj(finalData, 'name');
      var showLegendIntAndPercent = config.legend && config.legend.value ? config.legend.value.formatter.control : [];
      var legendDetail = config.legend ? {
        show: true,
        formatter: config.legend.value ? function (name) {
          var percent = showLegendIntAndPercent.includes('percent') ? "{percent|".concat(_this._fixedTo(config.legend.value.formatter.percent.fixedTo, parseFloat((objData[name].value / objData['count'] * 100).toFixed(2))), "%}") : '';
          var int = showLegendIntAndPercent.includes('int') ? "{int|".concat(_this._fixedTo(config.legend.value.formatter.int.fixedTo, objData[name].value), "}{x| ").concat(config.legend.value.formatter.int.unitShow ? config.legend.value.formatter.int.unitText : '', "}") : '';
          var line = config.legend.value.line === 'right' ? "{gap| }" : "\n{gap| }\n";
          return showLegendIntAndPercent.includes('percent') && showLegendIntAndPercent.includes('int') ? config.legend.value.numPostion === 'numberLeft' ? "{title| ".concat(name, "}") + line + int + "{percentGap| }" + percent : "{title| ".concat(name, "}") + line + percent + "{percentGap| }" + int : showLegendIntAndPercent.includes('percent') ? "{title| ".concat(name, "}") + line + percent : "{title| ".concat(name, "}") + int;
        } : '',
        textStyle: {
          color: config.legend.font.color,
          fontFamily: config.legend.font.fontFamily,
          fontSize: config.legend.font.fontSize,
          fontWeight: config.legend.font.fontStyle.sel,
          fontStyle: config.legend.font.fontStyle.ch[0],
          rich: (config.label ? config.label.text : false) || showLegendIntAndPercent.length ? function () {
            var res = {
              gap: {
                width: config.legend && config.legend.value ? config.legend.value.lineGap : 1 },

              percentGap: {
                width: config.legend && config.legend.value ? config.legend.value.percentGap : 1 } };


            showLegendIntAndPercent.includes('int') && _.assign(res, {
              int: {
                fontFamily: config.legend.value.formatter.int.fontFamily,
                fontSize: config.legend.value.formatter.int.fontSize,
                color: config.legend.value.formatter.int.color,
                fontWeight: config.legend.value.formatter.int.fontStyle.sel,
                fontStyle: config.legend.value.formatter.int.fontStyle.ch[0],
                width: config.legend.value.intWidth.control === 'AllWidth1' ? config.legend.value.intWidth.AllWidth1.width : 'auto' },

              x: {
                fontFamily: config.legend.value.formatter.int.unitFamily,
                fontSize: config.legend.value.formatter.int.unitSize,
                color: config.legend.value.formatter.int.unitColor,
                fontWeight: config.legend.value.formatter.int.unitStyle.sel,
                fontStyle: config.legend.value.formatter.int.unitStyle.ch[0] } });


            showLegendIntAndPercent.includes('percent') && _.assign(res, {
              percent: {
                fontFamily: config.legend.value.formatter.percent.fontFamily,
                fontSize: config.legend.value.formatter.percent.fontSize,
                color: config.legend.value.formatter.percent.color,
                fontWeight: config.legend.value.formatter.percent.fontStyle.sel,
                fontStyle: config.legend.value.formatter.percent.fontStyle.ch[0],
                width: config.legend.value.percentWidth.control === 'AllWidth' ? config.legend.value.percentWidth.AllWidth.width : 'auto' } });


            config.legend.font && config.legend.font.width && config.legend.font.width.control === 'AllWidth' ? _.assign(res, {
              title: {
                width: config.legend.font.width.AllWidth.width } }) :

            '';
            return res;
          }() : {} },

        itemHeight: config.legend.font.fontSize,
        itemWidth: config.legend.font.fontSize,
        itemGap: config.legend.default.gap,
        padding: config.legend.default.position.control === 'leftVertical' || config.legend.default.position.control === 'rightVertical' ? [0, config.legend.default.position[config.legend.default.position.control].padding] : [config.legend.default.position[config.legend.default.position.control].padding, 0],
        icon: config.legend.default.shape,
        align: 'left' } :
      {
        show: false };

      config.legend && (legendDetail = _.assign(legendDetail, _this._legendPos[config.legend.default.position.control]));
      var labelLineObj;
      config.label ? function () {
        labelLineObj = config.label.labelLine ? {
          show: true,
          length: config.label.labelLine.length,
          length2: config.label.labelLine.length2 } :
        {
          show: false };

        var showIntAndPercent = config.label.value ? config.label.value.formatter.control : [];
        finalData.forEach(function (item, i) {
          item.label = {
            show: (!!config.label.text || !!showIntAndPercent.length) && !!item.name,
            formatter: config.label.text || showIntAndPercent.length ? function (data) {
              var percent = showIntAndPercent.includes('percent') ? "{percent|".concat({
                default: data.percent,
                parseInt: parseInt(data.percent),
                fixed1: data.percent.toFixed(1),
                fixed2: data.percent.toFixed(2),
                fixed3: data.percent.toFixed(3) }[
              config.label.value.formatter.percent.fixedTo], "%}") : '',
              name = config.label.text ? "{name|".concat(data.name).concat(showIntAndPercent.includes('int') ? ':' : '', "}") : '',
              int = showIntAndPercent.includes('int') ? "{int|".concat({
                default: data.value,
                parseInt: parseInt(data.value),
                fixed1: data.value.toFixed(1),
                fixed2: data.value.toFixed(2),
                fixed3: data.value.toFixed(3) }[
              config.label.value.formatter.int.fixedTo], "}{x|").concat(config.label.value.formatter.int.unitShow ? config.label.value.formatter.int.unitText : '', "}") : '';
              return showIntAndPercent.includes('percent') && showIntAndPercent.includes('int') ? config.label.value.line === 'int' ? int + '\n{gap| }\n' + name + percent : percent + '\n{gap| }\n' + name + int : showIntAndPercent.includes('percent') && config.label.text ? name + percent : percent + name + int;
            } : '',
            rich: config.label.text || showIntAndPercent.length ? function () {
              var res = {
                gap: {
                  fontSize: config.label && config.label.value ? config.label.value.lineGap : 12 } };


              config.label.text && _.assign(res, {
                name: {
                  fontFamily: config.label.text.fontFamily,
                  fontSize: config.label.text.fontSize,
                  color: config.label.text.useMyself ? config.label.text.color : diyColor[i].startColor,
                  fontWeight: config.label.text.fontStyle.sel,
                  fontStyle: config.label.text.fontStyle.ch[0] } });


              showIntAndPercent.includes('int') && _.assign(res, {
                int: {
                  fontFamily: config.label.value.formatter.int.fontFamily,
                  fontSize: config.label.value.formatter.int.fontSize,
                  color: config.label.value.useMyself ? config.label.value.formatter.int.color : diyColor[i].startColor,
                  fontWeight: config.label.value.formatter.int.fontStyle.sel,
                  fontStyle: config.label.value.formatter.int.fontStyle.ch[0] },

                x: {
                  fontFamily: config.label.value.formatter.int.unitFamily,
                  fontSize: config.label.value.formatter.int.unitSize,
                  color: config.label.value.useMyself ? config.label.value.formatter.int.unitColor : diyColor[i].startColor,
                  fontWeight: config.label.value.formatter.int.unitStyle.sel,
                  fontStyle: config.label.value.formatter.int.unitStyle.ch[0] } });


              showIntAndPercent.includes('percent') && _.assign(res, {
                percent: {
                  fontFamily: config.label.value.formatter.percent.fontFamily,
                  fontSize: config.label.value.formatter.percent.fontSize,
                  color: config.label.value.useMyself ? config.label.value.formatter.percent.color : diyColor[i].startColor,
                  fontWeight: config.label.value.formatter.percent.fontStyle.sel,
                  fontStyle: config.label.value.formatter.percent.fontStyle.ch[0] } });


              return res;
            }() : {} };

        });
      }() : finalData.forEach(function (item) {
        item.label = {
          show: false };

      });
      var seriesData = [],
      seriesBase = {
        type: 'pie',
        center: centerPosi,
        radius: [config.chartsSetting.default.radiusInner + '%', config.chartsSetting.default.radiusOutside + '%'],
        avoidLabelOverlap: true,
        containLabel: true,
        animation: config.animation !== null,
        animationDuration: config.animation ? config.animation.initTime : 0,
        animationEasing: config.animation ? config.animation.easing : '',
        animationDurationUpdate: config.animation ? config.animation.updateTime : 0,
        data: finalData };

      config.chartsSetting.outer ? seriesData.push(_.assign(_.cloneDeep(seriesBase), {
        name: '类别',
        labelLine: labelLineObj,
        z: 2 }),
      _.assign(_.cloneDeep(seriesBase), {
        name: '背景',
        silent: true,
        radius: [config.chartsSetting.default.radiusInner + '%', config.chartsSetting.outer.radiusOutside + '%'],
        label: {
          show: false },

        labelLine: {
          show: false },

        itemStyle: {
          normal: {
            opacity: config.chartsSetting.outer.color / 100 } },


        z: 1 })) :
      seriesData.push(_.assign(seriesBase, {
        name: '类别',
        labelLine: labelLineObj }));

      if (config.chartsSetting.outer) {
        seriesData[1].data.forEach(function (item, index) {
          item.label.show = false;
        });
      }
      setTimeout(function () {
        _this.myChart = echarts.init(_this.container.context.firstChild);
        config.animation && config.animation.ansy === 'clear' && _this.myChart.clear();
        _this.myChart.setOption({
          title: titleOption,
          color: themeColor,
          legend: legendDetail,
          tooltip: {
            show: true,
            textStyle: {
              fontSize: config.tooltip.fontSize },

            formatter: '{b}:{c}\n({d}%)',
            confine: true },

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


    _fixedTo: function _fixedTo(key, value, isPercent) {
      return {
        default: isPercent ? parseInt(value) : value,
        parseInt: parseInt(value),
        fixed1: value.toFixed(1),
        fixed2: value.toFixed(2),
        fixed3: value.toFixed(3) }[
      key];
    },
    _array2obj: function _array2obj(array, key) {
      var resObj = {};
      var count = 0;
      for (var i = 0; i < array.length; i++) {
        resObj[array[i][key]] = {
          name: array[i].name,
          value: array[i].value };

        count += array[i].value;
      }
      resObj['count'] = count;
      return resObj;
    },
    _getsData: function _getsData(_rowData, min) {
      var rowData = _.cloneDeep(_rowData),
      sum = rowData.reduce(function (o, v) {
        o += parseFloat(v.value);
        return o;
      }, 0);
      if (isNaN(sum) || sum === 0) {
        return [];
      }
      this.config.chartsSetting.data.sortData && rowData.sort(function (a, b) {
        return b.value - a.value;
      });
      var val = 0;
      var result = [];
      rowData.forEach(function (item) {
        Number(item.value) / parseInt(sum) >= min ? result.push(item) : val += parseFloat(item.value);
      });
      val > 0 && result.push({
        name: '其他',
        value: val });

      return result;
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