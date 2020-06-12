<template>
  <div class="reg-content">
    <!-- 导航 -->
    <nav-bar class="reg-nav-bar">
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/images/common/back.svg" alt="" >
      </div>
      <div slot="center">注册</div>
    </nav-bar>
    <confirm ref="myConfirm" @userbehavior="userBehavior"/>
    <register-form @registerClick="registerClick" class="reg-form"/>

  </div>
</template>

<script>
  // 1.公共组件导入
  import NavBar from 'common/navbar/NavBar'
  import Confirm from 'common/confirm/Confirm'
  // 2.子组件导入
  import RegisterForm from './childComp/RegisterForm'
  // 3.功能函数导入
  import {reqForReg} from 'network/register'
  import {fetchPost, fetchGet} from 'network/reqFromMysql'
  // 4.本组件对象
  export default {
    name: 'Register',
    components: {
      Confirm,
      NavBar,
      RegisterForm
    },
    created() {
      this.reqForReg();
    },
    methods: {
      backClick() {
        this.$router.back();
      },
      // confirm弹窗参数设置为alert
      userBehavior() {
        this.$refs.myConfirm.show('注册成功！', {
          type: 'alert',
          confirmText: '确定',
          titleText: '消息提示',
          data: '我是外界传进来的数据'
        });
        this.$refs.myConfirm.isShowConfirm = true;
      },
      // 请求数据库连接
      reqForReg() {
        reqForReg().then(res => {
          console.log(res);
        })
      },
      // 发送POST请求
      registerClick(userInfo) {
        // console.log(userInfo);
        // 密码验证
        const flag = this.checkPassword(userInfo);
        console.log(flag);
        
        if(flag) {
          fetchPost('/register', userInfo).then(res => {
            console.log(res);
          });
          // 控制台输出通知
          // console.log('注册成功');
          // 弹窗通知
          this.userBehavior();
          this.$router.back();
          
        } else {
          console.log('两次密码输入不同，请重新输入');
          
        }
      },
      // 检查二次密码输入是否正确
      checkPassword(userInfo) {
        const fir_password = userInfo.password;
        const sec_password = userInfo.sec_password;
        if(fir_password === sec_password) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
</script>

<style scoped>
  .reg-content {
    height: 100vh;
  }

  .back > img {
    margin-top: 12px;
  }

  .reg-nav-bar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 8;
    background-color: #fff;
    text-align: center;
    color: var(--color-tint);
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