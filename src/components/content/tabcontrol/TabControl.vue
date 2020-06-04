<template>
  <div id="tab-control">
    <div v-for="(item, index) in titles" :key="item" class="tab-control-items" :class="{active: index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'TabControl',
    data(){
      return {
        currentIndex: 0,
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('tabClick', index);
      }
    },
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
    width: 100%;
    display: flex;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
  }

  .tab-control-items {
    flex: 1;
    display: inline-block;
    text-align: center;
  }

  .active {
    color: var(--color-tint);
  }

  .active > span {
    border-bottom: 3px solid var(--color-tint);
    padding: 0 16px 5px 16px;
  }

</style>