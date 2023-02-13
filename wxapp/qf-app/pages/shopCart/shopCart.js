// pages/shopCart/shopCart.js
import CheckAuth from '../../utils/auth'
import request from '../../utils/request'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        slideButtons: [{
            type: "warn",
            text: "删除"
        }],
        cartList: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    onShow() {
        CheckAuth(() => {
            let {
                username
            } = wx.getStorageSync('token')
            let tel = wx.getStorageSync('tel')
            request({
                url: `carts?_expand=good&username=${username}&tel=${tel}` // 连表查询
            }).then(res => {
                this.setData({
                    cartList: res
                })
            })
        })
    },
    // 左滑删除
    slideButtonTap(e) {
        var id=e.currentTarget.dataset.id
        this.setData({
            cartList:this.data.cartList.filter(x=>x.id!=id)
        })
        request({
            url: `carts/${id}`,
            method: "delete"
        })
    },
    // 勾选商品
    handleCheck(e) {
        var item = e.currentTarget.dataset.item
        item.checked = !item.checked
        this.handleUpdateView(item)
    },
    // -
    handleMinus(e){
        var item=e.currentTarget.dataset.item
        if(item.number===1) return wx.showToast({
          title: '数量必须为1件以上',
        })
        item.number--
        this.handleUpdateView(item)
    },
    // +
    handleAdd(e){
        var item=e.currentTarget.dataset.item
        item.number++
        this.handleUpdateView(item)
    },
    // 全选按钮
    handleCheckChange(e){
        if(e.detail.value.length===0){
            this.setData({
                cartList:this.data.cartList.map(x=>({
                    ...x,
                    checked:false
                }))
            })
            // 同步后端
        }else{
            this.setData({
                cartList:this.data.cartList.map(x=>({
                    ...x,
                    checked:true
                }))
            })
            // 同步后端
        }
    },
    // 更细视图
    handleUpdateView(item) {
        this.setData({
            cartList: this.data.cartList.map(x => {
                if (x.id === item.id) {
                    return item
                }
                return x
            })
        })
        request({
            url: `carts/${item.id}`,
            method: "put", // 不支持patch请求，局部更新
            data: {
                "username": item.username,
                "tel": item.tel,
                "goodId": item.goodId,
                "number": item.number,
                "checked": item.checked
            }
        })
    },
})