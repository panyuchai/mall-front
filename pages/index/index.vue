<template>
	<view>
		<block v-for="(item,index) in templateData" :key="index">
			<search v-if="item.type === '001'" :options="item.data"></search>
			<banner v-if="item.type === '003'" :options="item.data" @reLoadIndex='getDecoration'></banner>
			<lines v-if="item.type === '004'" :options="item.data"></lines>
			<single-product v-if="item.type === '205'" :options="item.data"></single-product>
			<recommend v-if="item.type === '203'" :options="item.data"></recommend>
			<points v-if="item.type === '007'" :options="item.renderData" :customerName='userInfo.customerName'></points>
		</block>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import Search from "@/components/search.vue";
	import Banner from "@/components/banner.vue";
	import CategoryList from "@/components/categorylist.vue";
	import SingleProduct from "@/components/singleproduct.vue";
	import Recommend from "@/components/recommend.vue";
	import Lines from "@/components/lines.vue";
	import Points from "@/components/points.vue";

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
			Lines,
			Points
		},
		methods: {
			...mapMutations("common", ['SET_BASEINFO', 'SET_MALLTYPE', 'SET_MALLID', 'SET_MALLNAME', 'SET_MALLLOGO', 'SET_MALLDOMAIN']),
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
						
						this.initData();
					}else{
						console.log('index--mallTaye 接口调用失败');
					}
				})
				.catch( err => {
					console.log('index--mallTaye 接口调用出错'+err);
				})
			},
			initData(){
				this.$http.post('/mall/app/backsite/decoration/homepage/'+this.baseInfo.mallId)
				.then(res => {
					this.templateData=res.content;
					uni.setNavigationBarTitle({
					    title: this.mallName
					});
				})
				.catch(err => {
					console.log(err);
				})
			},
			getDecoration(decorationId){
				console.log(decorationId)
				this.$http.post('/mall/app/backsite/decoration/'+decorationId)
				.then(res => {
					this.templateData=res.content;
				})
				.catch(err => {
					console.log(err);
				})
			},
			getMallType(){
				if(!this.mallType){
					this.checkMallType();
					this.initData();
				}else{
					this.initData();
				}
			}
		},
		computed: {
			...mapState('common', ['baseInfo', 'userInfo', 'mallType', 'mallDomain', 'mallName'])
		},
		onShow(){
			this.getMallType();
		},
		onLoad(options) {
			
		},
		
	}
</script>

<style>

</style>
