BH-node.js

1.1、Node.js是一个基于Chrome v8 引擎的JavaScript运行环境。



1.2、node.js 中的 js 运行环境

V8引擎               内置 API（fs、path、http、js内置对象、querystring  etc...）

​     ^                                                      \/

​               待执行的js code



1.3、Node.js 可以做什么
		Node.js 是 JS 的运行环境，仅仅提供了基础的功能和APl。然而，基于Node.js提供的这些基础能，很多强大的工具和框架如雨后春笋，层出不穷，所以学会了Node.js，可以让前端程序员胜任更多的工作和岗位;
	1、基于Express框架(http://www.expressjs.com.cn/)，可以快速构建Web应用
	2、基于Electron框架(https://electronjs.org/)，可以构建跨平台的桌面应用基于	3、restify框架(http://restify.com/)，可以快速构建API接口项目读写和操作数据库、创建实用的命令行工具辅助前端开发、etc...



1.4、Node.js 怎么学
JS学习路径:
		JS基础语法＋浏览器内置API(DOM + BOM)+第三方库 (jQuery、art-template等)
Node.js 的学习路径:
		JS基础语法＋Node.js 内置API模块(fs、path、http等)＋第三方API模块(express、mysql等)



1.5、在node.js环境执行js文件

1、打开终端---->cd  js文件路径---->node name.js

2、在js文件的位置+按住shift---->在powershell打开----->node  name.js



1.6、终端中的快捷键

1、上前头-----可以定位到上一次执行的命令

2、tab-----能够快速补全路径  如：node  1+tab（122345.js）

3、esc-----快速清空当前已输入的命令

4、cls-----清空终端



2.1、fs 文件系统模块

```js
//例如：
const fs=require('fs')//引入fs模块
fs.readFile(path[,options], callback)//用来读取指定文件中的内容(参2：可选，表示以什么编码格式来读取文件；参3：读完， 通过回调函数拿到读取的结果)
fs.writeFile(path,write,callback)//use like readFile 


//fs.readFile()的示例代码
//以utf8的编码格式，读取指定文件的内容，并打印err和dataStr 的值:
const fs = require( 'fs ')
fs.readFile( './lfiles/11.txt '，'utf8 ', function(err, dataStr) { 
    console.log('错误：',err)//null/错误对象
    console.log('成功：',dataStr)//str/undefined
    //读取成功？
    if(err){
        return console.log('failed!'+err.message)
    }
    console.log('success!'+dataStr)
})

```

3.1、path 路径模块

path.join()

path.basename()

path.extname()

```js
//使用path.join()方法，可以把多个路径片段拼接为完整的路径字符串:
const pathStr = path.join(__dirname, '/a', '/b/c', '../../', './d', 'e')
console.log(pathStr) // 输出：__dirname\a\d\e
```

```js
//使用path.basename() 方法， 可以从一个文件路径中， 获取到文件的名称.ext:
const fpath = '/a/b/c/index.html' // 文件的存放路径
var fullName = path.basename(fpath)
console.log(fullName) //输出index.html
var nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt) //输出：index
```

```js
//使用path.extname()方法，可以获取路径中的扩展名部分:
const fpath = '/a/b/c/index.html' //路径字符串
const fext = path.extname(fpath)
console.log(fext)//输出.html
```

3.2  综合案例–时钟案例
1.案例要实现的功能
	将素材目录下的index.html页面，拆分成三个文件，分别是:index.css、index.js、index.html ，并且将拆分出来的3个文件，存放到hss目录中。

2.案例的实现步骤
创建两个正则表达式，分别用来匹配<style>和<script>标签；使用fs模块读取需要被处理的 HTML文件；自定义resolveCSS方法，来写入index.css样式文件；自定义resolveJS方法，来写入index.js 脚本文件；自定义resolveHTML方法，来写入index.html文件。

3.1步骤1----导入需要的模块并创建正则表达式

```js
//导入fs文件系统模块
const fs = require( 'fs ')
//导入 path路径处理模块
const path = require( ' path ')
//其中\s 表示空白字符;\S表示非空白字符;*表示匹配任意次
//定义正则表达式，匹配style和script标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/
```

3.2步骤2–使用fs 模块读取需要被处理的html文件

```js
//读取需要被处理的HTML文件
fs.readFile(path.join(__dirname，' ../素材/index.html')，'utf8'，(err，dataStr) {
    if (err) return console.log( '读取HTML文件失败! ' +err.message)
    //读取 HTML文件成功后，调用对应的方法，拆解出 css、js 和 html文件
    resolveCSS(dataStr)
	resolveJS(dataStr)
    resolveHTML(dataStr)
})
```

3.3步骤3一自定义resolveCSS方法

```js
// 处理css样式
function resolvecss(htmlStr){
//使用正则提取页面中的<style></style>标签4
const r1 =regStyle.exec(htmlStr)
//将提取出来的样式字符串，做进一步的处理
const newCss = r1[0].replace( '<style> '，'").replace( ' </style>'，"") // 将提取出来的个css样式，写入到 index.cSS文件中
fs.writeFile(path.join( dirname，'./clock/index.css ' ),newCSs,err => {
    if (err) return console.log('写入CSS样式失败!' + err.message)
	console.log('写入CSS样式成功! ')
	})
}
```

3.4 resolveJS()

```js
function resolveJS(htmlStr) {
    const r2 = regScript.exec(htmlStr)
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')
        // console.log('newCSS OK\n', newJS)
    fs.writeFile(path.join(__dirname, './file/hss/index.js'), newJS, function(err) {
        if (err) {
            return console.log('写入JS失败' + err.message)
        }
        console.log('写入JS成功')
    })
}
```

3.5 resolveHTML()

```js
function resolveHTML(htmlStr) {
    //使用字符串的 replace方法，把内嵌的<style>和<script>标签，替换为外联的<link>和<script》标签
    const newHTML = htmlStr.replace(regStyle, '<link rel = "stylesheet" href = "/index.css"/> ').replace(regScript, ' <script src = "/index.js" > </script>')
    //将替换完成之后的 html代码，写入到index.html 文件中
    fs.writeFile(path.join(__dirname, '/index.html'), newHTML, function(err) {
        if (err) {
            return console.log('写入HTML失败' + err.message)
        }
        console.log('写入HTML成功')
    })
}
```



4.1 http 模块

​		http模块是Node.,js官方提供的、用来创建web服务器的模块。通过 http模块提供的 http.createServer()方法，就能方便的把一台普通的电脑，变成一台Web服务器，从而对外提供 Web资源服务。后端例如：IIS、Apache软件。

IP----映射----DNS<----标识----端口号

4.2 创建最基本的web服务器

4.2.1 创建web 服务器的基本步骤
		1、导入http模块
		2、创建web 服务器实例
		3、为服务器实例绑定request事件，监听客户端的请求启动服务器

​		4、启动服务器.listen()

```js
const http = require('http') //导入http模块
const server = http.createServer() //创建web服务器实例
server.on('request', (req, res) => { //为服务器实例绑定 request 事件，监听客户端的请求
    console.log('Someone visit our web server.')
    const url = req.url //客户端请求的 URL 地址
    const method = req.method //客户端请求的 method 类型
    let content = '<h1>404 Not found</h1>'
    if (url === '/' || url === '/index.html') {
        content = '<h1>首页</h1>'
    } else if (url === '/about.html') {
        content = '<h1>关于页面</h1>'
    }
    //const str = `Your request url is ${url}, and request method is ${method}`
    //console.log(str)
    //const chs = `您请求的 URL 是 ${url}，请求的method类型是${method}`
    res.setHeader('Content-Type', 'text/html; charset=utf-8') //设置响应头，解决res响应中文乱码问题
    res.end(content) //向客户端发送指定的内容，并结束本次请求的处理过程
})
server.listen(8000, () => { //启动服务器/80/8080/X   //Ctrl+C 停止服务器
    console.log('server running at http://127.0.0.1:8000') //端口号为80可省略，例如：8080不可省略
})
```



5、模块化

5.1、什么是模块化
		编程领域中的模块化，就是遵守固定的规则，把一个大文件拆成独立并互相依赖的多个小模块。

5.2、模块化拆分的好处:
		提高了代码的复用性、提高了代码的可维护性、实现按需加载。

5.3、模块化规范

5.3.1 模块化规范的好处:  大家都遵守同样的模块化规范写代码，降低了沟通的成本，极大方便了各个模块之间的相互调用,利人利己。

5. 3.1.1Node.js 中的模块化规范

   Node.js遵循了CommonJS模块化规范，CommonJS规定了模块的特性和各模块之间如何相互依赖。
   CommonJS规定:
   每个模块内部，module变量代表当前模块。
   module变量是一个对象，它的exports属性(即module.exports)是对外的接口。
   加载某个模块，其实是加载该模块的 module.exports属性。require)方法用于加载模块。

5.3.2  Node.js 中模块的3大分类：
内置模块(内置模块是由Node.js 官方提供的，例如fs.path、http 等)
自定义模块（用户创建的每个.js 文件，都是自定义模块)
第三方模块(由第三方开发出来的模块，并非官方提供的内置模块，也不是用户创建的自定义模块，使用前需要先下载)

