(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-TransferPage-TransferPage"],{1763:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[e._v(e._s(e.initData))])},o=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})},b3ea:function(e,t,n){"use strict";n.r(t);var r=n("e52b"),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);t["default"]=o.a},e3fc:function(e,t,n){"use strict";n.r(t);var r=n("1763"),o=n("b3ea");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);var u=n("2877"),s=Object(u["a"])(o["default"],r["a"],r["b"],!1,null,"bf9dfbca",null);t["default"]=s.exports},e52b:function(e,t,n){"use strict";var r=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("cebc")),a=n("2f62"),u=(n("a76c"),{data:function(){return{initData:"加载中......"}},computed:(0,o.default)({},(0,a.mapState)("common",["transferUrl","baseUrl","baseInfo","userInfo","mallDomain","isTransferPage"])),methods:(0,o.default)({},(0,a.mapMutations)("common",["SET_HASLOGIN","SET_TOKEN","SET_USERIFNO","SET_ISTRANSFERPAGE"]),{handleTransfer:function(e){var t=this;"true"==e.success?(this.SET_HASLOGIN(!0),this.SET_TOKEN(e.token),this.$http.setConfig(function(e){return e.header["Authorization"]="Bearer "+uni.getStorageSync("token"),e}),this.$http.post("/mall/app/account/info").then(function(e){if(0==e.code){if(e.result){var n=e.result.mobilephone,r=e.result.loginname,a=e.result.id,u=e.result.customer,s=u.customerName,i=u.wechatName,c=u.customerSex,f=u.customerBirthday,l=u.customerImage,m=u.customerId;t.SET_USERIFNO({customerName:s,wechatName:i,customerSex:c,customerBirthday:f,customerImage:l,customerId:m}),t.SET_USERIFNO((0,o.default)({},t.userInfo,{mobilephone:n,loginname:r,accountId:a})),uni.getStorageSync("referUrl")?(window.location.href=uni.getStorageSync("referUrl"),uni.removeStorageSync("referUrl")):uni.switchTab({url:"/pages/index/index"})}}else console.log("TransferPage.vue-- info接口调用失败")}).catch(function(e){console.log("TransferPage.vue-- info接口调用错误")})):(uni.setStorageSync("openid",e.openid),uni.setStorageSync("isTransferPage",!1),uni.switchTab({url:"/pages/index/index"}))},setUserInfo:function(){var e=this;this.$http.post("/mall/app/account/info").then(function(t){if(0==t.code){if(t.result){var n=t.result.mobilephone,r=t.result.loginname,a=t.result.id,u=t.result.customer,s=u.customerName,i=u.wechatName,c=u.customerSex,f=u.customerBirthday,l=u.customerImage,m=u.customerId;e.SET_USERIFNO({customerName:s,wechatName:i,customerSex:c,customerBirthday:f,customerImage:l,customerId:m}),e.SET_USERIFNO((0,o.default)({},e.userInfo,{mobilephone:n,loginname:r,accountId:a}))}}else console.log("TransferPage.vue-- info接口调用失败")}).catch(function(e){console.log("TransferPage.vue-- info接口调用错误")})}}),onLoad:function(e){this.handleTransfer(e)}});t.default=u}}]);