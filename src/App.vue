<template>
  <div id="app">
    <router-view></router-view>
    <h1>111</h1>
    <main-tab-bar></main-tab-bar>

  </div>
</template>

<script>
  import MainTabBar from 'content/mainTabbar/MainTabBar'

  export default {
    name: 'app',
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import "assets/styles/base.css"
</style>
