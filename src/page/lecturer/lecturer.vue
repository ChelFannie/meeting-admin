<template>
  <div class="lecturer">
    <el-tabs v-model="activeName">
      <el-tab-pane label="讲师管理" name="lecturer">
        讲师管理
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'lecturer',
  data () {
    return {
      activeName: 'lecturer'
    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style scoped>
.lecturer{
  font-size: 32px;
}
</style>
