(function(e){function n(n){for(var a,i,u=n[0],c=n[1],s=n[2],d=0,l=[];d<u.length;d++)i=u[d],o[i]&&l.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);g&&g(n);while(l.length)l.shift()();return r.push.apply(r,s||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,i=1;i<t.length;i++){var c=t[i];0!==o[c]&&(a=!1)}a&&(r.splice(n--,1),e=u(u.s=t[0]))}return e}var a={},o={index:0},r=[];function i(e){return u.p+"static/js/"+({"pages-TransferPage-TransferPage":"pages-TransferPage-TransferPage","pages-accountManage-accountManage":"pages-accountManage-accountManage","pages-address-address":"pages-address-address","pages-addressManage-addressManage":"pages-addressManage-addressManage","pages-car-car":"pages-car-car","pages-coupon-coupon":"pages-coupon-coupon","pages-delivery-delivery":"pages-delivery-delivery","pages-index-index":"pages-index-index","pages-login-login":"pages-login-login","pages-main-main":"pages-main-main","pages-order-order":"pages-order-order","pages-orderDetail-orderDetail":"pages-orderDetail-orderDetail","pages-payment-payment":"pages-payment-payment","pages-product-product":"pages-product-product","pages-productDetail-productDetail~pages-searchPage-searchPage":"pages-productDetail-productDetail~pages-searchPage-searchPage","pages-productDetail-productDetail":"pages-productDetail-productDetail","pages-searchPage-searchPage":"pages-searchPage-searchPage","pages-pwd-pwd":"pages-pwd-pwd","pages-reg-reg":"pages-reg-reg","pages-user-user":"pages-user-user"}[e]||e)+"."+{"pages-TransferPage-TransferPage":"68a1bdbf","pages-accountManage-accountManage":"1bcb3fdc","pages-address-address":"62f67e53","pages-addressManage-addressManage":"022940e0","pages-car-car":"e1b714fb","pages-coupon-coupon":"6139f99f","pages-delivery-delivery":"f09dbc17","pages-index-index":"ea85ebc2","pages-login-login":"65a08dc0","pages-main-main":"3047627d","pages-order-order":"11d569db","pages-orderDetail-orderDetail":"f2a801bd","pages-payment-payment":"5f251ad9","pages-product-product":"928223b0","pages-productDetail-productDetail~pages-searchPage-searchPage":"45808e09","pages-productDetail-productDetail":"a1c7420e","pages-searchPage-searchPage":"aced23fa","pages-pwd-pwd":"4f94a05b","pages-reg-reg":"d9fb5f74","pages-user-user":"dff292d6"}[e]+".js"}function u(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise(function(n,a){t=o[e]=[n,a]});n.push(t[2]=a);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e),r=function(n){c.onerror=c.onload=null,clearTimeout(s);var t=o[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,t[1](i)}o[e]=void 0}};var s=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(n)},u.m=e,u.c=a,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)u.d(t,a,function(n){return e[n]}.bind(null,a));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var d=0;d<c.length;d++)n(c[d]);var g=s;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("1544")},1544:function(e,n,t){"use strict";var a=t("288e"),o=a(t("cebc"));t("cadf"),t("551c"),t("097d"),t("2b4f"),t("1c31");var r=a(t("e143")),i=a(t("74d4")),u=a(t("faf4")),c=t("43d4");r.default.config.productionTip=!1;var s={toast:function(e,n,t){uni.showToast({title:e,icon:t?"success":"none",duration:n||2e3})}};r.default.prototype.$store=u.default,r.default.prototype.$http=c.http,r.default.prototype.tui=s,i.default.mpType="app";var d=new r.default((0,o.default)({store:u.default},i.default));d.$mount()},1893:function(e,n,t){"use strict";var a=t("2911"),o=t.n(a);o.a},"23ef":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={userInfo:function(e){return e.common.userInfo},token:function(e){return e.common.token},domain:function(e){return e.common.domain}},o=a;n.default=o},2911:function(e,n,t){var a=t("9026");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=t("4f06").default;o("71bceceb",a,!0,{sourceMap:!1,shadowMode:!1})},"2b4f":function(e,n,t){"use strict";(function(e){var n=t("288e"),a=n(t("5176")),o=n(t("e143"));e["________"]=!0,delete e["________"],e.__uniConfig={tabBar:{color:"#7F8389",selectedColor:"#EF2F0C",backgroundColor:"#ffffff",list:[{pagePath:"pages/index/index",text:"首页",iconPath:"static/img/home.png",selectedIconPath:"static/img/homeHL.png",redDot:!1,badge:""},{pagePath:"pages/product/product",text:"商品",iconPath:"static/img/product.png",selectedIconPath:"static/img/productHL.png",redDot:!1,badge:""},{pagePath:"pages/car/car",text:"购物车",iconPath:"static/img/car.png",selectedIconPath:"static/img/carHL.png",redDot:!1,badge:""},{pagePath:"pages/user/user",text:"我的",iconPath:"static/img/user.png",selectedIconPath:"static/img/userHL.png",redDot:!1,badge:""}],borderStyle:"black"},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"专属商城",navigationBarBackgroundColor:"#ffffff",backgroundColor:"#F8F8F8"},debug:!0},e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:3e3},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e3,connectSocket:6e3,uploadFile:6e3,downloadFile:6e3},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},o.default.component("pages-index-index",function(e){var n={component:t.e("pages-index-index").then(function(){return e(t("f776"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-main-main",function(e){var n={component:t.e("pages-main-main").then(function(){return e(t("1ad2"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-login-login",function(e){var n={component:t.e("pages-login-login").then(function(){return e(t("8092"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-reg-reg",function(e){var n={component:t.e("pages-reg-reg").then(function(){return e(t("7bcc"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-pwd-pwd",function(e){var n={component:t.e("pages-pwd-pwd").then(function(){return e(t("5d88"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-product-product",function(e){var n={component:t.e("pages-product-product").then(function(){return e(t("4131"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-car-car",function(e){var n={component:t.e("pages-car-car").then(function(){return e(t("861c"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-user-user",function(e){var n={component:t.e("pages-user-user").then(function(){return e(t("86ff"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-searchPage-searchPage",function(e){var n={component:Promise.all([t.e("pages-productDetail-productDetail~pages-searchPage-searchPage"),t.e("pages-searchPage-searchPage")]).then(function(){return e(t("162c"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-productDetail-productDetail",function(e){var n={component:Promise.all([t.e("pages-productDetail-productDetail~pages-searchPage-searchPage"),t.e("pages-productDetail-productDetail")]).then(function(){return e(t("2cad"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-payment-payment",function(e){var n={component:t.e("pages-payment-payment").then(function(){return e(t("b9fb"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-coupon-coupon",function(e){var n={component:t.e("pages-coupon-coupon").then(function(){return e(t("7650"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-address-address",function(e){var n={component:t.e("pages-address-address").then(function(){return e(t("9a8d"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-addressManage-addressManage",function(e){var n={component:t.e("pages-addressManage-addressManage").then(function(){return e(t("4b42"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-accountManage-accountManage",function(e){var n={component:t.e("pages-accountManage-accountManage").then(function(){return e(t("e92d"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-order-order",function(e){var n={component:t.e("pages-order-order").then(function(){return e(t("1711"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-orderDetail-orderDetail",function(e){var n={component:t.e("pages-orderDetail-orderDetail").then(function(){return e(t("e70f"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-delivery-delivery",function(e){var n={component:t.e("pages-delivery-delivery").then(function(){return e(t("3533"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-TransferPage-TransferPage",function(e){var n={component:t.e("pages-TransferPage-TransferPage").then(function(){return e(t("e3fc"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:(0,a.default)({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTitleText:"专属商城"})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:44}},{path:"/pages/main/main",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"登录模板"})},[e("pages-main-main",{slot:"page"})])}},meta:{name:"pages-main-main",isNVue:!1,pagePath:"pages/main/main",windowTop:44}},{path:"/pages/login/login",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"登录"})},[e("pages-login-login",{slot:"page"})])}},meta:{name:"pages-login-login",isNVue:!1,pagePath:"pages/login/login",windowTop:44}},{path:"/pages/reg/reg",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"注册"})},[e("pages-reg-reg",{slot:"page"})])}},meta:{name:"pages-reg-reg",isNVue:!1,pagePath:"pages/reg/reg",windowTop:44}},{path:"/pages/pwd/pwd",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"找回密码"})},[e("pages-pwd-pwd",{slot:"page"})])}},meta:{name:"pages-pwd-pwd",isNVue:!1,pagePath:"pages/pwd/pwd",windowTop:44}},{path:"/pages/product/product",component:{render:function(e){return e("Page",{props:(0,a.default)({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"商品"})},[e("pages-product-product",{slot:"page"})])}},meta:{id:2,name:"pages-product-product",isNVue:!1,pagePath:"pages/product/product",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/car/car",component:{render:function(e){return e("Page",{props:(0,a.default)({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{navigationBarTitleText:"购物车"})},[e("pages-car-car",{slot:"page"})])}},meta:{id:3,name:"pages-car-car",isNVue:!1,pagePath:"pages/car/car",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:44}},{path:"/pages/user/user",component:{render:function(e){return e("Page",{props:(0,a.default)({isQuit:!0,isTabBar:!0,tabBarIndex:3},__uniConfig.globalStyle,{navigationBarTitleText:"个人中心"})},[e("pages-user-user",{slot:"page"})])}},meta:{id:4,name:"pages-user-user",isNVue:!1,pagePath:"pages/user/user",isQuit:!0,isTabBar:!0,tabBarIndex:3,windowTop:44}},{path:"/pages/searchPage/searchPage",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"搜索"})},[e("pages-searchPage-searchPage",{slot:"page"})])}},meta:{name:"pages-searchPage-searchPage",isNVue:!1,pagePath:"pages/searchPage/searchPage",windowTop:44}},{path:"/pages/productDetail/productDetail",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-productDetail-productDetail",{slot:"page"})])}},meta:{name:"pages-productDetail-productDetail",isNVue:!1,pagePath:"pages/productDetail/productDetail",windowTop:0}},{path:"/pages/payment/payment",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"填写订单"})},[e("pages-payment-payment",{slot:"page"})])}},meta:{name:"pages-payment-payment",isNVue:!1,pagePath:"pages/payment/payment",windowTop:44}},{path:"/pages/coupon/coupon",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"优惠券"})},[e("pages-coupon-coupon",{slot:"page"})])}},meta:{name:"pages-coupon-coupon",isNVue:!1,pagePath:"pages/coupon/coupon",windowTop:44}},{path:"/pages/address/address",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"收货地址"})},[e("pages-address-address",{slot:"page"})])}},meta:{name:"pages-address-address",isNVue:!1,pagePath:"pages/address/address",windowTop:44}},{path:"/pages/addressManage/addressManage",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"收货地址"})},[e("pages-addressManage-addressManage",{slot:"page"})])}},meta:{name:"pages-addressManage-addressManage",isNVue:!1,pagePath:"pages/addressManage/addressManage",windowTop:44}},{path:"/pages/accountManage/accountManage",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"账号管理"})},[e("pages-accountManage-accountManage",{slot:"page"})])}},meta:{name:"pages-accountManage-accountManage",isNVue:!1,pagePath:"pages/accountManage/accountManage",windowTop:44}},{path:"/pages/order/order",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"我的订单"})},[e("pages-order-order",{slot:"page"})])}},meta:{name:"pages-order-order",isNVue:!1,pagePath:"pages/order/order",windowTop:44}},{path:"/pages/orderDetail/orderDetail",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"订单详情"})},[e("pages-orderDetail-orderDetail",{slot:"page"})])}},meta:{name:"pages-orderDetail-orderDetail",isNVue:!1,pagePath:"pages/orderDetail/orderDetail",windowTop:44}},{path:"/pages/delivery/delivery",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"物流详情"})},[e("pages-delivery-delivery",{slot:"page"})])}},meta:{name:"pages-delivery-delivery",isNVue:!1,pagePath:"pages/delivery/delivery",windowTop:44}},{path:"/pages/TransferPage/TransferPage",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{})},[e("pages-TransferPage-TransferPage",{slot:"page"})])}},meta:{name:"pages-TransferPage-TransferPage",isNVue:!1,pagePath:"pages/TransferPage/TransferPage",windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}]}).call(this,t("c8ba"))},"43d4":function(e,n,t){"use strict";var a=t("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.test=n.http=void 0;var o=a(t("cebc")),r=a(t("9abc")),i=t("a76c"),u=a(t("faf4")),c=new r.default;n.test=c,c.setConfig(function(e){return e.baseUrl="http://192.168.1.135:8086",e.header={a:4,b:4},e}),c.interceptor.request(function(e,n){return u.default.getters.token&&(e.header=(0,o.default)({},e.header,{Authorization:"Bearer "+(0,i.getStore)({name:"token"}).token})),e}),c.interceptor.response(function(e){return e});var s=new r.default;n.http=s,s.setConfig(function(e){return e.baseUrl="http://192.168.1.135:8086",e.header={a:5},e}),s.interceptor.request(function(e,n){return u.default.getters.token&&(e.header=(0,o.default)({},e.header,{Authorization:"Bearer "+(0,i.getStore)({name:"token"}).token})),e}),s.interceptor.response(function(e){return e.data})},4785:function(e,n,t){"use strict";var a=t("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.isvalidUsername=r,n.validateURL=i,n.validateLowerCase=u,n.validateUpperCase=c,n.validatAlphabets=s,n.validateEmail=g,n.cardid=l,n.isvalidatemobile=p,n.validatename=f,n.validatenum=m,n.validatenumord=y,n.validatenull=_,n.vaildatePc=void 0;var o=a(t("f499"));function r(e){var n=["admin","editor"];return n.indexOf(e.trim())>=0}function i(e){var n=/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;return n.test(e)}function u(e){var n=/^[a-z]+$/;return n.test(e)}function c(e){var n=/^[A-Z]+$/;return n.test(e)}function s(e){var n=/^[A-Za-z]+$/;return n.test(e)}t("28a5");var d=function(){for(var e=navigator.userAgent,n=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],t=!0,a=0;a<n.length;a++)if(e.indexOf(n[a])>0){t=!1;break}return t};function g(e){var n=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return n.test(e)}function l(e){var n=[],t=!0,a="",o={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};if(_(e))a="证件号码不能为空";else if(18==e.length)if(e&&/(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e))if(o[e.substr(0,2)]){e=e.split("");for(var r=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],i=[1,0,"X",9,8,7,6,5,4,3,2,"x"],u=0,c=0,s=0,d=0;d<17;d++)c=e[d],s=r[d],u+=c*s;i[u%11];i[u%11]!=e[17]?a="证件号码校验位错误":t=!1}else a="地址编码错误";else a="证件号码格式错误";else a="证件号码长度不为18位";return n.push(t),n.push(a),n}function p(e){var n=[],t=!0,a="",o=/^0\d{2,3}-?\d{7,8}$/;return _(e)?a="手机号码不能为空":11==e.length?o.test(e)?a="手机号码格式不正确":t=!1:a="手机号码长度不为11位",n.push(t),n.push(a),n}function f(e){var n=/^[\u4e00-\u9fa5]{2,4}$/;return!!n.test(e)}function m(e,n){var t=/[^\d.]/g;if(1==n){if(!t.test(e))return!1}else if(2==n&&(t=/[^\d]/g,!t.test(e)))return!1;return!0}function y(e,n){var t=/[^\d.]/g;if(1==n){if(!t.test(e))return!1}else if(2==n&&(t=/[^\d.]/g,!t.test(e)))return!1;return!0}function _(e){if("boolean"==typeof e)return!1;if(e instanceof Array){if(0==e.length)return!0}else{if(!(e instanceof Object))return"null"==e||null==e||"undefined"==e||void 0==e||""==e;if("{}"===(0,o.default)(e))return!0}return!1}n.vaildatePc=d},"4b3b":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},o=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return o})},"63a6":function(e,n,t){"use strict";t.r(n);var a=t("98df"),o=t.n(a);for(var r in a)"default"!==r&&function(e){t.d(n,e,function(){return a[e]})}(r);n["default"]=o.a},"6d80":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t("a76c"),o={order_goodsList:[]},r={SET_ORDER_GOODSLIST:function(e,n){e.order_goodsList=n,(0,a.setStore)({name:"order_goodsList",content:e.data,type:"sync"})}},i={},u={},c={state:o,actions:i,getters:u,mutations:r,namespaced:!0};n.default=c},"74d4":function(e,n,t){"use strict";t.r(n);var a=t("4b3b"),o=t("63a6");for(var r in o)"default"!==r&&function(e){t.d(n,e,function(){return o[e]})}(r);t("1893");var i=t("2877"),u=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);n["default"]=u.exports},9026:function(e,n,t){n=e.exports=t("2350")(!1),n.push([e.i,'@font-face{font-family:iconfont;  /* project id 1322804 */src:url(//at.alicdn.com/t/font_1322804_pywvyfmt3ji.eot);src:url(//at.alicdn.com/t/font_1322804_pywvyfmt3ji.eot#iefix) format("embedded-opentype"),url(//at.alicdn.com/t/font_1322804_pywvyfmt3ji.woff2) format("woff2"),url(//at.alicdn.com/t/font_1322804_pywvyfmt3ji.woff) format("woff"),url(//at.alicdn.com/t/font_1322804_pywvyfmt3ji.ttf) format("truetype"),url(//at.alicdn.com/t/font_1322804_pywvyfmt3ji.svg#iconfont) format("svg")}.iconfont{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-duigou:before{content:"\\E60A"}.icon-sousuo:before{content:"\\E62A"}.icon-jia:before{content:"\\E632"}.icon-duihao:before{content:"\\E620"}.icon-shezhi:before{content:"\\E637"}.icon-shouye:before{content:"\\E6A5"}.icon-weibiaoti2fuzhi05:before{content:"\\E622"}.icon-fanhui1:before{content:"\\E61E"}.icon-gengduo:before{content:"\\E639"}.icon-shangpin-tianchong:before{content:"\\E634"}.icon-che-tianchong:before{content:"\\E65C"}.icon-icon-:before{content:"\\E612"}.icon-xinxi:before{content:"\\E758"}.icon-fenxiang:before{content:"\\E614"}.icon-paijiantixing:before{content:"\\E616"}.icon-shouqi:before{content:"\\E61F"}.icon-dingdanwancheng:before{content:"\\E644"}.icon-shanchu:before{content:"\\E626"}.icon-icon:before{content:"\\E611"}.icon-shoucang:before{content:"\\E615"}.icon-biaodiandidian:before{content:"\\E65E"}.icon-jian:before{content:"\\E64E"}.icon-icon_sanjiaoxing:before{content:"\\E6BB"}.icon-tianchongxing-:before{content:"\\E62C"}.icon-wode:before{content:"\\E67B"}.icon-huochedong:before{content:"\\E640"}.icon-gouwuche:before{content:"\\E613"}.icon-arrowRight:before{content:"\\E60F"}.icon-shouhou:before{content:"\\E87E"}\n\n/*每个页面公共css */uni-page-body{min-height:100%;background-color:#fff}\n\n\n\n\n\n/* 原生组件模式下需要注意组件外部样式 */\n\n/* m-input {\n\twidth: 100%;\n\tmin-height: 100%;\n\tdisplay: flex;\n}\n\n.content {\n\tdisplay: flex;\n\tflex: 1;\n\tflex-direction: column;\n\tbackground-color: #efeff4;\n\tpadding: 20upx;\n}\n\n.input-group {\n\tbackground-color: #ffffff;\n\tmargin-top: 40upx;\n\tposition: relative;\n}\n\n.input-group::before {\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n\tleft: 0;\n\theight: 1upx;\n\tcontent: \'\';\n\t-webkit-transform: scaleY(.5);\n\ttransform: scaleY(.5);\n\tbackground-color: #c8c7cc;\n}\n\n.input-group::after {\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\theight: 1upx;\n\tcontent: \'\';\n\t-webkit-transform: scaleY(.5);\n\ttransform: scaleY(.5);\n\tbackground-color: #c8c7cc;\n}\n\n.input-row {\n\tdisplay: flex;\n\tflex-direction: row;\n\tposition: relative;\n}\n\n.input-row .title {\n\twidth: 20%;\n\theight: 50upx;\n\tmin-height: 50upx;\n\tpadding: 15upx 0;\n\tpadding-left: 30upx;\n\tline-height: 50upx;\n}\n\n.input-row.border::after {\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tleft: 15upx;\n\theight: 1upx;\n\tcontent: \'\';\n\t-webkit-transform: scaleY(.5);\n\ttransform: scaleY(.5);\n\tbackground-color: #c8c7cc;\n}\n\n.btn-row {\n\tmargin-top: 50upx;\n\tpadding: 20upx;\n}\n\nbutton.primary {\n\tbackground-color: #0faeff;\n} */body.?%PAGE?%{background-color:#fff;background-color:#fff}',""])},"98df":function(e,n,t){"use strict";var a=t("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,t("4917");var o=a(t("cebc")),r=t("2f62"),i=t("43d4"),u={computed:(0,o.default)({},(0,r.mapState)("common",["uniCode","mallDomain","baseInfo","hasLogin"])),methods:(0,o.default)({},(0,r.mapMutations)("common",["SET_BASEINFO","SET_USERIFNO","SET_UNICODE","SET_MALLDOMAIN","SET_MALLTYPE","SET_MALLID"]),{checkMallType:function(){var e=this;this.$http.post("/mall/app/login/mall/shopmall/type",{mallDomain:this.mallDomain}).then(function(n){0==n.code?(e.SET_BASEINFO((0,o.default)({},e.baseInfo,{mallDomain:e.mallDomain,mallType:n.result.type,mallId:n.result.mallId})),e.SET_MALLTYPE(n.result.type),e.SET_MALLID(n.result.mallId)):console.log("login--mallTaye 接口调用失败")}).catch(function(e){console.log("login--mallTaye 接口调用出错")})}}),onLaunch:function(e){this.checkMallType(),console.log("App Launch");var n=this;function t(){var e=navigator.userAgent.toLowerCase(),t="ipad"==e.match(/ipad/i),r="iphone os"==e.match(/iphone os/i),i="midp"==e.match(/midp/i),u="rv:1.2.3.4"==e.match(/rv:1.2.3.4/i),c="ucweb"==e.match(/ucweb/i),s="android"==e.match(/android/i),d="windows ce"==e.match(/windows ce/i),g="windows mobile"==e.match(/windows mobile/i),l="micromessenger"==e.match(/MicroMessenger/i);t||r||i||u||c||s||d||g?(console.log("h5端"),n.SET_BASEINFO((0,o.default)({},n.baseInfo,{scm:"pc"}))):l?(n.SET_BASEINFO((0,o.default)({},n.baseInfo,{scm:"h5"})),n.hasLogin||a()):console.log("App.vue--非h5环境")}function a(){window.location.href="http://192.168.1.135:8086/mall/app/login/mall/wxweb?mallDomain="+n.baseInfo.mallDomain}function r(){function e(e){i.test.post("/mall/app/login/mall/wxapp",{mallDomain:n.mallDomain,jsCode:e}).then(function(e){200==e.statusCode?(uni.removeStorageSync("sessionid"),uni.setStorageSync("sessionid",e.header["Set-Cookie"]),n.$http.setConfig(function(e){return e.header["cookie"]=uni.getStorageSync("sessionid")||"",e}),0==e.data.code?e.data.result.isSuccess?console.log("App.vue--wxapp 登陆成功"):console.log("App.vue--wxapp 登陆失败"):console.log("App.vue--wxapp 接口返回data出错")):console.log("App.vue--wxapp 接口调用失败")}).catch(function(e){console.log("App.vue--wxapp 接口调用出错"+e)})}uni.checkSession({success:function(t){console.log("App.vue--uni.login登陆状态"),e(n.uniCode)},fail:function(t){console.log("App.vue--uni.login登陆已失效"),uni.login({provider:"weixin",success:function(t){n.SET_UNICODE(t.code),t.code?e(t.code):console.log("App.vue--获取code失败")}})}})}navigator&&navigator.userAgent?t():(this.SET_BASEINFO((0,o.default)({},this.baseInfo,{scm:"wechat"})),this.hasLogin||r())},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=u},"9abc":function(e,n,t){"use strict";var a=t("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t("cebc")),r=a(t("795b")),i=a(t("d225")),u=a(t("b0b4")),c=a(t("bd86")),s=function(){function e(){var n=this;(0,i.default)(this,e),(0,c.default)(this,"config",{baseUrl:"",header:{"Content-Type":"application/json;charset=UTF-8"},method:"GET",dataType:"json",responseType:"text"}),(0,c.default)(this,"interceptor",{request:function(e){e&&(n.requestBeforeFun=e)},response:function(e){e&&(n.requestComFun=e)}})}return(0,u.default)(e,[{key:"setConfig",value:function(e){this.config=e(this.config)}},{key:"request",value:function(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.baseUrl=this.config.baseUrl,t.dataType=t.dataType||this.config.dataType,t.responseType=t.responseType||this.config.responseType,t.url=e.posUrl(t.url)?t.url:t.baseUrl+t.url,t.data=t.data||{},t.header=t.header||this.config.header,t.method=t.method||this.config.method,new r.default(function(e,a){var r=!0,i=null;t.complete=function(t){var o=t.statusCode;t.config=i,t=n.requestComFun(t),200===o?e(t):a(t)};var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,o={errMsg:e,config:n};a(o),r=!1};i=(0,o.default)({},n.requestBeforeFun(t,u)),r&&uni.request(i)})}},{key:"get",value:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,o.default)({url:e,data:n,method:"GET"},t))}},{key:"post",value:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,o.default)({url:e,data:n,method:"POST"},t))}}],[{key:"posUrl",value:function(e){return/(http|https):\/\/([\w.]+\/?)\S*/.test(e)}},{key:"requestBeforeFun",value:function(e){return e}},{key:"requestComFun",value:function(e){return e}}]),e}();n.default=s},a76c:function(e,n,t){"use strict";var a=t("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.removeStore=n.getStore=n.setStore=void 0,t("c5f6");var o=a(t("f499"));t("7f7f");var r=t("4785"),i=function(e){var n=e.name,t=e.content,a=e.type,r=(e.datetime,{dataType:typeof t,content:t,type:a,datetime:(new Date).getTime()});a?uni.setStorageSync(n,(0,o.default)(r)):uni.setStorage(n,(0,o.default)(r))};n.setStore=i;var u=function(e){var n,t=e.name,a=(e.type,{});if(a=uni.getStorageSync(t),(0,r.validatenull)(a)&&(a=uni.getStorage(t)),!(0,r.validatenull)(a))return a=JSON.parse(a),"string"==a.dataType?n=a.content:"number"==a.dataType?n=Number(a.content):"boolean"==a.dataType?n=Boolean(a.content):"object"==a.dataType&&(n=a.content),n};n.getStore=u;var c=function(e){var n=e.name;uni.removeStorageSync(n),uni.removeStorage(n)};n.removeStore=c},ec55:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t("a76c"),o={mallDomain:"yyy",mallType:"",mallId:"",forcedLogin:!1,hasLogin:(0,a.getStore)({name:"hasLogin"})&&(0,a.getStore)({name:"hasLogin"}).hasLogin||!1,token:(0,a.getStore)({name:"token"})&&(0,a.getStore)({name:"token"}).token||"",uniCode:(0,a.getStore)({name:"uniCode"})&&(0,a.getStore)({name:"uniCode"}).uniCode||"",userInfo:(0,a.getStore)({name:"userInfo"})||{},baseInfo:{mallDomain:"",mallId:"",p:"",scm:""}},r={SET_HASLOGIN:function(e,n){e.hasLogin=n,(0,a.setStore)({name:"hasLogin",content:{hasLogin:e.hasLogin},type:"sync"})},SET_TOKEN:function(e,n){e.token=n,(0,a.setStore)({name:"token",content:{token:e.token},type:"sync"})},SET_MALLDOMAIN:function(e,n){e.mallDomain=n},SET_MALLTYPE:function(e,n){e.mallType=n},SET_MALLID:function(e,n){e.mallId=n},SET_UNICODE:function(e,n){e.uniCode=n,(0,a.setStore)({name:"uniCode",content:{uniCode:e.uniCode},type:"sync"})},SET_BASEINFO:function(e,n){e.baseInfo=n,(0,a.setStore)({name:"baseInfo",content:e.baseInfo,type:"sync"})},SET_USERIFNO:function(e,n){e.userInfo=n,(0,a.setStore)({name:"userInfo",content:e.userInfo,type:"sync"})}},i={},u={},c={state:o,actions:i,getters:u,mutations:r,namespaced:!0};n.default=c},faf4:function(e,n,t){"use strict";var a=t("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t("e143")),r=a(t("2f62")),i=a(t("ec55")),u=a(t("6d80")),c=a(t("23ef"));o.default.use(r.default);var s=new r.default.Store({modules:{common:i.default,order:u.default},getters:c.default}),d=s;n.default=d}});