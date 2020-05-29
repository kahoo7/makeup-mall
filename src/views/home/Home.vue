<template>
  <!-- <div id="home"> -->
  <div id="home" style="padding-bottom:2000px"> 
    <!-- 开发时给页面足够地空间下拉 -->

    <!-- nav-bar：公共组件 -->
    <nav-bar class="home-nav">
      <div slot="center">美妆城</div>
    </nav-bar>

    <!-- home-swiper：子组件 -->
    <home-swiper :banners="banners"/>

    <!-- recommed-view：子组件-->
    <recommend-view :recommends="recommends"/>

    <!-- feature-view：子组件 -->
    <feature-view/>
  </div>
</template>

<script>
  // 1.公共组件导入
  import NavBar from 'common/navbar/NavBar'
  // 2.子组件导入
  import HomeSwiper from './childComp/HomeSwiper'
  import RecommendView from './childComp/RecommendView'
  import FeatureView from './childComp/FeatureView'
  // 3.功能函数导入
  import { getHomeMultiData } from 'network/home'
  // 4.本组件对象
  export default {
    name: 'Home',
    data() {
      return {
        banners: null,
        recommends: null
      }    
    },
    components:{
      NavBar, HomeSwiper, RecommendView, FeatureView
    },
    created() {
      getHomeMultiData().then(res => {
        console.log(res.data.data.banner.list);
        console.log(res.data.data.recommend.list);
        
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;

      })
    }
  }
</script>

<style scoped>
  #home {
    width: 100%;
    margin-bottom: 64px;
  }

  .home-nav {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 9;
    background-color: var(--color-tint);
    text-align: center;
    color: #fff;
  }
</style>