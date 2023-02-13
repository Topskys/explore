// 获取轮播图处理函数
exports.banner = (req, res) => {
	res.send({
		status: 200,
		banners: [{
				id: 1,
				imgUrl: 'https://img2.baidu.com/it/u=565131110,1019873086&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=213',
			},
			{
				id: 2,
				imgUrl: 'https://img2.baidu.com/it/u=2117849157,1090834569&fm=253&fmt=auto&app=138&f=JPEG?w=1920&h=450',
			},
			{
				id: 3,
				imgUrl: 'https://img2.baidu.com/it/u=811612525,2038032208&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=273',
			}
		]
	})
}


//商品数据
exports.goods = (req, res) => {

	res.send({
		status: 200,
		goods: [{
				id: 80,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img2.baidu.com/it/u=630073645,435613256&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			},
			{
				id: 81,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img2.baidu.com/it/u=2587088083,2201480197&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			},
			{
				id: 82,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img1.baidu.com/it/u=3716490085,3300901908&fm=253&fmt=auto&app=138&f=JPEG?w=539&h=500',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			},
			{
				id: 83,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img1.baidu.com/it/u=4058525751,1868086428&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			},
			{
				id: 84,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			},
			{
				id: 85,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			},
			{
				id: 86,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			},
			{
				id: 87,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			},
			{
				id: 88,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			},
			{
				id: 89,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			},
			{
				id: 90,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			},
			{
				id: 91,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			},
			{
				id: 92,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			},
			{
				id: 93,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			},
			{
				id: 94,
				name: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
				imgUrl: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946',
				sell_price: 2199,
				market_price: 3999,
				add_time: 234567896554,
				click: 0,
				stock_quantity: 60,
			}
		]
	})
}

//获取图片分类
exports.imgcates = (req, res) => {
	res.send({
		status: 200,
		cates: [{
				title: "家居生活",
				id: 14,
			},
			{
				title: "摄影设计",
				id: 15
			}, {
				title: "明星美女",
				id: 16
			}, {
				title: "空间设计",
				id: 17
			}, {
				title: "户型装饰",
				id: 18
			}, {
				title: "广告摄影",
				id: 19
			}, {
				title: "摄影学习",
				id: 20
			}, {
				title: "摄影器材",
				id: 21
			}, {
				title: "明星写真",
				id: 22
			}, {
				title: "清纯甜美",
				id: 23
			}, {
				title: "古典美女",
				id: 24
			}
		]
	})
}



//获取cate图片imgs
exports.imgs = (req, res) => {
	const id = parseInt(req.params.id) //获取请求路径上的参数 /:id----{ id: '14' 
	console.log("get_imgs_id:", id)

	switch (id) {
		case 14:

			res.send({
				status: 200,
				imgs: [{
						id: 80,
						title: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
						img_url: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946'
					},
					{
						id: 81,
						title: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
						img_url: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946'
					},
					{
						id: 82,
						title: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
						img_url: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946'
					},

				]
			})
			break
		case 15:
			res.send({
				status: 200,
				imgs: [{
						id: 80,
						title: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
						img_url: 'https://img2.baidu.com/it/u=2587088083,2201480197&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375'
					},
					{
						id: 81,
						title: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
						img_url: 'https://img0.baidu.com/it/u=1903415377,57708049&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=946'
					},
					{
						id: 82,
						title: '华为(HUAWEI) 荣耀6Plus 16G双4G版',
						img_url: 'https://img2.baidu.com/it/u=2587088083,2201480197&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375'
					},

				]
			})
			break

		default:
			return
	}
}



//news获取处理函数
exports.newslist = (req, res) => {
	console.log('newslist')
	res.send({
		status: 200,
		newslist: [{
				id: 13,
				title: '滚动播报｜千股飘红！A股港股午后异动拉升，沪指收复3000点',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824592533_640330/0',
				add_time: '2022-04-29',
				view_count: 45672,
			},
			{
				id: 14,
				title: '俄官员称波兰“正与美国制定秘密计划吞并乌克兰西部”，波兰否认',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824550061_640330/0',
				add_time: '2022-4-29',
				view_count: 23456,
			},
			{
				id: 15,
				title: '马英九称“台湾地位未定论”是“荒谬言论” 国台办回应',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14823761941_640330/0',
				add_time: '2022-04-29',
				view_count: 75686,
			},
			{
				id: 16,
				title: '湖北一女子路边买假材料骗贷31次，工行十堰三支行损失3亿元',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824645858_640330/0',
				add_time: '2022-04-29',
				view_count: 657,
			},
			{
				id: 17,
				title: '绝色蓝洁瑛、星爷搭档吴孟达、黄药师曾江…撑起港片的老戏骨走了大半',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824270774_640330/0',
				add_time: '2022-04-29',
				view_count: 467572,
			},
			{
				id: 18,
				title: '连线北京车内自我隔离的好邻居：不想给别人添麻烦 本人高烧已退',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824660677_640330/0',
				add_time: '2022-04-29',
				view_count: 88898,
			},
			{
				id: 19,
				title: '银行回应“应聘者需存1000万元以上”：可通过人脉完成',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824643231_640330/0',
				add_time: '2022-04-29',
				view_count: 123,
			},
			{
				id: 20,
				title: '泽连斯基：联合国秘书长访问基辅期间，5枚导弹就打过来了',
				img_url: 'https://inews.gtimg.com/newsapp_bt/0/14822893116/1000',
				add_time: '2022-04-29',
				view_count: 23451,
			},
			{
				id: 21,
				title: '招行原行长田惠宇落马背后，金融反腐走向深水区',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824425516_640330/0',
				add_time: '2022-04-29',
				view_count: 5546,
			},
			{
				id: 22,
				title: '滚动播报｜千股飘红！A股港股午后异动拉升，沪指收复3000点',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824592533_640330/0',
				add_time: '2022-04-29',
				view_count: 547,
			},
			{
				id: 23,
				title: '滚动播报｜千股飘红！A股港股午后异动拉升，沪指收复3000点',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824592533_640330/0',
				add_time: '2022-04-29',
				view_count: 45,
			},
			{
				id: 24,
				title: '滚动播报｜千股飘红！A股港股午后异动拉升，沪指收复3000点',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824592533_640330/0',
				add_time: '2022-04-29',
				view_count: 4567,
			},
			{
				id: 25,
				title: '滚动播报｜千股飘红！A股港股午后异动拉升，沪指收复3000点',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824592533_640330/0',
				add_time: '2022-04-29',
				view_count: 672,
			},
			{
				id: 26,
				title: '滚动播报｜千股飘红！A股港股午后异动拉升，沪指收复3000点',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824592533_640330/0',
				add_time: '2022-04-29',
				view_count: 472,
			},
			{
				id: 27,
				title: '滚动播报｜千股飘红！A股港股午后异动拉升，沪指收复3000点',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824592533_640330/0',
				add_time: '2022-04-29',
				view_count: 72,
			},
			{
				id: 28,
				title: '滚动播报｜千股飘红！A股港股午后异动拉升，沪指收复3000点',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824592533_640330/0',
				add_time: '2022-04-29',
				view_count: 456,
			},
			{
				id: 29,
				title: '滚动播报｜千股飘红！A股港股午后异动拉升，沪指收复3000点',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824592533_640330/0',
				add_time: '2022-04-29',
				view_count: 2,
			}, {
				id: 30,
				title: '滚动播报｜千股飘红！A股港股午后异动拉升，沪指收复3000点',
				img_url: 'http://inews.gtimg.com/newsapp_ls/0/14824592533_640330/0',
				add_time: '2022-04-29',
				view_count: 42,
			}
		]
	})
}



//获取news详情处理函数
exports.newsDetail = (req, res) => {
	console.log('newsDetail')
	res.send({
		status: 200,
		news_detail: [{
			id: 13,
			title: '滚动播报｜资本市场异动拉升！A股收复3000点，港股科网股大涨',
			add_time: '2022-4-29',
			view_count: '3245',
			content: `离岸人民币兑美元大幅反弹400点

13点10：人民币兑美元午后持续走高，离岸人民币收复日内全部失地，较日低反弹约400点，此前一度跌破6.69。

香港恒生指数午后拉升！

13点05：香港恒生指数午后短线拉升，现涨近4%；恒生科技指数涨超10%，京东涨20%，阿里巴巴、哔哩哔哩涨超15%。

A股创业板指大涨

13点05：创业板指涨超3%，深成指涨超3%，互联网电商、教育、小家电板块涨幅居前。

沪指站上3000点

13点05：A股三大股指集体涨超2%，沪指站上3000点。创业板指涨超3%，深成指涨超3%，互联网电商、教育、小家电板块涨幅居前。`
		}]
	})
}
