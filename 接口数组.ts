// index只是为了好理解，刚好表示索引的意思，其实可以为任意值，比如[asd:number]:number
interface IArray {
    [index:number]: number
}

let newArr:IArray = [1,2,3,4]