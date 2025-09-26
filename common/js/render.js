/** 处理系统图片和网络图片 **/
function getSystemImageUrl(url) {
  return url.includes('@@@') ? `${url.replace('@@@', '/images')}` : url;
}

class ProcessConfigFn {
  constructor(cptId) {
    this.cptId = cptId;
  }
  group(cfg) {
    const config = {};
    Object.keys(cfg.children).forEach(key => {
      config[key] = this[cfg.children[key].type](cfg.children[key]);
    });
    return config;
  }
  groupSwitch(cfg) {
    if (cfg.onOff) {
      const config = {};
      Object.keys(cfg.children).forEach(key => {
        config[key] = this[cfg.children[key].type](cfg.children[key]);
      });
      return config;
    } else {
      return null;
    }
  }
  groupInner(cfg) {
    const config = {};
    Object.keys(cfg.children).forEach(key => {
      config[key] = this[cfg.children[key].type](cfg.children[key]);
    });
    return config;
  }
  groupInnerSwitch(cfg) {
    if (cfg.onOff) {
      const config = {};
      Object.keys(cfg.children).forEach(key => {
        config[key] = this[cfg.children[key].type](cfg.children[key]);
      });
      return config;
    } else {
      return null;
    }
  }
  series(cfg) {
    const config = [];
    cfg.children.forEach(item => {
      const itemConfig = {};
      Object.keys(item).forEach(key => {
        itemConfig[key] = this[item[key].type](item[key]);
      });
      config.push(itemConfig);
    });
    return config;
  }
  seriesColor(cfg) {
    const config = [];
    cfg.children.forEach(item => {
      const itemConfig = {};
      Object.keys(item).forEach(key => {
        itemConfig[key] = this[item[key].type](item[key]);
      });
      config.push(itemConfig);
    });
    return config;
  }
  areaNumber(cfg) {
    return cfg.def;
  }
  checkbox(cfg) {
    return cfg.def;
  }
  city(cfg) {
    return cfg.def;
  }
  weatherCity(cfg) {
    return cfg.def;
  }
  color(cfg) {
    return cfg.def;
  }
  colorArea(cfg) {
    return cfg.def;
  }
  colorSelect(cfg) {
    return window.colorArr.color[this.cptId][cfg.def];
  }
  configCheckbox(cfg) {
    const config = {
      control: cfg.children.control.def
    };
    Object.keys(cfg.children).forEach(item => {
      if (item !== 'control') {
        const itemConfig = {};
        Object.keys(cfg.children[item]).forEach(key => {
          itemConfig[key] = this[cfg.children[item][key].type](cfg.children[item][key]);
        });
        config[item] = itemConfig;
      }
    });
    return config;
  }
  configRadio(cfg) {
    const config = {
      control: cfg.children.control.def
    };
    Object.keys(cfg.children).forEach(item => {
      if (item !== 'control') {
        const itemConfig = {};
        Object.keys(cfg.children[item]).forEach(key => {
          itemConfig[key] = this[cfg.children[item][key].type](cfg.children[item][key]);
        });
        config[item] = itemConfig;
      }
    });
    return config;
  }
  configSelect(cfg) {
    const config = {
      control: cfg.children.control.def
    };
    Object.keys(cfg.children).forEach(item => {
      if (item !== 'control') {
        const itemConfig = {};
        Object.keys(cfg.children[item]).forEach(key => {
          itemConfig[key] = this[cfg.children[item][key].type](cfg.children[item][key]);
        });
        config[item] = itemConfig;
      }
    });
    return config;
  }
  diyColor(cfg) {
    return cfg.def;
  }
  icon(cfg) {
    return cfg.def;
  }
  image(cfg) {
    return getSystemImageUrl(cfg.def);
  }
  input(cfg) {
    return cfg.def;
  }
  number(cfg) {
    return cfg.def;
  }
  radio(cfg) {
    return cfg.def;
  }
  radioInput(cfg) {
    let value = null;
    cfg.options.forEach(item => {
      if (item.value === cfg.def) {
        value = item.name.length > 0 ? [cfg.def, item.name[1]] : [cfg.def, 0];
      }
    });
    return value;
  }
  radioBol(cfg) {
    return cfg.def;
  }
  select(cfg) {
    return cfg.def;
  }
  fontSelect(cfg) {
    return cfg.def;
  }
  selectCheckbox(cfg) {
    return cfg.def;
  }
  selectImage(cfg) {
    return cfg.def;
  }
  slider(cfg) {
    return cfg.def;
  }
  sliderNumber(cfg) {
    return cfg.def;
  }
  status(cfg) {
    return cfg.def;
  }
  switch(cfg) {
    return cfg.def;
  }
  tab(cfg) {
    return cfg.def;
  }
  tableList(cfg) {
    return cfg.def;
  }
  component(cfg) {
    const config = [];
    cfg.children.forEach(item => {
      const itemConfig = _.cloneDeep(item);
      Object.keys(item.config).forEach(key => {
        itemConfig.config[key] = this[item.config[key].type](item.config[key]);
      });
      config.push(itemConfig);
    });
    return config;
  }
  perspective(cfg) {
    return cfg.def;
  }
}

