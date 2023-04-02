// 需求：有一个服务，根据请求的内容返回响应的数据。

//const express=require('express') // 在ts这种方法不支持 npm i express
import express from 'express' // express不能直接使用，因为express是那js写的，需要安装声明 npm i @types/express -D。

const app=express()

app.get('/',(req,res)=>{
    // res.send('Hi Express')
    res.json({
        code:200,
        data:'',
        msg:'success'
    })
})

app.listen(8001,()=>console.log("server starting......"))