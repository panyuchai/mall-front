<template>
	<view class="content">
		<view class="fixedTop">
			<view class="search-box">
				<view class="search-input">
					<text class="iconfont icon-sousuo search-icon"></text>
					<input class="search-info" type="text" placeholder="商品名/商品编号/订单号" v-model="searchData.query" @input="handleSearch"/>
				</view>
			</view>
			<view class="navbar">
				<view class="nav-item" @tap="doQuery(0)" v-bind:class='type==0 ? "red" : ""'>
					全部
				</view>
				<view class="nav-item" @tap="doQuery(1)" v-bind:class='type==1 ? "red" : ""'>
					待付款
				</view>
				<view class="nav-item" @tap="doQuery(2)" v-bind:class='type==2 ? "red" : ""'>
					待收货
				</view>
				<view class="nav-item" @tap="doQuery(3)" v-bind:class='type==3 ? "red" : ""'>
					已完成
				</view>
				<view class="nav-item" @tap="doQuery(4)" v-bind:class='type==4 ? "red" : ""'>
					售后
				</view>
			</view>
		</view>
		
		<view v-if='notFound' class="product-empty">
			<view class="not-tips">
				没有找到相关搜索结果
			</view>
		</view>
		<view class="swiper-box">
			<view class="list-scroll-content">
				<view class="order-item" v-for="item in listData" @tap="linkToDetail(item.orderlistId)">
					<view class="hd">
						<view class="number">
							订单编号：<text>{{item.orderlistMainnum}}</text>
						</view>
						<view class="state">
							<text>{{item.orderStateName}}</text>
						</view>
					</view>
					<view class="bd" v-for="(good, i) in item.details">
						<!-- <view class="" v-for="good in goods.zsscMallGoods"> -->
							<view class="pic">
								<image class="img" :src="good.zsscMallGoods.goodsMainimagepath" mode="aspectFill"></image>
							</view>
							<view class="info">
								<view class="tit">
									{{good.zsscMallGoods.goodsProductname}}
								</view>
								<view class="con">
									<view class="_left">
										共{{good.goodsCount}}件商品
									</view>
									<view class="_right">
										<view class="tit">
											实付金额：
										</view>
										<view class="priceInfo">
											<!-- <text class="salePrice" v-if="good.zsscMallGoods.salePrice"><text class="unit"></text></text> -->
											<view class="saleMoney" v-if="good.zsscMallGoods.salePrice">
												￥<text class="money">{{good.zsscMallGoods.salePrice}}</text>
											</view>
											<view class="and" v-if="good.zsscMallGoods.salePrice && good.zsscMallGoods.credits">
												+
											</view>
											<view class="salePoints" v-if="good.zsscMallGoods.credits">
												<text class="points">{{good.zsscMallGoods.credits}}</text>分
											</view>
										</view>
									</view>
								</view>
							</view>
						<!-- </view> -->
					</view>
					<view class="fd">
						<view class="action-btn" v-if="item.orderlistState == 0" @tap.stop="cancelOrder(item.orderlistId)">
							取消订单
						</view>
						<view class="action-btn action-red" v-if="item.orderlistState == 0" @tap.stop="linkToPayment(item)">
							去付款
						</view>
						<view class="action-btn " v-if="item.orderlistState==2 || item.orderlistState==3 || item.orderlistState==4" @tap.stop="linkToDelivery(item.orderlistId)">
							查看物流详情
						</view>
						<view class="action-btn action-red" v-if="item.orderlistState == 2"  @tap.stop="confirmOrder(item.orderlistId)">
							确认收货
						</view>
					</view>
				</view>
			</view>
		</view>
		<!--加载loadding-->
		<tui-loadmore :visible="loadding" :index="3" type="primary"></tui-loadmore>
		<tui-nomore :visible="!pullUpOn"></tui-nomore>
	</view>
</template> 

