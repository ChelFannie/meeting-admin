<template>
  <div class="search-list">
    <el-form ref="searchForm" :model="searchForm" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="searchForm.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="searchForm.applicantMobileNumber" placeholder="请输入手机号" @blur="telInput"></el-input>
      </el-form-item>
      <el-form-item label="教师">
        <el-input v-model="searchForm.lecturer" placeholder="请输入教师姓名"></el-input>
      </el-form-item>
      <div class="search-btn">
        <el-button type="primary" @click="search">搜索</el-button>
        <el-button class="clear" @click="clear">清空</el-button>
      </div>
      <el-form-item label="会议地点">
        <el-input v-model="searchForm.address" placeholder="请输入会议地点"></el-input>
      </el-form-item>
      <el-form-item label="会议状态">
        <el-select v-model="searchForm.status" placeholder="请选择" @change="selectChange">
          <el-option
            v-for="item in statusOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="会议时间" class="item-date">
          <el-date-picker
            v-model="date"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            @change="selectDate">
        </el-date-picker>
      </el-form-item>
      </el-form>
  </div>
</template>
<script>
export default {
  name: 'search-list',
  data () {
    return {
      searchForm: {
        name: '',
        applicantMobileNumber: '',
        lecturer: '',
        address: '',
        meetingStartTimeBegin: '',
        meetingStartTimeEnd: '',
        status: ''
      },
      date: '',
      statusOptions: [{
        value: '选项1',
        label: '预约中'
      }, {
        value: '选项2',
        label: '已预约'
      }, {
        value: '选项3',
        label: '预约失败'
      }, {
        value: '选项4',
        label: '审批不通过'
      }, {
        value: '选项5',
        label: '会议进行中'
      }, {
        value: '选项6',
        label: '会议结束'
      }, {
        value: '选项7',
        label: '退款中'
      }, {
        value: '选项8',
        label: '已退款'
      }, {
        value: '选项9',
        label: '退款失败'
      }]
    }
  },
  created () {},
  mounted () {},
  methods: {
    // 选中会议状态
    selectChange (val) {
      this.searchForm.status = val
    },
    // 选中会议时间
    selectDate (val) {
      this.searchForm.meetingStartTimeBegin = val[0]
      this.searchForm.meetingStartTimeEnd = val[1]
    },
    telInput () {
      const mobileReg = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))[0-9]{8}$/
      if (this.searchForm['applicantMobileNumber'] && (!mobileReg.test(this.searchForm['applicantMobileNumber']))) {
        this.$message({
          message: '请输入正确的手机号',
          type: 'warning'
        })
      }
    },
    // 搜索
    search () {
      const mobileReg = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))[0-9]{8}$/
      for (let key in this.searchForm) {
        if (key === 'applicantMobileNumber' && (this.searchForm[key]) && (!mobileReg.test(this.searchForm[key]))) {
          this.$message({
            message: '请输入正确的手机号',
            type: 'warning'
          })
          return
        }
      }
      this.$emit('search', this.searchForm)
    },
    // 清空搜索
    clear () {
      Object.keys(this.searchForm).map(key => {
        this.searchForm[key] = ''
      })
      this.$emit('clear', this.searchForm)
    }
  }
}
</script>
<style lang="less">
.search-list{
  .el-form{
    font-size: 0;
    .el-form-item{
      font-size: 16px;
      display: inline-block;
      margin-right: 40px;
      .el-form-item__label{
        padding: 0;
        text-align: center;
        color: #fff;
        background-color: #63B7FD;
        border-radius: 6px 0px 0px 6px;
        line-height: 36px;
        font-size: 16px;
      }
      .el-form-item__content{
        line-height: 36px;
      }
      .el-input{
        width: 200px;
        .el-input__inner{
          font-size: 16px;
          height: 36px;
          line-height: 36px;
          border-radius: 0 6px 6px 0;
          border: none;
          box-shadow:0px 1px 8px 0px rgba(0, 0, 0, 0.1);
        }
      }
    }
    .item-date{
      .el-form-item__content{
        font-size: 16px;
      }
      .el-input__inner{
        height: 36px;
        line-height: 36px;
        border-radius: 0 6px 6px 0;
        border: none;
        box-shadow:0px 1px 8px 0px rgba(0, 0, 0, 0.1);
      }
    }
    .search-btn{
      margin-left: 200px;
      width: 600px;
      display: inline-block;
      font-size: 0;
      margin-bottom: 22px;
      .el-button{
        width: 80px;
        height: 36px;
        box-sizing: border-box;
        border: none;
        border-radius:6px;
        font-size: 16px;
        padding: 0;
        span{
          color: #fff;
        }
      }
      .el-button+.el-button{
        margin-left: 30px;
      }
      .clear{
        background-color: #999999;
      }
    }
  }
}
</style>
