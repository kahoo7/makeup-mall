<template>
  <div>
    <form>
      <label>
      用户名：
        <input type="text" v-model="userInfo.uname" />
      </label>
      性别：
      <label>
        <input type="radio" name="gender" value="男" v-model="userInfo.gender"/>男
      </label>

      <label>
        <input type="radio" name="gender" value="女" v-model="userInfo.gender"/>女
      </label>
      <br />

      <!-- <label for="tel">手机号码：</label>
      <input type="text" name="contact" id="tel" />

      <label>
        电子邮箱：
        <input type="email" name="email"/>
      </label> -->

      <label>
        密码：
        <input type="password" v-model="userInfo.password" minlength="6" />
      </label>

      <label>
        确认密码：
        <input type="password" name="password2" minlength="6" />
      </label>
      
      <span class="register-button" @click="registerClick">注册</span>
    </form>
  </div>
</template>

<script>
// 1.公共组件导入
// 2.子组件导入
// 3.功能函数导入
// 4.本组件对象
export default {
  name: "RegisterForm",
  data() {
    return {
      userInfo: {
        uname: '',
        password: '',
        gender: ''
      }
    }
  },
  methods: {
    registerClick() {
      console.log(this.userInfo);
      
      this.$emit('registerClick', this.userInfo);
    }
  }
};
</script>

<style scoped>
input[type="text"],
input[type="email"],
input[type="password"] {
  width: 90%;
  padding: 12px 16px;
  margin: 8px auto;
  text-align: center;
  display: block;
  border: 1px solid #ccc;
  border-radius: 24px;
  box-sizing: border-box;
  outline: none;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus {
  width: 100%;
  border-color: var(--color-tint);
  transition: 0.25s;
}

.register-button {
  width: 90%;
  background-color:var(--color-tint);
  display: block;
  color: white;
  padding: 14px 20px;
  margin: 30px auto;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
}

.register-button:hover {
  background: pink;
}

input[type="radio"] {
  height: 20px;
  margin: 8px auto;
}

div {
  margin: auto;
  width: 100%;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>