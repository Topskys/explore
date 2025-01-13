<template>
  <div>
    Hello vue3----{{myName}}
    <button @click="handleClick">change</button>
    <router-view />
  </div>
</template>

<script>

import {onMounted, reactive, ref, toRefs,provide } from 'vue'
//import {getData} from '@/util/app'
//import axios from 'axios'
import {useRoute,useStore} from 'vue-router'
export default {
  data() {
    return {
      
    }
  },
  setup(){ //vue3 新写法
    console.log("自动执行setup")
    // 定义状态
    const obj=reactive({
        myName:'Topsky1',
        myAge:200,
        list:[],
    })
    const isShow=ref(true)
    provide("Show",isShow)//供应商
    const route=useRoute()//route===this.$route vue3新写法不支持this
    const store=useStore()
    const myTxtRef=ref()
    const handleClick=()=>{
        obj.myName="Topsky2"
        obj.myAge=1090
        console.log("状态：",obj.myName,obj.myAge,"myTxtRef.value")
    }
    // const //handleChangePage=(id)=>{
    //   route.push(`/detail/$(id)`)// 跳转
    // }

    onMounted(()=>{
      // axios.get().then(res=>{
      //   obj.list=res.data
      // })
      store.commit('hide')
      console.log(route.params.id)
    })
    
    return{
       //state,
       ...toRefs(obj),//reactive转化ref
       handleClick,
       myTxtRef,
       //handleChangePage,
    }

    // setup(){
    //   const data=getData()
    //   return data
    // }
    
}

}
</script>

<style>

</style>
