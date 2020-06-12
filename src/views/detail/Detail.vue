<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav"/>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <!-- <div>
        <p>{{$store.state.cartList}}</p>
      </div> -->
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :good="good"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-goods-params ref="params" :goods-params="goodsParams"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list class="recommend" ref="recommend" :GoodsList="recommend"/>
      <div class="end">
        <p>再往下拉就没有了QAQ</p>
      </div>
    </scroll>
    <detail-bottom-bar class="bottom-bar" @addToCart="addToCart"/>

    <back-top @click.native="backTopClick" v-show="isShow"/>

  </div>
</template>

<script>
  // 1.公共组件导入
  import Scroll from 'common/Scroll/Scroll'
  import GoodsList from 'content/goodslist/GoodsList'
  // 2.子组件导入
  import DetailNavBar from './childComp/DetailNavBar'
  import DetailSwiper from './childComp/DetailSwiper'
  import DetailBaseInfo from './childComp/DetailBaseInfo'
  import DetailShopInfo from './childComp/DetailShopInfo'
  import DetailGoodsInfo from './childComp/DetailGoodsInfo'
  import DetailGoodsParams from './childComp/DetailGoodsParams'
  import DetailCommentInfo from './childComp/DetailCommentInfo'
  import DetailBottomBar from './childComp/DetailBottomBar'
  // 3.功能函数导入
  import {getGoodsDetail, getRecommends, Goods, Shop, GoodsParams} from 'network/detail'
  import { debounce } from '../../common/util'
  import { itemListenerMixin, backTopMixin } from '../../common/mixins'
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
        detailInfo: {},
        goodsParams: {},
        commentInfo: {},
        recommend: [],
        themeTop: [],
        getThemeTop: null,
        currentIndex: 0
      }
    },
    mixins:[itemListenerMixin, backTopMixin],
    components: {
      DetailNavBar, 
      DetailSwiper, 
      DetailBaseInfo, 
      DetailShopInfo,
      DetailGoodsInfo, 
      DetailGoodsParams,
      DetailCommentInfo,
      DetailBottomBar,
      GoodsList,
      Scroll
    },
    created() {
      this.iid = this.$route.query.iid;
      // console.log(this.iid);
      this.getGoodsDetail(this.iid);
      this.getThemeTop = debounce(() => {
        this.themeTop = [];
        this.themeTop.push(0);
        this.themeTop.push(this.$refs.params.$el.offsetTop);
        this.themeTop.push(this.$refs.comment.$el.offsetTop);
        this.themeTop.push(this.$refs.recommend.$el.offsetTop);
        this.themeTop.push(Number.MAX_VALUE)

        // console.log(this.themeTop);
      })
    },
    destroyed() {
      this.$bus.$off('imageLoad', this.ImgListener);
    },
    mounted() {
    },
    methods: {
      // 业务逻辑
      addToCart() {
        const product = {};
        product.image = this.topImages ? this.topImages[0] : null;
        product.title = this.good.title ? this.good.title : null;
        product.desc = this.good.desc ? this.good.desc : null;
        product.price = this.good.realPrice ? this.good.realPrice : null;
        product.iid = this.iid ? this.iid : null;
        // console.log('emit addTocart');
        
        this.$store.dispatch('addToCart', product);
      },
      contentScroll() {
        // console.log(this.$refs.scroll.getPositionY());
        const newPositionY = -this.$refs.scroll.getPositionY();
        this.isShow = newPositionY > 537;
        
        const length = this.themeTop.length;
        for(let i = 0;i < length;i++) {
          if(this.currentIndex !== i && ((i < length - 1 && newPositionY >= this.themeTop[i] && newPositionY < this.themeTop[i+1]))) {
            this.currentIndex = i;
            // console.log(this.currentIndex);
            this.$refs.nav.currentIndex = this.currentIndex;
          }
        }
        
      },
      titleClick(index) {
        // console.log('titleClick');
        // console.log(index);
        this.$refs.scroll.scrollTo(0, -this.themeTop[index]);
      },
      imageLoad() {
        // console.log('imageLoad');
        this.$refs.scroll.refresh();
        // console.log('refresh');
        this.getThemeTop();
      },
      // 网络请求
      getGoodsDetail(iid) {
        getGoodsDetail(iid).then(res => {
          this.result = res.result;
          // console.log(res.result);

          // 商品轮播图
          this.topImages = res.result.itemInfo.topImages;
          // 商品信息对象
          this.good = new Goods(this.result.itemInfo, this.result.columns, this.result.shopInfo.services);
          // 商家店铺信息对象
          this.shop = new Shop(this.result.shopInfo);
          // 商品详情
          this.detailInfo = this.result.detailInfo;
          // 商品参数
          this.goodsParams = new GoodsParams(this.result.itemParams.info, this.result.itemParams.rule)
          // 评论信息
          if(this.result.rate.list) {
            this.commentInfo = this.result.rate.list[0];
          }
          // 推荐商品
          this.getRecommends();

        })
      },
      getRecommends() {
        getRecommends().then(res => {
          // console.log(res.data.list);
          this.recommend = res.data.list;
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
    height: calc(100% - 44px - 58px);
    overflow: hidden;
  }
  .recommend {
    margin-top: 20px;
  }
  .end {
    display: block;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 10px;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
</style>