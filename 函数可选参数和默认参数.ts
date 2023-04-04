// 可选参数 ?, 必选参数不能放在可选参数后面
const getName = function(x: string, y?:string): string {
    return x+y;
}
console.log(getName('zhang'));
console.log(getName('zhang', 'jun'));

// 默认参数, 可以放在必选和可选参数后面
const getNamedefault = function(x: string, y?: string, z:string = 'nihao'): string {
    return x+y+z;
}
console.log(getNamedefault('zhang'));
console.log(getNamedefault('zhang', 'san'));

