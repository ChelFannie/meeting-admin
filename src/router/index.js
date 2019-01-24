import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import('../page/login')
const Layout = () => import('../components/layout')
const Order = () => import('../page/order/order')
// const Meeting = () => import('../page/meeting')
const Examine = () => import('../page/examine/examine')
const Lecturer = () => import('../page/lecturer/lecturer')
const Refund = () => import('../page/refund/refund')
// const MeetingHandler = () => import('../page/examine/meeting-handler')
// const MarketingCenter = () => import('../page/examine/marketing-center')
// const ExamineDetail = () => import('../page/examine/examine-detail')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      redirect: '/order',
      children: [
        {
          path: '/order',
          name: '查询申请',
          component: Order
        }, {
          path: '/examine',
          name: '审核申请',
          component: Examine
          // redirect: '/examine/meeting-handler',
          // children: [
          //   {
          //     path: 'meeting-handler',
          //     name: '会务组审核',
          //     component: MeetingHandler
          //   }, {
          //     path: 'marketing-center',
          //     name: '营销中心审核',
          //     component: MarketingCenter
          //   }, {
          //     path: 'examine-detail',
          //     name: '审核跟进',
          //     component: ExamineDetail
          //   }
          // ]
        }, {
          path: '/lecturer',
          name: '讲师管理',
          component: Lecturer
        }, {
          path: '/refund',
          name: '退款处理',
          component: Refund
        }
      ]
    }, {
      path: '/login',
      name: '登录',
      component: Login,
      meta: {
        requireAuth: true
      }
    }
  ]
})
