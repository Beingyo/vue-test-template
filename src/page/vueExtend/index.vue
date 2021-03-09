<template>
  <div class="content">
    <button @click="clickBtn">点击构造</button>
    <div id="creatExtend">
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'vueExtend',
    data () {
      return {
        msg: '信息：'
      }
    },
    methods: {
      clickBtn() {
        var that = this
        // 创建构造器
        var Profile = Vue.extend({
          template: '<p>{{msg}} {{firstName}} {{lastName}} aka {{alias}}</p>',
          data() {
            return {
              firstName: 'Walter',
              lastName: 'White',
              alias: 'Heisenberg',
              msg: that.msg
            }
          }
        })
// 创建 Profile 实例，并挂载到一个元素上。
        new Profile().$mount('#creatExtend')
      }
    }
  }
</script>

<style scoped>

</style>