5.4、加载模块 require()，内置模块、自定义模块(可省略exrt)、第三方模块

注意：使用该方法加载模块时，会执行被加载模块中的code

5.5、模块作用域好处：局部，防止全局变量污染的问题。

5.6 向外共享模块作用域的成员

5.6.1 module对象：在每个.js自定义模块中都有一个module 对象，它里面存储了和当前模块有关的信息。

5.6.2 module.exports对象
		在自定义模块中，可以使用module.exports 对象，将模块内的成员共享出去，供外界使用。外界用require0方法导入自定义模块时，得到的就是 module.exports 所指向的对象（default）。

```js
//向外共享模块
//旧的export
const age = 18
module.exports.username = 'Topsky'
module.exports.sayNode = () => {
    console.log("Hi ,Node.js")
}
module.exports.age = age
//以新module.exports(export)为主
module.exports / exports = {//module.exports = exports
    nickname: '小红',
    age: age,
    sayHi() {
        console.log('Hi!')
    }
}
```

6、npm与包

6.1.1 包的来源
		不同于Node.js 中的内置模块与自定义模块，包是由第三方个人或团队开发出来的，免费供所有人使用。注意:Node.js 中的包都是免费且开源的，不需要付费即可免费下载使用。

6.1.2 为什么需要包
		由于Node.js 的内置模块仅提供了一些底层的API，导致在基于内置模块进行项目开发的时，效率很低。包是基于内置模块封装出来的，提供了更高级、更方便的API，极大的提高了开发效率。

6.1.3 从哪里下载包
 		https://www.npmjs.com/(网站上搜索自己所需要的包)，是全球最大的包共享平台，你可以从这个网站上搜索到任何你需要的包。npm, Inc.公司提供了一个地址为https://registry.npmjs.org/的服务器，来对外共享所有的包，我们可以从这个服务器上下载自己所需要的包。

6.1.4 如何下载包

使用包管理工具 npm （Node Package Mannager已包含在node里）

6.1.5 安装 npm i pageName 

```js
npm i pageName@version//安装指定版本号 
npm i jquery 空格 art-template//一次性安装多个包用空格隔开
```

6.1.6包的使用

​		使用npm包管理工具，在项目中安装格式化时间的包moment使用require()导入格式化时间的包。参考moment 的官方API文档对时间进行格式化

```js
//导入moment包
const moment = require('moment') //npm i moment
    //参考 moment官方API文档，调用对脑的方法。对时间进行格式化
    //调用moment()方法,得到当前的时间
    //针对当前的时间，调用format()方法，按期定的格式进行时间的格式化
const dt = moment().format('YYY-MM-DD HH:mm:ss')
console.log(dt) //输出2020-01-1217:23:48
```

6.1.7 初次装包后多了哪些文件
		初次装包完成后，在项目文件来下多一个叫做node_modules的文件夹和package-lock.json 的配置文件。
其中:
node_modules文件夹用来存放所有已安装到项目中的包。require()导入第三方包时，就是从这个目录中查找并加载包。package-lockjson配置文件用来记录node_modules 目录下的每一个包的下载信息，例如包的名字、版本号、下载地址等。

6.1.8 包的语义化版本规范
		包的版本号是以“点分十进制”形式进行定义的，总共有三位数字，例如2.24.0其中每一位数字所代表的的含义如下:
第1位数字:大版本、第2位数字:功能版本、第3位数字:Bug修复版本

版本号提升的规则：只要前面的版本号增长了，则后面的版本号归零。

6.1.9 包管理配置文件
		npm规定，在项目根目录中，必须提供一个叫做package.json的包管理配置文件。用来记录与项目有关的一些配置信息。例如:
1、项目的名称、版本号、描述等2、项目中都用到了哪些包3、哪些包只在开发期间会用到4、那些包在开发和部署时都需要用到

6.1.10 快速创建package.json
		npm包管理工具提供了一个快捷命令，可以在执行命令时所处的目录中，快速创建package.json这个包管理配置文件:

```js
//作用:在执行命令所处的目录中，快速新建package.json文件
npm init -y
```

注意:
		上述命令只能在英文的目录下成功运行!所以，项目文件夹的名称一定要使用英文命名，不要使用中文，不能出现空格。运行npm install 命令安装包的时候，npm包管理工具会自动把包的名称和版本号，记录到package.json 中。

