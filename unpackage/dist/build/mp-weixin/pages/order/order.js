(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/order"],{"017a":function(t,e,n){},"0912":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"4d04e"))},a=function(){return n.e("components/empty/empty").then(n.bind(null,"e60f"))},r={components:{uniLoadMore:o,empty:a},data:function(){return{tabCurrentIndex:0,navList:[{state:0,text:"全部",loadingType:"more",orderList:[]},{state:1,text:"待付款",loadingType:"more",orderList:[]},{state:2,text:"待收货",loadingType:"more",orderList:[]},{state:3,text:"已完成",loadingType:"more",orderList:[]},{state:4,text:"售后",loadingType:"more",orderList:[]}],listData:[{orderNum:"123451234325",state:3,goodsList:[{imgSrc:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg",tit:"三只松鼠猪肉铺 猪肉干肉脯 靖江特产休闲靖江特产休闲靖江特产休闲靖江特产休闲靖江特产休闲",num:"1",price:"112.80"}]},{orderNum:"123451234325",state:1,goodsList:[{imgSrc:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg",tit:"三只松鼠猪肉铺 猪肉干肉脯 靖江特产休闲",num:"1",price:"112.80"}]},{orderNum:"123451234325",state:4,goodsList:[{imgSrc:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg",tit:"三只松鼠猪肉铺 猪肉干肉脯 靖江特产休闲",num:"1",price:"112.80"}]},{orderNum:"123451234325",state:2,goodsList:[{imgSrc:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg",tit:"三只松鼠猪肉铺 猪肉干肉脯 靖江特产休闲",num:"1",price:"112.80"}]}]}},onLoad:function(t){this.tabCurrentIndex=+t.state,0==t.state&&this.loadData()},methods:{loadData:function(t){var e=this,n=this.tabCurrentIndex,o=this.navList[n],a=o.state;"tabChange"===t&&!0===o.loaded||"loading"!==o.loadingType&&(o.loadingType="loading",setTimeout(function(){var t=e.listData.filter(function(t){return t=Object.assign(t,e.orderStateExp(t.state)),0===a?t:t.state===a});t.forEach(function(t){o.orderList.push(t)}),e.$set(o,"loaded",!0),o.loadingType="more"},600))},changeTab:function(t){this.tabCurrentIndex=t.target.current,this.loadData("tabChange")},tabClick:function(t){this.tabCurrentIndex=t},linkToDetail:function(e){t.navigateTo({url:"/pages/orderDetail/orderDetail"})},cancelOrder:function(e){t.showModal({title:"提示",content:"确定取消订单吗？",confirmColor:"#E93B3D",success:function(t){t.confirm?console.log("用户点击确定"):t.cancel&&console.log("用户点击取消")}})},linkToPayment:function(){t.navigateTo({url:"/pages/payment/payment"})},linkToDelivery:function(){t.navigateTo({url:"/pages/delivery/delivery"})},confirmOrder:function(){console.log("确认收货")},deleteOrder:function(t){},orderStateExp:function(t){var e="",n="#fa436a";switch(+t){case 1:e="待付款";break;case 2:e="待收货";break;case 3:e="已完成";break;case 4:e="售后";break;case 9:e="订单已关闭",n="#909399";break}return{stateTip:e,stateTipColor:n}}}};e.default=r}).call(this,n("543d")["default"])},"31c8":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},"747d":function(t,e,n){"use strict";n.r(e);var o=n("31c8"),a=n("e67d");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("bf87");var i=n("2877"),s=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports},bf87:function(t,e,n){"use strict";var o=n("017a"),a=n.n(o);a.a},e67d:function(t,e,n){"use strict";n.r(e);var o=n("0912"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=a.a}},[["5c66","common/runtime","common/vendor"]]]);