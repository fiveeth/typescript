function swap<T, U>(trunp: [T, U]): [U, T] {
    return [trunp[1], trunp[0]];
}
console.log(swap(['123', 123]));
console.log(swap([true, 123]));