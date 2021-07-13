<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backclick">
        <img src="~assets/images/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles" :key="index" 
             class="title-item" 
             :class="{active: index === currentindex}" 
             @click="itemclick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name:'',
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentindex: 0,
    }
  },
  methods: {
    itemclick(index) {
      this.currentindex = index;
    },
    backclick() {
      this.$router.back();
    }
  },
  components: {
    NavBar
  }
}
</script>

<style scoped>
  .title {
    display: flex;
    font-size: 13px;
  }
  .title-item {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
  }
  .back {
    margin-top: 7px;
  }
</style>
