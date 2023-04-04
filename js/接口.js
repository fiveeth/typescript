let person = {
    name: 'lily',
    age: 20,
    sex: 'female',
    width: 1000
};
// 只读属性，只能在创建的时候被赋值
// person.name = 'mike'; 报错
person.age = 29;
console.log(JSON.stringify(person));
console.log(person['sex']);
