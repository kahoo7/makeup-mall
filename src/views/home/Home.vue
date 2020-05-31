<template>
  <div id="home" > 

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

    <!-- tab-control：业务公共组件 -->
    <tab-control class="tab-control" :titles="titles"/>

    <!--  -->
    <goods-list :GoodsList="GoodsList['pop'].list" />

  </div>
</template>

<script>
  // 1.公共组件导入
  import NavBar from 'common/navbar/NavBar'
  import TabControl from 'content/tabcontrol/TabControl'
  import GoodsList from 'content/goodslist/GoodsList'
  // 2.子组件导入
  import HomeSwiper from './childComp/HomeSwiper'
  import RecommendView from './childComp/RecommendView'
  import FeatureView from './childComp/FeatureView'
  // 3.功能函数导入
  import { getHomeMultiData, getHomeGoodsList } from 'network/home'
  // 4.本组件对象
  export default {
    name: 'Home',
    data() {
      return {
        banners: null,
        recommends: null,
        titles: ['流行', '新品', '精选'],
        GoodsList: {
          'pop' : {page : 0, list : []},
          'new' : {page : 0, list : []},
          'sell' : {page : 0, list : []},
        }
      }    
    },
    components:{
      NavBar, HomeSwiper, RecommendView, FeatureView, TabControl, GoodsList
    },
    created() {
      this.getHomeMultiData();

      this.getHomeGoodsList('pop');
      this.getHomeGoodsList('new');
      this.getHomeGoodsList('sell');
    },
    methods: {
      getHomeMultiData() {
        getHomeMultiData().then(res => {
          // console.log(res.data.data.banner.list);
          // console.log(res.data.data.recommend.list);
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        })
      },   
      getHomeGoodsList(type) {
        const page = this.GoodsList[type].page + 1;
        getHomeGoodsList(type, page).then(res => {
          this.GoodsList[type].list.push(...res.data.data.list);
          console.log(this.GoodsList[type].list);
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    width: 100%;
    margin-bottom: 64px;
  }

  .home-nav {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
    background-color: var(--color-tint);
    text-align: center;
    color: #fff;
  }

  .tab-control {
    position: -webkit-sticky;
    position: sticky;
    top: 44px;
    background-color: #fff;
    /* z-index: 8; */
  }
</style>