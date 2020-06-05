<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'Scroll',
    data() {
      return {
        scroll: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    methods:{
      scrollTo(x, y, time=300) {
        this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
      },
      refresh() {
        console.log('GoodsImageLoad');
        this.scroll && this.scroll.refresh && this.scroll.refresh();
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: true,
        pullUpLoad: this.pullUpLoad
      })

      if(this.probeType == 2 || this.probeType == 3) {
          this.scroll.on('scroll', (position) => {
          this.$emit('scroll', position);
        })
      }

      if (this.pullUpLoad) {
          this.scroll.on('pullingUp', () => {
          // console.log('上拉加载');
          this.$emit('pullingUp');        
        })
      }

    }
  }
</script>

<style scoped>

</style>