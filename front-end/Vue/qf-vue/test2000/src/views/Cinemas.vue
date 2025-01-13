<template>
  <div>
    <van-nav-bar title="影院" ref="cinemasNavbar" @click-left="toCity"  @click-right="toSearch" >
      <template #left >
        <span class="adresstitle">{{cityName}}</span>
        <van-icon name="arrow-down" color="black"/>
      </template>
      <!-- 插槽：往右边插入search -->
      <template #right>
        <van-icon name="search" size="20" color="black" />
      </template>
    </van-nav-bar>

    <div class="cinemaListBox" :style="{height:height}">
      <ul>
        <li v-for="data in cinemaList" :key="data.cinemaId">
          <div class="left">
            <div class="cinema-name">{{data.name}}</div>
            <div class="cinema-text">{{data.address}}</div>
          </div>
          <div class="right cinema-name">
            <div style="color: orange;">￥{{data.lowPrice/100}} 起</div>
            <!-- <div>{{data.distence}}</div> -->
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import BetterScroll from 'better-scroll'// 安装 保证滑动流畅
import {mapState, mapActions, mapMutations} from 'vuex'// vuex 新写法
import obj from '@/util/mixins'
export default {//vuex-persistedstate 持久化 安装 npm i --save vuex-persistedstate 
  mixins:[obj],
  data(){
    return {
      //cinemaList:[],// 第一种cinemaList
      height:'0px',
    }
  },
  computed:{
    ...mapState(['cinemaList','cityId','cityName']),// 第二种cinemaList展开 省略、不用加前凑 $store.state. 直接cinemaList
    // cinemaList(){ // ...mapState(['cinemaList']) 类似
    //   return this.$store.state.cinemaList
    // },
    
  },
  mounted() {
    // 动态计算 .cinemaListBox 高度
    this.height= document.documentElement.clientHeight - 
    this.$refs.cinemasNavbar.$el.offsetHeight - 
    document.querySelector('footer').offsetHeight + 'px'// 减cinemasNavbar +Tabbar.vue 高度
   // 分发
   if(this.cinemaList.length === 0){// 转移求情防止切换组件回来发生某些数据更变 缓存
     // 异步求情
     //this.$store.dispatch('getCinemasData', this.cityId).then(res=>{
     this.getCinemasData (this.cityId).then(res=>{//http
       this.$nextTick(()=>{// 先执行$nextTick而不是渲染li
        new BetterScroll('.cinemaListBox',{
          scrollbar:{// 滚动条
            fade:true,
          }
        })
      })
     })
   }else{// 存有缓存
     this.$nextTick(()=>{// 先执行$nextTick而不是渲染li
        new BetterScroll('.cinemaListBox',{
          scrollbar:{// 滚动条
            fade:true,
          }
        })
      })
   }
  //  http({
  //     url: `/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=5121167`,
  //       headers: {
  //           'X-Host': 'mall.film-ticket.cinema.list',
  //       },
  //   }).then(res=>{
  //     this.cinemaList=res.data.data.cinemas
  //     this.$nextTick(()=>{// 先执行$nextTick而不是渲染li
  //       new BetterScroll('.cinemaListBox',{
  //         scrollbar:{// 滚动条
  //           fade:true,
  //         }
  //       })
  //     })
  //   })
  },
  methods: {
    ...mapActions(['getCinemasData']),
    ...mapMutations(['ClearCinemaList']),
    toCity(){
      this.$router.push('/city') // 跳转City组件
      // 切换城市 清空缓存 cinemaList
      //this.$store.commit('ClearCinemaList')
      this.ClearCinemaList()
    },
    toSearch(){
      this.$router.push('/cinemas/search') 
    },
  },

}
</script>

<style lang="scss" scoped>
.cinemaListBox{
  // height: 38.625rem;
  overflow: hidden;
  position: relative; //修正滚动条位置
}

ul{
  li{
    padding: .9375rem;
    display: flex;
    justify-content: space-between;
    .left{
      width: 13.25rem;
      overflow: hidden;
    }
    .cinema-name{
      font-size: 15px;
    }
    .cinema-text{
      color:#797d82;
      font-size: 12px;
      margin-top: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
.adresstitle{
  width: 3.125rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

</style>