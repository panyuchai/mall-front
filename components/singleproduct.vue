<template>
	<view class="goods-list">
		<view class="goods" v-for="(good, index) in goodsData" :key="index">
			<view class="img">
				<image :src="good.imgUrl" mode="aspectFit"></image>
			</view>
			<view class="info">
				<view class="tit">
					{{good.tit}}
				</view>
				<view class="desc">
					{{good.desc}}
				</view>
				<view class="saleNum">
					已售:{{good.saleNum}}
				</view>
				<view class="sale">
					<view class="sale-points">
						<text class="points">{{good.points}}</text>分
					</view>
					<view class="sale-action">
						<view class="sale-btn">
							马上抢
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
			// options:{
			// 	type:Object,
			// 	default:{}
			// }
		},
		data() {
			return {
				goodsData: [
					{
						tit: '中粮福临门胡姬花特香花生油中粮福临门胡姬花特香花生油',
						desc: '好油特别好的油副标题好油特别好的油副标题',
						imgUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1840129408,3057999467&fm=26&gp=0.jpg',
						saleNum: '1399',
						points: '500'
					},
					{
						tit: '中粮福临门胡姬花特香花生油中粮福临门胡姬花特香花生油',
						desc: '好油特别好的油副标题好油特别好的油副标题',
						imgUrl:'https://gw.alicdn.com/bao/uploaded/i2/3253752910/TB1eAexobGYBuNjy0FoXXciBFXa_!!0-item_pic.jpg',
						saleNum: '1399',
						points: '500'
					}
				]
			};
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
			overflow: hidden;
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
					margin-top: 18upx;
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					.sale-points{
						color: #E51700;
						font-size: 24upx;
						.points{
							font-size: 40upx;
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
