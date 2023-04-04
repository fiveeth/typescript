function getArr<T>(value: T, count: number): T[] {
    const arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(value)
    }
    return arr;
}

console.log(getArr(123,3)); // 类型推断
console.log(getArr<string>('123',3));
