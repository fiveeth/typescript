// 数组合并了相同类型的对象，元组合并了不同类型的对象
const arrP:number[] = [1,2,3,4];

// 元组初始化的时候必须是按照类型顺序初始化，且个数必须一致
const arrT:[number, string] = [123, '123'];
// 添加的时候则只需要是number或者string类型的即可
arrT.push(456);
arrT.push('456');
arrT.push('789');
console.log(arrT);