6.1.11、package.json文件中，有一个dependencies节点（子节点是各个包的name&version），专门用来记录您使用npm install命令安装了哪些包。

6.1.12、一次性安装所有的包
可以运行npm install命令(或npm i)一次性安装所有的依赖包:

```js
//执行npm install命令时，npm包管理工具会先读取package.json 中的 dependencies节点，
//读取到记录的所有依赖包名称和版本号之后，npm 包管理工具会把这些包一次性下载到项目中
npm install
```

6.1.13、卸载包

```
npm uninstall pageName//从node_module删除外，package.json 中dependencies节点也会移除信息
```

```js

```

6.1.14、devDependencies节点
		如果某些包只在项目开发阶段会用到，在项目上线之后不会用到，则建议把这些包记录到devDependencies节点中。与之对应的，如果某些包在开发和项目上线之后都需要用到，则建议把这些包记录到dependencies节点中。
您可以使用如下的命令，将包记录到devDependencies 节点中:

```js
//安装指定的包，并记录到devDependencies节点中
npm i 包名-D
//注意:上述命令是简写形式，等价于卜面完整的写法:
npm install 包名--save-dev
```

6.1.15、解决下包速度慢的问题
切换npm的下包镜像源
下包的镜像源，指的就是下包的服务器地址。

```js
#查看当前的下包镜像源
npm config get registry
#将下包的镜像源切换为淘宝镜像源
npm config set registry=https: //registry.npm.taobao.org/
#检查镜像源是否下载成功
npm config get registry
```

6.1.15、nrm
		为了更方便的切换下包的镜像源，我们可以安装nrm这个小工具，利用nrm提供的终端命令，可以快速查看和切换下包的镜像源。

```js
#通过npm包管理器，将nrm安装为全局可用的工具 
npm i nrm -g
#查看所有可用的镜像源
nrm ls
# 将下包的镜像原切换为taobao镜像  
nrm use taobao
```

6.1.16、全局包
		在执行npm install命令时，如果提供了-g参数，则会把包安装为全局包。
全局包会被安装到C\Users\用户目录VAppData\Roaming\npm\node_modules目录下。一般只有核心工具才会安装在此。

```js
npm i 包名-g #全局安装指定的包
npm uninstall包名-g #卸载全局安装的包
```

6.1.17、i5ting_toc
i5ting_toc是一个可以把 md文档转为html 页面的小工具，使用步骤如下:

```js
//将i5ting toc安装为全局包
npm install -g i5ting_toc
//调用i5ting_toc，轻松实现md 转 html 的功能 
i5ting_toc -f 要转换的md文件路径 -o
```

6.1.18、规范的包结构
		在清楚了包的概念、以及如何下载和使用包之后，接下来，我们深入了解一下包的内部结构。
		一个规范的包，它的组成结构，必须符合以下3点要求:
1.包必须以单独的目录而存在
2.包的顶级目录下要必须包含package.json这个包管理配置文件
3.package.json 中必须包含name，version，main这三个属性，分别代表包的名字、版本号、包的入口。

6.2.1、开发属于自己的包
1.需要实现的功能

```js
//导入自己的包
const itheima = require( 'itehima-utils ')
// -------功能2:转义HTML中的特殊字符-------
const htmlStr = 'ch1 style="color: red;">你好! &copy;<span>小黄! </span></h1>'6 const str = itheima.Htm1Escape(htm1Str)
// &lt;h1 style=&quot ;color: red;&quot ;&gt;你好! &amp;copy;&lt;span&gt;小黄! &lt; /span&gt;&lt; /h1&gt;
console.log(str)
```

```js
//需要实现的功能
//导入自己的包
const itheima = require( 'itehima-utils ')
//------功能3:还原HTML中的特殊字符-------
const rawHTML = itheima.htm1UnEscape(str)
//输出<h1 style="color: red;">你好! &copy; <span>小黄! </span></h1>
console.log( rawHTML)

```

6.2.2、初始化包的基本结构
		新建itheima-tools文件夹，作为包的根目录在itheima-tools文件夹中，新建如下三个文件:
·package.json(包管理配置文件)
·index.js(包的入口文件)
·README.md(包的说明文档)

```json
//初始化package.json
{
	"name": "itheima-tools",
    "version" : "1.0.0",
	"main" : "index.js",
	"description":"提供了格式化时问，HTMLEscape的功能",
    "keywords" : [ "itheima" , "dateFormat", "escape"],
    "license" : "ISC"
}
```

6.2.3、发布包

​		在npmjs.com注册并email验证，之后在npm终端npm login（6.1.15用nrm检查服务器。注意：在登录之前先把包的服务器地址改成npm官方的服务器，or会发布包失败！）把包发布到npm 上：
将终端切换到包的根目录之后，运行命令，即可将包发布到npm上(注意:包名不能雷同)。

```js
npm publish
```

```js
C: \Userslliulongbin\Desktoplitheima-utils1>npm publish
npm notice.
npm noticepackage: itheima-utils101.0.1npm notice二_l urlel1 ontan ts
npm notice67TB src/dateFormat.jsnpm notice741B src/htmlEscape.js
npm notice349B index.js
npm notice229B package. jsonnpm notice816B README. mdnpm noti
larball Details一
npmn
name:itheima-utilsl
npm
version:1.0.1
npm no
package size:1.4 kB
npm
unpacked size: 2.8 kB
npm
shasun: 4683fd9e9f14e8a8656a7ebfa46c59e576525dcf
npm noti
integrity:sha512-b0nS3ZPe2vxAu[...]g2MNvxaJLYePFA=-
npm
total fiiles:5
npm notice
itheima utils1@1.0.1
c: \Users\liulongbin\Desktopkitheima-utils1>
```

6.2.4、删除已发布的包
		运行npm unpublish包名--force命令，即可从npm删除已发布的包。

```js
npm unpublish包名--force
```

C:\Users\liulongbin\Desktop\itheima-utils1>npm unpublish itheima-utils --forcenpmWARN using -force I sure hope you know what you are doing.
itheima-utils
注意:
		npm unpublish 命令只能删除72小时以内发布的包npm unpublish 删除的包，在24小时内不允许重复发布发布包的时候要慎重，尽量不要往npm上发布没有意义的包!

6.2.5、优先从缓存中加载
		模块在第一次加载后会被缓存。这也意味着多次调用require()不会导致模块的代码被执行多次。
注意:不论是内置模块、用户自定义模块、还是第三方模块，它们都会优先从缓存中加载，从而提高模块的加载效率

6.2.6、内置模块的加载机制
		内置模块是由Node.js官方提供的模块，内置模块的加载优先级最高。
