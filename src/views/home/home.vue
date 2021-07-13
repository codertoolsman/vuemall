<template>
  <div id="home">
    <!-- 首页导航栏 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- 首页轮播图 -->
    <home-swiper :banners='banners'></home-swiper>
    <!-- 首页推荐模块 -->
    <home-recommend :recommends='recommends'></home-recommend>
    <!-- 首页流行模块 -->
    <feature></feature>
    <!-- tab-control控制条 -->
    <tab-control :titles="['流行','新款','精选',]" class="tab-control" @tabclick='tabclick'></tab-control>
    <!-- goodslist模块 -->
    <goods-list :goodslist="showgoods"></goods-list>

  </div>
</template>

<script>
// 导入顶部导航栏组件
import NavBar from 'components/common/navbar/NavBar.vue';
// 导入首页网络请求相关模块home.js
import {getHomeMultidata, getHomeGoods} from 'network/home';
// 导入首页专属轮播图组件
import HomeSwiper from './childcomponents/HomeSwiper'
// 导入首页推荐模块组件
import HomeRecommend from './childcomponents/HomeRecommend'
// 导入首页流行模块组件
import Feature from './childcomponents/Feature'
// 导入tab-control控制条
import TabControl from 'components/content/tabcontrol/TabControl'
// 导入goodlist组件
import GoodsList from 'components/content/goods/GoodsList'

export default {
  name:'',
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 1, list: []},
        'new': {page: 1, list: []},
        'sell': {page: 1, list: []},
      },
      currenttype: 'pop',
    }
  },
  computed: {
    showgoods() {
      return this.goods[this.currenttype].list;
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    Feature,
    TabControl,
    GoodsList,
  },
  
  created() {
    // 1.请求多个数据
    this.getmultidata();
    // 请求商品数据
    // 请求pop,new,sell中数据
    this.getgoods('pop');
    this.getgoods('new');
    this.getgoods('sell');
  },

  destroyed() {
    console.log('home-destroyed');
  },
  activated() {
    // console.log('activated');
  },
  deactivated() {
    // console.log('deactivated');
  },
  methods: {
    /** 
    * 事件监听相关方法
    */
    tabclick(index) {
      // console.log(index);
      switch(index) {
        case 0:
          this.currenttype = 'pop';
          break
        case 1:
          this.currenttype = 'new';
          break
        case 2:
          this.currenttype = 'sell';  
      }
    },


    /** 
    * 网络请求相关方法
    */
    // 请求homemultidata
    getmultidata() {
      getHomeMultidata().then(res => {
      console.log(res);
      // console.log(res.data.banner.list);
      // console.log(res.data.recommend);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    }).catch(err => {
      console.log(err);
    });
    },

    // 请求商品数据
    getgoods(type) {
      const page = this.goods[type].page;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // console.log(res.data.list);
    });
    }
  },
};

</script>

<style scoped>
  #home {
    padding-top: 44px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }
</style>
