<template>
  <div id="detail">
    <detail-nav-bar/>
    <scroll class="content" ref="detailScroll">
      <detail-swiper :topImages="topImages"/>
      <detail-base-info :good="good"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/> 
    </scroll>
  </div>
</template>

<script>
  // 1.公共组件导入
  import Scroll from 'common/Scroll/Scroll'
  // 2.子组件导入
  import DetailNavBar from './childComp/DetailNavBar'
  import DetailSwiper from './childComp/DetailSwiper'
  import DetailBaseInfo from './childComp/DetailBaseInfo'
  import DetailShopInfo from './childComp/DetailShopInfo'
  import DetailGoodsInfo from './childComp/DetailGoodsInfo'
  // 3.功能函数导入
  import {getGoodsDetail, Goods, Shop} from 'network/detail'
  // 4.本组件对象
  export default {
    name: 'Detail',
    data() {
      return {
        iid: '',
        shop: {},
        good: {},
        result: {},
        topImages: {},
        detailInfo: {}
      }
    },
    components: {
      DetailNavBar, 
      DetailSwiper, 
      DetailBaseInfo, 
      DetailShopInfo,
      DetailGoodsInfo, 
      Scroll
    },
    created() {
      this.iid = this.$route.query.iid;
      // console.log(this.iid);
      this.getGoodsDetail(this.iid);
    },
    methods: {
      // 业务逻辑
      imageLoad() {
        console.log('imageLoad');
        this.$refs.detailScroll.refresh();
      },
      // 网络请求
      getGoodsDetail(iid) {
        getGoodsDetail(iid).then(res => {
          this.result = res.data.result;
          // console.log(this.result);
          
          // 商品轮播图
          this.topImages = res.data.result.itemInfo.topImages;
          // 商品信息对象
          this.good = new Goods(this.result.itemInfo, this.result.columns, this.result.shopInfo.services);
          // 商家店铺信息对象
          this.shop = new Shop(this.result.shopInfo);
          // 商品详情
          this.detailInfo = this.result.detailInfo;
          // 商品参数
          
        })
      }
    },

  }
</script>

<style scoped>
  #detail {
    height: 100vh;
    width: 100%;
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content {
    height: calc(100% - 44px);
    overflow: hidden;
  }
</style>