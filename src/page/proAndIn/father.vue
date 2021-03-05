<template>
  <div class="father" :style="{ 'width': width + 'px', 'height': height + 'px', 'background-color': backgroundColor }">
    <slot/>
  </div>
</template>

<script>

  export default {
    name: 'father',
    props: {
      width: {
        type: String,
        default: '200'
      },
      height: {
        type: String,
        default: '200'
      },
      backgroundColor: {
        type: String,
        default: '#ffb2ff'
      }
    },
    provide() {
      return {
        father: this
      }
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped lang="scss">
.father {
  margin: 0 auto;
}
</style>
