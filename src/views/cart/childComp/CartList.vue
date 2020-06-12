<template>
  <div class="cart-list">
    <scroll class="content" ref="cartscroll">
      <cart-list-item v-for="item in cartList" :key="item.iid" :item-info="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
  // 1.公共组件导入
  import Scroll from 'common/Scroll/Scroll'
  // 2.子组件导入
  import CartListItem from './CartListItem'
  // 3.功能函数导入
  import {mapGetters} from 'vuex'
  // 4.本组件对象
  export default {
    name: 'CartList',
    components: {
      CartListItem, 
      Scroll,
    },
    // props: {
		//   cartList: {
		//     type: Array,
    //     default() {
		//       return []
    //     }
    //   }
    // },
    computed: {
      ...mapGetters(['cartList'])
    },
  }
</script>

<style scoped>
  .cart-list {
    height: 100vh;
  }
  .content {
    position: relative;
    top: 44px;
    height: calc(100% - 44px);
    overflow: hidden;
  }
</style>