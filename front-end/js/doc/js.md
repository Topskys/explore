<!--
 * @Author: Topskys
 * @Date: 2022-11-13 16:25:33
 * @LastEditTime: 2022-11-13 18:05:41
-->
# JavaScript

## 声明和初始化数组
我们可以使用默认值（like ""、null）初始化特定大小数组的数组。
```javascript
var array=Array(5).fill(""); 
// (5) ['', '', '', '', '']

const matrix=Array(5).fill(0).map(()=>Array(5).fill(0));
// (5) [Array(5), Array(5), Array(5), Array(5), Array(5)]
// 0: (5) [0, 0, 0, 0, 0]
// 1: (5) [0, 0, 0, 0, 0]
// 2: (5) [0, 0, 0, 0, 0]
// 3: (5) [0, 0, 0, 0, 0]
// 4: (5) [0, 0, 0, 0, 0]
// length: 5
```

## 数组求和、最大（小）值
利用**reduce()**方法快速数学运算。
```javascript
// 求和
const arr=[1,2,3,4,5]
arr.reduce((sum,num)=>sum+=num,0)

// 最大值（最小反之）
arr.reduce((a,b)=>a<b?a:b)
```

## 对字符串、数字或对象数组进行排序
字符串数组排序可以使用**sort()**和**reverse()**。
```javascript
// 排序数字数组
const arr=[56,5,89,45,2];
arr.sort((a,b) => a-b);
// (5) [2, 5, 45, 56, 89] // 升序
arr.sort((a,b) => b-a);
// (5) [89, 56, 45, 5, 2] // 降序

// 对象数组排序
const objArr=[{f_name:"Lazslo",l_name:"Jamf"},{f_name:"Pig",l_name:"Bodine"},{f_name:"Pirate",l_name:"Prentice"}];
objArr.sort((a,b) => a.l_name.localeCompare(b.l_name));
// 0: {f_name: 'Pig', l_name: 'Bodine'}
// 1: {f_name: 'Lazslo', l_name: 'Jamf'}
// 2: {f_name: 'Pirate', l_name: 'Prentice'}
// length: 3
```

## 从数组中过滤出虚假值
Falsy值（0,undefined,null,false,"",''），可以使用**filter()**方法
```javascript
const arr = [0,undefined,null,false,"",'',1,2,3,4,5];
arr.filter(Boolean);
// (5) [1, 2, 3, 4, 5]
```

## 对各种条件使用逻辑运算符
使用逻辑运算符可以减少if...else或switch case的嵌套。
```javascript
// 逻辑and运算符
&&
// 逻辑or运算符
||
```

## 删除重复值
**indexOf()**、**includes()**
```javascript
const array = [1, 2, 3, 4, 5,4,3,6,8,1];
array.filter((x,i,arr)=>arr.indexOf(x)===i);
// or
const nonUnique=[new Set(array)];
// (7) [1, 2, 3, 4, 5, 6, 8]
```

## 创建计数器对象或映射
```javascript
let str='kapilalipak';
const table={};
for(let char of str){
    table[char] = table[char]+1 || 1;
}
// {k: 2, a: 3, p: 2, i: 2, l: 2}

// 和
const countMap=new Map();
for(let i=0;i<str.length;i++){
    if(countMap.has(str[i])){
        countMap.set(str[i],countMap.get(str[i])+1);
    }else{
        countMap.set(str[i],1);
    }
};
// Map(5) {'k' => 2, 'a' => 3, 'p' => 2, 'i' => 2, 'l' => 2}
```

## 三元运算符
代替嵌套条件if...else if ...else if  
```javascript
// 表达式?执行表达式1:执行表达式2
```

## 与旧版相比，for循环更快
for并for..in默认为您提供索引，但您可以使用arr[index]。  
for..in也接受非数字，所以避免它  
forEach, for...of直接获取元素  
forEach也可以为您提供索引，但for..of不能  
for并for...of考虑阵列中的孔,但其他2个不考虑


## 合并对象
```javascript
// 对象层级只有一层时
const sumObj={obj1,obj2,obj3};
// 存在对象层级较深时
const sumObj={...obj1,...obj2,...obj3};
```

## =>箭头函数
箭头函数表达式是传统函数表达式的紧凑替代品，但有局限性，不能在所有情况下使用。由于它们具有词法范围(父范围)this，arguments因此它们指的是定义它们的环境


## 可选链?.
可选的链接**?.**如果在？之前，则停止评估。为undefined或null并返回。
```javascript
const user={
    employee:{
        name: 'Job',
        gender:"",
    }
};
user.employee?.name; // 'Job'
user.employee?.age; // undefined
user.employee?.gender; // ''
user.employ?.name; // undefined
```

## 空合并算子
空合并运算符(??)是一个逻辑运算符，当其左侧操作数为空或未定义时返回其右侧操作数,否则返回其左侧操作数。
```javascript
const foo=null ?? 'my college'; // 'my college'
const foo=0 ?? 1; // 0
```

## Rest & Spread 运算符（...）
神秘的三点...可以休息或传播


## 打乱数组
**Math.random()**
```javascript
const arr=[1, 2, 3, 4, 5,6,7,8,9];
arr.sort(()=>Math.random()-0.5);
// (9) [4, 1, 7, 9, 8, 2, 6, 5, 3]
```

## 将十进制转换为二进制、八进制或十六进制
利用**.toPrecision()或.toFixed()**可以实现许多帮助功能。
```javascript
const num=10;
num.toString(2);// "1010"
num.toString(8);// "12"
num.toString(16);// "a"
```

## 解构互换值
```javascript
let a=5;
let b=9;
[a,b]=[b,a] // a=9,b=5
```

## 行回文检查
```javascript
export const checkPalindrome=(str)=>str==str.split('').reverse().join('');
checkPalindrome("naman");   // true
```

## 将Object属性转成属性数组
```javascript
const obj={a:1,b:2,c:3,d:4,e:5};
Object.entries(obj);
// 0: (2) ['a', 1]
// 1: (2) ['b', 2]
// 2: (2) ['c', 3]
// 3: (2) ['d', 4]
// 4: (2) ['e', 5]
// length: 5
Object.keys(obj); 
// (5) ['a', 'b', 'c', 'd', 'e']
Object.values(obj);
// (5) [1, 2, 3, 4, 5]
```

## 
```javascript
****
``````javascript
****
``````javascript
****
``````javascript
****
``````javascript
****
``````javascript
****
``````javascript
****
``````javascript
****
``````javascript
****
```