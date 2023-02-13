<template>
	<view class="good_detail">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(db,idx) in dtlBanners" :key="idx">
				<image :src="db.img_url"></image>
			</swiper-item>
		</swiper>
		<view class="box_price">
			<view class="price">
				<text>￥{{dtlInfo.sell_price}}</text>
				<text>￥{{dtlInfo.market_price}}</text>
			</view>
			<view class="good_name">{{dtlInfo.title}}</view>
		</view>
		<view class="line"></view>
		<view class="box_params">
			<view>货号：{{dtlInfo.good_no}}</view>
			<view>库存：{{dtlInfo.stock}}</view>
		</view>
		<view class="line"></view>
		<view class="box_detail">
			<view class="dtl_title">详情介绍</view>
			<view class="dtl_content">
				<rich-text :nodes="dtlInfo.content"></rich-text>
			</view>
		</view>
		<view class="buy_nav">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav'
	export default {
		data() {
			return {
				id: 0,
				dtlBanners: [],
				dtlInfo: {},
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		components: {
			uniGoodsNav,
		},
		methods: {
			//获取商品详情轮播
			async getDetailSwiper() {
				const res = await this.$http({
					url: '/api/dtlbanners/' + this.id
				})
				this.dtlBanners = res.detail_banners
			},
			//获取商品详情信息
			async getDetailInfo() {
				const res = await this.$http({
					url: '/api/dtlinfo/' + this.id
				})
				this.dtlInfo = res.detail_info[0]
			},
			//点击右侧按钮触发
			onClick(e) {
				// uni.showToast({
				// 	title: `点击${e.content.text}`,
				// 	icon: 'none'
				// })
				console.log(e)
			},
			//点击左侧按钮触发
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getDetailSwiper()
			this.getDetailInfo()
		}
	}
</script>

<style lang="scss">
	.good_detail {
		swiper {
			height: 700rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.box_price {
			padding: 10px;

			.price {
				color: #b50e03;
				font-size: 35rpx;

				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					margin-left: 20rpx;
					text-decoration: line-through;
				}
			}

			.good_name {
				font-size: 32rpx;
				line-height: 60rpx;
			}
		}

		.line {
			height: 10rpx;
			background-color: #eee;
		}

		.box_params {
			padding: 0 10px;
			font-size: 32rpx;
			line-height: 70rpx;
		}

		.box_detail {
			padding-bottom: 50px;

			.dtl_title {
				font-size: 32rpx;
				padding-left: 10px;
				line-height: 70rpx;
				border-bottom: 1px solid #eee;
			}

			.dtl_content {
				padding: 10px;
				font-size: 28rpx;
				color: #333;
				line-height: 50rpx;
				// .ctt_img{//需要在全局中App.vue-style设置
				// 	width: 750rpx !important;
				// }
			}
		}

		.buy_nav {
			width: 100%;
			position: fixed;
			bottom: 0;
		}
	}
</style>
