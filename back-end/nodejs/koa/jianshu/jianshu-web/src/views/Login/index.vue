<!--
 * @Author: Topskys
 * @Date: 2022-12-25 15:25:41
 * @LastEditTime: 2022-12-28 17:37:22
-->
<template>
  <div class="login">
    <el-card>
      <div class="login-title">简书后台管理系统</div>
      <el-form>
        <el-form-item>
          <el-input placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item class="login-btn">
          <span>还没有账号？</span>
          <span style="margin-right:20px;">注册</span>
          <el-button type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  //background: url("") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-card {
  width: 420px;
  height: 300px;
}

.login-title {
  font-size: 24rpx;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
  color: #333;
}

.login-btn {
  text-align: right;
}
</style>