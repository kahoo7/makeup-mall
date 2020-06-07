<template>
  <div id="detail-goods-params" v-if="Object.keys(goodsParams).length !== 0">
    <div class="topic">产品参数：</div>
    <table class="info-size" v-for="(table, index) in goodsParams.sizes" :key="index" >
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-params">
      <tr v-for="(item, index) in goodsParams.infos" :key="index">
        <td class="info-key">{{item.key}}</td>
        <td class="info-value">{{item.value}}</td>
      </tr>
    </table>
    <div v-if="goodsParams.image !== ''" class="info-image">
      <img :src="goodsParams.image">
    </div>
  </div>
</template>

<script>
  // 1.公共组件导入
  // 2.子组件导入
  // 3.功能函数导入
  // 4.本组件对象
  export default {
    name: 'DetailGoodsParams',
    props: {
      goodsParams: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  #detail-goods-params {
    border-bottom: 5px solid #f2f6f8;
  }
  table {
    font-size: 13px;
  }
  .topic {
    margin: 20px;
    color: hotpink;
    text-align: center;
  }
  .info-size {
    margin: auto;
    display: table;
    width: 90%;
    /* border-bottom: 1px solid #cccccc; */
    border-spacing: 2px;
    border-color: grey;
  }
  .info-size tr {
    display: flex;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid lightgrey;
  }
  .info-size tr td {
    flex: 1;
  }
  .info-params{
    margin-top: 30px;
    margin: auto;
    width: 90%;
    height: 40px;
    line-height: 40px;
    border-collapse: collapse;
  }
  .info-params tr td {
    border-bottom: 1px solid lightgrey;
  }
  .info-key {
    width: 20%;
  }
  .info-value {
    color: var(--color-high-text);
  }
</style>