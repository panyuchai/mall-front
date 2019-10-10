<template>
	<view>
		{{initData}}
	</view>
</template>

<script>
	import {
	    mapState,
	    mapMutations
	} from 'vuex'
	import { setStore, getStore, removeStore} from '../../utils/store.js'
	export default {
		data() {
			return {
				initData: '加载中......'
			}
		},
		computed: {
		    ...mapState("common", ['transferUrl', 'baseUrl', 'baseInfo', 'userInfo', 'mallDomain', 'isTransferPage'])
		},
		methods: {
			...mapMutations('common', ['SET_HASLOGIN', 'SET_TOKEN', 'SET_USERIFNO', 'SET_ISTRANSFERPAGE']),
			handleTransfer(options){
				if(options.success == 'true'){
					this.SET_HASLOGIN(true);
					this.SET_TOKEN(options.token);
					this.$http.setConfig((config) => {
						config.header['Authorization'] = 'Bearer ' + uni.getStorageSync('token');
						return config;
					});
					// this.setUserInfo();
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
								if(uni.getStorageSync('referUrl')){
									window.location.href=uni.getStorageSync('referUrl');
									uni.removeStorageSync('referUrl');
								}else{
									window.location.href='?mallDomain='+options.mallDomain;
									// uni.switchTab({
									// 	url: '/pages/index/index'
									// })
								}
							}
						}else{
							console.log('TransferPage.vue-- info接口调用失败');
						}
					})
					.catch( err => {
						console.log('TransferPage.vue-- info接口调用错误');
					})
				}else{
					uni.setStorageSync('openid',options.openid);
					uni.setStorageSync('isTransferPage', false);
					window.location.href='?mallDomain='+options.mallDomain;
					// uni.switchTab({
					// 	url: '/pages/index/index'
					// })
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
						console.log('TransferPage.vue-- info接口调用失败');
					}
				})
				.catch( err => {
					console.log('TransferPage.vue-- info接口调用错误');
				})
			},
		},
		onLoad(options){
			// #ifdef H5
			this.handleTransfer(options);
			// #endif
		}
	}
</script>

<style>

</style>
