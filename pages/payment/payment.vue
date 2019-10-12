<template>
	<view>
		
		<!-- 地址 -->
		<view @tap="linkToAddress" class="address-section">
			<view class="order-content">
				<view class="cen">
					<view class="top">
						<text class="name">{{address.addressRecipients}}</text>
						<text class="mobile">{{address.addressPhone}}</text>
					</view>
					<view class="address">{{address.addressSheng}}{{address.addressShi}}{{address.addressQu}}{{address.addressAddress}}</view>
				</view>
				<text class="iconfont icon-arrowRight icon-you"></text>
			</view>
			<image class="a-bg" src="data:image/png;base64,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"></image>
		</view>

		<view class="goods-section mt-20">
			<!-- 商品列表 -->
			<view class="g-item border-bottom" v-for="(row, index) in payData.goodsListDetailList" :key='row.goodsId'>
				<image :src="row.goodsMainimagepath"></image>
				<view class="right">
					<view class="title clamp">{{row.goodsProductname}}</view>
					<view class="spec">{{row.goodsTitle}}</view>
					<view class="price-box">
						<view class="priceInfo">
							<view class="salePrice" v-if="row.salePrice">
								¥<text class="price">{{row.salePrice}}</text>
							</view>
							<view class="and" v-if="row.salePrice && row.credits">+</view>
							<view class="salePoints" v-if="row.credits">
								<text class="points">{{row.credits}}</text>分
							</view>
						</view>
						<view class="number">x {{row.goodsCount}}</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 优惠明细 -->
		<view class="yt-list">
			<!-- <view class="yt-list-cell b-b" @click="toggleMask('show')">
				<view class="cell-icon">
					券
				</view>
				<text class="cell-tit clamp">优惠券</text>
				<text class="cell-tip active">
					选择优惠券
				</text>
				<text class="cell-more wanjia wanjia-gengduo-d"></text>
			</view> -->
			<view class="yt-list-cell border-bottom">
				<view class="cell-tit">
					快递方式
				</view>
				<view class="cell-tip">{{payData.express && payData.express.name}}</view>
			</view>
			<view class="yt-list-cell">
				<view class="cell-tit">
					备注
				</view>
				<view class="cell-tip cell-remark-tip">
					<input class="action-input" type="text" v-model="remark" placeholder="请填写备注信息" />
				</view>
			</view>
		</view>
		<view class="yt-list mt-20">
			<view class="yt-list-cell border-bottom" v-if="payData.balance">
				<view class="cell-tit">
					账户余额
				</view>
				<view class="cell-tip cell-account-tip">
					<view class="num red">{{payData.balance}}</view>
					<view class="action-right">
						<!-- <view><text class="action-name">使用</text>￥</view>
						<input class="action-input" type="number" value="" /> -->
						<switch class="switchBtn" @change="switchChange" style="transform:scale(0.7)" color="#E93548"/>
					</view>
				</view>
			</view>
			<view class="yt-list-cell border-bottom">
				<view class="cell-tit">
					剩余积分
				</view>
				<view class="cell-tip cell-account-tip">
					<view class="num red">{{payData.userCredits}}</view>
				</view>
			</view>
			<view class="yt-list-cell" @tap="linkToCoupon">
				<view class="cell-tit ticket-tit">
					<text class="ticket-name">优惠券</text>
					<text class="ticket">
						<text class="num">0</text>张可用
					</text>
				</view>
				<view class="cell-tip cell-coupon-tip">
					<view class="red">-¥<text class="num">0</text></view>
					<view class="icon-arrow iconfont icon-arrowRight"></view>
				</view>
			</view>
		</view>
		<view class="yt-list mt-20">
			<view class="yt-list-cell" v-if="totalPriceDecrease">
				<view class="cell-tit">
					商品金额
				</view>
				<view class="cell-tip">
					<text class="red">¥<text class="num">{{totalPriceDecrease}}</text></text>
				</view>
			</view>
			<view class="yt-list-cell" v-if="payData.express && payData.express.fee">
				<view class="cell-tit">
					快递费
				</view>
				<view class="cell-tip">
					<text class="red">¥<text class="num">{{payData.express && payData.express.fee}}</text></text>
				</view>
			</view>
			<view class="yt-list-cell" v-if='balanceType'>
				<view class="cell-tit">
					余额支付
				</view>
				<view class="cell-tip">
					<text class="red">¥<text class="num">{{balancePay}}</text></text>
				</view>
			</view>
			<view class="yt-list-cell" v-if='payData.credits'>
				<view class="cell-tit">
					积分支付
				</view>
				<view class="cell-tip">
					<text class="red"><text class="num">{{payData.credits}}</text>分</text>
				</view>
			</view>
			<view class="yt-list-cell" v-if="payData.coupons">
				<view class="cell-tit">
					优惠支付
				</view>
				<view class="cell-tip">
					<text class="red">¥<text class="num">{{payData.coupons}}</text></text>
				</view>
			</view>
			<view class="yt-list-cell border-top">
				<view class="cell-tit">
					
				</view>
				<view class="cell-tip cell-amount-tip">
					实付金额<text class="price red">¥<text class="num">{{payPrice}}</text></text>
				</view>
			</view>
		</view>
		<!-- 金额明细 -->
		<!-- <view class="yt-list">
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">商品金额</text>
				<text class="cell-tip">￥179.88</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">优惠金额</text>
				<text class="cell-tip red">-￥35</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">运费</text>
				<text class="cell-tip">免运费</text>
			</view>
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">备注</text>
				<input class="desc" type="text" v-model="desc" placeholder="请填写备注信息" placeholder-class="placeholder" />
			</view>
		</view> -->
		
		<!-- 底部 -->
		<view class="footer">
			<!-- <view class="price-content">
				<text>实付款</text>
				<text class="price-tip">￥</text>
				<text class="price">475</text>
			</view> -->
			<view class="submit" @click="handleSubmit">立即下单</view>
		</view>
		
		<!-- 优惠券面板 -->
		<!-- <view class="mask" :class="maskState===0 ? 'none' : maskState===1 ? 'show' : ''" @click="toggleMask">
			<view class="mask-content" @click.stop.prevent="stopPrevent">
				优惠券页面，仿mt
				<view class="coupon-item" v-for="(item,index) in couponList" :key="index">
					<view class="con">
						<view class="left">
							<text class="title">{{item.title}}</text>
							<text class="time">有效期至2019-06-30</text>
						</view>
						<view class="right">
							<text class="price">{{item.price}}</text>
							<text>满30可用</text>
						</view>
						
						<view class="circle l"></view>
						<view class="circle r"></view>
					</view>
					<text class="tips">限新用户使用</text>
				</view>
			</view>
		</view> -->

	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				hasAddress: true,
				isWx: false,
				isWebWx: false,
				isWeb: false,
				remark: '',
				payData: {},
				address: {},
				goodsList: [],
				balanceType: 0,
				fee: 0,
			}
		},
		methods: {
			linkToAddress(){
				if(this.address.addressRecipients === '请先去创建地址'){
					uni.navigateTo({
						url: `/pages/addressManage/addressManage?type=add`
					})
				}else{
					uni.navigateTo({
						url: '/pages/address/address?source=1'
					})
				}
			},
			linkToCoupon(){
				uni.redirectTo({
					url: '/pages/coupon/coupon'
				})
			},
			switchChange(e){
				this.balanceType=Number(e.detail.value);
			},
			handleWxPay(data){
				this.$http.post('/mall/app/order/submit', {
					...data,
					payChannels: '8',
				})
				.then( res => {
					let resultOrderId = res.result && res.result.orderId;
					console.log(res)
					if(res.result){
						if(res.result.orderState == 1){
							uni.showToast({
								icon: 'none',
								title: '订单提交成功'
							})
							uni.removeStorageSync('chooseAddress');
							setTimeout(function(){
								uni.redirectTo({
									url: '/pages/orderDetail/orderDetail?orderId='+resultOrderId
								})
							}, 1000)
						}else{
							this.$http.post('/mall/app/order/submit', {
								...data,
								payChannels: '8',
								callBackNo: res.result.orderNo
							})
							.then( res => {
								if(res.code == 0){
									wx.requestPayment({
										'timeStamp': res.result.payResponse.wxPayResponse.timeStamp,
										'nonceStr': res.result.payResponse.wxPayResponse.nonceStr,
										'package': res.result.payResponse.wxPayResponse.packageStr,
										'signType': res.result.payResponse.wxPayResponse.signType,
										'paySign': res.result.payResponse.wxPayResponse.paySign,
										'success': function (sc) {
											uni.redirectTo({
												url: '/pages/orderDetail/orderDetail?orderId='+resultOrderId
											});
										},
										'fail': function (er) {
											uni.redirectTo({
												url: '/pages/order/order?state=0'
											})
										},
										'complete': function(msg){
											console.log(msg);
										}
									})
								}else{
									uni.showToast({
										icon: 'none',
										title: res.message
									})
								}
							})
							.catch( err => {
								console.log(err);
							})
						}
					}else{
						uni.showToast({
							icon: 'none',
							title: res.message
						})
					}
				})
				.catch( err => {
					console.log(err);
				})
			},
			handleWxWebPay(data){
				this.$http.post('/mall/app/order/submit', {
					...data,
					payChannels: '',
				})
				.then( res => {
					if(res.result && res.result.orderState == 1){
						console.log(res);
						uni.showToast({
							icon: 'none',
							title: '订单提交成功'
						})
						uni.removeStorageSync('chooseAddress');
						setTimeout(function(){
							uni.redirectTo({
								url: '/pages/orderDetail/orderDetail?orderId='+res.result.orderId
							})
						}, 1000)
					}else{
						if(res.code == 0){
							window.location.href=`http://${this.paymentUrl}.yujianli.cn/#/pages/payment/cashRegister?orderNo=`+res.result.orderNo+"&mallDomain="+this.baseInfo.mallDomain+'&orderPayPrice='+data.payPrice+'&baseUrl='+this.baseUrl+'&token='+encodeURIComponent(this.token);
						}else{
							uni.showToast({
								icon: 'none',
								title: res.message
							})
						}
					}
					
				})
				.catch( err => {
					console.log(err);
				})
			},
			handleWebPay(data){
				this.$http.post('/mall/app/order/submit', {
					...data,
					payChannels: '',
				})
				.then( res => {
					if(res.result.orderState == 1){
						console.log(res);
						uni.showToast({
							icon: 'none',
							title: '订单提交成功'
						})
						uni.removeStorageSync('chooseAddress');
						setTimeout(function(){
							uni.redirectTo({
								url: '/pages/orderDetail/orderDetail?orderId='+res.result.orderId
							})
						}, 1000)
					}else{
						this.$http.post('/mall/app/order/submit', {
							...data,
							payChannels: '2',
							callBackNo: res.result.orderNo
						})
						.then( res => {
							console.log(res);
						})
						.catch( err => {
							console.log(err);
						})
					}
					
				})
				.catch( err => {
					console.log(err);
				})
			},
			handleSubmit(){
				if(!this.hasAddress){
					uni.showToast({
						icon: 'none',
						title: '请先去创建地址'
					})
				}
				let data = {
					...this.baseInfo,
					accountId: this.userInfo.accountId,
					addressId: this.address.addressId,
					balance: this.balancePay,
					isBalance: this.balanceType,
					credits: this.payData.credits,
					expressFee: this.payData.express.fee,
					goodsList: this.goodsList,
					payPrice: this.payPrice,
					remark: this.remark,
					totalPrice: this.payData.totalPrice,
					goodsPrice: this.totalPriceDecrease,
					address: this.address
				};
				if(this.isWx){
					this.handleWxPay(data);
				}else if(this.isWebWx){
					this.handleWxWebPay(data);
				}else if(this.isWeb){
					this.handleWebPay(data);
				}
			},
			checkEnvironment(){
				if(navigator && navigator.userAgent){
					// 非小程序
					this.browserRedirect();
				}else{
					// 小程序
					this.isWx=true;
				};
			},
			browserRedirect() {
				var sUserAgent = navigator.userAgent.toLowerCase();
				var bIsWeChat = sUserAgent.match(/MicroMessenger/i) == "micromessenger";
				if(bIsWeChat) {
					this.isWebWx=true;
				}else {
					this.isWeb=true;
				}
			},
			getOrderData(){
				this.$http.post('/mall/app/order/confirm', {
					...this.baseInfo,
					accountId: this.userInfo.accountId,
					goodsList: uni.getStorageSync('buyList')
				})
				.then( res => {
					if(res.code == 0){
						if(!res.result.address){
							this.hasAddress=false;
						}else{
							this.hasAddress=true;
						}
						this.payData=res.result;
						this.address=res.result.address || {};
						this.address.addressRecipients=res.result.address && res.result.address.addressRecipients || '请先去创建地址';
						res.result.goodsListDetailList.map(item => {
							item.mallGoodsId=item.id;
							this.goodsList.push(item);
						});
						this.fee=res.result.express.fee;
						if(uni.getStorageSync('chooseAddress')){
							this.address=uni.getStorageSync('chooseAddress');
						}
					}else{
						console.log('payment.vue-- confirm接口获取数据失败');
					}
				})
				.catch( err => {
					console.log('payment.vue-- confirm接口获取数据错误' + err);
				})
			}
		},
		computed: {
			...mapState('common', ['baseInfo', 'userInfo', 'paymentUrl', 'baseUrl', 'token']),
			// ...mapState('order', ['order_goodsList'])
			
			// balancePay(){
			// 	return this.payData.totalPrice+this.fee>this.payData.balance ? this.payData.balance : this.payData.totalPrice+this.fee
			// },
			// payPrice(){
			// 	return this.balanceType ? this.payData.totalPrice+this.fee - this.balancePay : this.payData.totalPrice+this.fee
			// },
			totalPriceDecrease(){
				return this.payData.totalPrice-(this.payData.express && this.payData.express.fee)
			},
			balancePay(){
				return this.totalPriceDecrease+this.fee>this.payData.balance ? this.payData.balance : this.totalPriceDecrease+this.fee
			},
			payPrice(){
				return this.balanceType ? this.totalPriceDecrease+this.fee - this.balancePay : this.totalPriceDecrease+this.fee
			}
		},
		onShow(){
			this.getOrderData();
		},
		onBackPress(){
			uni.removeStorageSync('chooseAddress');
		},
		onLoad(option){
			this.checkEnvironment();
		},
	}
