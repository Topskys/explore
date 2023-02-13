<template>
	<view class="order bgc-1">
		<view class="order-ele">
			<view class="ele">
				饿了么
			</view>

			<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="button"
				activeColor="#000"></uni-segmented-control>
			<view class="content">
				<view v-show="current === 0">
					<view class="order-item bgc-2 pg10 br10" v-show="order.price!=''">
						<view class="title r-flex-2">
							<view class="shop r-flex-1">
								<view class="shop-img img-box36 mr10">
									<img :src="order.shop_img" class='br5'>
								</view>
								<view class="shop-name over" @click="navTo('/pages/order-detail')">
									{{order.shop_name}}<i class="fa fa-chevron-right fs14 ml5" style="color: #bbb;"></i>
								</view>
							</view>
							<view class="status fs14" style="color: #999; ">
								{{order.order_status}}
							</view>
						</view>
						<view class="tip mg5-0">
							<span class="tip-txt">{{order.rest}}</span>
						</view>
						<view class="imgs r-flex-2 mg10-0">
							<view class="img-list r-flex-1 ">
								<!-- <view class="img-item img-box56 " v-for="item,i in imgs" :key="i"> -->
								<img :src="item.img" alt="" v-for="item,i in order.imgs" :key="i" class=" img-box56 br5"
									:class="l<2?'mr10':''">
								<!-- </view> -->
								<span v-if="l<2" class='fs14'>{{order.name}}</span>
							</view>
							<view class="price pg0-10" align='center'>
								<p class='fs14'><span class="fs12">￥</span>{{order.price}}</p>
								<p class="fs12 color-3 mt5">共{{order.num}}件</p>
							</view>
						</view>
					</view>
					<view v-show="order.price==''" class="mg10" align='center'>
						数据出错
					</view>
				</view>
				<view v-show="current === 1" class="mg10" align='center'>
					暂无数据
				</view>
				<view v-show="current === 2" class="mg10" align='center'>
					暂无数据
				</view>
				<view v-show="current === 3" class="mg10" align='center'>
					暂无数据
				</view>
			</view>
		</view>



	</view>
</template>

<script>
	import uniSegmentedControl from '@/uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control'
	export default {
		data() {
			return {
				items: ['全部', '待付款', '待评价', '退款'],
				current: 0,
				order: {},
				l: 0,
			}
		},
		components: {
			uniSegmentedControl,
		},
		onLoad() {
			setTimeout(() => {
				this.$getStorage('token') ? '' : location.href = '/#/pages/login/index'
			}, 3000)
			this.getOrder()
		},
		methods: {
			// tab选中的回调
			onClickItem(e) {
				if (this.current != e.currentIndex) {
					this.current = e.currentIndex;
				}
			},
			navTo(url) {
				uni.navTo(url)
			},
			async getOrder() {
				// if (this.$getStorage("order") && this.$getStorage("order").price != "") {
				// 	this.order = this.$getStorage("order")
				// 	this.l = this.order.imgs.length
				// } else {
				let res = await this.$http({
					url: `/order` //?token=${this.$getStorage('token').account }
				})
				this.order = res.order
				this.$setStorage("order", this.order)
				this.l = this.order.imgs.length
				// }

			}
		}
	}
</script>

<style lang="scss" scoped>
	.order {
		height: calc(100vh - 3.9375rem);

		/deep/.segmented-control {
			color: #000 !important;
			margin: 0 .75rem;
			background-color: #f5f5f5 !important;
		}

		/deep/ .segmented-control__item--button--active {
			color: #000 !important;
			background-color: #f5f5f5 !important;
			font-weight: bold;
		}

		::v-deep .segmented-control__item {

			justify-content: flex-start !important;
			border-style: none !important;

			&:nth-child(2) {
				margin: 0 1rem;
			}

			&:last-child {
				margin-left: 1rem;
			}
		}

		.img-list {
			width: calc(100% - 4rem);
			overflow: scroll;

			img:last-child {
				margin: 0;
			}
		}

		.price {
			width: 2.75rem;
		}
	}

	.order-item {
		margin: 0.75rem;

		.tip {

			.tip-txt {
				color: white;
				font-size: 0.875rem;
				padding: 0 5px 1px 5px;
				border-radius: 3px;
				background-color: #999999;

			}
		}
	}

	.order-ele {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 44px;
		background-color: #f5f5f5;
		opacity: 1;

		.ele {
			height: 44px;
			line-height: 44px;
			margin-left: 0.75rem;
			z-index: 999;
			color: #191919;
			font-size: 1.125rem;
			font-weight: bold;
		}
	}
</style>


<!-- orders: [{
					name: '果然不同',
					img: '/static/pig.jpg',
					vegetable: [{
							img: '/static/logo.png'
						}, {
							img: '/static/logo.png'
						}, {
							img: '/static/logo.png'
						},
						{
							img: '/static/logo.png'
						},
						{
							img: '/static/logo.png'
						},
						{
							img: '/static/logo.png'
						},
						{
							img: '/static/logo.png'
						},
					], -->
