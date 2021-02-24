<template>
  <div style="margin: 0 auto;text-align: center">
    <input type="file" @change="displayImage" ref="fileInput">
    <img :src="previewImageSrc">
  </div>
</template>

<script>
  export default {
    name: 'imgUpload',
    data () {
      return {
        previewImageSrc: ''
      }
    },
    methods: {
      displayImage () {
        const file = this.$refs.fileInput.files[0]
        const fr = new FileReader()
        fr.onload = (e) => {
          this.previewImageSrc = e.target.result
        }
        fr.readAsDataURL(file)
      }
    }
  }
</script>
