<template>
	<view>
		
		<!-- 地址 -->
		<navigator url="/pages/address/address?source=1" class="address-section">
			<view class="order-content">
				<view class="cen">
					<view class="top">
						<text class="name">{{initData.address && initData.address.addressRecipients}}</text>
						<text class="mobile">{{initData.address && initData.address.addressPhone}}</text>
					</view>
					<view class="address">{{initData.address && initData.address.addressDetail}}</view>
				</view>
			</view>

			<image class="a-bg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAAFCAYAAAAaAWmiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Rjk3RjkzMjM2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Rjk3RjkzMjQ2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGOTdGOTMyMTY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGOTdGOTMyMjY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrEOZlQAAAiuSURBVHjazJp7bFvVHce/1/deXzuJHSdOM+fhpKMllI2SkTZpV6ULYrCHQGwrf41p/LENVk3QTipSWujKoyot1aQN0FYQQxtsMCS2SVuqsfFYHxBKYQNGV9ouZdA8nDipH4mT+HFf+51rO0pN0japrw9HreLe3Pqc3/me3+f3uFdIvfVuDIAPix1C9oceicFRVQWlvRWCkL1omqb1Of9z9rXZY65rhcO6x5ove19oWkX/RAaSMLOEkg+2Zt0wEcvoWOZzYZnXeWEbzmP7XPs11//LnOiDEY9DkGRwGw5a59QUTM2As+1qiD5v0TUvvC9Bc52KpmDSnju4ic7+CIinNVQoElYtcUM8jx2L1bzwPn14DOrHZ0hzEdxOPJtW16FH45CvuBzyZU22aH7Od9LnU/E0xpMqJG6iZ309qeqYNoA1gTJ4ZdF2zY2pJNSTfYCmkb85+GnO1hIbh+DzQVndaiHYTs3ZGJpifE/DyVnzi+X7pWqen8/i+8kPYUSjEORPCd9XtUKs9Fi+KMxjVzE0n9ZNnIgkYXwK+B5LafC4JKyudcMxD2+LqblGfNcY30VxJsfhcOCJ7xr02ATkluXE96DtmrPvPxFLIUH7zY3vOc0Z39O0oGtqy1DlFIuu+Zx8P/Ffa8/hEBey4rh0uuPWS6S6CRUhyGjG0hcfOWex+c9zXSsE5HmFzseP3H294Sl847VBRGJJQHTwy9wJNKAE7otLfXi2K3hRgeB81+bar8IDEPvFMxi6cxebnMx2cjrnDmiIwUAGDTvugX9de9E1L7R9NK1jc+8gnj8dy2rOKY/JRhgV8Cr405ea0HEBOxajeaHtySPvYvD2bUgdP0lmuzkl7oLl6Wn0wX/Dd1D/xG5bNc/f+7NjY9jyzghlM5QxS/ySOGt+Wlt3WwDXBz22a86gHrqjG7Hnekhz5uciN9NVDEBxXYng87vgEoqveZ7y+XsPE99vOTyAs1SkU+bOT3NKIJHUsIb4/rsL8L0YmrMRffQ3GNn8c6L7BOnu4pW10/xR4nsK9T+5FzWda2fXcEXTfLbtYUrc7joSwguno9kilZfsLNmgtaBcxv7rmudN2i9Fc8YRlsvkr6aOvoeBHxDf//MBzVfGke9p8vVhVN2wAQ1P7rFdczYeO34Wm4+Gsr4mcqzWMqQ5IX5rex3W1pUXX/PCRlwkjpEtDyLy9B8sPxcgLWzFpy7rWlTH3eq66AbUj0fh7lyJhn27oFzVck41mTdgdnU5+3fzbczsqqVwQ14aSuCrhwZoo3UEqCLW6biZJZZZom0e0UhlSiY3rvBjd0cdfLJjTrsXYvN8e5TvPEZ2PYbw9l9CrKqAWFNB+2+W/oiTc2l9BFefC/WPdqPyuxts1/zMlIrbqVB7OZSgaSWrC2eUWHUGcLa2MVrLyho3ftvVhNYq1ye6J8XUnI3JFw8idNdOaB+GIS+vsZhf6gMvsP1OJKGFx1H9o1sQeOSBXOcfc9pQDM3Z2PGvEeykxJ0l7AGaTyux4YKVLpOvs0BO/v0UQf17LdUzwdcskuaFHRo1NIrQxq1I9ByEc2kj+ZwDZsk1z/H9I+L7us+j4fHdUFa2FF3zQtv3DyTwrTcGoVFxXOeWKZEoPeNm+E66b7zSj71r6+ERHXN21C5V85nPmo7I3scRvncfxOoyiP7y0vNdyMZ17X9xmGR+43MPwvvtm23XnPH9h68P4u8U2yuJ7wonvmu0pigValf73XhmfRCt1S5bNbd6QK/0ov+2bhjDE8T3aj58p5hujCehjsZQs+lWLNl5N0RvuS2a5z/T8cLOd8K4/72wxdaAXHq+syGT7sOM7xLxvaOe+F5lu+bqYBjDd25H4s+vQ26ugSBL1lsEC+m4C8fQvMhXZXTa/CR8N96MekrapWCdvc1t+rvn32PY3juYrc7cEjjonFuMYQm97QsBPLSq1v7pKJAPbbwHZ3ueoqCyhJIJStqto8/BdMTh8q1A8PcPo+xrXbbP97ehSXydFWpjU0CZzO8xInM+CqSdTV688OVmBBT7O6DRh/dhYOt20nqSdK+f1RIqdRMqRXgrR90Dm+Dfsdn2+QYpeH7/8CBe+mAsq7nIsevKEjivgv1dQdzYUGH7dMlXe3FmwxZMTRyFgiZkW48mF0/XMYWqm75JfH8IUmPA1tlUMnHv+8T3N3J8d3Hkey6I3re6Djvaam1v/urhswjdsQ2jf/kVJRI1xHdPrh1lltzTWUxXai5H07N74P7KettnPDQyjWtf/ohglyJfl7jz/drP+vDrzgYsLZdtP2PRnz6B/u4t9I+U9cYCH81hddoFuBG4bxNq7v9xSfh+G/H9wKkIwF5JkR38fF3VLb73dDXhpsYS8P0Vxve7MZ14E04EkX2SumDj40Lkjz2LS9x1nZVqcK1rh1L/GaiZDB1GYwGPRi9+sA4r63odGEjAoKTZS0mTwUtoS2sTPioc1jd64KJqNZXRP9EtLFrLT5KQOd6H1JtvQ/SUQ1CUC1Z/tjp5MgXn51bAfc1VpAUVb6pqi+bsqRlrOB0ITSI0kUa1IvF7JcribPbxZnt9BYIeBZm0ap1BO2yHLMOIxjH111chmDocXg9XzZFR4fD74e5cA9GtQEulbLGbfaNMvv4+BfG3hiet9wxlUeDGdDPn68uqXVgVKKezbiBN/HHYoTnrqlORkDx0BHr/ABzVVbknbZysZ3wnRVyda6HU1UIjvpt28p2C+T+GEtYeeEh3jqcdKjl2BcWY65q9UAQb+c6+k3iePnaS+P5Pq8spOJ38fJ09RVI1OFuWo6xtJXSD+J6xh++OHN8PEt8HxtNY4pbAczC+m2Rnh8V3J9Q0Fa4LeG97YQdehj4aoSL9NZiZNMTKStp6g5/x5NsW37vWQaS1WXzPHvjihzYS/lgshbeJ75WySHm7wNXXk8SbK/xutOX4ntHtYRxE0eJn6uARaGf6ie++7GPNxVkf/78AAwCn1+RYqusbZQAAAABJRU5ErkJggg=="></image>
		</navigator>

		<view class="goods-section mt-20">
			<!-- 商品列表 -->
			<view class="g-item border-bottom" v-for="(row, index) in initData.goodsListDetailList">
				<image :src="row.goodsMainimagepath"></image>
				<view class="right">
					<view class="title clamp">{{row.goodsProductname}}</view>
					<view class="spec">{{row.goodsTitle}}</view>
					<view class="price-box">
						<text class="priceInfo">
							<view class="salePrice" v-if="row.salePrice">
								¥<text class="price">{{row.salePrice}}</text>
							</view>
							<view class="and" v-if="row.salePrice && row.credits">+</view>
							<view class="salePoints" v-if="row.credits">
								<text class="points">{{row.credits}}</text>分
							</view>
						</text>
						<text class="number">x {{row.goodsCount}}</text>
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
				<view class="cell-tip">快递费用:{{initData.express && initData.express.fee}}</view>
			</view>
			<view class="yt-list-cell" v-if="initData.orderlistMessage">
				<view class="cell-tit">
					备注
				</view>
				<view class="cell-tip cell-remark-tip">
					<input class="action-input" type="text" disabled v-model="initData.orderlistMessage" />
				</view>
			</view>
		</view>
		<view class="yt-list mt-20">
			<!-- <view class="yt-list-cell border-bottom" v-if="payData.balance">
				<view class="cell-tit">
					账户余额
				</view>
				<view class="cell-tip cell-account-tip">
					<view class="num red">{{payData.balance}}</view>
					<view class="action-right">
						<switch class="switchBtn" style="transform:scale(0.7)" color="#E93548"/>
					</view>
				</view>
			</view> -->
			<!-- <view class="yt-list-cell" v-if="initData.coupons">
				<view class="cell-tit ticket-tit">
					<text class="ticket-name">优惠券</text>
				</view>
				<view class="cell-tip cell-coupon-tip">
					<view class="red">-¥<text class="num">{{initData.coupons}}</text></view>
				</view>
			</view> -->
		</view>
		<view class="yt-list mt-20">
			<view class="yt-list-cell" v-if="initData.goodsPrice">
				<view class="cell-tit">
					商品金额
				</view>
				<view class="cell-tip">
					<text class="red">¥<text class="num">{{initData.goodsPrice}}</text></text>
				</view>
			</view>
			<view class="yt-list-cell" v-if="initData.express && initData.express.fee">
				<view class="cell-tit">
					快递费
				</view>
				<view class="cell-tip">
					<text class="red">¥<text class="num">{{initData.express.fee}}</text></text>
				</view>
			</view>
			<view class="yt-list-cell" v-if='initData.balance'>
				<view class="cell-tit">
					余额支付
				</view>
				<view class="cell-tip">
					<text class="red">¥<text class="num">{{initData.balance}}</text></text>
				</view>
			</view>
			<view class="yt-list-cell" v-if='initData.credits'>
				<view class="cell-tit">
					积分支付
				</view>
				<view class="cell-tip">
					<text class="red">¥<text class="num">{{initData.credits}}</text>分</text>
				</view>
			</view>
			<view class="yt-list-cell" v-if="initData.coupons">
				<view class="cell-tit">
					优惠支付
				</view>
				<view class="cell-tip">
					<text class="red">¥<text class="num">{{initData.coupons}}</text></text>
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
		
		<!-- 底部 -->
		<view class="footer">
			<!-- <view class="price-content">
				<text>实付款</text>
				<text class="price-tip">￥</text>
				<text class="price">475</text>
			</view> -->
			<view class="submit" @click="handleSubmit">微信支付</view>
		</view>
		
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				baseUrl: '',
				orderNo: '',
				mallDomain: '',
				payInfo: {},
				initData: {},
				mallId: '',
				token: '',
				payPrice: 0
			}
		},
		onBackPress(eve) {
			alert('11111111111111')
			alert(eve);
			return true;
		},
		methods: {
			onBridgeReady(){　　　　　　　　　　　　　　　　　　　　　　　　　　　//使用微信浏览器内置的对象调起微信支付插件，并传入统一接口返回的参数
				var that = this;
				WeixinJSBridge.invoke(
				  'getBrandWCPayRequest', {
					"appId":this.payInfo.appId,                 //公众号名称，由商户传入
					"timeStamp":this.payInfo.timeStamp,         //时间戳，自1970年以来的秒数
					"nonceStr":this.payInfo.nonceStr,           //随机字符串
					"package":this.payInfo.package,            //支付验证pay_id
					"signType":this.payInfo.signType,                           //微信签名方式
					"paySign":this.payInfo.paySign                 //微信签名
				  },
				  function(res){
					if(res.err_msg == "get_brand_wcpay_request:ok" ){
					  // 使用以上方式判断前端返回,微信团队郑重提示：
					  //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
					  // uni.removeStorageSync('chooseAddress');
					    window.location.href='//'+that.baseUrl + '#/pages/orderDetail/orderDetail?orderId='+that.initData.orderId+"&mallDomain="+that.mallDomain;
					}else{
						// uni.removeStorageSync('chooseAddress');
						window.location.href='//'+that.baseUrl + '#/pages/order/order?state=0'+"&mallDomain="+that.mallDomain;
					}
				  }
				)
			},
			handleSubmit(){
				let data = {
					accountId: this.initData.accountId,
					addressId: this.initData.address.addressId,
					balance: this.initData.balance,
					coupons: this.initData.coupons,
					credits: this.initData.credits,
					expressFee: this.initData.express.fee,
					goodsList: this.initData.goodsListDetailList,
					payPrice: this.payPrice,
					totalPrice: this.initData.totalPrice,
					payChannels: '6',
					callBackNo: this.orderNo,
					mallDomain: this.mallDomain,
					mallId:this.mallId
				};
				this.$http.post('/mall/app/order/submit', data, {
					header: {
						Authorization: 'Bearer '+this.token
					}
				})
				.then( res => {
					if(res.code == 0){
						this.payInfo.appId = res.result.payResponse.wxPayResponse.appId;
						this.payInfo.timeStamp = res.result.payResponse.wxPayResponse.timeStamp;
						this.payInfo.nonceStr = res.result.payResponse.wxPayResponse.nonceStr;
						this.payInfo.package = res.result.payResponse.wxPayResponse.packageStr;
						this.payInfo.signType = res.result.payResponse.wxPayResponse.signType;
						this.payInfo.paySign = res.result.payResponse.wxPayResponse.paySign;
						if (typeof WeixinJSBridge == "undefined"){
						  if( document.addEventListener ){
							document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady, false);
						  }else if (document.attachEvent){
							document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady);
							document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady);
						  }
						}else{
						  this.onBridgeReady();
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
			getInitInfo(){
				this.orderNo=uni.getStorageSync('ORDER_NO');
				this.mallDomain=uni.getStorageSync('mallDomain');
				this.token=uni.getStorageSync('token');
				this.payPrice=Number(uni.getStorageSync('payPrice'));
				this.baseUrl=uni.getStorageSync('baseUrl');
			},
			checkMallType(){
				this.$http.post('/mall/app/login/mall/shopmall/type', {
					mallDomain: this.mallDomain
				})
				.then( res => {
					if(res.code == 0){
						// this.SET_BASEINFO({
						// 	...this.baseInfo,
						// 	mallDomain: this.mallDomain,
						// 	mallType: res.result.type,
						// 	mallId: res.result.mallId
						// });
						// this.SET_MALLTYPE(res.result.type);
						// this.SET_MALLID(res.result.mallId);
						// this.SET_MALLNAME(res.result.mallName);
						// this.SET_MALLLOGO(res.result.mallLogo);
						this.mallId=res.result.mallId;
						this.getInitData();
					}else{
						console.log('cashRegister--mallTaye 接口调用失败');
					}
				})
				.catch( err => {
					console.log('cashRegister--mallTaye 接口调用出错');
				})
			},
			getInitData(){
				this.$http.post('/mall/app/order/checkstand', {
					callBackNo: this.orderNo,
					mallId: this.mallId,
					payPrice: this.payPrice
				},{
					header: {
						Authorization: 'Bearer '+this.token
					}
				})
				.then(res => {
					if(res.code == 0){
						this.initData=res.result
					}
				})
				.catch(err => {
					console.log(err);
				})
			}
		},
		computed: {
			// ...mapState('common', ['baseInfo']),
		},
		onLoad(options){
			uni.setStorageSync('ORDER_NO', options.orderNo);
			uni.setStorageSync('mallDomain', options.mallDomain);
			uni.setStorageSync('token', decodeURIComponent(options.token));
			uni.setStorageSync('payPrice', options.orderPayPrice);
			uni.setStorageSync('baseUrl', options.baseUrl);
			this.getInitInfo();
			this.checkMallType();
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
					background: url(/static/img/ticket.png) no-repeat;
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
					justify-content: center;
					align-items: center;
					.switchBtn{
						margin-top: -10upx;
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
