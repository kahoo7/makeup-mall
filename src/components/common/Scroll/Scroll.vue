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
        this.scroll.scrollTo(x, y, time);
      },
      finishPullUp() {
        this.scroll.finishPullUp();
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: true,
        pullUpLoad: this.pullUpLoad
      })

      this.scroll.on('scroll', (position) => {
        // console.log(position);
        this.$emit('scroll', position);
      })

      this.scroll.on('pullingUp', () => {
        // console.log('上拉加载');
        this.$emit('pullingUp');        
      })
    }
  }
</script>

<style scoped>

</style>