(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-TransferPage-TransferPage"],{5680:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[e._v(e._s(e.initData))])},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})},b3ea:function(e,t,n){"use strict";n.r(t);var o=n("e52b"),a=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);t["default"]=a.a},e3fc:function(e,t,n){"use strict";n.r(t);var o=n("5680"),a=n("b3ea");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);var u=n("2877"),i=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,"7bbc4eea",null);t["default"]=i.exports},e52b:function(e,t,n){"use strict";var o=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("cebc")),r=n("2f62"),u=(n("a76c"),{data:function(){return{initData:"加载中......"}},computed:(0,a.default)({},(0,r.mapState)("common",["transferUrl","baseUrl","baseInfo","userInfo","mallDomain","isTransferPage"])),methods:(0,a.default)({},(0,r.mapMutations)("common",["SET_HASLOGIN","SET_TOKEN","SET_USERIFNO","SET_ISTRANSFERPAGE"]),{handleTransfer:function(e){var t=this;"true"==e.success?(this.SET_HASLOGIN(!0),this.SET_TOKEN(e.token),this.$http.setConfig(function(e){return e.header["Authorization"]="Bearer "+uni.getStorageSync("token"),e}),this.$http.post("/mall/app/account/info").then(function(n){if(0==n.code){if(n.result){var o=n.result.mobilephone,r=n.result.loginname,u=n.result.id,i=n.result.customer,c=i.customerName,s=i.wechatName,l=i.customerSex,f=i.customerBirthday,m=i.customerImage,d=i.customerId;t.SET_USERIFNO({customerName:c,wechatName:s,customerSex:l,customerBirthday:f,customerImage:m,customerId:d}),t.SET_USERIFNO((0,a.default)({},t.userInfo,{mobilephone:o,loginname:r,accountId:u})),uni.getStorageSync("referUrl")?(window.location.href=uni.getStorageSync("referUrl"),uni.removeStorageSync("referUrl")):(alert(e.mallDomain),window.location.href="?mallDomain="+e.mallDomain)}}else console.log("TransferPage.vue-- info接口调用失败")}).catch(function(e){console.log("TransferPage.vue-- info接口调用错误")})):(uni.setStorageSync("openid",e.openid),uni.setStorageSync("isTransferPage",!1),alert(e.mallDomain),window.location.href="?mallDomain="+e.mallDomain)},setUserInfo:function(){var e=this;this.$http.post("/mall/app/account/info").then(function(t){if(0==t.code){if(t.result){var n=t.result.mobilephone,o=t.result.loginname,r=t.result.id,u=t.result.customer,i=u.customerName,c=u.wechatName,s=u.customerSex,l=u.customerBirthday,f=u.customerImage,m=u.customerId;e.SET_USERIFNO({customerName:i,wechatName:c,customerSex:s,customerBirthday:l,customerImage:f,customerId:m}),e.SET_USERIFNO((0,a.default)({},e.userInfo,{mobilephone:n,loginname:o,accountId:r}))}}else console.log("TransferPage.vue-- info接口调用失败")}).catch(function(e){console.log("TransferPage.vue-- info接口调用错误")})}}),onLoad:function(e){this.handleTransfer(e)}});t.default=u}}]);