例如，require('fs')始终返回内置的fs模块，即使在node_modules目录下有名字相同的包也叫做fs。

6.2.7、自定义模块的加载机制
		使用require()加载自定义模块时，必须指定以/或../开头的路径标识符。在加载自定义模块时，如果没有指定/或../这样的路径标识符，则node会把它当作内置模块或第三方模块进行加载。
同时，在使用require()导入自定义模块时，如果省略了文件的扩展名，则Node.,js会按顺序分别尝试加载以下的文件: 1、按照确切的文件名进行加载2、补全.js扩展名进行3、加载补全.json扩展名进行4、加载补全.node扩展名进行5、加载加载失败，终端报错

6.2.8、第三方模块的加载机制
		如果传递给require()的模块标识符不是一个内置模块，也没有以‘./或‘./”’开头，则Node,js 会从当前模块的父目录开始，尝试从/node_modules文件夹中加载第三方模块。
		如果没有找到对应的第三方模块，则移动到再上一层父目录中，进行加载，直到文件系统的根目录。
例如，假设在'C:\UserslitheimalprojectIfoo.,js'文件里调用了require('tools')，则 Node.js会按以下顺序查找:
re
C:Users\itheima\projectinode_modules\tools
CA\Users\itheimanode_modules\tools
C.\Users\node_modules\tools
C:\node_modules\tools

6.2.9、目录作为模块
		当把目录作为模块标识符，传递给require()进行加载的时候，有三种加载方式:

1.在被加载的目录下查找一个叫做package.json的文件，并寻找 main属性，作为 require()加载的入口

2.如果目录里没有package,json文件，或者main入口不存在或无法解析，则 Node.js将会试图加载目录下的 indexjs 文件。

3.如果以上两步都失败了，则Node.js 会在终端打印错误消息，报告模块的缺失:Error: Cannot find module 'xo'

7、Express

7.1、什么是 Express
		官方给出的概念:Express是基于Node.js平台，快速、开放、极简的Web开发框架。
		通俗的理解: Express的作用和Node.js 内置的 http模块类似，是专门用来创建Web服务器的。Express的本质:就是一个npm 上的第三方包，提供了快速创建Web 服务器的便捷方法。Express 的中文官网: http://www.expressjs.com.cn/

7.2、进一步理解Express
思考:不使用Express能否创建Web服务器?
答案:能，使用Node.js 提供的原生http模块即可。

思考:既生瑜何生亮(有了http内置模块，为什么还有用Express) ?
答案: http内置模块用起来很复杂，开发效率低;Express 是基于内置的 http模块进一步封装出来的，能够极大的提高开发效率。

思考: http内置模块与Express是什么关系?
答案:类似于浏览器中Web API和jQuery的关系。后者是基于前者进一步封装出来的。

7.3、Express 能做什么
		对于前端程序员来说，最常见的两种服务器，分别是:
Web 网站服务器:专门对外提供Web 网页资源的服务器。API接口服务器:专门对外提供API接口的服务器。
使用Express，我们可以方便、快速的创建Web网站的服务器或API接口的服务器。

7.4、安装
在项目所处的目录中，运行如下的终端命令，即可将express安装到项目中使用:

```js
 npm i express@4.17.1
```

7.5、Express的基本使用
创建基本的Web服务器

```js
const express = require( 'express ')
const app = express()
app.listen(80，() =>{
    console.log( ' express server running at http://127.0.0.1')
})

//express服务器
//1．导入express
const express = require('express')//2．创建web服务器
const app = express()
//3．调用app.listen(端口号，启动成功后的回调函数)，启动服务器
app.listen(8888, () => {
    console.log("express server running at http://127.0.0.1:8888")
})
```

7.6、监听POST请求
通过app.post()方法，可以监听客户端的POST请求，具体的语法格式如下:

```js
//参数1:客户端请求的URL 地址
//参数2:请求对应的处理函数
//req:请求对象(包含了与请求相关的属性与方法)res:响应对象(包含了与响应相关的属性与方法)
app.post( '请求URL ', function(req,res) {/*处理函数*/})
```

