<!--
 * @Author: Topskys
 * @Date: 2022-12-01 23:34:14
 * @LastEditTime: 2022-12-10 22:46:38
-->
<script setup>
// import { onMounted, ref } from 'vue';
// import useWebStore from '@/store/webStore.js';


// const webStore = useWebStore();
// const currentIndex = ref(0);

// onMounted(() => {
//     webStore.init();
// });

// const handleItemClick = (i) => {
//     currentIndex.value = i;
// }

// Hooks 将逻辑独立出去，以钩子形式调用
import useWebHook from './useWebHook';
import useIndexHook from './useIndexHook';

const { webStore, keywords } = useWebHook();
const { currentIndex, handleItemClick } = useIndexHook();

const handleDelClick=(x)=> {
    webStore.del(x.url)
    currentIndex.value=0
}
</script>


<template>
    <div>
        <p id="no-item" v-if="(webStore.find(keywords).length <= 0)">暂无数据</p>
        <div id="items" v-else>
            <div class="read-item " :class="{ selected: currentIndex === i }" v-for="x, i in webStore.find(keywords)"
                :key="i" @click="handleItemClick(i, x.url)">
                <img :src="x.screenshot" alt="x.title" />
                <h2>{{ x.title }}</h2>
                <!-- 阻止事件冒泡 -->
                <button @click.stop="handleDelClick(x)"> X </button>
                <!-- <button @click.self="webStore.del(x.url)"> X</button> -->
            </div>
        </div>
    </div>

</template>


<style lang='stylus'>
#no-item
    font-weight bold
    color silver
    text-align center
    width 100%
    position  absolute
    top 100px
    z-index -1
#items
    .read-item
        display flex
        align-items center
        border-bottom lightgray 2px solid 
        background-color #fafafa
        border-left 10px solid lightgray
        -webkit-user-select none 
        padding 10px
        position relative
        img
            width 20%
            margin-right 25px
            border solid 1px #ccc
        &:hover
            background-color #eee
        &:hover button
            display inline-block
        &.selected
            border-left-color dodgerblue
        button
            position absolute
            display none
            top 10px
            right 10px
            width 30px
            height 30px
            background-color #f44336
            border none
            border-radius 50%
            color white
            text-align center
            font-size 16px
            cursor pointer
</style>