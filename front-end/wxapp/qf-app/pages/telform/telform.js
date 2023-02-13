import request from "../../utils/request"

// pages/telform/telform.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tel: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    // 获取输入的手机号
    formInputChange(e) {
        this.setData({
            tel: e.detail.value
        })
    },
    // 确定按钮的回调
    submitForm() {
        wx.setStorageSync('tel', this.data.tel)
        request({
            url: `users?${this.data.tel}&username=${wx.getStorageSync('token').nickName}&avatarUrl=${wx.getStorageSync('token').avatarUrl}`
        }).then(res => {
            res.length === 0 ? request({
                url: `users`,
                method: "post",
                data: {
                    ...wx.getStorageSync('token'),
                    username:wx.getStorageSync('token').nickName,
                    tel: this.data.tel
                }
            }).then(() => {
                wx.navigateBack({
                    delta: 2,
                })
            }) : wx.navigateBack({
                delta: 2,
            })
        })
    },



})