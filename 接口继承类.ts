// 为什么接口可以继承类，主要是在ts中不单单是定义一个类，还定义了一个类型，参考类的类型
// 接口继承了类的实例属性和实例方法
class C {
    name:string;

    sayHi() {
        console.log('hi');
    }
}

interface D extends C {
    age: number;
}

class F implements D {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log('hello')
    }
}

const dd:D = {
    name: '',
    age: 18,
    sayHi() {
        console.log('123')
    }
}