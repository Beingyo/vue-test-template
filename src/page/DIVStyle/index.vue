<template>
  <div class="background">
    <div class="div-box">
      <div class="text-box">
        <p>测试字体</p>
        <!-- <el-progress
          :percentage="percentage"
          :color="customColors"
        ></el-progress> -->
        <div class="progress-box">
          <el-progress
            :percentage="percentage"
            :color="customColor"
            :show-text="false"
          />
          <span class="percent">{{ -(percentage - 100) }}%</span>
        </div>
      </div>
      <div>
        <el-button-group>
          <el-button size="mini" icon="el-icon-minus" @click="decrease"></el-button>
          <el-button size="mini" icon="el-icon-plus" @click="increase"></el-button>
        </el-button-group>
      </div>
      <!-- <div class="div-box2">
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "DIVStyle",
  data() {
    return {
      // percentage: 20,
      // customColors: [
      //   { color: "#ff0055", percentage: 33 },
      //   { color: "#0055ff", percentage: 66 },
      //   { color: "#55ff00", percentage: 100 }
      // ],
      percentage: 0,
      customColor: "#409eff"
    };
  },
  created() {
    this.percentage = 10
    this.percentage = 100 - this.percentage
  },
  methods: {
    increase() {
      // this.percentage += 10;
      // if (this.percentage > 100) {
      //   this.percentage = 100;
      // }
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    },
    decrease() {
      // this.percentage -= 10;
      // if (this.percentage < 0) {
      //   this.percentage = 0;
      // }
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    }
  }
};
</script>

<style lang="scss">
body {
  overflow: hidden;
}
.background {
  background: url("./1.jpg") no-repeat;
  background-size: cover;
  position: absolute;
  background-attachment: fixed;
  padding: 10px;
  margin: -10px;
  width: 1900px;
  height: 920px;
}
.div-box {
  width: 300px;
  height: 200px;
  margin: 0 0 0 100px;
  // transform: translate(400px, 150px);
  border: 1px solid #12407b;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 5px inset #19355f;
  background: rgba(51, 90, 147, 0.2);
}
.div-box2 {
  width: 80px;
  height: 50px;
  margin: 0 0 0 20px;
  border: 1px solid #12407b;
  border-radius: 12px;
  box-shadow: 0px 0px 5px 5px inset #193058;
  background: rgba(40, 70, 114, 0.2);
}
.text-box {
  p {
    color: #87cefa;
    text-shadow: 0px 0px 15px #87cefa;
  }
}
.progress-box {
  display: flex;
  .percent {
    width: 50px;
  }
  .el-progress {
    flex: 1;
    transform: rotateY(180deg);
    height: 20px;
    margin: 6px 0 6px 10px;
  }
}
.el-progress-bar__outer {
  background: transparent !important;
  // background-image: linear-gradient(to right, #1663d7, #2f97d4) !important;
  background-image: linear-gradient(to left, #ff0055, #55ff00) !important;
  border-radius: 0;
  width: 100%;
}
.el-progress-bar__inner {
  border-radius: 0;
  background-image: linear-gradient(to left, #1663d7, #2f97d4) !important;
}
.el-progress__text {
  width: 40px;
}
</style>


