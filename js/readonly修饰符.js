// 只读属性，但是在构造函数中可以修改
class X {
    age;
    name;
    // readonly age:number;
    // constructor(age: number) {
    //     this.age = age;
    // }
    // readonly定义在参数上时，会自动的创建一个属性并且进行赋值操作，也就是说等同于之前那两个操作
    // 其实public(要显示)，private，protected定义在参数上时，也会自动的创建一个属性并且进行赋值操作
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
}
const x = new X(13, 'mike');
console.log(x.age);
console.log(x.name);
