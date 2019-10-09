(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"],{

/***/ 0:
/*!**********************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/main.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, createApp) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 9));

var _store = _interopRequireDefault(__webpack_require__(/*! ./store */ 17));
var _api = __webpack_require__(/*! @/api/api.js */ 15);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

_vue.default.config.productionTip = false;

var tui = {
  toast: function toast(text, duration, success) {
    uni.showToast({
      title: text,
      icon: success ? 'success' : 'none',
      duration: duration || 2000 });

  }
  // constNum: function() {
  // 	const res = uni.getSystemInfoSync();
  // 	return res.platform.toLocaleLowerCase() == "android" ? 300 : 0;
  // },
  // px:function(num){
  // 	return uni.upx2px(num)+'px';
  // },
  // interfaceUrl: function() {
  // 	//接口地址
  // 	return "http://39.108.124.252:12000/";
  // },
  // request: function(url, postData, method, type, hideLoading) {
  // 	//接口请求
  // 	if (!hideLoading) {
  // 		uni.showLoading({
  // 			mask: true,
  // 			title: '请稍候...'
  // 		})
  // 	}
  // 	return new Promise((resolve, reject) => {
  // 		uni.request({
  // 			url: this.interfaceUrl() + url,
  // 			data: postData,
  // 			header: {
  // 				'content-type': type ? 'application/x-www-form-urlencoded' : 'application/json',
  // 				'authorization': this.getToken(),
  // 				'security': 1
  // 			},
  // 			method: method, //'GET','POST'
  // 			dataType: 'json',
  // 			success: (res) => {
  // 				!hideLoading && uni.hideLoading()
  // 				if (res.data && res.data.code === 403 && !postData.modalAbate) {
  // 					uni.showModal({
  // 						title: '登录',
  // 						content: '您尚未登录，请先登录',
  // 						showCancel: false,
  // 						confirmColor: "#5677FC",
  // 						confirmText: '确定',
  // 						success(e) {
  // 							uni.redirectTo({
  // 								url: '/pages/login/login'
  // 							})
  // 						}
  // 					})
  // 				} else {
  // 					resolve(res.data)
  // 				}
  // 			},
  // 			fail: (res) => {
  // 				if (!hideLoading) {
  // 					this.toast("网络不给力，请稍后再试~")
  // 					//uni.hideLoading()
  // 				}
  // 				reject(res)
  // 			}
  // 		})
  // 	})
  // },
  // uploadFile: function(src) {
  // 	const that = this
  // 	uni.showLoading({
  // 		title: '请稍候...'
  // 	})
  // 	return new Promise((resolve, reject) => {
  // 		const uploadTask = uni.uploadFile({
  // 			url: 'https://abc.cc',
  // 			filePath: src,
  // 			name: 'file',
  // 			header: {
  // 				'content-type': 'multipart/form-data'
  // 			},
  // 			formData: {},
  // 			success: function(res) {
  // 				uni.hideLoading()
  // 				let d = JSON.parse(res.data)
  // 				if (d.code === 1) {
  // 					let fileObj = JSON.parse(d.data)[0];
  // 					//文件上传成功后把图片路径数据提交到服务器，数据提交成功后，再进行下张图片的上传
  // 					resolve(fileObj)
  // 				} else {
  // 					that.toast(res.message);
  // 				}
  // 			},
  // 			fail: function(res) {
  // 				reject(res)
  // 				uni.hideLoading();
  // 				that.toast(res.message);
  // 			}
  // 		})
  // 	})
  // },
  // setToken: function(token) {
  // 	uni.setStorageSync("token", token)
  // },
  // getToken() {
  // 	return uni.getStorageSync("token")
  // },
  // isLogin: function() {
  // 	return uni.getStorageSync("token") ? true : false
  // }
};

_vue.default.prototype.$store = _store.default;
_vue.default.prototype.$http = _api.http;
_vue.default.prototype.tui = tui;

_App.default.mpType = 'app';

var app = new _vue.default(_objectSpread({
  store: _store.default },
_App.default));

createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createApp"]))

/***/ }),

