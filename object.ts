// object, 除了string\number\boolean用字面量声明的均可以赋值给object类型
let obj: object = {};
obj = [];
obj = null;
obj = undefined;
obj = new String('123');
obj = String;
// obj = '123'; 报错
// obj = 1; 报错