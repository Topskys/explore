<template>
  <div>
      elementUI
        <el-input 
            placeholder="按照elementUI文档编程"
            v-model="input"
            :disabled="true">
        </el-input>
  </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui' // 安装elementUI npm/cnpm i elementUI -S/ npm i --save elementUI
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

export default{
    data() {
        return {
            input:''
        }
    },
}
  
</script>
