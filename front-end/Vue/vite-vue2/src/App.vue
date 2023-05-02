<template>
  <div id="App">{{ name}}<button @click="add">add</button>
  <img src="./../public/vite.svg">
  </div>
</template>

<script>
export default {
    name:"App",
    data(){
        return {
            name:1
        }
    },
    methods:{
        add(){
            this.name++
        }
    }
}
</script>

<style>

</style>