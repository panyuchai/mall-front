<template>
	<view class="swiper-box">
		<swiper class="swiper" circular="true" autoplay="true" @change="swiperChange">
			<swiper-item class="swiper-item" v-for="swiper in options.list" :key="swiper.id">
				<image class="img" :src="swiper.img" @tap="toSwiper(swiper)" mode="widthFix"></image>
			</swiper-item>
		</swiper>
		<view class="indicator">
			<view
				class="dots"
				v-for="(swiper, index) in options.list"
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
				currentSwiper: 0
			}
		},
		props: {
			options: Object
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
