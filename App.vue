<script>
	import { setStore, getStore, removeStore } from './utils/store.js'
	import { mapState, mapMutations } from 'vuex';
	import { test } from './api/api.js'
	export default {
		computed: {
			...mapState("common", ['uniCode', 'mallDomain', 'baseInfo', 'hasLogin', 'firstLoad'])
		},
		methods: {
			...mapMutations("common", ['SET_BASEINFO', 'SET_USERIFNO', 'SET_UNICODE', 'SET_HASLOGIN', 'SET_TOKEN', 'SET_MALLTYPE', 'SET_MALLID']),
			checkMallType(){
				this.$http.post('/mall/app/login/mall/shopmall/type', {
					mallDomain: this.mallDomain
				})
				.then( res => {
					// console.log(res);
					if(res.code == 0){
						this.SET_BASEINFO({
							...this.baseInfo,
							mallDomain: this.mallDomain,
							mallType: res.result.type,
							mallId: res.result.mallId
						});
						this.SET_MALLTYPE(res.result.type);
						this.SET_MALLID(res.result.mallId);
					}else{
						console.log('login--mallTaye 接口调用失败');
					}
				})
				.catch( err => {
					console.log('login--mallTaye 接口调用出错');
				})
			},
			// defaultwxWebLogin(){
			// 	alert("wxweb接口调用");
			// 	this.$http.post('/mall/app/login/mall/wxweb', {
			// 		mallDomain: this.mallDomain,
			// 	})
			// 	.then( res => {
			// 		console.log(res);
			// 	})
			// 	.catch( err => {
			// 		console.log('App.vue-- wxweb接口调用出错');
			// 	})
			// },
			initData(){
				if(getStore({ name: 'hasLogin' })){
					this.SET_HASLOGIN(getStore({ name: 'hasLogin' }));
				}
				if(getStore({ name: 'token' })){
					this.SET_TOKEN(getStore({ name: 'token' }));
				}
				if(getStore({ name: 'uniCode' })){
					this.SET_UNICODE(getStore({ name: 'uniCode' }));
				}
				if(getStore({ name: 'userInfo' })){
					this.SET_USERIFNO(getStore({ name: 'userInfo' }));
				}
			}
		},
		onLaunch: function(options) {
			this.checkMallType();
			// this.defaultwxWebLogin();
			this.initData();
			console.log('App Launch');
			// console.log(options)
			
			// var obj = wx.getLaunchOptionsSync()
			// console.log('启动小程序的路径:',obj.path)
			// console.log('启动小程序的场景值:', obj.scene)
			// console.log('启动小程序的 query 参数:', obj.query)
			// console.log('来源信息:', obj.shareTicket)
			// console.log('来源信息参数appId:', obj.referrerInfo.appId)
			// console.log('来源信息传过来的数据:', obj.referrerInfo.extraData)
			
			// console.log(navigator.userAgent.toLowerCase())
			
			let othis = this;
			function browserRedirect() {
				var sUserAgent = navigator.userAgent.toLowerCase();
				var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
				var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
				var bIsMidp = sUserAgent.match(/midp/i) == "midp";
				var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
				var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
				var bIsAndroid = sUserAgent.match(/android/i) == "android";
				var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
				var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
				var bIsWeChat = sUserAgent.match(/MicroMessenger/i) == "micromessenger";//微信端
				if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
					console.log('h5端');
					othis.SET_BASEINFO({
						...othis.baseInfo,
						scm: 'pc'
					});
				} else if(bIsWeChat) {
					console.log('wx h5端');
					othis.SET_BASEINFO({
						...othis.baseInfo,
						scm: 'h5'
					});
					if(!othis.hasLogin){
						defaultwxWebLogin();
					}
				}else {
					console.log("App.vue--非h5环境");
				}
			}
			if(navigator && navigator.userAgent){
				// 非小程序环境
				browserRedirect();
			}else{
				// 小程序环境
				// console.log(this)
				this.SET_BASEINFO({
					...this.baseInfo,
					scm: 'wechat'
				});
				if(!this.hasLogin){
					defaultWxLogin();
				}
			};
			// let othis = this;
			function defaultwxWebLogin(){
				alert(2222222)
				if (document.referrer) {
				    uni.setStorageSync('referUrl', document.referrer);
				}
				// alert(othis);
				// alert(2222)
				// alert(JSON.stringify(othis.baseInfo));
				// alert(3333)
				// window.location.href='http://192.168.1.135:8086/mall/app/login/mall/wxweb?mallDomain=yyy';
				// alert(4444)
				
				if(!othis.hasLogin){
					alert(333333)
					if(othis.firstLoad){
						alert(44444444)
						window.location.href='http://192.168.1.135:8086/mall/app/login/mall/wxweb?mallDomain=yyy';
					}
				}
				
			};
			function defaultWxLogin(){
				uni.checkSession({
					success: (res) => {
					  console.log('App.vue--uni.login登陆状态');
					  wxLogin(othis.uniCode);
					},
					fail: (err) => {
						console.log('App.vue--uni.login登陆已失效');
						uni.login({
						  provider: 'weixin',
						  success: (res) => {
							  // console.log(res);
							  othis.SET_UNICODE(res.code);
						    if(res.code){
								wxLogin(res.code);
							}else{
								console.log("App.vue--获取code失败")
							}
						  }
						});
					}
				});
				function wxLogin(code){
					test.post('/mall/app/login/mall/wxapp', {
						mallDomain: othis.mallDomain,
						jsCode: code
					})
					.then( res => {
						if(res.statusCode == 200){
							uni.removeStorageSync('sessionid');
							uni.setStorageSync('sessionid', res.header['Set-Cookie']);
							othis.$http.setConfig((config) => {
								config.header['cookie'] = uni.getStorageSync('sessionid') || '';
								return config;
							});
							if(res.data.code == 0){
								if(res.data.result.isSuccess){
									console.log('App.vue--wxapp 登陆成功');
								}else{
									console.log("App.vue--wxapp 登陆失败");
								}
							}else{
								console.log('App.vue--wxapp 接口返回data出错');
							}
						}else{
							console.log('App.vue--wxapp 接口调用失败');
						}
					})
					.catch( err => {
						console.log('App.vue--wxapp 接口调用出错' + err);
					})
				};
				
			}
			
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	}
</script>

<style>
	@import "./static/styles/iconfont.css";
	/*每个页面公共css */
	page {
		min-height: 100%;
		background-color: #ffffff;
	}

	/* #ifdef MP-BAIDU */
	page {
		width: 100%;
		height: 100%;
		display: block;
		background-color: #ffffff;
	}

	swan-template {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* 原生组件模式下需要注意组件外部样式 */
	custom-component {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* #endif */

	/* #ifdef MP-ALIPAY */
	page {
		min-height: 100vh;
	}

	/* #endif */

	/* 原生组件模式下需要注意组件外部样式 */
	/* m-input {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #efeff4;
		padding: 20upx;
	}

	.input-group {
		background-color: #ffffff;
		margin-top: 40upx;
		position: relative;
	}

	.input-group::before {
		position: absolute;
		right: 0;
		top: 0;
		left: 0;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.input-group::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.input-row {
		display: flex;
		flex-direction: row;
		position: relative;
	}

	.input-row .title {
		width: 20%;
		height: 50upx;
		min-height: 50upx;
		padding: 15upx 0;
		padding-left: 30upx;
		line-height: 50upx;
	}

	.input-row.border::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 15upx;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.btn-row {
		margin-top: 50upx;
		padding: 20upx;
	}

	button.primary {
		background-color: #0faeff;
	} */
</style>
