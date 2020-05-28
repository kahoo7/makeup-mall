<template>
  <div id="home">
		<!-- <h2>首页</h2> -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <swiper>
      <swiper-item v-for="item in banners" :key="item">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import navBar from 'common/navbar/NavBar'
  import { getHomeMultiData } from 'network/home'
  import { Swiper, SwiperItem } from 'common/swiper'

  export default {
    name: 'Home',
    data() {
      return {
        banners: null
      }    
    },
    components:{
      navBar, Swiper, SwiperItem
    },
    created() {
      getHomeMultiData().then(res => {
        console.log(res.data.data.banner.list);
        this.banners = res.data.data.banner.list
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    text-align: center;
    color: #fff;
  }
</style>