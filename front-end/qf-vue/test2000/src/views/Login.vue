<template>
  <div>login
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    handleLogin(){
      setTimeout(()=>{
        localStorage.setItem('token','后端返回的token字段')

        // 第一种
         // this.$router.back() // 登录后返回上个页面
         // this.$router.push('/center')// 登录后跳转至center

        // 第二种，获取上一个地址back(当时想要跳转的页面)
         this.$router.push(this.$router.query.redirect)
      },0)
      
    },
    
  },

   
}


</script>

<style>

</style>