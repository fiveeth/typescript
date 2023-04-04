const cata = {
    name: 'mimi',
    age: 10,
    hobby: 'ball',
    gender: 'man',
};
// 类合并
class Animals {
    type;
    gender;
    constructor(type, gender) {
        this.type = type;
        this.gender = gender;
    }
}
const animals = new Animals('a', 'man');
animals.weight = 10;
console.log(animals.type);
console.log(animals.gender);
console.log(animals.weight);
