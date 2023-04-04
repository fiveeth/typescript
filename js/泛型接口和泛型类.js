// 泛型接口
// 方式一：
// interface Persons {
//     <T>(value: T, count: number): number[];
// }
const persons = function (value, count) {
    const arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(value);
    }
    return arr;
};
console.log(persons('123', 3));
// 泛型类
class Personc {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        return this.name;
    }
}
const personc = new Personc('lily', 23);
console.log(personc.sayHi());
const personcc = new Personc(1, 23);
console.log(personcc.sayHi());
