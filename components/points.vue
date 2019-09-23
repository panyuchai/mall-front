<template>
	<view class="pointsBar">
		<!-- <view class="search" @click="linkToSearch">
			<text class="iconfont icon-sousuo search-icon"></text>
			<input class="search-info" type="text" placeholder="请输入搜索内容" :value="keyword" disabled/>
		</view> -->
		<view class="name">
			尊敬的{{customerName || '游客'}}, 您当前积分:
		</view>
		<view class="points">
			<text class="iconfont icon-jinbi icon"></text>
			<text class="num">{{options.points}}分</text>
		</view>
	</view>
</template>

<script>
	export default{
		name: "points",
		data() {
			return {
				
			}
		},
		props: {
			options: Object,
			customerName: {
				type: String
			}
			// options: {
			// 	type: Number
			// }
		}
		
	}
</script>

<style lang="scss">
	.pointsBar{
		background: #f7f8fa;
		padding: 12upx 25upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 30upx;
		.name{
			color: #474747;
		}
		.points{
			color: #fcb434;
			.icon{
				font-size: 45upx;
				vertical-align: middle;
				padding: 0 6upx;
			}
			.num{
				font-weight: bold;
				vertical-align: middle;
			}
		}
	}
</style>
