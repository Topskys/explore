<template>
  <div>
    Hello vue3--{{myName}}
    <button @click="handleClick">change</button>
    <router-view />
  </div>
</template>

<script>

import {reactive,  toRefs } from 'vue'

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
    })
    const handleClick=()=>{
        obj.myName="Topsky2"
        console.log("reactive to toRefs：",obj)
    }
    
    return{
       //state,
       ...toRefs(obj),//reactive转化ref
       handleClick,
    }
}
}
</script>

<style>

</style>
