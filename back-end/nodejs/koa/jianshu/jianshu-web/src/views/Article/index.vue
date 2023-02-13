<!--
 * @Author: Topskys
 * @Date: 2022-12-25 15:25:41
 * @LastEditTime: 2022-12-30 15:35:25
-->
<template>
  <div class="list">
    <!-- 列表 -->
    <el-table :data="articles" style="width: 100%">
      <el-table-column label="文章标题" prop="title"></el-table-column>
      <el-table-column label="发布时间" prop="createTime"></el-table-column>
      <el-table-column label="文章来源" prop="stemfrom"></el-table-column>
      <el-table-column label="阅读量" prop="read"></el-table-column>
      <el-table-column label="点赞量" prop="star"></el-table-column>
      <el-table-column label="评论数" prop="comment"></el-table-column>
      <el-table-column label="更新时间" prop="updateTime"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="{ row, $index }">
          <el-button @click="update(row, $index)" type="primary" size="mini"
            >编辑</el-button
          >
          <el-button @click="del(row, $index)" type="danger" size="mini"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      background
      layout="prev ,pager,next"
      :total="count"
      :page-size="pageSize"
      :current-page="page"
      @current-change="changePage"
      style="margin-top: 20px"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      page: 1,
      pageSize: 10,
      count: 0,
    };
  },
  mounted() {
    this.getDataList();
  },
  methods: {
    getDataList() {
      this.$http({
        url: "/article/findAll",
        method: "get",
        params: {
          page: this.page,
          pageSize: this.pageSize,
          // author:this.$store.state.user.username||''
        },
      }).then((res) => {
        this.articles = res.data;
        this.page = res.page;
        this.count = res.total;
      });
    },
    update(row) {
      this.$router.push({
        path: "/admin/article/update",
        query: {
          id: row.id,
        }
      });
    },
    del(row) {
      this.$confirm("确定删除吗？", "提示", {
        confirmButtonText: "删除",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$http({
            url: "/article/del",
            method: "post",
            params: {
              id: row.id,
            },
          }).then(({ code, msg }) => {
            this.$message({
              type: code === 200 ? "success" : "error",
              message: msg,
            });
            code === 200 && this.getDataList();
          });
        })
        .catch(() => {});
    },
    changePage(page) {
      this.page = page;
      this.getDataList();
    },
  },
};
</script>

<style>
</style>