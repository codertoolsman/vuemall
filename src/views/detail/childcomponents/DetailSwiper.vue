<template>
    <swiper class="detail-swiper">
      <swiper-item v-for="(item, index) in topimg" :key="index">
        <img :src="'https:' + item" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper'
import SwiperItem from 'components/common/swiper/SwiperItem'

export default {
  name:'',
  data() {
    return {

    }
  },
  props: {
    topimg: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem,
  }
}
</script>

<style scoped>
  .detail-swiper {
    height: 300px;
    overflow: hidden;
  }
</style>
