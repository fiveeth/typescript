// public protected private; 默认所有属性和方法都是public的
class banana {
    private name: string;
    public age: number;
    protected gender: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    sayHi() {
        console.log(this.name);
    }

    public sayHello() {
        console.log('hello');
    }
}

class bananaSon extends banana {
    constructor(name: string, age: number, gender: string) {
        super(name, age, gender);
    }

    sayHi() {
        // console.log(this.name); //报错
        console.log(this.gender)
    }
}

const father = new banana('john', 40, 'man');
// father.name; 报错
const son = new bananaSon('mike', 20, 'man');
// console.log(son.name); 报错
console.log(son.age);
son.sayHi();
son.sayHello();

