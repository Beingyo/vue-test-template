<template>
  <div style="width: 100%">
    <div style="width: 400px;height: 600px;background-color: #f2f2f2;margin: 0 auto">
      <p>选中数据</p>
      <el-tag
        :key="tag.name"
        v-for="tag in checkList"
        closable
        @close="handleClose(tag)">
        {{tag.name}}
      </el-tag>
      <hr>
      <li class="el-dropdown-menu__item" v-for="list in List">
        <el-checkbox :label="list" :key="list.name" :checked=check(list,checkList) v-model="list.show" @change="addList(list,checkList)">{{ list.name }}</el-checkbox>
      </li>
      <hr>
      <el-button @click="getDataA">获取数据A</el-button>
      <el-button @click="getDataB">获取数据B</el-button>
      <el-button @click="cleanData">清空数据</el-button>
      <hr>
      <p>当前数据</p>
      {{ checkList }}
    </div>
  </div>
</template>
<script>
  export default {
    name: 'checkboxShow',
    data () {
      return {
        List: [
          { name: '复选框 A' },
          { name: '复选框 B' },
          { name: '复选框 C' },
          { name: '复选框 D' },
          { name: '复选框 E' },
        ],
        // 回显数据(初始为后台发来的数据)
        checkList: [{ name: '复选框 B' }, { name: '复选框 D' }],
      }
    },
    created () {
    },
    methods: {
      handleClose(tag) {
        this.List.forEach(list => {
          if (list.name === tag.name) {
            list.show = false
            return false
          }
        })
        this.checkList.splice(this.checkList.indexOf(tag), 1);
      },
      check(list, checkList) {
        console.log(checkList.length)
        checkList.forEach(check => {
          if (check.name === list.name) {
            list.show = true
          }
        })
      },
      addList(list, checkList) {
        // // 单选方法
        // if (checkList.length > 0) {
        //   checkList.splice(0, 1)
        //   checkList.push(list)
        // } else {
        //   checkList.push(list)
        // }
        if (list.show === false || list.show === undefined) {
          checkList.forEach((item, index) => {
            if (list.name === item.name) {
              checkList.splice(index, 1)
            }
          })
        } else {
          checkList.push(list)
        }
      },
      getDataA() {
        this.List = [
          { name: '复选框 A' },
          { name: '复选框 B' },
          { name: '复选框 C' },
          { name: '复选框 D' },
          { name: '复选框 E' },
        ]
      },
      getDataB() {
        this.List = [
          { name: ' A' },
          { name: ' B' },
          { name: ' C' },
          { name: ' D' },
          { name: ' E' },
          { name: ' F' },
          { name: ' G' },
          { name: ' H' },
        ]
      },
      cleanData() {
        this.List = []
        this.checkList = []
      },
    }
  }
</script>
<style scoped>

</style>
