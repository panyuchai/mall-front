<template>
    <view class="content">
		<view class="logo">
			<image class="img" mode="widthFix" :src="mallLogo"></image>
		</view>
        <view class="oauth-row" v-if="showOauthBtn">
			<view class="oauth-btn">
				<!-- <button class="oauth-btn" type="primary">微信登陆</button> -->
				<button class="oauth-btn" type="primary" open-type="getUserInfo" @getuserinfo="onGotUserInfo">微信登陆</button>
			</view>
        </view>
		<view class="web-row"  v-if="isPhoneLogin">
			<view class="input-group">
			    <view class="input-row">
			        <m-input class="m-input" type="number" clearable focus v-model="phoneData.phone" placeholder="输入手机号"></m-input>
			    </view>
			    <view class="input-row">
			        <m-input class="m-input input-code" type="text" v-model="phoneData.code" placeholder="输入验证码"></m-input>
					<button class="btn-code" type="primary" @tap="sendCode" v-if="!timeTick">发送验证码</button>
					<button class="btn-code" type="primary" v-if="timeTick">剩余{{countdown}}秒</button>
			    </view>
			</view>
			<view class="btn-row">
			    <button type="primary" class="web-btn" @tap="handlePhoneLogin">登录</button>
			</view>
		</view>
		<view class="web-row"  v-if="isPasswordLogin">
			<view class="input-group">
			    <view class="input-row">
			        <m-input class="m-input" type="number" clearable focus v-model="passwordData.loginName" placeholder="输入手机号"></m-input>
			    </view>
			    <view class="input-row">
			        <m-input class="m-input" type="text" v-model="passwordData.password" placeholder="请输入密码"></m-input>
			    </view>
			</view>
			<view class="btn-row">
			    <button type="primary" class="web-btn" @tap="handlePasswordLogin">登录</button>
			</view>
		</view>
    </view>
</template>

