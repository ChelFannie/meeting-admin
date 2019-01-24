<template>
  <div class="layout">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="3" class="title">会议管理系统</el-col>
          <el-col :span="12">
            <i-aside :menu-lists="menuLists" :active-menu="activeMenu" @select="selectMenu"></i-aside>
          </el-col>
          <el-col :span="2" :offset="7">退出</el-col>
        </el-row>
      </el-header>
      <el-container>
          <!-- <el-aside width="200px">
            <i-aside :menu-lists="menuLists" :active-menu="activeMenu" @select="selectMenu"></i-aside>
          </el-aside> -->
          <el-main>
            <div class="container">
              <router-view></router-view>
            </div>
          </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import IAside from '../components/i-aside'

export default {
  name: 'layout',
  components: {
    IAside
  },
  data () {
    return {
      menuLists: [
        {itemIndex: '/order', title: '查询申请'},
        {itemIndex: '/examine', title: '审核申请'},
        {itemIndex: '/lecturer', title: '讲师管理'},
        {itemIndex: '/refund', title: '退款处理'}
      ],
      activeMenu: this.$route.path
    }
  },
  watch: {},
  computed: {},
  created () {},
  mounted () {},
  methods: {
    // 点击导航栏
    selectMenu (menu) {
      this.$router.push(menu)
    }
  }
}
</script>
<style lang="less">
.layout{
  .el-header{
    background-color: #d7d7d7;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0;
    .title{
      position: relative;
      &::after{
        content: '.';
        height: 50px;
        width: 1px;
        background-color: #717171;
        position: absolute;
        right: 0;
        top: 5px;
      }
    }
    .i-aside{
      .el-menu--horizontal.el-menu{
        .el-menu-item{
          background-color: #d7d7d7!important;
        }
        .el-menu-item.is-active{
          background-color: #c9c9c9!important;
        }
      }
    }
  }

  .el-aside {
    text-align: center;
  }

  .el-main {
    background-color: #f2f2f2;
    color: #333;
    // text-align: center;
  }
}
</style>
