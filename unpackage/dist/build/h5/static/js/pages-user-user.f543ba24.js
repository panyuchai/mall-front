(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-user"],{1310:function(t,e,i){"use strict";i.r(e);var n=i("89f5"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},"17e7":function(t,e,i){"use strict";var n=i("5e90"),o=i.n(n);o.a},"3baf":function(t,e,i){"use strict";i.r(e);var n=i("eb40"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},"5e90":function(t,e,i){var n=i("df60");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("1b721f26",n,!0,{sourceMap:!1,shadowMode:!1})},"666e":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"user-section"},[i("v-uni-view",{staticClass:"user-info-box"},[i("v-uni-image",{staticClass:"bg",attrs:{src:"/static/img/user-bg.png",mode:"scaleToFill"}}),i("v-uni-view",{staticClass:"portrait-box"},[i("v-uni-image",{staticClass:"portrait",attrs:{src:t.userInfo&&t.userInfo.customerImage||"/static/img/missing-face.png",mode:"aspectFill"}})],1),i("v-uni-view",{staticClass:"info-box",on:{click:function(e){e=t.$handleEvent(e),t.navTo("#")}}},[i("v-uni-text",{staticClass:"username"},[t._v(t._s(t.userInfo&&t.userInfo.customerName||"游客"))]),i("v-uni-text",{staticClass:"userphone"},[t._v(t._s(t.userInfo&&t.userInfo.mobilephone||""))])],1)],1),i("v-uni-view",{staticClass:"user-info-setting",on:{click:function(e){e=t.$handleEvent(e),t.navTo("/pages/accountManage/accountManage")}}},[i("v-uni-text",{staticClass:"icon-setting iconfont icon-shezhi"}),i("v-uni-text",[t._v("账号管理")])],1)],1),i("v-uni-view",{staticClass:"order-section"},[i("v-uni-view",{staticClass:"order-item",attrs:{"hover-class":"common-hover","hover-stay-time":50},on:{click:function(e){e=t.$handleEvent(e),t.navTo("/pages/order/order?state=0")}}},[i("v-uni-view",{staticClass:"icon"},[i("v-uni-text",{staticClass:"iconfont icon-icon iconfont-all"})],1),i("v-uni-view",{staticClass:"name"},[t._v("全部订单")])],1),i("v-uni-view",{staticClass:"order-item",attrs:{"hover-class":"common-hover","hover-stay-time":50},on:{click:function(e){e=t.$handleEvent(e),t.navTo("/pages/order/order?state=1")}}},[i("v-uni-view",{staticClass:"icon"},[i("v-uni-text",{staticClass:"iconfont icon-tianchongxing-"},[t.toPayNum?i("tui-badge",{staticClass:"badge",attrs:{type:"danger",size:"small"}},[t._v(t._s(t.toPayNum))]):t._e()],1)],1),i("v-uni-view",{staticClass:"name"},[t._v("待付款")])],1),i("v-uni-view",{staticClass:"order-item",attrs:{"hover-class":"common-hover","hover-stay-time":50},on:{click:function(e){e=t.$handleEvent(e),t.navTo("/pages/order/order?state=2")}}},[i("v-uni-view",{staticClass:"icon"},[i("v-uni-view",{staticClass:"iconfont icon-che-tianchong iconfont-transport"},[t.toReceivedNum?i("tui-badge",{staticClass:"badge",attrs:{type:"danger",size:"small"}},[t._v(t._s(t.toReceivedNum))]):t._e()],1)],1),i("v-uni-view",{staticClass:"name"},[t._v("待收货")])],1),i("v-uni-view",{staticClass:"order-item",attrs:{"hover-class":"common-hover","hover-stay-time":50},on:{click:function(e){e=t.$handleEvent(e),t.navTo("/pages/order/order?state=3")}}},[i("v-uni-view",{staticClass:"icon"},[i("v-uni-text",{staticClass:"iconfont icon-dingdanwancheng iconfont-finished"})],1),i("v-uni-view",{staticClass:"name"},[t._v("已完成")])],1),i("v-uni-view",{staticClass:"order-item",attrs:{"hover-class":"common-hover","hover-stay-time":50},on:{click:function(e){e=t.$handleEvent(e),t.navTo("/pages/order/order?state=4")}}},[i("v-uni-view",{staticClass:"icon"},[i("v-uni-text",{staticClass:"iconfont icon-shouhou iconfont-service"})],1),i("v-uni-view",{staticClass:"name"},[t._v("售后")])],1)],1),i("v-uni-view",{staticClass:"list-section"},[i("v-uni-view",{staticClass:"list-cell",on:{click:function(e){e=t.$handleEvent(e),t.navTo("/pages/address/address")}}},[i("v-uni-view",{staticClass:"cell-tit"},[t._v("地址管理")]),i("v-uni-text",{staticClass:"iconfont icon-arrowRight icon-arrow"})],1),i("v-uni-view",{staticClass:"list-cell"},[i("v-uni-view",{staticClass:"cell-tit"},[t._v("联系客服")]),i("v-uni-text",{staticClass:"iconfont icon-arrowRight icon-arrow"})],1)],1)],1)},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},7771:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.visible?i("v-uni-view",{staticClass:"tui-badge-class",class:[t.dot?"tui-badge-dot":"tui-badge","tui-"+t.type,t.size?"tui-badge-small":""]},[t._t("default")],2):t._e()},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},"86ff":function(t,e,i){"use strict";i.r(e);var n=i("666e"),o=i("1310");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("17e7");var s=i("2877"),r=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"0f238255",null);e["default"]=r.exports},"89f5":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("cebc")),a=(i("a76c"),n(i("9f44"))),s=i("2f62"),r={components:{tuiBadge:a.default},data:function(){return{toPayNum:0,toReceivedNum:0}},computed:(0,o.default)({},(0,s.mapState)("common",["hasLogin","userInfo","baseInfo"])),methods:(0,o.default)({},(0,s.mapMutations)("common",["SET_USERIFNO"]),{bindLogin:function(){uni.navigateTo({url:"../login/login"})},navTo:function(t){Boolean(this.hasLogin)||(t="/pages/login/login"),uni.navigateTo({url:t})},initPayNum:function(){var t=this;this.$http.post("/mall/app/order/count",(0,o.default)({},this.baseInfo,{accountId:this.userInfo&&this.userInfo.accountId,orderState:[0]})).then(function(e){0==e.code&&(t.toPayNum=e.result)}).catch(function(t){console.log(t)})},initToReceivedNum:function(){var t=this;this.$http.post("/mall/app/order/count",(0,o.default)({},this.baseInfo,{accountId:this.userInfo&&this.userInfo.accountId,orderState:[1,2]})).then(function(e){0==e.code&&(t.toReceivedNum=e.result)}).catch(function(t){console.log(t)})}}),onShow:function(){this.initPayNum(),this.initToReceivedNum()}};e.default=r},"9f44":function(t,e,i){"use strict";i.r(e);var n=i("7771"),o=i("3baf");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("9fe6");var s=i("2877"),r=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"df5fca98",null);e["default"]=r.exports},"9fac":function(t,e,i){var n=i("b8fa");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("5fd7df2b",n,!0,{sourceMap:!1,shadowMode:!1})},"9fe6":function(t,e,i){"use strict";var n=i("9fac"),o=i.n(n);o.a},b8fa:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* color start*/.tui-primary[data-v-df5fca98]{background:#5677fc;color:#fff}.tui-danger[data-v-df5fca98]{background:#ed3f14;color:#fff}.tui-red[data-v-df5fca98]{background:#ff201f;color:#fff}.tui-warning[data-v-df5fca98]{background:#ff7900;color:#fff}.tui-green[data-v-df5fca98]{background:#19be6b;color:#fff}.tui-white[data-v-df5fca98]{background:#fff;color:#333}.tui-black[data-v-df5fca98]{background:#000;color:#fff}.tui-gray[data-v-df5fca98]{background:#ededed!important;color:#999!important}\n\n/* color end*/\n\n/* badge start*/.tui-badge-dot[data-v-df5fca98]{height:8px;width:8px;border-radius:4px;line-height:1}.tui-badge[data-v-df5fca98]{font-size:12px;line-height:1;padding:3px 6px;border-radius:50px}.tui-badge-small[data-v-df5fca98]{-webkit-transform:scale(.8);-ms-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center}\n\n/* badge end*/",""])},df60:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-0f238255]{background:#f8f8f8;padding-bottom:%?80?%}.order-section .order-item[data-v-0f238255]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.order-section[data-v-0f238255]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;background:#fff}.user-section[data-v-0f238255]{position:relative}.user-info-box[data-v-0f238255]{position:relative;height:%?176?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative}.user-info-box .bg[data-v-0f238255]{position:absolute;left:0;top:0;width:100%;height:100%;z-index:1}.user-info-box .portrait-box[data-v-0f238255]{width:%?114?%;height:%?114?%;border-radius:50%;overflow:hidden;margin-left:%?40?%;position:relative;z-index:2}.user-info-box .portrait-box .portrait[data-v-0f238255]{border-radius:50%;width:%?114?%;height:%?114?%}.user-info-box .info-box[data-v-0f238255]{position:relative;z-index:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:%?25?%;font-size:%?28?%;color:#fff;line-height:%?40?%}.user-info-box .info-box .username[data-v-0f238255]{font-size:%?30?%}.user-info-setting[data-v-0f238255]{position:absolute;z-index:9;top:%?20?%;right:%?25?%;padding:%?15?%;font-size:%?24?%;color:#861e17;vertical-align:middle}.user-info-setting .icon-setting[data-v-0f238255]{padding-right:%?8?%}.order-section[data-v-0f238255]{margin-top:%?25?%}.order-section .order-item[data-v-0f238255]{width:%?120?%;height:%?120?%}.order-section .order-item .icon[data-v-0f238255]{width:%?100?%;height:%?60?%;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;position:relative}.order-section .order-item .icon .iconfont[data-v-0f238255]{font-size:%?48?%;color:#dca754}.order-section .order-item .icon .iconfont .badge[data-v-0f238255]{position:absolute;top:0;left:%?8?%}.order-section .order-item .icon .iconfont.iconfont-all[data-v-0f238255]{font-size:%?42?%}.order-section .order-item .icon .iconfont.iconfont-transport[data-v-0f238255]{font-size:%?50?%}.order-section .order-item .icon .iconfont.iconfont-finished[data-v-0f238255]{font-size:%?54?%}.order-section .order-item .icon .iconfont.iconfont-service[data-v-0f238255]{font-size:%?45?%}.order-section .order-item .name[data-v-0f238255]{font-size:%?24?%;color:#828282;max-width:100%;overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis}.list-section[data-v-0f238255]{padding-top:%?30?%}.list-section .list-cell[data-v-0f238255]{margin-top:%?30?%;background-color:#fff;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:%?26?% %?30?% %?26?% %?40?%}.list-section .list-cell .cell-tit[data-v-0f238255]{font-size:%?24?%;color:#828282;line-height:%?28?%}.list-section .list-cell .icon-arrow[data-v-0f238255]{position:absolute;top:50%;right:%?20?%;color:#c6c6c6;font-weight:700;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}body.?%PAGE?%[data-v-0f238255]{background:#f8f8f8}",""])},eb40:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"tuiBadge",props:{type:{type:String,default:"primary"},size:{type:String,default:""},dot:{type:Boolean,default:!1},visible:{type:Boolean,default:!0}}};e.default=n}}]);