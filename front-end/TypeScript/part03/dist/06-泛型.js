"use strict";
/*
 * @Author: Topskys
 * @Date: 2022-10-10 11:40:30
 * @LastEditTime: 2022-10-10 11:40:33
 */
/**
 * 泛型，类型变量，在定义函数或类，遇到类型不明确时可用泛型，在调用时才会自动判断类型或手动指定。
 */
function fn(a, b) {
    console.log(b);
    return a;
}
// 调用
fn(10, 'bb');
fn(123, 'oo');
// T extends Inter：表示泛型T必须是Inter实现类(子类)
function fn1(a) {
    return a.length;
}
class A {
    constructor(name) {
        this.name = name;
    }
}
const a = new A({});
console.log(a);
