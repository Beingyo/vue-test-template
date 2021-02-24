<template>
  <div>
    <el-upload
      class="avatar-uploader"
      action="1"
      :show-file-list="false"
      :on-change="onchange"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <p>图片显示在外面↓</p>
    <img v-if="imageUrl" :src="imageUrl" style="margin: 0 auto;display: block">
    <el-button style="font-size: 16px;margin-top: 50px" @click="upload">上传</el-button>
  </div>
</template>
<!--
element admin 框架 api 写法
export function postpicture(data) {
  return request({
    url: 'file-center/v1/form/file/upload',
    method: 'post',
    data: data,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}
-->
<script>
  export default {
    name: 'Index',
    data() {
      return {
        flage: 0,
        imageUrl: '',
        picture: ''
      }
    },
    methods: {
      onchange(file, fileList) {
        var _this = this
        var event = event || window.event
        var reader = new FileReader()
        file = event.target.files[0]
        // 转base64
        reader.onload = function (e) {
          if (_this.flag === 1) {
            _this.imageUrl = e.target.result // 将图片路径赋值给src
            const image = new Image()
            image.onload = function () {
              const width = image.width
              const height = image.height
              console.log('参数 宽高：' + width + 'x' + height)
            }
            image.src = e.target.result
          }
        }
        this.picture = file
        reader.readAsDataURL(file)
      },
      beforeAvatarUpload(file) {
        this.flag = 0
        const isJPG = file.type === 'image/jpeg'
        const isPNG = file.type === 'image/png'
        const isLt20M = file.size / 1024 / 1024 < 20
        this.size = (file.size / 1024 / 1024).toFixed(2) + 'M'
        if (isJPG) {
          this.flag = 1
          this.type = 'jpg'
        } else if (isPNG) {
          this.flag = 1
          this.type = 'png'
        } else {
          this.$message.error('上传图片只能是 JPG或PNG 格式!')
          this.flag = 0
        }
        if (!isLt20M) {
          this.$message.error('上传图片大小不能超过 20MB!')
          this.flag = 0
        }
        return false
      },
      upload() {
        var fd = new FormData()
        fd.append('file', this.picture)
        // fd.append('name', '测试图片')
        console.log(fd)
        // postpicture(fd).then(res => {
        //   console.log(JSON.stringify(res.data))
        // })
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
