<!--
 * @Author: Topskys
 * @Date: 2022-12-25 15:25:41
 * @LastEditTime: 2022-12-28 10:54:52
-->
<template>
  <div class="personal">
    <el-form :model="form" label-width="80px">
      <el-form-item label="头像">
        <el-upload
          action="http://localhost:3000/upload/img"
          name="file"
          :headers="uploadHeader"
          :before-upload="beforeAvatarUpload"
          :on-success="onSuccess"
          :on-preview="handlePreview"
          :show-file-list="false"
          :auto-upload="true"
        >
          <img v-if="form.avatarUrl" :src="form.avatarUrl" class="avatar" />
          <el-button v-else class="el-icon-plus" type="plain" size="mini"
            >上传</el-button
          >
        </el-upload>
      </el-form-item>
      <el-form-item label="用户名">
        <el-col :span="6">
          <el-input
            v-model="form.username"
            disabled
            placeholder="请输入用户名"
          ></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio v-model="form.gender" label="男">男</el-radio>
        <el-radio v-model="form.gender" label="女">女</el-radio>
        <el-radio v-model="form.gender" label="保密">保密</el-radio>
      </el-form-item>
      <el-form-item label="个人简介">
        <el-col :span="6">
          <el-input
            v-model="form.desc"
            type="textarea"
            rows="3"
            placeholder="填写你的个人简介"
          ></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="手机号">
        <el-col :span="6">
          <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="电子邮箱">
        <el-col :span="6">
          <el-input
            v-model="form.email"
            placeholder="请输入邮箱地址"
          ></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save">更新</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploadHeader: {
        authorization: "Bearer " + localStorage.token,
      },
      form: {
        _id: "",
        username: "",
        avatarUrl: "",
        gender: "男",
        desc: "",
        phone: "",
        email: "",
      },
    };
  },
  created() {
    this.form = this.$store.state.user;
  },
  methods: {
    handlePreview(file) {
      console.log(file);
    },
    onSuccess(res) {
      this.form.avatarUrl = res.url;
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 0.512;
      !isLt2M && this.$message.error("上传头像图片大小不能超过 500kb !");
    },
    save() {
      this.$http({
        path: "/users/update/personal",
        method: "POST",
        params: this.form,
      }).then(({ code, msg }) => {
        this.$message({
          message: msg,
          type: code === 200 ? "success" : "error",
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>