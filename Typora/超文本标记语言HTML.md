超文本标记语言HTML

<i>文字倾斜</i>
<hr>水平线
<p>段落</p>
<br>换行
&nbsp;空格
<img src="../地址" title="提示" alt="失败" width="设置图片大小">如果有height=""要注意原图片比例
<ul type="disc"实心圆，type="circle"空心圆，type="square"方正实心><li>列表</li></ul>无序列表
<ol type="1"数字排序，type="a"或A字母排序，type="i"或I罗马数字排序><li>列表</li></ol>有序列表
<a href="地址" target="_blank"打开新页面 style="text-decoration:none;"消下划线>超文本链接</a>
<de>给文字增加删除线</de>
<sup>2</sup>给文字增加上标，10ˇ2
<u>给文字增加下划线</u>
<center>居中</center>
绝对地址：在任何情况下，都可以找得到的地址。
相对地址：必须知道当前所在。
<table border="1px"边框 cellspacing="0"单元格间隙>表格
<thead>表格的页眉</thead><tbody>
<col width=列1大小><tr width="大小" align="center"居中>行<td width="大小" align="居中">列</td></tr></tbody><tfooter>表格的页脚</tfooter></table>
行列单元格合并删除多余单元格<td colspan="行单元格数" / rowspan="列单元列数">
<th>表头</th>
<colgrpup span="6" width="">行数
<!--注释-->
注意嵌套标签
表单
<from action="提交到地址" method="get 获取数据，发送数据都写在地址栏上，用户可见，不能提交大量数据/post提交数据，发送数据用户不可见，可提交大量数据" 不要混用>
 <input type="text/password/button普通按钮 submit提交按钮/radio单选框/checkbox复选框/reset重置/file文件选择框"  name="提交信息使用" value="表示按钮文字" style="color: red;width=">
</form>
CSS（Casading Style Sheet）层叠样式表，修饰网页的语法。
<span>是一个容器标签，不惧任何特殊功能，仅当做容器来使用，用于文本。</span>

<div id="title/body/footer" style="line-height:行高">一个通用容器标签，不惧备任何特殊功能，仅当作容器来使用，可以包裹任何内容，亦可容器直接相互包裹。
<b>加粗</b>
margin:auto;让整个容器水平居中，注意容器width。
text-align:center;让内部元素水平居中
<body margin="0" 可以消除body上空白></body>
margin:0 15px;修改间距。
<style>
body{}
.button{当类class=“button”时要在class名前+.}
#id名｛｝不允许重复。
div根据标签名称选择对应的所有标签。
*｛｝通用选择器，对页面所有标签都生效。
.item｛
border-right:solid 1px #808080实线右边框/ dashed 1px虚线/ dotted 1px点虚线；
padding: 0 15px;拉长边框；
｝
去最后右竖分割线→|在最后一个类item<a标签里style="border:none;></a>两个style优先级：行内样式优先级>内样式（行内样式权值1000<…style=""…> >  id选择器权值100，#box｛…｝> 类别选择器权值10，.class｛…｝> 标签选择器，权值1，div｛…｝> *｛…｝通用样式，权重值0。  样式混乱时，它会根据样式权重值高进行选择样式优先级，div #id名的权值=1+10）
也可以#id名 .last｛border:none;｝优先级>item｛｝
</style>

<style typlie ="text/css">

文字修饰
.p1{color: red;
font-family:"字体类型";
font-size;
fint-weight:bold;加粗;
fobt-style:italic文字倾斜;
text-indent:60px首行缩进;
text-align:center;对齐方式;
line-heiggt:行高；
height:;垂直居中
text-decoration:none/underline;下划线}

html,body{
margin:0;
heoght100%;
}

背景图片
body{
margin:0;消除浏览器原有的边距。
padding:0;
background: 颜色orangered url() no-repeat; 或
background-image:url();
background-repeat:no-repeat;不让图片平铺。
background-position:right center ;
}

浮动float
float：left;文字不会重叠，可以做文字环绕；不会覆盖图片文本表单元素内容。
浮动超出overflow:auto;/浮动排布ckear:left/right/both;
浮动元素排列只参考前一个元素的位置。
右浮动特点：第一个元素会跑到行最后一个元素交换位置。

</style>
图片压缩格式jpg，png，gif利于网络传输
gif支持动画，只会全透明和不透明两个模式，只有256种颜色，颜色是真。

jpg采用有损压缩算法，体积小不支持动画和透明。

png采用无损压缩算法，体积相对较小，支持背景透明，不支持动画。

svg只会记录图像形状和颜色，通常保存颜色图像比较简单的图像。

盒子模型超文本标记语言HTML

<i>文字倾斜</i>
<hr>水平线
<p>段落</p>
<br>换行
&nbsp;空格
<img src="../地址" title="提示" alt="失败" width="设置图片大小">如果有height=""要注意原图片比例
<ul type="disc"实心圆，type="circle"空心圆，type="square"方正实心><li>列表</li></ul>无序列表
<ol type="1"数字排序，type="a"或A字母排序，type="i"或I罗马数字排序><li>列表</li></ol>有序列表
<a href="地址" target="_blank"打开新页面 style="text-decoration:none;"消下划线>超文本链接</a>
<de>给文字增加删除线</de>
<sup>2</sup>给文字增加上标，10ˇ2
<u>给文字增加下划线</u>
<center>居中</center>
绝对地址：在任何情况下，都可以找得到的地址。
相对地址：必须知道当前所在。
<table border="1px"边框 cellspacing="0"单元格间隙 >表格
    border-collapse: collapse;/*边框会合成单一边框*/
