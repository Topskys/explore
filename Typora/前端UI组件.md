### 拼多多导航栏

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<script>
		
		</script>
		
		<style>
		*{
			margin: 0;
			padding: 0;
		}
		.nav{
			border-top: 1px solid lightgray;
			position: fixed;/*固定导航栏*/
			top: 0px;/*Nav距离上面为0，配合fixed使用*/
			width: 100%;
			height: 103px;
			background-color: white;
			border-bottom: 4px solid #ED435B;
		}
		.div1{
			height: 150px;
			margin-top: 107px;/*外边距，配合fixed使用*/
			background-color: blueviolet;
		}
		.div2{
			height: 150px;
			background-color: grey;
		}
		.div3{
			height: 150px;
			background-color: royalblue;
		}
		.div4{
			height: 150px;
			background-color: goldenrod;
		}
		.div5{
			height: 150px;
			background-color: palegreen;
		}
		
		.head{
			width: 1200px;
			height: 102px;
			
			margin: 0 auto;
			position: relative;
		}
		.logo{
			width: 160px;
			height: 63px;
			margin: 20px 0;
		}
		.nav .head ul{
			list-style: none;
			right: 20px;
			height: 20px;
			line-height: 20px;
			top: 50%;
			margin-top: -10px;
			font-size: 18px ;
			position: absolute;
		}
		.nav .head ul li{
			float: left;
			border-right: 1px solid #6C6C6C;
		}
		.nav .head ul li a{
			text-decoration: none;
		}
		.nav .head ul li span{
			color: #6C6C6C;
			margin: 0 15px;
		}
		.nav .head ul li:first-child span{
			margin-left: 0;
			color: #FC475D;
		}
		.nav .head ul li:last-child{
			border: none;
		}
		.nav .head ul li:last-child span{
			margin-right: 0;
		}
		</style>
		
	</head>
	<body>
		<div class="nav">
			<div class="head">
				<a href="#">
					<img src="../img/pdd_logo.png" alt="" title="" class="logo">
				</a>
				<ul>
					<li>
						<a href="#">
							<span>首页</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>商家入驻</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>热点资讯</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>爱心扶贫</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>社会招聘</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>校园招聘</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>商务合作</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>帮助中心</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>举报平台</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>分享赚钱</span>
						</a>
					</li>
				</ul>
			</div>
			
			
		</div>
		<div class="div1"></div>
		<div class="div2"></div>
		<div class="div3"></div>
		<div class="div4"></div>
		<div class="div5"></div>
	</body>
</html>
```





### 拼多多侧边固定二维码

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
		*{
			padding: 0;
			margin: 0;
		}
		.div1{
			height: 400px;
			background-color: #008B8B;
		}
		.div2{
			height: 500px;
			background-color: #3498DB;
		}
		.box{
			width: 162px;
			height: 210px;
			background-color: white;
			position: fixed;/*固定*/
			bottom: 150px;
			left: -81px;
		}
		.box:hover{
			left: 0;
		}
		.box .box1{
			margin: 8px;
			border: 2px solid #FFEDF1;
			padding: 20px 15px 8px;
		}
		.box .box1 img{
			width: 100%;
			height: 100%;
			display: block;/*文字会进入存二维码框内*/
		}
		.box .box1 .box2{
			color: #666666;
			margin-top: 10px;
			font-size: 14px;
			text-align: center;
		}
		</style>
	</head>
	<body>
		<div class="div1"></div>
		<div class="div2"></div>
		<div class="box">
			<div class="box1">
				<img src="../img/slim.png" alt="" title="">
				<div class="box2">
					<div>微信扫码下载</div>
					<div>App专享优惠</div>
				</div>
			</div>
			
		</div>
		
	</body>
</html>
```

**input输入框动画**

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		
		<style type="text/css">
			*{
				margin: 0;
				padding: 0;
				outline: none;
				box-sizing: border-box;/* 告诉浏览器:你想要设置的边框和内边距的值包含在总宽高内的 */
			}
			body{
				/* 弹性布局，水平垂直居中 */
				display: flex;
				justify-content: center;
				align-items: center;
				/* 设置body最小高度为100%窗口高度 */
				min-height: 100vh;
				/* 渐变色背景 */
				background: linear-gradient(200deg,#0c3483,#a2b6df);
			}
			.input-main{
				width: 28.125rem;/* 450px */
				background-color: #fff;
				/* 上下左右内边距 */
				padding: 2.5rem;/* 40px */
				/* 盒子阴影 */
				box-shadow: 0px,0px,10px rgba(0,0,0,0.1);
				/* 圆角 */
				border-radius: 0.5rem;/* 8px */
			}
			.input-main .input-data{
				/* 相对定位 */
				position: relative;
				width: 100%;
				height: 2.5rem;/* 40px */
				
			}
			.input-main .input-data input{
				width: 100%;
				height: 100%;
				border: none;
				font-size: 1.0625rem;/* 17px */
				border-bottom: 0.125rem solid #C0C0C0;/* 2px */
			}
			/* 输入框获得焦点时 */
			.input-main .input-data input:focus ~label,
			/* 输入框的值为合法值时 */
			.input-main .input-data input:focus ~label{
				/* label上移同时改变字号、字体颜色 */
				transform: translateY(-1.5625rem);/* -25px */
				font-size: 0.9375rem;/* 15px */
				color: #2c6fdb;
			}
			.input-main .input-data label{
				position: absolute;
				bottom: 0.625rem;/* 10px */
				left: 0rem;/* 0px */
				color: #808080;
				/* 这个属性可以使点击label穿透到输入框 */
				pointer-events: none;
				/* 现在动画有点生硬，这里需要给动画加个过度 */
				transition: all 0.3s ease;
			}
			.input-main .input-data .underline{
				position: absolute;
				bottom: 0px;
				height: 0.125rem;/* 2px */
				width: 100%;
				background-color: #2C6FDB;
				/* 沿x轴缩小 */
				transform: scaleX(0);
				/* 这里同样给个动画过度 */
				transition: all 0.3s ease;
			}
			.input-main .input-data input:focus ~.underline,
			.input-main .input-data input:focus ~.underline{
				/* 沿x轴放大 */
				transform: scaleX(1);
			}
		</style>
		
	</head>
	<body>
		
		<div class="input-main">
			<div class="input-data">
				<input type="text" name="" id="" value=""  required="required"/>
				<div class="underline"></div>
				<label>input account</label>
			</div>
			<div class="input-data" style="margin-top: 30px;">
				<input type="text" name="" id="" value=""  required="required"/>
				<div class="underline"></div>
				<label>input secret</label>
			</div>
		</div>
		
	</body>
</html>
```

