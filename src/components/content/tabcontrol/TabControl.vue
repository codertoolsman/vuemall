<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="index" class="tab-control-item" 
    :class="{active: index === currentIndex}" @click="tabclick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    tabclick(index) {
      this.currentIndex = index;
      // 子传父 发生点击后告诉父组件以切换不同数据
      this.$emit('tabclick', index)
    }
  },
  components: {}
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item span {
    padding: 5px;
  }

  .active {
    color: var(--color-high-text)
  }
  .active span {
    border-bottom: 3px solid var(--color-tint);
  }
</style>