</script>

<style lang="scss">
	page {
		background-color: #f7f7f7;
		padding-bottom: 156upx;
	}

	.address-section {
		padding: 15upx 20upx;
		line-height: 40upx;
		background: #fff;
		position: relative;
		border-top: 1px solid #F2F2F2;
		.order-content {
			display: flex;
			align-items: center;
			min-height: 60upx;
			padding-bottom: 5upx;
		}
		.cen {
			font-size: 28upx;
			color: #343434;
			display: flex;
			flex-direction: column;
			flex: 1;
			margin-right: 30upx;
		}
		.name {
			margin-right: 24upx;
		}
		.address {
			font-size: 28upx;
			color: #848484;
		}
		.icon-you {
			font-size: 40upx;
			color: #C6C6C6;
		}
		.a-bg {
			position: absolute;
			left: 0;
			bottom: 0;
			display: block;
			width: 100%;
			height: 5upx;
		}
	}
	
	.border-bottom{
		position: relative;
		&:after{
			content: "";
			position: absolute;
			left: 10rpx;
			right: 10rpx;
			bottom: 0;
			height: 1px;
			background: #E8E8E8;
		}
	}
	
	.border-top{
		position: relative;
		&:after{
			content: "";
			position: absolute;
			left: 10rpx;
			right: 10rpx;
			top: 0;
			height: 1px;
			background: #E8E8E8;
		}
	}
	
	.mt-20{
		margin-top: 20upx;
	}
	
	.red{
		color: #E93548!important;
	}

	.goods-section {
		background: #fff;
		.g-item {
			display: flex;
			padding: 20upx 30upx;

			image {
				flex-shrink: 0;
				display: block;
				width: 152upx;
				height: 152upx;
			}

			.right {
				flex: 1;
				padding-left: 24upx;
				overflow: hidden;
				position: relative;
			}

			.title {
				font-size: 28upx;
				color: #2F2F2F;
				word-break: break-all;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				margin-top: -6upx;
			}

			.spec {
				font-size: 24upx;
				position: absolute;
				bottom: 40upx;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				color: #B3B3B3;
			}

			.price-box {
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 32upx;
				position: absolute;
				left: 20upx;
				bottom: -6upx;
				right: 0;
				font-size: 24upx;
				.priceInfo{
					color: #E93548;
					display: flex;
					flex-direction: row;
					justify-content : flex-start;
					align-items : flex-end;
					.and{
						padding-left: 10upx;
					}
				}
				.number{
					color: #B3B3B3;
				}
			}

			.step-box {
				position: relative;
			}
		}
	}
	.yt-list {
		background: #fff;
	}

	.yt-list-cell {
		display: flex;
		align-items: center;
		padding: 10upx 20upx;
		line-height: 70upx;
		position: relative;
		.cell-tit {
			flex: 1;
			font-size: 28upx;
			color: #333333;
			margin-right: 10upx;
			&.ticket-tit{
				.ticket-name{
					padding-right: 35upx;
				}
				.ticket{
					background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAUCAYAAADY6P5TAAAAAXNSR0IArs4c6QAABSdJREFUWAltmE2OXEUQhN9700L+QYOE2GD1xvIKseAK3nIFH8BHmENwBG7CzlfwghPQKyyNhBeALWaa+CIys18Lqj2vqjIjIiOrXo9GXu9f3f74uD78/Pi4HNd1WRZ+GJpXfc76ED8Tco6HduQT8Pp8Dm545NExtjkoEgE7gADFd4EOAwy4hJK3F9cK0HuX2WkmddrW7e364dXz34Sv5loRhgZbBgQ3Q5vZZ0F817wxZIL7b67jOTiQoytw0zmAzvVhtBbac7AGGVoea60JhW1dTtuZmyOgCLfA3IPzdlFiTqTj3EPWhKcgmx2OquQcsm446EdDcKxUkdRXA/UxbnJwwvSkRx9EJVwHDaME1uq4dRIdBKxnSATAE4PW5My7V8KasDXKUDbhzC1V861D3I0OHxO53TYfbLRZs6oeBK2alK2CE7OmbpF4zAfxf2QyNmOVkhJpCqJQ5rs6+DZpZcyMIW5V2Sp2hSudNto3bWrxmcypJqjJEmclOR1vZFoMI17jl0TlINmMZgcLR3FyaaZy00Sg0ZZaRABp5PbDqzehnDXeKIubsKsfL268ztoce8NLO3QZfQ+fPH0h9pttW07xj+MkmTEGiVBGVhwAn4jXDMBGc0NuoPZzE6USqHguop0PJgexP7jogb44mHU15XNQmi1rvZb65bK9uTk8eTGsP76//frz3w/vhTmOVmVt1M1EwA3rQYMewgFld5Xb8Z0laTfgkswhFbGcGuZ6LUAVqQ9fR1CpiXt/1o2tpy9vtx/WXz7ew/J3kMVXv368v9mWO9bUYfSp+xZpoWqQmVjjVHFMWwB2uah9mgvOr6zSQRSuXO+15xBB1gm6zxhM0/YQv+uy3XVzQKZBNg+Hp++Yx6gVo0Gh9I0ZOuWZiFdqIqa70Us2x91YoWm4XE7Uh1BfB+V2bCxpgOSVDp85oShAZ7UevninacZVg88mHBKMCCaRxpOb23EqO18AjerjiNY9B2ZbxcBQDJe6prwZNloHcKmjlQuAjk4O4aIZnevnVYN/fvrrNWkf5uAi4Cfmu/daUNSFmJ0TUnOKRyQU4iTYhWPzw+/CwfUrjILXlWZtL9qHD0Jrgsqd//n8mn2Pxi7+JfOJXzLrUcjkJ1sCqGCw4j7R9dKKi6TSFO9ssJI1HwEZBWutrsctpbrDXldDSuxzPqar65Gk8Px5tv8ls3747ptvF25uXX4S5FilciIKQJpbYuvKvQjaRjkUJ0uhcA5VnExjrzUbLMAcLrH9IVSutKIDojBKk3KN5aw/tG/u+D6uv798fu4EEuZ7wYZFRmPa4HWuXzlhLZBmW+tiInHbUDItxKAxlIKUf1f1ux7pHFR8+YkQ0dJsLLMveffWCYjZGizgMc1MsKqw1Ii5Ha+jInVz/T1CyK2R67VQadceXQxp8nzGgGOXrXOuxaM8MbUvzQeTIQKhE4p57kChSWn41cKYML7NwlKs+bXwZBMjASnGSRpvfr0BCmCuX78AVHT45Nj2gUTPxgANPxGwhyFXIasJi2bfyRkd0Ir61I1NoeY7PacVR3kKp19EzY9waVFD4jmcEqVKXQG3OrkUqPrtDL4IDOVbwXRtyOkvm+XUGb8SRbAej2JRiE22PPUz2BQMX8Hi0dTcBib2bDCCTgPeEGi+8vwD14X2Gg7HVcmaGr1UElV/k643b1mAZ1iPheoUI3zXJlhxAS7m88qgET+Aiy7DvgnNtiOAV8qHP5VhR8BX0BqaiTPx2C+l1Wyy2UjfWDWn/7L4F+XIsyurjR++AAAAAElFTkSuQmCC") no-repeat;
					background-size: 100% 100%;
					padding: 8upx 20upx;
					color: #fff;
					font-size: 24upx;
				}
			}
		}

		.cell-tip {
			font-size: 24upx;
			color: #A2A2A2;
			&.cell-remark-tip{
				width: 80%;
				border: 1px #F3F3F3 solid;
				text-align: right;
				padding: 0 10upx;
				height: 65upx;
				line-height: 65upx;
				.action-input{
					font-size: 24upx;
					height: 100%;
				}
			}
			&.cell-account-tip{
				display: flex;
				justify-content: flex-end;
				align-items: center;
				flex-wrap:nowrap;
				flex-direction:row;
				.num{
					padding-right: 18upx;
				}
				.action-right{
					display: flex;
					justify-content: flex-end;
					align-items: center;
					.switchBtn{
						margin-top: -10upx;
						margin-right: -20upx;
					}
					// flex-wrap:nowrap;
					// flex-direction:row;
					// color: #333333;
					// .action-name{
					// 	color: #A2A2A2;
					// }
					// .action-input{
					// 	border: 1px #F3F3F3 solid;
					// 	width: 84upx;
					// 	padding: 0 10upx;
					// 	height: 55upx;
					// 	line-height: 55upx;
					// 	font-size: 24upx;
					// 	text-align: center;
					// 	color: #A2A2A2;
					// }
				}
			}
			&.cell-coupon-tip{
				display: flex;
				justify-content: flex-end;
				align-items: center;
				.icon-arrow{
					color: #C6C6C6;
					vertical-align: middle;
					padding: 0 0 0 10upx;
					font-weight: 600;
				}
			}
			&.cell-amount-tip{
				font-size: 28upx;
				color: #333333;
				.price{
					padding-left: 20upx;
					font-size: 32upx!important;
				}
			}
		}

	}
	
	/* 支付列表 */
	.pay-list{
		padding-left: 40upx;
		margin-top: 16upx;
		background: #fff;
		.pay-item{
			display: flex;
			align-items: center;
			padding-right: 20upx;
			line-height: 1;
			height: 110upx;	
			position: relative;
		}
		.icon-weixinzhifu{
			width: 80upx;
			font-size: 40upx;
			color: #6BCC03;
		}
		.icon-alipay{
			width: 80upx;
			font-size: 40upx;
			color: #06B4FD;
		}
		.icon-xuanzhong2{
			display: flex;
			align-items: center;
			justify-content: center;
			width: 60upx;
			height: 60upx;
			font-size: 40upx;
			// color: $base-color;
		}
		.tit{
			font-size: 32upx;
			// color: $font-color-dark;
			flex: 1;
		}
	}
	
	.footer{
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 995;
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: space-between;
		font-size: 30upx;
		background-color: #fff;
		z-index: 998;
		padding: 30upx 20upx 20upx 20upx;
		box-sizing: border-box;
		.submit{
			display:flex;
			align-items:center;
			justify-content: center;
			width: 100%;
			height: 106upx;
			color: #fff;
			font-size: 32upx;
			background: #07B804;
			border-radius: 10upx;
		}
	}
	
	/* 优惠券面板 */
	.mask{
		display: flex;
		align-items: flex-end;
		position: fixed;
		left: 0;
		top: var(--window-top);
		bottom: 0;
		width: 100%;
		background: rgba(0,0,0,0);
		z-index: 9995;
		transition: .3s;
		
		.mask-content{
			width: 100%;
			min-height: 30vh;
			max-height: 70vh;
			background: #f3f3f3;
			transform: translateY(100%);
			transition: .3s;
			overflow-y:scroll;
		}
		&.none{
			display: none;
		}
		&.show{
			background: rgba(0,0,0,.4);
			
			.mask-content{
				transform: translateY(0);
			}
		}
	}

</style>
