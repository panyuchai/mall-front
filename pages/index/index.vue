<template>
	<view>
		<block v-for="(item,index) in templateData" :key="index">
			<!-- <Search v-if="item.type==='003'" :options="item.data"></Search>
				<banner v-if="item.type==='201'" :options="item.data"></banner>
				<category-list v-if="item.type==='203'" :options="item.data"></category-list>
				<single-product></single-product>
				<goods v-if="item.type==='204'" :options="item.data"></goods> -->
			<search v-if="item.type === '001'" :options="item.data"></search>
			<banner v-if="item.type === '003'" :options="item.data" @reLoadIndex='getDecoration'></banner>
			<!-- <category-list></category-list> -->
			<lines v-if="item.type === '004'" :options="item.data"></lines>
			<!-- 007 积分展示 -->
			<!-- 005 1px白线显示 -->
			<single-product v-if="item.type === '205'" :options="item.data"></single-product>
			<recommend v-if="item.type === '203'" :options="item.data"></recommend>
			<points v-if="item.type === '007'" :options="item.renderData" :customerName='userInfo.customerName'></points>
		</block>
		<button type="primary" @tap="clearInfo">清除登陆</button>
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
			clearInfo(){
				uni.removeStorageSync('hasLogin')
				uni.removeStorageSync('token')
				uni.removeStorageSync('uniCode')
				uni.removeStorageSync('userInfo')
			},
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
					console.log(this.templateData)
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
		onLoad(options) {
			// if(options){
			// 	this.SET_MALLDOMAIN(options.mallDomain)
			// }
			// debugger;
			// alert(this.mallDomain)
			this.getMallType();
		},
		
	}
</script>

<style>

</style>
