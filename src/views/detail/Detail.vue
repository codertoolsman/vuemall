<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topimg="topimg"></detail-swiper>
    <detail-base-info :goods='goods'></detail-base-info>
    <detail-shop-info :shop='shop'></detail-shop-info>
    <detail-goods-info :detailinfo='detailinfo'></detail-goods-info>
    <detail-param-info :paraminfo='paraminfo'></detail-param-info>
    <detail-comment-info :commentinfo='commentinfo'></detail-comment-info>
    <ul>
      <li>content1</li>
      <li>content2</li>
      <li>content3</li>
      <li>content4</li>
      <li>content5</li>
      <li>content6</li>
      <li>content7</li>
      <li>content8</li>
      <li>content9</li>
      <li>content10</li>
    </ul>
  </div>
</template>

<script>
import DetailNavBar from './childcomponents/DetailNavBar'
import DetailSwiper from './childcomponents/DetailSwiper'
import DetailBaseInfo from './childcomponents/DetailBaseInfo'
import DetailShopInfo from './childcomponents/DetailShopInfo'
import DetailGoodsInfo from './childcomponents/DetailGoodsInfo'
import DetailParamInfo from './childcomponents/DetailParamInfo'
import DetailCommentInfo from './childcomponents/DetailCommentInfo'
import {getdetail, Goods, Shop, GoodsParam} from 'network/detail'

export default {
  name:'Detail',
  data() {
    return {
      iid: null,
      topimg: [],
      goods: {},
      shop: {},
      detailinfo: {},
      paraminfo: {},
      commentinfo: [],
    }
  },
  activated() {
    this.iid = this.$route.query.iid;
    // this.iid = this.$route.params.iid;  // 动态路由传参获取参数
    // console.log(this.iid);
    // 获取到商品iid后发送网络请求，获取详情信息
    getdetail(this.iid).then(res => {
      console.log(res);
      const data = res.result;
      // 获取顶部图片数据
      this.topimg = data.itemInfo.topImages;
      // 获取商品简介所需信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
      // 获取店铺详情所需信息
      this.shop = new Shop(data.shopInfo);
      // 获取商品详情所需信息
      this.detailinfo = data.detailInfo;
      // 获取商品参数所需信息
      this.paraminfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
      // 获取商品评论所需信息
      if(data.rate.cRate !== 0) {
        this.commentinfo = data.rate.list;
      }
    })
  },
  created() {
   
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
  }
}
</script>

<style scoped>
</style>
