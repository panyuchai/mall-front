<template>
	<view class="container">
		<view class="tui-searchbox">
			<view class="tui-search-input">
				<!-- #ifdef APP-PLUS || MP -->
				<icon type="search" :size='13' color='#333' @tap="handleSearch"></icon>
				<!-- #endif -->
				<!-- #ifdef H5 -->
				<view><tui-icon name="search" :size='16' color='#333' @tap="handleSearch"></tui-icon></view>
				<!-- #endif -->
				<input @keypress='handleSearch' confirm-type="search" placeholder="大家都在搜：2019退役球星" type="search" :focus="true" auto-focus placeholder-class="tui-input-plholder"
				 class="tui-input" v-model.trim="keyword" />
				<!-- #ifdef APP-PLUS || MP -->
				<icon type="clear" :size='13' color='#bcbcbc' @tap="cleanKey" v-show="keyword"></icon>
				<!-- #endif -->
				<!-- #ifdef H5 -->
				<view @tap="cleanKey" v-show="keyword"><tui-icon name="close-fill" :size='16' color='#bcbcbc'></tui-icon></view>
				<!-- #endif -->
			</view>
			<view class="tui-cancle" @tap="back">取消</view>
		</view>

		<view class="tui-search-history" v-if="historyShow">
			<view class="tui-history-header">
				<view class="tui-search-title">搜索历史</view>
				<tui-icon name="delete" :size='14' color='#333' @tap="openActionSheet" class="tui-icon-delete"></tui-icon>
			</view>
			<view class="tui-history-content">
				<block v-for="(item,index) in historyData" :key="index">
					<tui-tag class="default-tag" type="gray" @tap="chooseKeywords(item)" shape="circle">{{item}}</tui-tag>
				</block>
			</view>
		</view>

		<tui-actionsheet :show="showActionSheet" :tips="tips" @click="itemClick" @cancel="closeActionSheet"></tui-actionsheet>
	</view>

</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import tuiIcon from "@/components/icon/icon"
	import tuiTag from "@/components/tag/tag"
	import tuiActionsheet from "@/components/actionsheet/actionsheet"
	export default {
		components: {
			tuiIcon,
			tuiTag,
			tuiActionsheet
		},
		data() {
			return {
				historyData: [],
				historyShow: true,
				keyword: "",
				showActionSheet: false,
				tips: "确认清空搜索历史吗？"
			}
		},
		methods: {
			back: function() {
				uni.navigateBack();
			},
			cleanKey: function() {
				this.keyword = ''
			},
			closeActionSheet: function() {
				this.showActionSheet = false
			},
			openActionSheet: function() {
				this.showActionSheet = true
			},
			chooseKeywords: function(e){
				this.keyword = e;
			},
			handleSearch(){
				if(this.keyword.trim() == ''){
					uni.showToast({
						icon: 'none',
						title: '搜索条件不能为空',
					});
				}else{
					uni.setStorageSync('searchKeyword', this.keyword);
					// uni.$emit('handleSearchKeywor', this.keyword);
					uni.switchTab({
						url: '/pages/product/product'
					});
				}
			},
			itemClick: function(e) {
				// let index = e.index;
				// if (index == 0) {
				// 	this.showActionSheet = false;
				// 	this.history = []
				// }
				let index = e.index;
				if(index == 0){
					this.showActionSheet = false;
					this.$http.post('/mall/app/search/history/clear', {
						...this.baseInfo,
						accountId: this.userInfo.accountId
					})
					.then( res => {
						if(res.code == 0){
							this.getHistoryData();
						}else{
							console.log('searchPage.vue-- clear接口清空数据失败');
						}
					})
					.catch( err => {
						console.log('searchPage.vue-- clear接口清空数据错误');
					})
				}
			},
			unique(arr) {
			    // var obj = {};
			    // return arr.filter(function(item, index, arr){
			    //     return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
			    // })
				var list = [];
				arr.map(item => {
					list.push(item.keyword);
				});
				return [...new Set(list)];
			},
			getHistoryData(){
				this.$http.post('/mall/app/search/history/query', {
					...this.baseInfo,
					accountId: this.userInfo.accountId
				})
				.then( res => {
					if(res.code == 0){
						if(res.result.list){
							this.historyData=this.unique(res.result.list);
							console.log(this.historyData)
						}else{
							this.historyShow=false;
						}
					}else{
						console.log('searchPage.vue-- query接口获取数据失败');
					}
				})
				.catch( err => {
					console.log('searchPage.vue-- query接口获取数据错误');
				})
			}
		},
		computed: {
			...mapState("common", ['baseInfo', 'userInfo'])
		},
		onLoad: function(){
			this.getHistoryData();
		}
	}
</script>

<style>
	page {
		color: #333;
		background: #fff;
	}

	.container {
		padding: 0 30upx 30upx 30upx;
		box-sizing: border-box;
	}

	.tui-searchbox {
		padding: 30upx 0;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}

	.tui-search-input {
		width: 100%;
		height: 66upx;
		border-radius: 35upx;
		padding: 0 30upx;
		box-sizing: border-box;
		background: #f2f2f2;
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
	}

	.tui-input {
		flex: 1;
		color: #333;
		padding: 0 16upx;
		font-size: 28upx;
	}

	.tui-input-plholder {
		font-size: 28upx;
		color: #b2b2b2;
	}

	.tui-cancle {
		color: #888;
		font-size: 28upx;
		padding-left: 30upx;
		flex-shrink: 0;
	}

	.tui-history-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 30upx 0;
	}

	.tui-icon-delete {
		padding: 10upx;
	}

	.tui-search-title {
		font-size: 28upx;
		font-weight: bold;
	}

	.tui-tag-class {
		display: inline-block;
		margin-bottom: 20upx;
		margin-right: 20upx;
		font-size: 26upx !important;
	}
	
	.default-tag{
		min-width: 68upx;
		text-align: center;
	}
</style>
