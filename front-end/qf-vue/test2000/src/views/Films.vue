<template>
  <div>
    <!-- 大轮播 -->
    <van-swipe :autoplay="3000" style="width: 23.4375rem;
   height: 12.5rem;">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image.imgUrl" style="width: 100%;
      background-position: center;
      background-size: cover;" />
      </van-swipe-item>
    </van-swipe>
    <!-- <film-swiper :key="slidelist.lenght">
      <film-swiper-slide v-for="slide in slidelist" :key="slide.bannerId"> -->
        <!-- <img :src="slide.imgUrl" /> -->
      <!-- </film-swiper-slide>
    </film-swiper> -->
    <!-- 二级导航 -->
    <film-header class="sticky"></film-header>
    <!-- 路由容器显示 -->
    <router-view></router-view>
  </div>
</template>

<script>
import filmSwiper from "@/components/films/FilmSwiper.vue"
import filmSwiperSlide from "@/components/films/FilmSwiperSlide.vue"
import filmHeader from "@/components/films/FilmHeader.vue"
import axios from 'axios'// npm i --save axios

export default {
  components:{
    filmSwiper,// 驼峰式写法，<film-swiper></film-swiper>
    filmSwiperSlide,
    filmHeader,
  },
  data() {
    return {
      // slidelist:["插到FilmSwiper的slot",2222,3333],
      // slidelist:[],
      images:[],
      
    }
  },
  mounted() {
    setTimeout(()=>{// 1s后才出现slidelist，异步
      axios.get("/banner.json").then(res=>{
        //this.slidelist=res.data.banner
        this.images=res.data.banner
      })
    },1000)
  },
}

</script>

<style lang="scss" scoped>

.sticky{
  position: sticky;//粘性的
  top:0px;
  background: white;
  z-index: 100;//防止 数据覆盖注二级导航栏
}

 .my-swipe.van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
 } 

</style>