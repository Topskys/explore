<template>
  <div>center</div>
</template>

<script>
export default {
  // 生命周期
  beforeRouteEnter:  (to, from, next) => {
    //局部路由拦截（写在组件内局部守卫）
    if (localStorage.getItem("token")) { //"授权通过"
        next()
    } else {        
        // next('/login') // 1
        next({ // 2
            path: '/login',
            query: { redirect: to.fullPath } // 第二种，获取上记住当前地址back this.$router.push(this.$router.query.redirect)
        })
    }
  }
}
</script>

<style>

</style>