<template>
  <ul>
      <router-link to="/films/nowplaying" custom v-slot="{navigate,isActive}">
         <li @click="navigate" >
             <span :class="isActive?'TopskyActive':'' ">正在热映</span>
         </li>
      </router-link>
      <router-link to="/films/comingsoon" custom v-slot="{navigate,isActive}">
         <li @click="navigate" >
             <span :class="isActive?'TopskyActive':'' ">即将上映</span>
         </li>
      </router-link>
  </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
ul{
    display: flex;
    li{
        flex: 1;
        text-align: center;
        font-size: 16px;
    }
    padding: 15px;
}
.TopskyActive{
    color: red;
    border-bottom: 2px solid red;
}
</style>