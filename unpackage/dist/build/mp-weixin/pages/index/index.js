(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"881c":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t("2f62");function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.forEach(function(e){l(n,e,t[e])})}return n}function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var c=function(){return t.e("components/search").then(t.bind(null,"916e"))},r=function(){return t.e("components/banner").then(t.bind(null,"9dc1"))},i=function(){return t.e("components/categorylist").then(t.bind(null,"4788"))},u=function(){return t.e("components/singleproduct").then(t.bind(null,"2d4d"))},s=function(){return t.e("components/recommend").then(t.bind(null,"7d1c"))},m=function(){return t.e("components/lines").then(t.bind(null,"6ec7"))},f={data:function(){return{templateData:[],canIUse:!1}},components:{Search:c,Banner:r,CategoryList:i,SingleProduct:u,Recommend:s,Lines:m},methods:a({},(0,o.mapMutations)("common",["SET_BASEINFO","SET_MALLTYPE","SET_MALLID"]),{clearInfo:function(){n.removeStorageSync("hasLogin"),n.removeStorageSync("token"),n.removeStorageSync("uniCode"),n.removeStorageSync("userInfo")},checkMallType:function(){var n=this;this.$http.post("/mall/app/login/mall/shopmall/type",{mallDomain:this.mallDomain}).then(function(e){0==e.code?(n.SET_BASEINFO(a({},n.baseInfo,{mallDomain:n.mallDomain,mallType:e.result.type,mallId:e.result.mallId})),n.SET_MALLTYPE(e.result.type),n.SET_MALLID(e.result.mallId),n.initData()):console.log("index--mallTaye 接口调用失败")}).catch(function(n){console.log("index--mallTaye 接口调用出错"+n)})},initData:function(){var n=this;this.$http.post("/mall/app/backsite/decoration/homepage/"+this.baseInfo.mallId).then(function(e){n.templateData=e.content,console.log(n.templateData)}).catch(function(n){console.log(n)})},getMallType:function(){this.mallType?this.initData():this.checkMallType()}}),computed:a({},(0,o.mapState)("common",["baseInfo","userInfo","mallType","mallDomain"])),onLoad:function(){this.getMallType()}};e.default=f}).call(this,t("543d")["default"])},"8c3e":function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement;n._self._c},a=[];t.d(e,"a",function(){return o}),t.d(e,"b",function(){return a})},d651:function(n,e,t){"use strict";t.r(e);var o=t("881c"),a=t.n(o);for(var l in o)"default"!==l&&function(n){t.d(e,n,function(){return o[n]})}(l);e["default"]=a.a},f776:function(n,e,t){"use strict";t.r(e);var o=t("8c3e"),a=t("d651");for(var l in a)"default"!==l&&function(n){t.d(e,n,function(){return a[n]})}(l);var c=t("2877"),r=Object(c["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=r.exports}},[["9ed5","common/runtime","common/vendor"]]]);