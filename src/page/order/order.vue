<template>
  <div class="order">
    <el-tabs v-model="activeName">
      <el-tab-pane label="查询申请" name="meeting">
        <!-- 搜索列表项 -->
        <search-list @search="search" @clear="clear"></search-list>

        <!-- 表格内容 -->
        <container
          :table-columns="tableColumns"
          :table-data="tableData"
          @handleEdit="handleEdit"></container>

        <!-- 分页 -->
        <div class="bottom-pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[3, 10, 20, 30, 50]"
            :page-size="3"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tableData.length || 0">
          </el-pagination>
        </div>

      </el-tab-pane>
    </el-tabs>

    <!-- 详情弹出框 -->
    <el-dialog :visible.sync="dialogTableVisible">
      <meetinglist-detail :grid-data="gridData" @back="back" btn-flag="order"></meetinglist-detail>
    </el-dialog>
  </div>
</template>
<script>
import SearchList from '../../components/common/search-list'
import Container from '../../components/common/container'
import MeetinglistDetail from '../../components/common/meetinglist-detail'

export default {
  name: 'order',
  components: {
    Container,
    SearchList,
    MeetinglistDetail
  },
  data () {
    return {
      activeName: 'meeting',
      // 表头内容
      tableColumns: [
        {prop: 'applyTime', label: '申请时间', sortable: true, width: '225'},
        {prop: 'applicantName', label: '姓名', sortable: false, width: '225'},
        {prop: 'applicantMobileNumber', label: '手机号', sortable: false, width: '225'},
        {prop: 'lecturer', label: '教师', sortable: false, width: '225'},
        {prop: 'region', label: '会议地点', sortable: false, width: '225'},
        {prop: 'meetingTime', label: '会议时间', sortable: true, width: '225'},
        {prop: 'state', label: '会议状态', sortable: false, width: '225'},
        {prop: 'operation', label: '操作', sortable: false, width: '225'}
      ],
      // 表格数据
      tableData: [
        {
          applyTime: '2019/01/12',
          applicantName: '宋先生',
          applicantMobileNumber: '18646514597',
          lecturer: '曾斌',
          region: '广东-广州',
          meetingTime: '2019/01/15-2019/01/16',
          state: '预约中',
          operation: ['查看'],
          meetingAddress: '广东广州天河区广州大道北'
        }, {
          applyTime: '2019/01/12',
          applicantName: '梁娜娜',
          applicantMobileNumber: '18866711156',
          lecturer: '冷佟',
          region: '北京-北京',
          meetingTime: '2019/01/13-2019/01/16',
          state: '预约中',
          operation: ['查看']
        }, {
          applyTime: '2019/01/11',
          applicantName: '陶仁波',
          applicantMobileNumber: '18625995440',
          lecturer: '张偲程',
          region: '湖南-长沙',
          meetingTime: '2019/01/14-2019/01/15',
          state: '预约中',
          operation: ['查看']
        }, {
          applyTime: '2019/01/12',
          applicantName: '宋先生',
          applicantMobileNumber: '18646514597',
          lecturer: '曾斌',
          region: '广东-广州',
          meetingTime: '2019/01/15-2019/01/16',
          state: '预约中',
          operation: ['查看']
        }, {
          applyTime: '2019/01/12',
          applicantName: '梁娜娜',
          applicantMobileNumber: '18866711156',
          lecturer: '冷佟',
          region: '北京-北京',
          meetingTime: '2019/01/13-2019/01/16',
          state: '预约中',
          operation: ['查看']
        }, {
          applyTime: '2019/01/11',
          applicantName: '陶仁波',
          applicantMobileNumber: '18625995440',
          lecturer: '张偲程',
          region: '湖南-长沙',
          meetingTime: '2019/01/14-2019/01/15',
          state: '预约中',
          operation: ['查看']
        }, {
          applyTime: '2019/01/12',
          applicantName: '宋先生',
          applicantMobileNumber: '18646514597',
          lecturer: '曾斌',
          region: '广东-广州',
          meetingTime: '2019/01/15-2019/01/16',
          state: '预约中',
          operation: ['查看']
        }, {
          applyTime: '2019/01/12',
          applicantName: '梁娜娜',
          applicantMobileNumber: '18866711156',
          lecturer: '冷佟',
          region: '北京-北京',
          meetingTime: '2019/01/13-2019/01/16',
          state: '预约中',
          operation: ['查看']
        }, {
          applyTime: '2019/01/11',
          applicantName: '陶仁波',
          applicantMobileNumber: '18625995440',
          lecturer: '张偲程',
          region: '湖南-长沙',
          meetingTime: '2019/01/14-2019/01/15',
          state: '预约中',
          operation: ['查看']
        }, {
          applyTime: '2019/01/11',
          applicantName: '陶仁波',
          applicantMobileNumber: '18625995440',
          lecturer: '张偲程',
          region: '湖南-长沙',
          meetingTime: '2019/01/14-2019/01/15',
          state: '预约中',
          operation: ['查看']
        }
      ],
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
        {label: '详细地址', prop: 'meetingAddress', text: ''},
        {label: '会议性质', prop: 'meetingType', text: ''},
        {label: '预计人数', prop: 'participantsNumber', text: ''},
        {label: '会议背景', prop: 'meetingIntroduction', text: ''}
      ],
      dialogTableVisible: false
    }
  },
  created () {},
  mounted () {},
  methods: {
    // 搜索
    search (val) {
      console.log(val)
    },
    // 清空搜索
    clear (val) {
      console.log(val)
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
    handleSizeChange (val) {
      console.log(val, 'handleSizeChange')
    },
    handleCurrentChange (val) {
      console.log(val, 'handleCurrentChange')
    },
    // 点击弹出框中的返回
    back () {
      this.dialogTableVisible = false
    }
  }
}
</script>
<style lang="less">
.order{
  .line-right-h{
    height: 40px;
    line-height: 40px;
  }
}
</style>
