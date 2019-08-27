<template>
	<view class="recommend-list">
		<view class="hd">
			<view class="cell-tit">
				商品推荐
			</view>
			<view class="cell-more">
				查看更多
				<text class="icon-arrow iconfont icon-arrowRight"></text>
			</view>
		</view>
		<view class="bd">
			<view class="pro-item" @tap="linkToDetail" v-for="(item,index) in productList" :key="index">
				<image :src="item.img" class="pro-img" mode="widthFix" />
				<view class="pro-content">
					<view class="pro-tit">{{item.name}}</view>
					<view>
						<view class="pro-subtit">
							{{item.subname}}
						</view>
						<view class="pro-price">
							<text class="sale-price"><text class="unit">￥</text>{{item.sale}}</text>
						</view>
					</view>
				</view>
				<view v-if="item.tag" class="tag">
					{{item.tag}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				productList: [{
						img: "https://img10.360buyimg.com/mobilecms/s250x250_jfs/t1/79958/6/7035/83963/5d5284e9E431edff7/ca5016a2d89bebfa.jpg",
						name: "1利物浦官方 独家出品纪念版沙发",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 599,
						tag: ""
					},
					{
						img: "https://img11.360buyimg.com/mobilecms/s250x250_jfs/t1/77330/32/6999/125051/5d521e04E1a3c521d/46a3eb82a5e71955.jpg",
						name: "2好看好养活的绿色养眼小盆栽，超级实惠",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 29,
						tag: ""
					},
					{
						img: "https://img11.360buyimg.com/mobilecms/s250x250_jfs/t1/52835/5/7780/68424/5d551e5bE1ff25f7a/a1378aae68c5573d.jpg",
						name: "3利物浦官方 独家出品大红床上用品三件套",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 299,
						tag: ""
					},
					{
						img: "https://img10.360buyimg.com/mobilecms/s250x250_jfs/t1/46347/37/7514/181869/5d564fa7Ee06b08af/08a1674243c8a889.jpg",
						name: "4利物浦官方 独家出品花花碎花床上用品三件套",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 1599,
						tag: ""
					},
					{
						img: "https://img13.360buyimg.com/mobilecms/s250x250_jfs/t1/67834/38/7063/84612/5d527bb5E3d7f16dd/aed7c2b7eefb5e90.png",
						name: "5利物浦官方 独家出品纪念版书柜，便宜又省空间，超级划算",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 599
					}, {
						img: "https://img14.360buyimg.com/mobilecms/s250x250_jfs/t1/1302/17/14246/123532/5bda89e4E8278bded/c27272f456cf109b.jpg",
						name: "6独家出品纪念版沙发",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 599
					},
					{
						img: "https://img14.360buyimg.com/mobilecms/s250x250_jfs/t1/55553/11/7691/128905/5d53ea1dEb39a2ae0/f97c0ee7dc6f6028.png",
						name: "7好看好养活的绿色养眼小盆栽，超级实惠",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 29
					},
					{
						img: "https://img12.360buyimg.com/mobilecms/s250x250_jfs/t1/70751/31/7224/191956/5d54c2b7Eecb42fe9/19f11664be9a6603.jpg",
						name: "8利物浦官方 独家出品大红床上用品三件套",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 299
					},
					{
						img: "https://img11.360buyimg.com/mobilecms/s250x250_jfs/t1/8076/27/10131/238120/5c1ca53bE863e2287/2cabd52544fbede9.jpg",
						name: "9利物浦官方 独家出品花花碎花床上用品三件套",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 1599
					},
					{
						img: "https://img14.360buyimg.com/mobilecms/s250x250_jfs/t1/67658/16/7652/193797/5d5a15e1E5176c23f/f39ce2629f36cdb9.jpg",
						name: "10利物浦官方 独家出品纪念版书柜，便宜又省空间，超级划算",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 599
					}
				],
			};
		},
		methods: {
			linkToDetail(e){
				uni.navigateTo({
					url: '/pages/productDetail/productDetail'
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
		height: 215upx;
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
	
	.pro-price {
		padding-top: 14upx;
	}
	
	.sale-price {
		font-size: 32upx;
		color: #ea1500;
		.unit{
			font-size: 24rpx;
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
