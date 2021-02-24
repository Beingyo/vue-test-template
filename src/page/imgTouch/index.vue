<template>
  <div>
    <div class="img-group">
      <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp4.ssl.cdn.btime.com%2Ft01ff08e303db55233c.jpg%3Fsize%3D600x440%3Fsize%3D600x440&refer=http%3A%2F%2Fp4.ssl.cdn.btime.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616720597&t=4c2a34602e9e0107b02023de5b4c628c">
      <div class="img-tip">我是XX</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    mounted() {
    },
    created() {

    }
  }
</script>

<style scoped>
  .img-group {
    position: relative;
    display: inline-block;
  }

  .img-tip {
    position: absolute;
    bottom: 8px;
    background: #333;
    color: #fff;
    opacity: 0.6;
    display: block;
    z-index: -1;
  }

  .img-group:hover .img-tip {
    display: block;
    width: 100%;
    text-align: center;
    z-index: 1;
  }
</style>
