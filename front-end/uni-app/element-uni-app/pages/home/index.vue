<template>
	<view class="home bgc-1">
		<view class="home-ele">
			<view class="ele">
				饿了么
			</view>
		</view>
		<scroll-view scroll-y="true" style="height: calc(100vh - 4rem);">
			<view>
				<!-- 定位 -->
				<view class="home-address bgc-1">
					<view class="address r-flex-2">
						<view class="location r-flex-1">
							<view class="location-icon"></view>
							<view class="location-txt">{{location}}</view>
						</view>
						<view class="right">{{tip}}</view>
					</view>
				</view>
				<!-- 搜索 -->
				<view class="search mg12 r-flex-2 br16 border-1">
					<input type="text" maxlength="140" v-model="keyword" placeholder="古茗 | 快乐番薯" class="pg2-10 " />
					<view class="search-btn  fs14 bgc-3 br16" @click="search()">
						搜索
					</view>
				</view>

				<!-- 分类 -->
				<swiper class="mg10">
					<swiper-item class="r-flex-1">
						<view v-for="cate,index in cates.slice(0,8)" :key="index" style="width: 25%;" align='center'>
							<view class="img-box56 mg0-auto">
								<img :src="cate.icon">
							</view>
							<view class="color-3 fs14">
								{{cate.title}}
							</view>
						</view>
					</swiper-item>
					<swiper-item class="r-flex-1">
						<view v-for="cate,index in cates.slice(8)" :key="index" style="width: 25%;" align='center'>
							<view class="img-box56 mg0-auto">
								<img :src="cate.icon">
							</view>
							<view class="color-3 fs14">
								{{cate.title}}
							</view>
						</view>
					</swiper-item>
				</swiper>

				<!-- 附近商家列表 -->
				<view class="recomment-shops r-flex-4 mg18-10-17 fs12 color-3">
					为你推荐附近的商家
				</view>
				<!-- <scroll-view scroll-y="true" class="shop-list"> -->
				<view class="good-list pg0-12">
					<view class="good-item bgc-2 r-flex-1 br10 mg10-0 pg10" v-for="good,i in shops" :key="i"
						@click="linkTo(good.id)">
						<view class="mask img-box104 mr10">
							<img :src="good.image_path" alt="" class='br5'>
						</view>
						<view class="intro">
							<p class='r-flex-1'>
								<view class="img-box34-14 mr5" v-if="good.license.business_license_image">
									<img src="/static/advertisement.png" alt="">
								</view>
								<view class="shop-name mw265 over fs16 fwbold">
									{{good.name}}
								</view>
							</p>
							<p class='r-flex-2'>
								<view class="score">
									<span class='color-5 fs12'>{{good.rating}}分</span><span
										class='color-7 fs12 ml10'>月售{{good.rating_count}}</span>
								</view>
								<view class="distance color-6 fs12">
									<span>{{good.order_lead_time}}</span><span class='ml10'>{{good.distance}}</span>
								</view>
							</p>
							<p class='fs12 color-6'>
								<span>起送￥15</span><span class='ml10 color-7'>{{good.piecewise_agent_fee.tips}}</span>
							</p>
							<p class='mg5-0'><span class='bgc-5 color-8 pg0-6 br4 fs10 '>{{good.promotion_info}}</span>
							</p>
							<p class='fs12 color-2'><span class='color-9 br4 bgc-5'>30减17</span><span
									class='color-9 br4 pg0-6 bgc-5 ml10'>45减25</span>
								<!-- <span class='color-9'>V</span> -->
							</p>
						</view>
					</view>
				</view>
				<!-- </scroll-view> -->
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import Swiper from "swiper";
	import "@/node_modules/swiper/swiper.min.css";
	export default {
		data() {
			return {
				location: '洪甘路金帝天澜',
				tip: '美食果蔬医药·30分钟送达',
				keyword: '',
				shops: [],
				cates: [],
				lat: "",
				long: '',
			}
		},
		onLoad() {
			this.getCategoryList();
			this.getShopList();
		},
		onPullDownRefresh() {
			window.location.reload()
			uni.stopPullDownRefresh()
			// this.getLocation()
		},
		methods: {
			getLocation() {
				if ("geolocation" in navigator) {
					/* 地理位置服务可用 */
					navigator.geolocation.getCurrentPosition(function(position) {
						this.lat = position.coords.latitude
						this.long = position.coords.longitude
						console.log(this.lat)
					});
				} else {
					// 地理位置服务不可用
					console.log("地理位置服务不可用")
				}

			},
			search() {
				this.keyword = ''
			},
			async getCategoryList() {
				let res = await this.$http({
					url: '/catelist'
				})
				this.cates = res.list
			},
			async getShopList() {
				var res = await this.$http({
					url: '/shoplist',
				})
				this.shops = res.list
			},
			linkTo(id) {
				uni.navigateTo({
					url: `/pages/shop-detail/index?id=${id}`
				})
			}
		},

	}
</script>

<style lang="scss" scoped>
	.home {
		.home-ele {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 44px;
			z-index: 999;

			background-image: linear-gradient(90deg, rgb(41, 202, 255) 0%, rgb(0, 171, 245) 100%);

			opacity: 1;

			.ele {

				height: 44px;
				line-height: 44px;
				margin-left: 0.75rem;
				z-index: 999;
				color: #fff;
				font-size: 1.125rem;
				font-weight: bold;
			}
		}



		.home-address {
			margin-top: 44px;
			background-image: linear-gradient(90deg, rgb(41, 202, 255) 0%, rgb(0, 171, 245) 100%);

			.address {
				z-index: 51;
				padding: 0.75rem 0.75rem 0;
				margin-bottom: 0;
				background-color: #f5f5f5;
				border-radius: 1.25rem 1.25rem 0 0;

				.location {
					.location-icon {
						width: 1.125rem;
						height: 1.125rem;
						margin-right: 0.25rem;
						background-image: url('../../static/location.png');
						background-repeat: no-repeat;
						background-position: center center;
						background-size: 1.125rem 1.125rem;
					}

					.location-txt {
						max-width: 9.53125rem;
						margin-right: 0.28125rem;
						overflow: hidden;
						font-size: 1rem;
						font-weight: 500;
						line-height: normal;
						color: #333;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}

				.right {
					font-size: 0.75rem;
					line-height: 1;
					color: #999;
				}

			}
		}

		.search {
			input {
				flex: 1;
				// width: calc(100% - 4.125rem);
			}

			.search-btn {
				width: 4.125rem;
				height: 1.8rem;
				line-height: 1.78rem;
				color: #fff;
				text-align: center;
			}
		}

		.recomment-shops {

			&::before,
			&::after {
				content: '';
				width: 30.67vw;
				height: 0.03125rem;
				background-color: #ccc;
			}
		}

		.shop-list {
			// 44+32.67 +30.79 +12*2+74+16+18*2
			height: calc(100vh - 17.8rem);

			.good-list {
				height: 100%;

				.good-item {
					.intro {
						max-width: calc(100% - 7.125rem);

						.shop-name {
							max-width: calc(100% - 2.5rem);
						}

						p {
							width: 100%;
							padding: 0.125rem 0;
						}
					}
				}
			}
		}
	}
</style>
