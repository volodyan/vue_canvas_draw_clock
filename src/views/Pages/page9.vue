<template>
  <div id="Page9">
  <demo9/>
  </div>
</template>

<script>
import demo9 from "@/components/comon/demo9";
export default {
  name: "Page9",
  components:{
    demo9
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";
#Page9 {
 display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
  width: 100%;
  height: 100%;
   background: #1b1b1b;
}
</style>
