(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-payment-payment"],{"074d":function(e,t,i){var a=i("cda2");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var s=i("4f06").default;s("a894c88a",a,!0,{sourceMap:!1,shadowMode:!1})},"17d9":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"address-section",on:{click:function(t){t=e.$handleEvent(t),e.linkToAddress(t)}}},[i("v-uni-view",{staticClass:"order-content"},[i("v-uni-view",{staticClass:"cen"},[i("v-uni-view",{staticClass:"top"},[i("v-uni-text",{staticClass:"name"},[e._v(e._s(e.address.addressRecipients))]),i("v-uni-text",{staticClass:"mobile"},[e._v(e._s(e.address.addressPhone))])],1),i("v-uni-view",{staticClass:"address"},[e._v(e._s(e.address.addressSheng)+e._s(e.address.addressShi)+e._s(e.address.addressQu)+e._s(e.address.addressAddress))])],1),i("v-uni-text",{staticClass:"iconfont icon-arrowRight icon-you"})],1),i("v-uni-image",{staticClass:"a-bg",attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAAFCAYAAAAaAWmiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Rjk3RjkzMjM2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Rjk3RjkzMjQ2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGOTdGOTMyMTY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGOTdGOTMyMjY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrEOZlQAAAiuSURBVHjazJp7bFvV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"}})],1),i("v-uni-view",{staticClass:"goods-section mt-20"},e._l(e.payData.goodsListDetailList,function(t,a){return i("v-uni-view",{staticClass:"g-item border-bottom"},[i("v-uni-image",{attrs:{src:t.goodsMainimagepath}}),i("v-uni-view",{staticClass:"right"},[i("v-uni-view",{staticClass:"title clamp"},[e._v(e._s(t.goodsProductname))]),i("v-uni-view",{staticClass:"spec"},[e._v(e._s(t.goodsTitle))]),i("v-uni-view",{staticClass:"price-box"},[i("v-uni-view",{staticClass:"priceInfo"},[t.salePrice?i("v-uni-view",{staticClass:"salePrice"},[e._v("¥"),i("v-uni-text",{staticClass:"price"},[e._v(e._s(t.salePrice))])],1):e._e(),t.salePrice&&t.credits?i("v-uni-view",{staticClass:"and"},[e._v("+")]):e._e(),t.credits?i("v-uni-view",{staticClass:"salePoints"},[i("v-uni-text",{staticClass:"points"},[e._v(e._s(t.credits))]),e._v("分")],1):e._e()],1),i("v-uni-view",{staticClass:"number"},[e._v("x "+e._s(t.goodsCount))])],1)],1)],1)}),1),i("v-uni-view",{staticClass:"yt-list"},[i("v-uni-view",{staticClass:"yt-list-cell border-bottom"},[i("v-uni-view",{staticClass:"cell-tit"},[e._v("快递方式")]),i("v-uni-view",{staticClass:"cell-tip"},[e._v(e._s(e.payData.express&&e.payData.express.name))])],1),i("v-uni-view",{staticClass:"yt-list-cell"},[i("v-uni-view",{staticClass:"cell-tit"},[e._v("备注")]),i("v-uni-view",{staticClass:"cell-tip cell-remark-tip"},[i("v-uni-input",{staticClass:"action-input",attrs:{type:"text",placeholder:"请填写备注信息"},model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}})],1)],1)],1),i("v-uni-view",{staticClass:"yt-list mt-20"},[e.payData.balance?i("v-uni-view",{staticClass:"yt-list-cell border-bottom"},[i("v-uni-view",{staticClass:"cell-tit"},[e._v("账户余额")]),i("v-uni-view",{staticClass:"cell-tip cell-account-tip"},[i("v-uni-view",{staticClass:"num red"},[e._v(e._s(e.payData.balance))]),i("v-uni-view",{staticClass:"action-right"},[i("v-uni-switch",{staticClass:"switchBtn",staticStyle:{transform:"scale(0.7)"},attrs:{color:"#E93548"},on:{change:function(t){t=e.$handleEvent(t),e.switchChange(t)}}})],1)],1)],1):e._e(),i("v-uni-view",{staticClass:"yt-list-cell",on:{click:function(t){t=e.$handleEvent(t),e.linkToCoupon(t)}}},[i("v-uni-view",{staticClass:"cell-tit ticket-tit"},[i("v-uni-text",{staticClass:"ticket-name"},[e._v("优惠券")]),i("v-uni-text",{staticClass:"ticket"},[i("v-uni-text",{staticClass:"num"},[e._v("0")]),e._v("张可用")],1)],1),i("v-uni-view",{staticClass:"cell-tip cell-coupon-tip"},[i("v-uni-view",{staticClass:"red"},[e._v("-¥"),i("v-uni-text",{staticClass:"num"},[e._v("0")])],1),i("v-uni-view",{staticClass:"icon-arrow iconfont icon-arrowRight"})],1)],1)],1),i("v-uni-view",{staticClass:"yt-list mt-20"},[e.totalPriceDecrease?i("v-uni-view",{staticClass:"yt-list-cell"},[i("v-uni-view",{staticClass:"cell-tit"},[e._v("商品金额")]),i("v-uni-view",{staticClass:"cell-tip"},[i("v-uni-text",{staticClass:"red"},[e._v("¥"),i("v-uni-text",{staticClass:"num"},[e._v(e._s(e.totalPriceDecrease))])],1)],1)],1):e._e(),e.payData.express&&e.payData.express.fee?i("v-uni-view",{staticClass:"yt-list-cell"},[i("v-uni-view",{staticClass:"cell-tit"},[e._v("快递费")]),i("v-uni-view",{staticClass:"cell-tip"},[i("v-uni-text",{staticClass:"red"},[e._v("¥"),i("v-uni-text",{staticClass:"num"},[e._v(e._s(e.payData.express&&e.payData.express.fee))])],1)],1)],1):e._e(),e.balanceType?i("v-uni-view",{staticClass:"yt-list-cell"},[i("v-uni-view",{staticClass:"cell-tit"},[e._v("余额支付")]),i("v-uni-view",{staticClass:"cell-tip"},[i("v-uni-text",{staticClass:"red"},[e._v("¥"),i("v-uni-text",{staticClass:"num"},[e._v(e._s(e.balancePay))])],1)],1)],1):e._e(),e.payData.credits?i("v-uni-view",{staticClass:"yt-list-cell"},[i("v-uni-view",{staticClass:"cell-tit"},[e._v("积分支付")]),i("v-uni-view",{staticClass:"cell-tip"},[i("v-uni-text",{staticClass:"red"},[i("v-uni-text",{staticClass:"num"},[e._v(e._s(e.payData.credits))]),e._v("分")],1)],1)],1):e._e(),e.payData.coupons?i("v-uni-view",{staticClass:"yt-list-cell"},[i("v-uni-view",{staticClass:"cell-tit"},[e._v("优惠支付")]),i("v-uni-view",{staticClass:"cell-tip"},[i("v-uni-text",{staticClass:"red"},[e._v("¥"),i("v-uni-text",{staticClass:"num"},[e._v(e._s(e.payData.coupons))])],1)],1)],1):e._e(),i("v-uni-view",{staticClass:"yt-list-cell border-top"},[i("v-uni-view",{staticClass:"cell-tit"}),i("v-uni-view",{staticClass:"cell-tip cell-amount-tip"},[e._v("实付金额"),i("v-uni-text",{staticClass:"price red"},[e._v("¥"),i("v-uni-text",{staticClass:"num"},[e._v(e._s(e.payPrice))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"footer"},[i("v-uni-view",{staticClass:"submit",on:{click:function(t){t=e.$handleEvent(t),e.handleSubmit(t)}}},[e._v("立即下单")])],1)],1)},s=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return s})},a7e6:function(e,t,i){"use strict";i.r(t);var a=i("e5e5"),s=i.n(a);for(var n in a)"default"!==n&&function(e){i.d(t,e,function(){return a[e]})}(n);t["default"]=s.a},b9fb:function(e,t,i){"use strict";i.r(t);var a=i("17d9"),s=i("a7e6");for(var n in s)"default"!==n&&function(e){i.d(t,e,function(){return s[e]})}(n);i("dd47");var l=i("2877"),o=Object(l["a"])(s["default"],a["a"],a["b"],!1,null,"07ad962f",null);t["default"]=o.exports},cda2:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'@charset "UTF-8";uni-page-body[data-v-07ad962f]{background-color:#f7f7f7;padding-bottom:%?156?%}.address-section[data-v-07ad962f]{padding:%?15?% %?20?%;line-height:%?40?%;background:#fff;position:relative;border-top:1px solid #f2f2f2}.address-section .order-content[data-v-07ad962f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;min-height:%?60?%;padding-bottom:%?5?%}.address-section .cen[data-v-07ad962f]{font-size:%?28?%;color:#343434;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;margin-right:%?30?%}.address-section .name[data-v-07ad962f]{margin-right:%?24?%}.address-section .address[data-v-07ad962f]{font-size:%?28?%;color:#848484}.address-section .icon-you[data-v-07ad962f]{font-size:%?40?%;color:#c6c6c6}.address-section .a-bg[data-v-07ad962f]{position:absolute;left:0;bottom:0;display:block;width:100%;height:%?5?%}.border-bottom[data-v-07ad962f]{position:relative}.border-bottom[data-v-07ad962f]:after{content:"";position:absolute;left:%?10?%;right:%?10?%;bottom:0;height:1px;background:#e8e8e8}.border-top[data-v-07ad962f]{position:relative}.border-top[data-v-07ad962f]:after{content:"";position:absolute;left:%?10?%;right:%?10?%;top:0;height:1px;background:#e8e8e8}.mt-20[data-v-07ad962f]{margin-top:%?20?%}.red[data-v-07ad962f]{color:#e93548!important}.goods-section[data-v-07ad962f]{background:#fff}.goods-section .g-item[data-v-07ad962f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?20?% %?30?%}.goods-section .g-item uni-image[data-v-07ad962f]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:block;width:%?152?%;height:%?152?%}.goods-section .g-item .right[data-v-07ad962f]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding-left:%?24?%;overflow:hidden;position:relative}.goods-section .g-item .title[data-v-07ad962f]{font-size:%?28?%;color:#2f2f2f;word-break:break-all;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;margin-top:%?-6?%}.goods-section .g-item .spec[data-v-07ad962f]{font-size:%?24?%;position:absolute;bottom:%?40?%;overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis;color:#b3b3b3}.goods-section .g-item .price-box[data-v-07ad962f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:%?32?%;position:absolute;left:%?20?%;bottom:%?-6?%;right:0;font-size:%?24?%}.goods-section .g-item .price-box .priceInfo[data-v-07ad962f]{color:#e93548;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}.goods-section .g-item .price-box .priceInfo .and[data-v-07ad962f]{padding-left:%?10?%}.goods-section .g-item .price-box .number[data-v-07ad962f]{color:#b3b3b3}.goods-section .g-item .step-box[data-v-07ad962f]{position:relative}.yt-list[data-v-07ad962f]{background:#fff}.yt-list-cell[data-v-07ad962f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:%?10?% %?20?%;line-height:%?70?%;position:relative}.yt-list-cell .cell-tit[data-v-07ad962f]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:%?28?%;color:#333;margin-right:%?10?%}.yt-list-cell .cell-tit.ticket-tit .ticket-name[data-v-07ad962f]{padding-right:%?35?%}.yt-list-cell .cell-tit.ticket-tit .ticket[data-v-07ad962f]{background:url(/static/img/ticket.png) no-repeat;background-size:100% 100%;padding:%?8?% %?20?%;color:#fff;font-size:%?24?%}.yt-list-cell .cell-tip[data-v-07ad962f]{font-size:%?24?%;color:#a2a2a2}.yt-list-cell .cell-tip.cell-remark-tip[data-v-07ad962f]{width:80%;border:1px #f3f3f3 solid;text-align:right;padding:0 %?10?%;height:%?65?%;line-height:%?65?%}.yt-list-cell .cell-tip.cell-remark-tip .action-input[data-v-07ad962f]{font-size:%?24?%;height:100%}.yt-list-cell .cell-tip.cell-account-tip[data-v-07ad962f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.yt-list-cell .cell-tip.cell-account-tip .num[data-v-07ad962f]{padding-right:%?18?%}.yt-list-cell .cell-tip.cell-account-tip .action-right[data-v-07ad962f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yt-list-cell .cell-tip.cell-account-tip .action-right .switchBtn[data-v-07ad962f]{margin-top:%?-10?%}.yt-list-cell .cell-tip.cell-coupon-tip[data-v-07ad962f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yt-list-cell .cell-tip.cell-coupon-tip .icon-arrow[data-v-07ad962f]{color:#c6c6c6;vertical-align:middle;padding:0 0 0 %?10?%;font-weight:600}.yt-list-cell .cell-tip.cell-amount-tip[data-v-07ad962f]{font-size:%?28?%;color:#333}.yt-list-cell .cell-tip.cell-amount-tip .price[data-v-07ad962f]{padding-left:%?20?%;font-size:%?32?%!important}\n/* 支付列表 */.pay-list[data-v-07ad962f]{padding-left:%?40?%;margin-top:%?16?%;background:#fff}.pay-list .pay-item[data-v-07ad962f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding-right:%?20?%;line-height:1;height:%?110?%;position:relative}.pay-list .icon-weixinzhifu[data-v-07ad962f]{width:%?80?%;font-size:%?40?%;color:#6bcc03}.pay-list .icon-alipay[data-v-07ad962f]{width:%?80?%;font-size:%?40?%;color:#06b4fd}.pay-list .icon-xuanzhong2[data-v-07ad962f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:%?60?%;height:%?60?%;font-size:%?40?%}.pay-list .tit[data-v-07ad962f]{font-size:%?32?%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.footer[data-v-07ad962f]{position:fixed;left:0;bottom:0;z-index:995;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:%?30?%;background-color:#fff;z-index:998;padding:%?30?% %?20?% %?20?% %?20?%;-webkit-box-sizing:border-box;box-sizing:border-box}.footer .submit[data-v-07ad962f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;height:%?106?%;color:#fff;font-size:%?32?%;background:#07b804;border-radius:%?10?%}\n/* 优惠券面板 */.mask[data-v-07ad962f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;position:fixed;left:0;top:var(--window-top);bottom:0;width:100%;background:rgba(0,0,0,0);z-index:9995;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}.mask .mask-content[data-v-07ad962f]{width:100%;min-height:30vh;max-height:70vh;background:#f3f3f3;-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%);-webkit-transition:.3s;-o-transition:.3s;transition:.3s;overflow-y:scroll}.mask.none[data-v-07ad962f]{display:none}.mask.show[data-v-07ad962f]{background:rgba(0,0,0,.4)}.mask.show .mask-content[data-v-07ad962f]{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}body.?%PAGE?%[data-v-07ad962f]{background-color:#f7f7f7}',""])},dd47:function(e,t,i){"use strict";var a=i("074d"),s=i.n(a);s.a},e5e5:function(e,t,i){"use strict";var a=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("4917");var s=a(i("cebc"));i("c5f6");var n=i("2f62"),l={data:function(){return{hasAddress:!0,isWx:!1,isWebWx:!1,isWeb:!1,remark:"",payData:{},address:{},goodsList:[],balanceType:0,fee:0}},methods:{linkToAddress:function(){"请先去创建地址"===this.address.addressRecipients?uni.navigateTo({url:"/pages/addressManage/addressManage?type=add"}):uni.navigateTo({url:"/pages/address/address?source=1"})},linkToCoupon:function(){uni.redirectTo({url:"/pages/coupon/coupon"})},switchChange:function(e){this.balanceType=Number(e.detail.value)},handleWxPay:function(e){var t=this;this.$http.post("/mall/app/order/submit",(0,s.default)({},e,{payChannels:"8"})).then(function(i){1==i.result.orderState?(uni.showToast({icon:"none",title:"订单提交成功"}),uni.removeStorageSync("chooseAddress"),setTimeout(function(){uni.redirectTo({url:"/pages/orderDetail/orderDetail?orderId="+i.result.orderId})},1e3)):t.$http.post("/mall/app/order/submit",(0,s.default)({},e,{payChannels:"8",callBackNo:i.result.orderNo})).then(function(e){wx.requestPayment({timeStamp:e.result.payResponse.wxPayResponse.timeStamp,nonceStr:e.result.payResponse.wxPayResponse.nonceStr,package:e.result.payResponse.wxPayResponse.packageStr,signType:e.result.payResponse.wxPayResponse.signType,paySign:e.result.payResponse.wxPayResponse.paySign,success:function(e){console.log(e)},fail:function(e){console.log(e)},complete:function(e){console.log(e)}})}).catch(function(e){console.log(e)})}).catch(function(e){console.log(e)})},handleWxWebPay:function(e){var t=this;this.$http.post("/mall/app/order/submit",(0,s.default)({},e,{payChannels:""})).then(function(i){i.result&&1==i.result.orderState?(console.log(i),uni.showToast({icon:"none",title:"订单提交成功"}),uni.removeStorageSync("chooseAddress"),setTimeout(function(){uni.redirectTo({url:"/pages/orderDetail/orderDetail?orderId="+i.result.orderId})},1e3)):0==i.code?window.location.href="http://".concat(t.paymentUrl,".yujianli.cn/#/pages/payment/cashRegister?orderNo=")+i.result.orderNo+"&mallDomain="+t.baseInfo.mallDomain+"&orderPayPrice="+e.payPrice+"&token="+encodeURIComponent(t.token):uni.showToast({icon:"none",title:i.message})}).catch(function(e){console.log(e)})},handleWebPay:function(e){var t=this;this.$http.post("/mall/app/order/submit",(0,s.default)({},e,{payChannels:""})).then(function(i){1==i.result.orderState?(console.log(i),uni.showToast({icon:"none",title:"订单提交成功"}),uni.removeStorageSync("chooseAddress"),setTimeout(function(){uni.redirectTo({url:"/pages/orderDetail/orderDetail?orderId="+i.result.orderId})},1e3)):t.$http.post("/mall/app/order/submit",(0,s.default)({},e,{payChannels:"2",callBackNo:i.result.orderNo})).then(function(e){console.log(e)}).catch(function(e){console.log(e)})}).catch(function(e){console.log(e)})},handleSubmit:function(){this.hasAddress||uni.showToast({icon:"none",title:"请先去创建地址"});var e=(0,s.default)({},this.baseInfo,{accountId:this.userInfo.accountId,addressId:this.address.addressId,balance:this.balancePay,isBalance:this.balanceType,credits:this.payData.credits,expressFee:this.payData.express.fee,goodsList:this.goodsList,payPrice:this.payPrice,remark:this.remark,totalPrice:this.payData.totalPrice,goodsPrice:this.totalPriceDecrease,address:this.address});this.isWx?this.handleWxPay(e):this.isWebWx?this.handleWxWebPay(e):this.isWeb&&this.handleWebPay(e)},checkEnvironment:function(){navigator&&navigator.userAgent?this.browserRedirect():this.isWx=!0},browserRedirect:function(){var e=navigator.userAgent.toLowerCase(),t="micromessenger"==e.match(/MicroMessenger/i);t?this.isWebWx=!0:this.isWeb=!0},getOrderData:function(){var e=this;this.$http.post("/mall/app/order/confirm",(0,s.default)({},this.baseInfo,{accountId:this.userInfo.accountId,goodsList:uni.getStorageSync("buyList")})).then(function(t){console.log(t),0==t.code?(t.result.address?e.hasAddress=!0:e.hasAddress=!1,e.payData=t.result,e.address=t.result.address||{},e.address.addressRecipients=t.result.address&&t.result.address.addressRecipients||"请先去创建地址",t.result.goodsListDetailList.map(function(t){t.mallGoodsId=t.id,e.goodsList.push(t)}),e.fee=t.result.express.fee,uni.getStorageSync("chooseAddress")&&(e.address=uni.getStorageSync("chooseAddress"))):console.log("payment.vue-- confirm接口获取数据失败")}).catch(function(e){console.log("payment.vue-- confirm接口获取数据错误"+e)})}},computed:(0,s.default)({},(0,n.mapState)("common",["baseInfo","userInfo","paymentUrl","token"]),{totalPriceDecrease:function(){return this.payData.totalPrice-(this.payData.express&&this.payData.express.fee)},balancePay:function(){return this.totalPriceDecrease+this.fee>this.payData.balance?this.payData.balance:this.totalPriceDecrease+this.fee},payPrice:function(){return this.balanceType?this.totalPriceDecrease+this.fee-this.balancePay:this.totalPriceDecrease+this.fee}}),onShow:function(){this.getOrderData()},onBackPress:function(){uni.removeStorageSync("chooseAddress")},onLoad:function(e){this.checkEnvironment()}};t.default=l}}]);