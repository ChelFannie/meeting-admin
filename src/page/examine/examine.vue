<template>
  <div class="examine">
    <el-tabs v-model="tabsActiveName" @tab-click="tabHandle">
      <el-tab-pane label="会务组审核" name="meetingHandler">
        <meeting-handler @handleEdit="handleEdit"></meeting-handler>
      </el-tab-pane>
      <el-tab-pane label="营销中心审核" name="marketingCenter">
        <marketing-center></marketing-center>
      </el-tab-pane>
      <el-tab-pane label="审核跟进" name="examineDetail">
        <examine-detail></examine-detail>
      </el-tab-pane>
    </el-tabs>

    <!-- 分页 -->
    <div class="bottom-pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, 30, 50]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="100">
      </el-pagination>
    </div>

    <!-- 详情弹出框 -->
    <el-dialog :visible.sync="dialogTableVisible">
      <meetinglist-detail
        :btn-flag="btnFlag"
        :grid-data="gridData"
        @back="back"
        @save="save"
        @approval="approval"></meetinglist-detail>
    </el-dialog>
  </div>
</template>
<script>
import MeetingHandler from '../../components/examine/meeting-handler'
import MarketingCenter from '../../components/examine/marketing-center'
import ExamineDetail from '../../components/examine/examine-detail'
import MeetinglistDetail from '../../components/common/meetinglist-detail'

export default {
  name: 'examine',
  components: {
    MeetingHandler,
    MarketingCenter,
    ExamineDetail,
    MeetinglistDetail
  },
  data () {
    return {
      tabsActiveName: 'meetingHandler',
      // 当前页码
      currentPage: 1,
      // 表格弹出框详细数据
      gridData: [
        {label: '会议状态', prop: 'state', text: ''},
        {label: '申请时间', prop: 'applyTime', text: ''},
        {label: '姓名', prop: 'applicantName', text: ''},
        {label: '手机号', prop: 'applicantMobileNumber', text: ''},
        {label: '教师', prop: 'lecturer', text: ''},
        {label: '会议时间', prop: 'meetingTime', text: ''},
        {label: '会议地点', prop: 'region', text: ''},
        {label: '详细地址', prop: 'meetingAddress', text: '海珠区广州大道南创投小镇'},
        {label: '会议性质', prop: 'meetingType', text: ''},
        {label: '预计人数', prop: 'participantsNumber', text: '30'},
        {label: '会议背景', prop: 'meetingIntroduction', text: '会议背景海珠区广州大道南创投小镇海珠区广州大道南创投小镇海珠区广州大道南创投小镇海珠区广州大道南创投小镇'}
      ],
      // 展示详情页
      dialogTableVisible: false,
      // 详情页中的按钮显示
      btnFlag: 'meetingHandler'
    }
  },
  created () {},
  mounted () {},
  methods: {
    // 切换菜单
    tabHandle (tab, event) {
      // console.log(tab.name)
      this.tabsActiveName = tab.name
      this.btnFlag = tab.name
    },
    handleSizeChange (val) {
      console.log(val, 'handleSizeChange')
    },
    handleCurrentChange (val) {
      console.log(val, 'handleCurrentChange')
    },
    // 点击操作栏
    handleEdit (val) {
      // console.log(val)
      this.dialogTableVisible = true
      this.gridData.map(item => {
        Object.keys(val.row).map(key => {
          if (item.prop === key) {
            item.text = val.row[key]
          }
        })
      })
    },
    // 点击弹出框中的返回
    back () {
      this.dialogTableVisible = false
    },
    // 保存
    save () {
      console.log('保存')
      this.dialogTableVisible = false
    },
    approval () {
      console.log('批准')
      this.dialogTableVisible = false
    }
  }
}
</script>
<style lang="less">
</style>
