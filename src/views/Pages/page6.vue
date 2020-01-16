<template>
  <div id="page6">
  <demo6/>
  </div>
</template>

<script>
import demo6 from "@/components/comon/demo6";
export default {
  name: "page6",
  components:{
    demo6
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";
#page6 {
 display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
  width: 100%;
  height: 100%;
   background: #1b1b1b;
}
</style>
