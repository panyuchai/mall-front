<template>
	<view>
		<view class="blank"></view>
		<block>
			<view v-if='hasLogin'>
				<!-- 商品列表 -->
				<view class="goods-list">
					<view v-if="carEmpty" class="product-empty">
						<view class="not-tips">
							购物车是空的哦~
						</view>
					</view>
					<view class="row" v-for="(row,index) in goodsList" :key="index" >
						<!-- 删除按钮 -->
						<view class="menu" @tap.stop="deleteGoods(row.shopcarId)">
							<view class="icon iconfont icon-shanchu"></view>
						</view>
						<!-- 商品 -->
						<view class="carrier" :class="[theIndex==index?'open':oldIndex==index?'close':'']" @touchstart="touchStart(index,$event)" @touchmove="touchMove(index,$event)" @touchend="touchEnd(index,$event)">
							<!-- checkbox -->
							<view class="checkbox-box" @tap="selected(index)">
								<view class="checkbox" :class="[row.checked?'on':'']">
									<view :class="[row.checked?'on':'']"></view>
								</view>
							</view>
							<!-- 商品信息 -->
							<view class="goods-info" @tap="linkToDetail(row.mallGoodsId)">
								<view class="img">
									<image :src="row.goodsMainimagepath"></image>
								</view>
								<view class="info">
									<view class="title">{{row.goodsProductname}}</view>
									<view class="spec">{{row.goodsTitle}}</view>
									<view class="price-number">
										<view class="price">
											<view class="sale-price">
												￥<text class="num">{{row.salePrice}}</text>
											</view>
											<!-- <view class="factory-price">
												￥{{row.price}}
											</view> -->
										</view>
										<view class="number">
											<view class="sub" @tap.stop="sub(index)">
												<view class="icon iconfont icon-jian"></view>
											</view>
											<view class="input" @tap.stop="discard">
												<input type="number" v-model="row.goodsCount" @input="sum($event,index)" @blur="change(index)"/>
											</view>
											<view class="add"  @tap.stop="add(index)">
												<view class="icon iconfont icon-jia"></view>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<!-- 脚部菜单 -->
				<view class="footer" :style="{bottom:footerbottom}">
					<view class="checkbox-box" @tap="allSelect">
						<view class="checkbox" :class="[isAllselected?'on':'']">
							<view :class="[isAllselected?'on':'']"></view>
						</view>
						<view class="text">全选</view>
					</view>
					<view class="delBtn" @tap="deleteList" v-if="selectedList.length>0">删除</view>
					<view class="settlement">
						<view class="sum">价格:<view class="money">{{sumPrice}}元</view></view>
						<view class="btn" @tap="linkToPayment">去结算</view>
					</view>
				</view>
			</view>
			<view class="product-empty" v-else>
				<view class="err-tips">
					您还未登陆，请先去<text class="login-btn" @tap="linkToLogin">登陆</text>吧~
				</view>
			</view>
		</block>
			
	</view>
</template>

