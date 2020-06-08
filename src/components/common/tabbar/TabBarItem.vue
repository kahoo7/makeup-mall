<template>
    <div class="tab-bar-items" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-name"></slot></div>
    </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        // isActive: false
      }
    },
    computed: {
      isActive() {
        // return this.$route.path === this.path
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        // this.isActive = !this.isActive
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  
  .tab-bar-items {
    flex: 1;
    text-align: center;
		font-size: 14px;
  }

  .tab-bar-items img {
    width: 24px;
    height: 24px;
		margin-bottom: 3px;
  }

</style>