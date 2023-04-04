interface IRun {
    // 跑步
    run();
}

interface ISwim {
    // 游泳
    swim();
}

interface IActive extends IRun,ISwim {
    // 这里可以也定义其他的属性或者方法
}

class AA implements IActive {
    run() {
        console.log('热爱跑步');
    }

    swim() {
        console.log('热爱游泳');
    }
}