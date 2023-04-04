// 类可以作为类型，约束实例的属性和行为
class A {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name)
    }
}

class B extends A {
    age: number;

    constructor(name: string, age: number) {
        super(name);

        this.age = age;
    }
}

// const aa: B = new A('lily'); 报错，没有A没有age属性
const bb: B = new B('mike', 20);