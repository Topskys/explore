<template>
  <div>
    通信props-->navbar
    <navbar myprops="Props to navbar" myId="fromPropsId" @event="change"/>  
    <sidebar v-show="obj.isShow"/>
  </div>
</template>

<script>
import navbar from '@/components/Navbar'
import sidebar from '@/components/sidebar'
import {inject, onMounted, onUnmounted, reactive} from 'vue'

export default {
  components: {
    navbar,
    sidebar,
  },
  setup() {
    const obj = reactive({//創建響應式對象，可認為是模板中的狀態
      isShow: true,// reactive must use "obj.isShow"
    });
    
    const change = () => {
      obj.isShow = !obj.isShow;
    };
    const isShows=inject("Show")//Show from App.vue  inject插入
    onMounted(()=>{
      isShows.value=false
    })
    onUnmounted(()=>{
      isShows.value=true
    })
    
    return {
      obj,
      change,
    };
  },
};
</script>

<style>
</style>