import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../views/home/Home');
const Category = () => import('../views/category/Category');
const Cart = () => import('../views/cart/Cart');
const Profile = () => import('../views/profile/Profile');
const Detail = () => import('../views/detail/Detail');
const Test = () => import ('../views/test/test');
const Login = () => import('../views/login/Login');
const Register = () => import('../views/register/Register');


const routes = [
  {
    // 默认页：重定向至首页
    path: '/',
    redirect: '/home'
  },
  {
    // 首页
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    // 分类页
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    // 购物车
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    // 个人信息页
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    // 详情页
    path: '/detail',
    name: 'detail',
    component: Detail
  },
  {
    // 登录页
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    // 注册页
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    // 测试数据库链接
    path: '/test',
    name: 'name',
    component: Test
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router