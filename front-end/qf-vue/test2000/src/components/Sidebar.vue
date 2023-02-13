<template>
  <div>
      
      <ul>
          <li>Sidebar  </li>  
          <li v-for="item in datalist" :key="item.filmId">{{item.name}}</li>
      </ul>
  </div>
</template>

<script>

import axios from 'axios'
export default {
    data() {
        return {
            datalist:[]
        }
    },
    mounted() { // 已完成模块已经渲染或el对应html渲染后调用
        //第一种方法fetch
        // fetch("/testData.json")
        //     .then(res=>res.json())
        //     .then(res=>{ 
        //         console.log(res.data.films)
        //         this.datalist=res.data.films 
        //     })
            
        //第二种方法axios 
        axios.get("/testData.json").then(res=>{
            console.log(res.data.data.films)
            this.datalist=res.data.data.films
        })
    },
}
</script>

<style  lang="scss" scoped>
ul{
    li{
        background: greenyellow;
    }
}
</style>