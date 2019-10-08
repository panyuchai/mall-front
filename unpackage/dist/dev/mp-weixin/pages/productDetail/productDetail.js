(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/productDetail/productDetail"],{

/***/ 70:
/*!***********************************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/main.js?{"page":"pages%2FproductDetail%2FproductDetail"} ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _productDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/productDetail/productDetail.vue */ 71));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_productDetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 71:
/*!****************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/pages/productDetail/productDetail.vue ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _productDetail_vue_vue_type_template_id_53bcf1db___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productDetail.vue?vue&type=template&id=53bcf1db& */ 72);
/* harmony import */ var _productDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productDetail.vue?vue&type=script&lang=js& */ 74);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _productDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _productDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _productDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productDetail.vue?vue&type=style&index=0&lang=scss& */ 76);
/* harmony import */ var _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 23);






/* normalize component */

var component = Object(_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _productDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _productDetail_vue_vue_type_template_id_53bcf1db___WEBPACK_IMPORTED_MODULE_0__["render"],
  _productDetail_vue_vue_type_template_id_53bcf1db___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "0/HBuilderProjects/exclusive-mall-front/pages/productDetail/productDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 72:
/*!***********************************************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/pages/productDetail/productDetail.vue?vue&type=template&id=53bcf1db& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_productDetail_vue_vue_type_template_id_53bcf1db___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./productDetail.vue?vue&type=template&id=53bcf1db& */ 73);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_productDetail_vue_vue_type_template_id_53bcf1db___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_productDetail_vue_vue_type_template_id_53bcf1db___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 73:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/0/HBuilderProjects/exclusive-mall-front/pages/productDetail/productDetail.vue?vue&type=template&id=53bcf1db& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 74:
/*!*****************************************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/pages/productDetail/productDetail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_productDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./productDetail.vue?vue&type=script&lang=js& */ 75);
/* harmony import */ var _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_productDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_productDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_productDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_productDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_productDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 75:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/0/HBuilderProjects/exclusive-mall-front/pages/productDetail/productDetail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

















































































































































































































var _vuex = __webpack_require__(/*! vuex */ 14);function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var tuiIcon = function tuiIcon() {return __webpack_require__.e(/*! import() | components/icon/icon */ "components/icon/icon").then(__webpack_require__.bind(null, /*! @/components/icon/icon */ 361));};var tuiTag = function tuiTag() {return __webpack_require__.e(/*! import() | components/tag/tag */ "components/tag/tag").then(__webpack_require__.bind(null, /*! @/components/tag/tag */ 368));};var tuiBadge = function tuiBadge() {return __webpack_require__.e(/*! import() | components/badge/badge */ "components/badge/badge").then(__webpack_require__.bind(null, /*! @/components/badge/badge */ 354));};var tuiNomore = function tuiNomore() {return __webpack_require__.e(/*! import() | components/nomore/nomore */ "components/nomore/nomore").then(__webpack_require__.bind(null, /*! @/components/nomore/nomore */ 347));};var tuiButton = function tuiButton() {return __webpack_require__.e(/*! import() | components/button/button */ "components/button/button").then(__webpack_require__.bind(null, /*! @/components/button/button */ 382));};var tuiTopDropdown = function tuiTopDropdown() {return __webpack_require__.e(/*! import() | components/top-dropdown/top-dropdown */ "components/top-dropdown/top-dropdown").then(__webpack_require__.bind(null, /*! @/components/top-dropdown/top-dropdown */ 389));};var tuiBottomPopup = function tuiBottomPopup() {return __webpack_require__.e(/*! import() | components/bottom-popup/bottom-popup */ "components/bottom-popup/bottom-popup").then(__webpack_require__.bind(null, /*! @/components/bottom-popup/bottom-popup */ 396));};var tuiNumberbox = function tuiNumberbox() {return __webpack_require__.e(/*! import() | components/numberbox/numberbox */ "components/numberbox/numberbox").then(__webpack_require__.bind(null, /*! @/components/numberbox/numberbox */ 403));};var tTable = function tTable() {return __webpack_require__.e(/*! import() | components/t-table/t-table */ "components/t-table/t-table").then(__webpack_require__.bind(null, /*! @/components/t-table/t-table.vue */ 410));};var tTr = function tTr() {return __webpack_require__.e(/*! import() | components/t-table/t-tr */ "components/t-table/t-tr").then(__webpack_require__.bind(null, /*! @/components/t-table/t-tr.vue */ 417));};var tTd = function tTd() {return __webpack_require__.e(/*! import() | components/t-table/t-td */ "components/t-table/t-td").then(__webpack_require__.bind(null, /*! @/components/t-table/t-td.vue */ 424));};var _default =













