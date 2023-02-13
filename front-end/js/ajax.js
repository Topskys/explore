// JS如何封装一个Ajax请求
// 请求方式，请求地址，请求参数，请求参数的类型
// 返回请求结果
function ajax(options) {
    // 创建XMLHttpRequest对象
    const xhr = new XMLHttpRequest()
        // 初始化参数的内容
    options = options || {}
    options.type = (options.type || 'GET').toUpperCase()
    options.dataType = options.dataType || 'json'
    const params = options.data
        // 发送请求
    if (options.type === 'GET') {
        // 第三个参数是async：布尔值，是否异步执行请求
        xhr.open('GET', options.url + "?" + getParams(params), true)
        xhr.send(null)
    } else if (options.type === 'POST') {
        xhr.open('POST', options.url, true)
        xhr.send(params)
    }
    // 接收请求
    xhr.onreadystatechange = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            // responseText 字符串形式的响应式数据
            // response XML形式的响应式数据
            options.success(xhr.responseText, xhr.response)
        } else {
            options.fail("参数错误" + status)
        }
    }
}

// 使用ajax
ajax({
        type: 'gte',
        dataType: 'json',
        data: {
            limit: 10,
            age: 18,
        },
        url: 'localhost:8888',
        success: function(text, xml) {
            console.log(JSON.parse(text), xml)
        },
        fail: function(status) {
            console.log(status)
        }
    })
    // 处理请求参数
function getParams(data) {
    let arr = []
    for (let key in data) {
        arr.push(`${key}=${data[key]}`)
    }
    // console.log(arr)
    // 使用&拼接
    return arr.join('&')
}
