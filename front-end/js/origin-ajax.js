function originAjax(){
		//第一步：定义XMLHttpRequest 对象
		var xhr = new XMLHttpRequest();
		//第二步：调用xhr的open方法为其传参数
		//第一个参数为请求类型,第二个参数URL地址
		xhr.open(method,Url,async);
		//第三步：发送请求(数据)
   let data='data'
		xhr.send(data);
		//第四步：定义获取请求状态的方法 01234 4为请求成功
		xhr.onreadystatechange = function(){
			//第五步：获取状态
			if(xhr.readyState==4){
				//第六步：获取后台返回的值
				var value = xhr.responseText;//或 xhr.responseXML
				document.getElementById("msg").innerText = value;
			}
		}
	}
