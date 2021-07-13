<template>
    <div class="tab-bar-item" @click="itemclick">
      <div v-if="isactive"><slot name="item-active-icon"></slot></div>
      <div v-else><slot name='item-icon'></slot></div>
      <div :style="activestyle"><slot  name='item-text'></slot></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      // isactive: false
    }
  },
  props: {
    path: {
      type: String,
    },
    activecolor: {
      type: String,
      default: 'red',
    }
  },
  computed: {
    isactive() {
      //  活跃状态下的路由路径中是否包含 this.path 是返回true
      // /home => item1(/home) > true
      // /home => item2(/category) > false 
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activestyle() {
      return this.isactive ? {color: this.activecolor} : {};
    }
  },
  methods: {
    itemclick() {
      this.$router.push(this.path);
    }
  },
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img {
      margin-top: 3px;
      width: 24px;
      height: 24px;
      vertical-align: middle;
  }
  /* .active {
    color: seagreen;
  } */
</style>