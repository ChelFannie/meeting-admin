<template>
  <div class="login">
    <el-form
      :rules="rules"
      :model="form"
      ref="form"
      label-width="80px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" autofocus="autofocus" ref="usernameInput"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" ref="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="resetForm('form')">重置</el-button>
        <el-button @click="login('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  created () {},
  mounted () {},
  methods: {
    login (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.form.username === 'admin' && this.form.password === '123') {
            this.$message({
              message: '登录成功',
              type: 'success'
            })
            sessionStorage.setItem('token', 'admin')
            this.$store.commit('token', 'admin')
            this.$router.push('/')
          } else {
            this.$message({
              message: '用户名或密码错误',
              type: 'error'
            })
          }
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    selectPwd () {
      console.log(222222)
      this.$refs.password.focus()
    }
  }
}
</script>
<style lang="less">
.login{
  margin: 100px auto 0;
  width: 440px;
  border: 1px solid #ccc;
  .el-form{
    margin-top: 20px;
    .el-input{
      width: 300px;
    }
    .el-form-item__content{
      margin-right: 60px;
    }
    .el-form-item:nth-of-type(3) .el-form-item__content{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
}
</style>
