(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-TransferPage-TransferPage"],{"89f1":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[e._v(e._s(e.initData))])},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},b3ea:function(e,t,n){"use strict";n.r(t);var o=n("e52b"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=r.a},e3fc:function(e,t,n){"use strict";n.r(t);var o=n("89f1"),r=n("b3ea");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);var u=n("2877"),i=Object(u["a"])(r["default"],o["a"],o["b"],!1,null,"59f85040",null);t["default"]=i.exports},e52b:function(e,t,n){"use strict";var o=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("cebc")),a=n("2f62"),u=(n("a76c"),{data:function(){return{initData:"加载中......"}},computed:(0,r.default)({},(0,a.mapState)("common",["transferUrl","baseInfo","userInfo","mallDomain","isTransferPage"])),methods:(0,r.default)({},(0,a.mapMutations)("common",["SET_HASLOGIN","SET_TOKEN","SET_USERIFNO","SET_ISTRANSFERPAGE"]),{handleTransfer:function(e){var t=this;"true"==e.success?(this.SET_HASLOGIN(!0),this.SET_TOKEN(e.token),this.$http.setConfig(function(e){return e.header["Authorization"]="Bearer "+uni.getStorageSync("token"),e}),this.$http.post("/mall/app/account/info").then(function(n){if(0==n.code){if(n.result){var o=n.result.mobilephone,a=n.result.loginname,u=n.result.id,i=n.result.customer,s=i.customerName,c=i.wechatName,f=i.customerSex,l=i.customerBirthday,m=i.customerImage,d=i.customerId;t.SET_USERIFNO({customerName:s,wechatName:c,customerSex:f,customerBirthday:l,customerImage:m,customerId:d}),t.SET_USERIFNO((0,r.default)({},t.userInfo,{mobilephone:o,loginname:a,accountId:u})),uni.getStorageSync("referUrl")?(window.location.href=uni.getStorageSync("referUrl"),uni.removeStorageSync("referUrl")):window.location.href=t.transferUrl+"?mallDomain="+e.mallDomain}}else console.log("TransferPage.vue-- info接口调用失败")}).catch(function(e){console.log("TransferPage.vue-- info接口调用错误")})):(uni.setStorageSync("openid",e.openid),uni.setStorageSync("isTransferPage",!1),window.location.href=this.transferUrl+"?mallDomain="+e.mallDomain)},setUserInfo:function(){var e=this;this.$http.post("/mall/app/account/info").then(function(t){if(0==t.code){if(t.result){var n=t.result.mobilephone,o=t.result.loginname,a=t.result.id,u=t.result.customer,i=u.customerName,s=u.wechatName,c=u.customerSex,f=u.customerBirthday,l=u.customerImage,m=u.customerId;e.SET_USERIFNO({customerName:i,wechatName:s,customerSex:c,customerBirthday:f,customerImage:l,customerId:m}),e.SET_USERIFNO((0,r.default)({},e.userInfo,{mobilephone:n,loginname:o,accountId:a}))}}else console.log("TransferPage.vue-- info接口调用失败")}).catch(function(e){console.log("TransferPage.vue-- info接口调用错误")})}}),onLoad:function(e){this.handleTransfer(e)}});t.default=u}}]);