<template>
  <div>
    <el-button @click="isShow">点击打开</el-button>
    <el-dialog
      v-if="isvisible"
      :visible.sync="isvisible"
      :close-on-click-modal="false"
      :show-close="true"
      :before-close="cancel"
      title="收货地址"
      width="800px"
      center>
      <hr>
      <div class="content">
        <el-form :inline="true" ref="formdata" :model="formdata" :rules="formrule" class="form">
          <el-form-item label="收件人" prop="recipient">
            <el-input v-model="formdata.recipient" class="recipient"/>
          </el-form-item>
          <el-form-item label="收件人电话" prop="areaCode">
            <el-select v-model="formdata.areaCode" class="phone-select">
              <el-option v-for="item in cities" :key="item.value" :label="item.value" :value="item.value">
                <span style="">{{ item.label }}</span>
                <span style="">{{ item.value }}</span>
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="mobile">
            <el-input v-model="formdata.mobile" class="mobile" type="text"/>
          </el-form-item>
          <!--切换国区-->
          <el-form-item label="收件地址" prop="isForeign">
            <el-radio-group v-model="isForeign" label-width="100px" @change="selectAddress('formdata')">
              <el-radio @change="addreShow(item.value)" v-for="item in country" :key="item.value" :label="item.value">{{ item.label }}</el-radio>
            </el-radio-group>
          </el-form-item>
          <br>
          <!--省-->
          <el-form-item v-if="addressShow === 0" prop="province">
            <el-select v-model="formdata.province" placeholder="选择省" @change="selectProvince" calss="slelect-province" style="width: 142px;">
              <el-option
                v-for="item in provinceData"
                :key="item.code"
                :label="item.name"
                :value="item.name">
              </el-option>
            </el-select>
          </el-form-item>
          <!--市-->
          <el-form-item v-if="addressShow === 0" prop="city">
            <el-select v-model="formdata.city" placeholder="选择市" @change="selectCity" class="slelect-city" style="width: 142px;">
              <el-option
                v-for="item in cityData"
                :key="item.code"
                :label="item.name"
                :value="item.name">
              </el-option>
            </el-select>
          </el-form-item>
          <!--区-->
          <el-form-item v-if="addressShow === 0" prop="area">
            <el-select v-model="formdata.area" placeholder="选择区" @change="selectArea" class="slelect-area" style="width: 142px;">
              <el-option
                v-for="item in areaData"
                :key="item.code"
                :label="item.name"
                :value="item.name">
              </el-option>
            </el-select>
          </el-form-item>
          <!--镇-->
          <el-form-item v-if="addressShow === 0" prop="town">
            <el-select v-model="formdata.town" placeholder="选择镇" @change="selectTown" class="slelect-town" style="width: 142px;">
              <el-option
                v-for="item in townData"
                :key="item.code"
                :label="item.name"
                :value="item.name">
              </el-option>
            </el-select>
          </el-form-item>
          <!--国内地址-->
          <el-form-item label="具体街道" v-if="addressShow === 0" prop="street">
            <el-input v-model="formdata.street" class="address-in" type="text"/>
          </el-form-item>
          <!--国际地址-->
          <el-form-item v-if="addressShow === 1" prop="street" style="margin-top: -20px">
            <el-input v-model="formdata.street" class="address-out" type="text"/>
          </el-form-item>
          <el-form-item label="默认地址">
            <el-switch v-model="defaultAddress"></el-switch>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer">
        <el-button type="primary" class="save" @click="save('formdata')">确定</el-button>
        <el-button type="primary" class="cancel" @click="cancel('formdata')">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import addressData from './addressData4.json'
  export default {
    name: 'EditAddress',
    data() {
      const validatePhone = (rule, value, callback) => {
        if (!value) {
          callback(new Error('手机号不能为空'))
        }
          // else if () {
          //   callback(new Error('手机格式不正确'))
        // }
        else {
          callback()
        }
      }
      const validateCity = (rule, value, callback) => {
        if (!value) {
          if (this.cityFlag === 0) {
            callback(new Error('请选择市'))
          }
        }
        else {
          callback()
        }
      }
      const validateArea = (rule, value, callback) => {
        if (!value) {
          if (this.areaFlag === 0) {
            callback(new Error('请选择区'))
          }
        }
        else {
          callback()
        }
      }
      const validateTown = (rule, value, callback) => {
        if (!value) {
          if (this.townFlag === 0) {
            callback(new Error('请选择镇'))
          }
        }
        else {
          callback()
        }
      }
      const validateStreet = (rule, value, callback) => {
        if (!value) {
          if (this.streetFlag === 0) {
            callback(new Error('地址不能为空'))
          }
        }
        else {
          callback()
        }
      }
      return {
        formrule: {
          recipient: [{required: true, trigger: 'blur', message: '用户名不能为空'}],
          mobile: [{required: true, trigger: 'blur', validator: validatePhone}],
          areaCode: [{required: true, trigger: 'change', message: '请选择手机地区'}],
          isForeign: [{required: true, trigger: 'change', message: '请选择地址'}],
          province: [{required: true, trigger: 'change', message: '请选择省'}],
          city: [{required: true, trigger: 'change', validator: validateCity}],
          area: [{required: true, trigger: 'change', validator: validateArea}],
          town: [{required: true, trigger: 'change', validator: validateTown}],
          street: [{ trigger: 'blur', validator: validateStreet}],
        },
        addressValue: 1,
        formdata: {
          webAddressId: 5,
          recipient: '',
          mobile: '',
          areaCode: '+86',
          isForeign: 1,
          province: '',
          city: '',
          area: '',
          town: '',
          street: ''
        },
        cities: [
          { value: '+86', label: '中国' },
          { value: '+886', label: '中国台湾' },
          { value: '+84', label: '越南' },
          { value: '+81', label: '日本' },
          { value: '+1', label: '美国' }
        ],
        country: [
          { value: 1, label: '国际' },
          { value: 0, label: '国内' }
        ],
        isvisible: false,
        // 控制国际/国内地址显示
        addressShow: 1,
        // 省数据
        provinceData: [],
        // 市数据
        cityFlag: 0,
        cityData: [],
        // 区数据
        areaFlag: 0,
        areaData: [],
        // 镇数据
        townFlag: 0,
        townData: [],
        streetFlag: 0,
        // 默认地址状态
        defaultAddress: 0
      }
    },
    created() {
      this.loadData()
    },
    methods: {
      isShow() {
        this.is()
      },
      is() {
        this.isvisible = true
      },
      addreShow(value) {
        this.addressShow = value
        console.log('选择了地区：' + value)
      },
      // 加载省市区镇数据
      loadData() {
        this.provinceData = addressData
      },
      // 切换地区
      selectAddress(formName) {
        this.streetFlag = 1
        this.formdata.street = ''
        this.$refs[formName].resetFields();
        this.formdata.addressValue = this.addressValue
        console.log('切换了地区')
      },
      // 选择省
      selectProvince(value) {
        this.provinceData.forEach((item, index) => {
          if (item.name === value) {
            this.cityData = item.children
            this.formdata.city = ''
            this.cityFlag = 1
            this.formdata.area = ''
            this.areaFlag = 1
            this.formdata.town = ''
            this.townFlag = 1
            this.areaData = []
            this.townData = []
            return false
          }
        })
        console.log('选择了省' + value)
      },
      // 选择市
      selectCity(value) {
        this.cityData.forEach((item, index) => {
          if (item.name === value) {
            this.areaData = item.children
            this.formdata.area = ''
            this.areaFlag = 1
            this.formdata.town = ''
            this.townFlag = 1
            this.townData = []
            return false
          }
        })
        console.log('选择了市' + value)
      },
      // 选择区
      selectArea(value) {
        this.areaData.forEach((item, index) => {
          if (item.name === value) {
            this.townData = item.children
            this.formdata.town = ''
            this.townFlag = 1
            return false
          }
        })
        console.log('选择了区' + value)
      },
      // 选择镇
      selectTown(value) {
        console.log('选择了镇' + value)
      },
      save(formName) {
        this.cityFlag = 0
        this.areaFlag = 0
        this.townFlag = 0
        this.streetFlag = 0
        console.log('提交数据：' + JSON.stringify(this.formdata) + '\n默认地址：' + this.defaultAddress )
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('点击')
          } else {
            return false
          }
        })
      },
      cancel(formName) {
        if (this.$refs[formName] !== undefined) {
          this.$refs[formName].resetFields()
        } else {
          this.formdata.name = ''
        }
        this.isvisible = false
      }
    }
  }
</script>

<style scoped lang="scss">
  /deep/ .el-dialog__title {
    color: #606060;
  }

  /deep/ .el-form-item__label {
    color: #333333;
  }

  /deep/ .el-dialog__body {
    padding: 0;
  }

  /deep/ .el-dialog__footer {
    text-align: center;
    padding: 10px 100px 45px;
  }
  .content {
    width: 700px;
    background-color: #F7F7F7;
    margin: 0 auto;
    margin-top: 10px;
    padding: 20px 25px 0;
  }
  .form {
    .name {
      width: 200px;
    }
    .phone-select {
      width: 80px;
      margin-right: -16px;
      /deep/ .el-input__inner {
        border-right-color: transparent;
        border-radius: 0;
      }
    }
    .phone {
      width: 160px;
      /deep/ .el-input__inner {
        border-radius: 0;
      }
    }
    .address-out {
      width: 610px;
    }
    .address-in {
      width: 542px;
    }
    .slelect-province {
      display: inline;
    }
    .slelect-city {
      display: inline;
    }
    .slelect-area {
      display: inline;
    }
    .slelect-town {
      display: inline;
    }
  }

  .save {
    width: 100px;
    transform: translateX(-13px);
  }

  .cancel {
    width: 100px;
  }

</style>
