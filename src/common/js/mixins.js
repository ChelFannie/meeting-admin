// 审核
export const examineMixin = {
  data () {
    return {}
  },
  computed: {},
  watch: {},
  mounted () {},
  methods: {
  }
}

// 详情页底部按钮显示
export const detailBtnFlaMixin = {
  data () {
    return {
      // 当前标签页
      tabsActiveName: '',
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
        {label: '会议背景', prop: 'meetingIntroduction', text: '会议背景海珠区广州大道南创投小镇海珠区广州大道南创投小镇海珠区广州大道南创'}
      ],
      // 展示详情页
      dialogTableVisible: false
    }
  },
  computed: {},
  watch: {},
  mounted () {

  },
  methods: {
    // 切换菜单
    tabHandle (tab) {
      this.tabsActiveName = tab.name
    },
    // 搜索
    search (val) {
      console.log(val)
    },
    // 清空搜索
    clear (val) {
      console.log(val)
    },
    handleSizeChange (val) {
      console.log(val, 'handleSizeChange')
    },
    handleCurrentChange (val) {
      console.log(val, 'handleCurrentChange')
    },
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
