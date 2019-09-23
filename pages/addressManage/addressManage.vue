<template>
	<view class="content">
		<view class="row">
			<view class="tit">收货人</view>
			<input class="input" type="text" v-model="addressData.addressRecipients" placeholder="收货人姓名" placeholder-class="placeholder" />
		</view>
		<view class="row">
			<view class="tit">手机号码</view>
			<input class="input" type="number" v-model="addressData.addressPhone" placeholder="收货人手机号码" placeholder-class="placeholder" />
		</view>
		<view class="row">
			<view class="tit">收货地址</view>
			<view @click="chooseLocation" class="input">
				{{addressData.addressSheng}}{{addressData.addressShi}}{{addressData.addressQu}}
			</view>
			<!-- <input class="input input-location" type="text" v-model="addressData.address" placeholder="在地图选择" placeholder-class="placeholder" /> -->
		</view>
		<view class="row"> 
			<view class="tit">详细地址</view>
			<input class="input" type="text" v-model="addressData.addressAddress" placeholder="请输入详细地址" placeholder-class="placeholder" />
		</view>
		<!-- <view class="row">
			<view class="tit">设为默认地址</view>
			<switch class="switchBtn" :checked='Boolean(addressData.addressSelected)' @change="switchChange" style="transform:scale(0.8)" color="#E93548" />
		</view> -->
		
		<!-- <view class="row default-row">
			<text class="tit">设为默认</text>
			<switch :checked="addressData.defaule" color="#fa436a" @change="switchChange" />
		</view> -->
		<button class="add-btn" @click="confirm">确定</button>
		<button class="delete-btn" @click="deleteAddress">删除</button>
	</view>
</template>

