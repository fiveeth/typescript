class Animal {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi(str) {
        console.log('我是父类：' + str);
    }
}
class Dog extends Animal {
    constructor(name, age) {
        super(name, age);
    }
    sayHi() {
        console.log('我是子类狗狗');
        super.sayHi('aaaa');
    }
}
// 继承：没有的找父类，有的找自身（都是装的，还是原型链那一套 => 吐槽一波）
const dog = new Dog('可爱的狗狗', 2);
dog.sayHi();
const cat = new Animal('猫咪', 2);
cat.sayHi('猫咪啊');
