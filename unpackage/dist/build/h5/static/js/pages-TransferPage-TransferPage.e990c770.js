(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-TransferPage-TransferPage"],{"0085":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[e._v(e._s(e.initData))])},a=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})},"653e":function(e,t,n){"use strict";var r=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("cebc")),o=n("2f62"),i=(n("a76c"),{data:function(){return{initData:"888888888"}},computed:(0,a.default)({},(0,o.mapState)("common",["baseInfo","userInfo","mallDomain","transferUrl","isTransferPage"])),methods:(0,a.default)({},(0,o.mapMutations)("common",["SET_HASLOGIN","SET_TOKEN","SET_FIRSTLOAD","SET_USERIFNO","SET_ISTRANSFERPAGE"]),{handleTransfer:function(e){"true"==e.success?(this.SET_HASLOGIN(!0),this.SET_TOKEN(e.token),this.$http.setConfig(function(e){return e.header["Authorization"]="Bearer "+uni.getStorageSync("token"),e}),uni.getStorageSync("referUrl")?(window.location.href=uni.getStorageSync("referUrl"),uni.removeStorageSync("referUrl")):window.location.href=this.transferUrl+"?mallDomain="+e.mallDomain):(uni.setStorageSync("openid",e.openid),uni.setStorageSync("isTransferPage",!1),window.location.href=this.transferUrl+"?mallDomain="+e.mallDomain)},setUserInfo:function(){var e=this;this.$http.post("/mall/app/account/info").then(function(t){if(0==t.code){if(t.result){var n=t.result.mobilephone,r=t.result.loginname,o=t.result.id,i=t.result.customer,u=i.customerName,s=i.wechatName,c=i.customerSex,f=i.customerBirthday,l=i.customerImage,m=i.customerId;e.SET_USERIFNO({customerName:u,wechatName:s,customerSex:c,customerBirthday:f,customerImage:l,customerId:m}),e.SET_USERIFNO((0,a.default)({},e.userInfo,{mobilephone:n,loginname:r,accountId:o}))}}else console.log("TransferPage.vue-- info接口调用失败")}).catch(function(e){console.log("TransferPage.vue-- info接口调用错误")})}}),onLoad:function(e){this.handleTransfer(e)}});t.default=i},b3ea:function(e,t,n){"use strict";n.r(t);var r=n("653e"),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t["default"]=a.a},e3fc:function(e,t,n){"use strict";n.r(t);var r=n("0085"),a=n("b3ea");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var i=n("2877"),u=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,"323a9c68",null);t["default"]=u.exports}}]);