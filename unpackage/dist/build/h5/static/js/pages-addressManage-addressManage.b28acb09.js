(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-addressManage-addressManage"],{"4b42":function(e,t,s){"use strict";s.r(t);var a=s("a8d1"),d=s("919b");for(var i in d)"default"!==i&&function(e){s.d(t,e,function(){return d[e]})}(i);s("8e51");var n=s("2877"),r=Object(n["a"])(d["default"],a["a"],a["b"],!1,null,"376c324f",null);t["default"]=r.exports},"7d7e":function(e,t,s){t=e.exports=s("2350")(!1),t.push([e.i,'uni-page-body[data-v-376c324f]{padding-top:%?16?%}.row[data-v-376c324f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;position:relative;padding:%?0?% %?30?%;height:%?110?%;background:#fff;position:relative}.row[data-v-376c324f]:after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px;background:#e8e8e8}.row .tit[data-v-376c324f]{width:%?180?%;font-size:%?28?%;color:#8c8c8c;display:inline-block;overflow:hidden;margin-right:%?20?%}.row .input[data-v-376c324f]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:%?28?%;color:#303030;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;min-height:40%;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0!important;margin:0!important}.row .switchBtn[data-v-376c324f]{float:right;position:absolute;right:%?30?%;top:0;line-height:%?110?%}.add-btn[data-v-376c324f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:%?710?%;height:%?106?%;margin:%?60?% auto 0;font-size:%?32?%;color:#fff;background:#e84342;border-radius:%?10?%;-webkit-box-shadow:1px 2px 5px rgba(219,63,96,.4);box-shadow:1px 2px 5px rgba(219,63,96,.4)}.delete-btn[data-v-376c324f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:%?710?%;height:%?106?%;margin:%?40?% auto 0;font-size:%?32?%;color:#000;border-radius:%?10?%}',""])},"7eae":function(e,t,s){var a=s("7d7e");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var d=s("4f06").default;d("69813091",a,!0,{sourceMap:!1,shadowMode:!1})},"8e51":function(e,t,s){"use strict";var a=s("7eae"),d=s.n(a);d.a},"919b":function(e,t,s){"use strict";s.r(t);var a=s("e36a"),d=s.n(a);for(var i in a)"default"!==i&&function(e){s.d(t,e,function(){return a[e]})}(i);t["default"]=d.a},a8d1:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-uni-view",{staticClass:"content"},[s("v-uni-view",{staticClass:"row"},[s("v-uni-view",{staticClass:"tit"},[e._v("收货人")]),s("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"收货人姓名","placeholder-class":"placeholder"},model:{value:e.addressData.addressRecipients,callback:function(t){e.$set(e.addressData,"addressRecipients",t)},expression:"addressData.addressRecipients"}})],1),s("v-uni-view",{staticClass:"row"},[s("v-uni-view",{staticClass:"tit"},[e._v("手机号码")]),s("v-uni-input",{staticClass:"input",attrs:{type:"number",placeholder:"收货人手机号码","placeholder-class":"placeholder"},model:{value:e.addressData.addressPhone,callback:function(t){e.$set(e.addressData,"addressPhone",t)},expression:"addressData.addressPhone"}})],1),s("v-uni-view",{staticClass:"row"},[s("v-uni-view",{staticClass:"tit"},[e._v("收货地址")]),s("v-uni-view",{staticClass:"input",on:{click:function(t){t=e.$handleEvent(t),e.chooseLocation(t)}}},[e._v(e._s(e.addressData.addressSheng)+e._s(e.addressData.addressShi)+e._s(e.addressData.addressQu))])],1),s("v-uni-view",{staticClass:"row"},[s("v-uni-view",{staticClass:"tit"},[e._v("详细地址")]),s("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入详细地址","placeholder-class":"placeholder"},model:{value:e.addressData.addressAddress,callback:function(t){e.$set(e.addressData,"addressAddress",t)},expression:"addressData.addressAddress"}})],1),s("v-uni-button",{staticClass:"add-btn",on:{click:function(t){t=e.$handleEvent(t),e.confirm(t)}}},[e._v("确定")]),s("v-uni-button",{staticClass:"delete-btn",on:{click:function(t){t=e.$handleEvent(t),e.deleteAddress(t)}}},[e._v("删除")])],1)},d=[];s.d(t,"a",function(){return a}),s.d(t,"b",function(){return d})},e36a:function(e,t,s){"use strict";var a=s("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=a(s("cebc"));s("c5f6");var i=s("2f62"),n={data:function(){return{addressId:"",addressData:{addressRecipients:"",addressPhone:"",addressSheng:"",addressShi:"",addressQu:"",addressAddress:"",addressSelected:0}}},methods:{chooseLocation:function(){var e=this;uni.chooseLocation({success:function(t){var s=t.address.indexOf("省"),a=t.address.indexOf("市"),d=t.address.indexOf("区");e.addressData.addressSheng=t.address.slice(0,s+1),e.addressData.addressShi=t.address.slice(s+1,a+1),e.addressData.addressQu=t.address.slice(a+1,d+1),e.addressData.addressAddress=t.address.slice(d+1)}})},switchChange:function(e){this.addressData.addressSelected=Number(e.detail.value)},confirm:function(){var e=this,t=this.addressData;t.addressRecipients?/(^1[3|4|5|7|8][0-9]{9}$)/.test(t.addressPhone)?t.addressQu?t.addressAddress?"edit"==this.manageType?this.$http.post("/mall/app/address/update",(0,d.default)({},this.baseInfo,{accountId:this.userInfo.accountId,addressId:this.addressId,receiverName:this.addressData.addressRecipients,receiverPhone:this.addressData.addressPhone,province:this.addressData.addressSheng,city:this.addressData.addressShi,district:this.addressData.addressQu,address:this.addressData.addressAddress,addressSelected:this.addressData.addressSelected})).then(function(t){0==t.code&&(e.tui.toast("地址".concat("edit"==e.manageType?"修改":"添加","成功")),setTimeout(function(){uni.navigateBack()},800))}).catch(function(e){console.log(e)}):this.$http.post("/mall/app/address/add",(0,d.default)({},this.baseInfo,{accountId:this.userInfo.accountId,receiverName:this.addressData.addressRecipients,receiverPhone:this.addressData.addressPhone,province:this.addressData.addressSheng,city:this.addressData.addressShi,district:this.addressData.addressQu,address:this.addressData.addressAddress,addressSelected:this.addressData.addressSelected})).then(function(t){0==t.code&&(e.tui.toast("地址".concat("edit"==e.manageType?"修改":"添加","成功")),setTimeout(function(){uni.navigateBack()},800))}).catch(function(e){console.log(e)}):this.tui.toast("请填写详细门牌号信息"):this.tui.toast("请在地图选择所在位置"):this.tui.toast("请输入正确的手机号码"):this.tui.toast("请填写收货人姓名")},deleteAddress:function(){var e=this;this.addressId&&this.$http.post("/mall/app/address/delete",(0,d.default)({},this.baseInfo,{accountId:this.userInfo.accountId,addressId:this.addressId})).then(function(t){0==t.code&&(e.tui.toast("删除成功"),setTimeout(function(){uni.navigateBack()},800))}).catch(function(e){console.log(e)})},initAddress:function(){var e=this;this.$http.post("/mall/app/address/one",(0,d.default)({},this.baseInfo,{accountId:this.userInfo.accountId,addressId:this.addressId})).then(function(t){console.log(t),0==t.code&&(e.addressData=t.result)}).catch(function(e){console.log(e)})}},computed:(0,d.default)({},(0,i.mapState)("common",["baseInfo","userInfo"])),onLoad:function(e){var t="新增地址";"edit"===e.type&&(t="编辑地址",this.addressId=e.data,this.initAddress()),this.manageType=e.type,uni.setNavigationBarTitle({title:t})}};t.default=n}}]);