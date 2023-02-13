# test2000
2022年1月8日15:29:38

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).




node,npm,
webpack,
babel,
sass,
postcss,
...

一、vue-cli 脚手架创建项目

1、vue-cli 安装
npm install -g @vue/cli
### or
yarn global add @vue/cli

2、查看版本
vue --version
### or
vue -V

3、创建项目
vue create projectName
.
.
.
./vueInit.png

4、运行vue
cd projectName
npm run serve
npm run lint # 检查错误
npm run build # 打包生成dist
### 自动修复错误
文件->首选项->设置->用户
setting.json{
    "editor.codeActionsOnSave":{
        "source.fixAll":true
    }
}
优先关闭eslint，写完再运行一次npm run lint即可：在主目录创建vue.config.js->>
module.exports = {
    lintOnSave: false //暂时关闭代码格式监测
}

5、访问web地址
-Local: http://localhost:8080/
-Network: http://192.168.1.1:8080/ 


7、引入axios请求数据和fetch请求
安装：
    在test2000打开终端，使用npm/cnpm i --save axios

8、反向代理解决跨域问题
vue.config.js中配置：
    devServer:{
        port:8080, //可以修改端口号
        proxy:{
            'api':{
                target:'https://xxx.com/',
                host:'xx.com',
                changeOrigin:true
            }
        }
    } 
# 配置完成需要重启

9、#  window.devicePixelRatio（物理像素）* iPhone6 widthpx（375px） = 750px # widthpx=document.documentElement.clientwidth 设备宽度

10、git协同开发工具
定义：code管理、team协作、版本控制工具
compare # code 对比工具
component1 <----> component2 <----> component3

传统：svn服务器(主要内网)，各个组件可以通过svn客户端上传、覆盖、获取组件code，云协同workstation

now：['git服务器','git远程创库'](功能：code对比，历史提交记录，......),每个本地开发者都会pull收到一个本地git创库(暂存区，历史记录，在本地code对比完成后)，就会push上传到git服务器

git教程：https://github.com/search?q=dress

git操作：1、命令 2、可视化vscode
下载git.exe安装next...
本地仓库init-->文件--add-->暂存区--commit-->本地仓库--push-->远程仓库--pull-->本地仓库
MINGW64：(本地仓库)
$ git init //主 本地仓库生成.git
$ git add fileName/. //主 添加到暂存区
$ git status // 查看git当前提交状态
$ git commit -m '为什么提交代码？好找出作者' // 提交到本地
$ git log // 查看提交日志
$ git reset --hard HEAD^/HEAD~num/6位版本号 // 有几个^或~num/name就回退上第几个版本
git reflog //操作过程日志



### 查看几个版本之间的区别
```
$ git diff fileName
```
### 添加远程地址
```
$ git remote add origin https://gitee.com/Topskys/roomName.git
$ git push -u origin master:master/master
``` 
### 获取、更新合并code、quit
```
$ git pull origin master
$ Q 
$ :WQ//quit

```

### git远程仓库：
#### 自配远程仓库/现成仓库，such: github, gitee, gitlab,...上传云仓库(if git仓库不为空，则需要拉取云code再上传)
```
$ git pull origin master//获取、更新合并
$ git remote add origin https://gitee.com/Topsky/roomName.git//主 上传云
```

### git云下载code：
#### 复制、获取云仓库地址->MINGW64：(本地仓库)
```
$ git clone 地址// 私有注意权限，否则下载filed
```

### .parent{display:grid;#### grid-template-columns:minmax(100px,25%) 1fr }

### git分支操作
#### 查看所有的分支
```
git branch -a
```
#### 新建brach分支
```
git checkout -b branch
```
#### 切换brach分支
```
git checkout branch
```
#### 推送brach分支到远程仓库branch分支
```
git push origin branch
```
#### 推送master分支到远程仓库branch分支
```
git push origin master:branch
```
#### 删除branch分支
```
git branch -d branchName
```
### 冲突的产生与解决
#### 两个人同时修改同一个文件，一个上传远程仓库成功，另一个人再上传会失败
```
git branch -d branchName
```



### git 提交本地仓库是会自动修复执行lint


