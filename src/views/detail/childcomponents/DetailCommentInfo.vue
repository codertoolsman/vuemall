<template>
  	<div class="comment-info-wrap" v-if="Object.keys(commentinfo).length !== 0">
		<div class="comment-title flex">
			<div>用户评价</div>
			<div>更多</div>
		</div>
		<div v-for="(item,index) in commentinfo" :key="index">
			<div class="comment-user-info">
				<span><img :src="item.user.avatar" alt="" class="avatar"></span>
				<span>{{item.user.uname}}</span>
			</div>
			<div class="comment-text">{{item.content}}</div>
			<div class="comment-goods-info">
				<span class="comment-time">{{item.created | showDate}}</span>
				<span>{{item.style}}</span>
			</div>
			<div class="flex">
				<div class="comment-info-images" v-for="(item,index) in item.images" :key="'img' + index">
					<img :src="item" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {formatDate} from '@/common/utils.js'

export default {
  name:'',
  data() {
    return {

    }
  },
  props: {
    commentinfo: {
      type: Array,
      default() {
        return []
      }
    }
  },
  filters: {
		showDate(value) {
			//将时间戳转换成date对象
			const date = new Date(value * 1000);
			//将date进行格式化
			return formatDate(date, 'yyyy-MM-dd');
		}
	},
  components: {}
}
</script>

<style scoped>
</style>
