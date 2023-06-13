export{}
// 声明一个变量a，同时指定它的类型.
let a: number;

a = 10;

let b: string;

// 声明完变量直接进行赋值
let c: boolean = true;

// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
let d = false;
d = true;

// JS中的函数是不考虑参数的类型和个数的
// function sum(a, b){
//     return a + b;
// }

// console.log(sum(123, 456)); // 579
// console.log(sum(123, "456")); // "123456"

// 给函数的参数和返回值进行类型声明
function sum(a: number, b:number): number{
    return a + b;
}

let result = sum(123, 456);