<template>
	<view class="goods-list">
		<view class="goods" v-for="(good, index) in options.list" v-if="good.shelf" :key="index" @tap="linkToDetail(good.goodsId)">
			<view v-if="good.label" class="tag">
				{{good.label}}
			</view>
			<view class="img">
				<image :src="good.goodsImg" mode="aspectFit"></image>
			</view>
			<view class="info">
				<view class="tit">
					{{good.goodsTitle}}
				</view>
				<view class="desc">
					{{good.goodsSubTitle}}
				</view>
				<view class="saleNum">
					<!-- 已售:{{good.saleNum}} -->
				</view>
				<view class="sale">
					<view class="salePrice">
						<view class="rulingPrice">
							<view class="price" v-if="good.goodsPoint">
								<text class="text">{{good.goodsPoint}}</text>积分
							</view>
							<view v-if="good.goodsPrice && good.goodsPoint">
								+
							</view>
							<view class="price" v-if="good.goodsPrice">
								<text class="text">{{good.goodsPrice}}</text>元
							</view>
						</view>
						<view class="markedPrice" v-if="good.goodsVirtualprice">
							{{good.goodsVirtualprice}}元
						</view>
					</view>
					<view class="sale-action">
						<view class="sale-btn">
							立即订购
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			options:{
				type:Object,
				default:{}
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			linkToDetail(e){
				uni.navigateTo({
					url: '/pages/productDetail/productDetail?goodsId=' + e
				});
			}
		}
	}
</script>

<style lang="scss">
	.goods-list{
		padding: 0 30upx;
		.goods{
			margin: 20upx 0;
			display: flex;
			justify-content: space-between;
			position: relative;
			.tag{
				position: absolute;
				top: -10rpx;
				left: 10rpx;
				z-index: 8;
				height: 40rpx;
				line-height: 40rpx;
				background:linear-gradient(220deg,rgba(255,77,69,1) 0%,rgba(226,32,24,1) 100%);
				box-shadow:0px 2px 3px 0px rgba(226,32,24,0.54);
				border-radius:4px;
				color: #fff;
				font-size: 26upx;
				padding: 0 10px;
			}
			.img{
				image{
					width: 236upx;
					height: 236upx;
					vertical-align: top;
				}
			}
			.info{
				overflow: hidden;
				margin-left: 20upx;
				width: calc(100% - 256upx);
				.tit{
					font-size: 32upx;
					color: #333333;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					line-height: 55upx;
				}
				.desc{
					font-size: 24upx;
					color: #747474;
					line-height: 36upx;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				.saleNum{
					margin-top: 10upx;
					font-size: 24upx;
					color: #E51700;
					background: #FEEEEE;
					display: inline-block;
					max-width: 100%;
					overflow: hidden;
					padding: 0 5upx;
				}
				.sale{
					margin-top: 6upx;
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					.salePrice{
						.rulingPrice{
							color: #E51700;
							font-size: 24upx;
							display: flex;
							flex-direction:row;
							justify-content : flex-start;
							align-items : flex-end;
							line-height: 40upx;
							.price{
								.text{
									padding-right: 8upx;
								}
								&:nth-of-type(1){
									.text{
										font-size: 40upx;
									}
								}
								&:nth-of-type(2){
									.text{
										font-size: 30upx;
									}
								}
							}
						}
						.markedPrice{
							color: #B3B3B3;
							font-size: 24upx;
							text-decoration: line-through;
						}
					}
					.sale-action{
						.sale-btn{
							width: 176upx;
							height: 68upx;
							display: flex;
							justify-content: center;
							align-items: center;
							background: #E51700;
							color: #fff;
							font-size: 24upx;
							border-radius: 8upx;
						}
					}
				}
			}
		}
	}
	
</style>
