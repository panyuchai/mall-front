<template>
	<view class="content">
		<view class="list border-bottom" v-for="(item, index) in addressList" :key="index" @click="checkAddress(item,index)">
			<view class="checkbox-box">
				<view class="checkbox" :class="[item.default?'on':'']">
					<view :class="[item.default?'on':'']"></view>
				</view>
			</view>
			<view class="wrapper">
				<view class="u-box">
					<text class="name">{{item.name}}</text>
					<text class="mobile">{{item.mobile}}</text>
				</view>
				<view class="address-box">
					<text class="address">{{item.address}}{{item.area}}</text>
				</view>
			</view>
			<text class="action" @click.stop="addAddress('edit', item)">编辑</text>
		</view>
		
		<button class="add-btn" @click="addAddress('add')">新增地址</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				source: 0,
				addressList: [
					{
						name: '刘晓晓',
						mobile: '18666666666',
						address: '北京市东城区',
						area: '泛海国际soho城8栋1904',
						default: true
					},{
						name: '刘大大',
						mobile: '18667766666',
						address: '山东省济南市历城区山东省济南市历城区山东省济南市历城区山东省济南市历城区山东省济南市历城区山东省济南市历城区',
						area: '泛海国际soho城8栋1904',
						default: false,
					}
				]
			}
		},
		onLoad(option){
			// console.log(option.source);
			this.source = option.source;
		},
		methods: {
			//选择地址
			checkAddress(item, index){
				const prePage = ()=>{
					let pages = getCurrentPages();
					let prePage = pages[pages.length - 2];
					// #ifdef H5
					return prePage;
					// #endif
					return prePage.$vm;
				}
				if(this.source == 1){
					prePage().addressData = item;
					this.addressList.map((v, i) => {
						v.default=false;
					})
					this.addressList[index].default = true
					uni.navigateBack();
				}
			},
			addAddress(type, item){
				uni.navigateTo({
					url: `/pages/addressManage/addressManage?type=${type}&data=${JSON.stringify(item)}`
				})
			},
			//添加或修改成功之后回调
			refreshList(data, type){
				//添加或修改后事件，这里直接在最前面添加了一条数据，实际应用中直接刷新地址列表即可
				this.addressList.unshift(data);
				
				console.log(data, type);
			}
		}
	}
</script>

<style lang='scss'>
	page{
		padding-bottom: 120upx;
	}
	.content{
		position: relative;
	}
	.border-bottom{
		position: relative;
		&:after{
			content: "";
			position: absolute;
			left: 10rpx;
			right: 10rpx;
			bottom: 0;
			height: 1px;
			background: #E8E8E8;
		}
	}
	.list{
		display: flex;
		align-items: center;
		padding: 20upx 30upx;;
		background: #fff;
		position: relative;
		.checkbox-box{
			display: flex;
			align-items: center;
			margin-right: 20upx;
			.checkbox{
				width: 35upx;
				height: 35upx;
				border-radius: 100%;
				border: solid 2upx #979797;
				display: flex;
				justify-content: center;
				align-items: center;
				.on{
					width: 35upx;
					height: 35upx;
					border-radius: 100%;
					background-color: #E93B3D;
					position: relative;
					transform: rotate(225deg);
				}
				.on:before{
					content: "";
					width: 4rpx;
					height: 19rpx;
					background-color: #fff;
					border-radius: 4rpx;
					position: absolute;
					left: calc(50% - 6rpx);
					top: calc(50% - 8rpx);
				}
				.on:after{
					content: "";
					width: 10rpx;
					height: 4rpx;
					background-color: #fff;
					border-radius: 4rpx;
					position: absolute;
					left: calc(50% - 5rpx);
					top: calc(50% - 8rpx);
				}
			}
			.checkbox.on{
				border-color: #fff;
			}
		}
	}
	.wrapper{
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.u-box{
		font-size: 28upx;
		color: #303030;
		.name{
			margin-right: 20upx;
		}
	}
	.address-box{
		display: flex;
		align-items: center;
		margin-top: 10upx;
		.address{
			font-size: 28upx;
			color: #8C8C8C;
		}
	}
	.action{
		padding: 15upx 20upx;
		font-size: 28upx;
		color: #E93B3D;
	}
	.add-btn{
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 95;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 106upx;
		line-height: 106upx;
		font-size: 32upx;
		color: #fff;
		background: #E93B3D;
		border-radius: 0;
	}
</style>
