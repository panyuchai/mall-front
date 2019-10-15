(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/payment/cashRegister"],{

/***/ 88:
/*!****************************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/main.js?{"page":"pages%2Fpayment%2FcashRegister"} ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _cashRegister = _interopRequireDefault(__webpack_require__(/*! ./pages/payment/cashRegister.vue */ 89));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_cashRegister.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 89:
/*!*********************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/pages/payment/cashRegister.vue ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cashRegister_vue_vue_type_template_id_439a7865___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cashRegister.vue?vue&type=template&id=439a7865& */ 90);
/* harmony import */ var _cashRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cashRegister.vue?vue&type=script&lang=js& */ 92);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _cashRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _cashRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _cashRegister_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cashRegister.vue?vue&type=style&index=0&lang=scss& */ 94);
/* harmony import */ var _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 23);






/* normalize component */

var component = Object(_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _cashRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cashRegister_vue_vue_type_template_id_439a7865___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cashRegister_vue_vue_type_template_id_439a7865___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "0/HBuilderProjects/exclusive-mall-front/pages/payment/cashRegister.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 90:
/*!****************************************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/pages/payment/cashRegister.vue?vue&type=template&id=439a7865& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cashRegister_vue_vue_type_template_id_439a7865___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./cashRegister.vue?vue&type=template&id=439a7865& */ 91);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cashRegister_vue_vue_type_template_id_439a7865___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cashRegister_vue_vue_type_template_id_439a7865___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 91:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/0/HBuilderProjects/exclusive-mall-front/pages/payment/cashRegister.vue?vue&type=template&id=439a7865& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 92:
/*!**********************************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/pages/payment/cashRegister.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cashRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./cashRegister.vue?vue&type=script&lang=js& */ 93);
/* harmony import */ var _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cashRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cashRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cashRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cashRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cashRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 93:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/0/HBuilderProjects/exclusive-mall-front/pages/payment/cashRegister.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

























































































































































var _vuex = __webpack_require__(/*! vuex */ 14); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { data: function data() {return { baseUrl: '', orderNo: '', mallDomain: '', payInfo: {}, initData: {}, mallId: '', token: '', payPrice: 0 };}, onBackPress: function onBackPress(eve) {alert('11111111111111');alert(eve);return true;}, methods: { onBridgeReady: function onBridgeReady() {//使用微信浏览器内置的对象调起微信支付插件，并传入统一接口返回的参数
      var that = this;WeixinJSBridge.invoke('getBrandWCPayRequest', { "appId": this.payInfo.appId, //公众号名称，由商户传入
        "timeStamp": this.payInfo.timeStamp, //时间戳，自1970年以来的秒数
        "nonceStr": this.payInfo.nonceStr, //随机字符串
        "package": this.payInfo.package, //支付验证pay_id
        "signType": this.payInfo.signType, //微信签名方式
        "paySign": this.payInfo.paySign //微信签名
      }, function (res) {if (res.err_msg == "get_brand_wcpay_request:ok") {// 使用以上方式判断前端返回,微信团队郑重提示：
          //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
          // uni.removeStorageSync('chooseAddress');
          window.location.href = '//' + that.baseUrl + '#/pages/orderDetail/orderDetail?orderId=' + that.initData.orderId + "&mallDomain=" + that.mallDomain;} else {// uni.removeStorageSync('chooseAddress');
          window.location.href = '//' + that.baseUrl + '#/pages/order/order?state=0' + "&mallDomain=" + that.mallDomain;}});}, handleSubmit: function handleSubmit() {var _this = this;var data = { accountId: this.initData.accountId, addressId: this.initData.address.addressId, balance: this.initData.balance, coupons: this.initData.coupons, credits: this.initData.credits, expressFee: this.initData.express.fee, goodsList: this.initData.goodsListDetailList, payPrice: this.payPrice, totalPrice: this.initData.totalPrice, payChannels: '6', callBackNo: this.orderNo, mallDomain: this.mallDomain, mallId: this.mallId };this.$http.post('/mall/app/order/submit', data, { header: { Authorization: 'Bearer ' + this.token } }).then(function (res) {if (res.code == 0) {_this.payInfo.appId = res.result.payResponse.wxPayResponse.appId;_this.payInfo.timeStamp = res.result.payResponse.wxPayResponse.timeStamp;_this.payInfo.nonceStr = res.result.payResponse.wxPayResponse.nonceStr;_this.payInfo.package = res.result.payResponse.wxPayResponse.packageStr;_this.payInfo.signType = res.result.payResponse.wxPayResponse.signType;_this.payInfo.paySign = res.result.payResponse.wxPayResponse.paySign;if (typeof WeixinJSBridge == "undefined") {if (document.addEventListener) {document.addEventListener('WeixinJSBridgeReady', _this.onBridgeReady, false);} else if (document.attachEvent) {document.attachEvent('WeixinJSBridgeReady', _this.onBridgeReady);document.attachEvent('onWeixinJSBridgeReady', _this.onBridgeReady);}} else {_this.onBridgeReady();}} else {uni.showToast({ icon: 'none', title: res.message });}}).catch(function (err) {console.log(err);});}, getInitInfo: function getInitInfo() {this.orderNo = uni.getStorageSync('ORDER_NO');this.mallDomain = uni.getStorageSync('mallDomain');this.token = uni.getStorageSync('token');this.payPrice = Number(uni.getStorageSync('payPrice'));this.baseUrl = uni.getStorageSync('baseUrl');}, checkMallType: function checkMallType() {var _this2 = this;this.$http.post('/mall/app/login/mall/shopmall/type', { mallDomain: this.mallDomain }).then(function (res) {if (res.code == 0) {// this.SET_BASEINFO({
          // 	...this.baseInfo,
          // 	mallDomain: this.mallDomain,
          // 	mallType: res.result.type,
          // 	mallId: res.result.mallId
          // });
          // this.SET_MALLTYPE(res.result.type);
          // this.SET_MALLID(res.result.mallId);
          // this.SET_MALLNAME(res.result.mallName);
          // this.SET_MALLLOGO(res.result.mallLogo);
          _this2.mallId = res.result.mallId;_this2.getInitData();} else {console.log('cashRegister--mallTaye 接口调用失败');}}).catch(function (err) {console.log('cashRegister--mallTaye 接口调用出错');});}, getInitData: function getInitData() {var _this3 = this;this.$http.post('/mall/app/order/checkstand', { callBackNo: this.orderNo, mallId: this.mallId, payPrice: this.payPrice }, { header: { Authorization: 'Bearer ' + this.token } }).then(function (res) {if (res.code == 0) {_this3.initData = res.result;}}).catch(function (err) {console.log(err);});} }, computed: {// ...mapState('common', ['baseInfo']),
  }, onLoad: function onLoad(options) {uni.setStorageSync('ORDER_NO', options.orderNo);uni.setStorageSync('mallDomain', options.mallDomain);uni.setStorageSync('token', decodeURIComponent(options.token));uni.setStorageSync('payPrice', options.orderPayPrice);uni.setStorageSync('baseUrl', options.baseUrl);this.getInitInfo();this.checkMallType();} };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 94:
/*!*******************************************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/pages/payment/cashRegister.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cashRegister_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./cashRegister.vue?vue&type=style&index=0&lang=scss& */ 95);
/* harmony import */ var _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cashRegister_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cashRegister_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cashRegister_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cashRegister_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cashRegister_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 95:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/0/HBuilderProjects/exclusive-mall-front/pages/payment/cashRegister.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[88,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/payment/cashRegister.js.map