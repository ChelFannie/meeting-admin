<template>
  <div class="refund">
    <el-tabs v-model="tabsActiveName" @tab-click="tabHandle">

      <!-- 搜索列表项 -->
      <search-list @search="search" @clear="clear"></search-list>

      <el-tab-pane label="审核退款" name="notRefund">
        <not-refund></not-refund>
      </el-tab-pane>

      <el-tab-pane label="完成退款" name="completeRefund">
        <complete-refund></complete-refund>
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
  </div>
</template>
<script>
import NotRefund from '../../components/refund/not-refund'
import CompleteRefund from '../../components/refund/complete-refund'
import SearchList from '../../components/common/search-list'
import {detailBtnFlaMixin} from '../../common/js/mixins.js'

export default {
  name: 'refund',
  components: {
    NotRefund,
    CompleteRefund,
    SearchList
  },
  mixins: [detailBtnFlaMixin],
  data () {
    return {
      // 当前标签页
      tabsActiveName: 'notRefund'
    }
  },
  created () {},
  mounted () {},
  methods: {
  }
}
</script>
<style scoped>
.refund{}
</style>