7.7、把内容响应给客户端
通过res.send(方法，可以把处理好的内容，发送给客户端:

```js
app.get('/user',(req,res) => {//向客户端发送JSON对象
	res.send({ name: 'zs',age: 20，gender: '男'})
})
app.post( '/user',(req,res) =>{//向客户端发送文本内容
	res.send( '请求成功')
}
```

7.8、获取URL中携带的查询参数
通过req.query对象，可以访问到客户端通过查询字符串的形式，发送到服务器的参数:

```js
app.get( '/user', (req,res) => {
//req. query默认是一个空对象
//客户端使用?name=zs&age=20这种查询字符串形式，发送到服务器的参数,//可以通过req.query 对象访问到，例如:
	req. query.name req. query.age6console.log(req.query)
}
```



7.9、托管静态资源

7.9.1、express.static()
			express提供了一个非常好用的函数， 叫做express.static0,通过它,我们可以非常方便地创建一个静态资源服务器,
例如，通过如下代码就可以将public目录下的图片、CSS 文件、JavaScript 文件对外开放访问了:

```js
app. use( express . static( 'public' ))
//现在，你就可以访问public目录中的所有文件了:
http://localhost:3000/images/bg.jipg
http://localhost:3000/css/style.css
//注意: Express在指定的静态目录中查找文件，并对外提供资源的访问路径。
htp://localhost/loin.js
//因此，存放静态文件的目录名不会出现在URL中。
```

7.9.2、获取URL中的动态参数:id
通过req.params对象，可以访问到URL中，通过:匹配到的动态参数:

```js
// URL地址中，可以通过:参数名的形式，四配动态参数值
app.get('/user/:id', (req, res) => {
// req. params 默认是一 个空对象
//里面存放着通过:动态四配到的参数值
	console.log( req.params ) 
})
```

7.9.3、托管多个静态资源目录
如果要托管多个静态资源目录，请多次调用express static(函数:

```js
app. use(express . static( 'public'))
app. use(express . static('files'))
```

访问静态资源文件时，express.static0 函数会根据目录的添加顺序查找所需的文件。

7.9.4、挂载路径前缀
如果希望在托管的静态资源访问路径之前，挂载路径前缀，则可以使用如下的方式:

```js
app.use( '/public', express. static('/public' ))
//现在，你就可以通过带有/public前缀地址来访问public目录中的文件了:
http://localhost:3000/public/images/kitten.jpg
http://ocahosot:3000/publics/stsle.css
http://localhost:3000/public/js/app.js
```

7.10、nodemon
		在编写调试Node,js项目的时候，如果修改了项目的代码，则需要频繁的手动close掉，然后再重新启动，非常繁琐。可以使用nodemon (https:/www.npmjs.com/package/nodemon)，它能够监听项目文件的变动，自动重启项目。

```js
//全局安装
npm install -g nodemon
//使用，之前启动是node name.js
nodemon name.js
```



7.11.1、express 路由
		在Express 中，路由指的是客户端的请求与服务器处理函数之间的映射关系。Express 中的路由分3部分组成，分别是请求的类型、请求的URL地址、处理函数，格式如下:

```js
app.METHOD(PATH,HANDLER)//HANDLER为处理函数
```

```js
//Express中的路由的例子
const express=require('express')
const app=express()
//匹配GET请求，且请求URL为/
app.get( '/', function (req,res) {
    res.send( ' Hello world! ')
})
//匹配POST请求，且请求URL为/
app.post( '/' , function (req，res) {
    res.send('Got a PosT rebuest')
})
```

7.11.2、模块化路由

​		为了方便对路由进行模块化的管理，Express 不建议将路由直接挂载到app上，而是推荐将路由抽离为单独的模块。将路由抽离为单独模块的步骤如下:
1.创建路由模块对应的.js文件

2.调用express.Router()函数创建路由对象

3.向路由对象上挂载具体的路由

4.使用module.exports向外共享路由对象

5.使用app.use()函数注册路由模块

7.11.3、创建路由模块

```js
var express = require( 'express')//1．导入express
var router = express.Router()//2．创建路由对象
router.get('/user/list'，function (req,res) { //3．挂载获取用户列表的路由
	res.send('Get user list.')
})
router.post('/user/add',function (req,res)//4．挂载添加用户的路由
    res.send('Add new user.')
})
module.exports = router// 5．向外导出路由对象
```

7.11.4、路由的使用

```js
//注册路由模块
//1．导入路由模块
const userRouter = require( "./router/user.js')
//2．使用app.use()注册路由模块
app.use(userRouter)
```

7.11.5、为路由模块添加前缀
		类似于托管静态资源时，为静态资源统一挂载访问前缀一样，路由模块添加前缀的方式也非常简单:

```js
//1．导入路由模块
const userRouter = require( './ router/user.js ')
//2．使用app.use(）注册路由模块，并添加统一的访问前缀 /api
app.use( '/api', userRouter)
```

7.12、express 中间件

7.12.2、中间件的作用



7.12.3、next函数的作用

next

```js
const express=require('express')
const app=express()
//中间件
const mw=function(req,res,next){
    console.log('这是一个中间件')
    next();//跳转下一个中间件
}
app.use(mw)//注册全局生效的中间件
app.get('/',(req,res)=>{//
    console.log('next()调用了/这个路由')
    res.send('Home-get')
})
app.post('/user',(req,res)=>{
    console.log('next()调用了/user这个路由')
    res.send('user-post')
})
app.listen(8888,()=>{
    console.log('service running at 127.0.0.1:8888')
})
```

7.12.4 、简化全局中间件形式

```js
app.use(mw)//注册全局生效的中间件
app.use(function (req,res,next){
    console.log('这是一个中间件函数')
    next();//跳转下一个中间件
})
```

7.12.5、局部生效的中间件
不使用app.use()定义的中间件，叫做局部生效的中间件，示例代码如下:

```js
//定义中间件还数mw1
const mw1 = function(req, res, next) {
    console.log( '这是中间件函数')
    next()
}//mw1这个中间件只在"当前路由中生效"，这种用法属于"局部生效的中间件"
app.get('/',mw1,mw2,...,function(req. res){//or ,[mw1,mw2,...],
    res.send('Home page.')
})
//mw1这个中间件不会影响下面这个路由↓↓↓
app.get('/user',function(req，res) { 
    res.send('User page.')
}
```

7.12.6、使用中间件注意事项：

1.需在路由之前注册中间件（错误级别中间需注册在所有路由之后）

2.前端发来请求，，可连续调用多个中间件处理

3.中间件执行完成，勿忘 next() 函数

4.防止code逻辑混乱，调用next()后不再写额外code

5.连续调用多个中间件，他们共享了req和res对象

7.12.7、中间件的分类
		为了方便大家理解和记忆中间件的使用，Express官方把常见的中间件用法，分成了5大类，分别是:
1.应用级别的中间件

2.路由级别的中间件

3.错误级别的中间件

4.Express 内置的中间件

5.第三方的中间件

7.12.8、错误级别的中间件

7.12.9、Express内置的中间件
		自Express 4.16.0版本开始，Express 内置了3个常用的中间件，极大的提高了Express 项目的开发效率和体验:

1.express.static 快速托管静态资源的内置中间件，例如:HTML文件、图片、CSS样式等（无兼容性)
2.express.json解析JSON格式的请求体数据（有兼容性，仅在4.16.0+版本中可用)
3.express.urlencoded解析URL-encoded格式的请求体数据（有兼容性，仅在4.16.0+版本中可用)

```js
//配置解析 application/json格式数据的内置中间件
app.use(express.json())
//配置解析 application/x-ww-form-urlencoded格式数据的内置中间件
app.use( express.urlencoded({extended: false }))
```

7.12.10、第三方的中间件





7.13、express API 编写

7.13.1、先创建基本express服务器

```js
const express=require('express')//导入express模块
const app=express()//创建express服务器实例
app.listen(8888,()=>{//启动服务器
    console.log(service running at http://127.0.0.1:8888)
})
```

7.13.2、创建API路由模块

```js
//apiRouter.js
const express=require('express')
const router=express.Router()//导入路由模块

//bind your router here...

module.exports=router//导出路由

//----------------------------

//app.js
const express = require('express') //导入express模块
const app = express() //创建express服务器实例
const apiRouter = require('./file/router/apiRouter') //导入路由
app.use('/api', apiRouter) // 注册路由
app.listen(8888, () => { //启动服务器
    console.log('service running at http://127.0.0.1:8888')
})
```

7.13.3、API编写GET接口

```js
//app.js
const express = require('express') //导入express模块
const app = express() //创建express服务器实例
const apiRouter = require('./file/router/apiRouter') //导入路由
app.use('/api', apiRouter) // 注册路由
app.listen(8888, () => { //启动服务器
    console.log('service running at http://127.0.0.1:8888')
})

//apiRouter.js
const express=require('express')
const router=express.Router()
router.get('/get', (req,res) => {//1．获取到客户端通过查询字符串，发送到服务器的数据
const query = req.query
//2．调用res.send()方法，把数据响应给客户端
res.send({
    status: 0,//状态，0表示成功，1表示失败
    msg: 'GET请求成功!',//状态描述
    data: query,//需要响应给客户端的具体数据
	})
})

//结果  http://127.0.0.1:8888/api/get?name='topsky'&age=18
{
    "status": 0,
    "msg": "GET请求成功!",
     "data": {
        "name": "'topsky'",
         "age": "18"
    }
}
```

