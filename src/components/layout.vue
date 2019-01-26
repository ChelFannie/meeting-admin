<template>
  <div class="layout">
    <el-container>
      <el-header>
        <div class="title">
          <img src="../assets/images/LOGO.png" alt="">
        </div>
        <div class="menu">
          <i-aside :menu-lists="menuLists" :active-menu="activeMenu" @select="selectMenu"></i-aside>
        </div>
        <div class="exit">退出</div>
      </el-header>
      <el-container>
          <el-main>
            <div class="content">
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
        {itemIndex: '/refund', title: '退款处理'},
        {itemIndex: '/lecturer', title: '讲师管理'}
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
  width: 100%;
  box-sizing: border-box;
  .el-header{
    background-color: #63B7FD;
    color: #333;
    text-align: center;
    height: 60px;
    line-height: 60px;
    padding: 0;
    font-size: 16px;
    overflow: hidden;
    .title{
      float: left;
      width: 160px;
      height: 60px;
      img{
        width: 142px;
        position: relative;
        top: 10px;
      }
    }
    .menu{
      float: left;
    }
    .i-aside{
      .el-menu--horizontal>.el-menu-item {
        border: transparent;
      }
      .el-menu-item{
        padding: 0 30px;
        background-color: #63B7FD!important;
        font-size: 16px;
      }
      .el-menu-item.is-active{
        font-weight: bolder;
      }
    }
    .exit{
      float: right;
      margin-right: 100px;
      color: #fff;
      cursor: pointer;
    }
  }

  .el-aside {
    text-align: center;
  }

  .el-main {
    background-color: #F7F7F7;
    .content{
      background-color: #fff;
      box-shadow:0px 2px 12px 0px rgba(0, 0, 0, 0.1);
      border-radius:10px;
      padding: 20px;
      padding-left: 40px;
    }
  }
}
</style>
