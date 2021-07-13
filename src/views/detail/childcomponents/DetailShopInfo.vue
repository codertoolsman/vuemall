<template>
  <div class="detail-shop-info" v-if="Object.keys(shop).length !== 0">
    <div class="shop-name-info flex">
      <img :src="shop.logo" alt="" class="shop-img">
      <div>{{shop.name}}</div>
    </div>
    <div class="shop-other-info flex">
      <div class="flex shop-other-item shop-other-sell test1">
        <div class="test3">
          <p class="f16">{{shop.sells|saveNum}}</p>
          <p>总销量</p>
        </div>
        <div class="test3">
          <p class="f16">{{shop.goodsCount}}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="shop-other-item shop-other-right test2">
        <div v-for="(item, index) in shop.score" :key="index">
          {{item.name}}&ensp;
          <span class="score" :class="{active: item.isBetter}">{{item.score}}</span>
          <span class="score-bg" :class="{active: item.isBetter}">{{item.isBetter ? '低' : '高'}}</span>
        </div>
      </div>
    </div>
    <div class="enter-shop-wrap">
			<div class="enter-shop">进店逛逛</div>
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
  filters: {
		saveNum(value){
			if(value < 10000) return value;
			return (value/10000).toFixed(1)+'万'
		}
	},
  props: {
    shop: {
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
  .f16 {
    font-size: 16px;
  }
  .shop-name-info {
    align-items: center;
    margin: 20px 10px;
  }
  .shop-name-info .shop-img {
    border-radius: 100%;
		width: 50px;
		height: 50px;
		margin-right: 10px;
		vertical-align: middle;
  }
  .shop-other-info {
    display: flex;
    font-size: 12px;
    align-items: center;
    line-height: 22px;
  }
  .shop-other-info .test1 {
    flex: 30%;
  }
  .shop-other-info .test2 {
    flex: 70%;
  }
  .shop-other-item {
    display: flex;
  }
  .shop-other-item .test3 {
    flex: 1;
  }
  .shop-other-info .shop-other-item {
    flex: 1;
  }
  .shop-other-info .shop-other-sell {
    border-right: 1px solid #ececec;
  }
  .shop-other-info .shop-other-sell div {
    flex: 1;
    text-align: center;
  }
  .shop-other-right {
    padding-left: 40px;
  }
  .shop-other-right .score {
    display: inline-block;
    width: 30px;
    color: #006666;
  }
  .shop-other-right .score .active {
    color: #880000;
  }
  .shop-other-right .score-bg {
    background-color: #006666;
    color: #fff;
    padding: 1px 4px;
    font-size: 12px;
  }
  .shop-other-right .score-bg .active {
    background-color: #880000;
  }
  .enter-shop-wrap {
    text-align: center;
  }
  .enter-shop-wrap .enter-shop {
    display: inline-block;
		background-color: #f2f2f2;
		font-size: 12px;
		padding: 6px 30px;
		border-radius: 100px;
		margin: 10px;
  }
</style>
