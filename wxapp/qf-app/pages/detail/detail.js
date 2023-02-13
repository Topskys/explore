import request from "../../utils/request"
import CheckAuth from "../../utils/auth"

// pages/detail/detail.js
Page({

    /** 
     * 页面的初始数据
     */
    data: {
        detail: {},
        current: 0,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getDetailInfo(options.id)
        wx.setNavigationBarTitle({
            title: options.title
        })
    },
    // 获取详情
    getDetailInfo(id) {
        request({
            url: `goods/${id}`
        }).then(res => {
            this.setData({
                detail: res
            })
        })
    },
    // 图片预览
    handlePreviewImage({
        currentTarget
    }) {
        wx.previewImage({
            current: currentTarget.dataset.image, // the URL of image
            urls: this.data.detail.slides,
        })
    },
    // tabbar
    handleChangeTabbar({
        currentTarget
    }) {
        this.setData({
            current: currentTarget.dataset.current
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


    // 跳转购物车的回调
    handleShopCart() {
        wx.switchTab({
            url: '/pages/shopCart/shopCart',
        })
    },
    // 添加购物车的回调
    handleAdd() {
        CheckAuth(() => {
            let tel = wx.getStorageSync('tel')
            let goodId = this.data.detail.id
            let nickname = wx.getStorageSync('token').nickname
            request({
                url: "carts",
                data: {
                    tel,
                    goodId,
                    nickname
                }
            }).then(res => {
                if (res.length === 0) {
                    return request({
                        url: "carts",
                        method: "post",
                        data: {
                            "username": nickname,
                            "tel": tel,
                            "goodId": goodId,
                            "number": 1,
                            "checked": false
                        }
                    })
                } else {
                    return request({
                        url: `carts/${res[0].id}`,
                        method: "put",
                        data: {
                            ...res[0],
                            number: res[0].number + 1
                        }
                    })
                }
            }).then(res => {
                wx.showToast({
                    title: res || '加入购物车成功',
                })
            })
        })
    },
    // 立即购买的回调
    handlePurchase() {},
})