<script>
	import {
		mapState
	} from 'vuex'
	import tuiLoadmore from "@/components/loadmore/loadmore"
	import tuiNomore from "@/components/nomore/nomore"
	export default {
		components: {
			tuiLoadmore,
			tuiNomore
		},
		data() {
			return {
				type:0,
				pageNum: 1,
				productData: [],
				loadding: true,
				pullUpOn: true,
				notFound: false,
				canReachBottom: true,
				listData: [],
				searchData: {
					orderState: '',
					accountId: '',
					pageNum: 1,
					totalPage: null,
					query: ''
				},
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			};
		},
		watch: {
			searchData:  {
				handler(val, newval){
					this.searchData.orderState=val.orderState
					this.searchData.query=val.query
				},
				deep: true
			}
		},
		methods: {
			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
			},
			transUserState(num){
				switch(num){
					case 0:
						return [];
						break;
					case 1:
						return [0];
						break;
					case 2:
						return [1, 2];
						break;
					case 3:
						return [3];
						break;
					case 4:
						return [7];
						break;
					default:
						return [];
				}
			},
			transOrderState(num){
				switch(num){
					case 0:
						return '未支付';
						break;
					case 1:
						return '未发货';
						break;
					case 2:
						return '已发货';
						break;
					case 3:
						return '已完成';
						break;
					case 4:
						return '已退货';
						break;
					case 5:
						return '已退款';
						break;
					case 6:
						return '已取消';
						break;
					case 7:
						return '退款中';
						break;
					case 9:
						return '备货中';
						break;
					default:
						return '';
				}
			},
			doQuery(orderType){
				this.goTop();
				this.searchData.pageNum=1;
				this.type=orderType;
				this.loadData(this.transUserState(orderType));
				uni.setStorageSync('order_searchType_storage', this.transUserState(orderType));
			},
			handleSearch(){
				this.goTop();
				this.searchData.pageNum=1;
				this.type=0;
				this.$nextTick(() => {
					this.loadData(this.transUserState(0));
				});
				uni.setStorageSync('order_searchType_storage', this.transUserState(0));
			},
			loadData(orderState){
				this.loadding = true;
				this.pullUpOn = true;
				this.searchData={
					...this.searchData,
					orderState: orderState || []
				}
				// this.searchData.orderState=orderState || [];
				this.$http.post('/mall/app/order/list', {
					...this.baseInfo,
					...this.searchData,
					accountId: this.userInfo && this.userInfo.accountId || '',
				})
				.then( res => {
					console.log(res)
					if(res.code == 0){
						if(res.result){
							this.searchData.totalPage=res.result.pages;
							if(res.result.records.length == 0){
								// this.notFound=true;
								this.loadding = false;
								this.pullUpOn = false;
							}else{
								this.loadding = false;
							}
							if(this.searchData.pageNum == 1){
								if(res.result.records){
									this.listData=res.result.records;
								}
							}else{
								this.listData=this.listData.concat(res.result.records);
							}
							this.listData.map(item => {
								this.$set(item, 'orderStateName', this.transOrderState(item.orderlistState));
							})
						}
						
					}else{
						console.log("product.vue-- list获取数据列表失败");
					}
				})
				.catch( err => {
					console.log("product.vue-- list获取数据列表错误");
				})
			},
			
			
			// 跳转详情
			linkToDetail(orderId){
				uni.navigateTo({
					url: '/pages/orderDetail/orderDetail?orderId=' + orderId
				})
			},
			//取消订单
			cancelOrder(orderId){
				uni.showModal({
				    title: '提示',
				    content: '确定取消订单吗？',
					confirmColor: '#E93B3D',
				    success: res => {
				        if (res.confirm) {
				            this.$http.post('/mall/app/order/cancel', {
								...this.baseInfo,
								accountId: this.userInfo.accountId,
								orderId: orderId
							})
							.then( res => {
								if(res.code == 0){
									uni.showToast({
										icon: 'none',
										title: '取消订单成功'
									})
									this.loadData(uni.getStorageSync('order_searchType_storage'));
								}else{
									uni.showToast({
										icon: 'none',
										title: '取消订单失败'
									})
									this.loadData(uni.getStorageSync('order_searchType_storage'));
								}
							})
							.catch( err => {
								console.log(err);
							})
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
				// uni.showLoading({
				// 	title: '请稍后'
				// })
				// setTimeout(()=>{
				// 	let {stateTip, stateTipColor} = this.orderStateExp(9);
				// 	item = Object.assign(item, {
				// 		state: 9,
				// 		stateTip, 
				// 		stateTipColor
				// 	})
				// 	
				// 	//取消订单后删除待付款中该项
				// 	let list = this.navList[1].orderList;
				// 	let index = list.findIndex(val=>val.id === item.id);
				// 	index !== -1 && list.splice(index, 1);
				// 	
				// 	uni.hideLoading();
				// }, 600)
			},
			// 去付款
			linkToPayment(order){
				window.location.href=`http://${this.paymentUrl}.yujianli.cn/#/pages/payment/cashRegister?orderNo=`+order.orderlistNum+"&mallDomain="+this.baseInfo.mallDomain+'&orderPayPrice='+order.payPrice+'&token='+encodeURIComponent(this.token);
			},
			// 查看物流详情
			linkToDelivery(orderId){
				uni.navigateTo({
					url: '/pages/delivery/delivery?orderId=' + orderId
				})
			},
			// 确认收货
			confirmOrder(orderId){
				this.$http.post('/mall/app/order/receive', {
					...this.baseInfo,
					accountId: this.userInfo.accountId,
					orderId: orderId
				})
				.then( res => {
					if(res.code == 0){
						uni.showToast({
							icon: 'none',
							title: '确认收货成功'
						})
						this.loadData(uni.getStorageSync('order_searchType_storage'));
					}
				})
				.catch( err => {
					console.log(err);
				})
			},
			//删除订单
			deleteOrder(index){
				// uni.showLoading({
				// 	title: '请稍后'
				// })
				// setTimeout(()=>{
				// 	this.navList[this.tabCurrentIndex].orderList.splice(index, 1);
				// 	uni.hideLoading();
				// }, 600)
			},
			
		},
		onLoad(options){
			this.loadData(this.transUserState(Number(options.state)));
			this.type=options.state;
			uni.setStorageSync('order_searchType_storage', this.transUserState(Number(options.state)));
		},
		onReachBottom: function() {
			if (!this.pullUpOn) return;
			this.loadding = true;
			this.searchData.pageNum++;
			// if (this.searchData.pageNum > this.searchData.totalPage) {
			// 	this.loadding = false;
			// 	this.pullUpOn = false;
			// }
			this.loadData(uni.getStorageSync('order_searchType_storage'));
		},
		computed: {
			...mapState('common', ['baseInfo', 'userInfo', 'paymentUrl', 'token'])
		}
	}
</script>

<style lang="scss">
	page, .content{
		height: 100%;
		background: #F7F7F7;
	}
	
	// .swiper-box{
	// 	height: calc(100% - 80upx);
	// 	// padding-top: 20upx;
	// }
	.list-scroll-content{
		margin-top: 100px;
		// height: 100%;
	}
	.fixedTop{
		position: fixed;
		top: 44px;
		left: 0;
		right: 0;
		z-index: 9;
	}
	.search-box{
		background: #fff;
		padding: 20upx;
		.search-input{
			width: 100%;
			height: 66upx;
			border-radius: 35upx;
			padding: 0 40upx 0 20upx;
			box-sizing: border-box;
			background: #f2f2f2;
			display: flex;
			align-items: center;
			flex-wrap: nowrap;
			.search-icon{
				color: #979797;
				font-size: 20px;
				padding: 0 8upx;
				float: left;
			}
			.search-info{
				flex: 1;
				height: 100%;
				font-size: 14px;
				color: #6F6F6F;
				float: left;
			}
		}
	}
	.navbar{
		display: flex;
		height: 80upx;
		padding: 0 5px;
		background: #fff;
		box-shadow: 0 1px 5px rgba(0,0,0,.06);
		position: relative;
		z-index: 10;
		&:before{
			content: "";
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			height: 1px;
			background: #E6E6E6;
		}
		.nav-item{
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			position: relative;
			color: #2F2F2F;
			font-size: 28upx;
			&.current{
				color: #E93B3D;
				&:after{
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					right: 0;
					transform: translateX(-50%);
					width: 88upx;
					height: 8upx;
					background: #E93B3D;
				}
			}
		}
	}

	.uni-swiper-item{
		height: auto;
	}
	
	
	.order-item{
		background: #fff;
		margin: 20upx 30upx;
		padding: 20upx;
		.hd{
			display: flex;
			justify-content : space-between;
			align-items: center;
			font-size: 28upx;
			.number{
				color: #505050;
			}
			.state{
				color: #A0A0A0;
			}
		}
		.bd{
			padding: 20upx 0;
			position: relative;
			display: flex;
			justify-content: space-between;
			align-items: center;
			&:after{
				content: '';
				position: absolute;
				left: 0;
				right: 0;
				bottom: 0;
				height: 1px;
				background: #E6E6E6;
			}
			.pic{
				margin-right: 20upx;
				.img{
					width: 160upx;
					height: 160upx;
				}
			}
			.info{
				flex: 1;
				.tit{
					font-size: 28upx;
					color: #2F2F2F;
					width: 100%;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
				}
				.con{
					margin-top: 45upx;
					padding-bottom: 14upx;
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					color: #A0A0A0;
					._left{
						font-size: 24upx;
					}
					._right{
						font-size: 28upx;
						display: flex;
						justify-content : flex-start;
						align-items : flex-end;
						.priceInfo{
							// font-size: 24upx;
							display: flex;
							flex-direction:row;
							justify-content : flex-start;
							align-items : flex-end;
							.saleprice {
								.unit{
									// font-size: 24upx;
								}
							}
							.saleMoney{
								.money{
									// font-size: 32upx;
								}
							}
							.and{
								padding-left: 10upx;
							}
							.salePoints{
								.points{
									// font-size: 28upx;
								}
							}
						}
					}
				}
			}
		}
		.fd{
			display: flex;
			justify-content: flex-end;
			.action-btn{
				height: 64upx;
				border: 1px solid #E3E3E3;
				border-radius: 4upx;
				padding: 0 20upx;
				font-size: 28upx;
				color: #474747;
				margin: 20upx 0 0 20upx;
				display: flex;
				align-items: center;
				&.action-red{
					background: #E93B3D;
					border-color: #E93B3D;
					color: #fff;
				}
			}
		}
	}
	.red{
		color: #E93B3D!important;
		position: relative;
		&:after{
			content: '';
			position: absolute;
			left: 50%;
			bottom: 0;
			right: 0;
			transform: translateX(-50%);
			width: 88upx;
			height: 8upx;
			background: #E93B3D;
		}
		
	}
	
	.order-item{
		// display: flex;
		// flex-direction: column;
		// padding-left: 30upx;
		// background: #fff;
		// margin-top: 16upx;
		// .i-top{
		// 	display: flex;
		// 	align-items: center;
		// 	height: 80upx;
		// 	padding-right:30upx;
		// 	// font-size: $font-base;
		// 	// color: $font-color-dark;
		// 	position: relative;
		// 	.time{
		// 		flex: 1;
		// 	}
		// 	.state{
		// 		// color: $base-color;
		// 	}
		// 	.del-btn{
		// 		padding: 10upx 0 10upx 36upx;
		// 		// font-size: $font-lg;
		// 		// color: $font-color-light;
		// 		position: relative;
		// 		&:after{
		// 			content: '';
		// 			width: 0;
		// 			height: 30upx;
		// 			// border-left: 1px solid $border-color-dark;
		// 			position: absolute;
		// 			left: 20upx;
		// 			top: 50%;
		// 			transform: translateY(-50%);
		// 		}
		// 	}
		// }
		/* 多条商品 */
		// .goods-box{
		// 	height: 160upx;
		// 	padding: 20upx 0;
		// 	white-space: nowrap;
		// 	.goods-item{
		// 		width: 120upx;
		// 		height: 120upx;
		// 		display: inline-block;
		// 		margin-right: 24upx;
		// 	}
		// 	.goods-img{
		// 		display: block;
		// 		width: 100%;
		// 		height: 100%;
		// 	}
		// }
		/* 单条商品 */
		// .goods-box-single{
		// 	display: flex;
		// 	padding: 20upx 0;
		// 	.goods-img{
		// 		display: block;
		// 		width: 120upx;
		// 		height: 120upx;
		// 	}
		// 	.right{
		// 		flex: 1;
		// 		display: flex;
		// 		flex-direction: column;
		// 		padding: 0 30upx 0 24upx;
		// 		overflow: hidden;
		// 		.title{
		// 			// font-size: $font-base + 2upx;
		// 			// color: $font-color-dark;
		// 			line-height: 1;
		// 		}
		// 		.attr-box{
		// 			// font-size: $font-sm + 2upx;
		// 			// color: $font-color-light;
		// 			padding: 10upx 12upx;
		// 		}
		// 		.price{
		// 			// font-size: $font-base + 2upx;
		// 			// color: $font-color-dark;
		// 			&:before{
		// 				content: '￥';
		// 				// font-size: $font-sm;
		// 				margin: 0 2upx 0 8upx;
		// 			}
		// 		}
		// 	}
		// }
		// 
		// .price-box{
		// 	display: flex;
		// 	justify-content: flex-end;
		// 	align-items: baseline;
		// 	padding: 20upx 30upx;
		// 	// font-size: $font-sm + 2upx;
		// 	// color: $font-color-light;
		// 	.num{
		// 		margin: 0 8upx;
		// 		// color: $font-color-dark;
		// 	}
		// 	.price{
		// 		// font-size: $font-lg;
		// 		// color: $font-color-dark;
		// 		&:before{
		// 			content: '￥';
		// 			// font-size: $font-sm;
		// 			margin: 0 2upx 0 8upx;
		// 		}
		// 	}
		// }
		// .action-box{
		// 	display: flex;
		// 	justify-content: flex-end;
		// 	align-items: center;
		// 	height: 100upx;
		// 	position: relative;
		// 	padding-right: 30upx;
		// }
		// .action-btn{
		// 	width: 160upx;
		// 	height: 60upx;
		// 	margin: 0;
		// 	margin-left: 24upx;
		// 	padding: 0;
		// 	text-align: center;
		// 	line-height: 60upx;
		// 	// font-size: $font-sm + 2upx;
		// 	// color: $font-color-dark;
		// 	background: #fff;
		// 	border-radius: 100px;
		// 	&:after{
		// 		border-radius: 100px;
		// 	}
		// 	&.recom{
		// 		background: #fff9f9;
		// 		// color: $base-color;
		// 		&:after{
		// 			border-color: #f7bcc8;
		// 		}
		// 	}
		// }
	}
	
	
	/* load-more */
	.uni-load-more {
		display: flex;
		flex-direction: row;
		height: 80upx;
		align-items: center;
		justify-content: center
	}
	
	.uni-load-more__text {
		font-size: 28upx;
		color: #999
	}
	
	.uni-load-more__img {
		height: 24px;
		width: 24px;
		margin-right: 10px
	}
	
	.uni-load-more__img>view {
		position: absolute
	}
	
	.uni-load-more__img>view view {
		width: 6px;
		height: 2px;
		border-top-left-radius: 1px;
		border-bottom-left-radius: 1px;
		background: #999;
		position: absolute;
		opacity: .2;
		transform-origin: 50%;
		animation: load 1.56s ease infinite
	}
	
	.uni-load-more__img>view view:nth-child(1) {
		transform: rotate(90deg);
		top: 2px;
		left: 9px
	}
	
	.uni-load-more__img>view view:nth-child(2) {
		transform: rotate(180deg);
		top: 11px;
		right: 0
	}
	
	.uni-load-more__img>view view:nth-child(3) {
		transform: rotate(270deg);
		bottom: 2px;
		left: 9px
	}
	
	.uni-load-more__img>view view:nth-child(4) {
		top: 11px;
		left: 0
	}
	
	.load1,
	.load2,
	.load3 {
		height: 24px;
		width: 24px
	}
	
	.load2 {
		transform: rotate(30deg)
	}
	
	.load3 {
		transform: rotate(60deg)
	}
	
	.load1 view:nth-child(1) {
		animation-delay: 0s
	}
	
	.load2 view:nth-child(1) {
		animation-delay: .13s
	}
	
	.load3 view:nth-child(1) {
		animation-delay: .26s
	}
	
	.load1 view:nth-child(2) {
		animation-delay: .39s
	}
	
	.load2 view:nth-child(2) {
		animation-delay: .52s
	}
	
	.load3 view:nth-child(2) {
		animation-delay: .65s
	}
	
	.load1 view:nth-child(3) {
		animation-delay: .78s
	}
	
	.load2 view:nth-child(3) {
		animation-delay: .91s
	}
	
	.load3 view:nth-child(3) {
		animation-delay: 1.04s
	}
	
	.load1 view:nth-child(4) {
		animation-delay: 1.17s
	}
	
	.load2 view:nth-child(4) {
		animation-delay: 1.3s
	}
	
	.load3 view:nth-child(4) {
		animation-delay: 1.43s
	}
	
	@-webkit-keyframes load {
		0% {
			opacity: 1
		}
	
		100% {
			opacity: .2
		}
	}
</style>
