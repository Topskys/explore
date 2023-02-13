<template>
	<view class="confirm">
		<uni-card note="Tips">
			<!-- <view class="tabs color-1 r-flex-4 ">
				<text>外卖配送</text>
				<text>到店自取</text>
			</view> -->
			<view class="address mg10-0">
				<input type="text" v-model='address' class="fs18 color-1 ">
				<p class="color-3 mg5-0" v-if="$getStorage('token')">
					<span class="mr5">{{$getStorage('token').nickname}}</span>
					<span>{{$getStorage('token').phone}}</span>
				</p>
			</view>
			<view class="way color-1">
				<p class="mg10-0 r-flex-2">
					<view>立即送出</view>
					<view class="r-flex-1">
						<span class='fs12 color-14 fwbold'>大约45分钟后送达</span><span class='ml5 arrow-right'></span>
					</view>
				</p>
				<p class="mg10-0 r-flex-2">
					<view>支付方式</view>
					<view class="r-flex-1">
						<span class='fs12 color-14 fwbold'>支付宝支付</span><span class='ml5 arrow-right'></span>
					</view>
				</p>
				<p class="mg10-0"></p>
			</view>
		</uni-card>
		<uni-card>
			<view class="info color-1">
				<view class="shop-name over fs12 color-3">华莱士</view>
				<view class="order mg10-0">
					<view class="order-item r-flex-2">
						<view class="r-flex-1">
							<view class="img-box46 mr10 br10">
								<img :src="img" style='border-radius: 5px ;'>
							</view>
							<view class="order-name ">
								<p class="fwbold">{{title}}</p>
								<p class="color-3 fs12">{{num>0?"x"+num:''}}</p>
							</view>
						</view>
						<view class="order-price">
							<p><span class="fs12">￥</span><span class="fs16">{{price}}</span></p>
							<p class="color-3" style="text-decoration: line-through; text-align: end;"><span
									class="fs12">￥</span>{{Math.floor(price + 46)}}</p>
						</view>
					</view>
					<view class="tip mg10-0 fs14">
						<p class="r-flex-2">
							<view class="r-flex-1">
								<span>包装费</span>
								<span class="ml5 fs10 question">?</span>
							</view>
							<view>
								<span class="fs12">￥</span><span class="fs16">{{(Math.random()*2).toFixed(2)}}</span>
							</view>
						</p>
						<p>
						<p class="r-flex-2">
							<view class="r-flex-1">
								<span>配送费(蓝骑士专送)</span>
								<span class="ml5 fs10 question">?</span>
							</view>
							<view>
								<span class="fs12">￥</span><span class="fs16">{{(Math.random()*10).toFixed(2)}}</span>
							</view>
						</p>
						<p class="r-flex-2   color-3">
							<span class="fs10 over">夜间配送，配送费原价上调，另可享配送费活动减免4元</span>
							<span
								class=" fs10 text-line-through "><span>￥</span><span>{{(Math.random()*5).toFixed(2)}}</span>
							</span>
						</p>
						<p class="r-flex-2">
							<view>红包/抵用券</view>
							<view class='r-flex-1'>
								<view class="fs10 color-3">无可用红包</view>
								<view class="arrow-right ml5"></view>
							</view>
						</p>
						<p class="back r-flex-2">
							<span>下单返豆</span>
							<span class=" fs12 fwbold color-13">无可用红包</span>
						</p>

					</view>

				</view>
				<view class="r-flex-2 mt16">
					<view class="r-flex-1">
						<span class='fs12'>优惠说明</span>
						<span class="ml5 question">?</span>
					</view>
					<view class="r-flex-1 fs12 color-1">
						<text><span>已优惠</span><span class="color-9">￥{{reduce}}</span></text>
						<text class="ml5 r-flex-1"><span>小计￥</span><span class="fs16">{{price}}</span></text>
					</view>
				</view>
			</view>
		</uni-card>
		<view class="pay r-flex-6 bgc-2 pg5-12">
			<view class="mr10">
				<p><span class="fs12">合计￥</span><span class="fs16">{{price}}</span></p>
				<p class="fs12 color-9">已优惠￥{{reduce}}</p>
			</view>
			<view class="pay-btn pg10-20 bgc-8 color-4 " @click="pay()">
				提交订单
			</view>
		</view>
	</view>
</template>

<script>
	import uniCard from '@/uni_modules/uni-card/components/uni-card/uni-card'
	export default {
		data() {
			return {
				price: 0,
				num: 0,
				img: '',
				address: this.$getStorage('token').address || '福州软件园大道89号',
				title: '',
				reduce: 0,
				shop_img: '',
				shop_name: '',
			}
		},
		components: {
			uniCard,
		},
		onLoad: function(option) {
			this.price = Number(option.price) // option.price
			this.num = option.num
			this.img = option.img
			this.shop_img = option.shop_img
			this.shop_name = option.shop_name
			this.title = option.title
			this.reduce = this.price > 0 ? (Math.random() * 46).toFixed(2) : 0
		},
		methods: {
			async pay() {

				if (!this.$getStorage('token')) {
					uni.navigateTo({
						url: `/pages/login/index`,
					})
				}
				// if(this.$getStorage('pay').pay_token){
				// 	window.location.href='/#/poages/order/index'
				// 	return
				// }
				if ((!this.price && !this.num && !this.title && !this.img && !this.shop_img && !this.shop_name && !this
						.$getStorage('token').account)) return
				var res = await this.$http({
					url: `/pay?title=${this.title}&price=${this.price}&num=${this.num}&img=${this.img}&shop_name=${this.shop_name}&shop_img=${this.shop_img}&token=${this.$getStorage('token').account}`
				})
				if (res.pay.pay_token) {
					this.$setStorage('pay', res.pay)
					uni.showToast({
						title: `${res.pay.pay_status}`
					});
					setTimeout("window.location.href='/#/pages/order/index'", 3000)
				}

			}
		}
	}
</script>

<style lang="scss" scoped>
	.uni-card {
		margin: 0.625rem .75rem !important;
		padding: 0 !important;
	}

	.info {
		// margin-bottom: 1.875rem;

		.tip {
			position: relative;

			&::after {
				content: '';
				width: 100%;
				height: 1px;
				margin: 0.625rem 0;
				background-color: whitesmoke;
				position: absolute;
			}
		}
	}

	.pay {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		border-top: 1px solid whitesmoke;

		.pay-btn {
			border-radius: 1.4375rem;
		}
	}
</style>
