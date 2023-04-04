// 剩余参数,只能是最后一个
function getAge(num: number, ...items: any[]) {
    console.log(num, items);
}
console.log(1, 2, 3, 4)

// 函数重载
function getNewAge(x: number, y: number): number
function getNewAge(x: string, y: string): string
function getNewAge(x: string | number, y: string | number): string | number {
    if(typeof(x) === 'string' && typeof(y) === 'string') {
        return x+y;
    } else if(typeof(x) === 'number' && typeof(y) === 'number') {
        return x+y;
    }
}

console.log(getNewAge(1,2));
console.log(getNewAge('1','2'));
