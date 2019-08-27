<template>
	<view class="content">
		<view class="row">
			<view class="tit">收货人</view>
			<input class="input" type="text" v-model="addressData.name" placeholder="收货人姓名" placeholder-class="placeholder" />
		</view>
		<view class="row">
			<view class="tit">手机号码</view>
			<input class="input" type="number" v-model="addressData.mobile" placeholder="收货人手机号码" placeholder-class="placeholder" />
		</view>
		<view class="row">
			<view class="tit">收货地址</view>
			<view @click="chooseLocation" class="input">
				{{addressData.address}}
			</view>
			<!-- <input class="input input-location" type="text" v-model="addressData.address" placeholder="在地图选择" placeholder-class="placeholder" /> -->
		</view>
		<view class="row"> 
			<view class="tit">详细地址</view>
			<input class="input" type="text" v-model="addressData.area" placeholder="请输入详细地址" placeholder-class="placeholder" />
		</view>
		
		<!-- <view class="row default-row">
			<text class="tit">设为默认</text>
			<switch :checked="addressData.defaule" color="#fa436a" @change="switchChange" />
		</view> -->
		<button class="add-btn" @click="confirm">确定</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressData: {
					name: '',
					mobile: '',
					address: '在地图选择',
					area: '',
					default: false
				}
			}
		},
		onLoad(option){
			let title = '新增地址';
			if(option.type==='edit'){
				title = '编辑地址'
				
				this.addressData = JSON.parse(option.data)
			}
			this.manageType = option.type;
			uni.setNavigationBarTitle({
				title
			})
		},
		methods: {
			// switchChange(e){
			// 	this.addressData.default = e.detail;
			// },
			
			//地图选择地址
			chooseLocation(){
				uni.chooseLocation({
					success: (data)=> {
						console.log(data)
						this.addressData.address = data.name;
					}
				})
			},
			
			//提交
			confirm(){
				let data = this.addressData;
				if(!data.name){
					this.tui.toast("请填写收货人姓名")
					return;
				}
				if(!/(^1[3|4|5|7|8][0-9]{9}$)/.test(data.mobile)){
					this.tui.toast("请输入正确的手机号码")
					return;
				}
				if(!data.address){
					this.tui.toast("请在地图选择所在位置")
					return;
				}
				if(!data.area){
					this.tui.toast("请填写详细门牌号信息")
					return;
				}
				
				const prePage = ()=>{
					let pages = getCurrentPages();
					let prePage = pages[pages.length - 2];
					// #ifdef H5
					return prePage;
					// #endif
					return prePage.$vm;
				}
				//this.$api.prePage()获取上一页实例，可直接调用上页所有数据和方法，在App.vue定义
				prePage().refreshList(data, this.manageType);
				this.tui.toast(`地址${this.manageType=='edit' ? '修改': '添加'}成功`);
				setTimeout(()=>{
					uni.navigateBack()
				}, 800)
			},
		}
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
			width: 120upx;
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
		margin: 60upx auto;
		font-size: 32upx;
		color: #fff;
		background: #E84342;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}
</style>
