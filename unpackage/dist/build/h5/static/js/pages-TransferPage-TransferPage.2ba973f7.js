(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-TransferPage-TransferPage"],{"416c":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[e._v(e._s(e.initData))])},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},"653e":function(e,t,n){"use strict";var o=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("cebc")),a=n("2f62"),i=(n("a76c"),{data:function(){return{initData:"888888888"}},computed:(0,r.default)({},(0,a.mapState)("common",["baseInfo","userInfo","mallDomain","transferUrl"])),methods:(0,r.default)({},(0,a.mapMutations)("common",["SET_HASLOGIN","SET_TOKEN","SET_FIRSTLOAD","SET_USERIFNO"]),{handleTransfer:function(e){"true"==e.success?(this.SET_HASLOGIN(!0),this.SET_TOKEN(e.token),this.$http.setConfig(function(e){return e.header["Authorization"]="Bearer "+uni.getStorageSync("token"),e}),this.setUserInfo(),uni.getStorageSync("referUrl")?(window.location.href=uni.getStorageSync("referUrl"),uni.removeStorageSync("referUrl")):window.location.href=this.transferUrl+"?mallDomain="+e.mallDomain+"#/"):(uni.setStorageSync("openid",e.openid),window.location.href=this.transferUrl+"?mallDomain="+e.mallDomain+"#/"),this.SET_FIRSTLOAD(!1)},setUserInfo:function(){var e=this;this.$http.post("/mall/app/account/info").then(function(t){if(0==t.code){if(t.result){var n=t.result.mobilephone,o=t.result.customer,a=o.accountId,i=o.customerName,u=o.wechatName,c=o.customerSex,s=o.customerBirthday,f=o.customerImage,l=o.customerId;e.SET_USERIFNO({accountId:a,customerName:i,wechatName:u,customerSex:c,customerBirthday:s,customerImage:f,customerId:l}),e.SET_USERIFNO((0,r.default)({},e.userInfo,{mobilephone:n}))}}else console.log("login.vue-- info接口调用失败")}).catch(function(e){console.log("login.vue-- info接口调用错误")})}}),onLoad:function(e){this.handleTransfer(e)}});t.default=i},b3ea:function(e,t,n){"use strict";n.r(t);var o=n("653e"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=r.a},e3fc:function(e,t,n){"use strict";n.r(t);var o=n("416c"),r=n("b3ea");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);var i=n("2877"),u=Object(i["a"])(r["default"],o["a"],o["b"],!1,null,"7ffc4a56",null);t["default"]=u.exports}}]);