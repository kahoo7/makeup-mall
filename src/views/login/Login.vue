<template>
  <div class="login-content">
    <!-- 导航 -->
    <nav-bar class="login-nav-bar">
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/images/common/back.svg" alt="" >
      </div>
      <div slot="center">登录</div>
    </nav-bar>

    <scroll class="login-scroll">
      <login-form class="login-form" @loginClick="loginClick"/>
    </scroll>

  </div>
</template>

<script>
  // 1.公共组件导入
  import NavBar from 'common/navbar/NavBar'
  import Scroll from 'common/Scroll/Scroll'
  // 2.子组件导入
  import LoginForm from './childComp/LoginForm'
  // 3.功能函数导入
  import {reqForLogin} from 'network/login'
  import {fetchPost, fetchGet} from 'network/reqFromMysql'
  // 4.本组件对象
  export default {
    name: 'Login',
    components: {
      NavBar,
      LoginForm,
      Scroll
    },
    created() {
      this.reqForLogin();
    },
    methods: {
      backClick() {
        this.$router.back();
      },
      // 请求数据库连接
      reqForLogin() {
        reqForLogin().then(res => {
          console.log(res);
        })
      },

      // 向数据库发送POST请求
      loginClick(userInfo) {
        // console.log(userInfo);   
        fetchPost('/login', userInfo).then(res => {
          console.log(res);
       })
      }
    }
  }
</script>

<style scoped>
  .login-content {
    height: 100vh;
  }

  .back > img {
    margin-top: 12px;
  }

  .login-nav-bar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 8;
    background-color: var(--color-tint);
    text-align: center;
    color: #fff;
  }

  .login-form {
    width: 90%;
    padding-top: 100px;
    background-color: #fff;
  }

  .login-scroll {
    position: relative;
    top: 44px;
    z-index: 9;
    background-color: #fff;
    height: calc(100% - 44px);
  }
   

</style>