<template>
  <div class="coolClockWrap" ref="coolClockWrapbox">
    <canvas ref="coolClockCanvas" :width="canvas.width" :height="canvas.height"></canvas>
    <div style="display:none">
      <img ref="conf0" src="../../assets/clock.png" />
    </div>
  </div>
</template>

<script>
var elementResizeDetectorMaker = require("element-resize-detector");
export default {
  name: "demo6",
  data() {
    return {
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
  destroyed() {},
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
          this.drawCoolClock();
          console.log(
            "canvas尺寸: " +
              this.$refs.coolClockCanvas.width +
              "px" +
              this.$refs.coolClockCanvas.height
          );
        });
      });
    },
    drawCoolClock() {
      let canvas = this.$refs.coolClockCanvas;
      let ctx = canvas.getContext("2d");
      let [x0, y0] = [this.canvas.width / 2, this.canvas.height / 2]; //获取圆心x,y
      this.R = this.canvas.width / 2.5; //设置圆半径
      ctx.clearRect(0, 0, canvas.width, canvas.height); //清除画布
      this.drawScale0(ctx, x0, y0, this.R); //绘制表盘第0圈(图片)
      this.drawScale1(ctx, x0, y0, this.R); //绘制表盘第1圈(描边，填充)
      this.drawScale2(ctx, x0, y0, this.R); //绘制表盘第2圈（实际数据）
      this.drawScale3(ctx, x0, y0, this.R); //绘制表盘第3圈（实际数据）
      this.drawScale4(ctx, x0, y0, this.R); //绘制表盘第4圈(描边，填充)
      this.drawScale5(ctx, x0, y0, this.R); //绘制表盘第5圈(描边，填充)
      this.drawScale6(ctx, x0, y0, this.R); //绘制表盘第6圈（实际数据)
      this.drawScale7(ctx, x0, y0, this.R); //绘制表盘第7圈（实际汇总数据)
      this.drawScale8(ctx, x0, y0, this.R); //绘制表盘第8圈(描边，填充)
      this.drawScale9(ctx, x0, y0, this.R); //绘制表盘第9圈(画一段渐变的圆弧)
      this.drawScale10(ctx, x0, y0, this.R); //绘制表盘第10圈(加文字)
    },
    //第0圈(图片)
    drawScale0(ctx, x0, y0, R, clockImg) {
      ctx.save();
      // 裁剪钟面图，只留下圆的钟面
      ctx.beginPath();
      ctx.arc(x0, y0, R * 1.26, 0, 2 * Math.PI);
      ctx.clip();
          var clockImg = new Image();
      clockImg.src = require("../../assets/clock1.png");
      clockImg.style.width="100%"
      //var clockImg = this.$refs.conf0;
      console.log("clockImg", clockImg);
      // 用渐变进行填充颜色
      ctx.strokeStyle = "#343F4A";
      // 设置圆环的宽度
      ctx.lineWidth = 6;
      // 绘画圆环
      ctx.beginPath();
      ctx.arc(x0, y0, R * 1.8, 0, Math.PI * 2, true);
      ctx.stroke();
      ctx.closePath();
      ctx.fillStyle = "#292934"; //填充圆
      ctx.fill();
      ctx.rotate(((1 / 3) * 2 * Math.PI) / 60);
      //ctx.drawImage(clockImg, 0, 0);
       clockImg.onload = () => {
        ctx.drawImage(clockImg, -80, -60);
      };
      ctx.restore();
    },
    //第1圈(描边，填充)
    drawScale1(ctx, x0, y0, R) {
      ctx.save();
      // 用渐变进行填充颜色
      ctx.strokeStyle = "#343F4A";
      // 设置圆环的宽度
      ctx.lineWidth = 6;
      // 绘画圆环
      ctx.beginPath();
      ctx.arc(x0, y0, R, 0, Math.PI * 2, true);
      ctx.stroke();
      ctx.closePath();
      ctx.fillStyle = "#292934"; //填充圆
      ctx.fill();
      ctx.restore();
    },
    //第2圈(实际数据)
    drawScale2(ctx, x0, y0, R) {
      for (let i = 0; i < 720; i++) {
        let angel = -90 + i * (360 / 720); //角度
        let [x1, y1] = [
          x0 + Math.cos((angel * Math.PI) / 180) * R * 0.98,
          y0 + Math.sin((angel * Math.PI) / 180) * R * 0.98
        ];
        let [x2, y2] = [
          x0 + Math.cos((angel * Math.PI) / 180) * R * 0.93,
          y0 + Math.sin((angel * Math.PI) / 180) * R * 0.93
        ];
        //
        ctx.strokeStyle = "#245274";

        //
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.lineCap = "round";
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
      }
    },

    //第3圈(实际数据)
    drawScale3(ctx, x0, y0, R) {
      for (let i = 0; i < 720; i++) {
        let angel = -90 + i * (360 / 720); //角度
        let [x1, y1] = [
          x0 + Math.cos((angel * Math.PI) / 180) * R * 0.91,
          y0 + Math.sin((angel * Math.PI) / 180) * R * 0.91
        ];
        let [x2, y2] = [
          x0 + Math.cos((angel * Math.PI) / 180) * R * 0.8,
          y0 + Math.sin((angel * Math.PI) / 180) * R * 0.8
        ];
        //
        ctx.strokeStyle = "#245274";

        //
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.lineCap = "round";
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
      }
    },
    //第4圈(描边，填充)
    drawScale4(ctx, x0, y0, R) {
      ctx.save();
      // 用渐变进行填充颜色
      ctx.strokeStyle = "#343F4A";
      // 设置圆环的宽度
      ctx.lineWidth = 6;
      // 绘画圆环
      ctx.beginPath();
      ctx.arc(x0, y0, R * 0.77, 0, Math.PI * 2, true);
      ctx.stroke();
      ctx.closePath();
      ctx.fillStyle = "#292934"; //填充圆
      ctx.fill();
      ctx.restore();
    },
    //第5圈(描边，填充)
    drawScale5(ctx, x0, y0, R) {
      ctx.save();
      // 用渐变进行填充颜色
      ctx.strokeStyle = "#343F4A";
      // 设置圆环的宽度
      ctx.lineWidth = 6;
      // 绘画圆环
      ctx.beginPath();
      ctx.arc(x0, y0, R * 0.66, 0, Math.PI * 2, true);
      ctx.stroke();
      ctx.closePath();
      ctx.fillStyle = "#292934"; //填充圆
      ctx.fill();
      ctx.restore();
    },
    //第6圈(实际数据)
    drawScale6(ctx, x0, y0, R) {
      for (let i = 0; i < 720; i++) {
        let angel = -90 + i * (360 / 720); //角度
        let [x1, y1] = [
          x0 + Math.cos((angel * Math.PI) / 180) * R * 0.64,
          y0 + Math.sin((angel * Math.PI) / 180) * R * 0.64
        ];
        let [x2, y2] = [
          x0 + Math.cos((angel * Math.PI) / 180) * R * 0.58,
          y0 + Math.sin((angel * Math.PI) / 180) * R * 0.58
        ];
        //
        ctx.strokeStyle = "#245274";

        //
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.lineCap = "round";
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
      }
    },
    //第7圈（实际汇总数据)
    drawScale7(ctx, x0, y0, R) {
      for (let i = 0; i < 720; i++) {
        let angel = -90 + i * (360 / 720); //角度
        let [x1, y1] = [
          x0 + Math.cos((angel * Math.PI) / 180) * R * 0.54,
          y0 + Math.sin((angel * Math.PI) / 180) * R * 0.54
        ];
        let [x2, y2] = [
          x0 + Math.cos((angel * Math.PI) / 180) * R * 0.43,
          y0 + Math.sin((angel * Math.PI) / 180) * R * 0.43
        ];
        //
        ctx.strokeStyle = "#292934";
        if (i > 0 && i < 99) {
          ctx.strokeStyle = "#836B27";
        } else if (i > 103 && i < 359) {
          ctx.strokeStyle = "#4CC2CE";
        } else if (i > 369 && i < 712) {
          ctx.strokeStyle = "rgb(108,40,46)";
        } else {
          ctx.strokeStyle = "#292934";
        }
        //
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
      }
    },
    //第8圈(描边,填充)
    drawScale8(ctx, x0, y0, R) {
      ctx.save();
      // 用渐变进行填充颜色
      ctx.strokeStyle = "#343F4A";
      // 设置圆环的宽度
      ctx.lineWidth = 6;
      // 绘画圆环
      ctx.beginPath();
      ctx.arc(x0, y0, R * 0.39, 0, Math.PI * 2, true);
      ctx.stroke();
      ctx.closePath();
      ctx.fillStyle = "#292934"; //填充圆
      ctx.fill();
      ctx.restore();
    },
    //第9圈(描边,填充)
    drawScale9(ctx, x0, y0, R) {
      ctx.save();
      let ring = ctx.createLinearGradient(0, 60, 60, 0);
      // 通过修改中间的值可以改变圆中颜色的饱和度:圆环
      // createLinearGradient(x0,y0,x1,y1)；
      // 参数分别是渐变开始的x0、y0坐标；渐变结束点的x1、y1坐标
      // var ring = ctx.createLinearGradient(0, 60, 60, 0);
      ring.addColorStop("0", "rgba(255,255,255,1)");
      ring.addColorStop("0.1", "rgba(255,255,255,.4)");
      ring.addColorStop("0.2", "rgba(255,255,255,.3)");
      ring.addColorStop("0.4", "rgba(255,255,255,.25)");
      ring.addColorStop("0.6", "rgba(255,255,255,.2)");
      ring.addColorStop("0.8", "rgba(255,255,255,.15)");
      ring.addColorStop("1.0", "rgba(255,255,255,0)");
      // 用渐变进行填充颜色
      ctx.strokeStyle = ring;
      // 设置圆环的宽度
      ctx.lineWidth = 6;
      // 绘画圆环
      ctx.beginPath();
      ctx.arc(x0, y0, R * 0.33, 0, Math.PI, false);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    },
    //第10圈(加文字)
    drawScale10(ctx, x0, y0, R) {
      ctx.save();
      ctx.beginPath();
      ctx.font = `${R * 0.21}px MicrosoftYaHei`;
      ctx.fillStyle = "#B4B4B4"; //填充圆
      ctx.fill();
      ctx.fillText("24", x0 * 1, y0 * 0.94);
      ctx.closePath();
      ctx.beginPath();
      ctx.font = `${R * 0.089}px MicrosoftYaHei`;
      ctx.fillStyle = "#6C6C6C"; //填充圆
      ctx.fill();
      ctx.fillText("报警总数", x0 * 1, y0 * 1.1);
      ctx.closePath();
      ctx.restore();
    }
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
}
</style>