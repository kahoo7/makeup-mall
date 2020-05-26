<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="pink">
        <img slot="item-icon" src="~assets/images/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="~assets/images/tabbar/home_activate.svg" alt="">
        <div slot="item-name">首页</div>
			</tab-bar-item>
			<tab-bar-item path="/category" activeColor="pink">
        <img slot="item-icon" src="~assets/images/tabbar/categories.png" alt="">
        <img slot="item-icon-active" src="~assets/images/tabbar/categories_activate.svg" alt="">
        <div slot="item-name">分类</div>
      </tab-bar-item>
			<tab-bar-item path="/shopcart" activeColor="pink">
        <img slot="item-icon" src="~assets/images/tabbar/shopcar.png" alt="">
        <img slot="item-icon-active" src="~assets/images/tabbar/shopcar_activate.svg" alt="">
        <div slot="item-name">购物车</div>
      </tab-bar-item>
			<tab-bar-item path="/profile" activeColor="pink">
        <img slot="item-icon" src="~assets/images/tabbar/profile.png" alt="">
        <img slot="item-icon-active" src="~assets/images/tabbar/profile_activate.svg" alt="">
        <div slot="item-name">我的</div>
      </tab-bar-item>
    </tab-bar>
    hhhh
  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: 'MainTabBar',
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>