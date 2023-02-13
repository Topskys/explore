<template>
  <div>
      todo----{{obj1.mytext}}---{{myname}}
      <input type="text" v-model="obj1.mytext" ref="mytextref" />
      <button @click="handleAdd">add</button>
      <ul>
          <!-- <li v-for="(data,i) in obj1.datalist" :key="i">{{data}}</li> -->
          <li v-for="list in mylist" :key="list">{{list}}</li>
      </ul>
      
   </div>
   <!-- <div>vue3支持多个根节点</div> -->
</template>

<script>

import {reactive,ref} from 'vue'

export default {
    data() {
        return {
            myname:'Topsky',
        }
    },
    setup() {
        const obj1=reactive({//1
            mytext:'',
            datalist:[],
        })
        const mylist=reactive(["1111","222","3333"])

        const mytextref=ref()//2

        const handleAdd=()=>{
            console.log(obj1.mytext,"拿到Dom节点：",mytextref.value.value)//mytextref.value.value拿到节点的值
            obj1.datalist.push(obj1.mytext)
            mylist.push(mytextref.value.value)
        }
        return {
            obj1,
            mylist,
            mytextref,
            handleAdd,
        }
        
    }
};
</script>

<style>
</style>