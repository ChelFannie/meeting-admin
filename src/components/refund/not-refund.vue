<template>
  <div class="not-refund">
    <container :table-columns="tableColumns" :table-data="tableData" @handleEdit="handleEdit"></container>
  </div>
</template>
<script>
import Container from '../../components/common/container'
export default {
  name: 'not-refund',
  components: {
    Container
  },
  data () {
    return {
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
          state: '会议完成',
          operation: ['批准退款']
        }, {
          applyTime: '2019/01/12',
          applicantName: '梁娜娜',
          applicantMobileNumber: '18866711156',
          lecturer: '冷佟',
          region: '北京-北京',
          meetingTime: '2019/01/13-2019/01/16',
          state: '会议完成',
          operation: ['批准退款']
        }, {
          applyTime: '2019/01/11',
          applicantName: '陶仁波',
          applicantMobileNumber: '18625995440',
          lecturer: '张偲程',
          region: '湖南-长沙',
          meetingTime: '2019/01/14-2019/01/15',
          state: '会议完成',
          operation: ['批准退款']
        }
      ]
    }
  },
  created () {},
  mounted () {},
  methods: {
    // 点击操作栏
    handleEdit (val) {
      console.log(val, 4)
      this.$emit('handleEdit', val)
    }
  }
}
</script>
<style scoped>
</style>
