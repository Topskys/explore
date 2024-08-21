# vsCode自动化部署
SHH + Git + Node.js + Docker

## Docker配置
Dockerfile
docker-compose.yml
nginx.conf

## 配置package.json

package.json配置执行脚本node ./deploy/deploy.js

```json
{
  "scripts": {
    "deploy": "node ./deploy/deploy.js"
  }
}
```

## 执行部署

```sh
npm run deploy
```
可配置Git的钩子，在push的时候自动执行部署
```sh
git push origin master
```

## 部署流程

1. 登录服务器并拉取最新代码
2. 安装依赖
3. 打包
4. 构建镜像
5. 停止容器
6. 删除旧容器
7. 启动容器

## 参考文献

2.35 r@e.BG trr:/ 06/14 前端自动化部署-使用脚本方式 # 前端 # vue # 程序员   https://v.douyin.com/irG1WAhv/ 复制此链接，打开Dou音搜索，直接观看视频！