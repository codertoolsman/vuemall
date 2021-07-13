<template>
  <div class="goods">
    <goods-list-item v-for="(item, index) in goodslist" :key="index" :goodsitem="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name:'',
  props: {
    goodslist: {
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
  components: {
    GoodsListItem,
  }
}
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 2px;
  }
</style>
