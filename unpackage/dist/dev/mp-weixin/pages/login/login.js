(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/login/login"],{

/***/ 30:
/*!*******************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/main.js?{"page":"pages%2Flogin%2Flogin"} ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _login = _interopRequireDefault(__webpack_require__(/*! ./pages/login/login.vue */ 31));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_login.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 31:
/*!************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/pages/login/login.vue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_7a6884a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=7a6884a6& */ 32);
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ 34);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&lang=scss& */ 36);
/* harmony import */ var _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 23);






/* normalize component */

var component = Object(_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_7a6884a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_7a6884a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "0/HBuilderProjects/exclusive-mall-front/pages/login/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 32:
/*!*******************************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/pages/login/login.vue?vue&type=template&id=7a6884a6& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_7a6884a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=template&id=7a6884a6& */ 33);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_7a6884a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_7a6884a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 33:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/0/HBuilderProjects/exclusive-mall-front/pages/login/login.vue?vue&type=template&id=7a6884a6& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 34:
/*!*************************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/pages/login/login.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=script&lang=js& */ 35);
/* harmony import */ var _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 35:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/0/HBuilderProjects/exclusive-mall-front/pages/login/login.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;











































var _vuex = __webpack_require__(/*! vuex */ 14);



var _store = __webpack_require__(/*! ../../utils/store.js */ 12);
var _validate = __webpack_require__(/*! ../../utils/validate.js */ 13);function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var mInput = function mInput() {return __webpack_require__.e(/*! import() | components/m-input */ "components/m-input").then(__webpack_require__.bind(null, /*! ../../components/m-input.vue */ 333));};var _default =


