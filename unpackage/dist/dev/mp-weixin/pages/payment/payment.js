(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/payment/payment"],{

/***/ 100:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/0/HBuilderProjects/exclusive-mall-front/pages/payment/payment.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





































































































































































































var _vuex = __webpack_require__(/*! vuex */ 8);function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =


{
  data: function data() {
    return {
      // maskState: 0, //优惠券面板显示状态
      // desc: '', //备注
      // payType: 1, //1微信 2支付宝
      // couponList: [
      // 	{
      // 		title: '新用户专享优惠券',
      // 		price: 5,
      // 	},
      // 	{
      // 		title: '庆五一发一波优惠券',
      // 		price: 10,
      // 	},
      // 	{
      // 		title: '优惠券优惠券优惠券优惠券',
      // 		price: 15,
      // 	}
      // ],
      // addressData: {
      // 	name: '许小星',
      // 	mobile: '13853988752',
      // 	address: '湖北省武汉市江汉区淮海路泛海国际soho',
      // 	area: '123',
      // 	default: false,
      // },
      hasAddress: true,
      isWx: false,
      isWebWx: false,
      isWeb: false,
      remark: '',
      payData: {},
      address: {},
      goodsList: [],
      balanceType: 0,
      fee: 0 };

  },
  methods: {
    linkToCoupon: function linkToCoupon() {
      uni.redirectTo({
        url: '/pages/coupon/coupon' });

    },
    switchChange: function switchChange(e) {
      this.balanceType = Number(e.detail.value);
    },
    handleWxPay: function handleWxPay(data) {var _this = this;
      this.$http.post('/mall/app/order/submit', _objectSpread({},
      data, {
        payChannels: '8' })).

      then(function (res) {
        if (res.result.orderState == 1) {
          uni.showToast({
            icon: 'none',
            title: '订单提交成功' });

          setTimeout(function () {
            uni.redirectTo({
              url: '/pages/orderDetail/orderDetail' });

          }, 1000);
        } else {
          _this.$http.post('/mall/app/order/submit', _objectSpread({},
          data, {
            payChannels: '8',
            callBackNo: res.result.orderNo })).

          then(function (res) {
            wx.requestPayment({
              'timeStamp': res.result.payResponse.wxPayResponse.timeStamp,
              'nonceStr': res.result.payResponse.wxPayResponse.nonceStr,
              'package': res.result.payResponse.wxPayResponse.packageStr,
              'signType': res.result.payResponse.wxPayResponse.signType,
              'paySign': res.result.payResponse.wxPayResponse.paySign,
              'success': function success(sc) {
                console.log(sc);
                // wx.redirectTo({
                // 	url: '/pages/translateOrder/translateOrder'
                // })
              },
              'fail': function fail(er) {
                console.log(er);
              },
              'complete': function complete(msg) {
                console.log(msg);
              } });

          }).
          catch(function (err) {
            console.log(err);
          });
        }
      }).
      catch(function (err) {
        console.log(err);
      });
    },
    handleWxWebPay: function handleWxWebPay() {
      // function onBridgeReady(){
      //    WeixinJSBridge.invoke(
      //       'getBrandWCPayRequest', {
      //          "appId":"wx2421b1c4370ec43b",     //公众号名称，由商户传入     
      //          "timeStamp":"1395712654",         //时间戳，自1970年以来的秒数     
      //          "nonceStr":"e61463f8efa94090b1f366cccfbbb444", //随机串     
      //          "package":"prepay_id=u802345jgfjsdfgsdg888",     
      //          "signType":"MD5",         //微信签名方式：     
      //          "paySign":"70EA570631E4BB79628FBCA90534C63FF7FADD89" //微信签名 
      //       },
      //       function(res){
      //       if(res.err_msg == "get_brand_wcpay_request:ok" ){
      //       // 使用以上方式判断前端返回,微信团队郑重提示：
      //             //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
      //       } 
      //    }); 
      // }
      // if (typeof WeixinJSBridge == "undefined"){
      //    if( document.addEventListener ){
      //        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
      //    }else if (document.attachEvent){
      //        document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
      //        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
      //    }
      // }else{
      //    onBridgeReady();
      // }
    },
    handleWebPay: function handleWebPay(data) {var _this2 = this;
      this.$http.post('/mall/app/order/submit', _objectSpread({},
      data, {
        payChannels: '2' })).

      then(function (res) {
        if (res.result.orderState == 1) {
          uni.showToast({
            icon: 'none',
            title: '订单提交成功' });

          setTimeout(function () {
            uni.redirectTo({
              url: '/pages/orderDetail/orderDetail' });

          }, 1000);
        } else {
          _this2.$http.post('/mall/app/order/submit', _objectSpread({},
          data, {
            payChannels: '2',
            callBackNo: res.result.orderNo })).

          then(function (res) {
            console.log(res);
          }).
          catch(function (err) {
            console.log(err);
          });
        }

      }).
      catch(function (err) {
        console.log(err);
      });
    },
    handleSubmit: function handleSubmit() {
      if (!this.hasAddress) {
        uni.showToast({
          icon: 'none',
          title: '请先去创建地址' });

      }
      var data = _objectSpread({},
      this.baseInfo, {
        accountId: this.userInfo.accountId,
        addressId: this.address.addressId,
        balance: this.balancePay,
        isBalance: this.balanceType,
        credits: 0,
        expressFee: this.payData.express.fee,
        goodsList: this.goodsList,
        payPrice: this.payPrice,
        remark: this.remark,
        totalPrice: this.payData.totalPrice });

      if (this.isWx) {
        this.handleWxPay(data);
      } else if (this.isWebWx) {
        this.handleWxWebPay(data);
      } else if (this.isWeb) {
        this.handleWebPay(data);
      }

      // let payChannels = '',
      // 	arrStr = [];
      // 	// this.balancePay, this.payPrice
      // if(this.balanceType){
      // 	if(this.balancePay>0){
      // 		arrStr.push(0)
      // 	}
      // 	if(this.payPrice>0){
      // 		arrStr.push(0)
      // 	}
      // }else{
      // 	
      // }
      // console.log(arrStr)

      // this.$http.post('/mall/app/order/submit', {
      // 	...this.baseInfo,
      // 	accountId: this.userInfo.accountId,
      // 	// balance: this.balancePay,
      // 	isBalance: this.balanceType,
      // 	credits: 0,
      // 	expressFee: this.payData.express.fee,
      // 	goodsList: this.payData.goodsListDetailList,
      // 	payChannels: '',
      // 	payPrice: this.payPrice,
      // 	remark: this.remark,
      // 	totalPrice: this.payData.totalPrice,
      // })
      // .then( res => {
      // 	cnsole.log(res);
      // })
      // .catch( err => {
      // 	console.log(err);
      // })
    },
    checkEnvironment: function checkEnvironment() {
      if (navigator && navigator.userAgent) {
        // 非小程序
        this.browserRedirect();
      } else {
        // 小程序
        this.isWx = true;
      };
    },
    browserRedirect: function browserRedirect() {
      var sUserAgent = navigator.userAgent.toLowerCase();
      var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
      var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
      var bIsMidp = sUserAgent.match(/midp/i) == "midp";
      var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
      var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
      var bIsAndroid = sUserAgent.match(/android/i) == "android";
      var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
      var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
      var bIsWeChat = sUserAgent.match(/MicroMessenger/i) == "micromessenger"; //微信端
      if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        this.isWeb = true;
      } else if (bIsWeChat) {
        this.isWebWx = true;
      } else {
        console.log("login.vue--非h5环境");
      }
    },
    getOrderData: function getOrderData() {var _this3 = this;
      this.$http.post('/mall/app/order/confirm', _objectSpread({},
      this.baseInfo, {
        accountId: this.userInfo.accountId,
        goodsList: uni.getStorageSync('buyList')
        // goodsList: this.order_goodsList
      })).
      then(function (res) {
        console.log(res);
        if (res.code == 0) {
          if (!res.result.address) {
            _this3.hasAddress = false;
          }
          _this3.payData = res.result;
          _this3.address = res.result.address || {};
          _this3.address.addressRecipients = res.result.address && res.result.address.addressRecipients || '请先去创建地址';
          res.result.goodsListDetailList.map(function (item) {
            item.mallGoodsId = item.id;
            _this3.goodsList.push(item);
          });
          _this3.fee = res.result.express.fee;
        } else {
          console.log('payment.vue-- confirm接口获取数据失败');
        }
      }).
      catch(function (err) {
        console.log('payment.vue-- confirm接口获取数据错误' + err);
      });
    } },

  computed: _objectSpread({},
  (0, _vuex.mapState)('common', ['baseInfo', 'userInfo']), {
    // ...mapState('order', ['order_goodsList'])
    balancePay: function balancePay() {
      return this.payData.totalPrice + this.fee > this.payData.balance ? this.payData.balance : this.payData.totalPrice + this.fee;
    },
    payPrice: function payPrice() {
      return this.balanceType ? this.payData.totalPrice + this.fee - this.balancePay : this.payData.totalPrice + this.fee;
    } }),

  onShow: function onShow() {
    this.getOrderData();
  },
  onLoad: function onLoad(option) {
    this.checkEnvironment();
    //商品数据
    //let data = JSON.parse(option.data);
    //console.log(data);
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 101:
/*!**************************************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/pages/payment/payment.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./payment.vue?vue&type=style&index=0&lang=scss& */ 102);
/* harmony import */ var _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 102:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/0/HBuilderProjects/exclusive-mall-front/pages/payment/payment.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 96:
/*!****************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/pages/payment/payment.vue ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _payment_vue_vue_type_template_id_6e67e167___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.vue?vue&type=template&id=6e67e167& */ 97);
/* harmony import */ var _payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.vue?vue&type=script&lang=js& */ 99);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _payment_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment.vue?vue&type=style&index=0&lang=scss& */ 101);
/* harmony import */ var _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 19);






/* normalize component */

var component = Object(_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _payment_vue_vue_type_template_id_6e67e167___WEBPACK_IMPORTED_MODULE_0__["render"],
  _payment_vue_vue_type_template_id_6e67e167___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "0/HBuilderProjects/exclusive-mall-front/pages/payment/payment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 97:
/*!***********************************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/pages/payment/payment.vue?vue&type=template&id=6e67e167& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_template_id_6e67e167___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./payment.vue?vue&type=template&id=6e67e167& */ 98);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_template_id_6e67e167___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_template_id_6e67e167___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 98:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/0/HBuilderProjects/exclusive-mall-front/pages/payment/payment.vue?vue&type=template&id=6e67e167& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 99:
/*!*****************************************************************************************************!*\
  !*** D:/0/HBuilderProjects/exclusive-mall-front/pages/payment/payment.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../software/HBuilder/HBuilderX.2.1.3.20190723/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./payment.vue?vue&type=script&lang=js& */ 100);
/* harmony import */ var _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_software_HBuilder_HBuilderX_2_1_3_20190723_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

},[[95,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/payment/payment.js.map