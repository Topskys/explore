<template>
	<view class="home">
		<!-- 轮播图 -->
		<swiper indicator-dots circular>
			<swiper-item v-for="(bnr,idx) in banners" :key="idx">
				<image :src="bnr.imgUrl" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- 中间navbar -->
		<view class="nav">
			<view class="nav_item" v-for="(nav,idx) in navs" :key="idx" @click="navTo(nav.path)">
				<view :class="nav.icon"></view>
				<text>{{nav.title}}</text>
			</view>
		</view>
		<view class="hot_goods">
			<view class="txt">推荐商品</view>
			<goodList :goods='hotgoods' @sltGood="toDetail" />
		</view>
	</view>
</template>

<script>
	import goodList from '@/components/good-list/good-list.vue'
	export default {
		data() {
			return {
				banners: [],
				navs: [{
						icon: 'fas fa-shopping-bag',
						title: '黑马超市',
						path: '/pages/goods/goods'
					},
					{
						icon: 'fas fa-video',
						title: '学习视频',
						path: '/pages/videos/videos'
					},
					{
						icon: 'fas fa-image',
						title: '社区图片',
						path: '/pages/pics/pics'
					},
					{
						icon: 'fas fa-headset',
						title: '联系我们',
						path: '/pages/contact/contact'
					}
				],
				hotgoods: []
			}
		},
		components: {
			goodList,
		},
		//监听页面加载
		onLoad() {
			this.getSwipers()
			this.getGoods()
		},
		methods: {
			//获取轮播图
			async getSwipers() {
				const res = await this.$http({
					url: '/api/banner'
				})
				this.banners = res.banners
				// console.log(res.banners)
			},
			//获取推荐商品列表
			async getGoods() {
				const res = await this.$http({
					url: '/api/goods?pageindex=1',
				})
				this.hotgoods = res.goods.slice(0, 10)
				// console.log(this.hotgoods)
			},
			//中间navs跳转页面
			navTo(url) {
				uni.navigateTo({
					url
				})
				//console.log(url)
			},
			//商品详情页
			toDetail(gid) {
				uni.navigateTo({
					url: '/pages/good-detail/good-detail?id=' + this.gid
				})
			}
		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			width: 750rpx; //375*2
			height: 380rpx; //190*2

			image {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		.nav {
			display: flex;

			.nav_item {
				width: 25%;
				text-align: center; //文字水平居中

				view {
					width: 120rpx;
					height: 120rpx;
					margin: 10px auto;
					color: white;
					font-size: 50rpx;
					line-height: 120rpx;
					border-radius: 60rpx;
					background-color: #b50e03;
				}

				.fas {
					font-size: 45rpx;
				}

				text {
					font-size: 30rpx;
					white-space: nowrap; //文字不换行
				}
			}
		}

		.hot_goods {
			margin: 10px 0;
			overflow: hidden;
			background-color: #eee;

			.txt {
				color: #b50e03;
				font-size: 50rpx;
				height: 50px;
				margin: 5px 0;
				line-height: 50px;
				text-align: center;
				letter-spacing: 20px;
				background-color: white;
			}
		}
	}
</style>
