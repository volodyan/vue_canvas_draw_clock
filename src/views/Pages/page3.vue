<template>
  <div id="page3">
   <demo3/>
  </div>
</template>

<script>
import demo3 from "@/components/comon/demo3";
export default {
  name: "page3",
  components:{
    demo3
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";
#page3 {
 display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
  width: 100%;
  height: 100%;
   background: #1b1b1b;
}
</style>
