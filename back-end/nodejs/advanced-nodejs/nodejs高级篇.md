# Nodejs高级编

2023年3月24日13:28:43

## 单线程实现高并发

nodejs通过异步IO、事件循坏，再加上事件驱动的架构，回调通知事件，实现非阻塞调用和并发。

nodejs的主线程是单线程，因为nodejs是基于v8来执行的，且v8只有一个主线程来执行nodejs代码，而非所有线程都是单线程。

## 单线程的优点与缺点

优点：nodejs单线程可以做到了之前多线程可以做的事件，提高了安全性，也减少了线程之间切换时CPU开销和内存同步开销等问题。

缺点：处理CPU密集任务时，单线程会过多地占用CPU，后面的逻辑必须等待，单线程也无法体现出多核CPU的优势，这个后续的nodejs版本给出了解决方案，如集群。

实例：02-single-thread.js

## 应用场景

nodejs更加适合IO密集型的高并发请求，不适合处理大量的业务逻辑，因为nodejs的计算能力并不是它的特设。
当然，nodejs不仅仅适用于后端服务，它可以运用于前端，如前端工程化问题。

## 实现API服务 express + ts

新建03-api-server文件夹，初始化npm包管理工具，获的package.json

```bash
# npm 初始化
npm init -y
# ts (可选)
npm i typescript -g
```

如使用了ts，需要初始化ts的配置，获得tsconfig.json文件。
为了能让ts直接运行，可以使用ts-node。

```bash
# ts初始化
tsc --init
# ts-node
npm i ts-node  -D
# 运行ts代码
ts-node pathname
```

## 全局对象 global

浏览器的全局对象是window，而nodejs的全局对象是global，是全局变量的宿主。
nodejs常见全局变量，这些变量已经自动帮我们导入js执行文件中。
实例：04-node-global.js

```bash
# 返回正在执行脚本文件的绝对路径
__filename
# 返回正在执行脚本所在目录
__dirname
# 执行顺序与事件循环间的关系
timer类函数
# 提供与当前进程互动的接口
process
# 实现模块的加载
require
# 处理导出模块
module、exports
```

## 全局变量之 process

process查询进程信息与操作
实例：05-process.js

## 核心模块 path

path常用的api
实例：06-path.js

```js
// 获取路径中基础名称
basename()
// 获取路径中目录名称
dirname()
// 获取路径中扩展名称
extname()
// 判断路径是否为绝对路径
isAbsolute()
// 拼接多个路径片段
join()
// 返回绝对路径
resolve()
// 解析路径
parse()
// 序列化路径
format()
// 规范化路径
normalize()
```

## 全局变量之 Buffer

nodejs中Buffer是一片内存空间，
可在nodejs环境下操作二进制数据IO，
不占据v8堆内存大小的内存空间，
其内存由node控制，由v8的GC回收，
一般配合stream流使用，充当数据局缓冲区。

目的：Buffer是一个存储中间变量，为了方便CPU在进行数据存取操作时，有一个存储中间变量。

图解：

```
data creator <--- stream ---> data consumer
      |                               ^
      |________ 缓冲区 Buffer _________|
```

Buffer实例方法

```js
// 使用数据填充buffer
fill()
// 向buffer中写入数据
write()
// 从 buffer中提取数据
toString()
// 截取buffer
slice()
// 在 buffer中查找数据
indexOf()
// 拷贝 buffer 中的数据
copy()
```

常用静态方法

```js
concat()
isBuffer()
```

## 核心模块 fs

FS是nodejs内置核心模块，提供文件系统操作的API。
权限位、标识符、操作符
实例：08-fs
常见目录操作api

```
access:判断文件或目录是否具有操作权限
stat:获取目录及文件信息
mkdir:创建目录
rmdir:删除目录
readdir: 读取目录中内容
unlink: 删除指定文件
```

## 模块化历程

前端开发为什么需要模块化?
1.命名冲突和污染
2.代码冗余，无效请求多
3.文件间的依赖关系复杂
4.项目难以维护不方便复用

模块？
模块就是小而精且利用维护的代码片段，具有低耦合的特点。

如何实现模块化？
利用函数、对象、自执行函数实现分块。

常见模块化规范？
Commonjs规范：module.exports/require。Commonjs规定每个js文件都是一个模块，而每一个模块都是自己的作用域，这个作用域里存在变量、函数、类，这些是私有的，外部不可直接使用。模块被同步加载，不适用于浏览器。
AMD规范：异步加载模块，define/require。
CMD规范：整合Commonjs和AMD的特点的浏览器异步规范。
ES modules规范：export/import

