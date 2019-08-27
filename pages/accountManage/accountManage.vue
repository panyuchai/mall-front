<template>
	<view class="content">
		<view class="list-section">
			<view class="list-cell">
				<view class="cell-tit">
					头像
				</view>
				<view class="cell-info cell-info-avatar" @tap="uploadAvatar">
					<image class="portrait" :src="userInfo.portrait || '/static/img/missing-face.png'"></image>
				</view>
			</view>
			<view class="list-cell">
				<view class="cell-tit">
					用户名
				</view>
				<view class="cell-info">
					<input class="input" type="text" v-model="accountData.userName" />
				</view>
				<view class="iconfont icon-arrowRight icon-arrow"></view>
			</view>
			<view class="list-cell">
				<view class="cell-tit">
					昵称
				</view>
				<view class="cell-info">
					<input class="input" type="text"  v-model="accountData.nickName" />
				</view>
				<view class="iconfont icon-arrowRight icon-arrow"></view>
			</view>
			<view class="list-cell">
				<view class="cell-tit">
					性别
				</view>
				<view class="cell-info">
					<input class="input" disabled @tap.stop="toggleTab('selector')" type="text" v-model="accountData.sex" value="0"/>
					<!-- <view class="input">
						管理收货地址
					</view> -->
				</view>
				<view class="iconfont icon-arrowRight icon-arrow"></view>
			</view>
			<view class="list-cell borderB-none">
				<view class="cell-tit">
					生日
				</view>
				<view class="cell-info">
					<input class="input" disabled @tap.stop="toggleTab('date')" type="text" v-model="accountData.birthday" />
				</view>
				<view class="iconfont icon-arrowRight icon-arrow"></view>
			</view>
		</view>
		<view class="blank"></view>
		<view class="list-section">
			<view class="list-cell" @tap="linkToAddress">
				<view class="cell-tit">
					收货地址
				</view>
				<view class="cell-info">
					<input class="input" disabled type="text" value="管理收货地址" />
				</view>
				<view class="iconfont icon-arrowRight icon-arrow"></view>
			</view>
			<view class="list-cell">
				<view class="cell-tit">
					修改密码
				</view>
				<view class="iconfont icon-arrowRight icon-arrow"></view>
			</view>
		</view>
		<view class="action-section">
			<view class="saving-btn">
				保存修改
			</view>
		</view>
		<view class="">
			<w-picker
				v-if="selectList.length!=0"
				mode="selector" 
				:defaultVal="[0]" 
				@confirm="onConfirmSex" 
				ref="selector" 
				themeColor="#f00"
				:selectList="selectList"
			></w-picker>
			<w-picker
				mode="date" 
				startYear="1999" 
				endYear="2030"
				:defaultVal="[0,1,3]" 
				:current="true" 
				@confirm="onConfirmBirthday" 
				ref="date" 
				themeColor="#f00"
			></w-picker>
		</view>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	import {
	    mapState,
	    mapMutations
	} from 'vuex'
	
	export default {
		components:{
			wPicker
		},
		data() {
			return {
				formData: {
					
				},
				accountData: {
					userName: '韩莹',
					nickName: '韩莹123',
					sex: '请选择',
					birthday: '请选择'
				},
				selectList:[{
					label:"男",
					value:0
				},{
					label:"女",
					value:1
				}],
			};
		},
		computed: {
		    ...mapState("common", ['userInfo'])
		},
		methods: {
			uploadAvatar(){
				uni.chooseImage({
				    success: (chooseImageRes) => {
				        const tempFilePaths = chooseImageRes.tempFilePaths;
				        uni.uploadFile({
				            url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
				            filePath: tempFilePaths[0],
				            name: 'file',
				            formData: {
				                'user': 'test'
				            },
				            success: (uploadFileRes) => {
				                console.log(uploadFileRes.data);
				            }
				        });
				    }
				});
			},
			toggleTab(val){
				this.$refs[val].show();
			},
			onConfirmSex(val){
				// console.log(val)
				this.accountData.sex = val.result;
			},
			onConfirmBirthday(val){
				this.accountData.birthday = val.result;
			},
			linkToAddress(){
				uni.navigateTo({
				    url: "/pages/address/address"
				});
			}
		}
	}
</script>

<style lang="scss">
	.blank{
		height: 20upx;
		background: #F7F7F7;
	}
	.list-section{
		.list-cell{
			padding: 20upx 30upx;
			position: relative;
			display: flex;
			justify-content: space-between;
			align-items: center;
			&:after{
				content: "";
				position: absolute;
				left: 0;
				right: 0;
				bottom: 0;
				height: 1px;
				background: #E6E6E6;
			}
			.cell-tit{
				font-size: 28upx;
				color: #2F2F2F;
			}
			.cell-info{
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				z-index: 2;
				.input{
					font-size: 24upx;
					color: #828282;
					text-align: right;
					// display: flex;
					// align-items: center;
					// justify-content: flex-end;
					height: 100%;
					padding: 0 62upx 0 0;
					// position: relative;
				}
				&.cell-info-avatar{
					position: static;
					width: 80upx;
					height: 80upx;
					border-radius: 50%;
					border: 1px solid #F2F2F2;
					overflow: hidden;
					image{
						width: 80upx;
						height: 80upx;
						border-radius: 50%;
					}
				}
			}
			.icon-arrow{
				position: absolute;
				top: 50%;
				right: 20upx;
				z-index: 1;
				transform: translateY(-50%);
				color: #C6C6C6;
				font-weight: bold;
			}
		}
	}
	.action-section{
		padding: 20upx;
		margin-top: 80upx;
		.saving-btn{
			height: 106upx;
			background: #E93B3D;
			display: flex;
			align-items: center;
			justify-content: space-around;
			border-radius: 8upx;
			font-size: 32upx;
			color: #ffffff;
		}
	}
	.borderB-none{
		&:after{
			content: "";
			height: 0!important;
		}
	}
</style>
