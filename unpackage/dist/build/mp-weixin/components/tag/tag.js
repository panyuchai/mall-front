(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tag/tag"],{"567f":function(t,e,a){"use strict";a.r(e);var n=a("9fee"),i=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,function(){return n[t]})}(u);e["default"]=i.a},"69ba":function(t,e,a){},"99d1":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=(t._self._c,t.getClassName(t.shape,t.plain)),n=t.getTypeClass(t.type,t.plain);t.$mp.data=Object.assign({},{$root:{m0:a,m1:n}})},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"9fee":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"tuiTag",props:{type:{type:String,default:"primary"},size:{type:String,default:""},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},visible:{type:Boolean,default:!0}},methods:{handleClick:function(){this.$emit("click")},getTypeClass:function(t,e){return e?"tui-"+t+"-outline":"tui-"+t},getClassName:function(t,e){var a=e?"tui-tag-outline ":"";return"square"!=t&&("circle"==t?a+=e?"tui-tag-outline-fillet":"tui-tag-fillet":"circleLeft"==t?a+="tui-tag-fillet-left":"circleRight"==t&&(a+="tui-tag-fillet-right")),a}}};e.default=n},b581:function(t,e,a){"use strict";var n=a("69ba"),i=a.n(n);i.a},fba4:function(t,e,a){"use strict";a.r(e);var n=a("99d1"),i=a("567f");for(var u in i)"default"!==u&&function(t){a.d(e,t,function(){return i[t]})}(u);a("b581");var l=a("2877"),r=Object(l["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tag/tag-create-component',
    {
        'components/tag/tag-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("fba4"))
        })
    },
    [['components/tag/tag-create-component']]
]);                
