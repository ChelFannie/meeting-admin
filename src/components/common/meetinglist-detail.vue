<template>
  <div class="meetinglist-detail">
    <div class="detail-content" v-if="btnFlag!=='meetingHandler'">
      <div class="line" v-for="(item, index) in gridData" :key="index">
        <div class="line-left">{{item.label}}</div>

        <!-- 会议背景 -->
        <div class="line-right" v-if="item.prop==='meetingIntroduction'">
          <el-input
            type="textarea"
            autosize
            :rows="1"
            placeholder="请输入内容"
            v-model="item.text">
          </el-input>
        </div>
        <div class="line-right line-right-h" v-else>{{item.text}}</div>
      </div>
    </div>

    <div class="detail-content" v-else>
      <div class="line" v-for="(item, index) in gridData" :key="index">
        <div class="line-left">{{item.label}}</div>

        <!-- 选择讲师 -->
        <div class="line-right" v-if="item.prop==='lecturer'">
          <el-select v-model="lecturer" placeholder="请选择" @change="changeLecturer">
            <el-option
              v-for="item in lecturerOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>

        <!-- 选择会议起始时间 -->
        <div class="line-right" v-else-if="item.prop==='meetingTime'">
          <el-date-picker
            v-model="meetingTime"
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            format="yyyy/MM/dd"
            value-format="yyyy/MM/dd"
            @change="changeDate">
          </el-date-picker>
        </div>

        <!-- 选择省市区 -->
        <div class="line-right" v-else-if="item.prop==='region'">
            <el-cascader
              v-model="selectedOptions"
              @change="changeArea"
              :options="areaOptions"
              change-on-select
            ></el-cascader>
        </div>

        <!-- 选择会议性质 -->
        <div class="line-right" v-else-if="item.prop==='meetingType'">
          <el-select v-model="meetingType" placeholder="请选择" @change="changeMeetingType">
            <el-option
              v-for="item in meetingTypeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>

        <!-- 会议背景 -->
        <div class="line-right" v-else-if="item.prop==='meetingIntroduction'">
          <el-input
            type="textarea"
            autosize
            :rows="1"
            placeholder="请输入内容"
            v-model="item.text">
          </el-input>
        </div>

        <div class="line-right" v-else>
          <el-input v-model="item.text" :readonly="readonlyArr.includes(item.prop)">{{item.text}}</el-input>
        </div>
      </div>
    </div>

    <div class="detail-bottom">
      <el-button v-if="btnFlag==='order'" type="primary" @click="back">返回</el-button>

      <div v-if="btnFlag==='meetingHandler'">
        <el-button type="primary" @click="approval">批准</el-button>
        <el-button type="primary" @click="save">保存</el-button>
        <el-button type="primary" @click="back">返回</el-button>
      </div>

      <div v-if="btnFlag==='marketingCenter'">
        <el-button type="primary" @click="approval">批准</el-button>
        <el-button type="primary" @click="back">返回</el-button>
      </div>

      <div v-if="btnFlag==='examineDetail'">
        <el-button type="primary" @click="cancel">取消会议</el-button>
        <el-button type="primary" @click="back">返回</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import address from '../../utils/address.js'

export default {
  name: 'meetinglist-detail',
  props: {
    gridData: {
      type: Array,
      default: () => []
    },
    btnFlag: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      // 地址数据
      areaOptions: [],
      // 默认选择地址
      selectedOptions: ['440000', '440100', '440106'],
      // 默认选择时间
      meetingTime: ['2019/01/02', '2019/01/28'],
      // 详情中不能更改的列表项
      readonlyArr: ['state', 'applyTime', 'applicantName', 'applicantMobileNumber'],
      // 会议性质
      meetingTypeOptions: [
        {
          value: 'INVERSTMENT',
          label: '招商'
        }, {
          value: 'GROUND_PROMOTION',
          label: '地推'
        }, {
          value: 'SALON',
          label: '沙龙'
        }, {
          value: 'INTERNAL_TRAINING',
          label: '内训'
        }
      ],
      // 默认会议性质
      meetingType: '内训',
      lecturerOptions: [
        {
          value: '1',
          label: '曾斌'
        }, {
          value: '2',
          label: '地推'
        }, {
          value: '3',
          label: '沙龙'
        }, {
          value: '4',
          label: '内训'
        }, {
          value: '5',
          label: '曾斌'
        }, {
          value: '6',
          label: '地推'
        }, {
          value: '7',
          label: '沙龙'
        }, {
          value: '8',
          label: '内训'
        }, {
          value: '9',
          label: '内训'
        }, {
          value: '10',
          label: '曾斌'
        }, {
          value: '11',
          label: '地推'
        }
      ],
      lecturer: '曾斌'
    }
  },
  computed: {},
  created () {
    this.areaOptions = address
  },
  mounted () {},
  methods: {
    // 返回
    back () {
      this.$emit('back')
    },
    // 保存
    save () {
      this.$emit('save')
    },
    // 批准
    approval () {
      this.$emit('approval')
    },
    // 取消会议
    cancel () {
      this.$emit('cancel')
    },
    // 选择日期
    changeDate (value) {
      console.log(value)
    },
    // 选择地点
    changeArea (value) {
      console.log(value)
    },
    // 选择会议性质
    changeMeetingType (val) {
      console.log(val)
      this.gridData.map(item => {
        if (item.prop === 'meetingType') {
          item.text = val
        }
      })
    },
    changeLecturer (val) {
      console.log(val)
    }
  }
}
</script>
<style lang="less">
</style>
