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
			...mapMutations('common', ['SET_HASLOGIN', 'SET_TOKEN', 'SET_FIRSTLOAD']),
			handleTransfer(options){
				alert('TransferPage------方法开始调用')
				if(options.success == 'true'){
					alert('静默登陆成功')
					this.SET_HASLOGIN(true);
					this.SET_TOKEN(options.token);
					this.$http.setConfig((config) => {
						config.header['Authorization'] = 'Bearer ' + getStore({ name: 'token' });
						return config;
					});
					if(uni.getStorageSync('referUrl')){
						window.location.href=uni.getStorageSync('referUrl');
						uni.removeStorageSync('referUrl');
					}else{
						// uni.switchTab({
						// 	url: '/pages/index/index?'
						// });
					}
				}else{
					alert('静默登陆失败')
					// uni.switchTab({
					// 	url: '/pages/index/index'
					// });
				}
				this.SET_FIRSTLOAD(false);
			}
		},
		computed: {
			...mapState('common', 'baseInfo')
		},
		onLoad(options){
			this.handleTransfer(options);
		}
	}
</script>

<style>

</style>
