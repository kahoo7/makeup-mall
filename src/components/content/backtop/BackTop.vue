<template>
  <div class="backtop">
    <img src="~assets/images/common/top.png" alt="">
  </div>
</template>

<script>

  export default {
    name: 'BackTop',
  }
</script>

<style scoped>
  .backtop {
    position: fixed;
    bottom: 60px;
    right: 10px;
  }

  .backtop > img {
    width: 43px;
    height: 43px;
  }
</style>