<script>
	import {
	    mapState,
	    mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				// addressId: uni.getStorageSync('addressId') || '',
				addressId: '',
				addressData: {
					addressRecipients: '',
					addressPhone: '',
					addressSheng: '',
					addressShi: '',
					addressQu: '',
					addressAddress: '',
					addressSelected: 0
				}
			}
		},
		methods: {
			// switchChange(e){
			// 	this.addressData.default = e.detail;
			// },
			
			//地图选择地址
			chooseLocation(){
				uni.chooseLocation({
					success: (data)=> {
						let Sheng = data.address.indexOf('省'),
							Shi = data.address.indexOf('市'),
							Qu = data.address.indexOf('区');
						this.addressData.addressSheng=data.address.slice(0,Sheng+1);
						this.addressData.addressShi=data.address.slice(Sheng+1,Shi+1);
						this.addressData.addressQu=data.address.slice(Shi+1,Qu+1);
						this.addressData.addressAddress=data.address.slice(Shi+1);
					}
				})
			},
			switchChange(val){
				this.addressData.addressSelected=Number(val.detail.value);
			},
			//提交
			confirm(){
				let data = this.addressData;
				if(!data.addressRecipients){
					this.tui.toast("请填写收货人姓名")
					return;
				}
				if(!/(^1[3|4|5|7|8][0-9]{9}$)/.test(data.addressPhone)){
					this.tui.toast("请输入正确的手机号码")
					return;
				}
				if(!data.addressSheng){
					this.tui.toast("请在地图选择所在位置")
					return;
				}
				if(!data.addressAddress){
					this.tui.toast("请填写详细门牌号信息")
					return;
				}
				
				// const prePage = ()=>{
				// 	let pages = getCurrentPages();
				// 	let prePage = pages[pages.length - 2];
				// 	// #ifdef H5
				// 	return prePage;
				// 	// #endif
				// 	return prePage.$vm;
				// }
				// //this.$api.prePage()获取上一页实例，可直接调用上页所有数据和方法，在App.vue定义
				// prePage().refreshList(data, this.manageType);
				
				if(this.manageType=='edit'){
					this.$http.post('/mall/app/address/update',{
						...this.baseInfo,
						accountId: this.userInfo.accountId,
						// addressId: uni.getStorageSync('addressId'),
						addressId: this.addressId,
						receiverName: this.addressData.addressRecipients,
						receiverPhone: this.addressData.addressPhone,
						province: this.addressData.addressSheng,
						city: this.addressData.addressShi,
						district: this.addressData.addressQu,
						address: this.addressData.addressAddress,
						addressSelected: this.addressData.addressSelected
					})
					.then( res => {
						if(res.code == 0){
							this.tui.toast(`地址${this.manageType=='edit' ? '修改': '添加'}成功`);
							// this.initAddress();
							setTimeout(()=>{
								uni.navigateBack();
							}, 800)
						}
					})
					.catch( err => {
						console.log(err);
					})
				}else{
					this.$http.post('/mall/app/address/add', {
						...this.baseInfo,
						accountId: this.userInfo.accountId,
						receiverName: this.addressData.addressRecipients,
						receiverPhone: this.addressData.addressPhone,
						province: this.addressData.addressSheng,
						city: this.addressData.addressShi,
						district: this.addressData.addressQu,
						address: this.addressData.addressAddress,
						addressSelected: this.addressData.addressSelected
					})
					.then( res => {
						if(res.code == 0){
							this.tui.toast(`地址${this.manageType=='edit' ? '修改': '添加'}成功`);
							setTimeout(()=>{
								uni.navigateBack();
							}, 800)
						}
					})
					.catch( err => {
						console.log(err);
					})
				}
			},
			deleteAddress(){
				if(this.addressId){
					this.$http.post('/mall/app/address/delete', {
						...this.baseInfo,
						accountId: this.userInfo.accountId,
						addressId: this.addressId
					})
					.then( res => {
						if(res.code == 0){
							this.tui.toast(`删除成功`);
							setTimeout(()=>{
								uni.navigateBack();
							}, 800)
						}
					})
					.catch( err => {
						console.log(err);
					})
				}
			},
			initAddress(){
				this.$http.post('/mall/app/address/one',{
					...this.baseInfo,
					accountId: this.userInfo.accountId,
					addressId: this.addressId
				})
				.then( res => {
					console.log(res)
					if(res.code == 0){
						this.addressData=res.result;
					}
				})
				.catch( err => {
					console.log(err);
				})
			},
		},
		computed: {
			...mapState('common', ['baseInfo', 'userInfo'])
		},
		onLoad(option){
			let title = '新增地址';
			if(option.type==='edit'){
				title = '编辑地址'
				this.addressId = option.data;
				// uni.setStorageSync('addressId', option.data);
				this.initAddress();
			}
			this.manageType = option.type;
			uni.setNavigationBarTitle({
				title
			})
		},
		// onLoad(option){
		// 	uni.setStorageSync('manageType', option.type);
		// 	uni.setStorageSync('addressId', option.data);
		// },
		// onShow(){
		// 	let title = '新增地址';
		// 	if(this.manageType==='edit'){
		// 		title = '编辑地址'
		// 		this.initAddress();
		// 	}
		// 	uni.setNavigationBarTitle({
		// 		title
		// 	})
		// }
	}
</script>

<style lang="scss">
	page{
		// background: $page-color-base;
		padding-top: 16upx;
	}

	.row{
		display: flex;
		align-items: center;
		justify-content: flex-start;
		position: relative;
		padding: 0upx 30upx;
		height: 110upx;
		background: #fff;
		position: relative;
		&:after{
			content: "";
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			height: 1px;
			background: #E8E8E8;
		}
		.tit{
			// flex-shrink: 0;
			width: 180upx;
			font-size: 28upx;
			color: #8C8C8C;
			display: inline-block;
			overflow: hidden;
			margin-right: 20upx;
		}
		.input{
			flex: 1;
			font-size: 28upx;
			color: #303030;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
			// min-height: 80%;
			min-height: 40%;
			flex-direction: row;
			justify-content: center;
			padding: 0!important;
			margin: 0!important;
		}
		.switchBtn{
			float: right;
			position: absolute;
			right: 30upx;
			top: 0;
			line-height: 110upx;
		}
	}
	// .default-row{
	// 	margin-top: 16upx;
	// 	.tit{
	// 		flex: 1;
	// 	}
	// 	switch{
	// 		transform: translateX(16upx) scale(.9);
	// 	}
	// }
	.add-btn{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 710upx;
		height: 106upx;
		margin: 60upx auto 0;
		font-size: 32upx;
		color: #fff;
		background: #E84342;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}
	.delete-btn{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 710upx;
		height: 106upx;
		margin: 40upx auto 0;
		font-size: 32upx;
		color: #000;
		// background: #E84342;
		border-radius: 10upx;
		// box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}
</style>
