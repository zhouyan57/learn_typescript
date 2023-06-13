"use strict";
class Person {
    constructor() {
        /*
        *   直接定义的属性是实例属性，需要通过对象的实例去访问：
        *       const per = new Person();
        *       per.name
        *
        *   使用static开头的属性是静态属性（类属性），可以直接通过类去访问
        *       Person.age
        *
        *   readonly开头的属性表示一个只读的属性无法修改
        * */
        // 定义实例属性：
        this.name = "Jane";
        this.age = 26; // 自动类型判断
        // readonly
        this.xxx = 'ttt';
    }
    // 定义方法
    /*
    * 如果方法以static开头则方法就是类方法，可以直接通过类去调用
    * */
    sleep() {
        console.log('睡睡睡');
    }
}
// 定义类属性: 
Person.gender = '女';
Person.bbb = 123;
const per = new Person();
