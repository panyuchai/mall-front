<template>
	<view class="content">
		<step :state="expressData.status" :datas="expressData.data" :deleveryNum="expressData.mailNo"></step>
	</view>
</template>

<script>
import {
	mapState
} from 'vuex'
import step from '@/components/step/step.vue';
export default {
	components: {
		step
	},
	data() {
		return {
			expressData: {},
		};
	},
	methods: {
		initData(orderId) {
			this.$http.post('/mall/app/order/express', {
				...this.baseInfo,
				accountId: this.userInfo.accountId,
				orderId: orderId
			})
			.then( res => {
				if(res.code == 0){
					this.expressData=JSON.parse(res.result.result).showapi_res_body;
				}
			})
			.catch( err => {
				
			})
		}
	},
	computed: {
		...mapState('common', ['baseInfo', 'userInfo'])
	},
	onLoad(options) {
		this.initData(options.orderId);
	}
};
</script>

<style>
.content {
}
</style>
