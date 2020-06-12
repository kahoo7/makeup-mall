<template>
  <div id="cart">
    <!-- 导航 -->
    <nav-bar class="cart-nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>

    <!-- 商品列表 -->
    <cart-list class="cart-list" :cart-list="cartList"/>
    <!-- 底部汇总 -->
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
  // 1.公共组件导入
  import NavBar from 'common/navbar/NavBar'
  // 2.子组件导入
  import CartList from './childComp/CartList'
  import BottomBar from './childComp/BottomBar'
  export default {
    name: 'Cart',
    components: {
      BottomBar,
      NavBar,
      CartList
    },
    computed: {
      cartList() {
        return this.$store.getters.cartList;
      },
      cartLength() {
        return this.$store.getters.cartCount;
      }
    }
  }
</script>

<style scoped>

  .cart-nav-bar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 8;
    background-color: var(--color-tint);
    text-align: center;
    color: #fff;
  }

</style>