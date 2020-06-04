<template>
  <div id="home" > 
    <!-- nav-bar：公共 导航组件 -->
    <nav-bar class="home-nav">
      <div slot="center">美妆城</div>
    </nav-bar>


    <!-- better-scroll：公共 web滚动组件 -->
    <Scroll class="content" ref="scroll" 
            :probe-type="0" 
            @scroll="backTopShow" 
            :pullUpLoad="true"
            @pullingUp="pullUpLoadMore">
      <!-- home-swiper：子组件 -->
      <home-swiper class="home-swiper" :banners="banners"/>

      <!-- recommed-view：子组件-->
      <recommend-view :recommends="recommends"/>

      <!-- feature-view：子组件 -->
      <feature-view/>

      <!-- tab-control：业务 导航组件 -->
      <tab-control class="tab-control" :titles="titles" @tabClick="tabClick"/>

      <goods-list class="goods-list" :GoodsList="showGoods" />

    </Scroll>

    <back-top @click.native="backTopClick" v-show="isShow"/>

  </div>
</template>

<script>
  // 1.公共组件导入
  import NavBar from 'common/navbar/NavBar'
  import Scroll from 'common/Scroll/Scroll'
  import TabControl from 'content/tabcontrol/TabControl'
  import GoodsList from 'content/goodslist/GoodsList'
  import BackTop from 'content/backtop/BackTop.vue'
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
        currentType: 'pop',
        isShow: false,
        titles: ['流行', '新品', '精选'],
        GoodsList: {
          'pop' : {page : 0, list : []},
          'new' : {page : 0, list : []},
          'sell' : {page : 0, list : []},
        }
      }    
    },
    components:{
      NavBar, 
      HomeSwiper, 
      RecommendView, 
      FeatureView, 
      TabControl, 
      GoodsList, 
      Scroll,
      BackTop
    },
    computed:{
      showGoods() {
        return this.GoodsList[this.currentType].list;
      }
    },
    created() {
      this.getHomeMultiData();

      this.getHomeGoodsList('pop');
      this.getHomeGoodsList('new');
      this.getHomeGoodsList('sell');
    },
    methods: {
      // 业务逻辑
      tabClick(index) {
        switch(index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2: 
          this.currentType = 'sell';
          break;
        }
      },
      backTopClick() {
        this.$refs.scroll.scrollTo(0, 0);
      },
      backTopShow(position) {
        // console.log(position);
        this.isShow = (-position.y) > 537;
      },
      pullUpLoadMore() {
        // console.log('上拉加载更多');
        this.getHomeGoodsList(this.currentType);
      },
      // 网络请求
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
          // console.log(this.GoodsList[type].list);
          this.GoodsList[type].page += 1;

          this.$refs.scroll.finishPullUp();
        })
      }
    },

  }
</script>

<style scoped>
  #home {
    height: 100vh;
    width: 100%;
    position: relative;
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
    background-color: #fff;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;

  }



</style>