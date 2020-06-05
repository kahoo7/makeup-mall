<template>
  <div id="home-swiper">
    <swiper>
      <swiper-item v-for="item in banners" :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperImageLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  // 1.公共组件导入
  import { Swiper, SwiperItem } from 'common/swiper'
  // 2.子组件导入
  // 3.功能函数导入
  // 4.本组件对象
  export default {
    name: 'HomeSwiper',
    data() {
      return {
        isLoad: false
      }
    },
    props:{
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components:{
      Swiper, SwiperItem
    },
    methods: {
      swiperImageLoad() {
        if(!this.isLoad){
          this.isLoad = true;
          this.$emit('swiperImageLoad');
        }
      }
    }
  }
</script>

<style scoped>

</style>