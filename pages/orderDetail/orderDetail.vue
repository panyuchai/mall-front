<template>
	<view>
		<view class="order-info">
			<view class="info-delivery info-mode" v-if="initData.orderlistState == 2 || initData.orderlistState == 3 || initData.orderlistState == 4" @tap="linkToDelivery(initData.orderId)">
				<view class="iconfont icon-che-tianchong icon-status icon-car"></view>
				<view class="info">
					<view class="status">
						{{expressData.statusName}}
					</view>
					<view class="text">
						<!-- 快件由快递员张成撒配送中，请注意保持联络(联系电话：1928333225) -->
						{{expressData.data && expressData.data.context}}
					</view>
					<text class="iconfont icon-arrowRight icon-arrow"></text>
				</view>
			</view>
			<view class="info-address info-mode">
				<view class="iconfont icon-biaodiandidian icon-status icon-location"></view>
				<view class="info">
					<view class="status">
						{{initData.receiverName}}<text class="phone">{{initData.receiverPhone}}</text>
					</view>
					<view class="text">
						{{initData.receiverAddress}}
					</view>
				</view>
			</view>
		</view>
		<view class="order-detail mt-20">
			<view class="hd">
				<view class="number">
					订单编号：<text>{{initData.orderlistMainnum}}</text>
				</view>
			</view>
			<view class="bd" v-for="good in initData.details">
				<view class="pic">
					<image class="img" :src="good.goodsMainimagepath" mode="aspectFill"></image>
				</view>
				<view class="info">
					<view class="tit">
						{{good.goodsProductname}}
					</view>
					<view class="num">
						<text>{{good.goodsTitle}}</text>
					</view>
					<view class="con">
						<view class="_left mode_price">
							<view class="salePrice" v-if="good.goodsRelprice">
								¥<text class="price">{{good.goodsRelprice}}</text>
							</view>
							<view v-if="good.goodsRelprice && good.credits">+</view>
							<view class="salePoints" v-if="good.credits">
								<text class="points">{{good.credits}}</text>分
							</view>
						</view>
						<view class="_right">
							<text class="num">x{{good.goodsCount}}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="fd">
				<view class="text">
					<view class="_left">
						快递方式
					</view>
					<view class="_right">
						快递：{{initData.expressPay}}
					</view>
				</view>
				<view class="text">
					<view class="_left">
						留言
					</view>
					<view class="_right">
						{{initData.orderlistMessage }}
					</view>
				</view>
			</view>	
		</view>
		<view class="list-box mt-20">
			<view class="hd">
				<view class="text">
					<view class="_left">
						应付总金额
					</view>
					<view class="_right mode_price">
						<view class="salePrice" v-if="initData.orderlistAllprice">
							¥<text class="price">{{initData.orderlistAllprice}}</text>
						</view>
						<view class="and" v-if="initData.orderlistAllprice && initData.credits">+</view>
						<view class="salePoints" v-if="initData.credits">
							<text class="points">{{initData.credits}}</text>分
						</view>
					</view>
				</view>
				<view class="text" v-if="initData.rechargepay">
					<view class="_left">
						余额支付
					</view>
					<view class="_right">
						¥{{initData.rechargepay}}
					</view>
				</view>
				<view class="text">
					<view class="_left">
						优惠金额
					</view>
					<view class="_right">
						¥0.00
					</view>
				</view>
				<view class="text" v-if="initData.credits">
					<view class="_left">
						积分支付
					</view>
					<view class="_right">
						{{initData.credits}}分
					</view>
				</view>
				<view class="text" v-if="initData.payPrice">
					<view class="_left">
						微信支付
					</view>
					<view class="_right">
						¥{{initData.payPrice}}
					</view>
				</view>
			</view>
			<!-- <view class="bd">
				实付金额
				<text class="num">¥{{initData.payPrice}}</text>
			</view> -->
		</view>
		<view class="list-box mt-20">
			<view class="hd">
				<view class="text">
					<view class="_left">
						下单时间
					</view>
					<view class="_right">
						{{initData.orderlistTime}}<!-- <text class="space">5:28</text> -->
					</view>
				</view>
				<view class="text">
					<view class="_left">
						付款时间
					</view>
					<view class="_right">
						{{initData.payTime}}
					</view>
				</view>
			</view>
		</view>
		<view class="action-box">
			<view class="action-btn" @tap="makePhoneCall">
				联系客服
			</view>
			<view class="action-btn" v-if="initData.orderlistState == 0" @tap="cancelOrder(initData.orderlistId)">
				取消订单
			</view>
			<view class="action-btn action-red" v-if="initData.orderlistState == 0" @tap="linkToPayment(initData)">
				去付款
			</view>
			<view class="action-btn action-red" v-if="initData.orderlistState == 2" @tap="confirmOrder(initData.orderlistId)">
				确认收货
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				initData: {},
				expressData: {}
			};
		},
		methods: {
			linkToDelivery(orderId){
				uni.navigateTo({
					url: '/pages/delivery/delivery?orderId=' + orderId
				})
			},
			linkToPayment(order){
				window.location.href=`http://${this.paymentUrl}.yujianli.cn/#/pages/payment/cashRegister?orderNo=`+order.orderlistNum+"&mallDomain="+this.baseInfo.mallDomain+'&orderPayPrice='+order.payPrice+'&token='+encodeURIComponent(this.token);
			},
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
						this.loadData(orderId);
					}
				})
				.catch( err => {
					console.log(err);
				})
			},
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
									this.loadData(orderId);
								}else{
									uni.showToast({
										icon: 'none',
										title: '取消订单失败'
									})
									this.loadData();
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
			},
			makePhoneCall(){
				uni.makePhoneCall({
				    phoneNumber: '4009006669'
				});
			},
			transformStatus(num){
				switch(num){
					case -1:
						return '待查询';
						break;
					case 0:
						return '查询异常';
						break;
					case 1:
						return '暂无记录';
						break;
					case 2:
						return '在途中';
						break;
					case 3:
						return '派送中';
						break;
					case 4:
						return '已签收';
						break;
					case 5:
						return '用户拒签';
						break;
					case 6:
						return '疑难件';
						break;
					case 7:
						return '无效单';
						break;
					default:
						return '';
				}
			},
			initExpress(orderId){
				this.$http.post('/mall/app/order/express', {
					...this.baseInfo,
					accountId: this.userInfo.accountId,
					orderId: orderId
				})
				.then( res => {
					if(res.code == 0){
						this.expressData=JSON.parse(res.result.express).showapi_res_body;
						this.expressData.statusName=this.transformStatus(this.expressData.status);
						this.expressData.data=this.expressData.data[0];
					}
				})
				.catch( err => {
					console.log(err);
				})
			},
			// transformTime(time){
			// 	let moment = require('moment');
			// 	let day = moment(time, moment.ISO_8601);
			// 	return day.format("YYYY-MM-DD  h:mm:ss") || '';
			// },
			loadData(orderId){
				this.$http.post('/mall/app/order/detail', {
					...this.baseInfo,
					accountId: this.userInfo.accountId,
					orderId: orderId
				})
				.then( res => {
					if(res.code == 0){
						this.initData=res.result;
						// this.initData.transOrderlistTime=this.transformTime(res.result.orderlistTime);
						// this.initData.transPayTime=this.transformTime(res.result.payTime);
					}
				})
				.catch( err => {
					console.log(err);
				})
			}
		},
		computed: {
			...mapState('common', ['baseInfo', 'userInfo', 'paymentUrl', 'token'])
		},
		onLoad(options){
			this.loadData(options.orderId);
			this.initExpress(options.orderId);
		}
	}
