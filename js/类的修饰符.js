// public protected private; 默认所有属性和方法都是public的
class banana {
    name;
    age;
    gender;
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    sayHi() {
        console.log(this.name);
    }
    sayHello() {
        console.log('hello');
    }
}
class bananaSon extends banana {
    constructor(name, age, gender) {
        super(name, age, gender);
    }
    sayHi() {
        // console.log(this.name); //报错
        console.log(this.gender);
    }
}
const father = new banana('john', 40, 'man');
// father.name; 报错
const son = new bananaSon('mike', 20, 'man');
// console.log(son.name); 报错
console.log(son.age);
son.sayHi();
son.sayHello();
