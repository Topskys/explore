<!--
 * @Author: Topskys
 * @Date: 2022-10-31 19:51:00
 * @LastEditTime: 2022-10-31 20:02:38
-->
## Math.round()和Math.floor()的替代方案
```js
// Math.round() 四守五入
+.5|0
// 示例
812.777+.5|0 // 813

// Math.floor() 向下取整
0 | x
// 示例
0|743.4343 // 743
```


## in 运算符
in运算符，可检查数组或对象中是否存在索引或属性并返回布尔值。
```js
// 示例
let cars=["J","S","O","N"];
0 in cars // true
5 in cars // false
```


## 将chrome作为文本编辑器
在地址栏输入+回车
```
data:text/html,<html contenteditable>
```