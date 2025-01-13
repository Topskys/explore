<template>
  <div>
      watch
      <input type="text" v-model="obj.mytext" @input="handleInput"/>
      <ul>
          <li v-for="data in obj.datalist" :key="data">{{data}}</li>
      </ul>
  </div>
</template>

<script>
import {reactive,watch} from 'vue'
export default {
    setup() {
        const obj=reactive({
            mytext:'',
            datalist:["asn","gas","qgg","bgw","qrygc","xEc"],
            oldlist:["asn","gas","qgg","bgw","qrygc","xEc"]
        })
        const handleInput=()=>{
            console.log(obj.datalist.filter(item=>item.includes(obj.mytext)))
            //obj.datalist=obj.oldlist.filter(item=>item.includes(obj.mytext))
        }
        watch(()=>obj.mytext,()=>{// 只要obj.mytext改变，就会执行一次
            console.log("watch")
             obj.datalist=obj.oldlist.filter(item=>item.includes(obj.mytext))
        })
        return {
            obj,
            handleInput,
        }
    }
}
</script>

<style>

</style>