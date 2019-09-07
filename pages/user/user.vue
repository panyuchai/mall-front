<template>
    <view class="content">
        <!-- <view class="btn-row">
            <button v-if="!hasLogin" type="primary" class="primary" @tap="bindLogin">登录</button>
            <button v-if="hasLogin" type="default" @tap="bindLogout">退出登录</button>
        </view> -->
		<view class="user-section">
			<view class="user-info-box">
				<image class="bg" src="/static/img/user-bg.png" mode="scaleToFill"></image>
				<view class="portrait-box">
					<image class="portrait" :src="userInfo && userInfo.customerImage||'/static/img/missing-face.png'" mode="aspectFill"></image>
				</view>
				<view class="info-box" @tap="navTo('#')">
					<text class="username">{{userInfo && userInfo.customerName || '游客'}}</text>
					<text class="userphone">{{userInfo && userInfo.mobilephone || ''}}</text>
				</view>
			</view>
			<view class="user-info-setting" @tap="navTo('/pages/accountManage/accountManage')">
				<text class="icon-setting iconfont icon-shezhi"></text>
				<text>账号管理</text>
			</view>
			<!-- <view class="vip-card-box">
				<image class="card-bg" src="/static/vip-card-bg.png" mode=""></image>
				<view class="b-btn">
					立即开通
				</view>
				<view class="tit">
					<text class="yticon icon-iLinkapp-"></text>
					DCloud会员
				</view>
				<text class="e-m">DCloud Union</text>
				<text class="e-b">开通会员开发无bug 一测就上线</text>
			</view> -->
		</view>
		
		<!-- <view> -->
			<!-- <image class="arc" src="/static/arc.png"></image> -->
			
			<!-- 订单 -->
			<view class="order-section">
				<view class="order-item" @tap="navTo('/pages/order/order?state=0')" hover-class="common-hover"  :hover-stay-time="50">
					<view class="icon">
						<text class="iconfont icon-icon iconfont-all"></text>
					</view>
					<view class="name">全部订单</view>
				</view>
				<view class="order-item" @tap="navTo('/pages/order/order?state=1')"  hover-class="common-hover" :hover-stay-time="50">
					<view class="icon">
						<text class="iconfont icon-tianchongxing-"><tui-badge v-if="toPayNum" class="badge" type="danger" size="small">{{toPayNum}}</tui-badge></text>
					</view>
					<view class="name">待付款</view>
				</view>
				<view class="order-item" @tap="navTo('/pages/order/order?state=2')" hover-class="common-hover"  :hover-stay-time="50">
					<view class="icon">
						<view class="iconfont icon-che-tianchong iconfont-transport"><tui-badge v-if="toReceivedNum" class="badge" type="danger" size="small">{{toReceivedNum}}</tui-badge></view>
					</view>
					<view class="name">待收货</view>
				</view>
				<view class="order-item" @tap="navTo('/pages/order/order?state=3')" hover-class="common-hover"  :hover-stay-time="50">
					<view class="icon">
						<text class="iconfont icon-dingdanwancheng iconfont-finished"></text>
					</view>
					<view class="name">已完成</view>
				</view>
				<view class="order-item" @tap="navTo('/pages/order/order?state=4')" hover-class="common-hover"  :hover-stay-time="50">
					<view class="icon">
						<text class="iconfont icon-shouhou iconfont-service"></text>
					</view>
					<view class="name">售后</view>
				</view>
			</view>
			<!-- 列表 -->
			<view class="list-section">
				<view class="list-cell" @tap="navTo('/pages/address/address')">
					<view class="cell-tit">
						地址管理
					</view>
					<text class="iconfont icon-arrowRight icon-arrow"></text>
				</view>
				<view class="list-cell">
					<view class="cell-tit">
						联系客服
					</view>
					<text class="iconfont icon-arrowRight icon-arrow"></text>
				</view>
			</view>
		<!-- </view> -->
		
    </view>
</template>

