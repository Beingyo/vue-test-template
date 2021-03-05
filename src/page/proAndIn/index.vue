<template>
  <div>
    <p>默认样式会导致页面报错</p>
    <div class="flex">
      <div class="flex-item">
        <p>父组件</p>
        <father>默认样式</father>
      </div>
      <div class="flex-item">
        <p>子组件</p>
        <son>默认样式</son>
      </div>
      <div class="flex-item">
        <p>孙组件</p>
        <grandson>默认样式</grandson>
      </div>
    </div>

    <div>
      <p>依赖注入</p>
      <father width="400" height="400" background-color="#d0dee5">
        我是父组件
        <son>
          我是子组件
          <grandson>
            我是孙组件
          </grandson>
        </son>
      </father>
    </div>

  </div>
</template>

<script>
  import father from './father'
  import son from './son'
  import grandson from './grandson'
  export default {
    name: 'proAndIn',
    components: { father, son, grandson },
    data() {
      return {

      }
    },
    created() {

    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
  .flex {
    display: flex;
  }
  .flex-item {
    flex: 1;
  }
</style>
