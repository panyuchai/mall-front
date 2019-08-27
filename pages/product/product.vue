<template>
	<view>
		<search class="search-bar"></search>
		<view class="search-classify">
			<view class="classify-top">
				<view class="item" @tap="doSearch(0)" v-bind:class='searchData.orderType==0 ? "red" : "gray"'>
					综合
				</view>
				<view class="item" @tap="doSearch(1)" v-bind:class='searchData.orderType==1 ? "red" : "gray"'>
					最新
				</view>
				<view class="item" @tap="doSearch(2)">
					价格
					<text class="item-icon">
						<text class="iconfont icon-icon_sanjiaoxing icon-top" v-bind:class='searchData.orderType==2 ? "red" : "gray"'></text>
						<text class="iconfont icon-icon_sanjiaoxing icon-bottom"></text>
					</text>
				</view>
				<view class="item" @tap="doSearch(3)" v-bind:class='searchData.orderType==3 ? "red" : "gray"'>
					销量
					<text class="item-icon">
						<text class="iconfont icon-icon_sanjiaoxing icon-top"></text>
						<text class="iconfont icon-icon_sanjiaoxing icon-bottom"></text>
					</text>
				</view>
				<!-- <view class="item">
					分类
				</view> -->
			</view>
			<!-- <view class="classify-bottom">
				<text class="item">
					家居用品
				</text>
				<text class="item">
					家居用品
				</text>
				<text class="item">
					家居用品
				</text>
				<text class="item">
					家居用品
				</text>
				<text class="item">
					家居用品
				</text>
				<text class="item">
					家居用品
				</text>
				<text class="item">
					家居用品
				</text>
				<text class="item">
					家居用品
				</text>
			</view> -->
		</view>
		<view v-if='notFound'>
			<view class="not-tips">
				没有找到相关搜索结果
			</view>
		</view>
		<view>
			<view v-if='hasLogin'>
				<view class="product-list">
					<!--商品列表-->
					<!-- <view class="pro-item" @tap="linkToDetail(item.id)" v-for="(item,index) in productData" :key="index">
						<image :src="item.goodsMainimagepath" class="pro-img" mode="widthFix" />
						<view class="pro-content">
							<view class="pro-tit">{{item.goodsProductname}}</view>
							<view>
								<view class="pro-subtit">
									{{item.goodsTitle}}
								</view>
								<view class="pro-price">
									<text class="sale-price"><text class="unit">￥</text>{{item.salePrice}}</text>
								</view>
							</view>
						</view>
						<view v-if="item.tag" class="tag">
							{{item.label}}
						</view>
					</view> -->
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
					<!--商品列表-->
				</view>
				<!--加载loadding-->
				<tui-loadmore :visible="loadding" :index="3" type="primary"></tui-loadmore>
				<tui-nomore :visible="!pullUpOn"></tui-nomore>
				
			</view>
			<view class="product-empty" v-else>
				<view class="err-tips">
					您还未登陆，请先去<text class="login-btn" @tap="linkToLogin">登陆</text>吧~
				</view>
			</view>
		</view>
		
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
				productList: [{
						img: "http://localhost:8081/static/images/product/1.jpg",
						name: "1利物浦官方 独家出品纪念版沙发",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 599,
						tag: "大特惠"
					},
					{
						img: "http://localhost:8081/static/images/product/2.jpg",
						name: "2好看好养活的绿色养眼小盆栽，超级实惠",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 29,
						tag: "新品特惠"
					},
					{
						img: "http://localhost:8081/static/images/product/3.jpg",
						name: "3利物浦官方 独家出品大红床上用品三件套",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 299,
						tag: "新品"
					},
					{
						img: "http://localhost:8081/static/images/product/4.jpg",
						name: "4利物浦官方 独家出品花花碎花床上用品三件套",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 1599,
						tag: ""
					},
					{
						img: "http://localhost:8081/static/images/product/5.jpg",
						name: "5利物浦官方 独家出品纪念版书柜，便宜又省空间，超级划算",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 599
					}, {
						img: "http://localhost:8081/static/images/product/1.jpg",
						name: "6独家出品纪念版沙发",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 599
					},
					{
						img: "http://localhost:8081/static/images/product/2.jpg",
						name: "7好看好养活的绿色养眼小盆栽，超级实惠",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 29
					},
					{
						img: "http://localhost:8081/static/images/product/3.jpg",
						name: "8利物浦官方 独家出品大红床上用品三件套",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 299
					},
					{
						img: "http://localhost:8081/static/images/product/4.jpg",
						name: "9利物浦官方 独家出品花花碎花床上用品三件套",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 1599
					},
					{
						img: "http://localhost:8081/static/images/product/5.jpg",
						name: "10利物浦官方 独家出品纪念版书柜，便宜又省空间，超级划算",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 599
					}
				],
				loadData: [{
						img: "http://localhost:8081/static/images/product/1.jpg",
						name: "11利物浦官方 独家出品纪念版沙发",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 599
					},
					{
						img: "http://localhost:8081/static/images/product/2.jpg",
						name: "12好看好养活的绿色养眼小盆栽，超级实惠",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 29
					},
					{
						img: "http://localhost:8081/static/images/product/3.jpg",
						name: "13利物浦官方 独家出品大红床上用品三件套",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 299
					},
					{
						img: "http://localhost:8081/static/images/product/4.jpg",
						name: "14利物浦官方 独家出品花花碎花床上用品三件套",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 1599
					},
					{
						img: "http://localhost:8081/static/images/product/5.jpg",
						name: "15利物浦官方 独家出品纪念版书柜，便宜又省空间，超级划算",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 599
					}, {
						img: "http://localhost:8081/static/images/product/1.jpg",
						name: "16独家出品纪念版沙发",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 599
					},
					{
						img: "http://localhost:8081/static/images/product/2.jpg",
						name: "17好看好养活的绿色养眼小盆栽，超级实惠",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 29
					},
					{
						img: "http://localhost:8081/static/images/product/3.jpg",
						name: "18利物浦官方 独家出品大红床上用品三件套",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 299
					},
					{
						img: "http://localhost:8081/static/images/product/4.jpg",
						name: "19利物浦官方 独家出品花花碎花床上用品三件套",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 1599
					},
					{
						img: "http://localhost:8081/static/images/product/5.jpg",
						name: "20利物浦官方 独家出品纪念版书柜，便宜又省空间，超级划算",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 599
					},
					{
						img: "http://localhost:8081/static/images/product/1.jpg",
						name: "21利物浦官方 独家出品纪念版沙发",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 599
					},
					{
						img: "http://localhost:8081/static/images/product/2.jpg",
						name: "22好看好养活的绿色养眼小盆栽，超级实惠",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 29
					},
					{
						img: "http://localhost:8081/static/images/product/3.jpg",
						name: "23利物浦官方 独家出品大红床上用品三件套",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 299
					},
					{
						img: "http://localhost:8081/static/images/product/4.jpg",
						name: "24利物浦官方 独家出品花花碎花床上用品三件套",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 1599
					},
					{
						img: "http://localhost:8081/static/images/product/5.jpg",
						name: "25利物浦官方 独家出品纪念版书柜，便宜又省空间，超级划算",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 599
					}, {
						img: "http://localhost:8081/static/images/product/1.jpg",
						name: "26独家出品纪念版沙发",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 599
					},
					{
						img: "http://localhost:8081/static/images/product/2.jpg",
						name: "27好看好养活的绿色养眼小盆栽，超级实惠",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 29
					},
					{
						img: "http://localhost:8081/static/images/product/3.jpg",
						name: "28利物浦官方 独家出品大红床上用品三件套",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 299
					},
					{
						img: "http://localhost:8081/static/images/product/4.jpg",
						name: "29利物浦官方 独家出品花花碎花床上用品三件套",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 1599
					},
					{
						img: "http://localhost:8081/static/images/product/5.jpg",
						name: "30利物浦官方 独家出品纪念版书柜，便宜又省空间，超级划算",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 599
					},
					{
						img: "http://localhost:8081/static/images/product/5.jpg",
						name: "31利物浦官方 独家出品纪念版书柜，便宜又省空间，超级划算",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 599
					}, {
						img: "http://localhost:8081/static/images/product/1.jpg",
						name: "32独家出品纪念版沙发",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 599
					},
					{
						img: "http://localhost:8081/static/images/product/2.jpg",
						name: "33好看好养活的绿色养眼小盆栽，超级实惠",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 29
					},
					{
						img: "http://localhost:8081/static/images/product/3.jpg",
						name: "34利物浦官方 独家出品大红床上用品三件套",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 299
					},
					{
						img: "http://localhost:8081/static/images/product/4.jpg",
						name: "利物浦官方 独家出品花花碎花床上用品三件套",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 1599
					},
					{
						img: "http://localhost:8081/static/images/product/5.jpg",
						name: "35利物浦官方 独家出品纪念版书柜，便宜又省空间，超级划算",
						subname: "好油特别好的油副标题好油特别好的油副标题好油特别好的油副标题",
						sale: 599
					}
				],
				loadding: false,
				pullUpOn: true,
				notFound: false,
				searchData: {
					pageNum: 1,
					pageSize: 10,
					totalPage: null,
					keyword: '',
					orderType: 0,
					isDesc: ''
				}
			}
		},
		methods: {
			linkToLogin(){
				uni.navigateTo({
				    url: '/pages/login/login'
				});
			},
			linkToDetail(e){
				uni.navigateTo({
					url: '/pages/productDetail/productDetail'
				});
			},
			doQuery(){
				
			},
			doSearch(orderType){
				this.$http.post('/mall/app/goods/list', {
					...this.baseInfo,
					...this.searchData,
					orderType: orderType || this.searchData.orderType
				})
				.then( res => {
					console.log(res)
					if(res.code == 0){
						this.productData=res.result.mallGoodsList;
						this.searchData.totalPage=res.totalPage;
					}else{
						console.log("product.vue-- list获取数据列表失败");
					}
				})
				.catch( err => {
					console.log("product.vue-- list获取数据列表错误");
				})
			},
			initProductData(){
				this.doSearch();
				// this.$http.post('/mall/app/goods/list', {
				// 	...this.baseInfo,
				// 	pageNum: this.pageNum
				// })
				// .then( res => {
				// 	if(res.code == 0){
				// 		this.productData=res.result.mallGoodsList
				// 	}else{
				// 		console.log("product.vue-- list获取数据列表失败");
				// 	}
				// 	console.log(res)
				// })
				// .catch( err => {
				// 	console.log("product.vue-- list获取数据列表错误");
				// })
			}
		},
		computed: {
			...mapState("common", ['baseInfo', 'hasLogin']),
		},
		onLoad: function(options){
			// console.log(options);
			this.initProductData(0);
		},
		/**
		 * 页面相关事件处理函数--监听用户下拉动作
		 */
		onPullDownRefresh: function() {
			//延时为了看效果
			// setTimeout(() => {
			// 	this.productList = this.loadData;
			// 	this.pageNum = 1;
			// 	this.pullUpOn = true;
			// 	this.loadding = false;
			// 	uni.stopPullDownRefresh();
			// 	this.tui.toast("刷新成功")
			// }, 200)
		},
		/**
		 * 页面上拉触底事件的处理函数
		 */
		onReachBottom: function() {
			if (!this.pullUpOn) return;
			this.loadding = true;
			if (this.pageNum == 3) {
				this.loadding = false;
				this.pullUpOn = false
			} else {
				this.productList = this.productList.concat(this.loadData);
				this.pageNum = this.pageNum + 1;
				this.loadding = false
			}
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
					.icon-top{
						display: inline-block;
						transform: rotate(180deg);
						position: absolute;
						top: -48rpx;
						left: 1px;
						color: #B6B6B6;
					}
					.icon-bottom{
						display: inline-block;
						position: absolute;
						bottom: -30rpx;
						left: 1px;
						color: #B6B6B6;
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
		.err-tips{
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
		margin-top: 94px;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
		flex-direction: row;
		flex-wrap: wrap;
		box-sizing: border-box;
		padding: 30upx 30upx 0 30upx;
		background: #fff;
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
		border: 1upx solid #eaeef1;
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
	
	.red{
		color: #ea1500!important;
	}
	
	.gray{
		color: #080808!important;
	}
	
</style>
