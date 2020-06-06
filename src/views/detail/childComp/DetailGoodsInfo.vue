<template>
  <div id="detail-goods-info" v-if="Object.keys(detailInfo).length !== 0">

    <div class="desc">{{detailInfo.desc}}</div>

    <div class="key">{{detailInfo.detailImage[0].key}}</div>

    <div class="detail-images-list" v-for="(item, index) in detailInfo.detailImage[0].list" :key="index">
      <img :src="item" @load="imageLoad">
    </div>
  </div>
</template>

<script>
  // 1.公共组件导入
  // 2.子组件导入
  // 3.功能函数导入
  // 4.本组件对象
  export default {
    name: 'DetailGoodsInfo',
    data() {
      return {
        count: 0,
      }
    },
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imageLoad() {
        if(++this.count === this.detailInfo.detailImage[0].list.length) {
          this.$emit('imageLoad');
        }
      }
    }
  }
</script>

<style scoped>
  .desc {
    margin: 30px 20px;
    color: var(--color-tint);
    font-size: 17px;
    text-indent: 28px;
    letter-spacing: 3px;
  }
  .key {
    margin-bottom: 20px;
    text-align: center;
    letter-spacing: 10px;
    color: var(--color-high-text);
  }
  .detail-images-list{
    margin-top: 10px;
  }
  .detail-images-list > img{
    display: block;
    margin: auto;
    width: 96%;
  }
</style>