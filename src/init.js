import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.css'
import router from './router'
import store from './store'
Vue.use(ElementUI)
// import {
//   Row,
//   Col,
//   Button,
//   Dialog,
//   Container,
//   Header,
//   Aside,
//   Main,
//   Menu,
//   MenuItem,
//   Form,
//   FormItem,
//   Input,
//   Message
// } from 'element-ui'

// Vue.use(Row).use(Col)
// Vue.use(Button)
// Vue.use(Dialog)
// Vue.use(Container).use(Header).use(Aside).use(Main)
// Vue.use(Menu).use(MenuItem)
// Vue.use(Form).use(FormItem)
// Vue.use(Input)

// Vue.prototype.$message = Message

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
