"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 声明一个变量a，同时指定它的类型.
var a;
a = 10;
var b;
// 声明完变量直接进行赋值
var c = true;
// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
var d = false;
d = true;
// JS中的函数是不考虑参数的类型和个数的
// function sum(a, b){
//     return a + b;
// }
// console.log(sum(123, 456)); // 579
// console.log(sum(123, "456")); // "123456"
function sum(a, b) {
    return a + b;
}
var result = sum(123, 456);
