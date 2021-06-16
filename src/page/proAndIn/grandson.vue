<template>
  <div class="grandson" :style="{ 'width': width - 100 + 'px', 'height': height - 100 + 'px', 'background-color': backgroundColor }">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'grandson',
    inject: ['father', 'son'],
    data() {
      return {
        width: '200',
        height: '200',
        backgroundColor: '#58ef36'
      }
    },
    created () {
      this.width = this.father.width
      this.height = this.father.height
      this.backgroundColor = this.father.backgroundColor
    }
  }
</script>

<style scoped lang="scss">
  .grandson {
    margin: 0 auto;
    opacity: 0.5;
  }
</style>
