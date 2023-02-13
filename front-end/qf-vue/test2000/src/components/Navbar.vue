<template>
  <div> 
      
      <button @click="handleleft">left</button><!-- 点击left触发handleEvent控制Sidebar出没 -->
      Navbar--{{whichPage}}
      <button v-show="myright">right</button>
     
      <slot></slot>

  </div>
</template>

<script>
export default {
    props:{//接受App.vue的whichPage和myright 
        whichPage:{
            type:String,
            default:'',
        },
        myright:{
            type:Boolean,
            default: true,
        }
    },
    methods: {
        handleleft(){
            this.$emit('event') // 监听left触发@event（子传父）
        }
    },
    mounted() {
        console.log("<< mounted可用")
    },
}
</script>

<style lang="scss" scoped>
ul{
    li{
        background: red;
    }
}   
</style>