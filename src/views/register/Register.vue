<template>
  <div class="reg-content">
    <!-- 导航 -->
    <nav-bar class="reg-nav-bar">
      <div slot="center">注册</div>
    </nav-bar>

    <register-form @registerClick="registerClick" class="reg-form"/>

  </div>
</template>

<script>
  // 1.公共组件导入
  import NavBar from 'common/navbar/NavBar'
  // 2.子组件导入
  import RegisterForm from './childComp/RegisterForm'
  // 3.功能函数导入
  import {reqForReg} from 'network/register'
  import {fetchPost, fetchGet} from 'network/reqFromMysql'
  // 4.本组件对象
  export default {
    name: 'Register',
    components: {
      NavBar,
      RegisterForm
    },
    created() {
      this.reqForReg();
    },
    methods: {
      // 请求数据库连接
      reqForReg() {
        reqForReg().then(res => {
          console.log(res);
        })
      },
      // 发送POST请求
      registerClick(userInfo) {
        // console.log(userInfo);
        fetchPost('/register', userInfo).then(res => {
          console.log(res);
        })
      }
    }
  }
</script>

<style scoped>
  .reg-content {
    height: 100vh;
  }

  .reg-nav-bar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 8;
    background-color: var(--color-tint);
    text-align: center;
    color: #fff;
  }

  .reg-form {
    position: relative;
    top: 44px;
    z-index: 9;
    width: 100%;
    padding-top: 50px;
    background-color: #fff;
    height: calc(100% - 44px);
  }
  
</style>