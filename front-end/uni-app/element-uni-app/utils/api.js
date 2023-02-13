const BASE_URL = 'http://localhost:8889'

export const http = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'get',
			data: options.data || {},
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			success: (res) => {
				if (res.data.status !== 200) return uni.showToast({
					title: '获取数据失败'
				})
				console.log(res.data)
				resolve(res.data)
			},
			fail: (err) => {
				uni.showToast({
					title: '请求接口失败'
				})
				reject(err)
			}
		})
	})
}
