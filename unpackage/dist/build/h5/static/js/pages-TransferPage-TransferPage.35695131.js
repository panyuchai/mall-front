(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-TransferPage-TransferPage"],{"34fa":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[e._v(e._s(e.initData))])},a=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})},"653e":function(e,t,n){"use strict";var r=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("cebc")),u=n("2f62"),i=n("a76c"),o={data:function(){return{initData:""}},methods:(0,a.default)({},(0,u.mapMutations)("common",["SET_HASLOGIN","SET_TOKEN","SET_FIRSTLOAD"]),{handleTransfer:function(e){this.SET_FIRSTLOAD(!1),"true"==e.success?(this.SET_HASLOGIN(!0),this.SET_TOKEN(res.result.token),this.$http.setConfig(function(e){return e.header["Authorization"]="Bearer "+(0,i.getStore)({name:"token"}),e}),uni.getStorageSync("referUrl"),alert("登陆成功")):(alert(e.code),uni.switchTab({url:"/pages/index/index"}))}}),onLoad:function(e){this.handleTransfer(e)}};t.default=o},b3ea:function(e,t,n){"use strict";n.r(t);var r=n("653e"),a=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);t["default"]=a.a},e3fc:function(e,t,n){"use strict";n.r(t);var r=n("34fa"),a=n("b3ea");for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);var i=n("2877"),o=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,"11d37391",null);t["default"]=o.exports}}]);