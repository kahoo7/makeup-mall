import {debounce} from './util'

export const itemListenerMixin = {
  data() {
    return {
      ImgListener: null,
      refresh: null,
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 200);
    this.ImgListener =  () => {
      // console.log('混入内容');
      this.refresh();
    }
    this.$bus.$on('imageLoad', this.ImgListener);
  }
}