(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-address"],{1217:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,'uni-page-body[data-v-4aaf20d2]{padding-bottom:%?120?%}.content[data-v-4aaf20d2]{position:relative}.border-bottom[data-v-4aaf20d2]{position:relative}.border-bottom[data-v-4aaf20d2]:after{content:"";position:absolute;left:%?10?%;right:%?10?%;bottom:0;height:1px;background:#e8e8e8}.list[data-v-4aaf20d2]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:%?20?% %?30?%;background:#fff;position:relative}.list .checkbox-box[data-v-4aaf20d2]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-right:%?20?%}.list .checkbox-box .checkbox[data-v-4aaf20d2]{width:%?35?%;height:%?35?%;border-radius:100%;border:solid %?2?% #979797;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.list .checkbox-box .checkbox .on[data-v-4aaf20d2]{width:%?35?%;height:%?35?%;border-radius:100%;background-color:#e93b3d;position:relative;-webkit-transform:rotate(225deg);-ms-transform:rotate(225deg);transform:rotate(225deg)}.list .checkbox-box .checkbox .on[data-v-4aaf20d2]:before{content:"";width:%?4?%;height:%?19?%;background-color:#fff;border-radius:%?4?%;position:absolute;left:calc(50% - %?6?%);top:calc(50% - %?8?%)}.list .checkbox-box .checkbox .on[data-v-4aaf20d2]:after{content:"";width:%?10?%;height:%?4?%;background-color:#fff;border-radius:%?4?%;position:absolute;left:calc(50% - %?5?%);top:calc(50% - %?8?%)}.list .checkbox-box .checkbox.on[data-v-4aaf20d2]{border-color:#fff}.wrapper[data-v-4aaf20d2]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.u-box[data-v-4aaf20d2]{font-size:%?28?%;color:#303030}.u-box .name[data-v-4aaf20d2]{margin-right:%?20?%}.address-box[data-v-4aaf20d2]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-top:%?10?%}.address-box .address[data-v-4aaf20d2]{font-size:%?28?%;color:#8c8c8c}.action[data-v-4aaf20d2]{padding:%?15?% %?20?%;font-size:%?28?%;color:#e93b3d}.add-btn[data-v-4aaf20d2]{position:fixed;left:0;right:0;bottom:0;z-index:95;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:%?106?%;line-height:%?106?%;font-size:%?32?%;color:#fff;background:#e93b3d;border-radius:0}',""])},"2a3d":function(e,t,a){"use strict";var i=a("8e9c"),s=a.n(i);s.a},8859:function(e,t,a){"use strict";a.r(t);var i=a("a568"),s=a.n(i);for(var n in i)"default"!==n&&function(e){a.d(t,e,function(){return i[e]})}(n);t["default"]=s.a},"8e9c":function(e,t,a){var i=a("1217");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=a("4f06").default;s("f59e5ce8",i,!0,{sourceMap:!1,shadowMode:!1})},"96ad":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"content"},[e._l(e.addressList,function(t,i){return a("v-uni-view",{key:i,staticClass:"list border-bottom",on:{click:function(a){a=e.$handleEvent(a),e.checkAddress(t,i)}}},[a("v-uni-view",{staticClass:"wrapper"},[a("v-uni-view",{staticClass:"u-box"},[a("v-uni-text",{staticClass:"name"},[e._v(e._s(t.addressRecipients))]),a("v-uni-text",{staticClass:"mobile"},[e._v(e._s(t.addressPhone))])],1),a("v-uni-view",{staticClass:"address-box"},[a("v-uni-text",{staticClass:"address"},[e._v(e._s(t.addressSheng)+e._s(t.addressShi)+e._s(t.addressQu)+e._s(t.addressAddress))])],1)],1),a("v-uni-text",{staticClass:"action",on:{click:function(a){a.stopPropagation(),a=e.$handleEvent(a),e.addAddress("edit",t.addressId)}}},[e._v("编辑")])],1)}),a("v-uni-button",{staticClass:"add-btn",on:{click:function(t){t=e.$handleEvent(t),e.addAddress("add")}}},[e._v("新增地址")])],2)},s=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return s})},"9a8d":function(e,t,a){"use strict";a.r(t);var i=a("96ad"),s=a("8859");for(var n in s)"default"!==n&&function(e){a.d(t,e,function(){return s[e]})}(n);a("2a3d");var o=a("2877"),d=Object(o["a"])(s["default"],i["a"],i["b"],!1,null,"4aaf20d2",null);t["default"]=d.exports},a568:function(e,t,a){"use strict";var i=a("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(a("cebc")),n=a("2f62"),o={data:function(){return{source:0,addressList:[]}},methods:{changeDefaultAddress:function(e){var t=this;this.$http.post("/mall/app/address/default",(0,s.default)({},this.baseInfo,{accountId:this.userInfo.accountId,addressId:e,addressSelected:1})).then(function(e){console.log(e),0==e.code&&t.initAddressData()}).catch(function(e){console.log(e)})},checkAddress:function(e,t){1==this.source&&(uni.setStorageSync("chooseAddress",e),uni.navigateBack())},addAddress:function(e,t){uni.navigateTo({url:"/pages/addressManage/addressManage?type=".concat(e,"&data=").concat(t)})},initAddressData:function(){var e=this;this.$http.post("/mall/app/address/list",(0,s.default)({},this.baseInfo,{accountId:this.userInfo.accountId})).then(function(t){0==t.code&&(e.addressList=t.result)}).catch(function(e){console.log(e)})}},computed:(0,s.default)({},(0,n.mapState)("common",["baseInfo","userInfo"])),onLoad:function(e){this.source=e.source},onShow:function(){this.initAddressData()}};t.default=o}}]);