7.13.4、API编写POST接口

```js{
//app.js

const express = require('express') //导入express模块
const app = express() //创建express服务器实例
app.use(express.urlencoded({ extended: false })) //post配置解析表单数据的中间件
const apiRouter = require('./file/router/apiRouter') // 导入路由
app.use('/api', apiRouter) //前缀+注册路由
app.listen(8888, () => { //启动服务器
    console.log('service running at http://127.0.0.1:8888')
})

//apiRouter.js
router.post('/post', (req, res) => { //1．获取到客户端通过查询字符串，发送到服务器的数据
    const body = req.body //通过req.body 获取请求包含的 url-encoded 格式的数据
        //2．调用res.send()方法，把数据响应给客户端
    res.send({
        status: 0, //状态，0表示成功，1表示失败
        msg: 'POST请求成功!', //状态描述
        data: body, //需要响应给客户端的具体数据
    })
})

//结果  http: //127.0.0.1:8888/api/post 参数：name=gjkklj&age=5
{
    "status": 0,
    "msg": "POST请求成功!",
    "data": {
        "name": "gjkklj",
        "age": "5"
    }
}
```

7.13.5.1、CORS跨域资源共享-----解决get 和post 跨域问题
		刚才编写的GET和POST接口，存在一个很严重的问题:不支持跨域请求。解决接口跨域问题的方案主要有两种:
1、CORS(主流的解决方案，推荐使用)
2、JSONP(有缺陷的解决方案:只支持GET请求)

7.13.5.2、使用cors中间件解决跨域问题
		cors 是Express的一个第三方中间件。通过安装和配置cors中间件，可以很方便地解决跨域问题。使用步骤分为如下3步:

```js
npm install cors//1、安装中间件
const cors = require('cors')//2、导入中间件
app.use(cors())//3、在路由之前调用app.use(cors())配置中间件
```

7.13.5.3、CORS的注意事项
		CORS主要在服务器端进行配置。客户端浏览器无须做任何额外的配置，即可请求开启了CORS的接口。CORS在浏览器中有兼容性。只有支持XMLHttpRequest Level2的浏览器，才能正常访问开启了CORS的服
务端接口(例如:IE10+、Chrome4+、FireFox3.5+)。

7.13.5.4、CORS响应头部– Access-Control-Allow-Origin
		响应头部中可以携带一个Access-Control-Allow-Origin字段，其语法如下:

```js
//Access-Control-Allow-origin: <origin> |* 
res.setHeader('Access-Control-Allow-origin','*')//通配，应许任何域的请求
```

​		其中，origin 参数的值指定了允许访问该资源的外域URL。例如，下面的字段值将只允许来自http://itcast.cn的请求:

```js
res.setHeader('Access-Control-Allow-origin','hetp:llitcast.cn')
```

 7.13.5.5、CORS 响应头部- Access-Control-Allow-Headers
		默认情况下，CORS仅支持客户端向服务器发送如下的9个请求头:
Accept、Accept-Language、Content-Language、DPR、Downlink、Save-Data、Viewport-Width、Width ,Content-Type (值仅限于text/plain、multipart/form-data、application/x-www-form-urlencoded 三者之一)如果客户端向服务器发送了额外的请求头信息，则需要在服务器端，通过Access-Control-Allow-Headers 对额外的请求头进行声明，否则这次请求会失败!

```js
//允许客户端额外向服务器发送Content-Type 请求头和X-Custom-Header请求头
//注意:多个请求头之间使用英文的逗号进行分割
res.setHeader('Access-Control-Allow-Headers','Content-Type，X-Custom-Header')
```

7.13.5.6、CORS 响应头部- Access-Control-Allow-Methods
		默认情况下，CORS仅支持客户端发起 GET、POST、HEAD请求。
如果客户端希望通过PUT、DELETE等方式请求服务器的资源，则需要在服务器端，通过Access-Control-Alow-Methods来指明实际请求所允许使用的HTTP方法。
示例代码如下:

```js
//只允许POST、GET、DELETE、HEAD请求方法
res.setHeader('Access-Control-Allow-Methods','POST,GET,DELETE,HEAD')//允许所有的 HTTP请求方法
res.setHeader( ' Access-Control-Allow-Methods ', '*')
```

7.13.5.7、简单请求
		同时满足以下两大条件的请求，就属于简单请求:请求方式:GET、POST、HEAD三者之一
		HTTP头部信息不超过以下几种字段:无自定义头部字段、Accept、Accept-Language、Content-Language、DPR.Downlink、Save-Data、Viewport-Width、Width 、Content-Type (只有三个值application/x-www-form-
urlencoded、multipart/form-data、text/plain)

7.13.5.8、预检请求
		

只要符合以下任何一个条件的请求，都需要进行预检请求:

1、请求方式为GET、POST、HEAD之外的请求Method类型

2、请求头中包含自定义头部字段

3、向服务器发送了  application / json  格式的数据
		在浏览器与服务器正式通信之前，浏览器会先发送OPTION请求进行预检，以获知服务器是否允许该实际请求，所以这一次的OPTION请求称为“预检请求”。服务器成功响应预检请求后，才会发送真正的请求，并且携带真实数据。



7.13.5.9、简单请求和预检请求的区别

简单请求的特点:客户端与服务器之间只会发生一次请求。
预检请求的特点︰客户端与服务器之间会发生两次请求，OPTION预检请求成功之后，才会发起真正的请求。

7.13.5.10、JSONP 接口

1.回顾JSONP的概念与特点
		概念:浏览器端通过<script>标签的 src属性，请求服务器上的数据，同时，服务器返回一个函数的调用。这种请求数据的方式叫做JSONP。
特点:
		JSONP不属于真正的 Ajax请求，因为它没有使用XMLHttpRequest这个对象。JSONP仅支持GET请求，不支持POST、PUT、DELETE 等请求。

2.创建JSONP接口的注意事项
		如果项目中已经配置了CORS跨域资源共享，为了防止冲突，必须在配置CORS中间件之前声明JSONP的接口。否则JSONP接口会被处理成开启了CORS的接口。示例代码如下:

```js
//优先创建JSONP接口【这个接口不会被处理成CORS接口】
app.get( '/api/jsonp',(req,res) =>{ 
//再配置CORS中间件【后续的所有接口，都会被处理成CORS 接口】
app.use(cors())
//这是一个开启了CORS的接口
app.get('/api/get", (req,res) =>{ })
```

3.实现JSONP接口的步骤

1.获取客户端发送过来的回调函数的名字
2.得到要通过JSONP形式发送给客户端的数据
3.根据前两步得到的数据，拼接出一个函数调用的字符串
4.把上一步拼接得到的字符串，响应给客户端的<script>标签进行解析执行

