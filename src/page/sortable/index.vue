<!--npm下载：npm install sortablejs --save-->
<template>
  <div>
    <el-table
      :data="list"
      :row-class-name="tableRowClassName"
      row-key="id"
      style="width: 1000px;margin: 0 auto">
      <el-table-column
        type="index"
        label="下标"
        align="center"
        width="300">
      </el-table-column>
      <el-table-column
        v-for="(label,index) in labels"
        :key="index"
        :label="label.label"
        :prop="label.prop"
        align="center">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  import Sortable from 'sortablejs'
  export default {
    name: 'sortable',
    data() {
      return {
        // list: [],
        list: [
          { index: '', id: 1, classifyName: '111111111111' },
          { index: '', id: 2, classifyName: '222222222222' },
          { index: '', id: 3, classifyName: '333333333333' },
          { index: '', id: 4, classifyName: '444444444444' },
          { index: '', id: 5, classifyName: '555555555555' },
          { index: '', id: 6, classifyName: '666666666666' },
          { index: '', id: 7, classifyName: '777777777777' },
          { index: '', id: 8, classifyName: '888888888888' }
        ],
        indexList: [],
        labels: [
          { label: 'ID', prop: 'id' },
          { label: '分类名', prop: 'classifyName' }
        ]
      }
    },
    mounted() {
      const tbody = document.querySelector('.el-table__body-wrapper tbody')
      const _this = this
      Sortable.create(tbody, {
        onEnd({ newIndex, oldIndex }) {
          var $li = tbody.children[newIndex]
          var $oldLi = tbody.children[oldIndex]
          // 先删除移动的节点
          tbody.removeChild($li)
          // 再插入移动的节点到原有节点，还原了移动的操作
          if (newIndex > oldIndex) {
            tbody.insertBefore($li, $oldLi)
          } else {
            tbody.insertBefore($li, $oldLi.nextSibling)
          }
          // 更新items数组
          const currRow = _this.list.splice(oldIndex, 1)
          _this.list.splice(newIndex, 0, currRow[0])
          // 下一个tick就会走patch更新

          for (var i = 0; i < _this.list.length; i++) {
            _this.list[i].index = _this.indexList[i]
          }

          console.log('传输数据：')
          console.log(JSON.stringify(_this.list))
        },
        animation: 150
      })
    },
    methods: {
      tableRowClassName({ rowIndex }) {
        // 把每一行的索引放进row
        this.indexList[rowIndex] = rowIndex
      }
    }
  }
</script>
