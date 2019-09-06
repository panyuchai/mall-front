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
			...mapMutations('common', ['SET_HASLOGIN', 'SET_TOKEN', 'SET_FIRSTLOAD']),
			handleTransfer(){
				this.$http.post('/mall/app/login/mall/wxweb', this.baseInfo)
				.then( res => {
					if(res.success == 'true'){
						this.SET_HASLOGIN(true);
						this.SET_TOKEN(res.result.token);
						this.$http.setConfig((config) => {
							config.header['Authorization'] = 'Bearer ' + getStore({ name: 'token' });
							return config;
						});
						if(uni.getStorageSync('referUrl')){
							window.location.href=uni.getStorageSync('referUrl');
							uni.removeStorageSync('referUrl');
						}else{
							uni.switchTab({
								url: '/pages/index/index'
							});
						}
					}else{
						uni.switchTab({
							url: '/pages/index/index'
						});
					}
				})
				.catch( err => {
					console.log(err);
				});
				this.SET_FIRSTLOAD(false);
				
			}
		},
		computed: {
			...mapState('common', 'baseInfo')
		},
		onLoad(){
			this.handleTransfer();
		}
	}
</script>

<style>

</style>
