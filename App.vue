<script>
	import { setStore, getStore, removeStore } from './utils/store.js'
	import { mapState, mapMutations } from 'vuex';
	import { test } from './api/api.js'
	export default {
		computed: {
			...mapState("common", ['transferUrl', 'baseUrl', 'uniCode', 'mallDomain', 'baseInfo', 'hasLogin', 'isTransferPage', 'userInfo'])
		},
		methods: {
			...mapMutations("common", ['SET_TRANSFERURL', 'SET_BASEURL', 'SET_PAYMENTURL', 'SET_USERIFNO', 'SET_BASEINFO', 'SET_HASLOGIN', 'SET_UNICODE', 'SET_TOKEN', 'SET_MALLTYPE', 'SET_MALLID', 'SET_MALLNAME', 'SET_MALLLOGO', 'SET_MALLDOMAIN', 'SET_ISTRANSFERPAGE']),
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
				uni.removeStorageSync('userInfo');
				uni.removeStorageSync('baseInfo');
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
				let mallDomain = this.GetQueryString('mallDomain'),
					storageMallDomain = this.mallDomain,
					host = window.location.host;
				this.SET_BASEURL(host);
				switch(host){
					case 'localhost:8080':
						this.SET_TRANSFERURL('//192.168.1.104:8087');
						this.SET_PAYMENTURL('testpay');
						break;
					case '192.168.1.10:8888':
						this.SET_TRANSFERURL('//192.168.1.104:8087');
						this.SET_PAYMENTURL('testpay');
						break;
					default:
						this.SET_TRANSFERURL('//mall-api.yujianli.cn');
						this.SET_PAYMENTURL('pay');
				}
				if(!mallDomain){
					mallDomain = window.location.hostname.split('.')[0];
					this.getStorageInfo(storageMallDomain, mallDomain);
				}else{
					this.getStorageInfo(storageMallDomain, mallDomain);
				}
			// 	if(!mallDomain){
			// 		mallDomain = window.location.hostname.split('.')[0];
			// 		// if(mallDomain.indexOf('pay') !== -1){
			// 		// 	mallDomain = ''
			// 		// }
			// 	}
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
			},
			getStorageInfo(){
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
			initData(){
				if(uni.getStorageSync('mallDomain')){
					this.SET_MALLDOMAIN(uni.getStorageSync('mallDomain'));
				}
				
			},
			browserRedirect(options) {
				var sUserAgent = navigator.userAgent.toLowerCase();
				var bIsWeChat = sUserAgent.match(/MicroMessenger/i) == "micromessenger";
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
								this.SET_HASLOGIN(true);
								this.SET_TOKEN(res.data.result.token);
								test.setConfig((config) => {
									config.header['Authorization'] = 'Bearer ' + uni.getStorageSync('token');
									return config;
								});
								this.setUserInfo();
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
					this.SET_BASEINFO({
						...this.baseInfo,
						scm: 'wechat'
					});
					if(!Boolean(this.hasLogin)){
						this.defaultWxLogin();
					}
				};
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
						console.log('App.vue-- info接口调用失败');
					}
				})
				.catch( err => {
					console.log('App.vue-- info接口调用错误');
				})
			}
		},
		onLaunch: function(options) {
			// #ifdef  H5
			this.initData();
			this.getMallDomain();
			// #endif
			// #ifdef MP
			this.getStorageInfo();
			// #endif
			this.checkMallType();
			this.checkEnvironment(options);
		},
		onShow: function(){
			console.log('App Show')
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
</style>
