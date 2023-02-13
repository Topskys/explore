<template>
  <div>
    <!-- <ul>
      <li v-for="data in filmlist" :key="data.filmId" @click="handleDetailPage(data.filmId)">
        <img :src="data.poster"/> -->
        <!--第一种进入detail： <router-link to="/detail">{{item}}</router-link> -->
        <!-- 第二种进入detail：@click="handleDetailPage" 编程式导航-->
        <!-- <div>
          <div class="title"> {{data.name}}</div>
          <div class="content">
            <div :class="data.grade?'':'hidden'"> 观众评分: <span style="color:red;">{{data.grade}}</span> </div> 
            <div class="actors">主演：{{data.actors | actorsFilter}}</div>
            <div>{{data.nation}} | {{data.runtime}}分钟</div>
          </div>
        </div>
      </li>
    </ul> -->

    <!-- 实现列表懒加载 -->
    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad" 
        :immediate-check="false">
        <van-cell  v-for="data in filmlist" :key="data.filmId" @click="handleDetailPage(data.filmId)">
          <img :src="data.poster"/>
          <div>
            <div class="title"> {{data.name}}</div>
            <div class="content">
              <div :class="data.grade?'':'hidden'"> 观众评分: <span style="color:red;">{{data.grade}}</span> </div> 
              <div class="actors">主演：{{data.actors | actorsFilter}}</div>
              <div>{{data.nation}} | {{data.runtime}}分钟</div>
            </div>
          </div>
        </van-cell>
    </van-list>
  </div>
</template>

<script>
import Vue from 'vue'
import http from '@/util/http.js'

//过滤器
Vue.filter('actorsFilter',(data)=>{
  if(data===undefined) return '暂无主演'
  return data.map(item=>item.name).join('') // ES5的映射、join成字符串
})

export default {
  data() {
    return {
      filmlist:[],
      loading:false,
      finished:false,
      current:1,
      total:0,
    }
  },
  mounted() {
    http({
        url: `/gateway?cityId=${this.$store.state.cityId}&pageNum=1&pageSize=10&type=1&k=4087179`,
        headers: {
            'X-Host': 'mall.film-ticket.film.list'
        },
    }).then(res=>{
      this.filmlist=res.data.data.films
      this.total=res.data.data.total
    })
  },  
  methods: {
    handleDetailPage(id){
      //编程式导航
      // location.href='#/detail' //注意 # 模式
      // this.$router.push(`/detail/${id}`)
      this.$router.push({
        name:'TopskyDetail',// 放到 命名路由
        params:{
          id:id,
        },
      })
    },
    onLoad(){// 防止onload一开始就执行 :immediate-check="false"
      console.log("到底了...")
      if (this.filmlist.length === this.total && this.total!==0){//弃用懒加载功能  this.total!==0 防止从详情页返回触发onload()
        this.finished=true //所有数据都取完了
        return  
      }
      this.current++
      http({
          url: `/gateway?cityId=${this.$store.state.cityId}&pageNum=${this.current}&pageSize=10&type=1&k=4087179`,
            headers: {
                'X-Host': 'mall.film-ticket.film.list'
          },  
      }).then((res)=>{
        this.filmlist=[...this.filmlist,...res.data.data.films]// 展开老数组与新数组合并
        this.loading=false//主动将loading 设置为false
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.van-list{//ul
 .van-cell{// li
    overflow: hidden;
    padding: 15px;
    img{
      float: left;
      width: 66px;
      margin-right: 5px;
    }
    .title{
      font-size:16px;
    }
    .content{
      font-size: 13px;
      color: gray;
      
      .actors{//...
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 12.5rem;
      }
      .hidden{
        visibility: hidden;//规定元素是否可见。 提示:即使不可见的元素也会占据页面上的空间
      }
    }
  }
}
</style>