(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/address"],{"00df":function(t,e,a){"use strict";a.r(e);var n=a("733d"),s=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=s.a},"733d":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{source:0,addressList:[{name:"刘晓晓",mobile:"18666666666",address:"北京市东城区",area:"泛海国际soho城8栋1904",default:!0},{name:"刘大大",mobile:"18667766666",address:"山东省济南市历城区山东省济南市历城区山东省济南市历城区山东省济南市历城区山东省济南市历城区山东省济南市历城区",area:"泛海国际soho城8栋1904",default:!1}]}},onLoad:function(t){this.source=t.source},methods:{checkAddress:function(e,a){var n=function(){var t=getCurrentPages(),e=t[t.length-2];return e.$vm};1==this.source&&(n().addressData=e,this.addressList.map(function(t,e){t.default=!1}),this.addressList[a].default=!0,t.navigateBack())},addAddress:function(e,a){t.navigateTo({url:"/pages/addressManage/addressManage?type=".concat(e,"&data=").concat(JSON.stringify(a))})},refreshList:function(t,e){this.addressList.unshift(t),console.log(t,e)}}};e.default=a}).call(this,a("543d")["default"])},"968a":function(t,e,a){},"9f0f":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},s=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s})},d2a2:function(t,e,a){"use strict";var n=a("968a"),s=a.n(n);s.a},d2be:function(t,e,a){"use strict";a.r(e);var n=a("9f0f"),s=a("00df");for(var r in s)"default"!==r&&function(t){a.d(e,t,function(){return s[t]})}(r);a("d2a2");var d=a("2877"),u=Object(d["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports}},[["c389","common/runtime","common/vendor"]]]);