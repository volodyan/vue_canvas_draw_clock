<template>
  <div class="coolClockWrap" ref="coolClockWrapbox">
    <canvas ref="saomiaoCanvas" :width="canvas.width" :height="canvas.height" class="saomiaocanvas"></canvas>
  </div>
</template>

<script>
var elementResizeDetectorMaker = require("element-resize-detector");
export default {
  name: "demo9",
  data() {
    return {
      ctx:null,
      CFG: {
        perDeg: 1
      },
      deg: 0,
      canvas: {
        width: 630,
        height: 830
      },
      R: 0 //基础半径
    };
  },
  mounted() {
    this.resizefun();
  },
  destroyed() {
    window.cancelAnimationFrame(this.loop);
    
  },
  methods: {
    //自适应方法
    resizefun() {
      var erd = elementResizeDetectorMaker();
      erd.listenTo(document.body, element => {
        var width = element.clientWidth * 0.35;
        var height = element.clientHeight * 0.75;
        this.canvas = { width, height };
        this.$nextTick(() => {
          console.log("Size: " + this.canvas.width + "px" + this.canvas.height);
          //使canvas尺寸重置
          this.saomiaoCanvas();
        });
      });
    },
    /* 扫描开始 */
    saomiaoCanvas() {
      var can = this.$refs.saomiaoCanvas;
      this.ctx = can.getContext("2d");
     this.init()
    },
    init() {
      window.requestAnimationFrame(this.loop);
    },
    loop() {
      this.deg = this.deg + this.CFG.perDeg;
      this.cover();
      this.drawRadar(this.deg);
       window.requestAnimationFrame(this.loop);
    },

    cover() {
      this.ctx.save();
      this.ctx.fillStyle = "rgba(0,0,0,0.02)";
      this.ctx.arc(150, 150, 150, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.restore();
    },
    drawRadar(iDeg) {
      this.ctx.fillStyle = "rgba(255,255,255,.3)";
      this.ctx.beginPath();
      this.ctx.moveTo(150, 150);
      this.ctx.arc(
        150,
        150,
        150,
        ((-2 * this.CFG.perDeg + iDeg) / 180) * Math.PI,
        ((0 + iDeg) / 180) * Math.PI
      );
      this.ctx.closePath();
      this.ctx.fill();
    }

    /* 扫描结束 */
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/global.scss";
.coolClockWrap {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: vw(1030);
  height: vh(1630);
  background: #1b1b1b;
  position: relative;
  .datacanvas {
    position: absolute;
  }
  .datacanvas {
    position: absolute;
    z-index: 999;
  }
}
</style>