// 数组去重
function uniqueArr(arr){
  
//   方法1：ES6的set()和...展开运算符
  return [...new Set(arr)];// 使用严格相等===
  
//   方法2：自定义
  var res=[];
  for(var i=0;i<arr.length;i++){
    var isFind=false;
    for(var j=0;j<res.length;j++){
      if(res[j] === arr[i]){isFind=true;}
      break;
    }
    if(!isFind){res.push(arr[i])}
  }
  retrun res;
}
