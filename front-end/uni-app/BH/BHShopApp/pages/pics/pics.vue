<template>
	<view class="pics">
		<scroll-view scroll-y="true" class="left">
			<view v-for="(cate,idx) in cates" :key="cate.id" :class="active===idx?'active':''"
				@click="selectCate(idx,cate.id)">{{cate.title}}</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="right">
			<view class="item" v-for="img in imgs" :key="img.id">
				<image :src="img.img_url" @click="previewImg(img.img_url)"></image>
				<view class="txt">
					<text>{{img.title}}</text>
				</view>
			</view>
			<text v-if="imgs.length===0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [],
				active: 0,
				imgs: [],
			}
		},
		methods: {
			//获取图片分类
			async getPicCates() {
				const res = await this.$http({
					url: '/api/imgcates'
				})
				this.cates = res.cates
				this.selectCate(0, this.cates[0].id)
				// console.log(this.cates)
			},
			//选中cate高亮
			async selectCate(idx, id) {

				// if (idx === this.active) return
				this.active = idx
				const res = await this.$http({
					url: `/api/imgs/${id}`,
				})
				this.imgs = res.imgs
				console.log("res:", res)
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
			}

		},
		onLoad() {
			this.getPicCates()
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;

		.pics {
			display: flex;
			height: inherit;

			.left {
				width: 200rpx;
				height: 100%;
				border-right: 1px solid #eee;

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
					color: white;
					background-color: #b50e03;
				}
			}

			.right {
				// width: 520rpx;
				width: 100%;
				height: 100%;
				background-color: #eee;
				box-sizing: border-box;

				.item {

					width: 520rpx;
					// height: 520rpx;
					margin: 10px auto;
					border-radius: 5px;
					background-color: white;

					image {
						width: 100%;
						height: 450rpx;

					}

					text {
						color: #333;
						font-size: 30rpx;
						line-height: 60rpx;
						padding: 0 15rpx;
					}
				}
			}
		}
	}
</style>
