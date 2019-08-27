<template>
	<view class="content">
		<view class="delivery-number">
			订单编号：W109089823435
		</view>
		<!-- ======="state": 0 ,1 ,2 ,3, 4====== -->
		<view class="state-cont">
			<block v-for="(item,i) in datas" :key="i">
				<!-- <view class="State_Four">
					<view class="FourBox">
						<text class="line" :class="[i == 0?'noline':'']"></text>
						<text class="ali_top_icon" style="margin: 0 0;" v-if="item.remark.includes(ways.expName) || i == datas.length -1">发</text>
						<text class="ali_top_icon" :class="[item.remark.includes('签收')?'isOk':'']" style="margin: 0 0;" v-else-if="Type(item.remark) == true && i!= datas.length-1">{{item.remark | Type}}</text>
						<view class="ali_top_icons" style="margin: 0 0;" v-else>
							<text class="line" :class="[i == 0?'noline':'']"></text>
							<text class="ali_top_iconss"></text>
							<text class="line" :class="[i == 0?'noline':'']"></text>
						</view>
						<text class="line" :class="[i == datas.length -1?'noline':'']"></text>
					</view>
					<view class="remark">
						<text class="a14"  v-if="i == datas.length-1">已发货</text>
						<text class="a14"  v-else>{{item.remark}}</text>
						<text class="a12" style="padding-top: 10upx;">{{item.time}}</text>
					</view>
				</view> -->
			</block>
			<view class="list-item list-active">
				<view class="icon">
					<text class="icon-font iconfont icon-icon-"></text>
				</view>
				<view class="info">
					<view class="tit">
						已签收
					</view>
					<view class="con">
						<view class="text">
							[上海市]投递并签收，签收人：小谢
						</view>
						<view class="time">
							2019-07-28<text class="space">18:47</text>
						</view>
					</view>
				</view>
			</view>
			<view class="list-item">
				<view class="icon">
					<text class="icon-font iconfont icon-paijiantixing"></text>
				</view>
				<view class="info">
					<view class="tit">
						派件中
					</view>
					<view class="con">
						<view class="text">
							[上海市]金桥安排投递。预计21:00前投递（投递员姓名：翁 徐君；联系电话；1508897697000）
						</view>
						<view class="time">
							2019-07-28<text class="space">18:47</text>
						</view>
					</view>
				</view>
			</view>
			<view class="list-item">
				<view class="icon">
					<text class="icon-font iconfont icon-huochedong"></text>
				</view>
				<view class="info">
					<view class="tit">
						运输中
					</view>
					<view class="con">
						<view class="dot">
						</view>
						<view class="text">
							[[上海市]到达金桥（本部）
						</view>
						<view class="time">
							2019-07-28<text class="space">18:47</text>
						</view>
					</view>
					<view class="con">
						<view class="dot">
						</view>
						<view class="text">
							到达 上海市徐德路邮件处理中心 处理中心
						</view>
						<view class="time">
							2019-07-28<text class="space">18:47</text>
						</view>
					</view>
					<view class="con">
						<view class="dot">
						</view>
						<view class="text">
							离开南京市 发往上海市（经转）
						</view>
						<view class="time">
							2019-07-28<text class="space">18:47</text>
						</view>
					</view>
					<view class="con">
						<view class="dot">
						</view>
						<view class="text">
							[南京市]到达EMS航空集散中心（南京）处理中心（经转）
						</view>
						<view class="time">
							2019-07-28<text class="space">18:47</text>
						</view>
					</view>
					<view class="con">
						<view class="dot">
						</view>
						<view class="text">
							离开武汉市 发往南京市
						</view>
						<view class="time">
							2019-07-28<text class="space">18:47</text>
						</view>
					</view>
					<view class="con">
						<view class="dot">
						</view>
						<view class="text">
							[武汉市]到达 武汉同城分拨中心 处理中
						</view>
						<view class="time">
							2019-07-28<text class="space">18:47</text>
						</view>
					</view>
				</view>
			</view>
			<view class="list-item">
				<view class="icon">
					<text class="icon-font iconfont icon-xinxi"></text>
				</view>
				<view class="info">
					<view class="tit">
						已收件
					</view>
					<view class="con">
						<view class="text">
							[武汉市]武汉洪山软件园营业部已收件（王红英）
						</view>
						<view class="time">
							2019-07-28<text class="space">18:47</text>
						</view>
					</view>
				</view>
			</view>
			<view class="list-item">
				<view class="icon">
					<text class="icon-font iconfont icon-weibiaoti2fuzhi05"></text>
				</view>
				<view class="info">
					<view class="tit">
						已发货
					</view>
					<view class="con">
						<view class="text">
							包裹正在等待揽收
						</view>
						<view class="time">
							2019-07-28<text class="space">18:47</text>
						</view>
					</view>
				</view>
			</view>
			
			
			
			
		</view>
	</view>
</template>

<script>
	export default{
		props:["datas","state","ways"],
		data(){
			return{
				
			}
		},
		methods: {
			
		},
		onLoad(){
			
		}
		//过滤返回关键字
		// filters:{
		// 	Type(item){
		// 		let Info;
		// 		let Phone = /\d{11}/;
		// 		if(Phone.test(item) && item.includes('正在派')){
		// 			Info = "派";
		// 		}else if(item.includes('已收取快件')){
		// 			Info = "揽";
		// 		}else if(item.includes('营业')){
		// 			Info = "运";
		// 		}else if(item.includes('丰巢智能快递柜')){
		// 			Info = "待";
		// 		}else if(item.includes('签收')){
		// 			Info = "收";
		// 		}else{
		// 			Info = "";
		// 		}
		// 		return Info
		// 	}
		// },
		// methods: {
		// 	//判断哪个该展示关键字--还是默认
		// 	Type(item){
		// 		
		// 		let Info;
		// 		let Phone = /\d{11}/;
		// 		if(Phone.test(item) && item.includes('正在派')){
		// 			Info = true;
		// 		}else if(item.includes('已收取快件')){
		// 			Info = true;
		// 		}else if(item.includes('营业')){
		// 			Info = true;
		// 		}else if(item.includes('丰巢智能快递柜')){
		// 			Info = true;
		// 		}else if(item.includes('签收')){
		// 			Info = true;
		// 		}else{
		// 			Info = false;
		// 		}
		// 		return Info
		// 	}
		// },
	}
</script>

<style lang="scss">
	.content{
		background-color: #FFFFFF;
		margin: 24upx;
		padding: 0 24upx;
		display: flex;
		flex: 1;
		flex-direction: column;
	}
	.delivery-number{
		font-size: 28upx;
		color: #000000;
		padding: 10upx 0 54upx 0;
	}
	.state-cont{
		border-left: 1px #D8D8D8 solid;
	}
	.list-item{
		position: relative;
		padding-left: 40upx;
		.icon{
			position: absolute;
			left: -20upx;
			width: 36upx;
			height: 36upx;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			background: #D8D8D8;
			.icon-font{
				font-size: 20upx;
				color: #fff;
			}
		}
		.info{
			color: #979797;
			.tit{
				font-size: 28upx;
			}
			.con{
				font-size: 24upx;
				padding: 20upx 0;
				position: relative;
				.dot{
					width: 10upx;
					height: 10upx;
					border-radius: 50%;
					background: #D8D8D8;
					position: absolute;
					top: 50%;
					left: -46upx;
					z-index: 2;
					transform: translateY(-50%);
				}
				.time{
					margin-top: 10upx;
				}
			}
		}
		&.list-active{
			.icon{
				background: #E93B3D;
			}
			.info{
				color: #000000;
			}
		}
	}
	/*  #ifdef  MP-WEIXIN  */
	.list-item{
		.icon{
			left: -18upx;
		}
		.info{
			.con{
				.dot{
					left: -45upx;
				}
			}
		}
	}
	/*  #endif  */
	/* .isOk{
		background-color: #F0AD4E !important;
	}
	.ali_top_iconss{
		width: 12upx;
		height: 12upx;
		display: block;
		background-color: #999;
		padding-right: 2upx;
		border-radius: 50%;
	}
	.noline{
		background-color: #fff !important;
	}
	.State_Four{
		display: flex;
	}
	.FourBox{
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-right: 24upx;
	}
	.line{
		width: 2upx;
		display: flex;
		flex-direction: column;
		flex: 1;
		background-color: #999;
	}
	.remark{
		display: flex;
		flex-direction: column;
		width: 90%;
		padding: 24upx 0;
	}
	.borders{
		border-bottom: 1upx solid #F2F2F2;
		padding: 24upx 0;
	}
	.ali_top_icons{
		width: 46upx;
		height: 46upx;
		display: block;
		background-color: #FFF;
		border-radius: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		align-content: center;
	}
	.ali_top_icon{
		width: 46upx;
		height: 46upx;
		display: block;
		background-color: #83AECF;
		color: #fff;
		font-size: 28upx;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 20upx;
	}
	.a14{
		font-size: 28upx;
		color: #000000;
	}
	.a12{
		font-size: 24upx;
		color: #999;
	} */
	
</style>
