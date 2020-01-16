<template>
  <div id="page6">
  <demo7 v-for="(item,index) in cicleList" :key="index" :percent="item.ratio" :id="index"/>
  </div>
</template>

<script>
import demo7 from "@/components/comon/demo7";
export default {
  name: "page7",
  components:{
    demo7
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      val:true,
      url:"",
      cicleList: [{
        ratio: '35'
      },{
        ratio: '65'
      },{
        ratio: '85'
      }]
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";
#page7 {
 display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
  width: 100%;
  height: 100%;
   background: #1b1b1b;
}
</style>
