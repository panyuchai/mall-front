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
				initData: ''
			}
		},
		methods: {
			...mapMutations('common', ['SET_HASLOGIN', 'SET_TOKEN']),
			handleTransfer(options){
				if(options.success == 'true'){
					this.SET_HASLOGIN(true);
					this.SET_TOKEN(res.result.token);
					this.$http.setConfig((config) => {
						config.header['Authorization'] = 'Bearer ' + getStore({ name: 'token' });
						return config;
					});
					if(uni.getStorageSync('referUrl')){
						// window.location.href=uni.getStorageSync('referUrl');
						// uni.removeStorageSync('referUrl');
					}else{
						// uni.switchTab({
						//     url: '/pages/index/index'
						// });
					}
					alert('登陆成功')
				}else{
					alert(options.code);
					uni.switchTab({
					    url: '/pages/index/index'
					});
				}
				
			}
		},
		onLoad(options){
			this.handleTransfer(options);
		}
	}
</script>

<style>

</style>
