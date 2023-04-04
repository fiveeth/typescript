// 可选参数 ?, 必选参数不能放在可选参数后面
const getName = function (x, y) {
    return x + y;
};
console.log(getName('zhang'));
console.log(getName('zhang', 'jun'));
// 默认参数, 可以放在必选和可选参数后面
const getNamedefault = function (x, y, z = 'nihao') {
    return x + y + z;
};
console.log(getNamedefault('zhang'));
console.log(getNamedefault('zhang', 'san'));
