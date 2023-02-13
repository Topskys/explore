// pages/home/home.js
import request from '../../utils/request.js';


Page({

    /**
     * 页面的初始数据
     */
    data: {
        looplist:[],
        goods:[],
    },
    /**
     * 普通数据，改变不会触发页面更新
     */
    page:1,
    limit:5,
    total:0,

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        this.renderSwiper()
        this.renderGoods() 
    },
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom(){
        // 懒加载
        if(this.data.goods.length===this.total) return
        this.page++
        this.renderGoods()
    },
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
        setTimeout(()=>{
            wx.stopPullDownRefresh()
        },2000)
    },
    // 请求轮播数据
    renderSwiper(){
        request({
            url:"recommends"
        }).then(res=>{
            this.setData({
                looplist:res
            })
        })
    },
    // 请求商品数据
    renderGoods(){
        request({
            url:`goods?_page=${this.page}&_limit=${this.limit}`
        },true).then(res=>{
            this.setData({
                goods:[...this.data.goods,...res.list]
            })
            this.total=Number(res.total)
        })
    },
    // 详情页面跳转
    handleChangePage(e){
        wx.navigateTo({
          url: `/pages/detail/detail?id=${e.currentTarget.dataset.id}&title=${e.currentTarget.dataset.title}`
        })
    },
    // 点击搜索框页面跳转
    handleEvent(){
        wx.navigateTo({
            url:`/pages/search/search`
        })
    },
})