<thead>表格的页眉</thead><tbody>
<col width=列1大小><tr width="大小" align="center"居中>行<td width="大小" align="居中">列</td></tr></tbody><tfooter>表格的页脚</tfooter></table>
行列单元格合并删除多余单元格<td colspan="行单元格数" / rowspan="列单元列数">
<th>表头</th>
<colgrpup span="6" width="">行数
<!--注释-->
注意嵌套标签
表单
<from action="提交到地址" method="get 获取数据，发送数据都写在地址栏上，用户可见，不能提交大量数据/post提交数据，发送数据用户不可见，可提交大量数据" 不要混用>
 <input type="text/password/button普通按钮 submit提交按钮/radio单选框/checkbox复选框/reset重置/file文件选择框"  name="提交信息使用" value="表示按钮文字" style="color: red;width=">
</form>
CSS（Casading Style Sheet）层叠样式表，修饰网页的语法。
<span>是一个容器标签，不惧任何特殊功能，仅当做容器来使用，用于文本。</span>


<div id="title/body/footer" style="line-height:行高">一个通用容器标签，不惧备任何特殊功能，仅当作容器来使用，可以包裹任何内容，亦可容器直接相互包裹。
<b>加粗</b>
margin:auto;让整个容器水平居中，注意容器width。
text-align:center;让内部元素水平居中
<body margin="0" 可以消除body上空白></body>
margin:0 15px;修改间距。
<style>
body{}
.button{当类class=“button”时要在class名前+.}
#id名｛｝不允许重复。
div根据标签名称选择对应的所有标签。
*｛｝通用选择器，对页面所有标签都生效。

.item｛
border-right:solid 1px #808080实线右边框/ dashed 1px虚线/ dotted 1px点虚线；
padding: 0 15px;拉长边框；
｝
去最后右竖分割线→|在最后一个类item<a标签里style="border:none;></a>两个style优先级：行内样式优先级>内样式（行内样式权值1000<…style=""…> >  id选择器权值100，#box｛…｝> 类别选择器权值10，.class｛…｝> 标签选择器，权值1，div｛…｝> *｛…｝通用样式，权重值0。  样式混乱时，它会根据样式权重值高进行选择样式优先级，div #id名的权值=1+10）
也可以#id名 .last｛border:none;｝优先级>item｛｝
</style>
<style typlie ="text/css">

文字修饰
.p1{color: red;
font-family:"字体类型";
font-size;
fint-weight:bold;加粗;
fobt-style:italic文字倾斜;
text-indent:60px首行缩进;
text-align:center;对齐方式;
line-heiggt:行高；
height:;垂直居中
text-decoration:none/underline;下划线}

html,body{
margin:0;
heoght100%;
}

背景图片
body{
margin:0;消除浏览器原有的边距。
padding:0;
background: 颜色orangered url() no-repeat; 或
background-image:url();
background-repeat:no-repeat;不让图片平铺。
background-position:right center ;
}

浮动float
float：left;文字不会重叠，可以做文字环绕；不会覆盖图片文本表单元素内容。
浮动超出overflow:auto;/浮动排布ckear:left/right/both;
浮动元素排列只参考前一个元素的位置。
右浮动特点：第一个元素会跑到行最后一个元素交换位置。

</style>
图片压缩格式jpg，png，gif利于网络传输
gif支持动画，只会全透明和不透明两个模式，只有256种颜色，颜色是真。

jpg采用有损压缩算法，体积小不支持动画和透明。

png采用无损压缩算法，体积相对较小，支持背景透明，不支持动画。

svg只会记录图像形状和颜色，通常保存颜色图像比较简单的图像。

<!--SVG: Scalable Vector Graphics，可伸缩矢量图形。 举例：-->

<svg  width="50px" height = "50px">
    <circle cx="25" cy ="25" r ="22" fill="blue" stroke="gray" stroke-width="2"/>
</svg>

前端数据交互触发方式

用 form 可以发请求，但是会刷新页面或新开页面；

用 a 可以发 get 请求，但是也会刷新页面或新开页面；

用 img 可以发 get 请求，但是只能以图片的形式展示；

用 link 可以发 get 请求，但是只能以 CSS、favicon 的形式展示；

用 script 可以发 get 请求，但是只能以脚本的形式运行。

用jsonp实现请求，支持跨域请求。

用ajax实现页面无刷新的请求。

前端触发以后，前端请求的方式

![5d4e3a4f88536eda30cbc1cea215ed2a](C:\Users\Topskys\Desktop\5d4e3a4f88536eda30cbc1cea215ed2a.png)

————————————————
版权声明：本文为CSDN博主「weixin_39552317」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_39552317/article/details/114203786

盒子模型