/***/ 10:
/*!***********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */ 11);
/* harmony import */ var _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 11:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/0/HBuilderProjects/exclusive-mall-front/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _store = __webpack_require__(/*! ./utils/store.js */ 12);
var _vuex = __webpack_require__(/*! vuex */ 14);
var _api = __webpack_require__(/*! ./api/api.js */ 15);function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =
{
  computed: _objectSpread({},
  (0, _vuex.mapState)("common", ['transferUrl', 'baseUrl', 'uniCode', 'mallDomain', 'baseInfo', 'hasLogin', 'isTransferPage', 'userInfo'])),

  methods: _objectSpread({},
  (0, _vuex.mapMutations)("common", ['SET_TRANSFERURL', 'SET_BASEURL', 'SET_PAYMENTURL', 'SET_USERIFNO', 'SET_BASEINFO', 'SET_HASLOGIN', 'SET_UNICODE', 'SET_TOKEN', 'SET_MALLTYPE', 'SET_MALLID', 'SET_MALLNAME', 'SET_MALLLOGO', 'SET_MALLDOMAIN', 'SET_ISTRANSFERPAGE']), {
    GetQueryString: function GetQueryString(name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
      var r = window.location.search.substr(1).match(reg);
      if (r != null) {
        return unescape(r[2]);
      }
      return null;
    },
    clearUserInfo: function clearUserInfo() {
      uni.removeStorageSync('hasLogin');
      uni.removeStorageSync('token');
      uni.removeStorageSync('uniCode');
      uni.removeStorageSync('userInfo');
      uni.removeStorageSync('baseInfo');
    },
    getMallDomain: function getMallDomain() {
      var mallDomain = this.GetQueryString('mallDomain'),
      storageMallDomain = this.mallDomain,
      host = window.location.host;
      this.SET_BASEURL(host);
      switch (host) {
        case 'localhost:8080':
          this.SET_TRANSFERURL('//192.168.1.104:8087');
          this.SET_PAYMENTURL('testpay');
          break;
        case '192.168.1.10:8888':
          this.SET_TRANSFERURL('//192.168.1.104:8087');
          this.SET_PAYMENTURL('testpay');
          break;
        default:
          this.SET_TRANSFERURL('//mall-api.yujianli.cn');
          this.SET_PAYMENTURL('pay');}

      if (!mallDomain) {
        mallDomain = window.location.hostname.split('.')[0];
        // if(mallDomain.indexOf('pay') !== -1){
        // 	mallDomain = ''
        // }
      }
      if (storageMallDomain && storageMallDomain !== mallDomain) {
        this.clearUserInfo();
      } else {
        if (uni.getStorageSync('hasLogin')) {
          this.SET_HASLOGIN(uni.getStorageSync('hasLogin'));
        }
        if (uni.getStorageSync('token')) {
          this.SET_TOKEN(uni.getStorageSync('token'));
        }
        if (uni.getStorageSync('uniCode')) {
          this.SET_UNICODE(uni.getStorageSync('uniCode'));
        }
        var storageUserInfo = (0, _store.getStore)({ name: 'userInfo' }),
        storageBaseInfo = (0, _store.getStore)({ name: 'baseInfo' });
        if (storageUserInfo) {
          this.SET_USERIFNO(storageUserInfo);
        }
        if (storageBaseInfo) {
          this.SET_BASEINFO(storageBaseInfo);
        }
      }
      this.SET_MALLDOMAIN(mallDomain);
    },
    getStorageInfo: function getStorageInfo() {
      if (uni.getStorageSync('hasLogin')) {
        this.SET_HASLOGIN(uni.getStorageSync('hasLogin'));
      }
      if (uni.getStorageSync('token')) {
        this.SET_TOKEN(uni.getStorageSync('token'));
      }
      if (uni.getStorageSync('uniCode')) {
        this.SET_UNICODE(uni.getStorageSync('uniCode'));
      }
      var storageUserInfo = (0, _store.getStore)({ name: 'userInfo' }),
      storageBaseInfo = (0, _store.getStore)({ name: 'baseInfo' });
      if (storageUserInfo) {
        this.SET_USERIFNO(storageUserInfo);
      }
      if (storageBaseInfo) {
        this.SET_BASEINFO(storageBaseInfo);
      }
    },
    checkMallType: function checkMallType() {var _this = this;
      this.$http.post('/mall/app/login/mall/shopmall/type', {
        mallDomain: this.mallDomain }).

      then(function (res) {
        if (res.code == 0) {
          _this.SET_BASEINFO(_objectSpread({},
          _this.baseInfo, {
            mallDomain: _this.mallDomain,
            mallType: res.result.type,
            mallId: res.result.mallId }));

          _this.SET_MALLTYPE(res.result.type);
          _this.SET_MALLID(res.result.mallId);
          _this.SET_MALLNAME(res.result.mallName);
          _this.SET_MALLLOGO(res.result.mallLogo);
        } else {
          console.log('login--mallTaye 接口调用失败');
        }
      }).
      catch(function (err) {
        console.log('login--mallTaye 接口调用出错');
      });
    },
    initData: function initData() {
      if (uni.getStorageSync('mallDomain')) {
        this.SET_MALLDOMAIN(uni.getStorageSync('mallDomain'));
      }

    },
    browserRedirect: function browserRedirect(options) {
      var sUserAgent = navigator.userAgent.toLowerCase();
      var bIsWeChat = sUserAgent.match(/MicroMessenger/i) == "micromessenger";
      if (bIsWeChat) {
        console.log('wx h5端');
        this.SET_BASEINFO(_objectSpread({},
        this.baseInfo, {
          scm: 'h5' }));

        var url = window.location.host;
        if (url.indexOf('pay') == -1) {
          if (!Boolean(this.hasLogin)) {
            this.defaultwxWebLogin(options);
          }
        }
      } else {
        console.log('h5端');
        this.SET_BASEINFO(_objectSpread({},
        this.baseInfo, {
          scm: 'pc' }));

        return;
      }
    },
    defaultwxWebLogin: function defaultwxWebLogin(options) {
      if (document.referrer) {
        uni.setStorageSync('referUrl', document.referrer);
      }
      var reg = /\/TransferPage\/TransferPage/ig;
      var urlPath = !reg.test(options.path);
      var isTransferPage = uni.getStorageSync('isTransferPage');
      if (isTransferPage === '') {
        isTransferPage = true;
      }
      if (urlPath && isTransferPage) {
        window.location.href = this.transferUrl + '/mall/app/login/mall/wxweb?mallDomain=' + this.mallDomain; // +'&redirectUrl='+this.transferUrl
      }
      if (isTransferPage === false) {
        uni.removeStorageSync('isTransferPage');
      }
    },
    defaultWxLogin: function defaultWxLogin() {var _this2 = this;
      uni.checkSession({
        success: function success(res) {
          console.log('App.vue--uni.login登陆状态');
          _this2.wxLogin(_this2.uniCode);
        },
        fail: function fail(err) {
          console.log('App.vue--uni.login登陆已失效');
          uni.login({
            provider: 'weixin',
            success: function success(res) {
              // console.log(res);
              _this2.SET_UNICODE(res.code);
              if (res.code) {
                _this2.wxLogin(res.code);
              } else {
                console.log("App.vue--获取code失败");
              }
            } });

        } });



    },
    wxLogin: function wxLogin(code) {var _this3 = this;
      _api.test.post('/mall/app/login/mall/wxapp', {
        mallDomain: this.mallDomain,
        jsCode: code }).

      then(function (res) {
        if (res.statusCode == 200) {
          uni.removeStorageSync('sessionid');
          uni.setStorageSync('sessionid', res.header['Set-Cookie']);
          _this3.$http.setConfig(function (config) {
            config.header['cookie'] = uni.getStorageSync('sessionid') || '';
            return config;
          });
          if (res.data.code == 0) {
            if (res.data.result.isSuccess) {
              _this3.SET_HASLOGIN(true);
              _this3.SET_TOKEN(res.data.result.token);
              _api.test.setConfig(function (config) {
                config.header['Authorization'] = 'Bearer ' + uni.getStorageSync('token');
                return config;
              });
              _this3.setUserInfo();
              console.log('App.vue--wxapp 登陆成功');
            } else {
              console.log("App.vue--wxapp 登陆失败");
            }
          } else {
            console.log('App.vue--wxapp 接口返回data出错');
          }
        } else {
          console.log('App.vue--wxapp 接口调用失败');
        }
      }).
      catch(function (err) {
        console.log('App.vue--wxapp 接口调用出错' + err);
      });
    },
    checkEnvironment: function checkEnvironment(options) {
      if (navigator && navigator.userAgent) {
        // 非小程序环境
        this.browserRedirect(options);
      } else {
        // 小程序环境
        this.SET_BASEINFO(_objectSpread({},
        this.baseInfo, {
          scm: 'wechat' }));

        if (!Boolean(this.hasLogin)) {
          this.defaultWxLogin();
        }
      };
    },
    setUserInfo: function setUserInfo() {var _this4 = this;
      this.$http.post('/mall/app/account/info').
      then(function (res) {
        if (res.code == 0) {
          if (res.result) {
            var mobilephone = res.result.mobilephone;
            var loginname = res.result.loginname;
            var accountId = res.result.id;var _res$result$customer =
            res.result.customer,customerName = _res$result$customer.customerName,wechatName = _res$result$customer.wechatName,customerSex = _res$result$customer.customerSex,customerBirthday = _res$result$customer.customerBirthday,customerImage = _res$result$customer.customerImage,customerId = _res$result$customer.customerId;
            _this4.SET_USERIFNO({ customerName: customerName, wechatName: wechatName, customerSex: customerSex, customerBirthday: customerBirthday, customerImage: customerImage, customerId: customerId });
            _this4.SET_USERIFNO(_objectSpread({},
            _this4.userInfo, {
              mobilephone: mobilephone,
              loginname: loginname,
              accountId: accountId }));

          }
        } else {
          console.log('App.vue-- info接口调用失败');
        }
      }).
      catch(function (err) {
        console.log('App.vue-- info接口调用错误');
      });
    } }),

  onLaunch: function onLaunch(options) {





    this.getStorageInfo();

    this.checkMallType();
    this.checkEnvironment(options);
  },
  onShow: function onShow() {
    console.log('App Show');
  },
  onHide: function onHide() {
    console.log('App Hide');
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 21:
/*!*******************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=css& */ 22);
/* harmony import */ var _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 22:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/0/HBuilderProjects/exclusive-mall-front/App.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 9:
/*!**********************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/App.vue ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 10);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ 21);
/* harmony import */ var _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 23);
var render, staticRenderFns





/* normalize component */

var component = Object(_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "0/HBuilderProjects/exclusive-mall-front/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

},[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/main.js.map