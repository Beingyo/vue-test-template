<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="Date"
      prop="date">
    </el-table-column>
    <el-table-column
      label="Name"
      prop="name">
      <template slot="header" slot-scope="scope">
        <div @mouseover="show" @mouseout="hide">
          <i>Name</i>
          <i v-show="del"  @click="headDelate" class="el-icon-delete"/>
          <i v-show="edi" @click="headEdit" class="el-icon-edit"/>
        </div>
      </template>
    </el-table-column>
    <el-table-column>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: 'tableHeadTouch',
    data() {
      return {
        del: false,
        edi: false,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        search: ''
      }
    },
    methods: {
      headEdit() {
        console.log("编辑")
      },
      headDelate() {
        console.log("删除")
      },
      show() {
        console.log("显示")
        this.del = true
        this.edi = true
      },
      hide() {
        console.log("隐藏")
        this.del = false
        this.edi = false
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
  }
</script>