function processConfig(cfg, cptId) {
  const config = {};
  const processConfigFn = new ProcessConfigFn(cptId);
  Object.keys(cfg).forEach(key => {
    config[key] = processConfigFn[cfg[key].type](cfg[key]);
  });
  return config;
}

const toggleAnimation = {
  toggleBackDown: {
    show: 'backInDown',
    hide: 'backOutDown'
  },
  toggleBackLeft: {
    show: 'backInLeft',
    hide: 'backOutLeft'
  },
  toggleBackRight: {
    show: 'backInRight',
    hide: 'backOutRight'
  },
  toggleBackUp: {
    show: 'backInUp',
    hide: 'backOutUp'
  },
  toggleBounce: {
    show: 'bounceIn',
    hide: 'bounceOut'
  },
  toggleBounceDown: {
    show: 'bounceInDown',
    hide: 'bounceOutDown'
  },
  toggleBounceLeft: {
    show: 'bounceInLeft',
    hide: 'bounceOutLeft'
  },
  toggleBounceRight: {
    show: 'bounceInRight',
    hide: 'bounceOutRight'
  },
  toggleBounceUp: {
    show: 'bounceInUp',
    hide: 'bounceOutUp'
  },
  toggleFade: {
    show: 'fadeIn',
    hide: 'fadeOut'
  },
  toggleFadeDown: {
    show: 'fadeInDown',
    hide: 'fadeOutDown'
  },
  toggleFadeDownBig: {
    show: 'fadeInDownBig',
    hide: 'fadeOutDownBig'
  },
  toggleFadeLeft: {
    show: 'fadeInLeft',
    hide: 'fadeOutLeft'
  },
  toggleFadeLeftBig: {
    show: 'fadeInLeftBig',
    hide: 'fadeOutLeftBig'
  },
  toggleFadeRight: {
    show: 'fadeInRight',
    hide: 'fadeOutRight'
  },
  toggleFadeRightBig: {
    show: 'fadeInRightBig',
    hide: 'fadeOutRightBig'
  },
  toggleFadeUp: {
    show: 'fadeInUp',
    hide: 'fadeOutUp'
  },
  toggleFadeUpBig: {
    show: 'fadeInUpBig',
    hide: 'fadeOutUpBig'
  },
  toggleFadeTopLeft: {
    show: 'fadeInTopLeft',
    hide: 'fadeOutTopLeft'
  },
  toggleFadeTopRight: {
    show: 'fadeInTopRight',
    hide: 'fadeOutTopRight'
  },
  toggleFadeBottomLeft: {
    show: 'fadeInBottomLeft',
    hide: 'fadeOutBottomLeft'
  },
  toggleFadeBottomRight: {
    show: 'fadeInBottomRight',
    hide: 'fadeOutBottomRight'
  },
  toggleRotate: {
    show: 'rotateIn',
    hide: 'rotateOUt'
  },
  toggleRotateDownLeft: {
    show: 'rotateInDownLeft',
    hide: 'rotateOUtDownLeft'
  },
  toggleRotateDownRight: {
    show: 'rotateInDownRight',
    hide: 'rotateOUtDownRight'
  },
  toggleRotateUpLeft: {
    show: 'rotateInUpLeft',
    hide: 'rotateOUtUpLeft'
  },
  toggleRotateUpRight: {
    show: 'rotateInUpRight',
    hide: 'rotateOUtUpRight'
  },
  toggleZoom: {
    show: 'zoomIn',
    hide: 'zoomOut'
  },
  toggleZoomDown: {
    show: 'zoomInDown',
    hide: 'zoomOutDown'
  },
  toggleZoomLeft: {
    show: 'zoomInLeft',
    hide: 'zoomOutLeft'
  },
  toggleZoomRight: {
    show: 'zoomInRight',
    hide: 'zoomOutRight'
  },
  toggleZoomUp: {
    show: 'zoomInUp',
    hide: 'zoomOutUp'
  },
  toggleSlideInDown: {
    show: 'slideInDown',
    hide: 'slideOutDown'
  },
  toggleSlideInLeft: {
    show: 'slideInLeft',
    hide: 'slideOutLeft'
  },
  toggleSlideInRight: {
    show: 'slideInRight',
    hide: 'slideOutRight'
  },
  toggleSlideInUp: {
    show: 'slideInUp',
    hide: 'slideOutUp'
  }
};

