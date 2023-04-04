interface ISing {
    // 唱歌
    sing();
}

interface IDance {
    // 跳舞
    dance();
}

class P implements ISing,IDance {
    sing() {
        console.log('唱歌');
    }

    dance() {
        console.log('跳舞');
    }
}

const pp = new P();
pp.sing();
pp.dance();