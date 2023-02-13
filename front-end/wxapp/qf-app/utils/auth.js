/*
* 鉴权
*/
function CheckAuth(callback) {
    wx.getStorageSync('tel') ?
        callback() :
        wx.navigateTo({
            url: `/pages/${wx.getStorageSync('token')?'telform/telform':'auth/auth'}`,
        })
}

export default CheckAuth