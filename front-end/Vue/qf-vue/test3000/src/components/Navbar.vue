<template>
  <div>
      <button @click="handleSidebarShow">left</button>
      {{myprops}}
      <button >right</button>
   </div>
</template>

<script>
export default {
   props:["myprops","myId"],//接受props.vue的myprops
   // laoxiefa
   // mounted() {
   //    console.log(this.myId)
   // },
   setup(props, {emit}) {
      console.log(props.myId)
      const handleSidebarShow=()=>{
         emit("event")//控制sidebar显示阴藏
      }
      return{
         handleSidebarShow,
      }
   }
}
</script>

<style>

</style>