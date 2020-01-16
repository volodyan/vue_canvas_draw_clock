<template>
  <div id="page8">
  <demo8/>
  </div>
</template>

<script>
import demo8 from "@/components/comon/demo8";
export default {
  name: "page8",
  components:{
    demo8
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";
#page8 {
 display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
  width: 100%;
  height: 100%;
   background: #1b1b1b;
}
</style>
