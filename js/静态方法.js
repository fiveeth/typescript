class Fruit {
    static nameA = '苹果';
    static getFruitName() {
        console.log(this.nameA);
    }
}
Fruit.getFruitName();
console.log(Fruit.nameA);
