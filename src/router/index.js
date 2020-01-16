import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'views',
    component: () => import('@/views/index'),
    redirect: '/page1',
    children: [{
      path: 'page1',
      name: 'page1',
      component: () => import('@/views/Pages/page1'),
      meta: {
        title: '一、绘制时钟',
        icon: 'page1'
      }
    }, {
      path: 'page2',
      name: 'page2',
      component: () => import('@/views/Pages/page2'),
      meta: {
        title: '二 、旋转圆弧',
        icon: 'page2'
      }
    }, {
      path: 'page3',
      name: 'page3',
      component: () => import('@/views/Pages/page3'),
      meta: {
        title: '三、基本图形3&&扫描',
        icon: 'page3'
      }
    }, {
      path: 'page4',
      name: 'page4',
      component: () => import('@/views/Pages/page4'),
      meta: {
        title: '四、基本4&&扫描数字',
        icon: 'page4'
      }
    }/* , {
      path: 'page5',
      name: 'page5',
      component: () => import('@/views/Pages/page5'),
      meta: {
        title: '五、备份图形',
        icon: 'page5'
      }
    }, {
      path: 'page6',
      name: 'page6',
      component: () => import('@/views/Pages/page6'),
      meta: {
        title: '六、加图片图形',
        icon: 'page6'
      }
    }, {
      path: 'page7',
      name: 'page7',
      component: () => import('@/views/Pages/page7'),
      meta: {
        title: '七、圆环进度条动画',
        icon: 'page7'
      }
    }, {
      path: 'page8',
      name: 'page8',
      component: () => import('@/views/Pages/page8'),
      meta: {
        title: '八、扫描动画',
        icon: 'page8'
      }
    }, {
      path: 'page9',
      name: 'page9',
      component: () => import('@/views/Pages/page9'),
      meta: {
        title: '九、扫描动画备份',
        icon: 'page9'
      }
    } */]
  }]
})
