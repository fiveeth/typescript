// 使用枚举类型给一组数值类型赋予名称
// 1,2,3,4
// 未手动赋值的情况下，值从0开始自动递增
var NumberType;
(function (NumberType) {
    NumberType[NumberType["one"] = 0] = "one";
    NumberType[NumberType["two"] = 1] = "two";
    NumberType[NumberType["three"] = 2] = "three";
    NumberType[NumberType["four"] = 3] = "four";
})(NumberType || (NumberType = {}));
console.log(NumberType);
console.log(NumberType.one === 0);
console.log(NumberType[0] === 'one');
// 手动赋值
var NumberType2;
(function (NumberType2) {
    NumberType2[NumberType2["one"] = 4] = "one";
    NumberType2[NumberType2["two"] = 5] = "two";
    NumberType2[NumberType2["three"] = 6] = "three";
    NumberType2[NumberType2["four"] = 7] = "four";
})(NumberType2 || (NumberType2 = {}));
console.log(NumberType2.one === 4);
console.log(NumberType2.two === 5);
// 记住一个点，后一个值只会根据前一个值进行递增，假设one=4,则two=5,而将three=8,则four=9而不是6
var NumberType3;
(function (NumberType3) {
    NumberType3[NumberType3["one"] = 4] = "one";
    NumberType3[NumberType3["two"] = 5] = "two";
    NumberType3[NumberType3["three"] = 8] = "three";
    NumberType3[NumberType3["four"] = 9] = "four";
})(NumberType3 || (NumberType3 = {}));
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
var NumberType4;
(function (NumberType4) {
    NumberType4[NumberType4["one"] = 4] = "one";
    NumberType4[NumberType4["two"] = 5] = "two";
    NumberType4[NumberType4["three"] = 5] = "three";
    NumberType4[NumberType4["four"] = 6] = "four";
})(NumberType4 || (NumberType4 = {}));
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
var NumberType5;
(function (NumberType5) {
    NumberType5[NumberType5["one"] = 0] = "one";
    NumberType5[NumberType5["two"] = 1] = "two";
    NumberType5[NumberType5["three"] = 'three'.length] = "three";
    NumberType5[NumberType5["four"] = 10] = "four";
})(NumberType5 || (NumberType5 = {}));
console.log(0 /* NumberType6.one */);
console.log(0 /* NumberType8.one */);
