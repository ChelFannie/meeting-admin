<template>
  <div class="i-aside">
    <el-menu
      :default-active="activeMenu"
      background-color="#63B7FD"
      text-color="#d9ecfc"
      active-text-color="#fff"
      @select="selectMenu"
      mode="horizontal">
      <el-menu-item v-for="(menu, index) in menuLists" :key="index" :index="menu.itemIndex">
        {{menu.title}}
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'i-aside',
  props: {
    menuLists: {
      type: Array,
      default: null
    },
    activeMenu: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  created () {},
  mounted () {},
  methods: {
    selectMenu (index) {
      this.$emit('select', index)
    }
  }
}
</script>
<style lang="less">
.i-aside{
  .el-menu{
    // border: none;
    // width: 640px;
    // .el-menu-item{
    //   width: 160px!important;
    // }
  }
}
</style>
