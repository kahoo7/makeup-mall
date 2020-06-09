<template>
  <div id="app">
    <!-- <h1>111</h1> -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar class="main-tab-bar"></main-tab-bar>

  </div>
</template>

<script>
  import MainTabBar from 'content/mainTabbar/MainTabBar'

  export default {
    name: 'app',
    components: {
      MainTabBar, 
    }
  }
</script>

<style>
  @import "assets/styles/base.css";
</style>
