(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-orderDetail-orderDetail"],{"29d0":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"order-info"},[2==t.initData.orderlistState||3==t.initData.orderlistState||4==t.initData.orderlistState?i("v-uni-view",{staticClass:"info-delivery info-mode",on:{click:function(e){e=t.$handleEvent(e),t.linkToDelivery(t.initData.orderId)}}},[i("v-uni-view",{staticClass:"iconfont icon-che-tianchong icon-status icon-car"}),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"status"},[t._v(t._s(t.expressData.statusName))]),i("v-uni-view",{staticClass:"text"},[t._v(t._s(t.expressData.data.context))]),i("v-uni-text",{staticClass:"iconfont icon-arrowRight icon-arrow"})],1)],1):t._e(),i("v-uni-view",{staticClass:"info-address info-mode"},[i("v-uni-view",{staticClass:"iconfont icon-biaodiandidian icon-status icon-location"}),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"status"},[t._v(t._s(t.initData.receiverName)),i("v-uni-text",{staticClass:"phone"},[t._v(t._s(t.initData.receiverPhone))])],1),i("v-uni-view",{staticClass:"text"},[t._v(t._s(t.initData.receiverAddress))])],1)],1)],1),i("v-uni-view",{staticClass:"order-detail mt-20"},[i("v-uni-view",{staticClass:"hd"},[i("v-uni-view",{staticClass:"number"},[t._v("订单编号："),i("v-uni-text",[t._v(t._s(t.initData.orderlistMainnum))])],1)],1),t._l(t.initData.details,function(e){return i("v-uni-view",{staticClass:"bd"},[i("v-uni-view",{staticClass:"pic"},[i("v-uni-image",{staticClass:"img",attrs:{src:e.goodsMainimagepath,mode:"aspectFill"}})],1),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"tit"},[t._v(t._s(e.goodsProductname))]),i("v-uni-view",{staticClass:"num"},[i("v-uni-text",[t._v(t._s(e.goodsRelationname))])],1),i("v-uni-view",{staticClass:"con"},[i("v-uni-view",{staticClass:"_left"},[t._v("¥"),i("v-uni-text",{staticClass:"price"},[t._v(t._s(e.goodsRelprice))])],1),i("v-uni-view",{staticClass:"_right"},[i("v-uni-text",{staticClass:"num"},[t._v("x"+t._s(e.goodsCount))])],1)],1)],1)],1)}),i("v-uni-view",{staticClass:"fd"},[i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"_left"},[t._v("快递方式")]),i("v-uni-view",{staticClass:"_right"},[t._v("快递："+t._s(t.initData.expressPay))])],1),i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"_left"},[t._v("留言")]),i("v-uni-view",{staticClass:"_right"},[t._v(t._s(t.initData.orderlistMessage))])],1)],1)],2),i("v-uni-view",{staticClass:"list-box mt-20"},[i("v-uni-view",{staticClass:"hd"},[i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"_left"},[t._v("应付总金额")]),i("v-uni-view",{staticClass:"_right"},[t._v("¥"+t._s(t.initData.orderlistAllprice))])],1),i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"_left"},[t._v("余额支付")]),i("v-uni-view",{staticClass:"_right"},[t._v("¥"+t._s(t.initData.rechargepay))])],1),i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"_left"},[t._v("优惠金额")]),i("v-uni-view",{staticClass:"_right"},[t._v("¥0.00")])],1)],1),i("v-uni-view",{staticClass:"bd"},[t._v("实付金额"),i("v-uni-text",{staticClass:"num"},[t._v("¥"+t._s(t.initData.payPrice))])],1)],1),i("v-uni-view",{staticClass:"list-box mt-20"},[i("v-uni-view",{staticClass:"hd"},[i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"_left"},[t._v("下单时间")]),i("v-uni-view",{staticClass:"_right"},[t._v("2019-03-24"),i("v-uni-text",{staticClass:"space"},[t._v("5:28")])],1)],1),i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"_left"},[t._v("付款时间")]),i("v-uni-view",{staticClass:"_right"},[t._v("2019-03-24"),i("v-uni-text",{staticClass:"space"},[t._v("5:28")])],1)],1)],1)],1),i("v-uni-view",{staticClass:"action-box"},[i("v-uni-view",{staticClass:"action-btn"},[t._v("联系客服")]),0==t.initData.orderlistState?i("v-uni-view",{staticClass:"action-btn"},[t._v("取消订单")]):t._e(),0==t.initData.orderlistState?i("v-uni-view",{staticClass:"action-btn action-red",on:{click:function(e){e=t.$handleEvent(e),t.linkToPayment(t.initData.details)}}},[t._v("去付款")]):t._e(),2==t.initData.orderlistState?i("v-uni-view",{staticClass:"action-btn action-red"},[t._v("确认收货")]):t._e()],1)],1)},s=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},"2b4ce":function(t,e,i){"use strict";var a=i("afca"),s=i.n(a);s.a},88599:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'uni-page-body[data-v-1cbf2454]{background:#f7f7f7;padding-bottom:%?110?%}.mt-20[data-v-1cbf2454]{margin-top:%?20?%}.info-mode[data-v-1cbf2454]{background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.info-mode .icon-status[data-v-1cbf2454]{width:%?110?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#a1a1a1;font-size:%?58?%}.info-mode .icon-status.icon-car[data-v-1cbf2454]{font-size:%?52?%}.info-mode .info[data-v-1cbf2454]{width:calc(100% - %?110?%);padding:%?20?% 0}.info-delivery .info[data-v-1cbf2454]{position:relative;padding-right:%?60?%}.info-delivery .info .status[data-v-1cbf2454]{white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;font-size:%?28?%;color:#e93b3d}.info-delivery .info .text[data-v-1cbf2454]{color:#000;font-size:%?24?%;margin-top:%?10?%;line-height:%?34?%}.info-delivery .info .icon-arrow[data-v-1cbf2454]{position:absolute;right:%?20?%;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);color:#323232;font-size:%?36?%}.info-address[data-v-1cbf2454]{border-top:1px solid #f5f5f5}.info-address .info .status[data-v-1cbf2454]{font-size:%?28?%;color:#303030}.info-address .info .status .phone[data-v-1cbf2454]{padding-left:%?20?%}.info-address .info .text[data-v-1cbf2454]{font-size:%?24?%;color:#8c8c8c}.order-detail[data-v-1cbf2454]{padding:%?20?%;background:#fff}.order-detail .hd[data-v-1cbf2454]{font-size:%?28?%;color:#505050;overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis}.order-detail .bd[data-v-1cbf2454]{padding:%?20?% 0;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.order-detail .bd[data-v-1cbf2454]:after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px;background:#e8e8e8}.order-detail .bd .pic[data-v-1cbf2454]{margin-right:%?20?%}.order-detail .bd .pic .img[data-v-1cbf2454]{width:%?152?%;height:%?152?%}.order-detail .bd .info[data-v-1cbf2454]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.order-detail .bd .info .tit[data-v-1cbf2454]{font-size:%?28?%;color:#2f2f2f;width:100%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;margin-top:%?-4?%}.order-detail .bd .info .num[data-v-1cbf2454]{font-size:%?24?%;color:#b3b3b3;margin-top:%?4?%}.order-detail .bd .info .con[data-v-1cbf2454]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-top:%?8?%}.order-detail .bd .info .con ._left[data-v-1cbf2454]{font-size:%?24?%;color:#e93548}.order-detail .bd .info .con ._left .price[data-v-1cbf2454]{font-size:%?32?%}.order-detail .bd .info .con ._right[data-v-1cbf2454]{font-size:%?24?%;color:#b3b3b3}.order-detail .fd[data-v-1cbf2454]{padding:%?15?% 0 0 0}.order-detail .fd .text[data-v-1cbf2454]{margin-top:%?10?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.order-detail .fd .text ._left[data-v-1cbf2454]{font-size:%?28?%;color:#a2a2a2}.order-detail .fd .text ._right[data-v-1cbf2454]{font-size:%?24?%;color:#333}.list-box[data-v-1cbf2454]{background:#fff;padding:0 %?20?%}.list-box .hd[data-v-1cbf2454]{padding:%?20?% 0 %?15?% 0}.list-box .hd .text[data-v-1cbf2454]{font-size:%?24?%;color:#a2a2a2;height:%?50?%;line-height:%?50?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.list-box .hd .text ._left[data-v-1cbf2454]{font-size:%?28?%;color:#a2a2a2}.list-box .hd .text ._right[data-v-1cbf2454]{font-size:%?24?%;color:#333}.list-box .bd[data-v-1cbf2454]{position:relative;padding:%?20?% 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?28?%;color:#333}.list-box .bd[data-v-1cbf2454]:before{content:"";position:absolute;left:0;right:0;top:0;height:1px;background:#e8e8e8}.list-box .bd .num[data-v-1cbf2454]{font-size:%?32?%;color:#e93548;padding-left:%?20?%}.action-box[data-v-1cbf2454]{position:fixed;left:0;right:0;bottom:0;background:#fff;padding:%?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.action-box[data-v-1cbf2454]:before{content:"";position:absolute;left:0;right:0;top:0;height:1px;background:#e8e8e8}.action-box .action-btn[data-v-1cbf2454]{height:%?66?%;border:1px solid #e3e3e3;padding:0 %?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?28?%;color:#474747;margin-left:%?20?%}.action-box .action-btn.action-red[data-v-1cbf2454]{border-color:#e93b3d;background:#e93b3d;color:#fff}body.?%PAGE?%[data-v-1cbf2454]{background:#f7f7f7}',""])},"8eb1":function(t,e,i){"use strict";i.r(e);var a=i("ea83"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=s.a},afca:function(t,e,i){var a=i("88599");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("3441efa8",a,!0,{sourceMap:!1,shadowMode:!1})},e70f:function(t,e,i){"use strict";i.r(e);var a=i("29d0"),s=i("8eb1");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);i("2b4ce");var o=i("2877"),c=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,"1cbf2454",null);e["default"]=c.exports},ea83:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(i("cebc")),n=i("2f62"),o={data:function(){return{initData:{},expressData:{}}},methods:{linkToDelivery:function(t){uni.navigateTo({url:"/pages/delivery/delivery?orderId="+t})},linkToPayment:function(t){var e=[];t.map(function(t){e.push({goodsCount:t.goodsCount,mallGoodsId:t.mallGoodsId})}),uni.setStorage({key:"buyList",data:e,success:function(){uni.navigateTo({url:"/pages/payment/payment"})}})},transformStatus:function(t){switch(t){case-1:return"待查询";case 0:return"查询异常";case 1:return"暂无记录";case 2:return"在途中";case 3:return"派送中";case 4:return"已签收";case 5:return"用户拒签";case 6:return"疑难件";case 7:return"无效单";default:return""}},initExpress:function(t){var e=this;this.$http.post("/mall/app/order/express",(0,s.default)({},this.baseInfo,{accountId:this.userInfo.accountId,orderId:t})).then(function(t){0==t.code&&(e.expressData=JSON.parse(t.result.result).showapi_res_body,e.expressData.statusName=e.transformStatus(e.expressData.status),e.expressData.data=e.expressData.data[0])}).catch(function(t){console.log(t)})},loadData:function(t){var e=this;this.$http.post("/mall/app/order/detail",(0,s.default)({},this.baseInfo,{accountId:this.userInfo.accountId,orderId:t})).then(function(t){0==t.code&&(e.initData=t.result)}).catch(function(t){console.log(t)})}},computed:(0,s.default)({},(0,n.mapState)("common",["baseInfo","userInfo"])),onLoad:function(t){this.loadData(t.orderId),this.initExpress(t.orderId)}};e.default=o}}]);