<script>
	import {
	    mapState,
	    mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				sumPrice:'0.00',
				headerPosition:"fixed",
				headerTop:null,
				statusTop:null,
				showHeader:true,
				selectedList:[],
				isAllselected:false,
				goodsList:[],
				//控制滑动效果
				theIndex:null,
				oldIndex:null,
				isStop:false,
				carEmpty:false,
			}
		},
		onPageScroll(e){
			//兼容iOS端下拉时顶部漂移
			this.headerPosition = e.scrollTop>=0?"fixed":"absolute";
			this.headerTop = e.scrollTop>=0?null:0;
			this.statusTop = e.scrollTop>=0?null:-this.statusHeight+'px';
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		// onPullDownRefresh() {
		//     setTimeout(function () {
		//         uni.stopPullDownRefresh();
		//     }, 1000);
		// },
		
		computed: {
			...mapState("common", ['hasLogin', 'baseInfo', 'userInfo']),
		},
		methods: {
			// ...mapMutations('order', ['SET_ORDER_GOODSLIST']),
			linkToLogin(){
				uni.navigateTo({
				    url: '/pages/login/login'
				});
			},
			//加入商品 参数 goods:商品数据
			// joinGoods(goods){
			// 	/*
			// 	* 这里只是展示一种添加逻辑，模板并没有做从其他页面加入商品到购物车的具体动作，
			// 	* 在实际应用上，前端并不会直接插入记录到goodsList这一个动作，一般是更新列表和本地列表缓存。
			// 	* 一般商城购物车的增删改动作是由后端来完成的,
			// 	* 后端记录后返回前端更新前端缓存
			// 	*/
			// 	let len = this.goodsList.length;
			// 	let isFind = false;//是否找到ID一样的商品
			// 	for(let i=0;i<len;i++){
			// 		let row = this.goodsList[i];
			// 		if(row.id==goods.id )
			// 		{	//找到商品一样的商品
			// 			this.goodsList[i].number++;//数量自增
			// 			isFind = true;//找到一样的商品
			// 			break;//跳出循环
			// 		}
			// 	}
			// 	if(!isFind){
			// 		//没有找到一样的商品，新增一行到购物车商品列表头部
			// 		this.goodsList[i].unshift(goods);
			// 	}
			// },
			//控制左滑删除效果-begin
			touchStart(index,event){
				//多点触控不触发
				if(event.touches.length>1){
					this.isStop = true;
					return ;
				}
				this.oldIndex = this.theIndex;
				this.theIndex = null;
				//初始坐标
				this.initXY = [event.touches[0].pageX,event.touches[0].pageY];
			},
			touchMove(index,event){
				//多点触控不触发
				if(event.touches.length>1){
					this.isStop = true;
					return ;
				}
				let moveX = event.touches[0].pageX - this.initXY[0];
				let moveY = event.touches[0].pageY - this.initXY[1];
				
				if(this.isStop||Math.abs(moveX)<5){
					return ;
				}
				if (Math.abs(moveY) > Math.abs(moveX)){
					// 竖向滑动-不触发左滑效果
					this.isStop = true;
					return;
				}
				
				if(moveX<0){
					this.theIndex = index;
					this.isStop = true;
				}else if(moveX>0){
					if(this.theIndex!=null&&this.oldIndex==this.theIndex){
						this.oldIndex = index;
						this.theIndex = null;
						this.isStop = true;
						setTimeout(()=>{
							this.oldIndex = null;
						},150)
					}
				}
			},
			touchEnd(index,$event){
				//结束禁止触发效果
				this.isStop = false;
			},
			//控制左滑删除效果-end
			
			
			//商品跳转
			linkToDetail(e){
				uni.navigateTo({
					url: '/pages/productDetail/productDetail?id=' + e
				});
			},
			//跳转确认订单页面
			linkToPayment(){
				let tmpList=[];
				let len = this.goodsList.length;
				for(let i=0;i<len;i++){
					if(this.goodsList[i].checked) {
						tmpList.push(this.goodsList[i]);
					}
				}
				if(tmpList.length<1){
					uni.showToast({
						title:'请选择商品结算',
						icon:'none'
					});
					return ;
				}
				uni.setStorage({
					key:'buyList',
					data:tmpList,
					success: () => {
						uni.navigateTo({
							url:'/pages/payment/payment'
						})
					}
				})
				// this.SET_ORDER_GOODSLIST(tmpList);
				// uni.navigateTo({
				// 	url:'/pages/payment/payment'
				// })
			},
			//删除商品
			deleteGoods(shopcarId){
				uni.showModal({
				    title: '提示',
				    content: '确定要删除选中商品吗？',
					confirmColor: '#E93548',
				    success: res => {
				        if (res.confirm) {
				            this.$http.post('/mall/app/car/delete', {
								...this.baseInfo,
								accountId: this.userInfo && this.userInfo.accountId,
								shopcarIds: shopcarId
							})
							.then( res => {
								if(res.code == 0){
									this.getGoodsList();
									uni.showToast({
										icon: 'none',
										title: '商品删除成功',
									});
									this.sum();
									this.oldIndex = null;
									this.theIndex = null;
								}
							})
							.catch( err => {
								console.log('car.vue-- delete接口删除数据错误');
							})
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
				// let len = this.goodsList.length;
				// for(let i=0;i<len;i++){
				// 	if(id==this.goodsList[i].id){
				// 		this.goodsList.splice(i, 1);
				// 		break;
				// 	}
				// }
				// this.selectedList.splice(this.selectedList.indexOf(id), 1);
				// this.sum();
				// this.oldIndex = null;
				// this.theIndex = null;
			},
			// 删除商品s
			deleteList(){
				// let len = this.selectedList.length;
				// while (this.selectedList.length>0)
				// {
					// console.log(this.selectedList[0]);
					// this.deleteGoods(this.selectedList[0]);
				// }
				// this.selectedList = [];
				// this.isAllselected = this.selectedList.length == this.goodsList.length && this.goodsList.length>0;
				// this.sum();
				
				let shopcarIds = ''
				this.selectedList.map(item => {
					shopcarIds += `${item},`;
				})
				this.deleteGoods(shopcarIds);
				this.selectedList = [];
				this.isAllselected = this.selectedList.length == this.goodsList.length && this.goodsList.length>0;
				// this.sum();
			},
			// 选中商品
			selected(index){
				this.goodsList[index].checked = this.goodsList[index].checked?false:true;
				let i = this.selectedList.indexOf(this.goodsList[index].shopcarId);
				i>-1?this.selectedList.splice(i, 1):this.selectedList.push(this.goodsList[index].shopcarId);
				this.isAllselected = this.selectedList.length == this.goodsList.length;
				this.sum();
			},
			//全选
			allSelect(){
				let len = this.goodsList.length;
				let arr = [];
				for(let i=0;i<len;i++){
					this.goodsList[i].checked = this.isAllselected? false : true;
					arr.push(this.goodsList[i].shopcarId);
				}
				this.selectedList = this.isAllselected?[]:arr;
				this.isAllselected = this.isAllselected||this.goodsList.length==0?false : true;
				this.sum();
			},
			// 减少数量
			sub(index){
				if(this.goodsList[index].goodsCount<=1){
					return;
				}
				this.goodsList[index].goodsCount--;
				this.editCount(index);
				this.sum();
			},
			// 增加数量
			add(index){
				this.goodsList[index].goodsCount++;
				this.editCount(index);
				this.sum();
			},
			change(index){
				this.editCount(index);
			},
			editCount(index){
				let productParams = [this.goodsList[index]];
				this.$http.post('/mall/app/car/edit', {
					...this.baseInfo,
					accountId: this.userInfo.accountId,
					list: productParams
				})
				.then( res => {
					if(res.message == 'success'){
						console.log('编辑成功');
					}else{
						uni.showToast({
							icon: 'none',
							title: res.message,
						});
					}
				})
				.catch( err => {
					console.log('car.vue-- edit接口编辑数据错误');
				})
			},
			// 合计
			sum(e,index){
				this.sumPrice=0;
				let len = this.goodsList.length;
				for(let i=0;i<len;i++){
					if(this.goodsList[i].checked) {
						if(e && i==index){
							this.sumPrice = this.sumPrice + (e.detail.value*this.goodsList[i].salePrice);
						}else{
							this.sumPrice = this.sumPrice + (this.goodsList[i].goodsCount*this.goodsList[i].salePrice);
						}
					}
				}
				this.sumPrice = this.sumPrice.toFixed(2);
			},
			discard() {
				//丢弃
			},
			getGoodsList(){
				this.$http.post('/mall/app/car/query', {
					...this.baseInfo,
					accountId: this.userInfo.accountId
				})
				.then( res => {
					if(res.code == 0){
						this.goodsList=res.result.list;
						// this.sum();
						if(!res.result.list){
							this.carEmpty=true;
						};
						// console.log(res.result.list)
					}else{
						console.log('car.vue-- query接口获取数据失败');
					}
				})
				.catch( err => {
					console.log('car.vue-- query接口获取数据错误' + err);
				})
			}
		},
		onShow() {
			this.getGoodsList();
		},
		onLoad() {
			//兼容H5下结算条位置
			// #ifdef H5
				this.footerbottom = document.getElementsByTagName('uni-tabbar')[0].offsetHeight+'px';
			// #endif
			// #ifdef APP-PLUS
			this.showHeader = false;
			this.statusHeight = plus.navigator.getStatusbarHeight();
			// #endif
			
		},
	}
</script>

<style lang="scss">
	// page{position: relative;background-color: #fff;}
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
	.blank{
		position: fixed;
		left: 0;
		// top: 44px;
		right: 0;
		height: 12rpx;
		z-index: 9;
		background-color: #F7F7F7;
	}
	/*  #ifdef  H5  */
		.blank{
			top: 44px;
		}
	/*  #endif  */
	/*  #ifdef  MP-WEIXIN  */
		.blank{
			top: 0px;
		}
	/*  #endif  */
	.checkbox-box{
		display: flex;
		align-items: center;
		.checkbox{
			width: 35upx;
			height: 35upx;
			border-radius: 100%;
			border: solid 2upx #979797;
			display: flex;
			justify-content: center;
			align-items: center;
			.on{
				width: 35upx;
				height: 35upx;
				border-radius: 100%;
				background-color: #E93B3D;
				position: relative;
				transform: rotate(225deg);
			}
			.on:before{
				content: "";
				width: 4rpx;
				height: 19rpx;
				background-color: #fff;
				border-radius: 4rpx;
				position: absolute;
				left: calc(50% - 6rpx);
				top: calc(50% - 8rpx);
			}
			.on:after{
				content: "";
				width: 10rpx;
				height: 4rpx;
				background-color: #fff;
				border-radius: 4rpx;
				position: absolute;
				left: calc(50% - 5rpx);
				top: calc(50% - 8rpx);
			}
			// .on:before{
			// 	content: "";
			// 	width: 2px;
			// 	height: 10px;
			// 	background-color: #fff;
			// 	border-radius: 2px;
			// 	position: absolute;
			// 	left: calc(50% - 3px);
			// 	top: calc(50% - 4px);
			// }
			// .on:after{
			// 	content: "";
			// 	width: 4px;
			// 	height: 2px;
			// 	background-color: #fff;
			// 	border-radius: 2px;
			// 	position: absolute;
			// 	left: calc(50% - 1px);
			// 	top: calc(50% - 4px);
			// }
		}
		.checkbox.on{
			border-color: #fff;
		}
		.text{
			font-size: 28upx;
			margin-left: 10upx;
		}
	}
.status {
		width: 100%;
		height: 0;
		position: fixed;
		z-index: 10;
		background-color: #fff;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height);//覆盖样式
		/*  #endif  */
	}

	.header{
		width: 92%;
		padding: 0 4%;
		height: 100upx;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 10;
		background-color: #fff;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */
		.title{
			font-size: 36upx;
		}
		
	}
	.place{
		
		background-color: #ffffff;
		height: 100upx;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}
	.goods-list{
		width: 100%;
		padding: 20upx 0 120upx 0;
		.product-empty{
			margin-top: 0;
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
		.row{
			height: calc(22vw + 40upx); 
			
			display: flex;
			align-items: center;
			position: relative;
			overflow: hidden;
			z-index: 4;
			border-bottom: 1px solid #F2F2F2;
			.menu{
				.icon{
					color: #fff;
					font-size: 60upx;
				}
				position: absolute;
				width: 30%;
				height: 100%;
				right: 0;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: red;
				color: #fff;
				z-index: 2;
			}
			.carrier{
				@keyframes showMenu {
					0% {transform: translateX(0);}100% {transform: translateX(-30%);}
				}
				@keyframes closeMenu {
					0% {transform: translateX(-30%);}100% {transform: translateX(0);}
				}
				&.open{
					animation: showMenu 0.25s linear both;
				}
				&.close{
					animation: closeMenu 0.15s linear both;
				}
				background-color: #fff;
				.checkbox-box{
					padding-left: 20upx;
					flex-shrink: 0;
					height: 22vw;
					margin-right: 20upx;
				}
				position: absolute;
				width: 100%;
				padding: 0 0;
				height: 100%;
				z-index: 3;
				display: flex;
				align-items: center;

				.goods-info{
					width: 100%;
					display: flex;
					padding-right: 20upx;
					.img{
						width: 22vw;
						height: 22vw;
						overflow: hidden;
						flex-shrink: 0;
						margin-right: 10upx;
						image{
							width: 22vw;
							height: 22vw;
						}
					}
					.info{
						width: 100%;
						height: 22vw;
						overflow: hidden;
						display: flex;
						flex-wrap: wrap;
						position: relative;
						.title{
							width: 100%;
							font-size: 28upx;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							// text-align: justify;
							overflow: hidden;
							color: #2F2F2F;
						}
						.spec{
							font-size: 24upx;
							color: #B3B3B3;
							height: 30upx;
							// display: flex;
							// align-items: center;
							padding-bottom: 20vw;
							margin-top: 6upx;
							border: 1px #ffffff solid;
							max-width: 50%;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
						}
						.price-number{
							position: absolute;
							width: 100%;
							bottom: 0upx;
							display: flex;
							justify-content: space-between;
							align-items: flex-end;
							font-size: 28upx;
							height: 60upx;
							.price{
								display: flex;
								// justify-content: flex-start;
								line-height: 40rpx;
								.sale-price{
									font-size: 24rpx;
									color: #E93548;
									.num{
										font-size: 32rpx;
									}
								}
								.factory-price{
									padding-left: 15rpx;
									font-size: 24rpx;
									color: #B3B3B3;
									text-decoration: line-through;
								}
							}
							.number{
								display: flex;
								justify-content: center;
								align-items: flex-end;
								.input{
									height: 60upx;
									margin: 0 5upx;
									background-color: #f3f3f3;
									input{
										width: 60upx;
										height: 60upx;
										display: flex;
										justify-content: center;
										align-items: center;
										text-align: center;
										font-size: 26upx;
										padding: 0 10upx;
										color: #414141;
									}
								}
								.sub ,.add{
									background-color: #f3f3f3;
									border-radius: 5upx;
									.icon{
										font-size: 30upx;
										width: 60upx;
										height: 60upx;
										display: flex;
										justify-content: center;
										align-items: center;
										color: #979797;
									}
								}
							}
						}
					}
				}
			}
		}
	}
	.footer{
		width: 96%;
		padding: 0 0 0 4%;
		background-color: #fbfbfb;
		height: 100upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28upx;
		position: fixed;
		bottom: 0upx;
		z-index: 5;
		border-top: 1px #F2F2F2 solid;
		.delBtn{
			border: solid 1px #E93B3D;
			color: #E93B3D;
			padding: 0 30upx;
			height: 50upx;
			border-radius: 30upx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.settlement{
			width: 65%;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			height: 100%;
			.sum{
				width: 50%;
				font-size: 28upx;
				margin-right: 10upx;
				display: flex;
				justify-content: flex-end;
				color: #2F2F2F;
				.money{
					color: #E51700;
					padding: 0 5upx 0 10upx;
				}
			}
			.btn{
				// padding: 0 30upx;
				// height: 50upx;
				// background:linear-gradient(254deg,rgba(242,58,12,1) 0%,rgba(234,33,11,1) 100%);
				// color: #fff;
				// display: flex;
				// justify-content: center;
				// align-items: center;
				// border-radius: 30upx;
				background:linear-gradient(254deg,rgba(242,58,12,1) 0%,rgba(234,33,11,1) 100%);
				height: 100%;
				line-height: 100%;
				color: #fff;
				font-size: 32upx;
				width: 45%;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
</style>
