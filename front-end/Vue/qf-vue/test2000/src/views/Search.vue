<template>
  <div>
    <van-search
       v-model="value"
       show-action
       placeholder="请输入搜索关键词"
       @search="onSearch"
       @cancel="onCancel"
    />
    <ul v-if="value">
        <li v-for="data in computedSearchs" :key="data.cinemaId">
          <div class="left">
            <div class="cinema-name">{{data.name}}</div>
            <div class="cinema-text">{{data.address}}</div>
          </div>
          <div class="right cinema-name">
            <div style="color: orange;">￥{{data.lowPrice/100}} 起</div>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value:'',
    }
  },
  methods: {
    onSearch(){

    },
    onCancel(){
      this.$router.back()
    },
  },
  computed:{
    computedSearchs(){// 保证原数据中只含有当前输入关键词的城市
      return this.$store.state.cinemaList.filter( item => item.name.toUpperCase().includes(this.value.toUpperCase()) || item.address.toUpperCase().includes(this.value.toUpperCase()) )
    }
  },
  mounted() {
    // 分发
   if(this.$store.state.cinemaList.length === 0){// 转移求情防止切换组件回来发生某些数据更变 缓存
     // 异步求情
     this.$store.dispatch('getCinemasData', this.$store.state.cityId)
   }else{
     // 走缓存
     console.log("走search  缓存")
   }
  },

}
</script>

<style lang="scss" scoped>
ul{
  li{
    padding: .9375rem;
    display: flex;
    justify-content: space-between;
    .left{
      width: 13.25rem;
      overflow: hidden;
    }
    .cinema-name{
      font-size: 15px;
    }
    .cinema-text{
      color:#797d82;
      font-size: 12px;
      margin-top: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>