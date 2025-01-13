<template>
  <div>
      ref----{{myname}}
     <button @click="handleClick()">change</button>
   </div>
</template>

<script>
import {ref} from'vue'
export default {
    setup(){
        const myname=ref('kerwin')
        const handleClick=()=>{
            myname.value='hfwbj'
            console.log(myname)
        }
        return{
            handleClick,
            myname,
        }
    }
}
</script>

<style>

</style>