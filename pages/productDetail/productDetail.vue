<template>
	<view class="container">
		<!--header-->
		<view class="tui-header-box" :style="{height:height+'px',background:'rgba(255,255,255,'+opcity+')'}">
			<view class="tui-header" :style="{paddingTop:top+'px', opacity:opcity}">
				商品详情
			</view>
			<view class="tui-header-icon" :style="{marginTop:top+'px'}">
				<view class="tui-icon icon-back iconfont icon-fanhui1" :style="{color:opcity>=1?'#000':'#fff',background:'rgba(0, 0, 0,'+iconOpcity+')'}"
				 @tap="back"></view>
				<view class="tui-icon icon-more-fill iconfont icon-gengduo  tui-icon-ml" :style="{color:opcity>=1?'#000':'#fff',background:'rgba(0, 0, 0,'+iconOpcity+')',fontSize:'20px'}"
				 @tap.stop="openMenu"></view>
				<tui-badge type="red" size="small" v-if="goodsInfo.carCount">{{goodsInfo.carCount}}</tui-badge>
			</view>
		</view>
		<!--header-->

		<!--banner-->
		<view class="tui-banner-swiper">
			<swiper :autoplay="true" :interval="5000" :duration="150" :circular="true" :style="{height:scrollH + 'px'}" @change="bannerChange">
				<block v-for="(item,index) in banner" :key="index">
					<swiper-item :data-index="index" @tap.stop="previewImage">
						<image :src="item.url" class="tui-slide-image" :style="{height:scrollH+'px'}" />
					</swiper-item>
				</block>
			</swiper>
			<tui-tag type="translucent" shape="circleLeft" size="small">{{bannerIndex+1}}/{{banner && banner.length}}</tui-tag>
		</view>

		<!--banner-->

		<view class="tui-pro-detail">
			<view class="tui-product-title">
				<view class="pro-pricebox tui-padding">
					<view class="salePrice">
						<view class="rulingPrice">
							<view class="price" v-if="goodsInfo.credits">
								<text class="text">{{goodsInfo.credits}}</text>积分
							</view>
							<view v-if="goodsInfo.salePrice && goodsInfo.credits">
								+
							</view>
							<view class="price" v-if="goodsInfo.salePrice">
								<text class="text">{{goodsInfo.salePrice}}</text>元
							</view>
						</view>
						<view class="markedPrice">
							{{goodsInfo.goodsVirtualprice}}元
						</view>
					</view>
					<!-- <view class="pro-price">
						<view class="sale-price">
							<view class="saleMoney" v-if="goodsInfo.salePrice">
								<text class="money">{{goodsInfo.salePrice}}</text>元
							</view>
							<view class="and" v-if="goodsInfo.salePrice && goodsInfo.credits">
								+
							</view>
							<view class="salePoints" v-if="goodsInfo.credits">
								<text class="points">{{goodsInfo.credits}}</text>分
							</view>
						</view>
						<view class="original-price">
							<text class="line-through">￥199.00</text>
						</view>
					</view> -->
					<!-- <view class="pro-action">
						<button  open-type="share" class="we-share">
							<view class="icon-share iconfont icon-fenxiang"></view>
							<view class="share-name">分享</view>
						</button>
					</view> -->
				</view>
				<view class="pro-titbox">
					<view class="pro-title">{{goodsInfo.goodsProductname}}</view>
					<view class="pro-subtitle">
						<view class="sub-title">
							{{goodsInfo.goodsTitle}}
						</view>
						<view class="sale-info">
							<view class="info">库存：{{goodsInfo.stock}}</view>
							<view class="info">销量：{{goodsInfo.sales}}</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="base-info">
				<view class="list-cell tui-mtop tui-padding" @tap="showPopup">
					<view class="cell-title">选择规格</view>
					<view class="iconfont icon-arrowRight"></view>
				</view>
			</view>
			
			<view class="info-detail tui-mtop">
				<view class="title-name">
					<view class="title-item" @tap="handleChangeCont(0)" :class="showCont ? 'title-item-active' : ''">
						<text class="name">商品详情</text>
					</view>
					<view class="title-item" @tap="handleChangeCont(1)" :class="!showCont ? 'title-item-active' : ''">
						<text class="name">规格参数</text>
					</view>
				</view>
				<view class="content-info">
					<view class="content-item" v-if="showCont">
						<view class="tui-product-img" v-html="goodsInfo.details">
							{{goodsInfo.details}}
						</view>
					</view>
					<view class="content-item" v-if="!showCont">
						<t-table border="1" border-color="#ccc" class="table-list" v-if="goodsInfo.specs">
							<t-tr font-size="14" color="#747474" class='list-cell' align="left" v-for="item in goodsInfo.specs" :key="item.sort">
								<t-td align="left" class="cell-name">{{item.skey}}</t-td>
								<t-td align="left" class="cell-value">{{item.svalue}}</t-td>
							</t-tr>
						</t-table>
						
					</view>
				</view>
			</view>
			<tui-nomore text="已经到最底了" :visible="true" bgcolor="#f7f7f7"></tui-nomore>
		</view>

		<!--底部操作栏-->
		<view class="tui-operation" v-if='goodsInfo.isOnsale'>
			<view class="tui-operation-left tui-col-2">
				<view class="tui-operation-item" @tap="linkToCart">
					<tui-icon name="cart" :size="22" color='#333'></tui-icon>
					<view class="tui-operation-text tui-scale-small">购物车</view>
					<tui-badge type="danger" size="small" v-if=goodsInfo.carCount>{{goodsInfo.carCount}}</tui-badge>
				</view>
			</view>
			<view class="tui-operation-right tui-right-flex tui-col-10">
				<view class="tui-flex-1">
					<view class="style-yellow operation-button" @click="handleAddCart(goodsInfo.id)">加入购物车</view>
				</view>
				<view class="tui-flex-1">
					<view class="style-red operation-button" @click="showPopup">立即购买</view>
				</view>
			</view>
		</view>


		<!--底部操作栏--->

		<!--顶部下拉菜单-->
		<tui-top-dropdown tui-top-dropdown="tui-top-dropdown" bgcolor="rgba(76, 76, 76, 0.95)" :show="menuShow" :height="0"
		 @close="closeMenu">
			<view class="tui-menu-box tui-padding">
				<view class="tui-menu-header" :style="{paddingTop:top+'px'}">
					功能直达
				</view>
				<view class="tui-menu-itembox">
					<view class="tui-menu-item" hover-class="tui-opcity" :hover-stay-time="150" @tap="linkToIndex">
						<view class="tui-badge-box">
							<tui-icon name="home" color="#fff" :size="23"></tui-icon>
						</view>
						<view class="tui-menu-text">首页</view>
					</view>
					<view class="tui-menu-item" hover-class="tui-opcity" :hover-stay-time="150" @tap="linkToUser">
						<view class="tui-badge-box">
							<tui-icon name="people" color="#fff" :size="26"></tui-icon>
						</view>
						<view class="tui-menu-text">我的</view>
					</view>
					<view class="tui-menu-item" hover-class="tui-opcity" :hover-stay-time="150" @tap="linkToCart">
						<view class="tui-badge-box">
							<tui-icon name="cart" color="#fff" :size="23"></tui-icon>
							<tui-badge type="red" tui-badge-class="tui-menu-badge" size="small" v-if="goodsInfo.carCount">{{goodsInfo.carCount}}</tui-badge>
						</view>
						<view class="tui-menu-text">购物车</view>
					</view>
				</view>
				<view class="tui-icon icon-up iconfont icon-shouqi" style="color: #fff; font-size: 20px;" @tap.stop="closeMenu"></view>
			</view>

		</tui-top-dropdown>
		<!---顶部下拉菜单-->

		<!--底部选择层-->
		<tui-bottom-popup :show="popupShow" @close="hidePopup">
			<view class="tui-popup-box">
				<view class="tui-product-box tui-padding">
					<image :src="goodsInfo.goodsMainimagepath" class="tui-popup-img"></image>
					<view class="tui-popup-price">
						<view class="tui-amount">
							<view class="saleMoney" v-if="goodsInfo.salePrice">
								<text class="money">{{goodsInfo.salePrice}}</text>元
							</view>
							<view class="and" v-if="goodsInfo.salePrice && goodsInfo.credits">
								+
							</view>
							<view class="salePoints" v-if="goodsInfo.credits">
								<text class="points">{{goodsInfo.credits}}</text>分
							</view>
						</view>
						<view class="tui-number">货号：{{goodsInfo.goodsGoodsnum}}</view>
					</view>
				</view>
				<scroll-view scroll-y class="tui-popup-scroll">
					<view class="tui-scrollview-box">
						<view v-for="(attrs,j) in goodsInfo.attrs" :key='attrs.id'>
							<view class="tui-bold tui-attr-title">{{attrs.attributeName}}</view>
							<view class="tui-attr-box">
								<view class="tui-attr-item" v-for="item in attrs.attributeValue.split(',')" @tap="handleChooseAttrs(item,j)" :class='item==attrs.selectAttributeValue ? "tui-attr-active" : ""'>
									{{item}}
								</view>
							</view>
						</view>
						<view class="tui-number-box tui-attr-title">
							<view class="tui-attr-title">数量</view>
							<tui-numberbox :max="9999" :min="1" :value="value" @change="change"></tui-numberbox>
						</view>
						
					</view>
				</scroll-view>
				<view class="tui-operation tui-right-flex popup-btn" v-if='goodsInfo.isOnsale'>
					<view class="operation-btn style-yellow" @click="handleAddCart(goodsInfo.id)">加入购物车</view>
					<view class="operation-btn style-red" @click="linkToPayment(goodsInfo.id)">立即购买</view>
				</view>
				<tui-icon name="close-fill" color="#999" class="popup-close-btn" @tap="hidePopup"></tui-icon>
			</view>
		</tui-bottom-popup>
		<!--底部选择层-->

	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import tuiIcon from "@/components/icon/icon"
	import tuiTag from "@/components/tag/tag"
	import tuiBadge from "@/components/badge/badge"
	import tuiNomore from "@/components/nomore/nomore"
	import tuiButton from "@/components/button/button"
	import tuiTopDropdown from "@/components/top-dropdown/top-dropdown"
	import tuiBottomPopup from "@/components/bottom-popup/bottom-popup"
	import tuiNumberbox from "@/components/numberbox/numberbox"
	import tTable from '@/components/t-table/t-table.vue'
	import tTr from '@/components/t-table/t-tr.vue'
	import tTd from '@/components/t-table/t-td.vue'
	export default {
		components: {
			tuiIcon,
			tuiTag,
			tuiBadge,
			tuiNomore,
			tuiButton,
			tuiTopDropdown,
			tuiBottomPopup,
			tuiNumberbox,
			tTable,
			tTr,
			tTd
		},
		data() {
			return {
				detailTitlt: '',
				goodsInfo: {},
				showCont: true,
				height: 64, //header高度
				top: 0, //标题图标距离顶部距离
				scrollH: 0, //滚动总高度
				opcity: 0,
				iconOpcity: 0.5,
				banner: [],
				bannerIndex: 0,
				topMenu: [{
					icon: "home",
					text: "首页",
					size: 23,
					badge: 0
				}, 
				{
					icon: "people",
					text: "我的",
					size: 26,
					badge: 0
				}, 
				{
					icon: "cart",
					text: "购物车",
					size: 23,
					badge: 2
				}
				],
				menuShow: false,
				popupShow: false,
				value: 1,
				collected: false,
				typeStr: '',
				subGoodsId: ''
			}
		},
		methods: {
			handleChooseAttrs(e, j){
				this.goodsInfo.attrs[j].selectAttributeValue = e;
				let typeStr=this.goodsInfo.attrs.map(item=>{
					return item.selectAttributeValue;
				}).join(",");
				this.goodsInfo.subGoods.map(item=>{
					if(item.attributeKey === typeStr){
						this.subGoodsId = item.subGoodsId
					}
				})
				uni.setStorageSync('goodsId', this.subGoodsId);
				this.getGoodsDetail();
				this.showPopup();
			},
			bannerChange: function(e) {
				this.bannerIndex = e.detail.current
			},
			previewImage: function(e) {
				let picArray = [];
				this.banner.map(item => {
					picArray.push(item.url);
				});
				let index = e.currentTarget.dataset.index;
				uni.previewImage({
					current: this.banner[index].url,
					urls: picArray
				})
			},
			handleChangeCont(num){
				switch (num) {
					case 0:
						this.showCont=true;
						break;
					case 1:
						this.showCont=false;
						break;
					// default:
					// 	this.showCont=true;
				}
			},
			back: function() {
				uni.navigateBack()
			},
			openMenu: function() {
				this.menuShow = true
			},
			closeMenu: function() {
				this.menuShow = false
			},
			showPopup: function() {
				this.popupShow = true
			},
			hidePopup: function() {
				this.popupShow = false
			},
			change: function(e) {
				this.value = e.value
			},
			handleAddCart(mallGoodsId){
				if(!Boolean(this.hasLogin)){
					uni.navigateTo({
					    url: '/pages/login/login'
					});
					return;
				}else{
					this.$http.post('/mall/app/car/add', {
						...this.baseInfo,
						accountId: this.userInfo.accountId,
						goodsCount: this.value,
						mallGoodsId: mallGoodsId,
					})
					.then( res => {
						if(res.code == 0){
							this.getGoodsDetail();
							uni.showToast({
								icon: 'none',
								title: '商品添加成功',
							});
						}else{
							console.log('productDetail.vue-- add接口添加购物车失败');
						}
					})
					.catch( err => {
						console.log('productDetail.vue-- add接口添加购物车错误');
					})
				}
				this.hidePopup();
			},
			linkToPayment(id){
				if(!this.hasLogin){
					uni.navigateTo({
					    url: '/pages/login/login'
					});
				}else{
					let tmpList = [];
					tmpList.push({
						mallGoodsId: id,
						goodsCount: this.value
					})
					uni.setStorage({
						key:'buyList',
						data:tmpList,
						success: () => {
							uni.navigateTo({
								url:'/pages/payment/payment'
							})
						}
					})
				}
				this.hidePopup();
			},
			linkToIndex(){
				uni.reLaunch({
					url: '/pages/index/index'
				})
			},
			linkToUser(){
				uni.reLaunch({
					url: '/pages/user/user'
				})
			},
			linkToCart(){
				if(!this.hasLogin){
					uni.showToast({
						icon: 'none',
						title: '请先去登陆吧~'
					})
				}else{
					uni.reLaunch({
						url: '/pages/car/car'
					})
				}
			},
			// onBridgeReady() {
			// 	WeixinJSBridge.call('hideOptionMenu');
			// },
			// weixinSendAppMessage(title,desc,link,imgUrl){
			// 	alert('weixinSendAppMessage开始---------------')
			// 	WeixinJSBridge.invoke('sendAppMessage',{
			// 	//”appid”:appId,
			// 	'img_url':'',
			// 	//”img_width”:”640″,
			// 	//”img_height”:”640″,
			// 	'link':'https://www.baidu.com/',
			// 	'desc':'描述',
			// 	'title':'123123'
			// 	});
			// },
			getGoodsDetail(){
				let goodsId=uni.getStorageSync('goodsId');
				this.$http.post('/mall/app/goods/detail', {
					...this.baseInfo,
					goodsId: goodsId,
					accountId: this.userInfo.accountId || ''
				})
				.then( res => {
					if(res.code == 0){
						this.goodsInfo=res.result;
						this.banner=res.result.pics;
						this.goodsInfo.details=this.goodsInfo.details.replace(/<img /g, '<img class="rich_img" ');
					}else{
						console.log('productDetail.vue-- detail接口获取数据失败');
					};
					// if (typeof WeixinJSBridge == "undefined") {
					//     if (document.addEventListener) {
					//         document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady(), false);
					//     } else if (document.attachEvent) {
					//         document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady());
					//         document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady());
					//     }
					// } else {
					//     this.onBridgeReady();
					// }
				})
				.catch( err => {
					console.log('productDetail.vue-- detail接口获取数据错误');
				})
			}
		},
		computed: {
			...mapState('common', ['baseInfo', 'userInfo', 'hasLogin'])
		},
		onLoad: function(options) {
			uni.setStorageSync('goodsId', options.goodsId);
			this.getGoodsDetail();
			
			let obj = {};
			// #ifdef MP-WEIXIN
			obj = wx.getMenuButtonBoundingClientRect();
			// #endif
			// #ifdef MP-BAIDU
			obj = swan.getMenuButtonBoundingClientRect();
			// #endif
			// #ifdef MP-ALIPAY
			my.hideAddToDesktopMenu();
			// #endif
		
			uni.getSystemInfo({
				success: (res) => {
					this.width = obj.left || res.windowWidth;
					this.height = obj.top ? (obj.top + obj.height + 8) : (res.statusBarHeight + 44);
					this.top = obj.top ? (obj.top + (obj.height - 32) / 2) : (res.statusBarHeight + 6);
					this.scrollH = res.windowWidth
				}
			})
		},
		onPageScroll(e) {
			let scroll = e.scrollTop <= 0 ? 0 : e.scrollTop;
			let opcity = scroll / this.scrollH;
			if (this.opcity >= 1 && opcity >= 1) {
				return;
			}
			this.opcity = opcity;
			this.iconOpcity = 0.5 * (1 - opcity < 0 ? 0 : 1 - opcity)
		}
	}