let renderContainer = new Vue({
  el: '#contain',
  data: {
    pageInfo: null,
    elData: null,
    transform: null,
    cptArr: null,
    parSize: {
      x: 0,
      y: 0
    },
    shareSize: {
      x: document.body.scrollWidth,
      y: document.body.scrollHeight
    },
    nbVer: {}
  },
  computed: {
    hideY() {
      return this.pageInfo.view.scale === 2 ? true : this.shareSize.y >= this.parSize.y;
    },
    bodyStyle() {
      if (this.pageInfo) {
        if (this.pageInfo.view.backType === 0) {
          return {
            backgroundImage: `url(/images/back/${this.pageInfo.view.innerBackground})`,
            backgroundColor: this.pageInfo.view.backgroundColor
          };
        } else if (this.pageInfo.view.backType === 1) {
          return {
            backgroundImage: `url(${this.getSystemImageUrl(this.pageInfo.view.backgroundImage)})`,
            backgroundColor: this.pageInfo.view.backgroundColor
          };
        } else {
          return {
            backgroundColor: this.pageInfo.view.backgroundColor
          };
        }
      }
    },
    canStyle() {
      if (this.pageInfo) {
        this.scale();
        return {
          width: `${this.pageInfo.view.width}px`,
          height: `${this.pageInfo.view.height}px`,
          transform: this.transform
        };
      }
    }
  },
  methods: {
    scale() {
      this.parSize = {
        x: this.parSize.x - 1,
        y: this.parSize.y - 1
      };
      switch (this.pageInfo.view.scale) {
        case 0:
          this.transform = `scale(${window.innerWidth / this.pageInfo.view.width}, ${
            window.innerHeight / this.pageInfo.view.height
          })`;
          this.parSize.x = window.innerWidth;
          this.parSize.y = window.innerHeight - 4;
          break;
        case 1:
          this.transform = `scale(${window.innerWidth / this.pageInfo.view.width})`;
          this.parSize.x = window.innerWidth;
          this.parSize.y =
            (this.pageInfo.view.height * window.innerWidth) / this.pageInfo.view.width;
          break;
        case 2:
          this.transform = `scale(${window.innerHeight / this.pageInfo.view.height})`;
          this.parSize.x =
            (this.pageInfo.view.width * window.innerHeight) / this.pageInfo.view.height;
          this.parSize.y = window.innerHeight - 4;
          break;
      }
    },
    dataResolve(data, cptid) {
      return processConfig(_.cloneDeep(data), cptid);
    },
    filterMatch(mod, cptid, config, pData, data, resize) {
      if (pData.filter.onOff) {
        let fn = new Function('data', pData.filter.txt);
        mod.render(
          resize
            ? {...this.dataResolve(config, cptid), resize: true}
            : this.dataResolve(config, cptid),
          this.dataMatch(fn(data), pData.relation)
        );
      } else {
        mod.render(
          resize
            ? {...this.dataResolve(config, cptid), resize: true}
            : this.dataResolve(config, cptid),
          this.dataMatch(data, pData.relation)
        );
      }
    },
    dataMatch(data, rel) {
      if (data) {
        let res = JSON.parse(JSON.stringify(data));
        if (data.length) {
          if (typeof data === 'string') {
            res = null;
          } else {
            Object.keys(rel).forEach(key => {
              res.forEach((item, i) => {
                if (item !== null) {
                  if (rel[key] !== '') {
                    if (typeof item[rel[key]] !== 'undefined') {
                      item[key] = item[rel[key]];
                    }
                  }
                } else {
                  res.splice(i, 1);
                }
              });
            });
          }
        } else {
          Object.keys(rel).forEach(key => {
            if (rel[key] !== '') {
              if (typeof res[rel[key]] !== 'undefined') {
                res[key] = res[rel[key]];
              }
            }
          });
        }
        return res;
      } else {
        return null;
      }
    },
    groupList(com) {
      let res = [];
      com.forEach(item => {
        delete item.child;
        item.reName = false;
        item.loading = false;
        !item.loadMessage ? (item.loadMessage = null) : '';
        if (!item.parent) {
          res.push(item);
        }
      });
      res.forEach(item => {
        if (item.children) {
          com.forEach(obj => {
            if (item.children.includes(obj.eid)) {
              item.child ? item.child.push(obj) : (item.child = [obj]);
            }
          });
          item.child &&
            item.child.forEach(obj => {
              if (obj.children) {
                com.forEach(val => {
                  if (obj.children.includes(val.eid)) {
                    obj.child ? obj.child.push(val) : (obj.child = [val]);
                  }
                });
              }
            });
        }
      });
      return res;
    },
    renderFn() {
      let self = this;
      let proArr = [];
      /**
       * 加载组件节点
       * **/
      self.pageInfo.components.forEach(item => {
        if (this.$refs[item.eid]) {
          if (item.config) {
            let dom = self.$refs[item.eid][0].children[0];
            proArr.push(self.renderPlugin(dom, item));
          } else {
            pluginObj[item.eid] = {
              container: this.$refs[item.eid][0].children[0]
            };
          }
        }
      });

      /**
       * 加载逻辑节点
       * **/
      let nodeArr = nodeData.nodes
        .filter(item => item.type === 3)
        .map(
          item =>
            new Promise(resolve => {
              try {
                Cube.use(`nbp/${self.nbVer[item.nbpId].nbp}/${item.version}/index.js`, Obj => {
                  pluginObj[item.eid] = new Obj(self.nbpConfig(item.data.config));
                  resolve();
                });
              } catch (error) {
                console.error(error);
              }
            })
        );

      Promise.all([...nodeArr, ...proArr]).then(() => {
        let actionFn = this.actionFn();
        /**
         * 运行节点编程逻辑
         * 二次开发
         * **/
        nodeData.edges.forEach(item => {
          let source = pluginObj[item.sourceNode];
          let target = pluginObj[item.targetNode];
          let event = item.source.replace('bf_endpoint_', '');
          let action = item.target.replace('bf_endpoint_', '');
          let sourceIndex = nodeData.nodes.findIndex(val => val.eid === item.sourceNode);
          let targetIndex = nodeData.nodes.findIndex(val => val.eid === item.targetNode);

          sourceIndex >= 0 &&
            targetIndex >= 0 &&
            nodeData.nodes[sourceIndex].state === 1 &&
            nodeData.nodes[targetIndex].state === 1 &&
            source.on(event, data => {
              ['show', 'hide', 'toggle', 'move', 'moveTo', 'requestData', 'importData'].includes(
                action
              )
                ? (() => {
                    let comData =
                      this.pageInfo.components[
                        this.pageInfo.components.findIndex(val => val.eid === item.targetNode)
                      ];
                    if (action === 'requestData') {
                      actionFn[action].call(this, target, data, comData);
                    } else if (action === 'moveTo') {
                      actionFn[action](target, data, comData, pluginObj, this.pageInfo.components);
                    } else {
                      actionFn[action](target, data, comData, pluginObj);
                    }
                  })()
                : target[action](data, window.globalVariablePool);
            });
        });
        /**
         * 全局节点当页面加载完成时
         * **/
        let index = nodeData.nodes.findIndex(val => val.nbpId === '01001');
        index >= 0 && pluginObj[nodeData.nodes[index].eid].complete();
      });
    },
    renderPlugin(dom, item) {
      let self = this;
      return new Promise(resolve => {
        Cube.use(`${self.cptArr[item.cptid].name}/${item.version}/index.js`, function (Obj) {
          let mod = new Obj(dom);
          pluginObj[item.eid] = mod;
          resolve();
          if (item.data) {
            self.getDataSource(item, mod, true);
          } else {
            mod.render(self.dataResolve(item.config, item.cptid), '');
          }
        });
      });
    },
    getDataSource(comData, mod, first) {
      if (comData.data.dataType === 3) {
        this.getApi(comData, mod);
        first &&
          comData.data.timeout.onOff &&
          setInterval(() => {
            this.getApi(comData, mod);
          }, comData.data.timeout.time * 1000);
      } else if (comData.data.dataType === 4) {
        comData.loadMessage = null;
        first
          ? setTimeout(() => {
              mod.emit('success', this.textData[comData.data.text.id]);
            }, 200)
          : mod.emit('success', this.textData[comData.data.text.id]);
        this.$forceUpdate();
        this.filterMatch(
          mod,
          comData.cptid,
          comData.config,
          comData.data,
          this.textData[comData.data.text.id]
        );
      } else {
        comData.loadMessage = null;
        first
          ? setTimeout(() => {
              mod.emit('success', comData.data.source);
            }, 200)
          : mod.emit('success', comData.data.source);
        this.$forceUpdate();
        this.filterMatch(mod, comData.cptid, comData.config, comData.data, comData.data.source);
      }
    },
    getApi(comData, mod) {
      comData.loading = true;
      axios
        .get(comData.data.api.txt)
        .then(res => {
          comData.loading = false;
          comData.loadMessage = null;
          mod.emit('success', res.data);
          this.$forceUpdate();
          this.filterMatch(mod, comData.cptid, comData.config, comData.data, res.data);
        })
        .catch(e => {
          comData.loading = false;
          comData.loadMessage = 'api接口调用失败';
          mod.emit('error', null);
          this.$forceUpdate();
          this.filterMatch(mod, comData.cptid, comData.config, comData.data, null);
        });
    },
    actionFn() {
      const self = this;
      return {
        /**
         * 递归重绘组件
         * **/
        reloadPlugin(info, pluginObj) {
          info.child.forEach(item => {
            !item.child
              ? pluginObj[item.eid].render({}, pluginObj[item.eid].data)
              : this.reloadPlugin(item, pluginObj);
          });
        },
        /**
         * 显示
         * 判断container存不存在length
         * 存在即为组件 包含length为jquery对象
         * 不存在即为组 不包含container为dom对象
         * animation 动画类型
         * delay 延迟时间
         * duration 持续时间
         * **/
        show(target, data, comData, pluginObj) {
          this.timeAndToggle(target, 1);
          /** 判断当前组件是否是隐藏状态 如果是显示状态则不做处理 **/
          const isShow = this.getIsShow(target);
          if (isShow) {
            /**
             * isAnimate判断是否需要动画
             * isDelay判断是否需要添加delay样式
             * isDuration判断是否需要添加duration样式
             * **/
            const {isAnimate, isDelay, isDuration} = this.animateData(data);

            if (target.container.length) {
              /** 删除动画样式 **/
              this.removeAnimateJqueryElement(target);
              isAnimate &&
                (() => {
                  /** 添加动画样式 **/
                  this.addAnimateJqueryElement(target, isDelay, isDuration, data);

                  target.animateShowOrHide = true;
                })();
              target.container.parent().css({
                display: 'block'
              });
            } else {
              /** 删除动画样式 **/
              this.removeAnimateJsElement(target);

              isAnimate &&
                (() => {
                  /** 添加动画样式 **/
                  this.addAnimateJsElement(target, isDelay, isDuration, data);

                  target.animateShowOrHide = true;
                })();
              target.container.parentNode.style.display = 'block';
            }
            /**
             * 处理组件显示时重绘
             * **/
            !comData.child ? target.render({}, target.data) : this.reloadPlugin(comData, pluginObj);
          }
        },
        /**
         * 隐藏
         * animation 动画类型
         * delay 延迟时间
         * duration 持续时间
         * **/
        hide(target, data) {
          this.timeAndToggle(target, 1);
          /** 判断当前组件是否是隐藏状态 如果是隐藏状态则不做处理 **/
          const isShow = this.getIsShow(target);
          if (!isShow) {
            /** time动画持续时间 做定时器用 **/
            const time =
              _.isPlainObject(data) && typeof data.duration === 'number'
                ? Math.round(data.duration * 1000)
                : 1000;

            /**
             * isAnimate判断是否需要动画
             * isDelay判断是否需要添加delay样式
             * isDuration判断是否需要添加duration样式
             * **/
            const {isAnimate, isDelay, isDuration} = this.animateData(data);

            if (target.container.length) {
              /** 删除动画样式 **/
              this.removeAnimateJqueryElement(target);

              isAnimate
                ? (() => {
                    /** 添加动画样式 **/
                    this.addAnimateJqueryElement(target, isDelay, isDuration, data);

                    target.animateShowOrHide = false;
                    target.animateTimeout = setTimeout(() => {
                      target.container.parent().css({
                        display: 'none'
                      });
                    }, time);
                  })()
                : target.container.parent().css({
                    display: 'none'
                  });
            } else {
              /** 删除动画样式 **/
              this.removeAnimateJsElement(target);

              isAnimate
                ? (() => {
                    /** 添加动画样式 **/
                    this.addAnimateJsElement(target, isDelay, isDuration, data);

                    target.animateShowOrHide = false;
                    target.animateTimeout = setTimeout(() => {
                      target.container.parentNode.style.display = 'none';
                    }, time);
                  })()
                : (target.container.parentNode.style.display = 'none');
            }
          }
        },
        /**
         * 切换显隐
         * animation 动画类型
         * delay 延迟时间
         * duration 持续时间
         * **/
        toggle(target, data, comData, pluginObj) {
          this.timeAndToggle(target, 2);
          /** 判断执行动作是显示还是隐藏 **/
          const isShow = this.getIsShow(target);

          /**
           * isAnimate判断是否需要动画
           * isDelay判断是否需要添加delay样式
           * isDuration判断是否需要添加duration样式
           * **/
          const {isAnimate, isDelay, isDuration} = this.animateData(data);

          /** 处理动画类型名称 **/
          const animationName = isAnimate
            ? toggleAnimation.hasOwnProperty(data.animation)
              ? isShow
                ? toggleAnimation[data.animation].show
                : toggleAnimation[data.animation].hide
              : data.animation
            : '';

          /** time动画持续时间 做定时器用 **/
          const time = isDuration ? Math.round(data.duration * 1000) : 1000;

          if (target.container.length) {
            /** 删除动画样式 **/
            this.removeAnimateJqueryElement(target);

            isAnimate
              ? (() => {
                  /** 添加动画样式 **/
                  this.addAnimateJqueryElement(
                    target,
                    isDelay,
                    isDuration,
                    Object.assign(data, {animation: animationName})
                  );

                  isShow &&
                    target.container.parent().css({
                      display: 'block'
                    });

                  target.animateShowOrHide = isShow;
                  target.animateTimeout = setTimeout(() => {
                    !isShow &&
                      target.container.parent().css({
                        display: 'none'
                      });
                  }, time);
                })()
              : isShow
              ? target.container.parent().css({
                  display: 'block'
                })
              : target.container.parent().css({
                  display: 'none'
                });
          } else {
            /** 删除动画样式 **/
            this.removeAnimateJsElement(target);

            isAnimate
              ? (() => {
                  /** 添加动画样式 **/
                  this.addAnimateJsElement(
                    target,
                    isDelay,
                    isDuration,
                    Object.assign(data, {animation: animationName})
                  );

                  isShow && (target.container.parentNode.style.display = 'block');

                  target.animateShowOrHide = isShow;
                  target.animateTimeout = setTimeout(() => {
                    !isShow && (target.container.parentNode.style.display = 'none');
                  }, time);
                })()
              : isShow
              ? (target.container.parentNode.style.display = 'block')
              : (target.container.parentNode.style.display = 'none');
          }

          /**
           * 处理组件显示时重绘
           * **/
          isShow &&
            (!comData.child
              ? target.render({}, target.data)
              : this.reloadPlugin(comData, pluginObj));
        },
        /** 清除定时器根据需要预置组件显示隐藏样式 **/
        timeAndToggle(target, type) {
          clearTimeout(target.animateTimeout);
          if (type === 2 && typeof target.animateShowOrHide !== 'undefined') {
            target.container.length
              ? target.container
                  .parent()
                  .css('display', target.animateShowOrHide ? 'block' : 'none')
              : (target.container.parentNode.style.display = target.animateShowOrHide
                  ? 'block'
                  : 'none');
          }
        },
        /**
         * isAnimate判断是否需要动画
         * isDelay判断是否需要添加delay样式
         * isDuration判断是否需要添加duration样式
         * **/
        animateData(data) {
          return {
            isAnimate: _.isPlainObject(data) && typeof data.animation === 'string',
            isDelay: _.isPlainObject(data) && typeof data.delay === 'number',
            isDuration: _.isPlainObject(data) && typeof data.duration === 'number'
          };
        },
        /** 判断当前组件的显示隐藏状态 **/
        getIsShow(target) {
          return target.container.length
            ? target.container.parent().css('display') === 'none'
            : target.container.parentNode.style.display === 'none';
        },
        /** 添加js对象动画样式 **/
        addAnimateJsElement(target, isDelay, isDuration, data) {
          /** 添加--animate-delay 样式 **/
          isDelay && (target.container.parentNode.style.animationDelay = `${data.delay}s`);

          /** 添加--animate-duration 样式 **/
          isDuration && (target.container.parentNode.style.animationDuration = `${data.duration}s`);

          /** 添加animate动画类 **/
          target.container.parentNode.classList.add(
            'animate__animated',
            `animate__${data.animation}`
          );
        },
        /** 删除js对象动画样式 **/
        removeAnimateJsElement(target) {
          /** 删除--animate-delay 样式 **/
          /** 删除--animate-duration 样式 **/
          target.container.parentNode.style.animationDelay = '';
          target.container.parentNode.style.animationDuration = '';

          /** 删除animate动画类 **/
          const resultClass = target.container.parentNode.classList.value
            .split(' ')
            .filter(val => val.includes('animate__'));
          resultClass.forEach(item => {
            target.container.parentNode.classList.remove(item);
          });
        },
        /** 添加jQuery对象动画样式 **/
        addAnimateJqueryElement(target, isDelay, isDuration, data) {
          /** 添加--animate-delay 样式 **/
          isDelay && target.container.parent().css('animate-delay', `${data.delay}s`);

          /** 添加--animate-duration 样式 **/
          isDuration && target.container.parent().css('animate-duration', `${data.duration}s`);

          /** 添加animate动画类 **/
          target.container.parent().addClass(`animate__animated animate__${data.animation}`);
        },
        /** 删除jQuery对象动画样式 **/
        removeAnimateJqueryElement(target) {
          /** 删除--animate-delay 样式 **/
          target.container.parent().css('animate-delay', '');

          /** 删除--animate-duration 样式 **/
          target.container.parent().css('animate-duration', '');

          /** 删除animate动画类 **/
          const result = target.container
            .parent()[0]
            .classList.value.split(' ')
            .filter(val => val.includes('animate__'));
          result.forEach(item => {
            target.container.parent().removeClass(item);
          });
        },
        /**
         * 移动
         * **/
        move(target, data) {
          const duration = data.hasOwnProperty('duration') ? data.duration : 0.5;
          data.hasOwnProperty('x') && data.hasOwnProperty('y') && target.container.length
            ? (() => {
                const x = Number(target.container.parent().css('left').replace('px', ''));
                const y = Number(target.container.parent().css('top').replace('px', ''));
                target.container.parent().css({
                  left: `${x + data.x}px`,
                  top: `${y + data.y}px`,
                  transition: `all ${duration}s`
                });
              })()
            : (() => {
                const x = Number(target.container.parentNode.style.left.replace('px', ''));
                const y = Number(target.container.parentNode.style.top.replace('px', ''));
                target.container.parentNode.style.left = `${x + data.x}px`;
                target.container.parentNode.style.top = `${y + data.y}px`;
                target.container.parentNode.style.transition = `all ${duration}s`;
              })();
        },
        /**
         * 移动到
         * **/
        moveTo(target, data, comData, pluginObj, components) {
          const duration = data.hasOwnProperty('duration') ? data.duration : 0.5;
          let pos = {
            x: 0,
            y: 0
          };
          !!comData.parent && (pos = this.computePos(comData.parent, pluginObj, components));

          const result = comData.parent
            ? {
                x: data.x - pos.x,
                y: data.y - pos.y
              }
            : {
                x: data.x,
                y: data.y
              };
          target.container.length
            ? (() => {
                target.container.parent().css({
                  left: `${result.x}px`,
                  top: `${result.y}px`,
                  transition: `all ${duration}s`
                });
              })()
            : (() => {
                target.container.parentNode.style.left = `${result.x}px`;
                target.container.parentNode.style.top = `${result.y}px`;
                target.container.parentNode.style.transition = `all ${duration}s`;
              })();
        },
        computePos(parent, pluginObj, components) {
          let pos = {
            x: 0,
            y: 0
          };
          let posParent = {
            x: 0,
            y: 0
          };
          pluginObj[parent].container.length
            ? (pos = {
                x: Number(pluginObj[parent].container.parent().css('left').replace('px', '')),
                y: Number(pluginObj[parent].container.parent().css('top').replace('px', ''))
              })
            : (pos = {
                x: Number(pluginObj[parent].container.parentNode.style.left.replace('px', '')),
                y: Number(pluginObj[parent].container.parentNode.style.top.replace('px', ''))
              });
          const plugin = components[components.findIndex(val => val.eid === parent)];
          !!plugin.parent && (posParent = this.computePos(plugin.parent, pluginObj, components));
          return {
            x: pos.x + posParent.x,
            y: pos.y + posParent.y
          };
        },
        /**
         * 请求数据接口
         * **/
        requestData(target, comData) {
          self.getDataSource(comData, target);
        },
        /**
         * 导入数据
         * **/
        importData(target, data, comData) {
          target.render(target.config, self.dataMatch(data, comData.data.relation));
        }
      };
    },
    /**
     * 处理逻辑节点配置
     * **/
    nbpConfig(config) {
      let cfg = JSON.parse(JSON.stringify(config));
      let res = {};
      Object.keys(cfg).forEach(item => {
        if (cfg[item].def) {
          res[item] = cfg[item].def;
        } else {
          res[item] = cfg[item].children;
        }
      });
      return res;
    },
    /** 判断是否要加透视样式 **/
    isPreserve(val) {
      if (val) {
        return val.rotateX !== 0 || val.rotateY !== 0 || val.rotateZ !== 0;
      } else {
        return false;
      }
    }
  },
  beforeMount() {
    let self = this;
    Cube.use('system/version.js', cfg => {
      self.cptArr = cfg;
      setTimeout(() => {
        this.renderFn();
        window.addEventListener('resize', this.scale);
      }, 200);
    });
    Cube.use('system/colorType.js', cfg => {
      window.colorArr = cfg;
    });
    /**
     * 预加载节点组件资源
     * **/
    Cube.use('system/nbpVersion.js', ver => {
      self.nbVer = ver;
    });
  },
  created() {
    this.pageInfo = jsonData;
    this.elData = this.groupList(jsonData.components);
    this.textData = txtData ? txtData : null;
    nodeData.nodes = nodeData.nodes.map(item => {
      return [1, 2].includes(item.type)
        ? (() => {
            let index = jsonData.components.findIndex(val => val.eid === item.eid);
            return index > -1 ? item : {...item, state: 3};
          })()
        : item;
    });
  },
  mounted() {}
});
