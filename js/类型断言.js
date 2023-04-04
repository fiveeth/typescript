// 定义一个函数，获取数字或者字符串的长度
// 类型断言：可以手动指定一个类型, 其实就是先假定这个值是某个类型，方便调用这个类型的专属方法；并不是强制将类型转换成另一个类型
// 方式一
function getLength(x) {
    if (x.length) {
        return x.length;
    }
    else {
        return x.toString().length;
    }
}
// 方式二
// function getLength(x:string | number):number {
//     if((<string>x).length) {
//         return (<string>x).length;
//     } else {
//         return x.toString().length;
//     }
// }
console.log(getLength(2));
// 将一个类型断言为any类型，因为any类型可以访问任何属性和方法，举个例子
// myObj.a = 10; 报错
let myObj = {};
myObj.a = 10;
console.log(myObj.a);
// 将any类型断言为具体类型
function getSum(x, y) {
    return x + y;
}
let sum1 = getSum(1, 2);
let sum2 = getSum('1', '2');
console.log(sum1);
console.log(sum2);
