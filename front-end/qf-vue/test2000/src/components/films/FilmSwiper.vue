<template>
  <div class="swiper-container topsky">
      <div class="swiper-wrapper">
          <slot ></slot>
      </div>
      <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/swiper.min.css'// 导入swiper样式
// import Swiper bundle with all modules installed

  
export default {
    props:{
        loop:{
            type:Boolean,
            default:true,
        }
    },
    mounted() {
        new Swiper(".topsky",{//安装 test2000>npm/cnpm i --save swiper 
            // direction:"vertical",// 垂直
            // if需要分液器
            pagination:{
                el:".swiper-pagination",
            },
            loop:this.loop, //循环
            autoplay:{ //自动播放
                delay:2500,
                disableOnInteraction:false,
            },
        })
    },

}
</script>

<style lang="scss" scoped>
.slot{
    width: 23.4375rem;
    height: 12.5rem;
}
.topsky{
    width: 23.4375rem;
    height: 11.25rem;
    overflow: hidden;
    background: green;
    
}
</style>