<script>
    // import service from '../../service.js';
    import {
        mapState,
        mapMutations
    } from 'vuex'
	import { setStore, getStore, removeStore} from '../../utils/store.js'
	import { isvalidatemobile, validatenull } from '../../utils/validate.js'
    import mInput from '../../components/m-input.vue'

    export default {
        components: {
            mInput
        },
        data() {
            return {
                providerList: [],
                hasProvider: false,
				phoneData: {
					phone: '',
					code: ''
				},
                passwordData: {
					loginName: '',
					password: ''
				},
				isMiniprogram: false,
				isWx: false,
				isWebWx: false,
				isPhoneLogin: false,
				isPasswordLogin: false,
				wxLoginData: {},
				timeTick: false,
				countdown: 60
            }
        },
        computed: {
			...mapState("common", ['mallDomain', 'mallType', 'userInfo', 'baseInfo', 'mallLogo']),
			showOauthBtn() {
				return this.isMiniprogram
			}
		},
        methods: {
            ...mapMutations('common', ['SET_TOKEN', 'SET_HASLOGIN', 'login', 'SET_USERIFNO', 'SET_BASEINFO']),
			handlePhoneLogin(){
				if(this.isWx){
					this.bindPhoneLogin();
				}else if(this.isWebWx){
					this.wxPhoneLogin();
				}else{
					this.phoneLogin();
				}
			},
			handlePasswordLogin(){
				if(this.isWx){
					this.bindPasswordLogin();
				}else if(this.isWebWx){
					this.wxPasswordLogin();
				}else{
					this.passwordLogin();
				}
			},
            initProvider() {
                // const filters = ['weixin', 'qq', 'sinaweibo'];
                // uni.getProvider({
                //     service: 'oauth',
                //     success: (res) => {
                //         if (res.provider && res.provider.length) {
                //             for (let i = 0; i < res.provider.length; i++) {
                //                 if (~filters.indexOf(res.provider[i])) {
                //                     this.providerList.push({
                //                         value: res.provider[i],
                //                         image: '../../static/img/' + res.provider[i] + '.png'
                //                     });
                //                 }
                //             }
                //             this.hasProvider = true;
                //         }
                //     },
                //     fail: (err) => {
                //         console.error('获取服务供应商失败：' + JSON.stringify(err));
                //     }
                // });
				
				// uni.getSetting({
				// 	success(res) {
				// 		if (res.authSetting['scope.userInfo']) {
				// 			// 已经授权，可以直接调用 getUserInfo 获取头像昵称
				// 			uni.getUserInfo({
				// 				success: function(res) {
				// 					console.log(res.userInfo)
				// 				}
				// 			})
				// 		}
				// 	}
				// })
				
				// uni.getProvider({
				//     service: 'oauth',
				//     success: (res) => {
				//         // console.log(res.provider)
				//         if (~res.provider.indexOf('weixin')) {
				//             uni.login({
				//                 provider: 'weixin',
				//                 success: (loginRes) => {
				//                     // console.log(JSON.stringify(loginRes.code));
				// 					this.wxInitData.jsCode=loginRes.code;
				// 					// console.log(this.wxInitData)
				// 					this.$http.post('/mall/app/login/mall/wxapp', this.wxInitData).then(res => {
				// 						console.log(res);
				// 					}).catch(err => {
				// 						console.log(err);
				// 					});
				// 					
				// 					uni.getUserInfo({  
				// 					  provider: 'weixin',
				// 					  success: (infoRes) => {
				// 						console.log(infoRes);
				// 						let {rawData, signature, encryptedData, iv} = infoRes;
				// 						this.wxLoginData.rawData=rawData;
				// 						this.wxLoginData.signature=signature;
				// 						this.wxLoginData.encryptedData=encryptedData;
				// 						this.wxLoginData.iv=iv;
				// 						this.$http.post('/mall/app/login/mall/wxapp/unionid', this.wxLoginData).then(res => {
				// 							console.log(res);
				// 						}).catch(err => {
				// 							console.log(err)
				// 						});
				// 					  },
				// 					  fail: function (err){
				// 						  console.log(err);
				// 					  }
				// 					});
				// 					
				// 					// this.$http.post('/app/login/mall/wxapp/unionid', this.wxData).then(res => {
				// 					// 	console.log(res);
				// 					// }).catch(err => {
				// 					// 	console.log(err)
				// 					// });
				//                 }
				//             });
				// 			this.hasProvider = true;
				//         }
				//     }
				// });
            },
			
      //       oauth(value) {
      //           uni.login({
      //               provider: value,
      //               success: (res) => {
						// console.log(res)
      //                   uni.getUserInfo({
      //                       provider: value,
      //                       success: (infoRes) => {
      //                           /**
      //                            * 实际开发中，获取用户信息后，需要将信息上报至服务端。
      //                            * 服务端可以用 userInfo.openId 作为用户的唯一标识新增或绑定用户信息。
      //                            */
						// 		console.log(111)
      //                           this.toMain(infoRes.userInfo.nickName);
      //                       }
      //                   });
      //               },
      //               fail: (err) => {
      //                   console.error('授权登录失败：' + JSON.stringify(err));
      //               }
      //           });
      //       },
			timeTicking(){
				this.countdown=60;
				let that = this;
				let timer = setInterval(function(){
					that.countdown--;
					if(that.countdown == 0){
						clearInterval(timer);
						that.timeTick=false;
					}
				}, 1000)
			},
			sendCode(){
				if(!isvalidatemobile(this.phoneData.phone)[0]){
					this.$http.post('/mall/app/login/mall/verifyCode', {
						...this.phoneData,
						mallDomain: this.mallDomain
					})
					.then( res => {
						// console.log(res);
						if(res.code == 0){
							uni.showToast({
								icon: 'none',
								title: res.result.content,
							});
							this.timeTick=true;
							this.timeTicking();
						}else{
							uni.showToast({
								icon: 'none',
								title: '验证码发送失败',
							});
						}
					})
					.catch( err => {
						console.log("发送验证码错误"+err)
					})
				}else{
					uni.showToast({
						icon: 'none',
						title: isvalidatemobile(this.phoneData.phone)[1],
					});
				}
			},
			phoneLogin(){
				if(!validatenull(this.phoneData.code) && !isvalidatemobile(this.phoneData.phone)[0]){
					this.$http.post('/mall/app/login/mall/h5', {
						mallDomain: this.mallDomain,
						...this.phoneData
					})
					.then( res => {
						// console.log(res)
						if(res.result.isSuccess){
							this.SET_HASLOGIN(true);
							this.SET_TOKEN(res.result.token);
							this.$http.setConfig((config) => {
								// config.header['Authorization'] = 'Bearer ' + getStore({ name: 'token' });
								config.header['Authorization'] = 'Bearer ' + uni.getStorageSync('token');
								return config;
							});
							this.setUserInfo();
							uni.showToast({
								icon: 'none',
								title: '登陆成功',
							});
							setTimeout(function() {
								uni.navigateBack({
								    delta: 1
								});
							}, 1000);
						}else{
							console.log("login-- h5登录失败");
							if(res.result.code == '0011'){
								uni.showToast({
									icon: 'none',
									title: '验证码不正确',
								});
								this.phoneData.code='';
							}else if(res.result.code == '0012'){
								uni.showToast({
									icon: 'none',
									title: '用户不存在'
								})
							}
						}
					})
					.catch( err => {
						console.log("login-- h5登录错误");
					})
				}else{
					uni.showToast({
						icon: 'none',
						title: '信息填写有误',
					});
				}
			},
			passwordLogin(){
				if(!validatenull(this.passwordData.loginName) && !validatenull(this.passwordData.password)){
					this.$http.post('/mall/app/login/mall/h5', {
						mallDomain: this.mallDomain,
						...this.passwordData
					})
					.then( res => {
						if(res.result.isSuccess){
							this.SET_HASLOGIN(true);
							this.SET_TOKEN(res.result.token);
							this.$http.setConfig((config) => {
								// config.header['Authorization'] = 'Bearer ' + getStore({ name: 'token' });
								config.header['Authorization'] = 'Bearer ' + uni.getStorageSync('token');
								return config;
							});
							this.setUserInfo();
							uni.showToast({
								icon: 'none',
								title: '登陆成功',
							});
							setTimeout(function() {
								uni.navigateBack({
								    delta: 1
								});
							}, 1000);
						}else{
							console.log("login-- h5登录失败");
							if(res.result.code == '0010'){
								uni.showToast({
									icon: 'none',
									title: '账户密码错误',
								});
								this.passwordData.password='';
							}else if(res.result.code == '0012'){
								uni.showToast({
									icon: 'none',
									title: '用户不存在'
								})
							}
						}
					})
					.catch( err => {
						console.log("login-- h5登录错误");
					})
				}else{
					uni.showToast({
						icon: 'none',
						title: '信息填写有误',
					});
				}
			},
			bindPhoneLogin(){
				// console.log(this.phoneData);
				if(!validatenull(this.phoneData.code) && !isvalidatemobile(this.phoneData.phone)[0]){
					this.$http.post('/mall/app/login/mall/wxapp/userinfo', {
						mallDomain: this.mallDomain,
						...this.phoneData
					})
					.then( res => {
						if(res.result.isSuccess){
							this.SET_HASLOGIN(true);
							this.SET_TOKEN(res.result.token);
							this.$http.setConfig((config) => {
								// config.header['Authorization'] = 'Bearer ' + getStore({ name: 'token' });
								config.header['Authorization'] = 'Bearer ' + uni.getStorageSync('token');
								return config;
							});
							this.setUserInfo();
							uni.showToast({
								icon: 'none',
								title: '登陆成功',
							});
							setTimeout(function() {
								uni.navigateBack({
								    delta: 1
								});
							}, 1000);
						}else{
							console.log("login-- userinfo登录失败");
							if(res.result.code == '0011'){
								uni.showToast({
									icon: 'none',
									title: '验证码不正确',
								});
								this.phoneData.code='';
							}
						}
					})
					.catch( err => {
						console.log("login-- userinfo登录错误");
					})
				}else{
					uni.showToast({
						icon: 'none',
						title: '信息填写有误',
					});
				}
			},
			bindPasswordLogin(){
				if(!validatenull(this.passwordData.loginName) && !validatenull(this.passwordData.password)){
					this.$http.post('/mall/app/login/mall/wxapp/userinfo', {
						mallDomain: this.mallDomain,
						...this.passwordData
					})
					.then( res => {
						if(res.result.isSuccess){
							this.SET_HASLOGIN(true);
							this.SET_TOKEN(res.result.token);
							this.$http.setConfig((config) => {
								// config.header['Authorization'] = 'Bearer ' + getStore({ name: 'token' });
								config.header['Authorization'] = 'Bearer ' + uni.getStorageSync('token');
								return config;
							});
							this.setUserInfo();
							uni.showToast({
								icon: 'none',
								title: '登陆成功',
							});
							setTimeout(function() {
								uni.navigateBack({
								    delta: 1
								});
							}, 1000);
						}else{
							console.log("login-- userinfo登录失败");
							if(res.result.code == '0010'){
								uni.showToast({
									icon: 'none',
									title: '账户密码错误',
								});
								this.passwordData.password='';
							}
						}
					})
					.catch( err => {
						console.log("login-- userinfo登录错误");
					})
				}else{
					uni.showToast({
						icon: 'none',
						title: '信息填写有误',
					});
				}
			},
            // toMain(userName) {
            //     this.login(userName);
            //     /**
            //      * 强制登录时使用reLaunch方式跳转过来
            //      * 返回首页也使用reLaunch方式
            //      */
            //     if (this.forcedLogin) {
            //         uni.reLaunch({
            //             url: '../main/main',
            //         });
            //     } else {
            //         uni.navigateBack();
            //     }
            // },
			wxPhoneLogin(){
				if(!validatenull(this.phoneData.code) && !isvalidatemobile(this.phoneData.phone)[0]){
					this.$http.post('/mall/app/login/mall/wxweb/userinfo', {
						openid: uni.getStorageSync('openid'),
						mallDomain: this.mallDomain,
						...this.phoneData
					})
					.then( res => {
						if(res.result.isSuccess){
							this.SET_HASLOGIN(true);
							this.SET_TOKEN(res.result.token);
							this.$http.setConfig((config) => {
								// config.header['Authorization'] = 'Bearer ' + getStore({ name: 'token' });
								config.header['Authorization'] = 'Bearer ' + uni.getStorageSync('token');
								return config;
							});
							this.setUserInfo();
							uni.showToast({
								icon: 'none',
								title: '登陆成功',
							});
							setTimeout(function() {
								uni.navigateBack({
								    delta: 1
								});
							}, 1000);
						}else{
							console.log("login-- wxweb/userinfo登录失败");
							if(res.result.code == '0011'){
								uni.showToast({
									icon: 'none',
									title: '验证码不正确',
								});
								this.phoneData.code='';
							}
						}
					})
					.catch( err => {
						console.log("login-- wxweb/userinfo登录错误");
					})
				}else{
					uni.showToast({
						icon: 'none',
						title: '信息填写有误',
					});
				}
			},
			wxPasswordLogin(){
				if(!validatenull(this.phoneData.loginName) && !validatenull(this.passwordData.password)){
					this.$http.post('/mall/app/login/mall/wxweb/userinfo', {
						openid: uni.getStorageSync('openid'),
						mallDomain: this.mallDomain,
						...this.passwordData
					})
					.then( res => {
						if(res.result.isSuccess){
							this.SET_HASLOGIN(true);
							this.SET_TOKEN(res.result.token);
							this.$http.setConfig((config) => {
								// config.header['Authorization'] = 'Bearer ' + getStore({ name: 'token' });
								config.header['Authorization'] = 'Bearer ' + uni.getStorageSync('token');
								return config;
							});
							this.setUserInfo();
							uni.showToast({
								icon: 'none',
								title: '登陆成功',
							});
							setTimeout(function() {
								uni.navigateBack({
								    delta: 1
								});
							}, 1000);
						}else{
							console.log("login-- wxweb/userinfo登录失败");
							if(res.result.code == '0010'){
								uni.showToast({
									icon: 'none',
									title: '账户密码错误',
								});
								this.passwordData.password='';
							}
						}
					})
					.catch( err => {
						console.log("login-- wxweb/userinfo登录错误");
					})
				}else{
					uni.showToast({
						icon: 'none',
						title: '信息填写有误',
					});
				}
			},
			wxLogin(){
				var othis = this;
				uni.getSetting({
				    success (res){
					    if (res.authSetting['scope.userInfo']) {
							// 已经授权，可以直接调用 getUserInfo 获取头像昵称
							uni.getUserInfo({
								success: (res) => {
									othis.wxLoginAjax(res);
								}
							})
					    }
				    }
				})
				// this.onGotUserInfo();
				
				// uni.login({
				//   provider: 'weixin',
				//   success: (res) => {
				//     if(res.code){
				// 		// this.SET_TOKEN(res.code);
				// 		this.$http.post('/mall/app/login/mall/wxapp', {
				// 			mallDomain: this.baseInfo.mallDomain,
				// 			jsCode: res.code
				// 		})
				// 		.then( resMsg => {
				// 			// console.log(resMsg)
				// 			if(resMsg.code == 0){
				// 				// let othis = this;
				// 				if(resMsg.result.isSuccess){
				// 					uni.reLaunch({
				// 					    url: 'pages/index/index'
				// 					});
				// 				}else{
				// 					uni.getSetting({
				// 						success (res){
				// 							console.log(res)
				// 							if (res.authSetting['scope.userInfo']) {
				// 								// 已经授权，可以直接调用 getUserInfo 获取头像昵称
				// 								uni.getUserInfo({
				// 									success: (res) => {
				// 										// this.login(res.userInfo);
				// 									}
				// 								})
				// 							}
				// 						}
				// 					})
				// 				}
				// 			}else{
				// 				console.log("login.vue--wxapp 接口调用失败")
				// 			}
				// 		})
				// 		.catch( errMsg => {
				// 			console.log("login.vue--wxapp 接口调用出错")
				// 		})
				// 	}else{
				// 		console.log("login.vue--获取code失败")
				// 	}
				//   }
				// });
			},
			onGotUserInfo(e){
				if(e.detail.userInfo){
					this.wxLoginAjax(e.detail);
				}else{
					console.log("login.vue-- 用户点击了拒绝授权");
				}
			},
			wxLoginAjax(data){
				let {rawData, signature, encryptedData, iv} = data;
				this.wxLoginData.rawData=rawData;
				this.wxLoginData.signature=signature;
				this.wxLoginData.encryptedData=encryptedData;
				this.wxLoginData.iv=iv;
				
				this.$http.post('/mall/app/login/mall/wxapp/unionid', {
					...this.wxLoginData,
					mallDomain: this.mallDomain
				})
				.then(res => {
					if(res.result.isSuccess){
						uni.getUserInfo({
							success: (res) => {
								// this.SET_USERIFNO(res.userInfo);
								this.setUserInfo();
							}
						})
						this.SET_HASLOGIN(true);
						this.SET_TOKEN(res.result.token);
						this.$http.setConfig((config) => {
							// config.header['Authorization'] = 'Bearer ' + getStore({ name: 'token' }).token;
							config.header['Authorization'] = 'Bearer ' + uni.getStorageSync('token');
							return config;
						});
						
						uni.navigateBack({
						    delta: 1
						});
					}else{
						console.log("login.vue--unionid 获取token失败");
						if(res.result.code == '0020'){
							this.isMiniprogram=false;
							this.isPhoneLogin=true;
						}else if(res.result.code == '0021'){
							this.isMiniprogram=false;
							this.isPasswordLogin=true;
						}
					}
				})
				.catch(err => {
					console.log("login.vue--unionid 接口调用出错"+ err);
				});
			},
			defaultLogin(){
				if(this.isMiniprogram){
					this.wxLogin();
				}
			},
			checkEnvironment(){
				if(navigator && navigator.userAgent){
					// 非小程序
					this.browserRedirect();
				}else{
					// 小程序
					this.isMiniprogram=true;
					this.isWx=true;
				};
			},
			browserRedirect() {
				var sUserAgent = navigator.userAgent.toLowerCase();
				// var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
				// var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
				// var bIsMidp = sUserAgent.match(/midp/i) == "midp";
				// var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
				// var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
				// var bIsAndroid = sUserAgent.match(/android/i) == "android";
				// var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
				// var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
				var bIsWeChat = sUserAgent.match(/MicroMessenger/i) == "micromessenger";//微信端
				if (bIsWeChat) {
					this.isWebWx=true;
					switch(this.mallType){
						case 1:
							this.isPhoneLogin=true;
							break;
						case 3:
							this.isPasswordLogin=true;
							break;
						case 4:
							this.isPhoneLogin=true;
							break;
						default:
							console.log("login.vue--未标记商城类型");
					}
				}else {
					switch(this.mallType){
						case 1:
							this.isPhoneLogin=true;
							break;
						case 3:
							this.isPasswordLogin=true;
							break;
						case 4:
							this.isPhoneLogin=true;
							break;
						default:
							console.log("login.vue--未标记商城类型");
					}
				}
			},
			setUserInfo(){
				this.$http.post('/mall/app/account/info')
				.then( res => {
					if(res.code == 0){
						if(res.result){
							let mobilephone = res.result.mobilephone;
							let loginname = res.result.loginname;
							let accountId = res.result.id;
							let {customerName, wechatName, customerSex, customerBirthday, customerImage, customerId} = res.result.customer;
							this.SET_USERIFNO({customerName, wechatName, customerSex, customerBirthday,  customerImage, customerId});
							this.SET_USERIFNO({
								...this.userInfo,
								mobilephone: mobilephone,
								loginname: loginname,
								accountId: accountId
							});
						}
					}else{
						console.log('login.vue-- info接口调用失败');
					}
				})
				.catch( err => {
					console.log('login.vue-- info接口调用错误');
				})
			}
			
        },
        onReady() {
            this.initProvider();
			this.checkEnvironment();
			this.defaultLogin();
        },
    }
