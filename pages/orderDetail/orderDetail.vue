<template>
	<view>
		<view class="order-info">
			<view class="info-delivery info-mode" @tap="linkToDelivery()">
				<view class="iconfont icon-che-tianchong icon-status icon-car"></view>
				<view class="info">
					<view class="status">
						派送中
					</view>
					<view class="text">
						快件由快递员张成撒配送中，请注意保持联络(联系电话：1928333225)
					</view>
					<text class="iconfont icon-arrowRight icon-arrow"></text>
				</view>
			</view>
			<view class="info-address info-mode">
				<view class="iconfont icon-biaodiandidian icon-status icon-location"></view>
				<view class="info">
					<view class="status">
						韩莹<text class="phone">1867****451</text>
					</view>
					<view class="text">
						湖北省武汉市江汉区水塔街道泛海国际soho
					</view>
				</view>
			</view>
		</view>
		<view class="order-detail mt-20">
			<view class="hd">
				<view class="number">
					订单编号：<text>123451234325</text>
				</view>
			</view>
			<view class="bd">
				<view class="pic">
					<image class="img" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg" mode="aspectFill"></image>
				</view>
				<view class="info">
					<view class="tit">
						三只松鼠猪肉铺 猪肉干肉脯 靖江特产休闲靖江特产休闲靖江特产休闲靖江特产休闲靖江特产休闲靖江特产休闲靖江特产休闲
					</view>
					<view class="num">
						<text>香辣味</text>
					</view>
					<view class="con">
						<view class="_left">
							¥<text class="price">28</text>.80
						</view>
						<view class="_right">
							<text class="num">x3</text>
						</view>
					</view>
				</view>
			</view>
			<view class="bd">
				<view class="pic">
					<image class="img" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg" mode="aspectFill"></image>
				</view>
				<view class="info">
					<view class="tit">
						三只松鼠猪肉铺 猪肉干肉脯 靖江特产休闲靖江特产休闲靖江特产休闲靖江特产休闲靖江特产休闲靖江特产休闲靖江特产休闲
					</view>
					<view class="num">
						<text>香辣味</text>
					</view>
					<view class="con">
						<view class="_left">
							¥<text class="price">28</text>.80
						</view>
						<view class="_right">
							<text class="num">x3</text>
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
						快递：包邮
					</view>
				</view>
				<view class="text">
					<view class="_left">
						留言
					</view>
					<view class="_right">
						嗯随便留点啥颜吧
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
					<view class="_right">
						¥23.00
					</view>
				</view>
				<view class="text">
					<view class="_left">
						余额支付
					</view>
					<view class="_right">
						¥0.00
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
			</view>
			<view class="bd">
				实付金额
				<text class="num">¥23.00</text>
			</view>
		</view>
		<view class="list-box mt-20">
			<view class="hd">
				<view class="text">
					<view class="_left">
						下单时间
					</view>
					<view class="_right">
						2019-03-24<text class="space">5:28</text>
					</view>
				</view>
				<view class="text">
					<view class="_left">
						付款时间
					</view>
					<view class="_right">
						2019-03-24<text class="space">5:28</text>
					</view>
				</view>
			</view>
		</view>
		<view class="action-box">
			<view class="action-btn">
				联系客服
			</view>
			<view class="action-btn action-red">
				确认收货
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			linkToDelivery(){
				uni.navigateTo({
					url: '/pages/delivery/delivery'
				})
			}
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
	.info-mode{
		background: #ffffff;
		&+.info-mode{
			border-top: 1px solid #F5F5F5;
		}
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
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 8upx;
					._left{
						font-size: 24upx;
						color: #E93548;
						.price{
							font-size: 32upx;
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
		.bd{
			position: relative;
			padding: 20upx 0;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			font-size: 28upx;
			color: #333333;
			&:before{
				content: '';
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				height: 1px;
				background: #E8E8E8;
			}
			.num{
				font-size: 32upx;
				color: #E93548;
				padding-left: 20upx;
			}
		}
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
