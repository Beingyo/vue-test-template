import Vue from 'vue'
import Router from 'vue-router'
import test1 from '@/components/test1/'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'index', meta: {title: '首页'}, component: () => import('@/components/index')},

    {path: '/clickChangeStyle', name: 'clickChangeStyle', meta: {title: '点击更换样式'}, component: () => import('@/page/clickChangeStyle/index')},
    {path: '/imgDialog', name: 'imgDialog', meta: {title: '查看图片框'}, component: () => import('@/page/imgDialog/index')},
    {path: '/sortable', name: 'sortable', meta: {title: '拖拽排序'}, component: () => import('@/page/sortable/index')},
    {path: '/elSearchLoad', name: 'elSearchLoad', meta: {title: 'el搜索联想'}, component: () => import('@/page/elSearchLoad/index')},
    {path: '/tableHeadTouch', name: 'tableHeadTouch', meta: {title: 'el表头触摸'}, component: () => import('@/page/tableHeadTouch/index')},

    {path: '/excelOperation', name: 'excelOperation', meta: {title: 'excel导入导出'}, component: () => import('@/page/excelOperation/index')},
    {path: '/getUserIP', name: 'getUserIP', meta: {title: '获取用户ip'}, component: () => import('@/page/getUserIP/index')},
    {path: '/imgUpload', name: 'imgUpload', meta: {title: '图片上传并显示'}, component: () => import('@/page/imgUpload/index')},
    {path: '/imgElUpload', name: 'imgElUpload', meta: {title: 'el图片上传并显示'}, component: () => import('@/page/imgUpload/elUpload')},
    {path: '/checkboxShow', name: 'checkboxShow', meta: {title: 'elCheckBox回显'}, component: () => import('@/page/checkboxShow/index')},

    {path: '/treeTouch', name: 'treeTouch', meta: {title: 'elTree触摸样式'}, component: () => import('@/page/treeTouch/index')},
    {path: '/addHtml', name: 'addHtml', meta: {title: '匹配字符添加html标签'}, component: () => import('@/page/addHtml/index')},
    {path: '/timeLine', name: 'timeLine', meta: {title: '更新时间线'}, component: () => import('@/page/timeLine/index')},
    {path: '/TinyMCE', name: 'TinyMCE', meta: {title: 'TinyMCE富文本'}, component: () => import('@/page/TinyMCE/index')},
    {path: '/countDown', name: 'countDown', meta: {title: '倒计时'}, component: () => import('@/page/countDown/index')},

    {path: '/imgTouch', name: 'imgTouch', meta: {title: '触摸图片显示文字'}, component: () => import('@/page/imgTouch/index')},
    {path: '/wholeNation', name: 'wholeNation', meta: {title: '全国地区四级'}, component: () => import('@/page/wholeNation/index')},
    {path: '/threejs', name: 'threejs', meta: {title: 'threejs'}, component: () => import('@/page/threejs/index')},
    {path: '/proAndIn', name: 'proAndIn', meta: {title: '依赖注入'}, component: () => import('@/page/proAndIn/index')},

    {path: '/test1', name: 'test1', component: test1},
  ]
})
