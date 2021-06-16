<template>
  <div class="son" :style="{ 'width': width - 50 + 'px', 'height': height - 50 + 'px', 'background-color': backgroundColor }">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'son',
    provide() {
      return {
        son: this
      }
    },
    inject: ['father'],
    data() {
      return {
        width: '200',
        height: '200',
        backgroundColor: '#3686ef'
      }
    },
    created () {
      this.width = this.father.width
      this.height = this.father.height
    }
  }
</script>

<style scoped lang="scss">
.son {
  margin: 0 auto;
  opacity: 0.6;
}
</style>
