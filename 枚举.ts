// 使用枚举类型给一组数值类型赋予名称
// 1,2,3,4
// 未手动赋值的情况下，值从0开始自动递增
enum NumberType {
    one,
    two,
    three,
    four
}
console.log(NumberType);
console.log(NumberType.one === 0);
console.log(NumberType[0] === 'one');

// 手动赋值
enum NumberType2 {
    one=4,
    two,
    three,
    four
}
console.log(NumberType2.one === 4);
console.log(NumberType2.two === 5);

// 记住一个点，后一个值只会根据前一个值进行递增，假设one=4,则two=5,而将three=8,则four=9而不是6
enum NumberType3 {
    one=4,
    two,
    three=8,
    four
}
console.log(NumberType3.four === 9);

// 尽量避免重复，否则后一个值会覆盖掉前面的相同的值
// 可以发现没有'5': 'two'这一个项
// {
//   '4': 'one',
//   '5': 'three',
//   '6': 'four',
//   one: 4,
//   two: 5,
//   three: 5,
//   four: 6
// }
enum NumberType4 {
    one=4,
    two,
    three=5,
    four
}
console.log(NumberType4);

// 常数项和计算所得项
// 计算所得项, 计算所得项后面必须手动赋值，否则报错
// 以下报错
// enum NumberType5 {
//     one = "one".length,
//     two,
//     three,
//     four
// }
// 正常
enum NumberType5 {
    one,
    two,
    three = 'three'.length,
    four = 10
}

// 常数枚举跟普通枚举的区别：常数枚举在编译阶段会被删除，且不能包含计算所得项
const enum NumberType6 {
    one,
    two,
    three=10+10, // 常数计算，不属于计算所得项
    four
}
console.log(NumberType6.one);

// 外部枚举: 在编译阶段会被删除
declare enum NumberType7 {
    one,
    two,
    three,
    four
}
// console.log(NumberType7.one) //报错

declare const enum NumberType8 {
    one,
    two,
    three,
    four
}
console.log(NumberType8.one);
