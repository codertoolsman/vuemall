<template>
  <div v-if="Object.keys(detailinfo).length !== 0">
    <div class="info-text-wrap">
      <div class="text-top-style"></div>
      <div class="desc info-text-desc">{{detailinfo.desc}}</div>
      <div class="text-bot-style"></div>
    </div>
    <div class="img-list-wrap" v-for="(item, index) in detailinfo.detailImage" :key="index">
      <div class="desc">{{item.key}}</div>
      <div v-for="(item, index) in item.list" :key="index">
        <img :src="item" alt="" class="img">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'',
  data() {
    return {

    }
  },
  props: {
    detailinfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {}
}
</script>

<style scoped>
  .info-text-wrap {
    position: relative;
  }
  .info-text-wrap .info-text-desc {
    padding: 10px 4px;
  }
  .text-top-style {
    width: 60px;
    height: 1px;
    background-color: #333;
    margin-left: 4px;
  }
  .text-top-style::before {
    position: absolute;
    left: 4px;
    top: -2.5px;
    display: block;
    content: '';
    width: 5px;
    height: 5px;
    background-color: #333;
  }
  .text-bot-style {
    width: 60px;
    height: 1px;
    background-color: #333;
    position: absolute;
    right: 4px;
    bottom: 0;
  }
  .text-bot-style::after {
    position: absolute;
    right: 0;
    top: -2.5px;
    display: block;
    content: '';
    width: 5px;
    height: 5px;
    background-color: #333;
  }
  .desc {
    font-size: 14px;
    padding-bottom: 6px;
    line-height: 20px;
    margin: 10px 0 5px;
    text-indent: 10px;
  }
  .img {
    width: 100%;
  }
</style>
