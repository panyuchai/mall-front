<template>
	<view>
		<!-- <block v-for="(item,index) in templateData" :key="item.id"> -->
		<!-- <Search v-if="item.type==='003'" :options="item.data"></Search>
			<banner v-if="item.type==='201'" :options="item.data"></banner>
			<category-list v-if="item.type==='203'" :options="item.data"></category-list>
			<single-product></single-product>
			<goods v-if="item.type==='204'" :options="item.data"></goods> -->
		<Search></Search>
		<banner></banner>
		<category-list></category-list>
		<single-product></single-product>
		<lines></lines>
		<recommend></recommend>
		<!-- </block> -->
	</view>
</template>

<script>
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
			getData() {
				// this.$http.get('/api/getDecoration?appkey=NGMxNDkwZTktOWI2Zi00YWZjLWE1&decorationId=997c8b76a1974441b416718cdec04ab9').then(res => {
				// 	console.log(res.data.content);
				// 	this.templateData=res.data.content;
				// }).catch(err => {
				// 
				// })
			},
			
		},
		onLoad() {
			this.getData();
			
		},
		
	}
</script>

<style>

</style>
