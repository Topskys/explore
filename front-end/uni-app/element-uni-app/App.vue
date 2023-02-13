<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	#App {
		color: #191919;
	}

	html {
		font-size: 16px;
	}

	// 公共样式
	@import './index.scss';
	// vant的css
	// @import 'vant/lib/index.css';
	// @import "/wxcomponents/vant/dist/common/index.wxss";
	// 引入字体图标
	@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
</style>
