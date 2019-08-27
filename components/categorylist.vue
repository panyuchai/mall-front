<template>
	<view class="category-list">
		<swiper class="swiper" @change="swiperChange">
			<swiper-item class="swiper-item" v-for="(nav, index) in filterImgs" :key="index">
				<view class="nav">
					<view class="item" v-for="item in nav" :key="item.id">
						<image class="item-img" :src="item.imgUrl" mode="widthFix"></image>
						<text class="item-name">{{item.name}}</text>
					</view>
				</view>
			</swiper-item>
		</swiper>
		<view class="indicator">
			<view
				class="dots"
				v-for="(swiper, index) in filterImgs"
				:class="[currentSwiper == index ? 'on' : '']"
				:key="index"
			></view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['options'],
		data() {
			return {
				swiperList: [
					{ id: 1, name: '新品首发新品首发新品首发新品首发', imgUrl: '/static/img/category-icon1.png' },
					{ id: 2, name: '服饰鞋包', imgUrl: '/static/img/category-icon2.png' },
					{ id: 3, name: '食品生鲜', imgUrl: '/static/img/category-icon3.png' },
					{ id: 4, name: '粮油食品', imgUrl: '/static/img/category-icon4.png' },
					{ id: 5, name: '母婴亲子', imgUrl: '/static/img/category-icon6.png' },
					{ id: 6, name: '中秋商品', imgUrl: '/static/img/category-icon7.png' },
					{ id: 7, name: '中秋商品', imgUrl: '/static/img/category-icon8.png' },
					{ id: 8, name: '中秋商品', imgUrl: '/static/img/category-icon1.png' },
					{ id: 1, name: '中秋商品', imgUrl: '/static/img/category-icon2.png' },
					{ id: 2, name: '中秋商品', imgUrl: '/static/img/category-icon3.png' }
				],
				currentSwiper: 0
			}
		},
		methods: {
			//指示器
			swiperChange(event) {
				console.log(event);
				this.currentSwiper = event.detail.current;
			}
		},
		computed:{
			filterImgs(){
			  let imgs = []
			  this.swiperList.forEach((item,index)=>{
				  let page = ~~(index/8)
				  if(!imgs[page]){
					imgs[page] = []
				  }
				  imgs[page].push(item)
			  })
			  return imgs
			}
		}
	}
</script>

<style lang="scss">
	.category-list{
		position: relative;
		padding-top: 10upx;
		.swiper{
			height: 340upx;
			.swiper-item{
				height: 100%;
				.nav{
					display: flex;
					flex-wrap: wrap;
					height: 100%;
					padding: 0;
					margin: 0;
					box-sizing: border-box;
					.item{
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						width: 25%;
						height: 50%;
						box-sizing: border-box;
						.item-img{
							width: 92upx;
							height: 92upx!important;
						}
						.item-name{
							font-size: 24upx;
							color: #303133;
							max-width: 80%;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
							margin-top: 10upx;
						}
					}
				}
			}
		}
		.indicator{
			display: flex;
			justify-content: center;
			flex-direction: row;
			align-items: center;
			padding: 20upx;
			.dots{
				width: 38upx;
				height: 8upx;
				background: #F1F2F2;
				&.on{
					background: #F77940;
					border-radius: 25upx;
				}
			}
		}
	}
</style>
