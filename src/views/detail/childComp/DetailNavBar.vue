<template>
  <div  class="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/images/common/back.svg" alt="" >
      </div>
      <div slot="center" class='title'>
        <span class="title-item" v-for="(item, index) in title" :key="item" :class="{active: currentIndex === index}" @click="titleClick(index)">
          {{item}}
        </span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  // 1.公共组件导入
  import NavBar from 'common/navbar/NavBar'
  // 2.子组件导入
  // 3.功能函数导入
  // 4.本组件对象
  export default {
    name: 'DetailNavBar',
    data() {
      return {
        currentIndex: 0,
        title: ['商品','参数', '评论', '推荐'],
      }
    },
    components: {
      NavBar
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index
        // console.log(this.currentIndex);
      },
      backClick() {
        this.$router.back();
      }
    },
    mounted() {
      console.log(this.title);
      
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
  }
  .back > img {
    margin-top: 12px;
  }

  .title > .title-item {
    flex: 1;
    font-size: 13px;
  }

  .active {
    color: var(--color-high-text);
  }
</style>