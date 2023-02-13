<template>
	<view class="news_detail">
		<view class="title">{{detail.title}}</view>
		<view class="info">
			<text>发表时间：{{detail.add_time | formatDate}}</text>
			<text>浏览：{{detail.view_count}}</text>
		</view>
		<view class="content">
			<rich-text :nodes="detail.content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0,
				detail: {},
			}
		},
		methods: {
			//获取news详情信息
			async getNewsDetail() {
				const res = await this.$http({
					url: '/api/newsdetail/' + this.id
				})
				this.detail = res.news_detail[0]
			}
		},
		onLoad(options) {
			this.id = options.id //通过options获取url上的id
			this.getNewsDetail()
		}
	}
</script>

<style lang="scss">
	.news_detail {
		font-size: 30rpx;
		padding: 0 15rpx;

		.title {
			margin: 20rpx 0;
			// text-align: center;
			font-size: 40rpx;
			font-weight: 600;
			z-index: 2;
		}

		.info {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 20rpx 0;

			text {
				color: #aaa;
				display: block;
			}
		}
	}
</style>
