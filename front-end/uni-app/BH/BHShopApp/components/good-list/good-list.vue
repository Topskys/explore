<template>
	<view class="good_list">
		<view class="good_item" v-for="good in goods" :key="good.id" @click="select(good.id)">
			<image :src="good.imgUrl" mode=""></image>
			<view class="price">
				<text>￥{{good.sell_price}}</text>
				<text>￥{{good.market_price}}</text>
			</view>
			<view class="name">{{good.name}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "good-list",
		props: ['goods'],
		methods: {
			select(gid) {
				this.$emit('sltGood', gid)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.good_list {
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.good_item {
			width: 355rpx;
			padding: 15rpx;
			margin: 10px 0;
			box-sizing: border-box;
			background-color: white;

			image {
				width: 100%;
				height: 250rpx;
				// margin: 0 auto;
			}

			.price {
				color: #b50e03;
				font-size: 36rpx;
				margin: 10rpx 0;

				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					margin-left: 17rpx;
					text-decoration: line-through;
				}
			}

			.name {
				font-size: 38rpx;
				line-height: 50rpx;
				padding-bottom: 10rpx;
			}
		}
	}
</style>