4.实现JSONP接口的具体代码

```js
app.get("/api/jsonp", (req, res) => {
    const funcName = req.query.callback //1．获取客户端发送过来的回调函数的名字
    const data = { name: 'zs', age: 22 } //2．得到要通过JSONP形式发送给客户端的数据5
    const scriptStr = `${funcName}(${JSON.stringify(data)})` //3．根据前两步得到的数据，拼接出一个函数调用的字符串
    res.send(scriptStr) //4．把上一步拼接得到的字符串，响应给客户端的<script>标签进行解析执行
})
```





8、数据库 database

​		用来组织、存储和管理数据的仓库。用于可以对数据进行曾新、查询、更新、删除等操作。



8.1、数据库分类

关系型数据库：MySQL、Oracle*、SQL Server*(ms)

非关系型数据库：MongoDB

8.2、数据库存储结构

​		传统数据库中，数据的组织结构分为数据库database、数据表table、数据行row、字段filed四大部分组成。

8.3、了解需要安装哪些MySQL相关的软件
		对于开发人员来说，只需要安装MySQL Server和MySQL Workbench这两个软件，就能满足开发的需要了。

MySQL Server: 专门用来提供数据存储和服务的软件。
MySQL Workbench: 可视化的MySQL管理工具，通过它，可以方便的操作存储在MySQL Server中的数据。

8.4、使用MySQL Workbench 管理数据库

int 整数

varchar(len)字符串
tinyint(1)布尔值

特殊标识：

PK (Primary Key)主键、唯一标识
NN (Not Null)值不允许为空
UQ (Unique)值唯一
Al (Auto Increment)值自动增长

8.5、使用SQL管理数据库
1.什么是SQL
		SQL (英文全称: Structured Query Language)是结构化查询语言,专门用来访问和处理数据库的编程语言。能够让
我们以编程的形式，操作数据库里面的数据。
三个关键点:
①SQL是一门数据库编程语言
②使用SQL语言编写出来的代码，叫做SQL语句
③SQL语言只能在关系型数据库中使用(例如MySQL. Oracle、 SQL Server)。非关系型数据库(例如Mongodb)
不支持SQL语言

8.6、使用SQL管理数据库

8.6.1、SQL能做什么
①从数据库中查询数据
②向数据库中插入新的数据
③更新数据库中的数据
④从数据库删除数据
⑤可以创建新数据库
⑥可在数据库中创建新表
⑦可在数据库中创建存储过程、 视图
⑧etc...

8.6.2、SQL的学习目标（SQL语句不分大小写）
重点掌握如何使用SQL从数据表中: 
查询数据(select) 、插入数据(insert into)、更新数据(update) 、删除数据(delete)
额外需要掌握的4种SQL语法:
where条件、and 和or运算符、order by排序、count(*) 函数

```sql
-- 演示
SELECT * FROM my_db_01.users;
-- usersusersselect username,password from my_db_01.users;
-- insert INTO users(username,password) values('shgf','rytfgh33')
-- update users set username='8888888' where id=1
-- update users set password='admin123',status='1' where id=3 
-- delete  from users where id=6
-- select * from users where status=0 and id<=3 
-- select * from users where status=0 or id =2
-- select * from users order by status ASC -- 升序
-- select * from users order by status DESC -- 降序
-- select * from users order by status desc, username asc
-- select count(*) from users where status=0
-- select count(*) as total from users where status=0
-- select username as uname ,password as upwd from users
```

8.6.3、SELECT 语句  查询

```sql
-- 查找所有* or 列名(字段)的数据
SELECT * FROM tablename
```

8.6.4、INSERT  INTO 语句  插入

```sql
-- 解读：向指定表中，插入如下数据，列的值通过 values----指定
-- 注意：列和值----对应，多个列和多个值之间，使用英文,逗号分隔
INSERT INTO table_name (列1,列2,...) VALUES (值1,值2,...)
```

8.6.5、UPDATE 语句  更新

```sql
-- update
-- set 指定列对应的新值
-- where 指定更新的条件
UPDATE table_name SET 列名1=新值1,列名2=新值2,... WHERE  列名=某值
```

8.6.5、DELETE 语句 删除

```sql
delete  from users where id=6 -- 要加条件or会删除整张表
```

8.6.6、WHERE 语句 条件
		WHERE子句用于限定选择的标准。在SELECT、UPDATE、DELETE 语句中，皆可使用WHERE子句来限定选择的标准。

```sql
-- 查询语句中的WHERE 条件
SELECT 列名称 FROM 表名称 WHERE 列 运算符 值
-- 更新语句中的 WHERE 条件
UPDATE 表名称 SET 列=新值 WHERE 列 运算符 值
-- 删除语句中的 WHERE 条件
DELETE FROM 表名称 WHERE 列 运算符 值
```

8.6.7、SQL的AND和OR运算符
1.语法
AND和OR可在WHERE子语句中把两个或多个条件结合起来。
AND表示必须同时满足多个条件,相当于JavaScript 中的&&运算符，例如if(a!== 10 &&a!== 20)
OR表示只要满足任意一个条件即可, 相当于JavaScript 中的II运算符，例如if(a!== 10|la!== 20)



8.6.8、升序、降序

```sql
select * from users order by status ASC -- 升序
select * from users order by status DESC -- 降序
select * from users order by status desc, username asc -- 按照status 和用户名首字母排序
```

8.6.9、COUNT(*) 查询数量

```sql
select count(*) from users where status=0
```

8.6.10、AS 为列设置别名

```sql
select count(*) as total from users where status=0
select username as uname ,password as upwd from users
```





9、身份验证

 Session认证机制
1. HTTP协议的无状态性
		了解HTTP协议的无状态性是进一步学习Session认证机制的必要前提。
	HTTP协议的无状态性，指的是客户端的每次HTTP请求都是独立的，连续多个请求之间没有直接的关系，服务器不会主动保留每次HTTP请求的状态。

2.如何打破HTTP无状态的限制

会员卡身份验证方式，在web开发中的术语称 Cookie

3.什么是Cookie
		Cookie是存储在用户浏览器中的- -段不超过4 KB的字符串。它由一个名称(Name)、一个值(Value) 和其它几个用于控制Cookie有效期、安全性、使用范围的可选属性组成。不同域名下的Cookie各自独立,每当客户端发起请求时,，会自动把当前域名下所有未过期的Cookie一同发送到服务器。
Cookie的几大特性:
①自动发送
②域名独立
③过期时限
④4KB限制

4. Cookie在身份认证中的作用

  		客户端第一-次请求服务器的时候，服务器通过响应头的形式，向客户端发送一个身份认证的 Cookie,客户端会自动
  将Cookie保存在浏览器中。
  		随后，当客户端浏览器每次请求服务器的时候，浏览器会自动将身份认证相关的Cookie,通过请求头的形式发送给服务器，服务器即可验明客户端的身份。
