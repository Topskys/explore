<!--
 * @Author: Topskys
 * @Date: 2022-12-25 15:29:53
 * @LastEditTime: 2023-01-20 00:36:22
-->
<template>
  <div class="add">
    <el-form label-width="100px">
      <el-form-item label="文章标题">
        <el-input
          v-model="form.title"
          clearable
          placeholder="请输入文章标题"
        ></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <div id="editor"></div>
      </el-form-item>
      <el-form-item label="文章来源">
        <el-radio v-model="form.stemfrom" label="原创">原创</el-radio>
        <el-radio v-model="form.stemfrom" label="转载">转载</el-radio>
      </el-form-item>
      <el-form-item>
        <el-button @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Editor from "wangeditor";
export default {
  data() {
    return {
      form: {
        title: "",
        stemfrom: "",
        author: this.$store.state.user.username || "Topsky",
      },
      editor: null,
    };
  },
  mounted() {
    // 创建wangEditor实例
    this.editor = new Editor("#editor");

    // 配置上传图片
    this.editor.config.uploadImgServer =
      "http://localhost:3000/upload/editor/img";
    this.editor.config.uploadFileName = "editorFile";
    this.editor.config.uploadImgHeaders = {
      // authorization: "Bearer " + localStorage.token,
      authorization: "Bearer " + localStorage.getItem("token"),
    };
    this.editor.config.height = 400;
    this.editor.config.placeholder = "编辑文章内容";

    this.editor.create();

    // localStorage.token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRvcHNreS02LXJlZyIsIl9pZCI6IjYzYTg0YWM2Zjc2Yjk3NTU4OTNhZWZiZCIsImlhdCI6MTY3MjE0NDUwOSwiZXhwIjoxNjcyNzQ5MzA5fQ.wgHRe6-GdxHg5NkNcreJ1mwgLvKi2WWUwJcI4e4eQrs'
  },
  methods: {
    submit() {
      let content = this.editor.txt.html();
      let date = new Date();
      this.$http({
        url: "/article/add",
        method: "post",
        params: {
          id: Date.now(),
          title: this.form.title,
          createTime: `${date.getFullYear()}-${
            date.getMonth() + 1
          }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
          updateTime: `${date.getFullYear()}-${
            date.getMonth() + 1
          }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
          stemfrom: this.form.stemfrom,
          content,
          author: this.form.author,
        },
        config: {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        },
      }).then(({ code, msg }) => {
        this.$message({
          type: code === 200 ? "success" : "error",
          message: msg,
        });
      });
    },
  },
};
</script>

<style>
</style>