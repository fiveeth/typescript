// 表示类型为多种类型中的一种
let f: boolean|number|string = false;
// 可以访问联合类型中所有类型的共有属性和方法且保证不会报错
// 例如：
console.log(f.toString());
// console.log(f.split('')); 报错

// 给f重新赋值，会给变量重新定义一个定义类型，这样就能调用特定方法
f = '123';
console.log(f.split(''));