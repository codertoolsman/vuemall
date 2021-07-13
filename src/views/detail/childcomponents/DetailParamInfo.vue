<template>
  <div v-if="Object.keys(paraminfo).length !== 0" class="params-wrap">
    <div v-for="(item, index) in paraminfo.rule" :key="index">
      <div v-for="(list, index) in item" :key="'list' + index" class="flex">
        <div v-for="(listitem, index) in list" :key="'listitem' + index" class="rule-listitem">
          {{listitem}}
        </div>
      </div>
    </div>
    <div v-for="(info, index) in paraminfo.info" :key="'info' + index" class="flex info-listwrap">
      <div class="info-listtitle">{{info.key}}</div>
      <div>{{info.value}}</div>
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
    paraminfo: {
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
  .params-wrap {
    border-top: 4px solid #ececec;
    border-bottom: 4px solid #ececec;
  }
  .rule-listitem {
    font-size: 12px;
    width: 20%;
    border-bottom: 1px solid #ececec;
    padding: 10px 4px;
  }
  .info-listwrap {
    font-size: 14px;
    border-bottom: 1px solid #ececec;
    padding: 10px 4px;
    line-height: 20px;
  }
  .info-listwrap .info-listtitle {
    width: 18%;
  }
</style>
