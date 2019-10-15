<template>
	<view class="recommend-list">
		<view class="hd">
			<view class="cell-tit">
				商品推荐
			</view>
			<view class="cell-more" @tap="linkToMore">
				查看更多
				<text class="icon-arrow iconfont icon-arrowRight"></text>
			</view>
		</view>
		<view class="bd">
			<view class="pro-item" @tap="linkToDetail(item.goodsId)" v-for="(item,index) in options.list" v-if="item.shelf" :key="index">
				<image :src="item.goodsImg" class="pro-img" mode="widthFix" />
				<view class="pro-content">
					<view class="pro-tit">{{item.goodsTitle}}</view>
					<view>
						<view class="pro-subtit">
							{{item.goodsSubTitle}}
						</view>
						<view class="salePrice">
							<view class="rulingPrice">
								<view class="price" v-if="item.goodsPoint">
									<text class="text">{{item.goodsPoint}}</text>积分
								</view>
								<view v-if="item.goodsPrice && item.goodsPoint">
									+
								</view>
								<view class="price" v-if="item.goodsPrice">
									<text class="text">{{item.goodsPrice}}</text>元
								</view>
							</view>
							<view class="markedPrice" v-if="item.goodsVirtualprice">
								{{item.goodsVirtualprice}}元
							</view>
						</view>
					</view>
				</view>
				<!-- <view v-if="item.tag" class="tag">
					{{item.tag}}
				</view> -->
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
		props: {
			options: Object
		},
		methods: {
			linkToMore(){
				uni.reLaunch({
					url: '/pages/product/product'
				})
			},
			linkToDetail(e){
				uni.navigateTo({
					url: '/pages/productDetail/productDetail?goodsId=' + e
				});
			}
		}
	}
</script>

<style lang="scss">
	.recommend-list {
		.hd{
			padding: 0 25upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 70upx;
			.cell-tit{
				font-size: 32upx;
				color: #474747;
			}
			.cell-more{
				font-size: 24upx;
				color: #747474;
				padding: 10upx;
				.icon-arrow{
					font-size: 25upx;
					font-weight: bold;
				}
			}
		}
		.bd{
			background: #F8F8F8;
			display: flex;
			display: -webkit-flex;
			justify-content: space-between;
			flex-direction: row;
			flex-wrap: wrap;
			box-sizing: border-box;
			padding: 10upx 20upx 0 20upx;
		}
	}
	
	.pro-item {
		background: #fff;
		box-sizing: border-box;
		width: 48.8%;
		position: relative;
		margin-bottom: 2.5%;
	}
	
	.pro-item::after {
		content: '';
		position: absolute;
		height: 200%;
		width: 200%;
		// border: 1upx solid red;
		transform-origin: 0 0;
		-webkit-transform-origin: 0 0;
		-webkit-transform: scale(0.5);
		transform: scale(0.5);
		left: 0;
		top: 0;
	}
	
	.pro-img {
		width: 100%;
		display: block;
	}
	
	.pro-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 20upx;
		height: 245upx;
	}
	
	.pro-tit {
		color: #333333;
		font-size: 26upx;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	
	.pro-subtit{
		font-size: 24rpx;
		color: #747474;
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		
	}
	
	.salePrice{
		margin-top: 10upx;
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
</style>
