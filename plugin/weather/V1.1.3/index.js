Cube("/weather/V1.1.3/index.js", ["/node_modules/jquery/dist/jquery.js", "/node_modules/bcore/event.js", "/node_modules/lodash/lodash.js", "/node_modules/axios/index.js", "/_requireModules/js/setting.js"], function (module, exports, require, load, process, global) {

  var $ = require('/node_modules/jquery/dist/jquery.js');
  var Event = require('/node_modules/bcore/event.js');
  var _ = require('/node_modules/lodash/lodash.js');
  var axios = require('/node_modules/axios/index.js');
  var setting = require('/_requireModules/js/setting.js');
  load('/_requireModules/css/charts.css.js', '');
  module.exports = Event.extend(function Base(container) {
    this.container = $(container);
    this.imgBaseUrl = "".concat(window.baseUrl, "weather/img/");
  }, {
    render: function render(config) {
      var _this = this;
      this.config = _.defaultsDeep(config || {}, this.config);
      this.destroy();
      var weatherUrl = '/weather_amap/v3/weather/weatherInfo?extensions=all';
      var weatherSetting = this.config.weatherSetting;
      if (weatherSetting.selection) {
        var windText = '';
        var theWeather = weatherSetting.selection.weather;
        var low = weatherSetting.selection.temperature[0];
        var high = weatherSetting.selection.temperature[1];
        var src = this.imgBaseUrl + this._nowWeather[theWeather];
        this._appendDom({
          theWeather: theWeather,
          windText: windText,
          low: low,
          high: high,
          src: src });

      } else {
        weatherSetting.location && axios.get("".concat(weatherUrl, "&city=").concat(weatherSetting.location, "&key=").concat(setting.amapWebServiceKey)).then(function (res) {
          var info = !!res.data.forecasts[0] ? !!res.data.forecasts[0].casts[0] ? res.data.forecasts[0].casts[0] : null : null;
          var windText = info ? "".concat(info.daywind, "\u98CE ").concat(info.daypower, "\u7EA7") : '';
          var theWeather = info ? info.dayweather : '';
          var low = info ? info.nighttemp : '';
          var high = info ? info.daytemp : '';
          var src = _this.imgBaseUrl + _this._nowWeather[theWeather];
          _this._appendDom({
            theWeather: theWeather,
            windText: windText,
            low: low,
            high: high,
            src: src });

        }).catch(function (e) {});
      }
    },
    _nowWeather: {
      晴: 'qing.png',
      少云: 'shao_yun.png',
      晴间多云: 'qing_jian_duo_yun.png',
      多云: 'duo_yun.png',
      阴: 'ying.png',
      有风: 'you_feng.png',
      平静: 'ping_jing.png',
      微风: 'wei_feng.png',
      和风: 'he_feng.png',
      清风: 'qing_feng.png',
      '强风/劲风': 'qiang_feng.png',
      疾风: 'ji_feng.png',
      大风: 'da_feng.png',
      烈风: 'liefeng.png',
      风暴: 'feng_bao.png',
      狂爆风: 'kuang_bao_feng.png',
      飓风: 'ju_feng.png',
      热带风暴: 're_dai_feng_bao.png',
      霾: 'mai.png',
      中度霾: 'middle_mai.png',
      重度霾: 'zhong_du_mai.png',
      严重霾: 'yan_zhong_mai.png',
      阵雨: 'zhen_yu.png',
      雷阵雨: 'lei_zhen_yu.png',
      雷阵雨并伴有冰雹: 'lei_zhen_yu_ban_bing_bao.png',
      小雨: 'xiao_yu.png',
      中雨: 'zhong_yu.png',
      大雨: 'da_yu.png',
      暴雨: 'bao_yu.png',
      大暴雨: 'da_bao_yu.png',
      特大暴雨: 'te_da_bao_yu.png',
      强阵雨: 'zhen_yu.png',
      强雷阵雨: 'qiang_lei_zhen_yu.png',
      极端降雨: 'ji_duan_jiang_yu.png',
      '毛毛雨/细雨': 'mao_mao_yu.png',
      '小雨-中雨': 'xiao_yu_dao_zhong_yu.png',
      '中雨-大雨': 'zhong_yu_dao_da_yu.png',
      '大雨-暴雨': 'da_yu_bao_yu.png',
      '暴雨-大暴雨': 'bao_yu_da_bao_yu.png',
      '大暴雨-特大暴雨': 'da_bao_yu_te_da_bao_yu.png',
      雨雪天气: 'yu_xue_tian_qi.png',
      雨夹雪: 'yu_jia_xue.png',
      阵雨夹雪: 'zhen_yu_jia_xue.png',
      冻雨: 'dong_yu.png',
      雪: 'xue.png',
      阵雪: 'zhen_xue.png',
      小雪: 'xiao_xue.png',
      中雪: 'zhong_xue.png',
      大雪: 'da_xue.png',
      暴雪: 'bao_xue.png',
      '小雪-中雪': 'xiao_xue_dao_zhong_xue.png',
      '中雪-大雪': 'zhong_xue_dao_da_xue.png',
      '大雪-暴雪': 'da_xue_bao_xue.png',
      浮尘: 'fu_chen.png',
      扬沙: 'yang_sha.png',
      沙尘暴: 'sha_chen_bao.png',
      强沙尘暴: 'qiang_sha_chen_bao.png',
      龙卷风: 'long_juan_feng.png',
      雾: 'wu.png',
      浓雾: 'nong_wu.png',
      强浓雾: 'qiang_nong_wu.png',
      轻雾: 'qing_wu.png',
      大雾: 'da_wu.png',
      特强浓雾: 'te_qiang_nong_wu.png',
      热: 'hot.png',
      冷: 'cold.png',
      未知: 'qing.png' },

    _appendDom: function _appendDom(args) {
      var styleSetting = this.config.styleSetting;
      var weatherSetting = this.config.weatherSetting;
      var italicWea = (styleSetting.weatherText ? styleSetting.weatherText.fontStyle.ch : []).includes('italic') ? 'italic' : 'normal';
      var textdecorationWea = (styleSetting.weatherText ? styleSetting.weatherText.fontStyle.ch : []).includes('underline') ? 'underline' : 'none';
      var italicTemp = (styleSetting.tempText ? styleSetting.tempText.fontStyle.ch : []).includes('italic') ? 'italic' : 'normal';
      var textdecorationTemp = (styleSetting.tempText ? styleSetting.tempText.fontStyle.ch : []).includes('underline') ? 'underline' : 'none';
      var italicWind = (styleSetting.windText ? styleSetting.windText.fontStyle.ch : []).includes('italic') ? 'italic' : 'normal';
      var textdecorationWind = (styleSetting.windText ? styleSetting.windText.fontStyle.ch : []).includes('underline') ? 'underline' : 'none';
      var ifWeaShowFont = styleSetting.weatherText ? 'inline-block' : 'none';
      var ifTempShowFont = styleSetting.tempText ? 'inline-block' : 'none';
      var ifWindShowFont = styleSetting.windText ? 'inline-block' : 'none';
      switch (styleSetting.icon.flexType) {
        case 'type1':
          this.container.append("\n            <div\n              class=\"weather-wrap\"\n              style=\"overflow: hidden; height: 100%;\"\n            >\n              <div\n                style=\"\n                  display: flex;\n                  align-items: center;\n                \"\n              >\n                <img\n                  src=\"".concat(args.src, "\"\n                  class=\"weather-img\"\n                  style=\"\n                    width: ").concat(styleSetting.icon.iconWidth, "px;\n                    height: ").concat(styleSetting.icon.iconHeight, "px;\n                    vertical-align: middle;\n                    margin-right: ").concat(styleSetting.icon.distence1, "px;\n                  \"\n                />\n                <span\n                  class=\"weather\"\n                  style=\"\n                    display: ").concat(ifWeaShowFont, ";\n                    ").concat(styleSetting.weatherText ? "\n                          margin-right: ".concat(styleSetting.icon.distence2, "px;\n                          font-family: ").concat(styleSetting.weatherText.fontFamily, ";\n                          font-size: ").concat(styleSetting.weatherText.fontSize, "px;\n                          color: ").concat(styleSetting.weatherText.color, ";\n                          font-weight: ").concat(styleSetting.weatherText.fontStyle.sel, ";\n                        ") : '', "\n                    font-style: ").concat(italicWea, ";\n                    text-decoration: ").concat(textdecorationWea, ";\n                    order: ").concat(weatherSetting.showOrder == 'type1' ? 1 : 2, "\n                  \"\n                >").concat(args.theWeather, "</span>\n                <div\n                  class=\"temp\"\n                  style=\"\n                    display: ").concat(ifTempShowFont, ";\n                    ").concat(styleSetting.tempText ? "\n                          margin-right: ".concat(styleSetting.icon.distence2, "px;\n                          font-family: ").concat(styleSetting.tempText.fontFamily, ";\n                          font-size: ").concat(styleSetting.tempText.fontSize, "px;\n                          color: ").concat(styleSetting.tempText.color, ";\n                          font-weight: ").concat(styleSetting.tempText.fontStyle.sel, ";\n                        ") : '', "\n                    font-style: ").concat(italicTemp, ";\n                    text-decoration: ").concat(textdecorationTemp, ";\n                    order: ").concat(weatherSetting.showOrder == 'type1' ? 2 : 1, ";\n                  \"\n                >").concat(args.low, "~").concat(args.high, "\u2103</div>\n                <span\n                  style=\"\n                    display: ").concat(ifWindShowFont, ";\n                    ").concat(styleSetting.windText ? "\n                          font-family: ".concat(styleSetting.windText.fontFamily, ";\n                          font-size: ").concat(styleSetting.windText.fontSize, "px;\n                          color: ").concat(styleSetting.windText.color, ";\n                          font-weight: ").concat(styleSetting.windText.fontStyle.sel, ";\n                        ") : '', "\n                    font-style: ").concat(italicWind, ";\n                    text-decoration: ").concat(textdecorationWind, ";\n                    order: 3;\n                  \"\n                >").concat(args.windText, "</span>\n              </div>\n            </div>\n          "));
          break;
        case 'type2':
          if (weatherSetting.showOrder == 'type1') {
            this.container.append("\n              <div class=\"weather-wrap\">\n                <div>\n                  <img\n                    src=\"".concat(args.src, "\"\n                    style=\"\n                      width: ").concat(styleSetting.icon.iconWidth, "px;\n                      height:").concat(styleSetting.icon.iconHeight, "px;\n                      margin-right: ").concat(styleSetting.icon.distence1, "px;\n                    \"\n                  >\n                </div>\n                <div style=\"text-align: center;\">\n                  <span\n                    style=\"\n                      display: inline-block;\n                      margin-bottom: ").concat(styleSetting.icon.distence2, "px;\n                    \"\n                  >\n                    <span\n                      style=\"\n                        display: ").concat(ifWeaShowFont, ";\n                        ").concat(styleSetting.weatherText ? "\n                              margin-right: ".concat(styleSetting.icon.distence2, "px;\n                              font-family: ").concat(styleSetting.weatherText.fontFamily, ";\n                              font-size: ").concat(styleSetting.weatherText.fontSize, "px;\n                              color: ").concat(styleSetting.weatherText.color, ";\n                              font-weight: ").concat(styleSetting.weatherText.fontStyle.sel, ";\n                            ") : '', "\n                        font-style: ").concat(italicWea, ";\n                        text-decoration: ").concat(textdecorationWea, ";\n                      \"\n                    >").concat(args.theWeather, "</span>\n                    <span\n                      style=\"\n                        display: ").concat(ifWindShowFont, ";\n                        ").concat(styleSetting.windText ? "\n                              font-family: ".concat(styleSetting.windText.fontFamily, ";\n                              font-size: ").concat(styleSetting.windText.fontSize, "px;\n                              color: ").concat(styleSetting.windText.color, ";\n                              font-weight: ").concat(styleSetting.windText.fontStyle.sel, ";\n                            ") : '', "\n                        font-style: ").concat(italicWind, ";\n                        text-decoration: ").concat(textdecorationWind, ";\n                      \"\n                    >").concat(args.windText, "</span>\n                  </span>\n                  <br>\n                  <span\n                    style=\"\n                      display: ").concat(ifTempShowFont, ";\n                      ").concat(styleSetting.tempText ? "\n                            font-family: ".concat(styleSetting.tempText.fontFamily, ";\n                            font-size: ").concat(styleSetting.tempText.fontSize, "px;\n                            color: ").concat(styleSetting.tempText.color, ";\n                            font-weight: ").concat(styleSetting.tempText.fontStyle.sel, ";\n                          ") : '', "\n                      font-style: ").concat(italicTemp, ";\n                      text-decoration: ").concat(textdecorationTemp, ";\n                    \"\n                  >").concat(args.low, "~").concat(args.high, "\u2103</span>\n                </div>\n              </div>\n            "));
          } else {
            this.container.append("\n              <div class=\"weather-wrap\">\n                <div>\n                  <img\n                    src=\"".concat(args.src, "\"\n                    style=\"\n                      width: ").concat(styleSetting.icon.iconWidth, "px;\n                      height: ").concat(styleSetting.icon.iconHeight, "px;\n                      margin-right: ").concat(styleSetting.icon.distence1, "px;\n                    \"\n                  >\n                </div>\n                <div style=\"text-align:center;\">\n                  <span\n                    style=\"\n                      display: ").concat(ifTempShowFont, ";\n                      ").concat(styleSetting.tempText ? "\n                            font-family: ".concat(styleSetting.tempText.fontFamily, ";\n                            font-size: ").concat(styleSetting.tempText.fontSize, "px;\n                            color: ").concat(styleSetting.tempText.color, ";\n                            font-weight: ").concat(styleSetting.tempText.fontStyle.sel, ";\n                          ") : '', "\n                      font-style: ").concat(italicTemp, ";\n                      text-decoration: ").concat(textdecorationTemp, ";\n                    \"\n                  >").concat(args.low, "~").concat(args.high, "\u2103</span>\n                  <br>\n                  <span\n                    style=\"\n                      display: inline-block;\n                      margin-bottom: ").concat(styleSetting.icon.distence2, "px;\n                    \"\n                  >\n                    <span\n                      style=\"\n                        display:").concat(ifWeaShowFont, ";\n                        ").concat(styleSetting.weatherText ? " \n                              margin-right: ".concat(styleSetting.icon.distence2, "px;\n                              font-family: ").concat(styleSetting.weatherText.fontFamily, ";\n                              font-size: ").concat(styleSetting.weatherText.fontSize, "px;\n                              color: ").concat(styleSetting.weatherText.color, ";\n                              font-weight: ").concat(styleSetting.weatherText.fontStyle.sel, ";\n                            ") : '', "\n                        font-style: ").concat(italicWea, ";\n                        text-decoration: ").concat(textdecorationWea, ";\n                      \"\n                    >").concat(args.theWeather, "</span>\n                    <span\n                      style=\"\n                        display: ").concat(ifWindShowFont, ";\n                        ").concat(styleSetting.windText ? "\n                              font-family: ".concat(styleSetting.windText.fontFamily, ";\n                              font-size: ").concat(styleSetting.windText.fontSize, "px;\n                              color: ").concat(styleSetting.windText.color, ";\n                              font-weight: ").concat(styleSetting.windText.fontStyle.sel, ";\n                            ") : '', "\n                        font-style: ").concat(italicWind, ";\n                        text-decoration: ").concat(textdecorationWind, ";\n                      \"\n                    >").concat(args.windText, "</span>\n                  </span>\n                </div>\n              </div>   \n            "));
          }
          break;
        case 'type3':
          this.container.append("\n            <div\n              style=\"\n                overflow: hidden;\n                height: 100%;\n                text-align: center;\n              \"\n            >\n              <div>\n                <img\n                  src=\"".concat(args.src, "\"\n                  style=\"\n                    width: ").concat(styleSetting.icon.iconWidth, "px;\n                    height: ").concat(styleSetting.icon.iconHeight, "px;\n                    margin-bottom: ").concat(styleSetting.icon.distence1, "px;\n                  \"\n                >\n              </div>\n              <div\n                style=\"\n                  margin-top: -8px;\n                  display:flex;\n                  justify-content:center;\n                \"\n              >\n                <span\n                  style=\"\n                    display:").concat(ifWeaShowFont, ";\n                    ").concat(styleSetting.weatherText ? "\n                          margin-right: ".concat(styleSetting.icon.distence2, "px;\n                          font-family: ").concat(styleSetting.weatherText.fontFamily, ";\n                          font-size: ").concat(styleSetting.weatherText.fontSize, "px;\n                          color: ").concat(styleSetting.weatherText.color, ";\n                          font-weight: ").concat(styleSetting.weatherText.fontStyle.sel, ";\n                        ") : '', "\n                    text-decoration: ").concat(textdecorationWea, ";\n                    font-style: ").concat(italicWea, ";\n                    order: ").concat(weatherSetting.showOrder == 'type1' ? 1 : 2, ";\n                  \"\n                >").concat(args.theWeather, "</span>\n                <span\n                  class=\"temp\"\n                  style=\"\n                    display: ").concat(ifTempShowFont, ";\n                    ").concat(styleSetting.tempText ? "\n                          margin-right: ".concat(styleSetting.icon.distence2, "px;\n                          font-family: ").concat(styleSetting.tempText.fontFamily, ";\n                          font-size: ").concat(styleSetting.tempText.fontSize, "px;\n                          color: ").concat(styleSetting.tempText.color, ";\n                          font-weight: ").concat(styleSetting.tempText.fontStyle.sel, ";\n                        ") : '', "\n                    font-style: ").concat(italicTemp, ";\n                    text-decoration: ").concat(textdecorationTemp, ";\n                    order: ").concat(weatherSetting.showOrder == 'type1' ? 2 : 1, ";\n                  \"\n                >").concat(args.low, "~").concat(args.high, "\u2103</span>\n                <span\n                  style=\"\n                    display: ").concat(ifWindShowFont, ";\n                    ").concat(styleSetting.windText ? "\n                          font-family: ".concat(styleSetting.windText.fontFamily, ";\n                          font-size: ").concat(styleSetting.windText.fontSize, "px;\n                          color: ").concat(styleSetting.windText.color, ";\n                          font-weight: ").concat(styleSetting.windText.fontStyle.sel, "; \n                        ") : '', "\n                    font-style: ").concat(italicWind, ";\n                    text-decoration: ").concat(textdecorationWind, ";\n                    order: 3;\n                  \"\n                >").concat(args.windText, "</span>\n              </div>\n            </div>\n          "));
          break;
        default:
          break;}

    },
    destroy: function destroy() {
      this.container.empty();
    } });return module.exports;});