</script>

<style lang="scss">
	page{
		background: #F7F7F7;
		padding-bottom: 110upx;
	}
	.mt-20{
		margin-top: 20upx;
	}
	.mode_price{
		display: flex;
		flex-direction:row;
		justify-content : flex-start;
		align-items : flex-end;
		.and{
			padding-left: 10upx;
		}
	}
	.info-mode{
		background: #ffffff;
		// &+.info-mode{
		// 	border-top: 1px solid #F5F5F5;
		// }
		display: flex;
		justify-content: space-around;
		align-items: center;
		.icon-status{
			width: 110upx;
			display: flex;
			justify-content: space-around;
			align-items: center;
			color: #A1A1A1;
			font-size: 58upx;
			&.icon-car{
				font-size: 52upx;
			}
		}
		.info{
			width: calc(100% - 110upx);
			padding: 20upx 0;
		}
	}
	.info-delivery{
		.info{
			position: relative;
			padding-right: 60upx;
			.status{
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				font-size: 28upx;
				color: #E93B3D;
			}
			.text{
				color: #000000;
				font-size: 24upx;
				margin-top: 10upx;
				line-height: 34upx;
			}
			.icon-arrow{
				position: absolute;
				right: 20upx;
				top: 50%;
				transform: translateY(-50%);
				color: #323232;
				font-size: 36upx;
			}
		}
	}
	.info-address{
		border-top: 1px solid #F5F5F5;
		.info{
			.status{
				font-size: 28upx;
				color: #303030;
				.phone{
					padding-left: 20upx;
				}
			}
			.text{
				font-size: 24upx;
				color: #8C8C8C;
			}
		}
	}
	.order-detail{
		padding: 20upx;
		background: #ffffff;
		.hd{
			font-size: 28upx;
			color: #505050;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		.bd{
			padding: 20upx 0;
			position: relative;
			display: flex;
			justify-content: space-between;
			&:after{
				content: '';
				position: absolute;
				left: 0;
				right: 0;
				bottom: 0;
				height: 1px;
				background: #E8E8E8;
			}
			.pic{
				margin-right: 20upx;
				.img{
					width: 152upx;
					height: 152upx;
				}
			}
			.info{
				flex: 1;
				position: relative;
				.tit{
					font-size: 28upx;
					color: #2F2F2F;
					width: 100%;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
					margin-top: -4upx;
				}
				.num{
					font-size: 24upx;
					color: #B3B3B3;
					margin-top: 4upx;
				}
				.con{
					// position: absolute;
					// left: 0;
					// right: 0;
					// bottom: 15upx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 8upx;
					._left{
						font-size: 24upx;
						color: #E93548;
						.salePrice{
							.price{
								font-size: 32upx;
							}
						}
						.salePoints{
							.points{
								font-size: 28upx;
							}
						}
					}
					._right{
						font-size: 24upx;
						color: #B3B3B3;
					}
				}
			}
		}
		.fd{
			padding: 15upx 0 0 0;
			.text{
				margin-top: 10upx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				._left{
					font-size: 28upx;
					color: #A2A2A2;
				}
				._right{
					font-size: 24upx;
					color: #333333;
				}
			}
		}
	}
	.list-box{
		background: #ffffff;
		padding: 0 20upx;
		.hd{
			padding: 20upx 0 15upx 0;
			.text{
				font-size: 24upx;
				color: #A2A2A2;
				height: 50upx;
				line-height: 50upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				._left{
					font-size: 28upx;
					color: #A2A2A2;
				}
				._right{
					font-size: 24upx;
					color: #333333;
				}
			}
		}
		// .bd{
		// 	position: relative;
		// 	padding: 20upx 0;
		// 	display: flex;
		// 	justify-content: flex-end;
		// 	align-items: center;
		// 	font-size: 28upx;
		// 	color: #333333;
		// 	&:before{
		// 		content: '';
		// 		position: absolute;
		// 		left: 0;
		// 		right: 0;
		// 		top: 0;
		// 		height: 1px;
		// 		background: #E8E8E8;
		// 	}
		// 	.num{
		// 		font-size: 32upx;
		// 		color: #E93548;
		// 		padding-left: 20upx;
		// 	}
		// }
	}
	.action-box{
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		background: #ffffff;
		padding: 20upx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		&:before{
			content: '';
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			height: 1px;
			background: #E8E8E8;
		}
		.action-btn{
			height: 66upx;
			border: 1px solid #E3E3E3;
			padding: 0 20upx;
			display: flex;
			justify-content: space-around;
			align-items: center;
			font-size: 28upx;
			color: #474747;
			margin-left: 20upx;
			&.action-red{
				border-color: #E93B3D;
				background: #E93B3D;
				color: #fff;
			}
		}
	}
</style>
