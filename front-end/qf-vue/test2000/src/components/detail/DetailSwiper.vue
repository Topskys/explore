<template>
  <div class="swiper-container " :class="name">
      <div class="swiper-wrapper">
          <slot ></slot>
      </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/swiper.min.css'// 导入swiper样式
// import Swiper bundle with all modules installed

  
export default {
    props:{
        perview:{
            type: Number,
            default: 1,
        },
        name:{// :class="name"
            type:String,
            default:"topsky"
        }
    },
    mounted() {
        new Swiper("."+this.name,{
            slidesPerView:this.perview,
            spaceBetween:30,
            freeMode:true,
           
        })
    },

}
</script>

<style lang="scss" scoped>
.slot{
    width: 23.4375rem;
    height: 12.5rem;
}
</style>