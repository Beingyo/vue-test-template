<template>
  <div style="width: 100%">
    <div style="width: 1000px;text-align: left;margin: 0 auto;">
      <p>输入的语句：{{ msg1 }}</p>
      <hr>
      <p>转换后语句：{{ outPut }}</p>
      <hr>
      <p>搜索出语句：<span v-html="outPut"></span></p>
      <hr>
      <p>语句出现次数：{{ count }}</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'addHtml',
    data () {
      return {
        // 搜索的词语
        msg1: '好吗',
        // 得到的文章句子转换出的句子
        outPut: '你好吗，我好，大好吗家！好吗好吗好吗',
        // 存放开始下标
        indexStar: '',
        // 存档结束下标
        indexEnd: '',
        // 开始标签
        labelStar: '<span style="color: red">',
        // 结束标签
        labelEnd: '</span>',
        // 存放匹配字符串出现次数
        count: 0
      }
    },
    created () {
      // 添加标签后的长度增加值
      var length = this.labelStar.length + this.labelEnd.length + this.msg1.length
      // 查看匹配成功的次数
      var msg = this.outPut
      while (msg.indexOf(this.msg1) != -1) {
        msg = msg.substring(msg.indexOf(this.msg1) + 1, msg.length)
        this.count++
      }
      if (this.count !== 0) {
        for (var i = 0; i < this.count; i++) {
          if (i === 0) {
            // 匹配出的字符串下标
            this.indexStar = this.outPut.indexOf(this.msg1)
            this.indexEnd = this.indexStar + this.msg1.length
            this.insertStr(this.outPut, this.indexEnd, this.labelEnd)
            this.insertStr(this.outPut, this.indexStar, this.labelStar)
          } else {
            // 第i次添加标签后的字符串下标
            this.indexStar = this.outPut.indexOf(this.msg1, this.indexStar + length)
            console.log('第' + i + '次匹配出的字符串下标' + this.indexStar)
            this.indexEnd = this.indexStar + this.msg1.length
            this.insertStr(this.outPut, this.indexEnd, this.labelEnd)
            this.insertStr(this.outPut, this.indexStar, this.labelStar)
          }
        }
      }
    },
    methods: {
      // 标签插入
      insertStr (data, start, newStr) {
        this.outPut = data.slice(0, start) + newStr + data.slice(start)
      }
    }
  }
</script>
<style>
  p{
    font-size: 20px;
  }
</style>
