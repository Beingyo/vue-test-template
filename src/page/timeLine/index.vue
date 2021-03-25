<!--版本更新-->
<template>
  <div>
    <div class="update-body">
      <div v-for="year in data.year">
        <div v-if="year.status" class="update-year">
          {{ year.date }}
        </div>
        <div class="update-flex">
          <div class="update-flex-left">
            {{ year.time }}
          </div>
          <div class="update-flex-center">
            <div class="vertical-hr"/>
          </div>
          <div class="update-flex-right">
            <div class="update-content">
              <div class="arrow-under"/>
              <div class="arrow-top"/>
              <div class="update-content-font">
                <div v-for="content in year.content">
                  <span>{{ content.text }}</span>
                </div>
                <h3>具体使用方法可参考文档&nbsp<span style="color: #d7b759" v-html="year.url"/></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="update-bottom">
      <div class="update-flex">
        <div class="update-flex-left">
          XX月XX日
        </div>
        <div class="update-flex-center">
          <div class="vertical-hr"/>
        </div>
        <div class="update-flex-right">
          <div class="update-content">
            <div class="arrow-under"/>
            <div class="arrow-top"/>
            <div class="update-content-font">
              <h3>XXX来啦！</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'timeLine',
    data() {
      return {
        data: {
          year: [
            {
              status: 1,
              date: '2020',
              time: '05月07日',
              content: [
                { text: '1.XXXXXXXX' },
                { text: '2.XXXXXXXXXXXXX' },
                { text: '3.XXXXXXXX' },
                { text: '4.XXXXX' }
              ],
              url: '<a href="https://www.baidu.com">2020-05-07更新详解</a>'
            },
            {
              status: 0,
              date: '2020',
              time: '05月02日',
              content: [
                { text: '1.XXXXXXXX' },
                { text: '2.XXXXXXXXXXXXX' },
                { text: '3.XXXXXXXX' }
              ],
              url: '<a href="https://www.baidu.com">2020-05-02更新详解</a>'
            },
            {
              status: 0,
              date: '2020',
              time: '04月15日',
              content: [
                { text: '1.XXXXXX' },
                { text: '2.XXXXXXXX' }
              ],
              url: '<a href="https://www.baidu.com">2020-04-15更新详解</a>'
            },
            {
              status: 1,
              date: '2019',
              time: '11月05日',
              content: [
                { text: '1.XXXXXXXX' },
                { text: '2.XXXXXXXX' }
              ],
              url: '<a href="https://www.baidu.com">2019-11-05更新详解</a>'
            },
            {
              status: 0,
              date: '2019',
              time: '10月20日',
              content: [
                { text: '1.XXXXXXXX' }
              ],
              url: '<a href="https://www.baidu.com">2019-10-20更新详解</a>'
            },
            {
              status: 0,
              date: '2019',
              time: '10月01日',
              content: [
                { text: '1.XXXXXXXX' },
                { text: '2.XXXXXXXXXXXX' },
                { text: '3.XXXXXXXXXXXXXXXX' },
                { text: '4.XXXXXXXX' }
              ],
              url: '<a href="https://www.baidu.com">2019-10-01更新详解</a>'
            }
          ]
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .update-body {
    width: 1000px;
    margin: 0 auto;
    padding-top: 30px;

    .update-year {
      width: 96px;
      height: 96px;
      border-radius: 100%;
      background: -webkit-gradient(linear, left top, right bottom, from(#78ca5a), to(#c6ebac));
      line-height: 96px;
      text-align: center;
      font-size: 28px;
      /*年份距离*/
      margin-left: 63px;
      color: #fafafa
    }
  }

  .update-flex {
    width: 100%;
    display: flex;

    .update-flex-left {
      min-width: 110px;
      height: 50px;
      font-size: 20px;
      margin: 70px 0 0 0;
    }

    .update-flex-center {
      width: 1px;
      border: 1px solid #cccccc;
      background-color: #cccccc;

      .vertical-hr {
        height: 9px;
        width: 9px;
        background-color: #78ca5a;
        position: absolute;
        border-radius: 100%;
        box-shadow: 0 0 0 5px #c6ebac;
        margin: 80px 0 0 -5px;
      }
    }

    .update-flex-right {
      width: 100%;

      .arrow-under {
        width: 0;
        height: 0;
        border: 12px solid;
        border-color: transparent #cccccc transparent transparent;
        position: absolute;
        right: 100%;
        top: 30px;
      }

      .arrow-top {
        width: 0;
        height: 0;
        border: 8px solid;
        border-color: transparent #ffffff transparent transparent;
        position: absolute;
        right: 100%;
        top: 34px
      }

      .update-content {
        position: relative;
        margin: 20px auto;
        margin-top: 40px;
        margin-left: 30px;
        padding: 10px 0 0 20px;
        width: 850px;
        line-height: 38px;
        font-family: sans-serif;
        border: 3px solid #cccccc;
        border-radius: 10px;

        .update-content-font {
          font-size: 16px;
          color: black;
          letter-spacing: 1px;
        }
      }
    }
  }

  .update-bottom {
    width: 1000px;
    margin: 0 auto;

    .update-flex {
      .update-flex-center {
        height: 90px;
      }

      .update-flex-right {
        margin-top: 14px;

        .update-content {
          margin-bottom: 80px;
        }

        .arrow-under {
          top: 18px
        }

        .arrow-top {
          top: 22px
        }
      }
    }
  }
</style>
