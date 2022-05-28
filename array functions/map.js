Array.prototype.newMap = function (callback){
    arr = this
    newArr = [];
    for(let i = 0; i < arr.length; i++){
        element = arr[i];
        newArr.push(callback(element, i, arr));
    }
    return newArr;
}

let a = [1,2,3,4,5,6,7,8,9,10,11]
let b = a.newMap(value => value*10)
console.log(b)