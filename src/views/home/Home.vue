<template>
  <div id="home" > 
    <!-- nav-bar：公共 导航组件 -->
    <nav-bar class="home-nav">
      <div slot="center">美妆城</div>
    </nav-bar>

    <tab-control class="tab-control" ref="tabcontrol1" :titles="titles" @tabClick="tabClick" v-show="isShow"/>

    <!-- 
      better-scroll：公共 web滚动组件 
      probeType可选值：0/1/2/3 （0代表取消滚动监听）
      pullUpLoad可选值：true/false （false代表取消上拉监听）
    -->
    <Scroll class="content" ref="scroll" 
            :probe-type="3" 
            @scroll="contentScrollY" 
            :pullUpLoad="true"
            @pullingUp="pullUpLoadMore">
      <!-- home-swiper：子组件 -->
      <home-swiper class="home-swiper" :banners="banners" @swiperImageLoad="swiperImageLoad"/>

      <!-- recommed-view：子组件-->
      <recommend-view :recommends="recommends"/>

      <!-- feature-view：子组件 -->
      <feature-view/>

      <!-- tab-control：业务 导航组件 -->
      <tab-control ref="tabcontrol2" :titles="titles" @tabClick="tabClick"/>

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
  // import BackTop from 'content/backtop/BackTop'
  // 2.子组件导入
  import HomeSwiper from './childComp/HomeSwiper'
  import RecommendView from './childComp/RecommendView'
  import FeatureView from './childComp/FeatureView'
  // 3.功能函数导入
  import { getHomeMultiData, getHomeGoodsList } from 'network/home'
  import { debounce } from '../../common/util'
  import { itemListenerMixin, backTopMixin } from '../../common/mixins'
  // 4.本组件对象
  export default {
    name: 'Home',
    data() {
      return {
        banners: null,
        recommends: null,
        currentType: 'pop',
        // isShow: false,
        saveY: {
          type: Number,
          default: 0
        },
        tabOffsetTop: {
          type: Number,
          default: 0
        },
        titles: ['流行', '新品', '精选'],
        GoodsList: {
          'pop' : {page : 0, list : []},
          'new' : {page : 0, list : []},
          'sell' : {page : 0, list : []},
        }
      }    
    },
    mixins:[itemListenerMixin, backTopMixin],
    components:{
      NavBar, 
      HomeSwiper, 
      RecommendView, 
      FeatureView, 
      TabControl, 
      GoodsList, 
      Scroll,
      // BackTop
    },
    computed:{
      showGoods() {
        return this.GoodsList[this.currentType].list;
      }
    },
    activated() {
      // console.log('activeated');
      this.$refs.scroll.scrollTo(0, this.saveY, 0);
      this.$refs.scroll.refresh();
    },
    deactivated() {
      // console.log('deactivated');
      this.saveY = this.$refs.scroll.getPositionY();
      // console.log(this.saveY);
      this.$bus.$off('imageLoad', this.homeImgListener);
    },
    created() {
      this.getHomeMultiData();

      this.getHomeGoodsList('pop');
      this.getHomeGoodsList('new');
      this.getHomeGoodsList('sell');
    },
    mounted() {
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
        this.$refs.tabcontrol1.currentIndex = index;
        this.$refs.tabcontrol2.currentIndex = index;
      },
      // backTopClick() {
      //   this.$refs.scroll.scrollTo(0, 0);
      // },
      contentScrollY(position) {
        // console.log(position);
        this.isShow = (-position.y) > 537;
      },
      pullUpLoadMore() {
        // console.log('上拉加载更多');
        this.getHomeGoodsList(this.currentType);
      },
      swiperImageLoad(){
        // console.log(this.$refs.tabcontrol2.$el.offsetTop);
        this.tabOffsetTop = this.$refs.tabcontrol2.$el.offsetTop;
        
      },
      // 网络请求
      getHomeMultiData() {
        getHomeMultiData().then(res => {
          // console.log(res.data.banner.list);
          // console.log(res.data.recommend.list);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },   
      getHomeGoodsList(type) {
        const page = this.GoodsList[type].page + 1;
        getHomeGoodsList(type, page).then(res => {
          this.GoodsList[type].list.push(...res.data.list);
          // console.log(this.GoodsList[type].list);
          this.GoodsList[type].page += 1;
          // 等待图片加载完成再对scroll调用finishPullUp结束本次上拉
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
    z-index: 8;
    background-color: var(--color-tint);
    text-align: center;
    color: #fff;
  }


  .tab-control {
    position: relative;
    top: 44px;
    z-index: 9;
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