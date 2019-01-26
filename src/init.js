import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.less'
import router from './router'
import store from './store'
Vue.use(ElementUI)

// 路由全局守卫
router.beforeEach((to, from, next) => {
  if (!to.meta.requireAuth) {
    if (store.state.token) {
      next()
    } else {
      next({
        name: '登录'
      })
    }
  } else {
    next()
  }
})
