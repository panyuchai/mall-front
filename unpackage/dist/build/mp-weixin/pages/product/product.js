(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/product"],{"0419":function(t,e,o){"use strict";o.r(e);var a=o("2a79"),n=o.n(a);for(var r in a)"default"!==r&&function(t){o.d(e,t,function(){return a[t]})}(r);e["default"]=n.a},"2a79":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o("2f62");function n(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},a=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),a.forEach(function(e){r(t,e,o[e])})}return t}function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var c=function(){return o.e("components/search").then(o.bind(null,"916e"))},s=function(){return o.e("components/loadmore/loadmore").then(o.bind(null,"4c46"))},i=function(){return o.e("components/nomore/nomore").then(o.bind(null,"e20f"))},u={data:function(){return{toggle:!0,pageNum:1,productData:[],loadding:!1,pullUpOn:!0,notFound:!1,canReachBottom:!0,searchData:{pageNum:1,pageSize:10,totalPage:null,keyword:t.getStorageSync("searchKeyword")||"",orderType:null,isDesc:!1},scrollTop:0,old:{scrollTop:0}}},methods:{scroll:function(t){this.old.scrollTop=t.detail.scrollTop},goTop:function(t){this.scrollTop=this.old.scrollTop,this.$nextTick(function(){this.scrollTop=0})},linkToDetail:function(e){t.navigateTo({url:"/pages/productDetail/productDetail?id="+e})},doQuery:function(e){switch(this.goTop(),this.searchData.pageNum=1,e){case 2:this.searchData.isDesc=!this.searchData.isDesc;break;case 3:this.searchData.isDesc=!this.searchData.isDesc;break;default:this.searchData.isDesc=!1}this.doSearch(e),t.setStorageSync("product_searchType_storage",e)},doSearch:function(t){var e=this;this.loadding=!0,this.pullUpOn=!0,this.searchData.orderType=t||0,this.$http.post("/mall/app/goods/list",n({accountId:this.userInfo.accountId||""},this.baseInfo,this.searchData)).then(function(t){0==t.code?t.result&&(e.searchData.totalPage=t.result.totalPage,0==t.result.mallGoodsList.length?(e.loadding=!1,e.pullUpOn=!1):e.loadding=!1,1==e.searchData.pageNum?t.result.mallGoodsList&&(e.productData=t.result.mallGoodsList):e.productData=e.productData.concat(t.result.mallGoodsList)):console.log("product.vue-- list获取数据列表失败")}).catch(function(t){console.log("product.vue-- list获取数据列表错误")})},initSearch:function(){this.searchData.pageNum=1,this.productData=[]}},computed:n({},(0,a.mapState)("common",["baseInfo","userInfo"])),onLoad:function(){},onShow:function(){var e=t.getStorageSync("searchKeyword")||"";this.searchData.keyword=e,this.initSearch(),this.doSearch(0)},onHide:function(){t.removeStorageSync("searchKeyword"),t.removeStorageSync("product_searchType_storage")},onPullDownRefresh:function(){},onReachBottom:function(){this.pullUpOn&&(this.loadding=!0,this.searchData.pageNum++,this.searchData.pageNum==this.searchData.totalPage&&(this.loadding=!1,this.pullUpOn=!1),this.doSearch(t.getStorageSync("product_searchType_storage")))},components:{Search:c,tuiLoadmore:s,tuiNomore:i}};e.default=u}).call(this,o("543d")["default"])},4131:function(t,e,o){"use strict";o.r(e);var a=o("cdd0"),n=o("0419");for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);o("8926");var c=o("2877"),s=Object(c["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},8926:function(t,e,o){"use strict";var a=o("9a15"),n=o.n(a);n.a},"9a15":function(t,e,o){},cdd0:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},n=[];o.d(e,"a",function(){return a}),o.d(e,"b",function(){return n})}},[["b7af","common/runtime","common/vendor"]]]);