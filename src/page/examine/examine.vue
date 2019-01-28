<template>
  <div class="examine">
    <el-tabs v-model="tabsActiveName" @tab-click="tabHandle">

      <!-- 搜索列表项 -->
      <search-list @search="search" @clear="clear"></search-list>

      <el-tab-pane label="会务组审核" name="meetingHandler">
        <meeting-handler @handleEdit="handleEdit"></meeting-handler>
      </el-tab-pane>

      <el-tab-pane label="营销中心审核" name="marketingCenter">
        <marketing-center @handleEdit="handleEdit"></marketing-center>
      </el-tab-pane>

      <el-tab-pane label="审核跟进" name="examineDetail">
        <examine-detail @handleEdit="handleEdit"></examine-detail>
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
        :btn-flag="tabsActiveName"
        :grid-data="gridData"
        @back="back"
        @save="save"
        @approval="approval"
        @cancel="cancel"></meetinglist-detail>
    </el-dialog>
  </div>
</template>
<script>
import MeetingHandler from '../../components/examine/meeting-handler'
import MarketingCenter from '../../components/examine/marketing-center'
import ExamineDetail from '../../components/examine/examine-detail'
import MeetinglistDetail from '../../components/common/meetinglist-detail'
import SearchList from '../../components/common/search-list'
import {detailBtnFlaMixin} from '../../common/js/mixins.js'

export default {
  name: 'examine',
  components: {
    MeetingHandler,
    MarketingCenter,
    ExamineDetail,
    MeetinglistDetail,
    SearchList
  },
  mixins: [detailBtnFlaMixin],
  data () {
    return {
      // 当前标签页
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
      dialogTableVisible: false
    }
  },
  created () {},
  mounted () {},
  methods: {
    // // 搜索
    // search (val) {
    //   console.log(val)
    // },
    // // 清空搜索
    // clear (val) {
    //   console.log(val)
    // },
    // 切换菜单
    // tabHandle (tab, event) {
    //   // console.log(tab.name)
    //   this.tabsActiveName = tab.name
    // },
    // handleSizeChange (val) {
    //   console.log(val, 'handleSizeChange')
    // },
    // handleCurrentChange (val) {
    //   console.log(val, 'handleCurrentChange')
    // },
    // 点击操作栏
    handleEdit (val) {
      if (this.tabsActiveName === 'examineDetail' && val.operationIndex === 1) {
        console.log('取消会议')
        return
      }
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
    },
    cancel () {
      console.log('取消会议')
      this.dialogTableVisible = false
    }
  }
}
</script>
<style lang="less">
</style>
