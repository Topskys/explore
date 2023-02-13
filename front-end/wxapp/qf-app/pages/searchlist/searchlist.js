// pages/searchlist/searchlist.js
import request from "../../utils/request";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodList: [],
    },
    priceOrder: true,
    commentOrder: true,

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.setNavigationBarTitle({
            title: options.title
        })
        this.getList(options.id)
    },
    // 获取商品
    getList(id) {
        request({
            url: `categories/${id}?_embed=goods` // 连表查询
        }).then(res => {
            this.setData({
                goodList: res.goods
            })
        })
    },
    // 跳转详情页面
    handleToDetail(e) {
        wx.navigateTo({
            url: `/pages/detail/detail?id=${e.currentTarget.dataset.id}&title=${e.currentTarget.dataset.title}`
        })
    },
    // 按价格排序
    handlePrice() {
        this.priceOrder = !this.priceOrder
        this.setData({
            goodList: this.data.goodList.sort((a, b) => this.priceOrder ? (a.price - b.price) : (b.price - a.price))
        })
    },
    // 按好评率排序
    handleComment() {
        this.commentOrder = !this.commentOrder
        this.setData({
            goodList: this.data.goodList.sort((a, b) => this.commentOrder ? (parseInt(a.goodcomment) - parseInt(b.goodcomment)) : (parseInt(b.goodcomment) - parseInt(a.goodcomment)))
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

    }
})