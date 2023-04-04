// boolean
let bool: boolean = true;

// number
let num: number = 1;
let num1: number = 0b0001; // 二进制
let num2: number = 0o0001; // 八进制
let num3: number = 0x1; // 十六进制

// string
let str: string = '123';

// null
let empty: null = null;

// undefind
let init: undefined = undefined;

// undefind和null可以作为其他类型的子类型
let num4: number = undefined;
let str2: string = null;

// symbol
let sym: symbol = Symbol('123');

// bigint
let bigNum: bigint = BigInt(10000);
let bigNum2: bigint = 10000n;