{
  components: {
    tuiIcon: tuiIcon,
    tuiTag: tuiTag,
    tuiBadge: tuiBadge,
    tuiNomore: tuiNomore,
    tuiButton: tuiButton,
    tuiTopDropdown: tuiTopDropdown,
    tuiBottomPopup: tuiBottomPopup,
    tuiNumberbox: tuiNumberbox,
    tTable: tTable,
    tTr: tTr,
    tTd: tTd },

  data: function data() {
    return {
      detailTitlt: '',
      goodsInfo: {},
      showCont: true,
      height: 64, //header高度
      top: 0, //标题图标距离顶部距离
      scrollH: 0, //滚动总高度
      opcity: 0,
      iconOpcity: 0.5,
      banner: [],
      bannerIndex: 0,
      topMenu: [{
        icon: "home",
        text: "首页",
        size: 23,
        badge: 0 },

      {
        icon: "people",
        text: "我的",
        size: 26,
        badge: 0 },

      {
        icon: "cart",
        text: "购物车",
        size: 23,
        badge: 2 }],


      menuShow: false,
      popupShow: false,
      value: 1,
      collected: false,
      typeStr: '',
      subGoodsId: '' };

  },
  methods: {
    handleChooseAttrs: function handleChooseAttrs(e, j) {var _this = this;
      this.goodsInfo.attrs[j].selectAttributeValue = e;
      var typeStr = this.goodsInfo.attrs.map(function (item) {
        return item.selectAttributeValue;
      }).join(",");
      this.goodsInfo.subGoods.map(function (item) {
        if (item.attributeKey === typeStr) {
          _this.subGoodsId = item.subGoodsId;
        }
      });
      uni.setStorageSync('goodsId', this.subGoodsId);
      this.getGoodsDetail();
      this.showPopup();
    },
    bannerChange: function bannerChange(e) {
      this.bannerIndex = e.detail.current;
    },
    previewImage: function previewImage(e) {
      var picArray = [];
      this.banner.map(function (item) {
        picArray.push(item.url);
      });
      var index = e.currentTarget.dataset.index;
      uni.previewImage({
        current: this.banner[index].url,
        urls: picArray });

    },
    handleChangeCont: function handleChangeCont(num) {
      switch (num) {
        case 0:
          this.showCont = true;
          break;
        case 1:
          this.showCont = false;
          break;
        // default:
        // 	this.showCont=true;
      }
    },
    back: function back() {
      uni.navigateBack();
    },
    openMenu: function openMenu() {
      this.menuShow = true;
    },
    closeMenu: function closeMenu() {
      this.menuShow = false;
    },
    showPopup: function showPopup() {
      this.popupShow = true;
    },
    hidePopup: function hidePopup() {
      this.popupShow = false;
    },
    change: function change(e) {
      this.value = e.value;
    },
    handleAddCart: function handleAddCart(mallGoodsId) {var _this2 = this;
      if (!Boolean(this.hasLogin)) {
        uni.navigateTo({
          url: '/pages/login/login' });

        return;
      } else {
        this.$http.post('/mall/app/car/add', _objectSpread({},
        this.baseInfo, {
          accountId: this.userInfo.accountId,
          goodsCount: this.value,
          mallGoodsId: mallGoodsId })).

        then(function (res) {
          if (res.code == 0) {
            _this2.getGoodsDetail();
            uni.showToast({
              icon: 'none',
              title: '商品添加成功' });

          } else {
            console.log('productDetail.vue-- add接口添加购物车失败');
          }
        }).
        catch(function (err) {
          console.log('productDetail.vue-- add接口添加购物车错误');
        });
      }
      this.hidePopup();
    },
    linkToPayment: function linkToPayment(id) {
      if (!this.hasLogin) {
        uni.navigateTo({
          url: '/pages/login/login' });

      } else {
        var tmpList = [];
        tmpList.push({
          mallGoodsId: id,
          goodsCount: this.value });

        uni.setStorage({
          key: 'buyList',
          data: tmpList,
          success: function success() {
            uni.navigateTo({
              url: '/pages/payment/payment' });

          } });

      }
      this.hidePopup();
    },
    linkToIndex: function linkToIndex() {
      uni.reLaunch({
        url: '/pages/index/index' });

    },
    linkToUser: function linkToUser() {
      uni.reLaunch({
        url: '/pages/user/user' });

    },
    linkToCart: function linkToCart() {
      if (!this.hasLogin) {
        uni.showToast({
          icon: 'none',
          title: '请先去登陆吧~' });

      } else {
        uni.reLaunch({
          url: '/pages/car/car' });

      }
    },
    // onBridgeReady() {
    // 	WeixinJSBridge.call('hideOptionMenu');
    // },
    // weixinSendAppMessage(title,desc,link,imgUrl){
    // 	alert('weixinSendAppMessage开始---------------')
    // 	WeixinJSBridge.invoke('sendAppMessage',{
    // 	//”appid”:appId,
    // 	'img_url':'',
    // 	//”img_width”:”640″,
    // 	//”img_height”:”640″,
    // 	'link':'https://www.baidu.com/',
    // 	'desc':'描述',
    // 	'title':'123123'
    // 	});
    // },
    getGoodsDetail: function getGoodsDetail() {var _this3 = this;
      var goodsId = uni.getStorageSync('goodsId');
      this.$http.post('/mall/app/goods/detail', _objectSpread({},
      this.baseInfo, {
        goodsId: goodsId,
        accountId: this.userInfo.accountId || '' })).

      then(function (res) {
        if (res.code == 0) {
          _this3.goodsInfo = res.result;
          _this3.banner = res.result.pics;
          _this3.goodsInfo.details = _this3.goodsInfo.details.replace(/<img /g, '<img class="rich_img" ');
        } else {
          console.log('productDetail.vue-- detail接口获取数据失败');
        };
        // if (typeof WeixinJSBridge == "undefined") {
        //     if (document.addEventListener) {
        //         document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady(), false);
        //     } else if (document.attachEvent) {
        //         document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady());
        //         document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady());
        //     }
        // } else {
        //     this.onBridgeReady();
        // }
      }).
      catch(function (err) {
        console.log('productDetail.vue-- detail接口获取数据错误');
      });
    } },

  computed: _objectSpread({},
  (0, _vuex.mapState)('common', ['baseInfo', 'userInfo', 'hasLogin'])),

  onLoad: function onLoad(options) {var _this4 = this;
    uni.setStorageSync('goodsId', options.goodsId);
    this.getGoodsDetail();

    var obj = {};

    obj = wx.getMenuButtonBoundingClientRect();








    uni.getSystemInfo({
      success: function success(res) {
        _this4.width = obj.left || res.windowWidth;
        _this4.height = obj.top ? obj.top + obj.height + 8 : res.statusBarHeight + 44;
        _this4.top = obj.top ? obj.top + (obj.height - 32) / 2 : res.statusBarHeight + 6;
        _this4.scrollH = res.windowWidth;
      } });

  },
  onPageScroll: function onPageScroll(e) {
    var scroll = e.scrollTop <= 0 ? 0 : e.scrollTop;
    var opcity = scroll / this.scrollH;
    if (this.opcity >= 1 && opcity >= 1) {
      return;
    }
    this.opcity = opcity;
    this.iconOpcity = 0.5 * (1 - opcity < 0 ? 0 : 1 - opcity);
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 76:
/*!**************************************************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/pages/productDetail/productDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_productDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./productDetail.vue?vue&type=style&index=0&lang=scss& */ 77);
/* harmony import */ var _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_productDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_productDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_productDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_productDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_productDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 77:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/0/HBuilderProjects/exclusive-mall-front/pages/productDetail/productDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[70,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/productDetail/productDetail.js.map