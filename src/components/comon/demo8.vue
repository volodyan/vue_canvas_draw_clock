<template>
  <div class="coolClockWrap" ref="coolClockWrapbox">
    <canvas ref="saomiaoCanvas" :width="canvas.width" :height="canvas.height" class="saomiaocanvas"></canvas>
  </div>
</template>

<script>
var elementResizeDetectorMaker = require("element-resize-detector");
export default {
  name: "demo8",
  data() {
    return {
      ctx: null,
      CFG: {
        perDeg: 1
      },
      deg: 0,
      circledata: {}, //基础圆参数
      canvas: {
        width: 630,
        height: 830
      }
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
      let can = this.$refs.saomiaoCanvas;
      this.ctx = can.getContext("2d");
      let [x0, y0] = [this.canvas.width / 2, this.canvas.height / 2]; //获取圆心x,y
      let R = this.canvas.width / 2.5; //设置圆半径
      this.circledata = { x0, y0, R };
      this.init();
    },
    init() {
      this.ctx.strokeStyle = "rgba(0,255,0,1)";
      this.ctx.fillStyle = "rgba(0,50,0,1)";
      this.ctx.arc(
        this.circledata.x0,
        this.circledata.y0,
        this.circledata.R,
        0,
        2 * Math.PI
      );
      this.ctx.fill();
      window.requestAnimationFrame(this.loop);
    },
    loop() {
      this.deg = this.deg + this.CFG.perDeg;
      this.cover();
      this.drawPosLine();
      this.drawRadar(this.deg);
      window.requestAnimationFrame(this.loop);
    },

    cover() {
      console.log("circledata", this.circledata);
      this.ctx.save();
      this.ctx.fillStyle = "rgba(0,0,0,0.02)";
      this.ctx.arc(
        this.circledata.x0,
        this.circledata.y0,
        this.circledata.R,
        0,
        2 * Math.PI
      );
      this.ctx.fill();
      this.ctx.restore();
    },
    drawPosLine() {
       this.ctx.beginPath();
       this.ctx.moveTo(this.circledata.R, 0);
       this.ctx.lineTo(this.circledata.R, 2*this.circledata.R);
      this.ctx.closePath();
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(0, this.circledata.R);
      this.ctx.lineTo(2*this.circledata.R, this.circledata.R);
      this.ctx.closePath();
      this.ctx.stroke();

      this.ctx.moveTo(this.circledata.R, this.circledata.R);
      this.ctx.beginPath();
      this.ctx.arc(this.circledata.R, this.circledata.R, 2*this.circledata.R/3, 0 * Math.PI, 2 * Math.PI);
      this.ctx.closePath();
      this.ctx.stroke();

      this.ctx.moveTo(this.circledata.R, this.circledata.R);
      this.ctx.beginPath();
      this.ctx.arc(this.circledata.R, this.circledata.R, this.circledata.R/3, 0 * Math.PI, 2 * Math.PI);
      this.ctx.closePath();
      this.ctx.stroke();
    },
    drawRadar(iDeg) {
      this.ctx.fillStyle = "rgba(0,200,0,.7)";
      this.ctx.beginPath();
      this.ctx.moveTo(this.circledata.x0, this.circledata.y0);
      this.ctx.arc(
        this.circledata.x0,
        this.circledata.y0,
        this.circledata.R,
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