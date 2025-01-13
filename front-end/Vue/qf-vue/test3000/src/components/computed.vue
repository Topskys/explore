<template>
  <div>
      计算属性
      <input type="text" v-model="obj.mytext" />
      <ul>
          <li v-for="data in computedList" :key="data">{{data}}</li>
      </ul>
  </div>
</template>

<script>
import {computed, reactive} from 'vue'
export default {
    setup() {
        const obj=reactive({
            mytext:'',
            datalist:["aaaavcbsn","gasgrcqcc","qvwgg","twyctbgw","qrygcgcsvfrjg egjEh","frfvagcxEc"]
        })
        const filterlist=()=>{// filterlist=() vue3不支持|filter，只能使用函数式过滤, 只运行一次，要重复调用。
            return obj.datalist.filter(item=>item.includes(obj.mytext))//1
        }
        const computedList =computed(()=>{//计算属性，有变动就会重新计算
            return obj.datalist.filter(item=>item.includes(obj.mytext))//2
        })
        return {
            obj,
            filterlist,
            computedList,
        }
    }
}
</script>

<style>

</style>