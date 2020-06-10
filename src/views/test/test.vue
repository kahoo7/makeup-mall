<template>
  <div>
    <p>j</p>
  </div>
</template>

<script>
  // 1.公共组件导入
  // 2.子组件导入
  // 3.功能函数导入
  import {getDataFromMysql} from 'network/test'
  // 4.本组件对象
  export default {
    name: 'test',
    mounted() {
      this.getDataFromMysql();
    },
    methods: {
      getDataFromMysql() {
        getDataFromMysql().then(res => {
          console.log(res);
          // console.log('here');          
        })
      }
    }
  }
</script>

<style scoped>

</style>