</script>

<style lang="scss">
	page {
		background: #f7f7f7;
	}

	.container {
		padding-bottom: 110upx;
	}

	.tui-header-box {
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 9998;
	}

	.tui-header {
		width: 100%;
		font-size: 18px;
		line-height: 18px;
		font-weight: 500;
		height: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-header-icon {
		position: fixed;
		top: 0;
		left: 10px;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		height: 32px;
		transform: translateZ(0);
		z-index: 99999;
	}



	.tui-header-icon .tui-badge {
		background: #e41f19 !important;
		position: absolute;
		right: -4px;
	}

	.tui-icon-ml {
		margin-left: 20upx;
	}

	.tui-icon {
		border-radius: 16px;
	}


	.icon-back {
		height: 32px !important;
		line-height: 32px;
		width: 32px !important;
		text-align: center;
		display: block !important;
		font-size: 20px;
	}

	.tui-header-icon .icon-more-fill {
		height: 20px !important;
		width: 20px !important;
		padding: 6px !important;
		display: block !important;
	}

	.tui-banner-swiper {
		position: relative;
	}

	.tui-banner-swiper .tui-tag-class {
		position: absolute;
		color: #fff;
		bottom: 30upx;
		right: 0;
	}

	.tui-slide-image {
		width: 100%;
		display: block;
	}

	/*顶部菜单*/

	.tui-menu-box {
		box-sizing: border-box;
		padding-bottom: 25px!important;
	}

	.tui-menu-header {
		font-size: 34upx;
		color: #fff;
		height: 32px;
		display: flex;
		align-items: center;
	}

	.tui-top-dropdown {
		z-index: 9999 !important;
	}

	.tui-menu-itembox {
		color: #fff;
		padding: 40upx 10upx 0 10upx;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		font-size: 26upx;
	}

	.tui-menu-item {
		width: 22%;
		height: 160upx;
		border-radius: 24upx;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		background: rgba(0, 0, 0, 0.4);
		margin-right: 4%;
		margin-bottom: 4%;
	}

	.tui-menu-item:nth-of-type(4n) {
		margin-right: 0;
	}

	.tui-badge-box {
		position: relative;
	}

	.tui-badge-box .tui-badge-class {
		position: absolute;
		top: -8px;
		right: -8px;
	}

	.tui-msg-badge {
		top: -10px;
	}

	.icon-up {
		position: relative;
		display: inline-block;
		left: 50%;
		transform: translateX(-50%);
		bottom: -15px;
	}

	.tui-menu-text {
		padding-top: 12upx;
	}

	.tui-opcity .tui-menu-text,
	.tui-opcity .tui-badge-box {
		opacity: 0.5;
		transition: opacity 0.2s ease-in-out;
	}

	/*顶部菜单*/

	/*内容 部分*/

	.tui-padding {
		padding: 0 30upx;
		box-sizing: border-box;
	}

	.tui-size {
		font-size: 24upx;
		line-height: 24upx;
	}

	.tui-gray {
		color: #999;
	}

	.tui-icon-red {
		color: #ff201f;
	}

	.tui-mtop {
		margin-top: 12upx;
	}

	.tui-pro-detail {
		box-sizing: border-box;
		color: #333;
	}

	.tui-product-title {
		background: #fff;
		padding: 20upx 0 30upx 0;
	}

	.pro-pricebox{
		display: flex;
		align-items: center;
		justify-content: space-between;
		line-height: 44upx;
		.salePrice{
			display: flex;
			flex-direction:row;
			justify-content : flex-start;
			align-items : flex-end;
			line-height: 40upx;
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
							font-size: 48upx;
						}
					}
					&:nth-of-type(2){
						.text{
							font-size: 35upx;
						}
					}
				}
			}
			.markedPrice{
				padding-left: 18upx;
				color: #B3B3B3;
				font-size: 24upx;
				text-decoration: line-through;
			}
		}
		// .pro-price{
		// 	display: flex;
		// 	align-items : flex-end;
		// 	.sale-price{
		// 		font-size: 32rpx;
		// 		color: #E11F17;
		// 		padding-right: 10px;
		// 		display: flex;
		// 		flex-direction:row;
		// 		justify-content : flex-start;
		// 		align-items : flex-end;
		// 		.saleMoney{
		// 			font-weight: 600;
		// 			.money{
		// 				font-size: 48upx;
		// 			}
		// 		}
		// 		.and{
		// 			padding-left: 10upx;
		// 		}
		// 		.salePoints{
		// 			.points{
		// 				font-size: 35upx;
		// 			}
		// 		}
		// 	}
		// 	.original-price{
		// 		font-size: 24rpx;
		// 		color: #B3B3B3;
		// 		vertical-align: bottom;
		// 	}
		// }
		.pro-action{
			.we-share{
				display: block;
				background: none;
				line-height: 44rpx;
				position: relative;
				right: -30rpx;
				&:after{
					border: none;
				}
				.icon-share{
					color: #A1A1A1;
					font-size: 55rpx;
				}
				.share-name{
					color: #747474;
					font-size: 24rpx;
				}
			}
		}
	}
	
	.line-through{
		text-decoration: line-through;
	}

	.pro-titbox {
		font-size: 32upx;
		font-weight: 500;
		position: relative;
		padding: 0 30rpx 5rpx 30rpx;
		box-sizing: border-box;
		.pro-title {
			padding-top: 8upx;
			font-size: 32rpx;
			color: #2F2F2F;
		}
		.pro-subtitle{
			display: flex;
			justify-content: space-between;
			font-size: 24rpx;
			color: #747474;
			margin-top: 18rpx;
			.sale-info{
				display: flex;
				justify-content: flex-end;
				.info{
					padding-left: 5px;
				}
			}
		}
	}
	
	.info-detail{
		.title-name{
			display: flex;
			background-color: #fff;
			font-size: 26upx;
			line-height: 28upx;
			padding: 26upx 30upx;
			.title-item{
				flex: 1;
				text-align: center;
				.name{
					color: #2F2F2F;
					font-size: 28rpx;
					padding: 8rpx 10rpx;
					position: relative;
				}
				&.title-item-active{
					.name{
						color: #FD2502;
						&::after{
							content:"";
							position: absolute;
							left: 0;
							bottom: 0;
							height: 4rpx;
							width: 100%;
							background-color: #FD2502;
						}
						
					}
				}
			}
		}
		.content-info{
			.content-item{
				// display: none;
				background: #fff;
				&.content-item-active{
					// display: block;
				}
				.tui-product-img{
					/deep/ img{
						vertical-align: top!important;
						width: 100%!important;
					}
				}
				// .product-specs{
				// 	border:5px blue solid;
					
				// 	.table-list{
				// 		margin: 30upx 20upx;
				// 		border-top: 1px solid #ccc;
				// 		border-left: 1px solid #ccc;
				// 		.list-cell{
				// 			margin: 30upx 20upx;
				// 			border-top: 1px solid #ccc;
				// 			border-left: 1px solid #ccc;
				// 			display: flex;
				// 			align-items: center;
				// 			.cell{
				// 				border-bottom: 1px solid #ccc;
				// 				border-right: 1px solid #ccc;
				// 				padding: 10upx 20upx;
				// 				font-size: 24upx;
				// 				color: #747474;
				// 				&.skey{
				// 					min-width: 80upx;
				// 				}
				// 				&.svalue{
				// 					flex: 1;
				// 				}
				// 			}
				// 		}
				// 	}
				// }
				.table-list{
					margin: 0 20upx 20upx 20upx;
					width: calc(100% - 40upx);
					.list-cell{
						/deep/ .t-td{
							flex: auto!important;
							text-align: left!important;
						}
						/deep/ .cell-name{
							width: 200upx!important;
						}
						/deep/ .cell-value{
							flex: 1;
						}
					}
				}
				// .table-list{
				// 	border-right: 1px solid #ccc;
				// 	border-bottom: 1px solid #ccc;
				// 	margin: 0 20upx 20upx 20upx;
				// 	.list-cell{
				// 		// &:first-child{
				// 		// 	border-top: 1px solid #ccc;
				// 		// }
				// 		// margin: 0 20upx;
				// 		border-top: 1px solid #ccc;
				// 		border-left: 1px solid #ccc;
				// 		display: flex;
				// 		align-items: center;
				// 		// width: calc(100% - 40upx);
				// 		// box-sizing: border-box;
				// 		.cell{
				// 			// border-bottom: 1px solid #ccc;
				// 			// border-right: 1px solid #ccc;
				// 			padding: 10upx 20upx;
				// 			font-size: 24upx;
				// 			color: #747474;
				// 			box-sizing: border-box;
				// 			// float: left;
				// 			&.skey{
				// 				min-width: 200upx;
				// 			}
				// 			&.svalue{
				// 				flex: 1;
				// 				// width: calc(100% - 240upx);
				// 				border-left: 1px solid #ccc;
				// 			}
				// 		}
				// 	}
				// }
				
			}
		}
		
	}
	.rich_img{
		width: 100%!important;
	}
	
	.base-info{
		.list-cell{
			background-color: #fff;
			// height: 80rpx;
			// line-height: 80rpx;
			// position: relative;
			position: relative;
			display: flex;
			align-items: center;
			font-size: 26upx;
			line-height: 28upx;
			padding: 26upx 30upx;
			box-sizing: border-box;
			.cell-title{
				font-size: 28rpx;
				color: #2F2F2F;
			}
			.icon-arrowRight{
				position: absolute;
				top: 50%;
				right: 30upx;
				transform: translate(0,-50%);
				color: #2F2F2F;
				font-size: 46rpx;
			}
		}
	}

	// .tui-share-btn {
	// 	display: block;
	// 	background: none;
	// 	margin: 0;
	// 	padding: 0;
	// 	border-radius: 0;
	// }

	// .tui-tag-share {
	// 	display: flex;
	// 	align-items: center;
	// }

	// .tui-share-position {
	// 	position: absolute;
	// 	right: 0;
	// 	top: 30upx;
	// }

