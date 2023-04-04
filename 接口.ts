// 对对象类型的一种约束，首字母一般大写
// [propName:string]: any => 任意属性和任意属性值
// [propName:string]: string => 一旦确定了任意类型，则确定属性和可选属性的类型都必须是它的类型的子集；举个例子：此时age: number会提示报错
interface IPerson {
    readonly name: string,
    age: number,
    sex: string,
    // [propName:string]: any
    [propName:string]: string | number
}

let person: IPerson = {
    name: 'lily',
    age: 20,
    sex: 'female',
    width: 1000
}

// 只读属性，只能在创建的时候被赋值
// person.name = 'mike'; 报错
person.age = 29;
console.log(JSON.stringify(person));
console.log(person['sex']);