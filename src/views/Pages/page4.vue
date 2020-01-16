<template>
  <div id="page4">
  <demo4/>
  </div>
</template>

<script>
import demo4 from "@/components/comon/demo4";
export default {
  name: "page4",
  components:{
    demo4
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";
#page4 {
  display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
  width: 100%;
  height: 100%;
   background: #1b1b1b;
}
</style>
