Cube("/image/V1.0.7/index.js", ["/node_modules/jquery/dist/jquery.js", "/node_modules/bcore/event.js", "/node_modules/lodash/lodash.js", "/node_modules/animejs/lib/anime.js"], function (module, exports, require, load, process, global) {

  function _instanceof(left, right) {if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {return !!right[Symbol.hasInstance](left);} else {return left instanceof right;}}
  var $ = require('/node_modules/jquery/dist/jquery.js');
  var Event = require('/node_modules/bcore/event.js');
  var _ = require('/node_modules/lodash/lodash.js');
  var anime = require('/node_modules/animejs/lib/anime.js');
  load('/_requireModules/css/charts.css.js', '');
  module.exports = Event.extend(function Base(container) {
    this.container = $(container);
    this.imgBaseUrl = "".concat(window.baseUrl, "image/img/");
  }, {
    render: function render(config, data) {
      var _this = this;
      this.config = _.defaultsDeep(config || {}, this.config);
      this.data = _.cloneDeep(data);
      this.destroy();
      var tar = config.links.target ? '_blank' : '_self';
      var imgSrc = data && data[0] && data[0].imgSrc ? data[0].imgSrc : config.imgSetting.src;
      imgSrc === '' && (imgSrc = "".concat(this.imgBaseUrl, "base.png"));
      var url = data && data[0] && data[0].url ? data[0].url : config.links.linkTo;
      url = url === '' ? 'javascript:;' : url.indexOf('http://') === -1 && url.indexOf('https://') === -1 ? "http://".concat(url) : url;
      this.container.append("<a href=\"".concat(url, "\" target=\"").concat(tar, "\">\n      <img class=\"img\" src=\"").concat(imgSrc, "\" style=\"\n        transform: rotate(").concat(config.imgSetting.rotate, "deg);\n        opacity: ").concat(config.imgSetting.opacity, "\"\n      />\n    </a>"));
      this.container.css({
        backgroundColor: config.background });

      this.container.find('img').on('click', function () {
        _this.emit('eventClick');
      });
      this.container.find('img').on('mouseover', function (e) {
        _this.emit('eventMouseEnter');
      });
      this.container.find('img').on('mouseout', function (e) {
        _this.emit('eventMouseLeave');
      });
      this._renderImageAnime();
    },
    _renderImageAnime: function _renderImageAnime() {
      var animeImg = null,
      option = null,
      opacity = [],
      rotateX = [],
      rotateY = [],
      rotateZ = [],
      scale = [],
      translateX = [],
      translateY = [];
      anime.remove(this.container.find('img')[0]);
      if (this.config.animation != null) {
        var value = this.config.animation.animationSeries;
        if (value && value.length > 0) {
          value.forEach(function (v) {
            opacity.push({
              value: v.opacity,
              easing: 'linear',
              duration: v.duration,
              delay: v.delay });

            rotateX.push({
              value: v.rotateX,
              easing: 'linear',
              duration: v.duration,
              delay: v.delay });

            rotateY.push({
              value: v.rotateY,
              easing: 'linear',
              duration: v.duration,
              delay: v.delay });

            rotateZ.push({
              value: v.rotateZ,
              easing: 'linear',
              duration: v.duration,
              delay: v.delay });

            scale.push({
              value: v.scale / 100,
              easing: 'linear',
              duration: v.duration,
              delay: v.delay });

            translateX.push({
              value: v.translateX,
              easing: 'linear',
              duration: v.duration,
              delay: v.delay });

            translateY.push({
              value: v.translateY,
              easing: 'linear',
              duration: v.duration,
              delay: v.delay });

          });
          option = {
            targets: this.container.find('img')[0],
            loop: this.config.animation.loop === true ? true : 1,
            opacity: opacity,
            rotateX: rotateX,
            rotateY: rotateY,
            rotateZ: rotateZ,
            scale: scale,
            translateX: translateX,
            translateY: translateY,
            autoplay: true };

        }
        animeImg = anime(option);
        animeImg.restart();
      } else {
        animeImg = null;
        option = null;
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
      this.container.find('img').off('click mouseover mouseout');
      this.container.empty();
    } });return module.exports;});