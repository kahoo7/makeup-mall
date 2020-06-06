<template>
  <div v-if="Object.keys(good).length !== 0" class="base-info">
    <div class="info-title">{{good.title}}</div>
    <div class="info-prices">
      <span class="n-price">{{good.newPrice}}</span>
      <span class="o-price">{{good.oldPrice}}</span>
      <span v-if="good.discount" class="discount">{{good.discount}}</span>
    </div>
    <div class="info-others">
      <span>{{good.columns[0]}}</span>
      <span>{{good.columns[1]}}</span>
      <span>{{good.services[good.services.length-1].name}}</span>
    </div>
    <div class="info-services">
      <span class="info-services-item" v-for="index in good.services.length-1" :key="index">
        <img :src="good.services[index-1].icon" alt="">
        <span>{{good.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  // 1.公共组件导入
  // 2.子组件导入
  // 3.功能函数导入
  // 4.本组件对象
  export default {
    name: 'DetailBaseInfo',
    props: {
      good: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .info-title {
    padding: 10px;
  }
  .info-prices {
    margin-top: 10px;
  }
  .n-price {
    padding: 10px;
    color: #f13e3a;
    font-size: 20px;
  }
  .o-price {
    font-size: 12px;
    color: grey;
    text-decoration: line-through;
  }
  .discount {
    margin: 0 5px;
    padding: 3px 5px;
    background-color: #f13e3a;
    border-radius: 10px;
    color: white;
    font-size: 12px;
  }

  .info-others {
    display: flex;
    margin: 15px 10px 0 10px;
    padding-bottom: 10px;
    justify-content: space-between;
    border-bottom: 1px solid #cccccc;
    font-size: 13px;
    color: grey;
  }

  .info-services {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 20px 10px;
    font-size: 12px;
  }

  .info-services-item img{
    width: 12px;
  }

</style>