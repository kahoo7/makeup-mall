<template>
  <div id="recommend-view">
    <div v-for="item in recommends" :key="item.acm" class="rec-items">
      <a :href="item.link"><img :src="item.image" alt=""></a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  #recommend-view {
    display: flex;
    width: 100%;
    border-bottom: 8px solid #eeeeee;
  }

  .rec-items {
    flex: 1;
    padding: 10px 0;
    text-align: center;
  }

  .rec-items img{
    margin-bottom: 10px;
    width: 60px;
    height: 60px;
  }

</style>