</script>

<style lang="scss">
	.logo{
		padding: 20% 20upx 50upx 20upx;
		display: flex;
		justify-content: center;
		align-items: center;
		.img{
			width: 200upx;
		}
	}
	
	.oauth-row{
		.oauth-btn{
			padding: 0 20upx;
			height: 106upx;
			button{
				width: 100%;
				background: #07B804;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 32upx;
				color: #fff;
				margin: 50upx 0 0 0;
			}
		}
	}
	
	.web-row{
		.input-group{
			padding: 0 20upx;
			.input-row{
				margin-top: 30upx;
				width: 100%;
				display: flex;
				justify-content: space-between;
				.m-input{
					border: 1px solid #E6E6E6;
					padding: 20upx 20upx 20upx 30upx;
					line-height: 66upx;
					height: 106upx;
					width: 100%;
					box-sizing: border-box;
					font-size: 28upx;
					color: #6F6F6F;
					border-radius: 8upx;
					&.input-code{
						margin-right: 20upx;
					}
				}
				.btn-code{
					width: 32%;
					font-size: 32upx;
					color: #ffffff;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 8upx;
				}
			}
		}
		.btn-row{
			padding: 0 20upx;
			.web-btn{
				margin: 60upx 0 0 0;
				width: 100%;
				height: 106upx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 32upx;
			}
		}
	}
	/*  #ifdef  MP-WEIXIN  */
	.web-row{
		.input-group{
			.input-row{
				.btn-code{
					width: 38%;
					font-size: 28upx!important;
				}
			}
		}
	}
	/*  #endif  */
	
</style>
