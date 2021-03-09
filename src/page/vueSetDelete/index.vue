<template>
  <div class="content">
    <div>
      <el-button class="btn" @click="btn1Click()">赋值</el-button>
      <br/>
      <el-button class="btn" @click="btn2Click()">动态赋值set</el-button>
      <br/>
      <el-button class="btn" @click="btn3Click()">为data新增属性</el-button>
      <br/>
      <el-button class="btn" @click="btn4Click()">为data删除属性</el-button>
    </div>
    <div>
      <p v-for="item in data" :key="item.id">
        {{ item.message }}
      </p>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'vueSetDelete',
    data () {
      return {
        data: [
          {message: '默认0', id: '0'},
          {message: '默认1', id: '1'},
          {message: '默认2', id: '2'}
        ]
      }
    },
    methods: {
      // 赋值
      btn1Click () {
        // 视图不更新
        this.data[0] = {message: '赋值0', id: '0'}
      },
      // 动态赋值set
      btn2Click () {
        // 视图更新
        // this.data[1].message = '赋值'

        // 视图更新
        Vue.set(this.data, 1, {message: '赋值1', id: '100'})
      },
      // 为data新增属性
      btn3Click () {
        var length = this.data.length
        Vue.set(this.data, length, {message: '新增' + length, id: length})
      },
      // 为data删除属性
      btn4Click () {
        var length = this.data.length - 1
        Vue.delete(this.data, length)
      }
    }
  }
</script>

<style scoped>
  .el-button {
    margin: 10px 0;
  }
</style>
