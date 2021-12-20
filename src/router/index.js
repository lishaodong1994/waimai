import Vue from 'vue'
import VueRouter from 'vue-router'

//Vue-Router版本到到3.1.0及以上之后，页面在跳转路由控制台会报Uncaught (in promise)的问题
//重写 Router上的push使多次点击同一个路由不报错。
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
//============================================================

const Home =()=>import('views/home/Home.vue')
const Order =()=>import('views/order/Order.vue')
const Search =()=>import('views/search/Search.vue')
const Profile =()=>import('views/profile/Profile.vue')
const Login = ()=>import('views/login/Login.vue')
const Category = ()=>import('views/category/Category.vue')
const Assess = ()=>import('views/category/child/Assess.vue')
const Business = ()=>import('views/category/child/Business.vue')
const Tes = ()=>import('views/tes/Tes.vue')
const OrderingFood = ()=>import('views/category/child/OrderingFood.vue')


Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'/home'},
  { path:'/home', component:Home },
  { path:'/tes', component:Tes, },
  { path:'/order', component:Order },
  { path:'/search', component:Search },
  { path:'/profile', component:Profile },
  { path:'/login', component:Login },
  { path:'/category', component:Category,redirect:'/category/orderingfood',
    children:[
      { path:'/category/orderingfood', component:OrderingFood },
      { path:'/category/assess', component:Assess },
      { path:'/category/business', component:Business },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