## CommonJS规范

CommonJS规范起初是为了弥补JS语言模块化缺陷。主要运用于Node.js，由于CommonJS是同步加载模块，故其不能在浏览器中使用。
定义模块--->引入模块--->模块标识
实例：09-module

module属性

任意js文件就是一个模块，可以直接使用module属性
id:返回模块标识符，一般是一个绝对路径
filename:返回文件模块的绝对路径
loaded:返回布尔值，表示模块是否完成加载
parent:返回对象存放调用当前模块的模块
children:返回数组，存放当前模块调用的其它模块
exports:返回当前模块需要暴露的内容
paths:返回数组，存放不同目录下的node_modules位置

module.exports和exports都能导出模块数据，exports是指向module.exports的内存地址，不能给exports直接赋值，否则exports会变成局部变量，就能导出数据。

```
                                          -------------
                                          |           |
module.exports -------------------------> |  内存地址  |
                                          |           |
                                       -- --------------
                               --
                       --
               --
exports --^------------------ x -------->  其它数据赋值
```

require属性

基本功能是读入并且执行一个模块文件

```js
resolve() // 返回模块文件绝对路径
extensions() // 依据不同后缀名执行解析操作
main() // 返回主模块对象
```

## 模块分类及加载流程

1.模块分类

核心模块：内置模块，Node源码编译时写入到二进制文件中，快。
文件模块：自定义包及第三方模块，代码运行时，动态加载。

2.加载流程

路径分析：依据标识符确定模块位置（路径/非路径）
文件定位：确定目标模块中具体的文件及文件类型
编译执行：采用对应的方式完成文件的编译执行

2.1 文件定位具体流程：