{
  components: {
    mInput: mInput },

  data: function data() {
    return {
      providerList: [],
      hasProvider: false,
      phoneData: {
        phone: '',
        code: '' },

      passwordData: {
        loginName: '',
        password: '' },

      isMiniprogram: false,
      isWx: false,
      isWebWx: false,
      isPhoneLogin: false,
      isPasswordLogin: false,
      wxLoginData: {},
      timeTick: false,
      countdown: 60 };

  },
  computed: _objectSpread({},
  (0, _vuex.mapState)("common", ['mallDomain', 'mallType', 'userInfo', 'baseInfo', 'mallLogo']), {
    showOauthBtn: function showOauthBtn() {
      return this.isMiniprogram;
    } }),

  methods: _objectSpread({},
  (0, _vuex.mapMutations)('common', ['SET_TOKEN', 'SET_HASLOGIN', 'login', 'SET_USERIFNO', 'SET_BASEINFO']), {
    handlePhoneLogin: function handlePhoneLogin() {
      if (this.isWx) {
        this.bindPhoneLogin();
      } else if (this.isWebWx) {
        this.wxPhoneLogin();
      } else {
        this.phoneLogin();
      }
    },
    handlePasswordLogin: function handlePasswordLogin() {
      if (this.isWx) {
        this.bindPasswordLogin();
      } else if (this.isWebWx) {
        this.wxPasswordLogin();
      } else {
        this.passwordLogin();
      }
    },
    initProvider: function initProvider() {
      // const filters = ['weixin', 'qq', 'sinaweibo'];
      // uni.getProvider({
      //     service: 'oauth',
      //     success: (res) => {
      //         if (res.provider && res.provider.length) {
      //             for (let i = 0; i < res.provider.length; i++) {
      //                 if (~filters.indexOf(res.provider[i])) {
      //                     this.providerList.push({
      //                         value: res.provider[i],
      //                         image: '../../static/img/' + res.provider[i] + '.png'
      //                     });
      //                 }
      //             }
      //             this.hasProvider = true;
      //         }
      //     },
      //     fail: (err) => {
      //         console.error('获取服务供应商失败：' + JSON.stringify(err));
      //     }
      // });

      // uni.getSetting({
      // 	success(res) {
      // 		if (res.authSetting['scope.userInfo']) {
      // 			// 已经授权，可以直接调用 getUserInfo 获取头像昵称
      // 			uni.getUserInfo({
      // 				success: function(res) {
      // 					console.log(res.userInfo)
      // 				}
      // 			})
      // 		}
      // 	}
      // })

      // uni.getProvider({
      //     service: 'oauth',
      //     success: (res) => {
      //         // console.log(res.provider)
      //         if (~res.provider.indexOf('weixin')) {
      //             uni.login({
      //                 provider: 'weixin',
      //                 success: (loginRes) => {
      //                     // console.log(JSON.stringify(loginRes.code));
      // 					this.wxInitData.jsCode=loginRes.code;
      // 					// console.log(this.wxInitData)
      // 					this.$http.post('/mall/app/login/mall/wxapp', this.wxInitData).then(res => {
      // 						console.log(res);
      // 					}).catch(err => {
      // 						console.log(err);
      // 					});
      // 					
      // 					uni.getUserInfo({  
      // 					  provider: 'weixin',
      // 					  success: (infoRes) => {
      // 						console.log(infoRes);
      // 						let {rawData, signature, encryptedData, iv} = infoRes;
      // 						this.wxLoginData.rawData=rawData;
      // 						this.wxLoginData.signature=signature;
      // 						this.wxLoginData.encryptedData=encryptedData;
      // 						this.wxLoginData.iv=iv;
      // 						this.$http.post('/mall/app/login/mall/wxapp/unionid', this.wxLoginData).then(res => {
      // 							console.log(res);
      // 						}).catch(err => {
      // 							console.log(err)
      // 						});
      // 					  },
      // 					  fail: function (err){
      // 						  console.log(err);
      // 					  }
      // 					});
      // 					
      // 					// this.$http.post('/app/login/mall/wxapp/unionid', this.wxData).then(res => {
      // 					// 	console.log(res);
      // 					// }).catch(err => {
      // 					// 	console.log(err)
      // 					// });
      //                 }
      //             });
      // 			this.hasProvider = true;
      //         }
      //     }
      // });
    },

    //       oauth(value) {
    //           uni.login({
    //               provider: value,
    //               success: (res) => {
    // console.log(res)
    //                   uni.getUserInfo({
    //                       provider: value,
    //                       success: (infoRes) => {
    //                           /**
    //                            * 实际开发中，获取用户信息后，需要将信息上报至服务端。
    //                            * 服务端可以用 userInfo.openId 作为用户的唯一标识新增或绑定用户信息。
    //                            */
    // 		console.log(111)
    //                           this.toMain(infoRes.userInfo.nickName);
    //                       }
    //                   });
    //               },
    //               fail: (err) => {
    //                   console.error('授权登录失败：' + JSON.stringify(err));
    //               }
    //           });
    //       },
    timeTicking: function timeTicking() {
      this.countdown = 60;
      var that = this;
      var timer = setInterval(function () {
        that.countdown--;
        if (that.countdown == 0) {
          clearInterval(timer);
          that.timeTick = false;
        }
      }, 1000);
    },
    sendCode: function sendCode() {var _this = this;
      if (!(0, _validate.isvalidatemobile)(this.phoneData.phone)[0]) {
        this.$http.post('/mall/app/login/mall/verifyCode', _objectSpread({},
        this.phoneData, {
          mallDomain: this.mallDomain })).

        then(function (res) {
          // console.log(res);
          if (res.code == 0) {
            uni.showToast({
              icon: 'none',
              title: res.result.content });

            _this.timeTick = true;
            _this.timeTicking();
          } else {
            uni.showToast({
              icon: 'none',
              title: '验证码发送失败' });

          }
        }).
        catch(function (err) {
          console.log("发送验证码错误" + err);
        });
      } else {
        uni.showToast({
          icon: 'none',
          title: (0, _validate.isvalidatemobile)(this.phoneData.phone)[1] });

      }
    },
    phoneLogin: function phoneLogin() {var _this2 = this;
      if (!(0, _validate.validatenull)(this.phoneData.code) && !(0, _validate.isvalidatemobile)(this.phoneData.phone)[0]) {
        this.$http.post('/mall/app/login/mall/h5', _objectSpread({
          mallDomain: this.mallDomain },
        this.phoneData)).

        then(function (res) {
          // console.log(res)
          if (res.result.isSuccess) {
            _this2.SET_HASLOGIN(true);
            _this2.SET_TOKEN(res.result.token);
            _this2.$http.setConfig(function (config) {
              // config.header['Authorization'] = 'Bearer ' + getStore({ name: 'token' });
              config.header['Authorization'] = 'Bearer ' + uni.getStorageSync('token');
              return config;
            });
            _this2.setUserInfo();
            uni.showToast({
              icon: 'none',
              title: '登陆成功' });

            setTimeout(function () {
              uni.navigateBack({
                delta: 1 });

            }, 1000);
          } else {
            console.log("login-- h5登录失败");
            if (res.result.code == '0011') {
              uni.showToast({
                icon: 'none',
                title: '验证码不正确' });

              _this2.phoneData.code = '';
            } else if (res.result.code == '0012') {
              uni.showToast({
                icon: 'none',
                title: '用户不存在' });

            }
          }
        }).
        catch(function (err) {
          console.log("login-- h5登录错误");
        });
      } else {
        uni.showToast({
          icon: 'none',
          title: '信息填写有误' });

      }
    },
    passwordLogin: function passwordLogin() {var _this3 = this;
      if (!(0, _validate.validatenull)(this.passwordData.loginName) && !(0, _validate.validatenull)(this.passwordData.password)) {
        this.$http.post('/mall/app/login/mall/h5', _objectSpread({
          mallDomain: this.mallDomain },
        this.passwordData)).

        then(function (res) {
          if (res.result.isSuccess) {
            _this3.SET_HASLOGIN(true);
            _this3.SET_TOKEN(res.result.token);
            _this3.$http.setConfig(function (config) {
              // config.header['Authorization'] = 'Bearer ' + getStore({ name: 'token' });
              config.header['Authorization'] = 'Bearer ' + uni.getStorageSync('token');
              return config;
            });
            _this3.setUserInfo();
            uni.showToast({
              icon: 'none',
              title: '登陆成功' });

            setTimeout(function () {
              uni.navigateBack({
                delta: 1 });

            }, 1000);
          } else {
            console.log("login-- h5登录失败");
            if (res.result.code == '0010') {
              uni.showToast({
                icon: 'none',
                title: '账户密码错误' });

              _this3.passwordData.password = '';
            } else if (res.result.code == '0012') {
              uni.showToast({
                icon: 'none',
                title: '用户不存在' });

            }
          }
        }).
        catch(function (err) {
          console.log("login-- h5登录错误");
        });
      } else {
        uni.showToast({
          icon: 'none',
          title: '信息填写有误' });

      }
    },
    bindPhoneLogin: function bindPhoneLogin() {var _this4 = this;
      // console.log(this.phoneData);
      if (!(0, _validate.validatenull)(this.phoneData.code) && !(0, _validate.isvalidatemobile)(this.phoneData.phone)[0]) {
        this.$http.post('/mall/app/login/mall/wxapp/userinfo', _objectSpread({
          mallDomain: this.mallDomain },
        this.phoneData)).

        then(function (res) {
          if (res.result.isSuccess) {
            _this4.SET_HASLOGIN(true);
            _this4.SET_TOKEN(res.result.token);
            _this4.$http.setConfig(function (config) {
              // config.header['Authorization'] = 'Bearer ' + getStore({ name: 'token' });
              config.header['Authorization'] = 'Bearer ' + uni.getStorageSync('token');
              return config;
            });
            _this4.setUserInfo();
            uni.showToast({
              icon: 'none',
              title: '登陆成功' });

            setTimeout(function () {
              uni.navigateBack({
                delta: 1 });

            }, 1000);
          } else {
            console.log("login-- userinfo登录失败");
            if (res.result.code == '0011') {
              uni.showToast({
                icon: 'none',
                title: '验证码不正确' });

              _this4.phoneData.code = '';
            }
          }
        }).
        catch(function (err) {
          console.log("login-- userinfo登录错误");
        });
      } else {
        uni.showToast({
          icon: 'none',
          title: '信息填写有误' });

      }
    },
    bindPasswordLogin: function bindPasswordLogin() {var _this5 = this;
      if (!(0, _validate.validatenull)(this.passwordData.loginName) && !(0, _validate.validatenull)(this.passwordData.password)) {
        this.$http.post('/mall/app/login/mall/wxapp/userinfo', _objectSpread({
          mallDomain: this.mallDomain },
        this.passwordData)).

        then(function (res) {
          if (res.result.isSuccess) {
            _this5.SET_HASLOGIN(true);
            _this5.SET_TOKEN(res.result.token);
            _this5.$http.setConfig(function (config) {
              // config.header['Authorization'] = 'Bearer ' + getStore({ name: 'token' });
              config.header['Authorization'] = 'Bearer ' + uni.getStorageSync('token');
              return config;
            });
            _this5.setUserInfo();
            uni.showToast({
              icon: 'none',
              title: '登陆成功' });

            setTimeout(function () {
              uni.navigateBack({
                delta: 1 });

            }, 1000);
          } else {
            console.log("login-- userinfo登录失败");
            if (res.result.code == '0010') {
              uni.showToast({
                icon: 'none',
                title: '账户密码错误' });

              _this5.passwordData.password = '';
            }
          }
        }).
        catch(function (err) {
          console.log("login-- userinfo登录错误");
        });
      } else {
        uni.showToast({
          icon: 'none',
          title: '信息填写有误' });

      }
    },
    // toMain(userName) {
    //     this.login(userName);
    //     /**
    //      * 强制登录时使用reLaunch方式跳转过来
    //      * 返回首页也使用reLaunch方式
    //      */
    //     if (this.forcedLogin) {
    //         uni.reLaunch({
    //             url: '../main/main',
    //         });
    //     } else {
    //         uni.navigateBack();
    //     }
    // },
    wxPhoneLogin: function wxPhoneLogin() {var _this6 = this;
      if (!(0, _validate.validatenull)(this.phoneData.code) && !(0, _validate.isvalidatemobile)(this.phoneData.phone)[0]) {
        this.$http.post('/mall/app/login/mall/wxweb/userinfo', _objectSpread({
          openid: uni.getStorageSync('openid'),
          mallDomain: this.mallDomain },
        this.phoneData)).

        then(function (res) {
          if (res.result.isSuccess) {
            _this6.SET_HASLOGIN(true);
            _this6.SET_TOKEN(res.result.token);
            _this6.$http.setConfig(function (config) {
              // config.header['Authorization'] = 'Bearer ' + getStore({ name: 'token' });
              config.header['Authorization'] = 'Bearer ' + uni.getStorageSync('token');
              return config;
            });
            _this6.setUserInfo();
            uni.showToast({
              icon: 'none',
              title: '登陆成功' });

            setTimeout(function () {
              uni.navigateBack({
                delta: 1 });

            }, 1000);
          } else {
            console.log("login-- wxweb/userinfo登录失败");
            if (res.result.code == '0011') {
              uni.showToast({
                icon: 'none',
                title: '验证码不正确' });

              _this6.phoneData.code = '';
            }
          }
        }).
        catch(function (err) {
          console.log("login-- wxweb/userinfo登录错误");
        });
      } else {
        uni.showToast({
          icon: 'none',
          title: '信息填写有误' });

      }
    },
    wxPasswordLogin: function wxPasswordLogin() {var _this7 = this;
      if (!(0, _validate.validatenull)(this.phoneData.loginName) && !(0, _validate.validatenull)(this.passwordData.password)) {
        this.$http.post('/mall/app/login/mall/wxweb/userinfo', _objectSpread({
          openid: uni.getStorageSync('openid'),
          mallDomain: this.mallDomain },
        this.passwordData)).

        then(function (res) {
          if (res.result.isSuccess) {
            _this7.SET_HASLOGIN(true);
            _this7.SET_TOKEN(res.result.token);
            _this7.$http.setConfig(function (config) {
              // config.header['Authorization'] = 'Bearer ' + getStore({ name: 'token' });
              config.header['Authorization'] = 'Bearer ' + uni.getStorageSync('token');
              return config;
            });
            _this7.setUserInfo();
            uni.showToast({
              icon: 'none',
              title: '登陆成功' });

            setTimeout(function () {
              uni.navigateBack({
                delta: 1 });

            }, 1000);
          } else {
            console.log("login-- wxweb/userinfo登录失败");
            if (res.result.code == '0010') {
              uni.showToast({
                icon: 'none',
                title: '账户密码错误' });

              _this7.passwordData.password = '';
            }
          }
        }).
        catch(function (err) {
          console.log("login-- wxweb/userinfo登录错误");
        });
      } else {
        uni.showToast({
          icon: 'none',
          title: '信息填写有误' });

      }
    },
    wxLogin: function wxLogin() {
      var othis = this;
      uni.getSetting({
        success: function success(res) {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            uni.getUserInfo({
              success: function success(res) {
                othis.wxLoginAjax(res);
              } });

          }
        } });

      // this.onGotUserInfo();

      // uni.login({
      //   provider: 'weixin',
      //   success: (res) => {
      //     if(res.code){
      // 		// this.SET_TOKEN(res.code);
      // 		this.$http.post('/mall/app/login/mall/wxapp', {
      // 			mallDomain: this.baseInfo.mallDomain,
      // 			jsCode: res.code
      // 		})
      // 		.then( resMsg => {
      // 			// console.log(resMsg)
      // 			if(resMsg.code == 0){
      // 				// let othis = this;
      // 				if(resMsg.result.isSuccess){
      // 					uni.reLaunch({
      // 					    url: 'pages/index/index'
      // 					});
      // 				}else{
      // 					uni.getSetting({
      // 						success (res){
      // 							console.log(res)
      // 							if (res.authSetting['scope.userInfo']) {
      // 								// 已经授权，可以直接调用 getUserInfo 获取头像昵称
      // 								uni.getUserInfo({
      // 									success: (res) => {
      // 										// this.login(res.userInfo);
      // 									}
      // 								})
      // 							}
      // 						}
      // 					})
      // 				}
      // 			}else{
      // 				console.log("login.vue--wxapp 接口调用失败")
      // 			}
      // 		})
      // 		.catch( errMsg => {
      // 			console.log("login.vue--wxapp 接口调用出错")
      // 		})
      // 	}else{
      // 		console.log("login.vue--获取code失败")
      // 	}
      //   }
      // });
    },
    onGotUserInfo: function onGotUserInfo(e) {
      if (e.detail.userInfo) {
        this.wxLoginAjax(e.detail);
      } else {
        console.log("login.vue-- 用户点击了拒绝授权");
      }
    },
    wxLoginAjax: function wxLoginAjax(data) {var _this8 = this;var
      rawData = data.rawData,signature = data.signature,encryptedData = data.encryptedData,iv = data.iv;
      this.wxLoginData.rawData = rawData;
      this.wxLoginData.signature = signature;
      this.wxLoginData.encryptedData = encryptedData;
      this.wxLoginData.iv = iv;

      this.$http.post('/mall/app/login/mall/wxapp/unionid', _objectSpread({},
      this.wxLoginData, {
        mallDomain: this.mallDomain })).

      then(function (res) {
        if (res.result.isSuccess) {
          uni.getUserInfo({
            success: function success(res) {
              // this.SET_USERIFNO(res.userInfo);
              _this8.setUserInfo();
            } });

          _this8.SET_HASLOGIN(true);
          _this8.SET_TOKEN(res.result.token);
          _this8.$http.setConfig(function (config) {
            // config.header['Authorization'] = 'Bearer ' + getStore({ name: 'token' }).token;
            config.header['Authorization'] = 'Bearer ' + uni.getStorageSync('token');
            return config;
          });

          uni.navigateBack({
            delta: 1 });

        } else {
          console.log("login.vue--unionid 获取token失败");
          if (res.result.code == '0020') {
            _this8.isMiniprogram = false;
            _this8.isPhoneLogin = true;
          } else if (res.result.code == '0021') {
            _this8.isMiniprogram = false;
            _this8.isPasswordLogin = true;
          }
        }
      }).
      catch(function (err) {
        console.log("login.vue--unionid 接口调用出错" + err);
      });
    },
    defaultLogin: function defaultLogin() {
      if (this.isMiniprogram) {
        this.wxLogin();
      }
    },
    checkEnvironment: function checkEnvironment() {
      if (navigator && navigator.userAgent) {
        // 非小程序
        this.browserRedirect();
      } else {
        // 小程序
        this.isMiniprogram = true;
        this.isWx = true;
      };
    },
    browserRedirect: function browserRedirect() {
      var sUserAgent = navigator.userAgent.toLowerCase();
      // var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
      // var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
      // var bIsMidp = sUserAgent.match(/midp/i) == "midp";
      // var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
      // var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
      // var bIsAndroid = sUserAgent.match(/android/i) == "android";
      // var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
      // var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
      var bIsWeChat = sUserAgent.match(/MicroMessenger/i) == "micromessenger"; //微信端
      if (bIsWeChat) {
        this.isWebWx = true;
        switch (this.mallType) {
          case 1:
            this.isPhoneLogin = true;
            break;
          case 3:
            this.isPasswordLogin = true;
            break;
          case 4:
            this.isPhoneLogin = true;
            break;
          default:
            console.log("login.vue--未标记商城类型");}

      } else {
        switch (this.mallType) {
          case 1:
            this.isPhoneLogin = true;
            break;
          case 3:
            this.isPasswordLogin = true;
            break;
          case 4:
            this.isPhoneLogin = true;
            break;
          default:
            console.log("login.vue--未标记商城类型");}

      }
    },
    setUserInfo: function setUserInfo() {var _this9 = this;
      this.$http.post('/mall/app/account/info').
      then(function (res) {
        if (res.code == 0) {
          if (res.result) {
            var mobilephone = res.result.mobilephone;
            var loginname = res.result.loginname;
            var accountId = res.result.id;var _res$result$customer =
            res.result.customer,customerName = _res$result$customer.customerName,wechatName = _res$result$customer.wechatName,customerSex = _res$result$customer.customerSex,customerBirthday = _res$result$customer.customerBirthday,customerImage = _res$result$customer.customerImage,customerId = _res$result$customer.customerId;
            _this9.SET_USERIFNO({ customerName: customerName, wechatName: wechatName, customerSex: customerSex, customerBirthday: customerBirthday, customerImage: customerImage, customerId: customerId });
            _this9.SET_USERIFNO(_objectSpread({},
            _this9.userInfo, {
              mobilephone: mobilephone,
              loginname: loginname,
              accountId: accountId }));

          }
        } else {
          console.log('login.vue-- info接口调用失败');
        }
      }).
      catch(function (err) {
        console.log('login.vue-- info接口调用错误');
      });
    } }),


  onReady: function onReady() {
    this.initProvider();
    this.checkEnvironment();
    this.defaultLogin();
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 36:
/*!**********************************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/pages/login/login.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=style&index=0&lang=scss& */ 37);
/* harmony import */ var _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 37:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/0/HBuilderProjects/exclusive-mall-front/pages/login/login.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[30,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/login.js.map