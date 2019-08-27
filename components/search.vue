<template>
	<view class="searchBar">
		<view class="search" @click="linkToSearch">
			<text class="iconfont icon-sousuo search-icon"></text>
			<text class="search-info">输入商品名称</text>
		</view>
	</view>
</template>

<script>
	export default{
		name: "search",
		data() {
			return {
				
			}
		},
		props: {
			options: Object,
		},
		methods: {
			linkToSearch(){
				uni.navigateTo({
					url: '/pages/searchPage/searchPage'
				});
			}
		}
	}
</script>

<style lang="scss">
	.searchBar{
		background-color: #E22018;
		padding: 10px 8px;
		.search{
			height: 30px;
			line-height: 30px;
			overflow: hidden;
			background-color: #fff;
			border-radius: 15px;
			.search-icon{
				color: #979797;
				font-size: 20px;
				padding: 0 4px 0 10px;
				float: left;
			}
			.search-info{
				font-size: 14px;
				color: #6F6F6F;
				float: left;
			}
		}
	}
</style>
