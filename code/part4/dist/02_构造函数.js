"use strict";
class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    meow() {
        console.log(this.name);
    }
}
const cat = new Cat('Yoyo', 1.5);
