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
		methods: {
			...mapMutations('common', ['SET_HASLOGIN', 'SET_TOKEN', 'SET_FIRSTLOAD', 'SET_USERIFNO']),
			handleTransfer(options){
				if(options.success == 'true'){
					alert('静默登陆成功1')
					this.SET_HASLOGIN(true);
					alert('静默登陆成功2')
					alert(options.token)
					this.SET_TOKEN(options.token);
					alert('静默登陆成功3')
					this.$http.setConfig((config) => {
						// config.header['Authorization'] = 'Bearer ' + getStore({ name: 'token' });
						config.header['Authorization'] = 'Bearer ' + uni.getStorageSync('token');
						return config;
					});
					alert('静默登陆成功4')
					this.setUserInfo();
					alert('静默登陆成功5')
					if(uni.getStorageSync('referUrl')){
						window.location.href=uni.getStorageSync('referUrl');
						uni.removeStorageSync('referUrl');
					}else{
						alert('静默登陆成功6')
						uni.switchTab({
							url: '/pages/index/index?'
						});
					}
					alert('静默登陆成功7')
				}else{
					alert('静默登陆失败')
					uni.setStorageSync('openid',options.openid)
					uni.switchTab({
						url: '/pages/index/index'
					});
				}
				this.SET_FIRSTLOAD(false);
			},
			setUserInfo(){
				alert('111111')
				this.$http.post('/mall/app/account/info')
				.then( res => {
					if(res.code == 0){
						if(res.result){
							alert(res.result.customer.accountId)
							alert(res.result.mobilephone)
							let mobilephone = res.result.mobilephone;
							let {accountId, customerName, wechatName, customerSex, customerBirthday, customerImage, customerId} = res.result.customer;
							this.SET_USERIFNO({accountId, customerName, wechatName, customerSex, customerBirthday,  customerImage, customerId});
							this.SET_USERIFNO({
								...this.userInfo,
								mobilephone: mobilephone
							})
							alert(this.userInfo.accountId)
							alert(this.userInfo.mobilephone)
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
		computed: {
			...mapState('common', 'baseInfo', 'userInfo')
		},
		onLoad(options){
			this.handleTransfer(options);
		}
	}
</script>

<style>

</style>
