<script lang='ts' setup>
import { ref, reactive, toRefs, defineProps } from "vue";
import WaterMark from "@/components/WaterMark/index.vue";

const obj = reactive({
  pdfUrl: "./xx.pdf", // public 
});
let { pdfUrl } = obj;
</script>

<template>
  <div class="index-warp">
    <WaterMark text="Topskys" >
      <!-- <embed :src="pdfUrl" type="application/pdf" width="100%" height="100%" /> -->
      <!-- <object :data="pdfUrl" type="application/pdf" width="100%" height="100%"></object> -->
            In order to protect the copyright, when will we add watermark on the web page. Adding watermarks is generally done by the back end, but some websites need to add watermarks to protect many types of intellectual property, such as text, pictures, videos. Watermark is difficult not to be tampered with, so we must do some tampering prevention for watermark modification. Since the back end is more troublesome for different types of watermarks and to prevent the watermark from being tampered, this operation is gradually left to the front end以上翻译结果来自有道神经网络翻译（YNMT）·
      <img src="https://x0.ifengimg.com/res/2020/2CDD563B75BF507CAECEBCF7297304BAFD0AA2F8_size119_w1108_h736.jpeg" style="display:block;width:100%;"/>
    </WaterMark>
  </div>
</template>

<style lang='scss' scoped>
.index-warp{
  // width: 100vw;
  // height: 100vh;
  width:600px;
  height:600px;
  margin: 50px auto;
}
</style>