<template>
	<view>
		<block v-for="(item,index) in templateData" :key="index">
			<!-- <Search v-if="item.type==='003'" :options="item.data"></Search>
				<banner v-if="item.type==='201'" :options="item.data"></banner>
				<category-list v-if="item.type==='203'" :options="item.data"></category-list>
				<single-product></single-product>
				<goods v-if="item.type==='204'" :options="item.data"></goods> -->
			<search v-if="item.type === '001'" :options="item.data"></search>
			<banner v-if="item.type === '003'" :options="item.data"></banner>
			<!-- <category-list></category-list> -->
			<lines v-if="item.type === '004'" :options="item.data"></lines>
			<!-- 007 积分展示 -->
			<!-- 005 1px白线显示 -->
			<single-product v-if="item.type === '205'" :options="item.data"></single-product>
			<recommend v-if="item.type === '203'" :options="item.data"></recommend>
			<!-- <button type="primary" @tap="clearInfo">清除登陆</button> -->
		</block>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import Search from "@/components/search.vue";
	import Banner from "@/components/banner.vue";
	import CategoryList from "@/components/categorylist.vue";
	import SingleProduct from "@/components/singleproduct.vue";
	import Recommend from "@/components/recommend.vue";
	import Lines from "@/components/lines.vue";

	export default {
		data() {
			return {
				templateData: [],
				canIUse: false
			}
		},
		components: {
			Search,
			Banner,
			CategoryList,
			SingleProduct,
			Recommend,
			Lines
		},
		methods: {
			// clearInfo(){
			// 	uni.removeStorageSync('hasLogin')
			// 	uni.removeStorageSync('token')
			// 	uni.removeStorageSync('uniCode')
			// 	uni.removeStorageSync('userInfo')
			// },
			initData() {
				this.$http.post('/mall/app/backsite/decoration/homepage/'+this.baseInfo.mallId)
				.then(res => {
					this.templateData=res.content;
				})
				.catch(err => {
					
				})
			},
		},
		computed: {
			...mapState('common', ['baseInfo', 'userInfo'])
		},
		onLoad() {
			this.initData();
		},
		
	}
</script>

<style>

</style>
