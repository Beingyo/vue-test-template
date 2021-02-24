<template>
  <div class="employee">
    <div class="left">
      <div class="tree">
        <div>
          <el-tree
            :data="data"
            :expand-on-click-node="false"
            :props="defaultProps"
            node-key="deptId"
            default-expand-all
            @node-click="setUserData"
          >
            <span slot-scope="{ node, data }" class="custom-tree-node" @mouseover="toggleShow(data)" @mouseout="togglenoShow(data)">
              <span>{{ node.label }}</span>
              <span v-if="data.deptId === clickIndex || overIndex === data.deptId">
                <el-popover
                  :v-model="data.visible = true"
                  placement="bottom"
                  width="200"
                  @hide="cancelDepartmen(data)">
                  <div v-if="type == 1">
                    <div @click="editDepartmentName(data)">
                      <el-dropdown-item><span >修改名称</span></el-dropdown-item>
                    </div>
                    <div @click="addDepartmentName(data)">
                      <el-dropdown-item><span >添加子部门</span></el-dropdown-item>
                    </div>
                    <div v-if="data.deptId != 1" @click="deleteDepartmentName(data)">
                      <el-dropdown-item><span>删除</span></el-dropdown-item>
                    </div>
                  </div>
                  <div v-if="type == 2 || type == 3">
                    <el-form ref="ruleForm" :model="ruleForm" >
                      <el-form-item prop="deptName">
                        <el-input v-model="ruleForm.deptName"/>
                      </el-form-item>
                    </el-form>
                    <el-button @click="addsub(data)">确定</el-button>
                    <el-button @click="cancelDepartmen(data)">取消</el-button>
                  </div>
                  <el-button class="btn" slot="reference" type="text" icon="el-icon-more" @click="tools(data)"/>
                </el-popover>
              </span>
            </span>
          </el-tree>
        </div>
      </div>
    </div>
    <div class="right">显示内容</div>
  </div>
</template>

<script>

  export default {
    name: 'Employee',
    data() {
      return {
        data: [{"deptName":"XX公司","deptStatus":1,"deptParentId":0,"deptId":1,"sub":[{"deptName":"部门1","deptStatus":1,"deptParentId":1,"deptId":2,"sub":[{"deptName":"部门1-2","deptStatus":1,"deptParentId":2,"deptId":7,"sub":[],"struct":"富士/部门1/部门1-2","parentName":"部门1","showName":null,"origin":"1,2,7"},{"deptName":"部门1-1","deptStatus":1,"deptParentId":2,"deptId":6,"sub":[{"deptName":"部门1-1-1","deptStatus":1,"deptParentId":6,"deptId":12,"sub":[],"struct":"富士/部门1/部门1-1/部门1-1-1","parentName":"部门1-1","showName":null,"origin":"1,2,6,12"},{"deptName":"部门1-1-2","deptStatus":1,"deptParentId":6,"deptId":13,"sub":[],"struct":"富士/部门1/部门1-1/部门1-1-2","parentName":"部门1-1","showName":null,"origin":"1,2,6,13"}],"struct":"富士/部门1/部门1-1","parentName":"部门1","showName":null,"origin":"1,2,6"},{"deptName":"部门1-3","deptStatus":1,"deptParentId":2,"deptId":8,"sub":[],"struct":"富士/部门1/部门1-3","parentName":"部门1","showName":null,"origin":"1,2,8"}],"struct":"富士/部门1","parentName":"富士","showName":null,"origin":"1,2"},{"deptName":"部门2","deptStatus":1,"deptParentId":1,"deptId":3,"sub":[{"deptName":"部门2-1","deptStatus":1,"deptParentId":3,"deptId":9,"sub":[],"struct":"富士/部门2/部门2-1","parentName":"部门2","showName":null,"origin":"1,3,9"},{"deptName":"部门2-2","deptStatus":1,"deptParentId":3,"deptId":10,"sub":[],"struct":"富士/部门2/部门2-2","parentName":"部门2","showName":null,"origin":"1,3,10"}],"struct":"富士/部门2","parentName":"富士","showName":null,"origin":"1,3"},{"deptName":"部门3","deptStatus":1,"deptParentId":1,"deptId":4,"sub":[{"deptName":"部门3-1","deptStatus":1,"deptParentId":4,"deptId":11,"sub":[],"struct":"富士/部门3/部门3-1","parentName":"部门3","showName":null,"origin":"1,4,11"}],"struct":"富士/部门3","parentName":"富士","showName":null,"origin":"1,4"},{"deptName":"部门4","deptStatus":1,"deptParentId":1,"deptId":5,"sub":[],"struct":"富士/部门4","parentName":"富士","showName":null,"origin":"1,5"}],"struct":"富士","parentName":null,"showName":"富士","origin":"1"}],
        // 左侧成员树
        defaultProps: { children: 'sub', label: 'deptName' },
        type: '1', // 1 显示点击左侧小点弹出的表单， 2 显示修改名称时弹出的表单
        clickIndex: '-1', // 控制点击左侧出现圆点按钮
        overIndex: '-1', // 控制触摸左侧出现圆点按钮
        ruleForm: {
          deptName: '',
        }
      }
    },
    created() {
    },
    methods: {
      // 点击部门获取用户数据
      setUserData(val) {
        this.clickIndex = val.deptId
      },
      // 左侧鼠标触摸
      toggleShow(item) {
        this.overIndex = item.deptId
      },
      // 左侧鼠标离开
      togglenoShow(data) {
        this.overIndex = '-1'
      },
      // 点击圆点按钮
      tools(item) {
        item.visible = true
        // this.overIndex = item.deptId
      },
      // 左侧取消按钮
      cancelDepartmen(data) {
        this.type = '1'
        data.visible = false
      },
      // 添加部门
      addsub(item) {
        console.log('添加部门')
      },
      // 修改部门名
      editDepartmentName(item) {
        this.type = 2
        this.ruleForm.deptName = item.deptName
      },
      // 添加子部门
      addDepartmentName(item) {
        this.type = 3
        this.ruleForm.deptName = ''
      },
      // 删除部门
      deleteDepartmentName(item) {
        console.log('删除部门')
      },
    }
  }
</script>

<style lang="scss" scoped>
  /deep/.el-tree-node__content:hover{
    background: #fbf9ed;
  }
  /deep/.is-current>.el-tree-node__content{
    background: #fbf9ed;
    position: relative;
  }
  .employee{
    display: flex;
    flex-direction: row;
    background-color: #efefef;
    .left{
      width: 200px;
      height: 500px;
      white-space:nowrap;
      overflow-y:auto;
      overflow-x:auto;
      background-color: #ffffff;
      .tree{
        padding: 20px;
        min-width: max-content;
        .custom-tree-node{
          //flex: 1;
          /*display: flex;*/
          /*align-items: center;*/
          justify-content: space-between;
        }
      }
    }
    .right {
      margin: 0 auto;
      line-height: 500px;
    }
  }
  .btn {
    margin-top: 3px;
  }
</style>
