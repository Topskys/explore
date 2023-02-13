import request from "../../utils/request"

// pages/category/category.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        vtabs: [],
        activeTab:0,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        request({
            url: `categories?_embed=goods`
        }).then(res => {
            this.setData({
                vtabs:res
            })
        })
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

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },
    // 点击左侧分类的回调
    onTabClick(){
        console.log("rtyyuin")
    },
    // 
    onChange(e){
        console.log("2",e)
        this.setData({
            activeTab:e.detail.index
        })
    },
    // 
    handleTap({currentTarget}){
        wx.navigateTo({
          url: `/pages/detail/detail?id=${currentTarget.dataset.id}&title=${currentTarget.dataset.title}`,
        })
    },
})