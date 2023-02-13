// request封装
function request(options,isHeader=false){
    return new Promise((resolve,reject)=>{
        wx.showLoading({
          title: '加载中...'
        })
        wx.request({
            ...options,
            url:`http://localhost:5000/${options.url}`,
            success: res => resolve(isHeader?{
                list:res.data,
                total:res.header["X-Total-Count"]
            }:res.data),
            fail: err => reject(err),
            complete: (res) => {
                wx.hideLoading({
                    success: (res) => {},
                })
            },
          })
    })
}

export default request 