<!--
 * @Author: Topskys
 * @Date: 2022-12-25 15:27:00
 * @LastEditTime: 2022-12-30 15:09:33
-->
<template>
  <el-container>
    <el-header>
      <div class="sys-title">简述后台管理系统</div>
      <div class="header-right">
        <!-- <span>网站首页</span> -->
        <img
          src="https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
          style="
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 10px;
          "
        />
        <span>admin</span>
        <span>退出</span>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="$route.path||'/admin/users/personal'"
          router
        >
          <el-submenu index="/admin/users">
            <template slot="title">
              <i class="el-icon-s-custom"></i>
              <span>个人中心</span>
            </template>
            <el-menu-item index="/admin/users/personal">个人资料</el-menu-item>
            <el-menu-item index="/admin/users/password">修改密码</el-menu-item>
          </el-submenu>
          <el-submenu index="/admin/article">
            <template slot="title">
              <i class="el-icon-reading"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item index="/admin/article">文章列表</el-menu-item>
            <el-menu-item index="/admin/article/add">发布文章</el-menu-item>
            <el-menu-item index="/admin/article/update">文章列表</el-menu-item>
          </el-submenu>
          <el-menu-item index="/admin/comment">
            <template slot="title">
              <i class="el-icon-chat-line-square"></i>
              <span>评论管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/admin/fans">
            <template slot="title">
              <i class="el-icon-reading"></i>
              <span>粉丝管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/admin/star">
            <template slot="title">
              <i class="el-icon-thumb"></i>
              <span>点赞管理</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
     
    }
};
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #b3c0d1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-aside {
  background-color: #d3dce6;
}

.el-main {
  background-color: #fff;
}

.el-container {
  height: 100%;
  background-color: black;
}

.header-right {
  display: flex;
  align-items: center;

  & > span {
    display: inline-block;
    margin: 0 10px;
  }
}
</style>