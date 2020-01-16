<template>
  <div id="page2">
    <demo2/>
  </div>
</template>

<script>
import demo2 from "@/components/comon/demo2";
export default {
  name: "page2",
  components: {
    demo2
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";
#page2 {
  display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
  width: 100%;
  height: 100%;
   background: #1b1b1b;
}
</style>