项目下存在m1.js模块，导入时使用require('m1’)
m1.js -> m1.json -> m1.node
查找package.json文件，使用JSON.parse()解析
main.js -> main.json -> main.node
将index做为目标模块中的具体文件名称

2.2 编译执行具体流程：

将某个具体类型的文件按照相应的方式进行编译和执行
创建新对象,按路径载入,完成编译执行

2.2.1 js编译执行
使用fs模块同步读入目标文件内容
对内容进行语法包装,生成可执行JS函数
调用函数时传入exports、module、require等属性值

2.2.2 json编译执行
将读取到的内容通过JSON.parse()进行解析

3.缓存优化原则？
优先使用缓存模块，提高模块加载速度
当前模块不存在，则经历一次完整加载流程
模块加载完成后，使用路径做为索引进行缓存

## 模块加载源码分析

2023年3月25日20:11:37 p33
[Nodejs全栈开发之nodejs 高级编程](https://www.bilibili.com/video/BV1sA41137qw/?p=33&spm_id_from=pageDriver&vd_source=f72f2ba9c041e7d811515312b7d7456a)

## 核心模块之 stream

流（Stream）就是处理流式数据的抽象接口。

用流处理的数据，不管在空间，还是在时间，都有质的提升。
实例：11-stream
流的一种体现：

```bash
# linux 过滤获取*.js文件
ls|grep *.js
```

流处理数据的优势？

时间效率：流的分段处理可以同时操作多个数据chunk
空间效率：同一时间流无须占据大内存空间
使用方便：流配合管理,扩展程序变得简单

Node.js中流的分类

* Readable，可读流，能够实现数据的读取
* Writeable，可写流，能够实现数据的写操作
* Duplex，双工流，既可读又可写
* Tranform，转换流，可读可写，还能实现数据转换

Node.js流特点

- Stream模块实现了四个具体的抽象
- 所有流都继承自EventEmitter

### Readable 可读流

可读流，生产供程序消费数据的流。

```js
const fs = require('fs')
const rs = fs.createReadStream('./text1.txt') // fs以实现Readable
rs.pipe(process.stdout)
```

1.如何自定义可读流？

- 继承 stream里的 Readable，将数据存入缓冲区
- 重写_read方法调用push产出数据

```js
const {Readable} = require('stream')
let source = ['lg', 'zce', 'syy'] // 模拟数

class MyReadable extends Readable {
    constructor(source) {
        super();
        this.source = source
    }

    _read() {
        let data = this.source.shift() || null
        this.push(data)
    }
}

// 消费数据
let mra = new MyReadable(source)
mra.on('readable', () => {
    let data = null
    while ((data = mra.read()) !== null) {
        console.log(data.toString())
    }
})

mra.on('data', (data) => {
    console.log(data.toString())
})
```

2.自定义可读流问题？

- 底层数据读取完成之后如何处理?
- 消费者如何获取可读流中的数据?

<img src='https://img-blog.csdnimg.cn/56e597b80b234f0cb9f24cb325ecaebc.png'
style='max-width:800px;border-radius:5px;display:block;margin:10px auto;'></img>

```js
// 文件可读流创建和消费
// 当start: 0, highWaterMark: 4 ; read(1)；时
// 解释，buffer每次读取4（highWaterMark）个字节写入buffer缓存区，而消费对象每次读取1个字节，
// 当消费对象消费完缓存区的数据时，缓存区会触发生产数据的_read()调用相应的push，
// 从底层数据再获取4个字节的数据到缓存区，供消费对象消费，如此反复，直到底层数据为null。
data                       Buffer 缓存区                   消费数据
_0_                          __0__ --------- read(1)/1 -----> 0
_1_                            1
_2_ ---- highWaterMark/1 ----> 2
_3_                            3
4
5
6
7
8
9
```


### Writeable 可写流
自定义可写流
```js
// const {Writable} = require('stream')

class MyWritable extends Writable{
    constructor() {
        super();
    }
    _write(chunk,en,done){
        process.stdout.write(chunk.toString())
        process.nextTick(done)
    }
}

let mwa=new MyWritable()

mwa.write('拉钩教育','utf-8',()=>console.log('end'))
```
可写流事件
.pipe事件:可读流调用pipe()方法时触发
.unpipe事件:可读流调用unpipe()方法时触发


```js
// write 执行流程
// 01 第一次调用write方法是将数据直接写入文件中。
// 02 第二次调用write方法就是将数据写入至缓存中。
// 03 生产速度 和 消费速度 不等，一般生产速度比消费速度快跟多。
// 04 如果 flag 为 false 并不能表示前数据不能被执行写入，说明了数据生产与消费的状态，我们需要告知该数据的生产者，说明当前消费速度跟不上生产速度了，这时，我们会将可读流的模块修改为暂停模式。
// 05 生产数据暂停，消费者会慢慢地消耗它内部缓存中的数据，直到可以再次被执行写入操作。
// 06 当缓冲区可以继续写入数据时如何让生产者知晓？drain事件。
|-------|                           |--------------------------------|
|       |                           |        可写流                   |
|       |                           |  |--------------------------|  |
|       |-------- second+ ------>   |  | 缓存区(上限16KB)           |  |
|       |                           |  | 上限改为3(highWaterMark)   |  |
| data  |                           |  |---------------------------|  |
| 生产者 |——                         |---------------------------------|
|       |  ——                                     |
|       |    first                                |
|       |         ——                              |
|       |            ——                           v
|       |                ——         |------------------------|
|-------|                    ——>    |          文件           |
                                    |------------------------|
```

### 双工流和转换流（Duplex 和 Transform）
自定义转换流

·继承Transform类
·重写_transform方法,调用push和callback
·重写_flush方法,处理剩余数据

Duplex 和 Transform 都是一个双工流，都可读可写，但是Duplex可读的数据和可写的数据不能相互通信，Transform流可以，且Transform流转换时可自定义操作。

```js
        do something(Transform)
               |
               v
数据 ---> Buffer 缓存区 ---> 消费
```

### 背压机制
背压机制
数据读写可能存在生产者的速度元大于消费者的速度，会出现产能过剩，而Readable维护着一个队列，在它不能消费这些数据，
就会尝试把当前不能消费的数据缓存到队列里，但是当缓存队列的达到上限时，可能出现内存溢出、GC频繁调用、其他进程变慢。
所谓背压机制，就是解决以上问题，让生产者与消费者之间的数据平滑流动。
实例：11-stream/10-back-pressure.js

<img src="https://img-blog.csdnimg.cn/c51f0e573719450e9426a6524972ca6b.png" style="max-width: 600px;border-radius: 5px;display:block;margin:10px auto;">

<img src="https://img-blog.csdnimg.cn/72fb86c6a9794166ab919fb9436ebb06.png" style="max-width: 600px;border-radius: 5px;display:block;margin:10px auto;">


```js
pool ---4--- pause / resume ---------- Buffer -----------1-> 消费
                ^       ^                                |
                |--------------4>=1?false:true---------- <
                        |             |
                        |-<-- drain --<
```

## 链表
链表结构是一个存储数据的结构，文件可写流read()工作时有些被写入的数据，需要在缓存区中排队等候，而且链表遵循先进先出的规则。

为了保存这些排队的数据，新版的nodejs中，采用了链表结构存储数据。

什么不使用数组而采用链表呢？
相对于链表，数组存储数据的长度具有上限，存在塌陷问题，数组在插入或删除时，都会改变其他元素的位置，又因为js数组被实现成一个对象，使用效率稍低一些。

链表？
链表是一系列节点的集合，而每个节点都具有指向下一个节点的属性，将这些下一个节点的引用也就形成了链。

链表的分类？
双向链表
单向链表
循环链表

### 单向链表
```js
// 单向链表结构图解（足够read()使用）
head ----> node1(element,prev,next) ----> node2(element,prev,next) ----> node3(element,prev,next) ----> null
```


## 网络层次模型
ISO七层模型
- 应用层：用户与网络的接口
- 表示层：数据加密、转换、压缩
- 会话层：控制网络连接建立与终止
- 传输层：控制数据传输可靠性
- 网络层：确定目标网络IP
- 数据链路层：确定目标主机（局域网ARP寻址）
- 物理层：各种物理设备和标准

TCPIP五层模型
- 应用层：应用层、表示层、会话层的集合
- 传输层：控制数据传输可靠性（TCP、UDP）
- 网络层：确定目标网络IP
- 数据链路层：确定目标主机（局域网ARP寻址）
- 物理层：各种物理设备和标准

### 数据封装与解封装
- 应用层：data  v
- 传输层：{[目标端口],[源端口],[data]}  v
- 网络层：{[目标IP],[源IP],[目标端口],[源端口],[data]}  v
- 数据链路层：{[目标Mac],[源Mac],[目标IP],[源IP],[目标端口],[源端口],[data]}    v
- 物理层：将封装好的data，变成高低电压，也就是二进制(10101001010100101010100101)，在通过传输介质传输到目标主机，然后目标主机反向解析封装的data（物理层--->应用层）



## TCP
TCP三次握手与四次挥手

<center><img src="https://img-blog.csdnimg.cn/e21b4398b1a44e1b846fe10be6b6ca60.png" alt="" style="max-width: 600px;"></center>


```js
// SYN =1：表示请求建立连接
// FIN =1：表示请求断开连接
// ACK =1：表示数据信息确认

// 三次握手
// 客户端                                服务端
//   |__                                  |
//   |        __                          |
//   |               __ SYN=1             |
//   |                                __  |
//   |         ACK=1,SYN=1 __             |
//   |__                                  |
//   |       __                           |
//   |               __ ACK=1             |
//   |                                  __|

// 四次握手
...
```
TCP协议
TCP处于传输层,基于端口，面向连接
主机之间要想通信需要先建立双向数据通道
TCP的握手和挥手本质上都是四次，只是断开连接时，需要保证客户端完全接收到数据，故不能像三次握手一样合并ACK=1,SYN=1

### 创建TCP通信

这里使用Net实现TCP，Net(Stream、IPC)模块实现了底层通信接口。

实例：12-network client.js server.js

1. 通信过程

- 创建服务端:接收和回写客户端数据
- 创建客户端:发送和接收服务端数据
- 数据传输:内置服务事件和方法读写数据

2. 通信事件及方式

- listening事件:调用server.listen方法之后触发'
- connection事件:新的连接建立时触发
- close事件:当server关闭时触发
- error事件:当错误出现的时候触发
- data事件:当接收到数据的时触发该事件
- write方法:在socket上发送数据，默认是UT8编码
- end操作:当socket的一端发送FIN包时触发，结束可读端

### TCP粘包及解决
短时间内发送的数据会发生数据叠在一起，就是说原本分批发送的数据，由于执行时间短，就会一起发送过去。需要给每个部分添加不同的发送延时或其他方式。

### 封包拆包实现
封包拆包可以解决TCP粘包的问题。

实例：12-network client.js server.js data-package.js

<center> <img src="https://img-blog.csdnimg.cn/092e9d5d0d494a59a1a944d821c50249.png" style="max-width: 600px;" alt=’数据包‘></center>

1. 数据传输过程

- 进行数据编码，获取二进制数据包
- 按规则拆解数据，获取指定长度的数据

2. Buffer数据读写

- writelnt16BE:将value从指定位置写入
- readlnt16BE:从指定位置开始读取数据

## HTTP
实例：

在windows命令终端发送请求
```bash
D:\> curl -v -X POST -d "'key':'data-1234567890'" http://localhost:1234/
```

### 代理客户端
```js
// 客户端 <-------> 代理服务端 <---------> 服务端
```
2023年4月2日19:08:10


