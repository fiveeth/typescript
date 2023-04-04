// 泛型接口
// 方式一：
// interface Persons {
//     <T>(value: T, count: number): number[];
// }

// const persons: Persons = function <T>(value: T, count: number): number[] {
//     const arr = [];
//     for (let i = 0; i < count; i++) {
//         arr.push(value);
//     }
//     return arr;
// }

// console.log(persons<string>('123', 3));
// console.log(persons('123', 3)); // 类型推断

// 方式二：
interface Persons<T> {
    (value: T, count: number): number[];
}

const persons: Persons<string> = function <T>(value: T, count: number): number[] {
    const arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(value);
    }
    return arr;
}

console.log(persons('123', 3));

// 泛型类
class Personc<T> {
    name: T;
    age: number;

    constructor(name: T, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHi(): T {
        return this.name;
    }
}

const personc = new Personc<string>('lily', 23);
console.log(personc.sayHi());

const personcc = new Personc<number>(1, 23);
console.log(personcc.sayHi());
