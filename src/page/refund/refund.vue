<template>
  <div class="refund">
    <el-tabs v-model="tabsActiveName" @tab-click="tabHandle">
      <el-tab-pane label="审核退款" name="notRefund">
        <not-refund></not-refund>
      </el-tab-pane>
      <el-tab-pane label="完成退款" name="completeRefund">
        <complete-refund></complete-refund>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import NotRefund from '../../components/refund/not-refund'
import CompleteRefund from '../../components/refund/complete-refund'

export default {
  name: 'refund',
  components: {
    NotRefund,
    CompleteRefund
  },
  data () {
    return {
      tabsActiveName: 'notRefund'
    }
  },
  created () {},
  mounted () {},
  methods: {
    tabHandle (tab, event) {
      this.tabsActiveName = tab.name
    }
  }
}
</script>
<style scoped>
.refund{
  font-size: 32px;
}
</style>
