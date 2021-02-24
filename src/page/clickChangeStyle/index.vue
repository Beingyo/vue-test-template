<template>
  <ul>
    <li
      v-for="(item,index) in list"
      :key="index"
      class="normal-class"
      :class="{ 'active-class': nowIndex === index }"
      @click="changeClass(index)"
    >
      点我
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'clickChangeStyle',
    data () {
      return {
        list:[1, 2, 3, 4, 5],
        nowIndex: 0
      }
    },
    methods: {
      changeClass (index) {
        this.nowIndex = index
      }
    }
  }
</script>

<style lang="scss" scoped>
  .normal-class{
    display: inline-block;
    width: 30px;
    margin: 10px;
    background: lightgray;
  }
  .active-class{
    background: darkgray;
  }
</style>
