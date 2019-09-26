<script>
	import { setStore, getStore, removeStore } from './utils/store.js'
	import { mapState, mapMutations } from 'vuex';
	import { test } from './api/api.js'
	export default {
		computed: {
			...mapState("common", ['transferUrl', 'uniCode', 'mallDomain', 'baseInfo', 'hasLogin', 'isTransferPage'])
		},
		methods: {
			...mapMutations("common", ['SET_TRANSFERURL', 'SET_BASEINFO', 'SET_USERIFNO', 'SET_BASEINFO', 'SET_UNICODE', 'SET_TOKEN', 'SET_MALLTYPE', 'SET_MALLID', 'SET_MALLNAME', 'SET_MALLLOGO', 'SET_MALLDOMAIN', 'SET_ISTRANSFERPAGE']),
			GetQueryString(name) {
				var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
				var r = window.location.search.substr(1).match(reg);
				if (r != null) {
					return unescape(r[2]);
				}
				return null;
			},
			clearUserInfo(){
				uni.removeStorageSync('hasLogin');
				uni.removeStorageSync('token');
				uni.removeStorageSync('uniCode');
				removeStore({ name: 'userInfo' });
				removeStore({ name: 'baseInfo' });
			},
			getStorageInfo(storageMallDomain, mallDomain){
				if(storageMallDomain && storageMallDomain!==mallDomain){
					this.clearUserInfo();
				}else{
					if(uni.getStorageSync('hasLogin')){
						this.SET_HASLOGIN(uni.getStorageSync('hasLogin'));
					}
					if(uni.getStorageSync('token')){
						this.SET_TOKEN(uni.getStorageSync('token'));
					}
					if(uni.getStorageSync('uniCode')){
						this.SET_UNICODE(uni.getStorageSync('uniCode'));
					}
					let storageUserInfo = getStore({ name: 'userInfo' }),
						storageBaseInfo = getStore({ name: 'baseInfo' });
					if(storageUserInfo){
						this.SET_USERIFNO(storageUserInfo);
					}
					if(storageBaseInfo){
						this.SET_BASEINFO(storageBaseInfo);
					}
				}
				this.SET_MALLDOMAIN(mallDomain);
			},
			getMallDomain(){
				debugger;
				 // ncs.yujianli.cn
				let mallDomain = this.GetQueryString('mallDomain'),
					storageMallDomain = this.mallDomain,
					host = window.location.host;
				alert(host);
				switch(host){
					case 'localhost:8080':
						this.SET_TRANSFERURL('//192.168.1.104:8087');
						break;
					case '192.168.1.10:8888':
						this.SET_TRANSFERURL('//192.168.1.104:8087');
						break;
					default:
						this.SET_TRANSFERURL('//mall-api.yujianli.cn');
				}
				alert(this.transferUrl+'------------');
				if(!mallDomain){
					mallDomain = window.location.hostname.split('.')[0];
					this.getStorageInfo(storageMallDomain, mallDomain);
				}else{
					this.getStorageInfo(storageMallDomain, mallDomain);
				}
				
				// if(!mallDomain){
				// 	let hostName = window.location.hostname,
				// 		hostMallDomain = window.location.hostname.split('.')[0];
				// 	this.SET_TRANSFERURL(hostName);
				// 	this.SET_MALLDOMAIN(hostMallDomain);
				// }
				// if(mallDomain){
				// 	let storageMallDomain = this.mallDomain;
				// 	if(storageMallDomain && storageMallDomain!==mallDomain){
				// 		this.clearUserInfo();
				// 	}else{
				// 		if(uni.getStorageSync('hasLogin')){
				// 			this.SET_HASLOGIN(uni.getStorageSync('hasLogin'));
				// 		}
				// 		if(uni.getStorageSync('token')){
				// 			this.SET_TOKEN(uni.getStorageSync('token'));
				// 		}
				// 		if(uni.getStorageSync('uniCode')){
				// 			this.SET_UNICODE(uni.getStorageSync('uniCode'));
				// 		}
				// 		let storageUserInfo = getStore({ name: 'userInfo' }),
				// 			storageBaseInfo = getStore({ name: 'baseInfo' });
				// 		if(storageUserInfo){
				// 			this.SET_USERIFNO(storageUserInfo);
				// 		}
				// 		if(storageBaseInfo){
				// 			this.SET_BASEINFO(storageBaseInfo);
				// 		}
				// 	}
				// 	this.SET_MALLDOMAIN(mallDomain);
				// }
			},
			checkMallType(){
				this.$http.post('/mall/app/login/mall/shopmall/type', {
					mallDomain: this.mallDomain
				})
				.then( res => {
					if(res.code == 0){
						this.SET_BASEINFO({
							...this.baseInfo,
							mallDomain: this.mallDomain,
							mallType: res.result.type,
							mallId: res.result.mallId
						});
						this.SET_MALLTYPE(res.result.type);
						this.SET_MALLID(res.result.mallId);
						this.SET_MALLNAME(res.result.mallName);
						this.SET_MALLLOGO(res.result.mallLogo);
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
				// if(uni.getStorageSync('isTransferPage')){
				// 	this.SET_ISTRANSFERPAGE(uni.getStorageSync('isTransferPage'));
				// }
				// if(uni.getStorageSync('mallDomain')){
				// 	this.SET_MALLDOMAIN(uni.getStorageSync('mallDomain'));
				// }
				// 
				// alert(getStore({ name: 'hasLogin' }));
				// if(getStore({ name: 'hasLogin' })){
				// 	this.SET_HASLOGIN(getStore({ name: 'hasLogin' }));
				// }
				// if(getStore({ name: 'token' })){
				// 	this.SET_TOKEN(getStore({ name: 'token' }));
				// }
				// if(getStore({ name: 'uniCode' })){
				// 	this.SET_UNICODE(getStore({ name: 'uniCode' }));
				// }
				// if(getStore({ name: 'userInfo' })){
				// 	this.SET_USERIFNO(getStore({ name: 'userInfo' }));
				// }
				if(uni.getStorageSync('mallDomain')){
					this.SET_MALLDOMAIN(uni.getStorageSync('mallDomain'));
				}
				
			},
			browserRedirect(options) {
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
				if(bIsWeChat) {
					console.log('wx h5端');
					this.SET_BASEINFO({
						...this.baseInfo,
						scm: 'h5'
					});
					var url=window.location.host;
					if(url.indexOf('pay') == -1){
						if(!Boolean(this.hasLogin)){
							this.defaultwxWebLogin(options);
						}
					}
					// if(!Boolean(this.hasLogin)){
					// 	this.defaultwxWebLogin(options);
					// }
				}else {
					console.log('h5端');
					this.SET_BASEINFO({
						...this.baseInfo,
						scm: 'pc'
					});
					return;
				}
			},
			defaultwxWebLogin(options){
				if (document.referrer) {
				    uni.setStorageSync('referUrl', document.referrer);
				}
				let reg = /\/TransferPage\/TransferPage/ig;
				let urlPath = !(reg.test(options.path));				
				let isTransferPage = uni.getStorageSync('isTransferPage');
				if(isTransferPage === ''){
					isTransferPage = true;
				}
				if(urlPath && isTransferPage){
					
					window.location.href=this.transferUrl + '/mall/app/login/mall/wxweb?mallDomain='+this.mallDomain; // +'&redirectUrl='+this.transferUrl
				}
				if(isTransferPage === false){
					uni.removeStorageSync('isTransferPage');
				}
				// alert(this.isTransferPage)
				// if(this.isTransferPage){
				// 	window.location.href=this.baseUrl + '/mall/app/login/mall/wxweb?mallDomain='+this.mallDomain+'&redirectUrl=http://192.168.1.123:8080'; //+'&redirectUrl=http://192.168.1.23:8080'
				// 	debugger;
				// }
			},
			defaultWxLogin(){
				uni.checkSession({
					success: (res) => {
					  console.log('App.vue--uni.login登陆状态');
					  this.wxLogin(this.uniCode);
					},
					fail: (err) => {
						console.log('App.vue--uni.login登陆已失效');
						uni.login({
						  provider: 'weixin',
						  success: (res) => {
							  // console.log(res);
							  this.SET_UNICODE(res.code);
						    if(res.code){
								this.wxLogin(res.code);
							}else{
								console.log("App.vue--获取code失败")
							}
						  }
						});
					}
				});
				
				
			},
			wxLogin(code){
				test.post('/mall/app/login/mall/wxapp', {
					mallDomain: this.mallDomain,
					jsCode: code
				})
				.then( res => {
					if(res.statusCode == 200){
						uni.removeStorageSync('sessionid');
						uni.setStorageSync('sessionid', res.header['Set-Cookie']);
						this.$http.setConfig((config) => {
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
			},
			checkEnvironment(options){
				if(navigator && navigator.userAgent){
					// 非小程序环境
					this.browserRedirect(options);
				}else{
					// 小程序环境
					// console.log(this)
					this.SET_BASEINFO({
						...this.baseInfo,
						scm: 'wechat'
					});
					if(!Boolean(this.hasLogin)){
						this.defaultWxLogin();
					}
				};
			}
		},
		onLaunch: function(options) {
			debugger;
			// alert(JSON.stringify(options)+'-------------------------');
			this.initData();
			this.getMallDomain();
			this.checkMallType();

			// let urlPage = options
			// var obj = wx.getLaunchOptionsSync()
			// console.log('启动小程序的路径:',obj.path)
			// console.log('启动小程序的场景值:', obj.scene)
			// console.log('启动小程序的 query 参数:', obj.query)
			// console.log('来源信息:', obj.shareTicket)
			// console.log('来源信息参数appId:', obj.referrerInfo.appId)
			// console.log('来源信息传过来的数据:', obj.referrerInfo.extraData)
			
			// console.log(navigator.userAgent.toLowerCase())
			this.checkEnvironment(options);
			
			
			// let othis = this;
			// function browserRedirect() {
			// 	var sUserAgent = navigator.userAgent.toLowerCase();
			// 	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
			// 	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
			// 	var bIsMidp = sUserAgent.match(/midp/i) == "midp";
			// 	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
			// 	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
			// 	var bIsAndroid = sUserAgent.match(/android/i) == "android";
			// 	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
			// 	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
			// 	var bIsWeChat = sUserAgent.match(/MicroMessenger/i) == "micromessenger";//微信端
			// 	if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
			// 		console.log('h5端');
			// 		othis.SET_BASEINFO({
			// 			...othis.baseInfo,
			// 			scm: 'pc'
			// 		});
			// 	} else if(bIsWeChat) {
			// 		console.log('wx h5端');
			// 		othis.SET_BASEINFO({
			// 			...othis.baseInfo,
			// 			scm: 'h5'
			// 		});
			// 		if(!othis.hasLogin){
			// 			defaultwxWebLogin();
			// 		}
			// 	}else {
			// 		console.log("App.vue--非h5环境");
			// 	}
			// }
			// function defaultwxWebLogin(){
			// 	alert('微信h5环境');
			// 	if (document.referrer) {
			// 	    uni.setStorageSync('referUrl', document.referrer);
			// 	}
			// 	// alert(othis);
			// 	// alert(2222)
			// 	// alert(JSON.stringify(othis.baseInfo));
			// 	// alert(3333)
			// 	// window.location.href='http://192.168.1.135:8086/mall/app/login/mall/wxweb?mallDomain=yyy';
			// 	// alert(4444)
			// 	// alert(JSON.parse(othis))
			// 	alert('微信h5环境------------'+options.path)
			// 	let reg = /\/TransferPage\/TransferPage/ig;
			// 	alert('路径判断---------------'+reg.test(options.path));
			// 	if(!reg.test(options.path)){
			// 		alert('静默登陆开始跳转')
			// 		window.location.href='http://192.168.1.135:8086/mall/app/login/mall/wxweb?mallDomain=yyy';
			// 	}
			// 	// if(!othis.hasLogin){
			// 	// 	alert(333333+othis.hasLogin)
			// 	// 	if(othis.firstLoad){
			// 	// 		alert(44444444+othis.firstLoad)
			// 	// 		window.location.href='http://192.168.1.135:8086/mall/app/login/mall/wxweb?mallDomain=yyy';
			// 	// 	}
			// 	// }
			// 	
			// };
			// function defaultWxLogin(){
			// 	uni.checkSession({
			// 		success: (res) => {
			// 		  console.log('App.vue--uni.login登陆状态');
			// 		  wxLogin(othis.uniCode);
			// 		},
			// 		fail: (err) => {
			// 			console.log('App.vue--uni.login登陆已失效');
			// 			uni.login({
			// 			  provider: 'weixin',
			// 			  success: (res) => {
			// 				  // console.log(res);
			// 				  othis.SET_UNICODE(res.code);
			// 			    if(res.code){
			// 					wxLogin(res.code);
			// 				}else{
			// 					console.log("App.vue--获取code失败")
			// 				}
			// 			  }
			// 			});
			// 		}
			// 	});
			// 	function wxLogin(code){
			// 		test.post('/mall/app/login/mall/wxapp', {
			// 			mallDomain: othis.mallDomain,
			// 			jsCode: code
			// 		})
			// 		.then( res => {
			// 			if(res.statusCode == 200){
			// 				uni.removeStorageSync('sessionid');
			// 				uni.setStorageSync('sessionid', res.header['Set-Cookie']);
			// 				othis.$http.setConfig((config) => {
			// 					config.header['cookie'] = uni.getStorageSync('sessionid') || '';
			// 					return config;
			// 				});
			// 				if(res.data.code == 0){
			// 					if(res.data.result.isSuccess){
			// 						console.log('App.vue--wxapp 登陆成功');
			// 					}else{
			// 						console.log("App.vue--wxapp 登陆失败");
			// 					}
			// 				}else{
			// 					console.log('App.vue--wxapp 接口返回data出错');
			// 				}
			// 			}else{
			// 				console.log('App.vue--wxapp 接口调用失败');
			// 			}
			// 		})
			// 		.catch( err => {
			// 			console.log('App.vue--wxapp 接口调用出错' + err);
			// 		})
			// 	};
			// 	
			// }
			
		},
		onShow: function(options) {
			console.log('App Show');
			// alert(options)
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
