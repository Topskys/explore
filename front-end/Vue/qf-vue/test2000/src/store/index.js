import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// vuex 管理保存公共状态，分散在各个组件内的状态，统一管理
// vuex 默认是管理在内存， 刷新就会消失   
// vuex 应用： 1、非父子通信 2、

import http from '@/util/http'
import persistedState from 'vuex-persistedstate' // 持久化

export default new Vuex.Store({ // 通过 this.$store 访问store
    // 持久化
    plugins: [persistedState({ //存储
        //storage: window.sessionStorage, // 默认是localStorage
        reducer: (state) => {
            return {
                cityId: state.cityId,
                cityName: state.cityName,
            }
        }
    })], //防止刷新时 数据放生变换

    state: { // state 公共状态
        cityId: 310100,
        cityName: '上海',
        cinemaList: [],
        isTabbarShow: true,
    },
    actions: {
        //支持 异步和同步
        getCinemasData(store, cityId) { //第一种：null 第二种：store 第三种：cityId从cinemas传过来
            return http({ // + return 可以返回对象从而可以.then(res=>{this.$nextTick(()=>{// 先执行$nextTick而不是渲染li
                //     new BetterScroll('.cinemaListBox', {
                //         scrollbar: { // 滚动条
                //             fade: true,
                //         }
                //     })
                // })
                //})
                url: `/gateway?cityId=${cityId}&ticketFlag=1&k=5121167`, //第一种： ${this.$store.state.cityId} 或 第二种：${store.state.cityId} 第三种：${cityId}
                headers: {
                    'X-Host': 'mall.film-ticket.cinema.list',
                },
            }).then(res => {
                store.commit('ChangeCinemasData', res.data.data.cinemas)
            })
        }
    },

    mutations: { // devools 监控 //同步
        ChangeCityName(state, cityName) {
            state.cityName = cityName
        },
        ChangeCityId(state, cityId) {
            state.cityId = cityId
        },
        ChangeCinemasData(store, data) {
            store.cinemaList = data
        },
        ClearCinemaList(state) {
            state.cinemaList = []
        },
        show(state) {
            state.isTabbarShow = true
        },
        hidden(state) {
            state.isTabbarShow = false
        },
    },
    modules: {}
})