<!--
引入工具库
npm install -S file-saver xlsx
npm install -D script-loader
-->

<template>
  <div style="width: 100%">
    <div style="width: 400px;background-color: #f2f2f2;margin: 0 auto;padding: 50px 0">
      <el-upload
        class="upload-demo"
        action=""
        :on-change="handleChange"
        :show-file-list="false"
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
        :auto-upload="false">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只 能 上 传 xlsx / xls 文 件</div>
      </el-upload>
      <br><br><br><br>
      <div>
        <el-button @click="outExe">导出excel表格</el-button>
      </div>
    </div>
  </div>
</template>
<script>
  import Blob from './Blob.js'
  import Export2Excel from './Export2Excel.js'
  export default {
    data () {
      return {
        fileTemp: null,
        outdata: [],
        excelData: [],
        dataList: [
          {id: 1, name: '小白', code: '1', mobile: '13440000000', mail: '12580@qq.com', deptNames: '摸鱼部', reasult: 'emmm'},
          {id: 2, name: '小白', code: '', mobile: '13440000000', mail: '12580@qq.com', deptNames: '摸鱼部', reasult: '没写编号'},
          {id: 3, name: '小白', code: '1', mobile: '', mail: '12580@qq.com', deptNames: '摸鱼部', reasult: '正常数据'},
          {id: 4, name: '小白', code: '1', mobile: '13440000000', mail: '', deptNames: '摸鱼部', reasult: '正常数据'}
        ], // 请求回来的data
      }
    },
    created () {
    },
    methods: {
      handleChange (file, fileList) {
        this.fileTemp = file.raw
        if (this.fileTemp) {
          if ((this.fileTemp.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') || (this.fileTemp.type === 'application/vnd.ms-excel')) {
            this.importfxx()
          } else {
            this.$message({
              type: 'error',
              message: '附件格式错误，请删除后重新上传！'
            })
          }
        } else {
          this.$message({
            type: 'warning',
            message: '请上传附件！'
          })
        }
      },
      // 导入开始
      importfxx () {
        let _this = this
        let inputDOM = this.$refs.inputer
        // 通过DOM取文件数据
        this.file = event.currentTarget.files[0]
        var rABS = false // 是否将文件读取为二进制字符串
        var f = this.file
        var reader = new FileReader()
        // if (!FileReader.prototype.readAsBinaryString) {
        FileReader.prototype.readAsBinaryString = function (f) {
          var binary = ''
          var rABS = false // 是否将文件读取为二进制字符串
          var pt = this
          var wb // 读取完成的数据
          var outdata
          var reader = new FileReader()
          reader.onload = function (e) {
            var bytes = new Uint8Array(reader.result)
            var length = bytes.byteLength
            for (var i = 0; i < length; i++) {
              binary += String.fromCharCode(bytes[i])
            }
            var XLSX = require('xlsx')
            if (rABS) {
              wb = XLSX.read(btoa(fixdata(binary)), { // 手动转化
                type: 'base64'
              })
            } else {
              wb = XLSX.read(binary, {
                type: 'binary'
              })
            }
            const sheet2JSONOpts = {
              range: 1, // 第一行开始(A2),默认为第0行
              defval: ''// 给defval赋值为空的字符串
            }
            outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], sheet2JSONOpts)// outdata就是你想要的东西
            this.outdata = [...outdata]
            let arr = []
            this.outdata.map(v => {
              let obj = {}
              obj.name = v['姓名']
              obj.code = v['编号']
              obj.mobile = v['手机']
              obj.mail = v['邮箱']
              obj.deptNames = v['部门']
              arr.push(obj)
            })
            let para = {
              withList: arr
            }
            _this.$message({
              message: '请耐心等待导入成功',
              type: 'success'
            })
            if (para.withList.length > 100) {
              console.log('导入成员超过100名')
            } else {
              console.log('导入数据长度：' + para.withList.length)
            }
            console.log('导入数据：' + JSON.stringify(para))
            /* 发送请求 */
            // withImport(para).then(res => {
            //   window.location.reload()
            // })
          }
          reader.readAsArrayBuffer(f)
        }
        if (rABS) {
          reader.readAsArrayBuffer(f)
        } else {
          reader.readAsBinaryString(f)
        }
      },
      // 导入结束

      // 导出开始
      outExe () {
        this.$confirm('此操作将导出excel文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.excelData = this.dataList // 你要导出的数据list。
          this.export2Excel()
        }).catch(() => {

        })
      },
      export2Excel () {
        var that = this
        require.ensure([], () => {
          // eslint-disable-next-line camelcase
          const { export_json_to_excel } = require('./Export2Excel') // 这里必须使用绝对路径
          const tHeader = ['序号', '姓名', '编号', '手机', '邮箱', '部门', '失败原因'] // 导出的表头名
          const filterVal = ['id', 'name', 'code', 'mobile', 'mail', 'deptNames', 'reasult'] // 导出的表头字段名
          const list = that.excelData
          const data = that.formatJson(filterVal, list)
          console.log('导出数据：\n' + 'tHeader：' + tHeader + '\nxcelData：' + that.excelData)
          export_json_to_excel(tHeader, data, '导入模板')// 导出的表格名称，根据需要自己命名
        })
      },
      formatJson (filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => v[j]))
      }
      // 导出结束
    }
  }
</script>

<style scoped>

</style>
