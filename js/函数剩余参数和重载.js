// 剩余参数,只能是最后一个
function getAge(num, ...items) {
    console.log(num, items);
}
console.log(1, 2, 3, 4);
function getNewAge(x, y) {
    if (typeof (x) === 'string' && typeof (y) === 'string') {
        return x + y;
    }
    else if (typeof (x) === 'number' && typeof (y) === 'number') {
        return x + y;
    }
}
console.log(getNewAge(1, 2));
console.log(getNewAge('1', '2'));
