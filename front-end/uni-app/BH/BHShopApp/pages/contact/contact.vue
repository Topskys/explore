<template>
	<view class="contact">
		<image src="../../static/logo.png" mode=""></image>
		<view class="info">
			<view class="number" @click="call">联系电话：400-000-0000 (点击拨打)</view>
			<view class="address">联系地址：银河系太阳国地球村001号在计算机科学中，内存中每个用于数据存取的基本单位，都被赋予一个唯一的序号</view>
		</view>
		<!-- <map class="map" :longitude="longitude" :latitude="latitude" :markers="markers" :scale="scale"></map> -->

	</view>
	</view>
</template>

<script>
	export default {
		name: 'contact',
		data() {
			return {
				longitude: 114.06031, //经度
				latitude: 22.72174, //纬度
				scale: 10, //地图缩放级别
				markers: [{
					longitude: 114.06031, //经度
					latitude: 22.72174, //纬度
					iconPath: '../../static/logo.png',
					width: 30,
					height: 30,
				}]
			}
		},
		methods: {
			//拨打该电话号码
			call() {
				uni.makePhoneCall({
					phoneNumber: '400-000-0000'
				})
			}
		},
	}
</script>

<style lang="scss">
	.contact {
		image {
			width: 750rpx;
			height: 320rpx;
		}

		.info {
			padding: 10rpx 20rpx;
			font-size: 30rpx;

			view {
				line-height: 80rpx;
				border-bottom: 1px solid #eee;
			}
		}

		.map {
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
