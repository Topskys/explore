<template>
	<scroll-view scroll-y="true" style="height: 100%;">
		<view>
			<view class="shop-name-img bgc-2">
				<view class="shop-img">
					<img :src="shopDetail.img" alt="">
				</view>
				<uni-card title="" thumbnail="" extra="" note="Tips">
					<view class="basic r-flex-5 color-11">
						<view>
							<view class="shop-name r-flex-1 fs20 fwbold color-1">
								<view class='name over'>{{shopDetail.name}}</view>
								<view class="arrow arrow-right fs14 ml5"></view>
							</view>
							<view style="margin-top: 1.33vw;">
								<span class='color-5 fs12'>{{shopDetail.score}}</span>
								<span class="mg0-5 pg0-5 br4 border-1 fs10 color-10">{{shopDetail.express}}</span>
								<span class='fs12'>{{shopDetail.need_time}}<span
										class='mg0-5 fs12'>·</span>{{shopDetail.sell}}</span>
							</view>
						</view>
						<view class="img-box50 br10">
							<img :src="shopDetail.img" alt="">
						</view>
					</view>
					<view class="notice fs10 color-3 over">
						{{shopDetail.tips}}
					</view>
					<view class="tags fs12 color-2">
						<view class="promise r-flex-1">
							<view class="tag r-flex-1 mr10">
								<img src="/static/promise.png" class='img-12 mr5'>
								<span>融化必赔</span>
							</view>
							<view class="tag r-flex-1">
								<img src="/static/promise.png" class='img-12 mr5'>
								<span>支持预订</span>
							</view>
						</view>
						<view class="tag  fs12 color-12 r-flex-1">
							<view class="br4 pg0-5 bgc-6">￥<span class='fs16 bgc-6'>{{shopDetail.reduce}}</span>无门槛
							</view>
							<view class="pg0-5 br4 bgc-6" style="height: 24px;line-height:24px;">领</view>
						</view>
						<view class="tag fs10 color-13">
							<span class='br4 border-2 pg0-5'>绿箭满减</span>
							<span class='br4 border-2 pg0-5 mg0-5'>云南白药满减</span>
							<span class='br4 border-2 pg0-5'>高洁丝满减</span>
						</view>
					</view>

				</uni-card>
			</view>
		</view>
		<!-- tabs -->
		<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="button"
			activeColor="#000"></uni-segmented-control>
		<view class="content">
			<view v-show="current === 0">
				<!-- 商家商品分类 -->
				<view class="sort-goods r-flex-1">
					<scroll-view scroll-y="true" class="left">
						<view v-for="(cate,idx) in goodCates" :key="cate.id" :class="active===idx?'active':''"
							@click="selectCate(idx,cate.id)">{{cate.title}}</view>
					</scroll-view>
					<scroll-view scroll-y="true" class="right mg0-auto">
						<view class="item r-flex-1 " v-for="good,i in goods" :key="i">
							<view class="img-box104 mr10">
								<image :src="good.img" @click="previewImg(good.img)"></image>
							</view>
							<view class="intro c-flex-4">
								<view>
									<p class='over'>{{good.title}}</p>
									<p class='over fs12 color-3'>{{good.tips}}</p>
									<p class='over fs12 color-3'>{{good.sell}}</p>
								</view>
								<view class='r-flex-2 mt16'>
									<view class="price color-9"><span class='fs10'>￥</span>{{good.price}}</view>
									<view class="add br50 bgc-3 color-4" @click='add(good)'>+</view>
								</view>
							</view>
						</view>
						<text v-if="goods.length===0">暂无数据</text>
					</scroll-view>
				</view>
			</view>
			<!-- 购买导航栏 -->
			<view class="buy bgc-2 r-flex-2" v-show="current==0">
				<view class="left r-flex-1">
					<view class="img-box36 ele-basket">
						<img src="/static/basket.png" alt="">
						<span class='stuff fs12 br50 bgc-7 color-4' v-if='total_stuff>0'>{{total_stuff}}</span>
					</view>
					<view class="fs12  ml10">
						<p class='fwbold color-3' v-if='total_price<=0'>未选购商品</p>
						<p class='fwbold color-2' v-else>{{total_price>0?"￥"+total_price:''}}</p>
						<p class='color-3'>{{total_stuff>0?buy_tip:''}}免基础配送费
						</p>
					</view>
				</view>
				<view class="right">
					<view class='fs16 color-4' :class="total_price>0?'bgc-8':'bgc-9'" @click='toBuy()'>去结算</view>
				</view>
			</view>
		</view>
		<!-- 评价 -->
		<view v-show="current === 1">
			<view class="comment color-15 mg10" align='center'>
				暂无评价
			</view>
		</view>
		<!-- 商家 -->
		<view v-show="current === 2">
			<view class="shop-intro">
				<uni-card style='pg10'>
					<view class="mg10-0">
						<view class="r-flex-2">
							<view class="left">
								<p class="fs14 fwbold  mw282 over color-1">{{shopDetail.name}}</p>
								<p class='addrres over mw282'>{{shopDetail.address}}</p>
							</view>
							<view class="right img-box24 mg12 " @click="open">
								<img src="/static/contact.png" class=" border-l pg12">
							</view>

						</view>
					</view>
					<view class="shop-info">
						<p class="fs14 fwbold color-1  mg5-0 ">商家信息</p>
						<p class="fs12 over mw282 color-1 mg5-0">商家品类：{{shopDetail.type}}</p>
						<p class='fs12 over mw282 color-1 mg5-0'>营业时间：{{shopDetail.work_time}}</p>
					</view>
					<view class='color-15 intelligent-btn border-3 br100 ' align='center' @click="checkIntelligent">
						查看营业资质
					</view>
				</uni-card>
				<uni-card class='pg10 uni-card-3'>
					<p class='fs14 fwbold color-1 mg5-0'>商家服务</p>
					<view class="r-flex-7 mg5-0">
						<view>
							<span class="color-15 border-3 br4 pg0 fs12">融化必赔</span>
						</view>
						<view class="fs12 color-15">
							购买指定冰品冷饮或冷蔵饮料，满足相应条件时，可享受红包赔付。
						</view>
					</view>
					<view class="r-flex-7 mg5-0">
						<view>
							<span class="color-15 border-3 br4 pg0 fs12">支持预订</span>
						</view>
						<view class="fs12 color-15">
							商户支持提前预定服务，您可自行选择期望的送达时间
						</view>
					</view>

				</uni-card>
				<uni-card align='center'>
					<view class='color-15 fs14' @click="complain">举报商家</view>
				</uni-card>
				<!-- 商家手机号弹窗 -->
				<!-- <uni-popup ref="popup" type="bottom">
					<view class="phone mg10 color-1 fs14 mg0-auto">
						<span>{{shopDetail.phone}}</span>
					</view>
				</uni-popup> -->
			</view>
		</view>
		</view>
	</scroll-view>
