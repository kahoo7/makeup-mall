<template>
  <div class="goods" @click="itemClick">
    <img :src="showImages" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{GoodsItem.title}}</p>
      <span class="price">￥{{GoodsItem.price}}</span>
      <span class="collect">{{GoodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  // 1.本组件对象
  export default {
    name: 'GoodsItem',
    props: {
      GoodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      showImages() {
        return this.GoodsItem.image || this.GoodsItem.show.img;
      }
    },
    methods: {
      imageLoad() {
        this.$bus.$emit('imageLoad');
      },
      itemClick() {
        // console.log('itemClick');
        this.$router.push({
          path: '/detail',
          query: {
            iid: this.GoodsItem.iid,
          }
        });
      }
    }
  }
</script>

<style scoped>
  .goods {
    padding-bottom: 40px;
    position: relative;

    width: 48%;
  }
  .goods img {
    width: 100%;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/images/common/collect.svg") 0 0/14px 14px;
  }
</style>