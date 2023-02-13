<template>
	<view class="news">
		<news-item :newsList='newsList' @select='toDetail' />
	</view>
</template>

<script>
	import newsItem from '@/components/news-item/news-item.vue'
	export default {
		data() {
			return {
				newsList: [],
			}
		},
		components: {
			newsItem,
		},
		methods: {
			//获取资讯
			async getNewsList() {
				const res = await this.$http({
					url: '/api/newslist'
				})
				this.newsList = res.newslist
			},
			//news详情
			toDetail(nid) {
				uni.navigateTo({
					url: '/pages/news-detail/news-detail?id=' + nid
				})
			}
		},
		onLoad() {
			this.getNewsList()
		}
	}
</script>

<style lang="scss">
	.news {
		display: flex;
		flex-direction: column;
	}
</style>
