<template>
	<view class="content">
		<view class="list-section">
			<view class="list-cell">
				<view class="cell-tit">
					头像
				</view>
				<view class="cell-info cell-info-avatar" @tap="uploadAvatar">
					<image class="portrait" :src="formData.customerImage || '/static/img/missing-face.png'"></image>
				</view>
			</view>
			<view class="list-cell">
				<view class="cell-tit">
					用户名
				</view>
				<view class="cell-info">
					<input class="input" type="text" v-model="formData.loginname" />
				</view>
				<view class="iconfont icon-arrowRight icon-arrow"></view>
			</view>
			<view class="list-cell">
				<view class="cell-tit">
					昵称
				</view>
				<view class="cell-info">
					<input class="input" type="text"  v-model="formData.customerName" />
				</view>
				<view class="iconfont icon-arrowRight icon-arrow"></view>
			</view>
			<view class="list-cell">
				<view class="cell-tit">
					性别
				</view>
				<view class="cell-info">
					<input class="input" disabled @tap.stop="toggleTab('selector')" type="text" v-model="formData.transCustomerSex"/>
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
					<input class="input" disabled @tap.stop="toggleTab('date')" type="text" v-model="formData.transCustomerBirthday" value='0'/>
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
			<!-- <view class="list-cell">
				<view class="cell-tit">
					修改密码
				</view>
				<view class="iconfont icon-arrowRight icon-arrow"></view>
			</view> -->
		</view>
		<view class="action-section">
			<view class="saving-btn" @tap="saveAccount">
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
	import { setStore, getStore, removeStore } from '../../utils/store.js'
	
	export default {
		components:{
			wPicker
		},
		data() {
			return {
				formData: {
					customerImage: '',
					customerName: '',
					wechatName: '',
					customerSex: 0,
					transCustomerBirthday: '',
					transCustomerSex: ''
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
		    ...mapState("common", ['baseInfo', 'userInfo'])
		},
		methods: {
			...mapMutations('common', ['SET_USERIFNO']),
			uploadAvatar(){
				uni.chooseImage({
				    success: (chooseImageRes) => {
				        const tempFilePaths = chooseImageRes.tempFilePaths;
				        uni.uploadFile({
				            url: '/saas/app/backsite/sysFile/upload',
							header:{
								Authorization: 'Bearer ' + uni.getStorageSync('token')
							},
				            filePath: tempFilePaths[0],
				            name: 'file',
				            formData: {
				                'user': 'test'
				            },
				            success: (uploadFileRes) => {
				                // if(uploadFileRes.data && uploadFileRes.data.code == 0){
									
									this.formData={
										...this.formData,
										customerImage: JSON.parse(uploadFileRes.data).result.url
									}
									// this.formData.customerImage=JSON.parse(uploadFileRes.data).result.url;
								// }
				            },
							fail: (err) => {
								console.log(err);
							}
				        });
				    }
				});
			},
			toggleTab(val){
				this.$refs[val].show();
			},
			onConfirmSex(val){
				// this.formData.transCustomerSex = val.result;
				this.formData={
					...this.formData,
					transCustomerSex: val.result
				}
			},
			onConfirmBirthday(val){
				// this.formData.transCustomerBirthday = val.result;
				this.formData={
					...this.formData,
					transCustomerBirthday: val.result
				}
				// console.log(this.formData.transCustomerBirthday);
			},
			linkToAddress(){
				uni.navigateTo({
				    url: "/pages/address/address"
				});
			},
			saveAccount(){
				let transSexNum = this.transformSexNum(this.formData.transCustomerSex);
				this.$http.post('/mall/app/account/update', {
					...this.baseInfo,
					...this.formData,
					customerBirthday: this.formData.transCustomerBirthday,
					customerSex: transSexNum
				})
				.then( res => {
					uni.showToast({
						icon: 'none',
						title: '修改成功'
					});
					this.setUserInfo();
					// this.initData();
				})
				.catch( err => {
					console.log(err);
				})
			},
			transformSexNum(str){
				switch(str){
					case '男':
						return 1;
						break;
					case '女':
						return 0
						break;
				}
			},
			transformSex(num){
				switch(num){
					case 0:
						return '女';
						break;
					case 1:
						return '男'
						break;
				}
			},
			// initData(){
			// 	this.formData=this.userInfo || {};
			// 	this.formData.transCustomerBirthday=this.userInfo.customerBirthday.split('T')[0];
			// 	this.formData.transCustomerSex=this.transformSex(this.userInfo.customerSex);
			// },
			setUserInfo(){
				this.$http.post('/mall/app/account/info')
				.then( res => {
					if(res.code == 0){
						if(res.result){
							let mobilephone = res.result.mobilephone;
							let loginname = res.result.loginname;
							let accountId = res.result.id;
							let {customerName, wechatName, customerSex, customerBirthday, customerImage, customerId} = res.result.customer;
							this.SET_USERIFNO({customerName, wechatName, customerSex, customerBirthday,  customerImage, customerId});
							this.SET_USERIFNO({
								...this.userInfo,
								mobilephone: mobilephone,
								loginname: loginname,
								accountId: accountId
							});
							this.formData=this.userInfo;
							if(this.formData.customerBirthday){
								let moment = require('moment');
								let day = moment(this.formData.customerBirthday, moment.ISO_8601);
								this.formData.transCustomerBirthday=day.format("YYYY-MM-DD") || '';
							}
							this.formData.transCustomerSex=this.transformSex(this.formData.customerSex);
						}
					}else{
						console.log('login.vue-- info接口调用失败');
					}
				})
				.catch( err => {
					console.log('login.vue-- info接口调用错误');
				})
			}
		},
		watch: {
			formData: {
				handler(val, oldval){
					this.formData.transCustomerBirthday=val.transCustomerBirthday;
					this.formData.transCustomerSex=val.transCustomerSex;
					this.formData.customerImage=val.customerImage;
				},
				deep: true
			}
		},
		onLoad(){
			this.setUserInfo();
			
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
