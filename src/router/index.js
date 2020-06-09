import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../views/home/Home');
const Category = () => import('../views/category/Category');
const ShopCart = () => import('../views/shopcart/ShopCart');
const Profile = () => import('../views/profile/Profile');
const Detail = () => import('../views/detail/Detail');


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/cart',
    name: 'cart',
    component: ShopCart
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router