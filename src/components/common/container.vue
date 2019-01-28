<template>
  <div class="container">
    <div class="content-table">
      <el-table
        border
        :data="tableData"
        style="width: 100%"
        :default-sort = "{prop: 'date', order: 'descending'}"
      >
        <el-table-column
          v-for="(column, index) in tableColumns"
          v-if="column.prop!=='operation'"
          :key="index"
          :prop="column.prop"
          :label="column.label"
          :sortable="column.sortable"
          :width="column.width">
        </el-table-column>
        <el-table-column
          v-else
          :prop="column.prop"
          :label="column.label"
          :sortable="column.sortable"
          :width="column.width">
          <template slot-scope="scope">
            <el-button
              v-for="(operation, index1) in scope.row.operation"
              :key="index1"
              size="mini"
              @click="handleEdit(scope.$index, scope.row, index1)">{{operation}}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'container',
  props: {
    tableColumns: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      currentPage: 1
    }
  },
  created () {},
  mounted () {},
  methods: {
    handleEdit (index, row, index1) {
      console.log('handleEdit container')
      this.$emit('handleEdit', {tabIndex: index, row: row, operationIndex: index1})
    }
  }
}
</script>
<style lang="less">
.container{
  .el-table td{
    padding: 10px 0;
  }
}
</style>
