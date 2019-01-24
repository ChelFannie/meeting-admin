<template>
  <div class="i-aside">
    <el-menu
      :default-active="activeMenu"
      background-color="#e4e4e4"
      text-color="#000"
      active-text-color="#ffd04b"
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
    display: flex;
    flex-direction: row;
    .el-menu-item{
      flex: 1;
    }
  }
}
</style>
