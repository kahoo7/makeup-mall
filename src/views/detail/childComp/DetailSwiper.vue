<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item, index) in topImages" :key="index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  // 1.公共组件导入
  import { Swiper, SwiperItem } from 'common/swiper'
  // 2.子组件导入
  // 3.功能函数导入
  // 4.本组件对象
  export default {
    name: 'DetailSwiper',
    props:{
      topImages: null
    },
    components: {
      Swiper, SwiperItem
    }
  }
</script>

<style scoped>
  .detail-swiper {
    height: 60vh;
    overflow: hidden;
  }

  .detail-swiper img {
    position: relative;
    bottom: 7%;
  }

</style>