// 	.tui-share-text {
// 		padding-left: 8upx;
// 	}
// 
// 	.tui-sub-title {
// 		padding: 20upx 0;
// 	}
// 
// 	.tui-sale-info {
// 		display: flex;
// 		align-items: center;
// 		justify-content: space-between;
// 		padding-top: 30upx;
// 	}

	// .tui-discount-box {
	// 	background: #fff;
	// }

	.tui-list-cell {
		position: relative;
		display: flex;
		align-items: center;
		font-size: 26upx;
		line-height: 26upx;
		padding: 36upx 30upx;
		box-sizing: border-box;
	}

	.tui-right {
		position: absolute;
		right: 30upx;
		top: 30upx;
	}

	.tui-top40 {
		top: 40upx !important;
	}

	.tui-bold {
		font-weight: bold;
	}

	.tui-list-cell::after {
		content: '';
		position: absolute;
		border-bottom: 1upx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		bottom: 0;
		right: 0;
		left: 126upx;
	}

	.tui-last::after {
		border-bottom: 0 !important;
	}

	.tui-tag-coupon-box {
		display: flex;
		align-items: center;
	}

	.tui-tag-coupon-box .tui-tag-class {
		margin-right: 20upx;
	}


	.tui-cell-title {
		width: 66upx;
		padding-right: 30upx;
		flex-shrink: 0;
	}

	.tui-promotion-box {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		padding: 10upx 0;
		width: 74%;
	}

	.tui-promotion-box .tui-tag-class {
		display: inline-block !important;
		transform: scale(0.8);
		transform-origin: 0 center;
	}

	/* .tui-inline-block {
		display: inline-block !important;
		transform: scale(0.8);
		transform-origin: 0 center;
	} */

	.tui-basic-info {
		background: #fff;
	}

	.tui-addr-box {
		width: 76%;
	}

	.tui-addr-item {
		padding: 10upx;
		line-height: 34upx;
	}

	.tui-guarantee {
		background: #fdfdfd;
		display: flex;
		flex-wrap: wrap;
		padding: 20upx 30upx 30upx 30upx;
		font-size: 24upx;
	}

	.tui-guarantee-item {
		color: #999;
		padding-right: 30upx;
		padding-top: 10upx;
	}

	.tui-pl {
		padding-left: 4upx;
	}

	.tui-cmt-box {
		background: #fff;
	}

	.tui-between {
		justify-content: space-between !important;
	}

	.tui-cmt-all {
		color: #ff201f;
		padding-right: 8upx;
	}

	.tui-cmt-content {
		font-size: 26upx;
	}

	.tui-cmt-user {
		display: flex;
		align-items: center;
	}

	.tui-acatar {
		width: 60upx;
		height: 60upx;
		border-radius: 30upx;
		display: block;
		margin-right: 16upx;
	}

	.tui-cmt {
		padding: 14upx 0;
	}

	.tui-attr {
		font-size: 24upx;
		color: #999;
		padding: 6upx 0;
	}

	.tui-cmt-btn {
		padding: 50upx 0 30upx 0;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-tag-cmt {
		min-width: 130upx;
		padding: 20upx 52upx !important;
		font-size: 26upx !important;
		display: inline-block;
	}

	.tui-nomore-box {
		padding-top: 10upx;
	}

	.tui-product-img {
		transform: translateZ(0);
	}

	// .tui-product-img image {
	// 	width: 100%;
	// 	display: block;
	// }

	/*底部操作栏*/

// 	.tui-col-7 {
// 		width: 58.33333333%;
// 	}
// 
// 	.tui-col-5 {
// 		width: 41.66666667%;
// 	}
	
	.tui-col-10 {
		width: 83.33333333%;
	}
	
	.tui-col-2 {
		width: 16.66666667%;
	}

	.tui-operation {
		width: 100%;
		height: 85upx;
		/* box-sizing: border-box; */
		background: rgba(255, 255, 255, 0.98);
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 10;
		bottom: 0;
		left: 0;
		padding-bottom: env(safe-area-inset-bottom);
	}
	
	.popup-btn{
		height: 80upx;
		.operation-btn{
			height: 80upx;
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #ffffff;
			font-size: 28upx;
		}
	}

	// .tui-safearea-bottom {
	// 	width: 100%;
	// 	height: env(safe-area-inset-bottom);
	// }

	.tui-operation::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		border-top: 1upx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}

	.tui-operation-left {
		display: flex;
		align-items: center;
	}

	.tui-operation-item {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		position: relative;
		line-height: 20rpx;
	}

	.tui-operation-text {
		font-size: 22upx;
		color: #333;
	}

	.tui-opacity {
		opacity: 0.5;
	}

	.tui-scale-small {
		transform: scale(0.9);
		transform-origin: center center;
	}

	.tui-operation-right {
		height: 85upx;
		/* box-sizing: border-box; */
		padding-top: 0;
		padding: 0px;
		.tui-flex-1{
			height: 100%;
			.operation-button{
				height: 100%;
				line-height: 100%;
				margin: 0;
				padding: 0;
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 28upx;
				color: #ffffff;
			}
		}
	}

	.tui-right-flex {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-btnbox-4 .tui-btn-class {
		width: 100% !important;
		display: block !important;
		font-size: 28upx !important;
	}

	.tui-operation .tui-badge-class {
		position: absolute;
		top: -6upx;
		padding: 2px 5px;
		/* #ifdef H5 */
		transform: translateX(50%)
		/* #endif  */
	}

	.tui-flex-1 {
		flex: 1;
	}

	/*底部操作栏*/

	/*底部选择弹层*/

	.tui-popup-class {
		border-top-left-radius: 24upx;
		border-top-right-radius: 24upx;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-popup-box {
		position: relative;
		padding: 30upx 0 100upx 0;
		background: #ffffff;
	}

	.style-yellow{
		background: #FDA900!important;
	}
	.style-red{
		background: #FD2502!important;
	}
	
	.popup-close-btn{
		position: absolute;
		top: 30upx;
		right: 30upx;
		font-size: 45rpx!important;
	}

	.tui-product-box {
		display: flex;
		align-items: flex-end;
		font-size: 24upx;
		padding-bottom: 30upx;
	}

	.tui-popup-img {
		height: 170upx;
		width: 170upx;
		display: block;
		margin-top: -85upx;
	}

	.tui-popup-price {
		padding-left: 20upx;
		padding-bottom: 8upx;
	}

	.tui-amount {
		font-size: 32rpx;
		color: #E11F17;
		padding-right: 10px;
		display: flex;
		flex-direction:row;
		justify-content : flex-start;
		align-items : flex-end;
		.saleMoney{
			.money{
				font-size: 32upx;
			}
		}
		.and{
			padding-left: 10upx;
		}
		.salePoints{
			.points{
				font-size: 28upx;
			}
		}
	}

	.tui-number {
		font-size: 24upx;
		line-height: 24upx;
		padding-top: 12upx;
		color: #B2B2B2;
	}

	.tui-popup-scroll {
		height: 600upx;
		font-size: 26upx;
	}

	.tui-scrollview-box {
		padding: 0 30upx 60upx 30upx;
		box-sizing: border-box;
	}

	.tui-attr-title {
		padding: 10upx 0;
		color: #B2B2B2;
	}

	.tui-attr-box {
		font-size: 0;
		padding: 20upx 0;
	}

	.tui-attr-item {
		max-width: 100%;
		min-width: 119upx;
		height: 64upx;
		display: -webkit-inline-flex;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: #f7f7f7;
		padding: 0 20upx;
		box-sizing: border-box;
		border-radius: 10upx;
		margin-right: 20upx;
		margin-bottom: 20upx;
		font-size: 28upx;
	}

	.tui-attr-active {
		background: #FE2C0A !important;
		color: #fff;
		font-weight: bold;
	}

	.tui-number-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20upx 0 30upx 0;
		box-sizing: border-box;
	}

	/*底部选择弹层*/
</style>
