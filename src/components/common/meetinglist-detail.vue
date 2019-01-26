<template>
  <div class="meetinglist-detail">
    <div class="dialog-content">
      <div class="line" v-for="(item, index) in gridData" :key="index">
        <div class="line-left">{{item.label}}</div>
        <div class="line-right">{{item.text}}</div>
      </div>
    </div>
    <div class="dialog-bottom">
      <el-button type="primary" @click="back">返回</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'meetinglist-detail',
  props: {
    gridData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  created () {},
  mounted () {},
  methods: {
    back () {
      this.$emit('back')
    }
  }
}
</script>
<style lang="less" scoped>
.meetinglist-detail{
  .dialog-content{
    background-color: #fff;
    border-left: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    width: 100%;
    box-sizing: border-box;
    .line{
      display: flex;
      flex-direction: row;
      .line-left, .line-right{
        border-right: 1px solid #e4e4e4;
        border-top: 1px solid #e4e4e4;
        height: 30px;
        line-height: 30px;
        text-align: center;
      }
      .line-left{
        flex: 1;
      }
      .line-right{
        flex: 2;
      }
    }
  }
  .dialog-bottom{
    margin-top: 20px;
    text-align: right;
  }
}
</style>