5. Cookie不具有安全性

  	由于Cookie是存储在浏览器中的，而且浏览器也提供了读写Cookie的API,因此Cookie很容易被伪造，不具有安全
  性。因此不建议服务器将重要的隐私数据，通过Cookie的形式发送给浏览器。

注意:千万不要使用Cookie存储重要且隐私的数据!比如用户的身份信息、密码等。

6.提高身份验证的安全性

使用 会员卡+刷卡验证的设计理念，就是 Session 认证机制精髓。

7.Session工作原理：



8.在express 使用 Session 认证

配置 express-session 中间件，安装成功后，需用app.use()来注册session中间件：

```js
var session = require('express-session')//导入 session 中间件
//配置 session 中间件
app.use(session({
    secret:'keyboard cat',//secret 属性的值可为任意字符串
    resave:false,//
    saveUninitialized:true,
}))
```

9.向session中存数据

当配置好express-session后，通过req.session来访问session对象：

```js
app.post('/api/login',(req,res)=>{
	//判断当前用户提交的登录信息是否正确
	if(req.body.username!== 'admin' || req.body.password !== '123456') return res.send({ status:1,msg:'登陆失败！'
	})
    req.session.user=req.body//将用户信息存入session中
    req.session.islogin=true//将用户的登录状态 存储到session中
    res.send({ status:0,msg:'登陆成功'})
})
```

10.从session获取数据    req.session 对象

```js
//获取用户名称
app.get('/api/username',(req,res)=>{
    //判断用户是否登录
    if(!req.session.islogin){
        return res.send({ status:1,msg:'fail'})
    }
    res.send({status:0,msg:'success',username:req.session.user.username})
})
```

11.清空session信息 req.session.destroy()//不会清空所有用户的

```js
//退出登录
app.post('/api/logout',(req,res)=>{
    req.session.destroy()
    res.send({ status:0,msg:'退出登录成功',})
})
```

9.12、JWT (JSON Web Token) 跨域认证解决方案



9.12.2、JWT 组成

JWT通常有三部分组成，分别是 Header(头部)、Payload(有效荷载)、Signature(签名)，三者之间用“.”分隔：

```js
Header.Payload.Signature
```

9.12.3、JWT的三个部分各自代表的含义

​		JWT的三个组成部分,从前到后分别是Header、Payload、 Signature.
其中:
●Payload 部分才是真正的用户信息，它是用户信息经过加密之后生成的字符串。
●Header 和Signature是安全性相关的部分，只是为了保证Token的安全性。



9.12.4、JWT的使用方式

​		客户端收到服务器返回的JWT之后,通常会将它储存在localStorage或sessionStorage中。此后，客户端每次与服务器通信，都要带上这个JWT的字符串，从而进行身份认证。推荐的做法是把JWT放在HTTP
请求头的Authorization字段中，格式如下:

```js
Authorization: Bearer <token> 
```



9.12.5、在Express中使用JWT

1.安装JWT相关的包
运行如下命令,安装如下两个JWT相关的包:

```js
npm install j sonwebtoken express- jwt
```

其中:
●jsonwebtoken用于生成JWT字符串
●express-jwt 用于将JWT字符串解析还原成JSON对象

2.导入JWT相关的包

​		使用require()函数,分别导入JWT相关的两个包:

```js
//1.导入用于生成JWT字符串的包
const jwt = require( 'jsonwebtoken')
//2.导入用于将客户端发送过来的JWT 字符串，解析还原成JSON 对象的包
const expressJWT = require( 'express-jwt')
```

3.定义secret密钥

​		为了保证JWT字符串的安全性,防止JWT字符串在网络传输过程中被别人破解，我们需要专]定义-一个用于加密和解密
的secret密钥: 
①当生成JWT字符串的时候，需要使用secret密钥对用户的信息进行加密,最终得到加密好的JWT字符串
②当把JWT字符串解析还原成JSON对象的时候，需要使用secret密钥进行解密

```js
//3. secret 密钥的本质:就是一 个字符串
const secretKey = 'itheima No1 ^_^'
```

4.在登录成功后生成JWT字符串
		调用jsonwebtoken包提供的sign()方法,将用户的信息加密成JWT字符串,响应给客户端:

```js
//登录接口
app. post( '/api/login' , function(req, res) {
// ... 省略登录失败情况下的代码
//用户登录成功之后，生成JWT字符串，通过token属性响应给客户端
    res.send( {
		status: 200,
		message:'登录成功!'
		//调用jwt,sign() 生成JWT字符串，三个参数分别是:用户信息对象、加密密钥、配置对象
		token: jwt.sign({ username: userinfo.username }, secretKey, { expiresIn: '30s' }
	})
})
```

5.将JWT字符串还原为JSON对象
		客户端每次在访问那些有权限接的时候，都需要主动通过请求头中的Authorization字段，将Token字符串发
送到服务器进行身份认证。
		此时，服务器可以通过express-jwt这个中间件，自动将客户端发送过来的Token解析还原成JSON对象:

```js
//使用app.use() 来注册中间件
// expressJWT({ secret: secretKey })就是用来解析Token 的中间件
// .unless({ path: [/^\/api\//] })用来指定哪些接不需要访问权限
app.use(expressJWT({ secret: secretKey }).unless({ path: [/^\/api\//] }))
```

6.使用req.user获取用户信息
当express-jwt这个中间件配置成功之后，即可在那些有权限的接口中，使用req.user对象,来访问从JWT字符串
中解析出来的用户信息了,示例代码如下:

```js
//这是一个有权限的API接口
app.get('/admin/getinfo', function(req, res) {
    console. log(req.user )
    res. send({ 
        status: 200,
        message: "获取用户信息成功!",
        data: req.user
	})
})
```

7.捕获解析JWT失败后产生的错误
		当使用express-jwt解析Token字符串时，如果客户端发送过来的Token字符串过期或不合法，会产生一个解析失败的错误，影响项目的正常运行。我们可以通过Express的错误中间件,捕获这个错误并进行相关的处理，示例代码如下: .

```js
app.use(Cerr, req, res, next) => {//token 解析失败导致的错误
	if(err .name === 'Unauthor izedError') {
        return res . send({ status: 401, message: '无效的token' 	})
	//其它原因导致的错误
	res.send({ status: 500,message: '未知错误' })
})
```



10、项目

大事件项目文档：http://www.escook.cn:8088/







BH-Node.js 笔记

[Nodejs 基础 | BruceBlog (gitee.io)](https://brucecai55520.gitee.io/bruceblog/notes/nodejs/node.html#初识-nodejs)

