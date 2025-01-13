<template>
  <div>
    <!-- Hello App--{{myname}}
    <input type="text " v-model="mytext">
    <button @click="handleAdd">add</button>
    <ul>
      <li v-for="item in datalist" :key="item">
        {{item}}
      </li>
    </ul>

    <navbar whichPage="home" :myright="false"   @event="handleEvent"> 
      <div>使用写在Navbar的Slot标签显示这句话</div>
    </navbar>

    <sidebar v-show="isShow">这句字符串不会显示，当该组件有卡槽slot标签时可显示出来 </sidebar>

    <div v-hello>v-hello指令，添加红色border</div>

    <img :src="imgUrl | imgFilter" alt=""/> -->


    <!-- 底部导航 -->
    <tabbar  ref="mytabbar" v-if="$store.state.isTabbarShow"></tabbar>

    <!-- 路由容器 -->
    <!-- <router-view></router-view> -->
    <section>
      <router-view></router-view>
    </section>



    <!-- <div class="box">rem回顾
         document.documentElement.style.fontSize = document.documentElement.clientWidth / 375 * 16 + 'px' -->
    <!--</div> -->

    <!-- <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group> -->


  </div>
</template>

<script>

// es6 导出规范 -babel(ES6==>ES5)
// @ ---- webpack配置的别名==> src的绝对路径
import axios from 'axios'
import navbar from './components/Navbar'
import sidebar from '@/components/Sidebar'
import Vue from 'vue'

import tabbar from '@/components/Tabbar'

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

// // 全局  or局部注册(xie在components中)
// Vue.component("navbar",navbar)// 全局

//指令
Vue.directive('hello',{
  inserted(el,binding){
    console.log(el)
    el.style.border='1px solid red'
  }
})

//过滤器
Vue.filter('imgFilter',(path)=>{
  return path.replace('/w.h','')+'@1l_1e_1c_128w_180h'
})

export default {
  data() {
    return {
      myname:'Topsky',
      mytext:'',
      datalist:[],
      isShow:true,
      //imgUrl:'http://p0.meituan.net/w.h/movie/056d4f1a658e3e35c9f9e6c44c2aa3fe1831930.jpg'
    }
  },
  components:{ // 局部注册
    navbar,
    sidebar,
    tabbar,
  },
  methods: {
    handleAdd(){
      if (this.mytext){
        console.log(this.mytext)
        this.datalist.push(this.mytext)
      }else{
        console.log('mytext is null')
      }
      
    },
    handleEvent(){
      this.isShow=!this.isShow
    }
  },
  mounted() {
    // https://m.maoyan.com/ajax/movieOnInfoList?token?=&optimus_uuid=74B5F0A032A711EB82DD6B9282E93C676D27D7B9731D4E608D7612C3E708C120&optimus_risk_level=71&optimus——code=10
    // axios.get("/ajax/movieOnInfoList?token?=&optimus_uuid=74B5F0A032A711EB82DD6B9282E93C676D27D7B9731D4E608D7612C3E708C120&optimus_risk_level=71&optimus——code=10")
    // .then(res=>{
    //   console.log("跨域请求的数据1:",res.data)
    // })//（本地） 存在跨域 https://m.maoyan.com/ 不可访问，可以使用反向代理解决,在 vue.config.js中配置


    // axios.get("/Topsky/ajax/movieOnInfoList?token?=&optimus_uuid=74B5F0A032A711EB82DD6B9282E93C676D27D7B9731D4E608D7612C3E708C120&optimus_risk_level=71&optimus——code=10")
    // .then(res=>{
    //   console.log("跨域请求的数据2:",res.data)
    // })

    // console.log(this.$refs.mytabbar.$el.offsetHeight)// 使用vuex吧mytabbar传给Cinemas.vue 计算cinemas的高度
  },
  computed:{},
  watch:{},
}
</script>

<style lang="scss" >

*{
  margin: 0;
  padding: 0;
}
html,body{
  height: 100%;
}
ul{
  list-style: none;
}
section{
  padding-bottom: 3.0625rem;
}

// scoped 让当前样式局部化，否则会被父样式覆盖（App--》Navbar的css）
// $width:300px;
// ul{
//   li{
//     background: skyblue;
//     width: $width;
//     list-style: none;
//   }
// }
// vue-router 声明式导航2 或者 在router-link标签加自定义active-class="Topskyactive"
// .router-link-active{// 或者 .Topskyactive
//   color: red;
// }



.box{ // 计算fontSize 第三步
  width: 23.4375rem;//计算fontSize 第三步 document.documentElement.style.fontSize = document.documentElement.clientWidth / 750 * 16 + 'px'
  height: 12.5rem;
  background: greenyellow;
}


</style>
