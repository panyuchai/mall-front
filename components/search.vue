<template>
	<view class="searchBar">
		<view class="search" @click="linkToSearch">
			<text class="iconfont icon-sousuo search-icon"></text>
			<!-- <text class="search-info">{{keyword}}</text> -->
			<input class="search-info" type="text" placeholder="请输入搜索内容" :value="keyword" disabled/>
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
			keyword: {
				type: String,
				default: '请输入搜索内容'
			}
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
			display: flex;
			align-items: center;
			.search-icon{
				color: #979797;
				font-size: 20px;
				padding: 0 4px 0 10px;
			}
			.search-info{
				flex: 1;
				font-size: 14px;
				color: #6F6F6F;
				height: 30px;
				line-height: 30px;
				padding: 0 15px 0 0;
			}
		}
	}
</style>
