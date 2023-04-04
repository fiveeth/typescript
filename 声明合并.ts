// 函数合并即是指函数重载，参考'函数剩余参数和重载.ts'；
// 接口合并: 一样的属性名，其类型必须一致
interface Cat {
    name: string;
    age: 10;
    hobby: 'ball'
}

interface Cat {
    name: string;
    age: 10; // 必须跟之前的一样
    gender: 'man'
}

const cata:Cat = {
    name: 'mimi',
    age: 10,
    hobby: 'ball',
    gender: 'man',
}

// 类合并
class Animals {
    type: string;
    gender: string

    constructor(type: string, gender: string) {
        this.type = type;
        this.gender = gender;
    }
}
  
interface Animals {
    type: string;
    weight: number;
}

const animals =  new Animals('a', 'man');
animals.weight = 10;
console.log(animals.type);
console.log(animals.gender);
console.log(animals.weight);
