<template>
  <div class="examine">
    <el-tabs v-model="tabsActiveName" @tab-click="tabHandle">
      <div class="pos-text">位置：</div>
      <el-tab-pane label="会务组审核" name="meetingHandler">
        <meeting-handler></meeting-handler>
      </el-tab-pane>
      <el-tab-pane label="营销中心审核" name="marketingCenter">
        <marketing-center></marketing-center>
      </el-tab-pane>
      <el-tab-pane label="审核跟进" name="examineDetail">
        <examine-detail></examine-detail>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import MeetingHandler from '../../components/examine/meeting-handler'
import MarketingCenter from '../../components/examine/marketing-center'
import ExamineDetail from '../../components/examine/examine-detail'

export default {
  name: 'examine',
  components: {
    MeetingHandler,
    MarketingCenter,
    ExamineDetail
  },
  data () {
    return {
      tabsActiveName: 'meetingHandler'
    }
  },
  created () {},
  mounted () {
    console.log(this.tabName, 'name')
  },
  methods: {
    tabHandle (tab, event) {
      this.tabsActiveName = tab.name
    }
  }
}
</script>
<style scoped>
.examine{
  font-size: 32px;
}
</style>
