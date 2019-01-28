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
      currentPage: 1
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
    }
  }
}
