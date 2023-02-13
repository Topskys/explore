<!--
 * @Author: Topskys
 * @Date: 2022-12-01 19:15:46
 * @LastEditTime: 2022-12-03 16:36:50
-->

<script setup>
import { inject } from 'vue';
import _ from 'lodash';


const { setIsShow } = inject('dialog-visible');
const { setUrl } = inject('dialog-url');
const { keywords, setKeywords } = inject('searchBar-keywords');

const handleClick = () => {
  setIsShow(true);
  setUrl('');
}

const search = _.debounce((e) => {
  setKeywords(e.target.value);
}, 500)
</script>


<template>
  <div class="search-container">
    <div class="btn-add" @click="handleClick">+</div>
    <div class="input">
      <input type="text " placeholder="请输入关键词..." @keyup="search">
    </div>
  </div>
</template>


<style lang="stylus">
// npm i stylus -S
// 高亮插件stylus
// npm i normalize.css -S 消除边距
div.search-container
  height 60px 
  background #d3d3d3
  display flex
  align-items center
  justify-content center
  .btn-add
    width 40px
    height 40px
    border-radius 5px
    background-color #1e90ff
    margin-left 10px
    font-size 30px
    font-weight bold
    color #fff
    text-align center
    cursor default
  .input
    flex 1
    height 36px
    padding 0 10px
    input
      height 100%
      width 100%
      outline none
      border solid 1px #ccc
      border-radius 5px
      padding 0 10px


</style>