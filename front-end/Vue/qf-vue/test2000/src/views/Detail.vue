<template>
  <div v-if="filmInfo">
    <detail-header v-scroll="50">{{filmInfo.name}}</detail-header>
    <!-- <img :src="filmInfo.poster"> -->
    <div :style="{backgroundImage:'url('+filmInfo.poster+')'}" class="poster"></div>
    <div class="content">
      <div>{{filmInfo.name}}</div>
      <div>
        <div class="detail-text">{{filmInfo.category}}</div>
        <div class="detail-text">{{filmInfo.premiereAt | premiereAtFilter}}上映</div>
        <div class="detail-text">{{filmInfo.nation}} | {{filmInfo.runtime}}分钟</div>
        <div class="detail-text" style="line-height:15px;" :class="isHidden?'hidden':''">{{filmInfo.synopsis}}</div>
        <div style="text-align:center;"><i class="iconfont " @click="isHidden=!isHidden" :class="isHidden?'icon-xiajiantou':'icon-shangjiantou'"></i></div>
      </div>
    </div>

    <div>
       <div style="margin:.9375rem;">演职人员</div>
        <!-- <van-swipe :perview="3" name="actors" style="width: 23.4375rem;" :vertical="false">
          <van-swipe-item v-for="(data,index) in filmInfo.actors" :key="index" >
            <div :style="{ backgroundImage:'url('+data.avatarAddress+')'}" class="avatar"></div>
            <div style="text-align:center;font-size:12px;color:gray;">{{data.name}}</div>
            <div style="text-align:center;font-size:13px;color:gray;">{{data.role}}</div>
          </van-swipe-item>
        </van-swipe> -->
      
      <detail-swiper :perview="3" name="actors" style=" padding:.9375rem;width:23.4375rem; overflow:hidden;"> 
        <detail-swiper-slide v-for="(data,index) in filmInfo.actors" :key="index" >
          <div :style="{ backgroundImage:'url('+data.avatarAddress+')'}" class="avatar"></div>
          <div style="text-align:center;font-size:12px;color:gray;">{{data.name}}</div>
          <div style="text-align:center;font-size:13px;color:gray;">{{data.role}}</div>
        </detail-swiper-slide>
      </detail-swiper>
    </div>

    <div>
      <div style="margin:.9375rem;">剧照</div>
      <!-- <van-swipe :loop="false"  :perview="2"  name="photos"  style="width: 23.4375rem;" :vertical="false">
        <van-swipe-item  v-for="(data,index) in filmInfo.photos" :key="index">
          <div :style="{ 
            backgroundImage:'url('+data+')'
            }" 
            class="avatar"
            @click="ImagePreview(index)">
          </div>
        </van-swipe-item>
      </van-swipe> -->
      <detail-swiper :perview="2"  name="photos" style="padding:.9375rem; width:23.4375rem; overflow:hidden;"> 
        <detail-swiper-slide v-for="(data,index) in filmInfo.photos" :key="index" >
          <div :style="{ 
            backgroundImage:'url('+data+')'
            }" 
            class="avatar"
            @click="ImagePreview(index)">
          </div>
        </detail-swiper-slide>
      </detail-swiper>
    </div>

  </div>
</template>

<script>

import http from '@/util/http.js'
import moment from 'moment'// npm/cnpm i/install --save moment
import Vue from 'vue'
import detailSwiper from '@/components/detail/DetailSwiper'
import detailSwiperSlide from '@/components/detail/DetailSwiperSlide'
import detailHeader from '@/components/detail/DetailHeader'
import { ImagePreview,Toast } from 'vant'// 引入图片预览

moment.locale('zh-cn')// 设置成中文
Vue.filter("premiereAtFilter",(data)=>{
  return moment(data*1000).format('YYYY-MM-DD')//'MMMM Do YYYY, h:mm:ss a'
})

Vue.directive("scroll",{// 指令
  inserted(el, binding){// el 拿到整个detailheaderdiv
    el.style.display='block'
    window.onscroll=()=>{
      if((document.documentElement.scrollTop || document.body.scrollTop) > binding.value){// >20px 显示
        el.style.display='block'
      }else{
        el.style.display='none'
      }
    }
  },
  unbind() {
    window.onscroll=null //销毁 否则会影响其他页面
  },
})
import obj from '@/util/mixins'
export default {
  mixins:[obj],
  data(){
    return{
      filmInfo:null,
      isHidden:true,// 控制详情文字是否折叠
      
    }
  },
  components:{
    detailSwiper,
    detailSwiperSlide,
    detailHeader,
  },
  methods: {
    ImagePreview(index){ // 剧照预览
      ImagePreview({
        images:this.filmInfo.photos, // 所有剧照
        startPosition:index,
        closeable:true, //关闭按钮
        // closeIconPosition:'top-left',
      })
    },
  },
  mounted() {
    // 匹配当前路由
    // console.log('this.$route.params.id:', this.$route.params.id) //1 location.href获取当前地址、2 this.$route拿到当前路由。while this.$route 拿到整个路由表。
    // axios 利用myid发送请求到详情接口，获取详细数据，布局页面
    // axios({// 默认 get请求
    // url:`https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=1175628`,
    // headers:{
    //     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1642602055130764574294017","bc":"440300"}',
    //     'X-Host': 'mall.film-ticket.film.info',
    //   },
    // })
    http({
      url: `/gateway?filmId=${this.$route.params.id}&k=1175628`,
        headers: {
            'X-Host': 'mall.film-ticket.film.info',
        },
    }).then(res=>{
      this.filmInfo=res.data.data.film
   })
  },

}
</script>

<style lang="scss" scoped>
.poster{
  width: 100%;
  height: 13.125rem;
  background-position: center;
  background-size: cover;// background-repeat定义背景图像的重复方式。背景图像可以沿着水平轴，垂直轴，两个轴重复，或者根本不重复
}
.content{
  padding: .9375rem;
  .detail-text{
    font-size: 13px;
    color: #797d82;
    margin-top: .875rem;
  }
  .hidden{
    overflow:hidden;
    height:30px;
  }
}
.avatar{
    width: 100%;
    height: 6.25rem;//原 85px
    background-position: center;
    background-size: cover;
}
</style>