<template>
	<view class="swiper-box">
		<swiper class="swiper" circular="true" autoplay="true" @change="swiperChange">
			<swiper-item class="swiper-item" v-for="swiper in swiperList" :key="swiper.id">
				<image class="img" :src="swiper.img" @tap="toSwiper(swiper)" mode="widthFix"></image>
			</swiper-item>
		</swiper>
		<view class="indicator">
			<view
				class="dots"
				v-for="(swiper, index) in swiperList"
				:class="[currentSwiper == index ? 'on' : '']"
				:key="index"
			></view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				swiperList: [
					{ id: 1, src: 'url1', img: 'https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg' },
					{ id: 2, src: 'url2', img: 'https://gdp.alicdn.com/imgextra/i4/667454208/O1CN01yEBH4A1gxJCM2NRTq_!!667454208.jpg' },
					{ id: 3, src: 'url3', img: 'https://img.alicdn.com/tfs/TB14jVady_1gK0jSZFqXXcpaXXa-750-291.jpg' },
					{ id: 4, src: 'url4', img: 'https://img.alicdn.com/tfs/TB1AoVmdAL0gK0jSZFAXXcA9pXa-750-291.jpg' },
					{ id: 5, src: 'url5', img: 'https://gdp.alicdn.com/imgextra/i4/667454208/O1CN01a5RvRR1gxJCBr29hz_!!667454208.jpg' }
				],
				currentSwiper: 0
			}
		},
		methods: {
			//轮播图跳转
			toSwiper(e) {
				uni.showToast({ title: e.src, icon: 'none' });
			},
			//轮播图指示器
			swiperChange(event) {
				this.currentSwiper = event.detail.current;
			}
		}
	}
	
</script>

<style lang="scss">
	.swiper-box{
		position: relative;
		.swiper{
			height: 260upx;
			.swiper-item{
				width: 100%;
				height: 100%;
				.img{
					width: 100%;
				}
			}
		}
		.indicator{
			position: absolute;
			bottom: 28upx;
			left: 50%;
			transform: translateX(-50%);
			.dots{
				float: left;
				width: 12upx;
				height: 12upx;
				background: rgba(250, 250, 250, .4);
				border-radius: 50%;
				margin: 0 6upx;
				&.on{
					background: rgba(250, 250, 250, 1);
				}
			}
		}
	}
</style>
