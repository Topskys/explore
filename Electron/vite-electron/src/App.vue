<!--
 * @Author: Topskys
 * @Date: 2022-12-01 17:18:13
 * @LastEditTime: 2022-12-03 17:07:19
-->
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { provide, ref } from 'vue';
import Home from './views/Home.vue';
import Header from './views/Header.vue';

// dialog状态
const isShow = ref(false);
const setIsShow = (value) => { isShow.value = value; };
provide('dialog-visible', { isShow, setIsShow });

// dialog url 
const url = ref('');
const setUrl = (value) => { url.value = value; };
provide('dialog-url', { url, setUrl });

// keyWorld  SearchBar to List
const keywords = ref('');
const setKeywords = (value) => { keywords.value = value; };
provide('searchBar-keywords', { keywords, setKeywords });


</script>

<template>
  <!-- <Home></Home> -->
  <Header></Header>
  <router-view ></router-view>
</template>

<style scoped>

</style>
