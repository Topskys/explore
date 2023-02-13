
import CheckAuth from "../../utils/auth"
// pages/mine/mine.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: null,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        CheckAuth(() => {
            this.setData({
                userInfo: wx.getStorageSync('token')
            })
        })
    },
    // 换头像的回调
    handleExchangeAvatar() {
        // 打开摄像头或相册
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: res => {
                const tempFilePaths = res.tempFilePaths
                this.setData({
                    userInfo: {
                        ...this.data.userInfo,
                        avatarUrl: tempFilePaths[0]
                    }
                })
                wx.setStorageSync('token', {
                    ...wx.getStorageSync('token'),
                    avatarUrl: tempFilePaths[0]
                })
                // 同步后端
            }
        })
    }

})