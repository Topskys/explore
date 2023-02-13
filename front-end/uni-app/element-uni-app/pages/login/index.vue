<template>
	<view class="login">
		<view class="number form-item">
			<input type="text" v-model="user" focus placeholder="请输入账号">
		</view>
		<view class="verify form-item">
			<input type="text" v-model="pwd" placeholder="请输入密码" />
			<!-- <view class="r-flex-2">
				
				<view class="verify-btn br50 ">获取验证码</view>
			</view> -->
		</view>

		<view class="login-btn" @click="login()">
			同意协议并登录
		</view>
		<!-- <input type="checkbox" id="fm-agreement-checkbox" autocomplete="off"> -->
		<view class="agreement">
			<view class="agreement-txt" style="color: #b2b2b2;margin: 10px 0;">
				<label>
					<checkbox value="cb" checked="true" />
					<!-- <input type="checkbox" name="" id="checkbox"> -->
					<label>已阅读并同意</label><a
						href="https://terms.alicdn.com/legal-agreement/terms/suit_bu1_other/suit_bu1_other201903201642_21599.html?spm=a1z3id.21372903.0.0.77f16c591OiMYG"
						target="_blank">《用户服务协议》</a>
					<label>
						、
					</label>
					<a href="https://terms.alicdn.com/legal-agreement/terms/suit_bu1_other/suit_bu1_other201903051859_43484.html"
						target="_blank">《隐私权政策》</a>
				</label>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: '',
				pwd: '',
				url: '/pages/center/index'
			}
		},
		methods: {
			async login() {
				var res = await this.$http({
					url: '/login',
					data: {
						user: this.user || 'Topskys',
						pwd: this.pwd || 'Topskys',
					}
				})
				this.$setStorage('token', res.info)
				if (!this.$getStorage('token')) return
				// uni.showToast({
				// 	title: '登录成功'
				// });
				// uni.navigateBack()
				history.back()
			}
		},
	}
</script>

<style lang="scss" scoped>
	// 定义变量
	$border-color:#7fd2ff;
	$font-color:#02b6fd;
	$mglr:calc((100vw - 87.2vw)/2);
	$agreement:#b2b2b2;

	.login {
		margin-top: 1rem;

		.form-item {
			position: relative;
			margin: 1rem $mglr;

			&::after {
				content: '';
				width: 87.2vw;
				height: 1px;
				background: #ccc;
				position: absolute;
			}

			input {
				padding-left: 0;
				border: none;
				width: 87.2vw;
				height: 13.333vw;
				line-height: 13.333vw;
				font-size: 4.267vw;
			}

			.verify-btn {
				position: absolute;
				right: 0;
				bottom: 1.067vw;
				width: 24vw;
				height: 8vw;
				line-height: 7.467vw;
				text-align: center;
				border: 1px solid $border-color;
				border-radius: 11.733vw;
				color: $font-color;
				font-size: 3.2vw;
			}


		}

		.login-btn {
			margin: 1rem $mglr;
			background: #02b6fd;
			border: none;
			border-radius: 11.733vw;
			width: 87.2vw;
			height: 11.733vw;
			text-align: center;
			line-height: 11.733vw;
			font-size: 4.267vw;
			color: #fff;
		}

		.agreement {
			#checkbox {
				width: 4vw;
				height: 4vw;
				border: 1px solid #ccc;
				border-radius: 100%;
				background-color: #00a6ff;
				outline: none;
				position: relative;
				margin-right: 0.533vw;
				float: left;
				text-align: center;
				color: #fff;
			}

			margin: 6.4vw $mglr;
			font-size: 3.2vw;
			zoom: 1;

			checkbox {
				border: none;
				outline: none;
			}

			a {
				color: $font-color;
				text-decoration: unset;
			}
		}
	}
</style>
