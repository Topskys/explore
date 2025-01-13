<template>
  <div class="header">
      <van-icon name="arrow-left" @click="handleBack" style="font-size:20px;"/>
      <!-- <i class="iconfont icon-xiajiantou" @click="handleBack"></i> -->
      <slot></slot>
  </div>
</template>

<script>
// import '@/assets/ali_icons/iconfont.css'
export default {
    methods: {
        handleBack(){
            this.$router.back()//返回上一页面
        },
    },
}
</script>

<style  lang="scss" scoped>
.header{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 2.75rem;
    line-height: 2.75rem;
    background: white;
    text-align: center;
    i{
        font-size: 30px;
        position: fixed;
        left: .9375rem;
        top: 0;
        height: 2.75rem;
        line-height: 2.75rem;
    }
}
</style>