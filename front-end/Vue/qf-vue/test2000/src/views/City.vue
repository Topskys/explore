<template>
  <div class="city">
    <van-index-bar :index-list="computedIndexList" @select="handleChange">
        <div v-for="data in cityList" :key="data.type">
            <van-index-anchor :index="data.type" />
            <van-cell :title="item.name" v-for="item in data.list" :key="item.cityId" @click="handleClick(item)"/>
        </div>
    </van-index-bar>
  </div>
</template>

<script>

import http from '@/util/http'
import { Toast } from 'vant'
import obj from '@/util/mixins'


export default {
    mixins:[obj],//混入 
    data(){
        return {
            cityList:[], // 1
        }
    },
    computed:{// 计算属性
        computedIndexList(){
            return this.cityList.map(item=>item.type) // 映射成字母（type）
        },
    },
    // destroyed() {
    //     //this.$store.commit('show')
    // },
    mounted() {
        //this.$store.commit('hidden')
        http({
            url:'/gateway?k=3547300',
            headers:{
                'X-Host': 'mall.film-ticket.city.list',
            },
        }).then(res=>{
            this.renderCity(res.data.data.cities)// to methods.renderCitty(list)
        })
    },
    methods: {
        renderCity(list){
            // 快速生成二十六个字母
            var letters=[]
            for(var i=65 ; i<91 ;i++){
                letters.push(String.fromCharCode(i))// 将字母转化为对应数值，装入letters中
            }
            // 过滤cities 字母
            var newLetters=[]
            //var cityList=[] //2
            letters.forEach(letter => {
                newLetters = list.filter(item => item.pinyin.substring(0,1).toUpperCase() === letter )
                newLetters.length >0 && this.cityList.push({ //大于0才走该方法,将首个字母一致的放在一起
                    type:letter,
                    list:newLetters,
                })
            })
            //return cityList // 2
        },
        handleChange(data){//获取当前选中的字母
            Toast(data) // 弹出字母
        },
        handleClick(item){// 选择城市，to /cinemas
           // 多页面中的方案
           // 1、location.href='/cinemas?cityname='+ item.name 
           // 2、cookie , localStorage
           
           // 单页面
           // 1、中间人模式
           // 2、bus事件总线 $on, $emit

           // vuex 状态管理模式 引入vuex
           this.$store.commit('ChangeCityName', item.name ) // 通知store-> ChangeCityName()
           this.$store.commit('ChangeCityId', item.cityId) // 通知store-> ChangeCityName()
           this.$router.back()
        }
    },

}
</script>

<style lang="scss" >
.city .van-toast--html, .van-toast--text{// 在最外层 加.city
    min-width: 30px;
}
</style>