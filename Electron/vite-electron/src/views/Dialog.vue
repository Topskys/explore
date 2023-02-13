<!--
 * @Author: Topskys
 * @Date: 2022-12-01 19:16:30
 * @LastEditTime: 2022-12-03 16:45:07
-->
<script setup>
import { inject, ref } from 'vue';
import useWebStore from '@/store/webStore.js';


const { isShow, setIsShow } = inject('dialog-visible');
// const { url, setUrl } = inject('dialog-url');
const url = ref('');

const webStore = useWebStore();
const isSubmit = ref(false);

// 新增
const handleAdd = async () => {
    isSubmit.value = true;
    const res = await myApi.sendUrl(url.value)
    if (res.msg) {
        myApi.alert(res.msg);
    } else {
        webStore.add(res);
        setIsShow(false);
        url.value = '';
    }
    isSubmit.value = false;
}

// 取消
const handleCancel = () => {
    setIsShow(false);
    url.value = '';
}
</script>

<template>
    <div class="dialog-wrap" v-if="isShow">
        <div class="content">
            <div class="input">
                <input type="text" v-model="url" @keyup.enter="handleAdd" placeholder="请输入网址" :disabled="isSubmit">
            </div>
            <div class="btns">
                <button @click="handleAdd" :disabled="isSubmit">添加</button>
                <button @click="handleCancel" :disabled="isSubmit">取消</button>
            </div>
        </div>
    </div>
</template>



<style lang="stylus">
.dialog-wrap
    position  absolute
    top 0
    left 0
    right 0
    bottom 0
    background rgba(0, 0, 0, 0.8)
    display flex
    justify-content center
    align-items center
    z-index 999
    .content
        width 100%
        padding 0 20px
        input
            height 30px
            width 100%
            outline none
            margin-bottom 10px
            font-size 12px
        .btns
            button
                height 30px
                margin-right 10px
                font-size 12px
                padding 0 20px

</style>