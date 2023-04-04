// 控制对属性的读取和访问
class Foreigner {
    firstname;
    lastname;
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get fullName() {
        return this.firstname + '-' + this.lastname;
    }
    set fullName(value) {
        const nameArr = value.split('-');
        this.firstname = nameArr[0];
        this.lastname = nameArr[1];
    }
}
const foreigner = new Foreigner('张', '三丰');
console.log(foreigner.fullName);
foreigner.fullName = '成-龙';
console.log(foreigner.fullName);
