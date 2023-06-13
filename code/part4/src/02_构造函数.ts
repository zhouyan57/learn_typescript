class Cat{
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    meow(){
        console.log(this.name);
    }
}

const cat = new Cat('Yoyo', 1.5);

