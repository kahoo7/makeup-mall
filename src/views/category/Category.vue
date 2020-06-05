<template>
  <div>
		<div class="wrapper">
      <div class="content">
        <p>分类</p>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'Category',
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(document.querySelector('.wrapper'),{
          probeType: 2,
          pullUpLoad: true
      })
      this.scroll.on('scroll', (position) => {
        // console.log(position);

      })
      this.scroll.on('pullingUp', () => {
        console.log('上拉加载');
        setTimeout(() => {
          this.scroll.finishPullUp();
        }, 2000)
        
      })
    },
    methods: {
      
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 200px;
    overflow: hidden;
  }
</style>