<template>
	<view>
		<search class="search-bar" :keyword='searchData.keyword'></search>
		<view class="search-classify">
			<view class="classify-top">
				<view class="item" @tap="doQuery(0)" v-bind:class='searchData.orderType==0 ? "red" : ""'>
					综合
				</view>
				<view class="item" @tap="doQuery(1)" v-bind:class='searchData.orderType==1 ? "red" : ""'>
					最新
				</view>
				<view class="item" @tap="doQuery(2)">
					价格
					<text class="item-icon">
						<text class="iconfont icon-icon_sanjiaoxing icon-top" v-bind:class='[searchData.orderType==2 && searchData.desc ? "red" : ""]'></text>
						<text class="iconfont icon-icon_sanjiaoxing icon-bottom" v-bind:class='[searchData.orderType==2 && !searchData.desc ? "red" : ""]'></text>
					</text>
				</view>
				<view class="item" @tap="doQuery(3)">
					销量
					<text class="item-icon">
						<text class="iconfont icon-icon_sanjiaoxing icon-top" v-bind:class='[searchData.orderType==3 && searchData.desc ? "red" : ""]'></text>
						<text class="iconfont icon-icon_sanjiaoxing icon-bottom" v-bind:class='[searchData.orderType==3 && !searchData.desc ? "red" : ""]'></text>
					</text>
				</view>
			</view>
		</view>
		<view v-if='notFound' class="product-empty">
			<view class="not-tips">
				没有找到相关搜索结果
			</view>
		</view>
		<view class="product-list" @scroll="scroll" :scroll-top="scrollTop">
			<!--商品列表-->
			<view class="pro-item" @tap="linkToDetail(item.goodspoolId)" v-for="(item,index) in productData" :key="index">
				<image :src="item.goodsMainimagepath" class="pro-img" mode="widthFix" />
				<view class="pro-content">
					<view class="pro-tit">{{item.goodsProductname}}</view>
					<view>
						<view class="pro-subtit">
							{{item.goodsTitle}}
						</view>
						<view class="salePrice">
							<view class="rulingPrice">
								<view class="price" v-if="item.credits">
									<text class="text">{{item.credits}}</text>积分
								</view>
								<view v-if="item.salePrice && item.credits">
									+
								</view>
								<view class="price" v-if="item.salePrice">
									<text class="text">{{item.salePrice}}</text>元
								</view>
							</view>
							<view class="markedPrice" v-if="item.goodsVirtualprice">
								{{item.goodsVirtualprice}}元
							</view>
						</view>
					</view>
				</view>
				<view v-if="item.label" class="tag">
					{{item.label}}
				</view>
			</view>
			<!--商品列表-->
		</view>
		<!--加载loadding-->
		<tui-loadmore :visible="loadding" :index="3" type="primary"></tui-loadmore>
		<tui-nomore :visible="!pullUpOn"></tui-nomore>
		
	</view>
</template>

<script>
	import {
	    mapState,
	    mapMutations
	} from 'vuex'
	import Search from "@/components/search.vue";
	import tuiLoadmore from "@/components/loadmore/loadmore"
	import tuiNomore from "@/components/nomore/nomore"
	export default {
		data() {
			return {
				pageNum: 1,
				productData: [],
				loadding: false,
				pullUpOn: true,
				notFound: false,
				canReachBottom: true,
				searchData: {
					pageNum: 1,
					pageSize: 10,
					totalPage: null,
					keyword: uni.getStorageSync('searchKeyword') || '',
					orderType: null,
					desc: false
				},
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			}
		},
		methods: {
			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
			},
			linkToDetail(e){
				uni.navigateTo({
					url: '/pages/productDetail/productDetail?goodsId=' + e
				});
			},
			doQuery(orderType){
				this.goTop();
				this.searchData.pageNum=1;
				switch (orderType){
					case 2:
						this.searchData.desc=!this.searchData.desc;
						break;
					case 3:
						this.searchData.desc=!this.searchData.desc;
						break;
					default:
						this.searchData.desc=false;
				}
				this.doSearch(orderType);
				uni.setStorageSync('product_searchType_storage', orderType);
			},
			doSearch(orderType){
				this.loadding = true;
				this.pullUpOn = true;
				this.searchData.orderType=orderType || 0;
				
				this.$http.post('/mall/app/goods/list', {
					accountId: this.userInfo && this.userInfo.accountId || '',
					...this.baseInfo,
					...this.searchData
				})
				.then( res => {
					if(res.code == 0){
						if(res.result){
							this.searchData.totalPage=res.result.totalPage;
							if(res.result.mallGoodsList.length == 0){
								this.loadding = false;
								this.pullUpOn = false;
							}else{
								this.loadding = false;
							}
							if(this.searchData.pageNum == 1){
								if(res.result.mallGoodsList){
									this.productData=res.result.mallGoodsList;
								}
							}else{
								this.productData=this.productData.concat(res.result.mallGoodsList);
							}
						}
						
					}else{
						console.log("product.vue-- list获取数据列表失败");
					}
				})
				.catch( err => {
					console.log("product.vue-- list获取数据列表错误");
				})
			},
			initSearch(){
				this.searchData.pageNum=1;
				this.productData=[];
			}
		},
		computed: {
			...mapState("common", ['baseInfo', 'userInfo']),
		},
		onLoad: function(){
			
		},
		onShow(){
			let keyword = uni.getStorageSync('searchKeyword') || '';
			this.searchData.keyword=keyword;
			this.initSearch();
			this.doSearch(0);
		},
		onHide(){
			uni.removeStorageSync('searchKeyword');
			uni.removeStorageSync('product_searchType_storage');
		},
		// 页面上拉触底事件的处理函数
		onReachBottom: function() {
			if (!this.pullUpOn) return;
			this.loadding = true;
			this.searchData.pageNum++;
			if (this.searchData.pageNum > this.searchData.totalPage) {
				this.loadding = false;
				this.pullUpOn = false;
			}
			this.doSearch(uni.getStorageSync('product_searchType_storage'));
		},
		components: {
			Search,
			tuiLoadmore,
			tuiNomore
		}
	}