</template>

<script>
	import uniCard from '@/uni_modules/uni-card/components/uni-card/uni-card'
	import uniSegmentedControl from '@/uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control'
	// import uniPopup from '@/uni_modules/uni-popup/components/uni-popup/uni-popup'
	export default {
		data() {
			return {
				shopDetail: {},
				goodCates: [],
				active: 0,
				goods: [],
				total_stuff: 0,
				total_price: 0,
				buy_tip: '',
				good: {},
				title: '',
				items: ['全部商品', '评价', '商家'],
				current: 0,
			}
		},
		components: {
			uniCard,
			uniSegmentedControl,
			// uniPopup,
		},
		onLoad: function(option) {
			// 接收home的商店id路由参数
			//option为object类型，会序列化上个页面传递的参数
			this.getShopDetail(option.id)
			this.getGoodCates()
		},
		methods: {
			// tab选中的回调
			onClickItem(e) {
				if (this.current != e.currentIndex) {
					this.current = e.currentIndex;
				}
			},
			// 获取商店详情
			async getShopDetail(id) {
				let res = await this.$http({
					url: `/shopdetail`,
					data: {
						id
					}
				})
				this.shopDetail = res.shop_detail
			},
			//获取图片分类
			async getGoodCates() {
				const res = await this.$http({
					url: '/goodcates'
				})
				this.goodCates = res.list
				this.selectCate(0, this.goodCates[0].id)
			},
			//选中cate高亮
			async selectCate(idx, id) {
				// if (idx === this.active) return
				this.active = idx
				const res = await this.$http({
					url: `/good`,
					data: {
						id
					}
				})
				this.goods = res.list
			},
			//图片预览
			previewImg(current) {
				//映射出img_url
				const urls = this.imgs.map(item => {
					return item.img_url
				})
				//预览
				uni.previewImage({
					current,
					urls
				})
			},
			add(good) {
				this.total_stuff += 1;
				this.total_price += good.price;
				this.total_price = Math.floor(this.total_price * 100) / 100
				this.buy_tip = '优惠明细 '
				this.good = good
				this.title = good.title
			},
			toBuy() {
				var num = this.total_stuff
				var price = this.total_price
				var title = this.title
				if (this.$getStorage('token')) {
					uni.navigateTo({
						url: `/pages/pay/index?title=${title}&price=${price}&num=${num}&img=${this.good.img}&shop_name=${this.shopDetail.name}&shop_img=${this.shopDetail.img}`,
					})
				} else {
					uni.navigateTo({
						url: `/pages/login/index`,
					})
				}
			},
			// 查看商家资质
			checkIntelligent() {
				// todo：
				uni.showToast({
					title: 'null'
				});
			},
			// 投诉商家
			complain() {
				// todo：
				uni.showToast({
					title: '举报成功'
				});
			},
			// 商家电话弹窗回调
			open() {
				// this.$refs.popup.open() // 传入参数'top'，type失效
				uni.showToast({
					title: this.shopDetail.phone
				})
			}

		}
	}
