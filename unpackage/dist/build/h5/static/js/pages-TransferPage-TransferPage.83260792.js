(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-TransferPage-TransferPage"],{"13d4":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[e._v(e._s(e.initData))])},o=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})},"653e":function(e,t,n){"use strict";var r=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("cebc")),a=n("2f62"),u=(n("a76c"),{data:function(){return{initData:"888888888"}},methods:(0,o.default)({},(0,a.mapMutations)("common",["SET_HASLOGIN","SET_TOKEN","SET_FIRSTLOAD","SET_USERIFNO"]),{handleTransfer:function(e){"true"==e.success?(alert("静默登陆成功1"),this.SET_HASLOGIN(!0),alert("静默登陆成功2"),alert(e.token),this.SET_TOKEN(e.token),alert("静默登陆成功3"),this.$http.setConfig(function(e){return e.header["Authorization"]="Bearer "+uni.getStorageSync("token"),e}),alert("静默登陆成功4"),this.setUserInfo(),alert("静默登陆成功5"),uni.getStorageSync("referUrl")?(window.location.href=uni.getStorageSync("referUrl"),uni.removeStorageSync("referUrl")):(alert("静默登陆成功6"),uni.switchTab({url:"/pages/index/index?"})),alert("静默登陆成功7")):(alert("静默登陆失败"),uni.setStorageSync("openid",e.openid),uni.switchTab({url:"/pages/index/index"})),this.SET_FIRSTLOAD(!1)},setUserInfo:function(){var e=this;alert("111111"),this.$http.post("/mall/app/account/info").then(function(t){if(0==t.code){if(t.result){alert(t.result.customer.accountId),alert(t.result.mobilephone);var n=t.result.mobilephone,r=t.result.customer,a=r.accountId,u=r.customerName,i=r.wechatName,c=r.customerSex,s=r.customerBirthday,l=r.customerImage,f=r.customerId;e.SET_USERIFNO({accountId:a,customerName:u,wechatName:i,customerSex:c,customerBirthday:s,customerImage:l,customerId:f}),e.SET_USERIFNO((0,o.default)({},e.userInfo,{mobilephone:n})),alert(e.userInfo),alert(e.userInfo.accountId),alert(e.userInfo.mobilephone)}}else console.log("login.vue-- info接口调用失败")}).catch(function(e){console.log("login.vue-- info接口调用错误")})}}),computed:(0,o.default)({},(0,a.mapState)("common","baseInfo","userInfo")),onLoad:function(e){this.handleTransfer(e)}});t.default=u},b3ea:function(e,t,n){"use strict";n.r(t);var r=n("653e"),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);t["default"]=o.a},e3fc:function(e,t,n){"use strict";n.r(t);var r=n("13d4"),o=n("b3ea");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);var u=n("2877"),i=Object(u["a"])(o["default"],r["a"],r["b"],!1,null,"07e449ed",null);t["default"]=i.exports}}]);