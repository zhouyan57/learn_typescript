(function(){

    // 描述一个对象的类型 （对对象的类型做了限制）
    type myType = {
        name: string,
        age: number,
        // [propname: string]: any
    }

    const obj:myType = {
        name: 'Jane',
        age: 26
    }

    /*
    *   接口用来定义一个类结构，用来定义一个类中应该包含哪些属性和方法
    *       同时接口也可以当成类型声明去使用
    * */
   interface myInterface {
        name: string;
        age: number;
   }

   interface myInterface {
        gender: string;
   }

    const obj2:myInterface = {
        name: 'Jane',
        age: 26,
        gender: '女'
    }

        /*
    * 接口可以在定义类的时候去限制类的结构，
    *   接口中的所有的属性都不能有实际的值
    *   接口只定义对象的结构，而不考虑实际值
    *       在接口中所有的方法都是抽象方法（抽象类中可有抽象方法和实际的方法和值)
    *
    * */
    interface myInter{
        name: string;

        sayHello():void;
    }

    /*
    * 定义类时，可以使类去实现一个接口,
    *   实现接口就是使类满足接口的要求
    * */

    class MyClass implements myInter{
        name: string;

        constructor(name: string){
            this.name = name;
        }

        sayHello(){
            console.log('Hello');
            
        }
    }
})();