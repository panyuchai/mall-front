(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/productDetail/productDetail"],{"2cad":function(t,n,o){"use strict";o.r(n);var e=o("771c"),u=o("71e8");for(var i in u)"default"!==i&&function(t){o.d(n,t,function(){return u[t]})}(i);o("3097");var c=o("2877"),r=Object(c["a"])(u["default"],e["a"],e["b"],!1,null,null,null);n["default"]=r.exports},3097:function(t,n,o){"use strict";var e=o("f7bf"),u=o.n(e);u.a},"71e8":function(t,n,o){"use strict";o.r(n);var e=o("9811"),u=o.n(e);for(var i in e)"default"!==i&&function(t){o.d(n,t,function(){return e[t]})}(i);n["default"]=u.a},"771c":function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},u=[];o.d(n,"a",function(){return e}),o.d(n,"b",function(){return u})},9811:function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=o("2f62");function u(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{},e=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),e.forEach(function(n){i(t,n,o[n])})}return t}function i(t,n,o){return n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}var c=function(){return o.e("components/icon/icon").then(o.bind(null,"a391"))},r=function(){return o.e("components/tag/tag").then(o.bind(null,"fba4"))},a=function(){return o.e("components/badge/badge").then(o.bind(null,"9f44"))},s=function(){return o.e("components/nomore/nomore").then(o.bind(null,"e20f"))},l=function(){return o.e("components/button/button").then(o.bind(null,"505e"))},d=function(){return o.e("components/top-dropdown/top-dropdown").then(o.bind(null,"64e1"))},p=function(){return o.e("components/bottom-popup/bottom-popup").then(o.bind(null,"442f"))},f=function(){return o.e("components/numberbox/numberbox").then(o.bind(null,"4e45"))},h={components:{tuiIcon:c,tuiTag:r,tuiBadge:a,tuiNomore:s,tuiButton:l,tuiTopDropdown:d,tuiBottomPopup:p,tuiNumberbox:f},data:function(){return{goodsInfo:{},showCont:!0,height:64,top:0,scrollH:0,opcity:0,iconOpcity:.5,banner:[],bannerIndex:0,topMenu:[{icon:"home",text:"首页",size:23,badge:0},{icon:"people",text:"我的",size:26,badge:0},{icon:"cart",text:"购物车",size:23,badge:2}],menuShow:!1,popupShow:!1,value:1,collected:!1}},methods:{bannerChange:function(t){this.bannerIndex=t.detail.current},previewImage:function(n){var o=[];this.banner.map(function(t){o.push(t.url)});var e=n.currentTarget.dataset.index;t.previewImage({current:this.banner[e].url,urls:o})},handleChangeCont:function(t){switch(t){case 0:this.showCont=!0;break;case 1:this.showCont=!1;break;default:this.showCont=!0}},back:function(){t.navigateBack()},openMenu:function(){this.menuShow=!0},closeMenu:function(){this.menuShow=!1},showPopup:function(){this.popupShow=!0},hidePopup:function(){this.popupShow=!1},change:function(t){this.value=t.value},handleAddCart:function(n){var o=this;this.hidePopup(),this.$http.post("/mall/app/car/add",u({},this.baseInfo,{accountId:this.userInfo.accountId,goodsCount:this.value,mallGoodsId:n})).then(function(n){0==n.code?(o.getGoodsDetail(),t.showToast({icon:"none",title:"商品添加成功"})):console.log("productDetail.vue-- add接口添加购物车失败")}).catch(function(t){console.log("productDetail.vue-- add接口添加购物车错误")})},linkToIndex:function(){t.reLaunch({url:"/pages/index/index"})},linkToUser:function(){t.reLaunch({url:"/pages/user/user"})},linkToCart:function(){t.reLaunch({url:"/pages/car/car"})},getGoodsDetail:function(){var n=this,o=t.getStorageSync("goodsId");this.$http.post("/mall/app/goods/detail",o).then(function(t){0==t.code?(n.goodsInfo=t.result,n.banner=t.result.pics):console.log("productDetail.vue-- detail接口获取数据失败")}).catch(function(t){console.log("productDetail.vue-- detail接口获取数据错误")})}},computed:u({},(0,e.mapState)("common",["baseInfo","userInfo"])),onLoad:function(n){var o=this;t.setStorageSync("goodsId",n),this.getGoodsDetail();var e={};e=wx.getMenuButtonBoundingClientRect(),t.getSystemInfo({success:function(t){o.width=e.left||t.windowWidth,o.height=e.top?e.top+e.height+8:t.statusBarHeight+44,o.top=e.top?e.top+(e.height-32)/2:t.statusBarHeight+6,o.scrollH=t.windowWidth}})},onPageScroll:function(t){var n=t.scrollTop<=0?0:t.scrollTop,o=n/this.scrollH;this.opcity>=1&&o>=1||(this.opcity=o,this.iconOpcity=.5*(1-o<0?0:1-o))}};n.default=h}).call(this,o("543d")["default"])},f7bf:function(t,n,o){}},[["bd1c","common/runtime","common/vendor"]]]);