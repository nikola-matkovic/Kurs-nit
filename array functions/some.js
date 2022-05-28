Array.prototype.newSome = function (callback){
    arr = this
    for(let i = 0; i < arr.length; i++){
        element = arr[i];
        if(callback(element, i, arr)){
           return true;
        }
    }
    return false;
}

let a = [1,2,3,4,5,6,7,8,9,10,11]
let b = a.newSome(value => value % 12 === 0)
console.log(b)