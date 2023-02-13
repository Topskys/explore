<template>
	<view class="goods">
		<goodList :goods="goodList" @sltGood="toDetail" />
		<view class="isVoer" v-if="flag">
			----我是有底线的----
		</view>
	</view>
</template>

<script>
	import goodList from '@/components/good-list/good-list.vue'
	export default {
		data() {
			return {
				pageindex: 1,
				goodList: [],
				flag: false,
			}
		},
		components: {
			goodList,
		},
		onLoad() {
			this.getGoodList()
		},
		methods: {
			//获取商品列表数据
			async getGoodList(callBack) {
				const res = await this.$http({
					url: '/api/goods?pageindex=' + this.pageindex
				})
				this.goodList = [...this.goodList, ...res.goods]
				callBack && callBack()
			},
			//商品详情页
			toDetail(gid) {
				uni.navigateTo({
					url: '/pages/good-detail/good-detail?id=' + this.gid
				})
			}
		},
		//触底加载
		onReachBottom() {
			if (this.goodList.length < this.pageindex * 10) return this.flag = true
			this.pageindex++
			this.getGoodList()
		},
		//下拉刷新
		onPullDownRefresh() {
			this.pageindex = 1
			this.goodList = []
			this.flag = false,
				setTimeout(() => {
					this.getGoodList(() => { //callBack
						uni.stopPullDownRefresh()
					})
				}, 1000)
		}
	}
</script>

<style>
	.goods {
		background-color: #eee;
	}

	.isVoer {
		width: 100%;
		height: 50px;
		color: #ccc;
		font-size: 28rpx;
		text-align: center;
	}
</style>
