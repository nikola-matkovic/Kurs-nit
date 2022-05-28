Array.prototype.newEvery = function (callback){
    arr = this
    for(let i = 0; i < arr.length; i++){
        element = arr[i];
        if(!callback(element, i, arr)){
           return false;
        }
    }
    return true;
}

let a = [1,2,3,4,5,6,7,8,9,10.1,11]
let b = a.newEvery(value => value % 1 === 0)
console.log(b)