</script>

<style lang="scss" scoped>
	.shop-name-img {
		position: relative;
		height: 12.5rem;
		// background-color: aqua;

		.shop-img {
			width: 100%;
			height: 7.5rem;

			img {
				width: 100%;
				height: 100%;
				background-position: center;
				background-size: cover;
				object-fit: fill;

			}
		}

		.uni-card {
			position: absolute;
			top: 10%;
			left: 0;
			right: 0;
			width: inherit;
			padding: 0 !important;
			margin: auto 3.2vw !important;

			.basic {
				margin-top: 1.8667vw;

				.shop-name {
					max-width: 67.3333vw;

				}
			}
		}
	}



	/deep/.segmented-control {
		color: #000 !important;
		margin: 0 .75rem;
	}

	/deep/ .segmented-control__item--button--active {
		color: #000 !important;
		background-color: #fff !important;
		background: #fff !important;
		font-weight: bold;
	}

	::v-deep .segmented-control__item {

		justify-content: flex-start !important;
		border-style: none !important;

		&:nth-child(2) {
			margin: 0 2rem;
		}
	}


	.sort-goods {
		// 调整全部商品scroll视窗高度
		height: calc(100vh - 5rem); // max:20.2rem

		.left {
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
			background-color: #eee;

			view {
				width: 200rpx;
				height: 60px;
				color: #333;
				font-size: 30rpx;
				text-align: center;
				line-height: 60px;
				border-right: 1px solid #eee;
				border-bottom: 1px solid #eee;
			}

			.active {
				color: #000;
				background-color: #fff;
			}
		}

		.right {
			width: 520rpx;
			// width: 100%;
			height: 100%;
			// background-color: #eee;
			box-sizing: border-box;

			.item {

				width: 520rpx;
				// height: 520rpx;
				margin: 10px auto;
				border-radius: 5px;
				background-color: white;

				image {
					width: 100%;
					height: 100%;
					border-radius: 0.625rem;
					// height: 450rpx;
				}

				.intro {
					.add {
						width: 1rem;
						height: 1rem;
						text-align: center;
						line-height: 1rem;
					}

					p {
						width: calc(16.25rem - 6.5rem - .625rem);
					}
				}

				text {
					color: #333;
					font-size: 30rpx;
					line-height: 60rpx;
					text-align: center;
					padding: 0 15rpx;
				}
			}
		}

	}

	.buy {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: .3125rem 0.625rem;

		.left {
			.ele-basket {
				position: relative;

				.stuff {
					position: absolute;
					top: 0;
					right: 0;
					width: 1rem;
					height: 1rem;
					text-align: center;
					line-height: 1rem;
				}
			}
		}

		.right {
			>view {
				width: 7.25rem;
				height: 2.34rem;
				text-align: center;
				line-height: 2.34rem;
				border-radius: 6.25rem;
			}
		}
	}

	.shop-intro {
		.intelligent-btn {
			margin: .625rem auto;
			width: 27.7333vw;
			height: 7.4667vw;
			font-size: 3.2vw;
			line-height: 7.4667vw;
			text-align: center;
		}

		.uni-card-3 {
			view>span {
				white-space: nowrap;
				margin-right: .625rem;
			}
		}
	}


	.uni-card {
		padding: 0 !important;
		margin: 0 .75rem;
	}
</style>
