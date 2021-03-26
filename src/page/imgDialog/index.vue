<template>
  <div style="margin: 0 auto">
    <p>点击图片打开查看框</p>
    <img @click="isShow" :src="imgUrl" style="height: 200px;width: 200px"/>
    <el-dialog
      :visible.sync="isvisible"
      :width="width"
      :close-on-click-modal="false"
      :show-close="false"
      title=""
      center
      top="70px">
      <img :src="pictureUrl" @load="onLoad">
      <span slot="footer">
      <el-button @click="cancel">关闭</el-button>
    </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
name: "imgDialog",
  data() {
    return {
      isvisible: false,
      width: '',
      imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180703%2F4669d3d7dec3494ebcd87f342ba9dc1b.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616656442&t=cf0350b8afc05caa929bc9edb237439b',
      pictureUrl: ''
    }
  },
  methods: {
    is(imgUrl) {
      this.isvisible = true
      this.pictureUrl = imgUrl
    },
    isShow() {
      this.is(this.imgUrl)
    },
    onLoad(e) {
      const img = e.target
      let width = 0
      if (img.fileSize > 0 || (img.width > 1 && img.height > 1)) {
        width = img.width + 50
      }
      this.width = width + 'px'
    },
    cancel() {
      this.isvisible = false
    }
  }
}
</script>

<style scoped lang="scss">
  .el-button{
    /*color: #ffffff;*/
    /*background-color: #d7b759;*/
    font-size: 14px;
    margin-top: 10px;
  }
  /deep/ .el-dialog__header{
    padding-bottom: 0;
  }
  /deep/ .el-dialog__body{
    /*padding-top: 0;*/
    padding: 0 25px;
  }
  img{
    max-width: 800px;
    /*max-height: 700px;*/
    /*transform: translateX(25px);*/
  }
</style>
