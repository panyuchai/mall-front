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
				initData: '888888888'
			}
		},
		computed: {
		    ...mapState("common", ['baseInfo', 'userInfo', 'mallDomain'])
		},
		methods: {
			...mapMutations('common', ['SET_HASLOGIN', 'SET_TOKEN', 'SET_FIRSTLOAD', 'SET_USERIFNO']),
			handleTransfer(options){
				if(options.success == 'true'){
					this.SET_HASLOGIN(true);
					this.SET_TOKEN(options.token);
					this.$http.setConfig((config) => {
						// config.header['Authorization'] = 'Bearer ' + getStore({ name: 'token' });
						config.header['Authorization'] = 'Bearer ' + uni.getStorageSync('token');
						return config;
					});
					this.setUserInfo();
					if(uni.getStorageSync('referUrl')){
						window.location.href=uni.getStorageSync('referUrl');
						uni.removeStorageSync('referUrl');
					}else{
						uni.switchTab({
							url: '/pages/index/index?mallDomain='+this.mallDomain
						});
						// window.location.href=this.baseUrl + '/mall/app/login/mall/wxweb?mallDomain='+this.mallDomain;
					}
				}else{
					uni.setStorageSync('openid',options.openid)
					uni.switchTab({
						url: '/pages/index/index?mallDomain='+this.mallDomain
					});
					// window.location.href=this.baseUrl + '/mall/app/login/mall/wxweb?mallDomain='+this.mallDomain;
				}
				this.SET_FIRSTLOAD(false);
			},
			setUserInfo(){
				this.$http.post('/mall/app/account/info')
				.then( res => {
					if(res.code == 0){
						if(res.result){
							let mobilephone = res.result.mobilephone;
							let {accountId, customerName, wechatName, customerSex, customerBirthday, customerImage, customerId} = res.result.customer;
							this.SET_USERIFNO({accountId, customerName, wechatName, customerSex, customerBirthday,  customerImage, customerId});
							this.SET_USERIFNO({
								...this.userInfo,
								mobilephone: mobilephone
							})
						}
					}else{
						console.log('login.vue-- info接口调用失败');
					}
				})
				.catch( err => {
					console.log('login.vue-- info接口调用错误');
				})
			},
		},
		onLoad(options){
			this.handleTransfer(options);
		}
	}
</script>

<style>

</style>
