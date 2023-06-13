(function(){

    class Animal{
        name: string;
        age: number;
    
        constructor(name:string, age:number){
            this.name = name;
            this.age = age;
        }

        sayHi(){
            console.log('hi');
            
        }
    }

    class Cat extends Animal{
        
        color: string;

        constructor(name: string, age: number, color:string) {
            // 如果在子类中写了构造函数，在子类构造函数中必须对父类的构造函数进行调用
            super(name,age); // 调用父类的构造函数
            this.color = color;
        }

        // 重写
        sayHi(){
            // 在类的方法中 super就表示当前类的父类
            super.sayHi();
            console.log(this.name,'喵喵喵1');
        }
    }

    class Dog extends Animal{
    
        // 重写
        sayHi(){
            console.log(this.name,'汪汪汪');
        }
    }
    
    const cat = new Cat('Yoyo', 1.5, 'white');
    console.log(cat);
    cat.sayHi();

    const dog = new Dog('Tom', 3);
    console.log(dog);
    dog.sayHi();
    
    
    

})();