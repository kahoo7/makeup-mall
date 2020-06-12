<template>
  <div class="profile-content">
    <nav-bar class="profile-nav-bar">
      <div slot="center">个人信息</div>
    </nav-bar>

    <scroll ref="profileScroll" class="profile-scroll">

      <div class="top-box">

        <div class="top-up">
          <img class="avatar" src="~assets/images/profile/icon_people_fill.svg" alt="">
        </div>

        <div v-if="loginFlag" class="top-down">
          <span class="userinfo">{{userinfo.uname}}, 欢迎回来</span>
        </div>
        
        <div v-else class="top-down login">
          <span @click="toLogin" class="userinfo">登录</span>
          <span @click="toRegister" class="userinfo">注册</span>
        </div>

      </div>

      <div class="middle-box">

        <div class="middle-item">
          <img class="icon" src="~assets/images/profile/icon_alipay_line.svg" alt="">
          <span>支付宝</span>
          <img class="icon next" src="~assets/images/profile/icon_next_arrow.svg" alt="">
        </div>

        <div class="middle-item">
          <img class="icon" src="~assets/images/profile/icon_star.svg" alt="">
          <span>收藏</span>
          <img class="icon next" src="~assets/images/profile/icon_next_arrow.svg" alt="">
        </div>

        <div class="middle-item">
          <img class="icon" src="~assets/images/profile/icon_work.svg" alt="">
          <span>浏览历史</span>
          <img class="icon next" src="~assets/images/profile/icon_next_arrow.svg" alt="">
        </div>
        
        <div class="middle-item">
          <img class="icon" src="~assets/images/profile/icon_setting.svg" alt="">
          <span>设置</span>
          <img class="icon next" src="~assets/images/profile/icon_next_arrow.svg" alt="">
        </div>

      </div>

      <div class="bottom-box"></div>

    </scroll>
  </div>
</template>

<script>
  // 1.公共组件导入
  import NavBar from 'common/navbar/NavBar'
  import Scroll from 'common/Scroll/Scroll'

  export default {
    name: 'Profile',
    data() {
      return {
        userinfo: {},
        loginFlag: false,
      }
    },
    components: {
      NavBar,
      Scroll
    },
    methods: {
      toLogin() {
        this.$router.push('/login');
      },
      toRegister() {
        this.$router.push('/register');
      }
    },
    mounted() {

    },
    activated() {
      if(this.$store.state.userinfo.loginFlag) {
        this.userinfo = this.$store.state.userinfo;
        this.loginFlag = true;
      }
    }
  }
</script>

<style scoped>
  span {
    height: 44px;
    line-height: 44px;
  }

  .profile-content{
    height: 100vh;
  }

  .profile-scroll{
    position: relative;
    top: 44px;
    display: block;
    padding-top: 30px;
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }

  .profile-nav-bar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 8;
    background-color: var(--color-tint);
    text-align: center;
    color: #fff;
  }

  .avatar {
    display: block;
    margin: auto;
    width: 60px;
    height: 60px;
    border: 1px solid #cccccc;
    border-radius: 50%;
  }
  
  .top-up {
    margin-bottom: 20px;
  }
  .top-down {
    display: flex;
    justify-content: space-around;
    width: 70%;
    margin: auto;
    padding-top: 7px;
  }

  .userinfo {
    padding: 0 35px;
    height: 32px;
    font-size: 14px;
    line-height: 32px;
    text-align: center;
    border-radius: 5px;
  }

  .login > span {
    color: white;
    background-color: var(--color-tint);
  }

  .middle-box{
    margin-top: 30px;
    border-top: 1px solid #ccc;
  }
  .middle-item {
    display: flex;
    padding: 5px 15px;
    border-bottom: 1px solid #cccccc
  }

  .icon {
    position: relative;
    top: 7px;
    margin-right: 10px;
    width: 30px;
    height: 30px;
  }
  .next {
    top: 15px;
    width: 15px;
    height: 15px;
  }
</style>