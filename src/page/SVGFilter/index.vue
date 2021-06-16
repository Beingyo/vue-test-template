<template>
  <div>
    <svg width="1024" height="640" viewBox="0 0 1024 640" id="fecolor-test" preserveAspectRatio="xMidYMid slice">
      <defs>
        <filter id="fecolor-filter">
          <feColorMatrix
            type="matrix"
            :values="colorR + '0  0  0  0' +
                    '0' + colorG + '1  1 0' +
                    '0 0' + colorB + '0 0' +
                    '0  0  0' + colorT + '0'"
          />
<!--          <feColorMatrix-->
<!--            type="matrix"-->
<!--            values="0.1 0 0 0 0-->
<!--                    0 1 0 0 0-->
<!--                    0 0 1 0 0-->
<!--                    0 0 0 1 0"-->
<!--          />-->
        </filter>
      </defs>
      <image width="200" height="150" filter="url(#fecolor-filter)" href="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.soumeitu.com%2Fwp-content%2Fuploads%2F2020%2F07%2F5f16a9063ffd3.jpg&refer=http%3A%2F%2Fwww.soumeitu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626396919&t=31f73d513b255754ba3612faaf9af186" />
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'SVGFilter',
    data () {
      return {
        colorR: 0.1,
        colorG: 1,
        colorB: 1,
        colorT: 1,
      }
    }
  }
</script>

<style scoped>

</style>
