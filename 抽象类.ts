// 定义类的行为和属性，为子类服务；跟接口的区别是：可以有方法的实现，单继承多实现(只针对与类，接口可以继承多个，参考接口继承接口)
abstract class Y {
    abstract name:string;

    abstract sayHi();
}

class Z extends Y {
    constructor(readonly name: string) {
        super();
    }

    sayHi() {
        console.log(this.name)
    }
}

// const y = new Y(); 抽象类不能被实例化
const z = new Z('lily');
z.sayHi();