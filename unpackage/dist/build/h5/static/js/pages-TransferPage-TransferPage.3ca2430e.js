(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-TransferPage-TransferPage"],{"72f3":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[e._v(e._s(e.initData))])},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})},b3ea:function(e,t,n){"use strict";n.r(t);var o=n("e52b"),a=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);t["default"]=a.a},e3fc:function(e,t,n){"use strict";n.r(t);var o=n("72f3"),a=n("b3ea");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);var u=n("2877"),i=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,"340e9ffb",null);t["default"]=i.exports},e52b:function(e,t,n){"use strict";var o=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("f499")),r=o(n("cebc")),u=n("2f62"),i=(n("a76c"),{data:function(){return{initData:"加载中......"}},computed:(0,r.default)({},(0,u.mapState)("common",["transferUrl","baseUrl","baseInfo","userInfo","mallDomain","isTransferPage"])),methods:(0,r.default)({},(0,u.mapMutations)("common",["SET_HASLOGIN","SET_TOKEN","SET_USERIFNO","SET_ISTRANSFERPAGE"]),{handleTransfer:function(e){var t=this;"true"==e.success?(this.SET_HASLOGIN(!0),this.SET_TOKEN(e.token),this.$http.setConfig(function(e){return e.header["Authorization"]="Bearer "+uni.getStorageSync("token"),e}),this.$http.post("/mall/app/account/info").then(function(n){if(0==n.code){if(n.result){var o=n.result.mobilephone,u=n.result.loginname,i=n.result.id,s=n.result.customer,c=s.customerName,f=s.wechatName,l=s.customerSex,m=s.customerBirthday,d=s.customerImage,h=s.customerId;t.SET_USERIFNO({customerName:c,wechatName:f,customerSex:l,customerBirthday:m,customerImage:d,customerId:h}),t.SET_USERIFNO((0,r.default)({},t.userInfo,{mobilephone:o,loginname:u,accountId:i})),uni.getStorageSync("referUrl")?(window.location.href=uni.getStorageSync("referUrl"),uni.removeStorageSync("referUrl")):(alert((0,a.default)(e)),window.location.href="?mallDomain="+e.mallDomain)}}else console.log("TransferPage.vue-- info接口调用失败")}).catch(function(e){console.log("TransferPage.vue-- info接口调用错误")})):(uni.setStorageSync("openid",e.openid),uni.setStorageSync("isTransferPage",!1),alert((0,a.default)(e)),window.location.href="?mallDomain="+e.mallDomain)},setUserInfo:function(){var e=this;this.$http.post("/mall/app/account/info").then(function(t){if(0==t.code){if(t.result){var n=t.result.mobilephone,o=t.result.loginname,a=t.result.id,u=t.result.customer,i=u.customerName,s=u.wechatName,c=u.customerSex,f=u.customerBirthday,l=u.customerImage,m=u.customerId;e.SET_USERIFNO({customerName:i,wechatName:s,customerSex:c,customerBirthday:f,customerImage:l,customerId:m}),e.SET_USERIFNO((0,r.default)({},e.userInfo,{mobilephone:n,loginname:o,accountId:a}))}}else console.log("TransferPage.vue-- info接口调用失败")}).catch(function(e){console.log("TransferPage.vue-- info接口调用错误")})}}),onLoad:function(e){this.handleTransfer(e)}});t.default=i}}]);