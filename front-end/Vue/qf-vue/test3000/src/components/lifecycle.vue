<template>
  <div>生命周期
      <ul>
          <li v-for="data in obj.list" :key="data">{{data}}</li>
      </ul>
  </div>
</template>

<script>
//import axios from "axios";

import {
  onBeforeMount,
  //onBeforeUnmount,
  onMounted,
  reactive,
} from "vue";

export default {
  setup() {
    const obj = reactive({
      list: [],
    });
    onMounted(() => {
      console.log("onMounted,可以dom上树、axios，事件监听，setInteral...");
      setTimeout(()=>{
          obj.list=["a","b","c","d"]
      },2000)
    });
    onBeforeMount(() => {
      console.log("onBeforeMount注册生命周期");
    });
    // onBeforeUpdate(() => {
    //   console.log("onBeforeUpdate");
    // });
    // onUpdated(() => {
    //   console.log("onUpdate");
    // });
    // onBeforeUnmount(() => {
    //   console.log("onBeforeUnmount");
    // });
    // onUnmounted(() => {
    //   console.log("onUnmounted");
    // });
    return {
        obj,
    }
  },
};
</script>

<style>
</style>