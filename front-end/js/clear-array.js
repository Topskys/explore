// JS中清空数组的方法
var arr=[1,2,3,4,5];

// 方法1：
// array.splice(index,howmany,item1,.....,itemX)：景影响原数组。
// index	必需。规定从何处添加/删除元素。该参数是开始插入和（或）删除的数组元素的下标，必须是数字。
// howmany	可选。规定应该删除多少元素。必须是数字，但可以是 "0"。如果未规定此参数，则删除从 index 开始到原数组结尾的所有元素。
// item1, ..., itemX	可选。要添加到数组的新元素。
arr.splice(0,arr.length)

// 方法2：
// length：数组的长度
arr.length=0

// 方法3：
//赋值为[]
arr=[]
console.log(arr):



