class People {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi(str) {
        console.log('hi,' + str);
    }
}
let p = new People('lily', 20);
p.sayHi('mike');
