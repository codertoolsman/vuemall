<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {

    }
  },
  components: {}
}
</script>

<style scoped>
  .recommend {
    display: flex;
    width: 100vw;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
  }
  .recommend .recommend-item {
   width: 1;
  }
  .recommend .recommend-item img {
    width: 88%;
    margin-bottom: 10px;
  }
</style>
