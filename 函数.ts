// 函数声明和函数表达式
// 函数声明
function add1(a: number, b: number): number {
    return a+b;
}

// 函数表达式
let add2 = function(a: number, b: number): number {
    return a+b;
}
console.log(add2(1,2));

// 完整写法
let add3:(a: number, b: number)=>number = function(a: number,b: number): number {
    return a+b;
}