<template>
	<view class="item">
		<view class="news_item" v-for="news in newsList" :key="news.id" @click="detail(news.id)">
			<image :src="news.img_url" mode=""></image>
			<view class="right">
				<view class="txt">{{news.title}}</view>
				<view class="info">
					<view class="dt">发布时间：{{news.add_time | formatDate}}</view>
					<view class="view_count">浏览量：{{news.view_count}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "news-item",
		data() {
			return {

			};
		},
		props: ['newsList'],
		methods: {
			//回调父组件select属性函数
			detail(nid) {
				this.$emit("select", nid)
			}
		},
		//思域过滤
		// filters: {
		// 	formDate(date) {
		// 		const dt = new Date(date)
		// 		const y = dt.getFullYear()
		// 		const m = (dt.getMonth() + 1).toString().padStart(2, 0)
		// 		const d = dt.getDate().toString().padStart(2, 0)
		// 		return `${y}-${m}-${d}`
		// 	}
		// }
	}
</script>

<style lang="scss">
	.news_item {
		display: flex;
		padding: 20rpx 20rpx;
		border-bottom: 1px solid #b50e03;

		image {
			//防止图片伸缩
			min-width: 200rpx;
			max-width: 200rpx;
			height: 150rpx;
			// margin-right: 10px;
		}

		.right {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			margin-left: 15rpx;

			.txt {
				font-size: 30rpx;
			}

			.info {
				width: 100%;
				font-size: 24rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}
	}
</style>
