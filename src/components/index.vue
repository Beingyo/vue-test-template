<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="3" :offset="2"><div class="grid-content bg-purple"><span id="clickChangeStyle" @click="routeLink">点击更换样式</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="imgDialog" @click="routeLink">查看图片框</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="sortable" @click="routeLink">拖拽表格</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="elSearchLoad" @click="routeLink">el搜索联想</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="tableHeadTouch" @click="routeLink">el表头触摸</span></div></el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="3" :offset="2"><div class="grid-content bg-purple"><span id="excelOperation" @click="routeLink">excel导入导出</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="getUserIP" @click="routeLink">获取用户ip</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="imgUpload" @click="routeLink">图片上传并显示</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="imgElUpload" @click="routeLink">el图片上传并显示</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="checkboxShow" @click="routeLink">elCheckBox回显</span></div></el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="3" :offset="2"><div class="grid-content bg-purple"><span id="treeTouch" @click="routeLink">elTree触摸样式</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="addHtml" @click="routeLink">匹配字符添加html标签</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="timeLine" @click="routeLink">更新时间线</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="TinyMCE" @click="routeLink">TinyMCE富文本(未写)</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="countDown" @click="routeLink">倒计时</span></div></el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="3" :offset="2"><div class="grid-content bg-purple"><span id="imgTouch" @click="routeLink">触摸图片显示文字</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="wholeNation" @click="routeLink">全国地区四级</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="threejs" @click="routeLink">threejs</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="proAndIn" @click="routeLink">依赖注入</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="vueExtend" @click="routeLink">构造器</span></div></el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="3" :offset="2"><div class="grid-content bg-purple"><span id="vueSetDelete" @click="routeLink">视图更新</span></div></el-col>
      <!-- <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="CSSBox" @click="routeLink">样式Box</span></div></el-col> -->
      <!-- <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="CSSButton" @click="routeLink">样式Button</span></div></el-col> -->
      <!-- <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="test" @click="routeLink">测试</span></div></el-col> -->
      <!-- <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="" @click="routeLink">0</span></div></el-col> -->
    </el-row>

    <el-row :gutter="10">
      <el-col :span="3" :offset="2"><div class="grid-content bg-purple"><span id="vueSetDelete" @click="routeLink">测试</span></div></el-col>
      <!-- <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="CSSBox" @click="routeLink">样式Box</span></div></el-col> -->
      <!-- <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="CSSButton" @click="routeLink">样式Button</span></div></el-col> -->
      <!-- <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="test" @click="routeLink">测试</span></div></el-col> -->
      <!-- <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="" @click="routeLink">0</span></div></el-col> -->
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    routeLink(e) {
      console.log(e.currentTarget.id)
      this.$router.push({path:'/' + e.currentTarget.id})
    }
  }
}
</script>

<style lang="scss" scoped>
  span {
    line-height: 36px;
    cursor:pointer;
    color: #3a97fa;
  }
.el-row {
  margin: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #eaf0f5;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
