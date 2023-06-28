// 手写bind
Function.prototype.myBind = function (context) {
    var args = Array.prototype.slice.call(arguments, 1);
    var fn = this;
    return function A() {
        // this指向谁，取决于调用时传入的第一个参数 
        var resArgs = Array.prototype.slice.call(arguments);
        var allArgs = args.concat(resArgs);
        // 1. 使用new的方式调用该函数
        if (Object.getPrototypeOf(this) === A.prototype) { // 判断this指向是否是A的原型
            // return new fn(...allArgs);
            // or
            var obj = {};
            Object.setPrototypeOf(obj, fn.prototype);
            fn.apply(obj, allArgs);
            return obj; 
        }
        // 2. fn.bind('context',1,2);
        return fn.apply(context, allArgs);
    }
}

const newFn = fn.myBind('context', 1, 2);
newFn(3, 4); // 1,2,3,4 'context' 
const result = new newFn(3, 4);
console.log(result);