# 微信原生小程序
2022年12月12日17:07

## 运行服务器
```bash
# D:\MyProject\app\qf-app\server>
json-server --watch db.json --port 5000
```

## 使用扩展组件
```bash
# 初始化 package.json 包管理器
npm init -y
# 安装组件包
npm install @miniprogram-component-plus/sticky
```
在search.json配置：
```json
{
    "component": true,
    "usingComponents": {
        "mp-sticky":"@miniprogram-component-plus/sticky"
    }
}
```
在search.wxml使用:
```xml
<mp-sticky>
    <view class="input-box2">
        <input type="text" placeholder="请输入..." bindtap="handleTap" />
    </view>
</mp-sticky>
```
找不到 mp-sticky 扩展组件？工具>>构建npm即可


## 使用weUI组件库
app.json配置：
```json
"useExtendedLib": {
     "weui":true
}   
```
在要使用的页面json文件配置：
```json
"usingComponents": {
    "mp-searchbar":"weui-miniprogram/searchbar/searchbar"
}
```

