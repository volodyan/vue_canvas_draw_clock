<template>
  <div id="page5">
 <demo5/>
  </div>
</template>

<script>
import demo5 from "@/components/comon/demo5";
export default {
  name: "page5",
  components:{
    demo5
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";
#page5 {
  display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
  width: 100%;
  height: 100%;
   background: #1b1b1b;
}
</style>
