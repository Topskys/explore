<!--
 * @Author: Topskys
 * @Date: 2022-12-01 19:00:01
 * @LastEditTime: 2022-12-03 16:48:47
-->


<script setup>
import { ref } from 'vue';
import SearchBar from './SearchBar.vue';
import Dialog from './Dialog.vue';
import List from './list/List.vue';



</script>


<template>
    <main>
        <SearchBar></SearchBar>
        <!-- teleport: 把Dialog节点拿到body下，防止Dialog弹不出来 -->
        <teleport to="body">
            <Dialog></Dialog>
        </teleport>
        <List></List>
    </main>
</template>


<style>

</style>