interface IFunction {
    (arg1:string, arg2:string): boolean
}

// const fun: IFunction = function(a: string,b: string): boolean {
//     return a.search(b) !== -1;
// }

const fun:IFunction = function(a,b) {
    return a.search(b) !== -1;
}

console.log(fun('123', '1'));