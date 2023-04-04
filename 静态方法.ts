class Fruit {
    static nameA: string = '苹果';

    static getFruitName() {
        console.log(this.nameA)
    }
}

Fruit.getFruitName();
console.log(Fruit.nameA);
