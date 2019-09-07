<template>
	<view class="content">
		<view class="search-box">
			<view class="search-input">
				<text class="iconfont icon-sousuo search-icon"></text>
				<input class="search-info" type="text" placeholder="商品名/商品编号/订单号" />
			</view>
		</view>
		<view class="navbar">
			<view 
				v-for="(item, index) in navList" :key="index" 
				class="nav-item" 
				:class="{current: tabCurrentIndex === index}"
				@click="tabClick(index)"
			>
				{{item.text}}
			</view>
		</view>

		<swiper :current="tabCurrentIndex" class="swiper-box" duration="300" @change="changeTab">
			<swiper-item class="tab-content" v-for="(tabItem,tabIndex) in navList" :key="tabIndex">
				<scroll-view 
					class="list-scroll-content" 
					scroll-y
					@scrolltolower="loadData"
				>
					<!-- 空白页 -->
					<empty v-if="tabItem.loaded === true && tabItem.orderList.length === 0"></empty>
					
					<!-- 订单列表 -->
					<view 
						v-for="(item,index) in tabItem.orderList" :key="index"
						class="order-item"
						 @tap="linkToDetail()"
					>
						<view class="hd">
							<view class="number">
								订单编号：<text>{{item.orderlistMainnum}}</text>
							</view>
							<view class="state">
								<text>{{item.orderStateName}}</text>
							</view>
						</view>
						<view class="bd" v-for="(good, i) in item.details">
							<view class="pic">
								<image class="img" :src="good.imageUrl" mode="aspectFill"></image>
							</view>
							<view class="info">
								<view class="tit">
									{{good.goodsProductname}}
								</view>
								<view class="con">
									<view class="_left">
										共{{good.goodsCount}}件商品
									</view>
									<view class="_right">
										实付金额：<text class="price">¥{{good.goodsRelprice}}</text>
									</view>
								</view>
							</view>
						</view>
						<view class="fd">
							<view class="action-btn" v-if="item.state == 1" @tap.stop="cancelOrder()">
								取消订单
							</view>
							<view class="action-btn action-red" v-if="item.state == 1" @tap.stop="linkToPayment()">
								去付款
							</view>
							<view class="action-btn " v-if="item.state==2 || item.state==3 || item.state==4" @tap.stop="linkToDelivery()">
								查看物流详情
							</view>
							<view class="action-btn action-red" v-if="item.state == 2"  @tap.stop="confirmOrder()">
								确认收货
							</view>
						</view>
					</view>
					 
					<uni-load-more :status="tabItem.loadingType"></uni-load-more>
					
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template> 

<script>
	import {
		mapState
	} from 'vuex'
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import empty from "@/components/empty/empty";
	export default {
		components: {
			uniLoadMore,
			empty
		},
		data() {
			return {
				tabCurrentIndex: 0,
				navList: [{
						state: 0,
						text: '全部',
						loadingType: 'more',
						orderList: []
					},
					{
						state: 1,
						text: '待付款',
						loadingType: 'more',
						orderList: []
					},
					{
						state: 2,
						text: '待收货',
						loadingType: 'more',
						orderList: []
					},
					{
						state: 3,
						text: '已完成',
						loadingType: 'more',
						orderList: []
					},
					{
						state: 4,
						text: '售后',
						loadingType: 'more',
						orderList: []
					}
				],
				listData: []
			};
		},
		
		onLoad(options){
			console.log(options)
			/**
			 * 修复app端点击除全部订单外的按钮进入时不加载数据的问题
			 * 替换onLoad下代码即可
			 */
			this.tabCurrentIndex = +options.state;
			
			// #ifndef MP
			this.loadData()
			// #endif
			// #ifdef MP
			if(options.state == 0){
				this.loadData()
			}
			// #endif
			
		},
		 
		methods: {
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
			//获取订单列表
			loadData(source){
				console.log(source)
				this.$http.post('/mall/app/order/list', {
					...this.baseInfo,
					accountId: this.userInfo.accountId,
					// pageNum: 10,
					// query: 'W1712015071'
				})
				.then( res => {
					console.log(res)
					if(res.code == 0){
						this.listData=res.result.records;
						this.listData.map(item => {
							this.$set(item, 'orderStateName', this.transOrderState(item.orderlistState));
						})
					}
				})
				.catch( err => {
					console.log(err);
				})
				//这里是将订单挂载到tab列表下
				let index = this.tabCurrentIndex;
				let navItem = this.navList[index];
				let state = navItem.state;
				
				// if(source === 'tabChange' && navItem.loaded === true){
				// 	//tab切换只有第一次需要加载数据
				// 	return;
				// }
				// if(navItem.loadingType === 'loading'){
				// 	//防止重复加载
				// 	return;
				// }
				// 
				// navItem.loadingType = 'loading';
				// 
				// setTimeout(()=>{
				// 	let orderList = this.listData.filter(item=>{
				// 		//添加不同状态下订单的表现形式
				// 		item = Object.assign(item, this.orderStateExp(item.state));
				// 		//演示数据所以自己进行状态筛选
				// 		if(state === 0){
				// 			//0为全部订单
				// 			return item;
				// 		}
				// 		return item.state === state
				// 	});
				// 	orderList.forEach(item=>{
				// 		navItem.orderList.push(item);
				// 	})
				// 	// loaded新字段用于表示数据加载完毕，如果为空可以显示空白页
				// 	this.$set(navItem, 'loaded', true);
				// 	
				// 	//判断是否还有数据， 有改为 more， 没有改为noMore 
				// 	navItem.loadingType = 'more';
				// }, 600);
			}, 

			//swiper 切换
			changeTab(e){
				this.tabCurrentIndex = e.target.current;
				this.loadData('tabChange');
			},
			//顶部tab点击
			tabClick(index){
				this.tabCurrentIndex = index;
			},
			// 跳转详情
			linkToDetail(orderId){
				uni.navigateTo({
					url: '/pages/orderDetail/orderDetail'
				})
			},
			//取消订单
			cancelOrder(item){
				uni.showModal({
				    title: '提示',
				    content: '确定取消订单吗？',
					confirmColor: '#E93B3D',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
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
			linkToPayment(){
				uni.navigateTo({
					url: '/pages/payment/payment'
				})
			},
			// 查看物流详情
			linkToDelivery(){
				uni.navigateTo({
					url: '/pages/delivery/delivery'
				})
			},
			// 确认收货
			confirmOrder(){
				console.log("确认收货");
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
			

			//订单状态文字和颜色
			orderStateExp(state){
				let stateTip = '',
					stateTipColor = '#fa436a';
				switch(+state){
					case 1:
						stateTip = '待付款'; break;
					case 2:
						stateTip = '待收货'; break;
					case 3:
						stateTip = '已完成'; break;
					case 4:
						stateTip = '售后'; break;
					case 9:
						stateTip = '订单已关闭'; 
						stateTipColor = '#909399';
						break;
						
					//更多自定义
				}
				return {stateTip, stateTipColor};
			}
		},
		computed: {
			...mapState('common', ['baseInfo', 'userInfo'])
		}
	}
</script>

<style lang="scss">
	page, .content{
		height: 100%;
		background: #F7F7F7;
	}
	
	.swiper-box{
		height: calc(100% - 80upx);
		// padding-top: 20upx;
	}
	.list-scroll-content{
		height: 100%;
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
					align-items: center;
					color: #A0A0A0;
					._left{
						font-size: 24upx;
					}
					._right{
						font-size: 28upx;
						.price{
							font-size: 24upx;
							color: #2F2F2F;
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
