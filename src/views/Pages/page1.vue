<template>
  <div id="page1">
  <demo1/>
  </div>
</template>

<script>
import demo1 from "@/components/comon/demo1";

export default {
  name: "page1",
  components: { demo1 }
};
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";
#page1 {
  display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
  width: 100%;
  height: 100%;
   background: #1b1b1b;
}
</style>
