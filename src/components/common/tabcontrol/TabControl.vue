<template>
  <div id="tab-control">
    <div class="tab-control-items" v-for="item in titles" :key="item">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'TabControl',
    props:{
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  #tab-control {
    /* padding: 20px 0; */
    width: 100%;
    display: flex;
  }

  .tab-control-items {
    flex: 1;
    display: inline-block;
    padding: 16px 0;
    text-align: center;
  }

  .tab-control-items>span {
    padding: 5px 16px;
  }

  .tab-control-items>span:hover {
    border-bottom: 3px solid lightpink;
  }

</style>