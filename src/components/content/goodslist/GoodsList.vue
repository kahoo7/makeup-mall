<template>
  <div class="goods-list">
    <goods-item class="goods-item" v-for="(item, index) in GoodsList" :key="index"  :GoodsItem="item"/>
  </div>
</template>

<script>
  import GoodsItem from './GoodsItem'

  // 1.本组件对象
  export default {
    name: 'GoodsList',
    components: {
      GoodsItem
    },
    props: {
      GoodsList: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

  }


</style>