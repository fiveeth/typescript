class People {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHi(str: string) {
        console.log('hi,' + str);
    }
}

let p = new People('lily', 20);
p.sayHi('mike');