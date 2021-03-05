<template>
  <div style="width: 100%">
    <div style="width: 1000px;text-align: center;margin: 0 auto;">
      <div class="code">
        <el-button class="btn-code" :disabled="codeDisabled" :loading="getCodeLoad" @click="getCode" >{{ codeMsg }}</el-button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'countDown',
    data () {
      return {
        codeMsg: '获取验证码',
        getCodeLoad: false, // 获取验证码时按钮加载
        codeDisabled: true, // 获取验证码时禁用按钮
        countdown: 60, // 倒计时秒数
        timer: null, // 定时器
      }
    },
    created () {
      // 进入页面时获取之前是否有倒计时
      const endTime = localStorage.getItem('endTime')
      if (endTime) {
        this.codeCountDown(endTime)
      } else {
        this.codeDisabled = false
      }
    },
    methods: {
      getCode() {
        this.getCodeLoad = false
        const endMsRes = (new Date()).getTime() + 60000
        localStorage.setItem('endTime', JSON.stringify(endMsRes))
        this.codeCountDown(endMsRes)
      },
      // 新倒计时，网页刷新后仍存在
      codeCountDown (endMsRes) {
        // this.codeDisabled = true
        this.countdown = Math.ceil((endMsRes - (new Date()).getTime()) / 1000)
        const timer = setTimeout(() => {
          this.countdown--
          if (this.countdown >= 1) {
            this.codeMsg = '获取验证码' + '(' + this.countdown + ')' + '秒'
            this.codeDisabled = true
          }
          if (this.countdown < 1) {
            this.codeDisabled = false
            this.codeMsg = '获取验证码'
            this.countdown = 60
            localStorage.removeItem('endTime')
            clearTimeout(timer)
          } else {
            this.codeCountDown(endMsRes)
          }
        }, 1000)
      }
    }
  }
</script>
<style>
</style>