</script>

<style lang="scss">
	// .search-bar{
	// 	position: fixed;
	// 	top: 44px;
	// 	left: 0;
	// 	right: 0;
	// 	z-index: 10;
	// }
	/*  #ifdef  H5  */
		.search-bar{
			position: fixed;
			top: 44px;
			left: 0;
			right: 0;
			z-index: 10;
		}
		.search-classify{
			position: fixed;
			left: 0;
			right: 0;
			z-index: 10;
			top: 94px;
		}
	/*  #endif  */
	/*  #ifdef  MP-WEIXIN  */
		.search-bar{
			position: fixed;
			top: 0px;
			left: 0;
			right: 0;
			z-index: 10;
		}
		.search-classify{
			position: fixed;
			left: 0;
			right: 0;
			z-index: 10;
			top: 50px;
		}
	/*  #endif  */
	.search-classify{
		// position: fixed;
		// left: 0;
		// right: 0;
		// z-index: 10;
		// top: 94px;
		background-color: #fff;
		.classify-top{
			display: flex;
			height: 60rpx;
			line-height: 60rpx;
			box-shadow: 2px 3px 5px rgba(0, 0, 0, .1);
			.item{
				flex: 1;
				color: #080808;
				font-size: 24rpx;
				text-align: center;
				height: 60rpx;
				.item-icon{
					display: inline-block;
					width: 16px;
					position: relative;
					.iconfont{
						color: #B6B6B6;
					}
					.icon-top{
						display: inline-block;
						transform: rotate(180deg);
						position: absolute;
						top: -48rpx;
						left: 1px;
						// color: #B6B6B6;
					}
					.icon-bottom{
						display: inline-block;
						position: absolute;
						bottom: -30rpx;
						left: 1px;
						// color: #B6B6B6;
					}
				}
			}
		}
		.classify-bottom{
			display: none;
			position: absolute;
			z-index: -1;
			top: 60rpx;
			left: 0;
			right: 0;
			padding: 8px 10px 12px 10px;
			background-color: #fff;
			.item{
				width: 25%;
				font-size: 24rpx;
				color: #080808;
				display: inline-block;
				text-align: center;
				height: 50rpx;
				line-height: 50rpx;
				margin-top: 2px;
				margin-bottom: 3px;
				border-radius: 4px;
			}
			.active{
				background-color: #E22018;
				color: #fff;
			}
		}
	}
	.product-empty{
		margin-top: 94px;
		.not-tips{
			display: flex;
			justify-content: center;
			font-size: 28upx;
			padding: 8vh 20upx 0;
			.login-btn{
				color: #E93548
			}
		}
	}
	.product-list {
		margin-top: 80px;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
		flex-direction: row;
		flex-wrap: wrap;
		box-sizing: border-box;
		padding: 30upx 30upx 0 30upx;
		background: #F8F8F8;
	}
	
	.pro-item {
		background: #ffffff;
		box-sizing: border-box;
		width: 48.8%;
		position: relative;
		margin-bottom: 2.8%;
	}
	
	.pro-item::after {
		content: '';
		position: absolute;
		height: 200%;
		width: 200%;
		// border: 1upx solid #e1e1e1;
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
		/* font-size:  */
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
	
	.red{
		color: #ea1500!important;
	}
	
	// .gray{
	// 	color: #080808!important;
	// }
	
</style>
