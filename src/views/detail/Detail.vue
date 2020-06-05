<template>
  <div id="detail">
    <detail-nav-bar/>
    <!-- <detail-swiper :topImages="topImages"/> -->
  </div>
</template>

<script>
  // 1.公共组件导入
  // 2.子组件导入
  import DetailNavBar from './childComp/DetailNavBar'
  // import DetailSwiper from './childComp/DetailSwiper'
  // 3.功能函数导入
  import {getGoodsDetail} from 'network/detail'
  // 4.本组件对象
  export default {
    name: 'detail',
    data() {
      return {
        iid: null,
        topImages: {
          type: Array,
          default() {
            return []
          }
        },
      }
    },
    components: {
      DetailNavBar, 
    },
    created() {
      this.iid = this.$route.query.iid;
      // console.log(this.iid);
      this.getGoodsDetail(this.iid);
    },
    methods: {
      // 业务逻辑

      // 网络请求
      getGoodsDetail(iid) {
        getGoodsDetail(iid).then(res => {
          // console.log(res.data.result.itemInfo.topImages);
          this.topImages = res.data.result.itemInfo.topImages;
        })
      }
    },

  }
</script>

<style scoped>

</style>