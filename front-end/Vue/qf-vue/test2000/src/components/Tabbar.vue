<template>
  <footer>
    <ul>
    <!-- 声明式导航1 -->
      <!-- js中有location.hash获取当前路径--添加高亮选中，window.onhashchange=()=>{console.log("路径发生变化执行")} -->
      <!-- 
        <li><a href="/#/films">电影</a></li>
        <li><a href="/#/cinemas">影院</a></li>
        <li><a href="/#/center">我的</a></li>
       -->

    <!-- vue-router js编程式导航2-->
      <!-- 会自动生成.router-link-active类或自己添加class-active -->
      <!-- it is supportive to write “tag=‘li’ ” at before of the Vue3 , includes the vue3 -->
      <!-- <li>
         <router-link to="/films" >电影</router-link>
      </li> -->
      <!-- <router-link to="/cinemas" active-class="TopskyActive" tag="li">影院</router-link> -->
      <!-- vue4中navigate监测 @click="navigate"函数、isActive表示选中返回值是布尔值
      :class="isActive?'TopskyActive':'' "判断isActive的布尔值选择class -->
      <!-- <router-link to="/center" custom v-slot="{navigate,isActive}">
         <li @click="navigate" :class="isActive?'TopskyActive':'' ">我的{{isActive}}</li>
      </router-link> -->

      <router-link to="/films" custom v-slot="{navigate,isActive}">
         <li @click="navigate" :class="isActive?'TopskyActive':'' ">
            <i class="iconfont icon-dianying"></i>
            <span>电影</span>   
         </li>
      </router-link>
      <router-link to="/cinemas" custom v-slot="{navigate,isActive}">
         <li @click="navigate" :class="isActive?'TopskyActive':'' ">
             <i class="iconfont icon-yingyuan"></i>
             <span>影院</span> 
         </li>
      </router-link>
      <router-link to="/center" custom v-slot="{navigate,isActive}">
         <li @click="navigate" :class="isActive?'TopskyActive':'' ">
             <i class="iconfont icon-wode1"></i>
             <span>我的</span>
         </li>
      </router-link>

       <!--v-for遍历 <router-link :to="{{变量}}" active-class="TopskyActive" tag="li">影院</router-link> -->
    </ul>
  </footer>
</template>

<script>


// 引入阿里图标 第二种放在assets
import '../assets/ali_icons/iconfont.css'
export default {

}
</script>

<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    html,body{
        height: 100%;
    }
    .TopskyActive{
        color: red;
    }

    footer{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 49px;
        background: whitesmoke;
        z-index: 100;// 层级对比 防止内容覆盖tabbar
        ul{
            display: flex;
            li{
                flex: 1;//等份大小 
                line-height: 25px;// 文字居中
                text-align: center;// 文字垂直
                // icons
                display: flex;
                flex-direction: column;
                i{
                    font-size: 20px;
                }
                span{
                    font-size: 16px;
                }
            } 
            
        }
    }


</style>