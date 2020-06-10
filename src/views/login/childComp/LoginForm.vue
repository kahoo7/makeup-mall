<template>
  <div class="login-form">
    <form>
      <label>
        用户名：
        <input type="text" required="required"  v-model="userInfo.uname"/>
      </label>

      <label>
        密码：
        <input type="password" required="required" minlength="6" v-model="userInfo.password" />
      </label>

      <span class="login-button" @click="loginClick">登录</span>
    </form>
  </div>
</template>

<script>
// 1.公共组件导入
// 2.子组件导入
// 3.功能函数导入
// 4.本组件对象
export default {
  name: "LoginForm",
  data() {
    return {
      userInfo: {
        uname: '',
        password: ''
      }
    }
  },
  methods: {
    loginClick() {
      this.$emit('loginClick', this.userInfo);
    }
  }
};
</script>

<style scoped>
  input[type="text"],
  input[type="password"] {
    width: 90%;
    padding: 12px 16px;
    margin: 15px auto;
    text-align: center;
    display: block;
    border: 1px solid #ccc;
    border-radius: 24px;
    box-sizing: border-box;
    outline: none;
  }

  input[type="text"]:focus,
  input[type="password"]:focus {
    width: 100%;
    border-color: var(--color-tint);
    transition: 0.25s;
  }

  .login-button {
    width: 80%;
    background-color: var(--color-tint);
    display: block;
    color: white;
    padding: 14px 20px;
    margin: 50px auto;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
  }

  .login-button:hover {
    background: pink;
  }

  div {
    margin: auto;
    width: 400px;
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
  }
</style>