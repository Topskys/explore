//注册逻辑
$('form').on('submit',function(e){
	e.preventDefault()//阻止默认行为，表单有自动提交行为
	const data=$('form').serialize()//采集信息
	$.post('address',data,res=>{
		//判断提交结果
		if(res.code===0){
			//提示错误
			$('form>span').css('display','block')
			return
		}else{
			//跳转页面
			window.alert('恭喜，注册成功了，点击确定跳转到登录页面')
			window.location.href('log.html')
		}
	})
})

//登录逻辑
$('form').on('submit',function(e){
	e.preventDefault()//阻止默认行为
	const data=$('form').serialize()//采集信息
	$.post('address',data,res=>{
		//判断提交结果
		if(res.code===0){
			//提示错误
			$('form>span').css('display','block')
			return
		}else{
			window.alert('登录成功了')
			//存储用户信息
			window.localStorage.setItem('token',res.token)//登录过凭证
			window.localStorage.setItem('id',res.user.id)//用户id
			//跳转页面
			window.location.href('index.html')
		}
	})
})


//首页逻辑
const token=window.localStorage.getItem('token')
const id=window.localStorage.getItem('id)

if(!token||!id){
	$('.off').addClass('active')
	$('.on').removeClass('active')
}else{
	//表示登陆过
	getInfo()//获取用户信息
}
function getInfo(){
	$.ajax({
		url:'address',
		method:'GET',
		data:{id:id},
		headers:{authorization:token},
		success(res){
			//判断是否登录
			if(res.code!==1){//否
				$('.off').addClass('active')
				$('.on').removeClass('active')
				return
			}else{
				$('.on').addClass('active').find('span').text(res.info.nickname)
				$('.off').removeClass('active')
			}
		}
	})
}
//个人中心的跳转
$('button.self').on('click',function(){
	window.location.href='./self.html'
})
//退出登录
$('button.logout').on('click',function(){
	$.get('address',{id:id},res=>{
		//刷新页面
		window.location.reload()
	})
})



//个人中心逻辑
const token=window.localStorage.getItem('token')
const id=window.localStorage.getItem('id)
if(!token||!id){//否
	window.location.href='./log.html'
}else{
	getInfo()
}
function getInfo(){
	$.ajax({
		url:'address',
		method:'GET',
		data:{id:id},
		headers:{authorization:token},
		success(res){
			//判断是否登录
			if(res.code!==1){//否
			    window.location.href='./log.html'
				return
			}else{
				//个人信息展示
				$('form .username').val(res.info.username)
				$('form [name=nickname]').val(res.info.nickname)
				$('form [name=age]').val(res.info.age)
				$('form [name=gender]').val(res.info.gender)
			}
		}
	})
}
//修改个人信息
$('form').on('submit',function(e){
	e.preventDefault()
	const data=$('form').serialize()//采集用户信息
	//发送请求
	$.ajax({
		url:'address',
		method:'POST',
		data:data+'&id='+id,
		headers:{authrization:token},
		succss(res){
			if(res.code===1){
			    window.alert('修改用户信息成功！')
			}
		}
	})
})



//修改密码逻辑
const token=window.localStorage.getItem('token')
const id=window.localStorage.getItem('id)
if(!token||!id){//否
	window.location.href='./log.html'
}else{
	getInfo()
}
function getInfo(){
	$.ajax({
		url:'address',
		method:'GET',
		data:{id:id},
		headers:{authorization:token},
		success(res){
			//判断是否登录
			if(res.code!==1){//否
			    window.location.href='./log.html'
			}
		}
	})
}
//修改密码
$('form').on('submit',function(e){
	e.preventDefault()
	const data=$('form').serialize()//采集用户信息
	//发送请求
	$.ajax({
		url:'address',
		method:'POST',
		data:data+'&id='+id,
		headers:{authrization:token},
		succss(res){
			if(res.code!==1){
				$('form>span').css('display','block')
				return
			}else{
				 window.alert('修改密码成功！')
				 window.location.href='./log.html'
			}
		}
	})
})