<script>
	import { setStore, getStore, removeStore} from '../../utils/store.js'
	import tuiBadge from "@/components/badge/badge"
    import {
        mapState,
        mapMutations
    } from 'vuex'

    export default {
		components: {
			tuiBadge,
		},
		data() {
			return {
				toPayNum: 0,
				toReceivedNum: 0,
			}
		},
        computed: {
            ...mapState("common", ['hasLogin', 'userInfo', 'baseInfo'])
        },
        methods: {
            // ...mapMutations('common', ['SET_USERIFNO']),
            bindLogin() {
                uni.navigateTo({
                    url: '../login/login',
                });
            },
            // bindLogout() {
            //     this.logout();
            //     /**
            //      * 如果需要强制登录跳转回登录页面
            //      */
            //     if (this.forcedLogin) {
            //         uni.reLaunch({
            //             url: '../login/login',
            //         });
            //     }
            // }
			navTo(url){
				if(!this.hasLogin){
					url = '/pages/login/login';
				}
				uni.navigateTo({  
					url
				})  
			},
			
			// userInitData(){
			// 	this.$http.post('/mall/app/account/info')
			// 	.then( res => {
			// 		console.log(res);
			// 	})
			// 	.catch( err => {
			// 		console.log('user.vue-- info接口调用错误');
			// 	})
			// 	
			// },
			initPayNum(){
				this.$http.post('/mall/app/order/count', {
					...this.baseInfo,
					accountId: this.userInfo && this.userInfo.accountId,
					orderState: [0]
				})
				.then( res => {
					if(res.code == 0){
						this.toPayNum=res.result;
					}
				})
				.catch( err => {
					console.log(err);
				})
			},
			initToReceivedNum(){
				this.$http.post('/mall/app/order/count', {
					...this.baseInfo,
					accountId: this.userInfo && this.userInfo.accountId,
					orderState: [1, 2]
				})
				.then( res => {
					if(res.code == 0){
						this.toReceivedNum=res.result;
					}
				})
				.catch( err => {
					console.log(err);
				})
			}
        },
		onLoad: function(){
			// this.userInitData();
			this.initPayNum();
			this.initToReceivedNum();
		}
    }
</script>

<style lang="scss">
	page{
		background: #F8F8F8;
		padding-bottom: 80upx;
	}
	%flex-center {
	 display:flex;
	 flex-direction: column;
	 justify-content: center;
	 align-items: center;
	}
	%section {
	  display:flex;
	  justify-content: space-around;
	  align-content: center;
	  background: #fff;
	}
	
	.user-section{
		position: relative;
	}
	.user-info-box{
		position:relative;
		height: 176upx;
		display:flex;
		align-items:center;
		position:relative;
		.bg{
			position:absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
		}
		.portrait-box{
			width: 114upx;
			height: 114upx;
			border-radius: 50%;
			overflow: hidden;
			margin-left: 40upx;
			position: relative;
			z-index: 2;
			.portrait{
				border-radius: 50%;
				width: 114upx;
				height: 114upx;
			}
		}
		.info-box{
			position: relative;
			z-index: 2;
			display: flex;
			flex-direction: column;
			margin-left: 25upx;
			font-size: 28upx;
			color: #fff;
			line-height: 40upx;
			.username{
				font-size: 30upx;
			}
		}
	}
	.user-info-setting{
		position: absolute;
		z-index: 9;
		top: 20upx;
		right: 25upx;
		padding: 15upx;
		font-size: 24upx;
		color: #861E17;
		vertical-align: middle;
		.icon-setting{
			padding-right: 8upx;
			
		}
	}
	
	.order-section{
		@extend %section;
		margin-top: 25upx;
		.order-item{
			@extend %flex-center;
			width: 120upx;
			height: 120upx;
			.icon{
				width: 100upx;
				height: 60upx;
				overflow: hidden;
				display: flex;
				align-items: center;
				justify-content: space-around;
				position: relative;
				.iconfont{
					font-size: 48upx;
					color: #DCA754;
					.badge{
						position: absolute;
						top: 0;
						left: 8upx;
					}
					&.iconfont-all{
						font-size: 42upx;
					}
					&.iconfont-transport{
						font-size: 50upx;
						
						
					}
					&.iconfont-finished{
						font-size: 54upx;
					}
					&.iconfont-service{
						font-size: 45upx;
					}
				}
			}
			.name{
				font-size: 24upx;
				color: #828282;
				max-width: 100%;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
	}
	.list-section{
		padding-top: 30upx;
		.list-cell{
			margin-top: 30upx;
			background-color: #fff;
			position: relative;
			display: flex;
			align-items: center;
			padding: 26upx 30upx 26upx 40upx;
			.cell-tit{
				font-size: 24upx;
				color: #828282;
				line-height: 28upx;
			}
			.icon-arrow{
				position: absolute;
				top: 50%;
				right: 20upx;
				color: #C6C6C6;
				font-weight: bold;
				transform: translateY(-50%);
			}
		}
	}
</style>
