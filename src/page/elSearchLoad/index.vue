<template>
  <div>
    <p>输入时显示联想内容，例如 三</p>
    <el-autocomplete
      v-model="state"
      :fetch-suggestions="querySearch"
      :trigger-on-focus="false"
      @select="handleSelect"
      @input="inputChange"
    >
      <!--貌似写死只能对value值进行联想，但可以用template实现显示内容(与table用法相同)-->
      <template slot-scope="{ item }">
        <span>{{ item.address }}</span>
      </template>
    </el-autocomplete>
  </div>
</template>

<script>
  export default {
    name: 'elSearchLoad',
    data() {
      return {
        restaurants: [],
        state: '',
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log('选择了' + JSON.stringify(item))
      },
      inputChange() {
        this.restaurants = this.loadAll();
      },
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" }
        ];
      },
    },
  }
</script>
