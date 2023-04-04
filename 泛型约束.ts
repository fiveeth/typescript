interface ILength {
    length: number;
}

function getLengths<T extends ILength>(x: T): number {
    return x.length;
}

console.log(getLengths('123'));
// console.log(getLengths(123))  // 报错，因为number类型不具备length属性

