Array.prototype.newFind = function (callback){
    arr = this
    for(let i = 0; i < arr.length; i++){
        element = arr[i];
        if(callback(element, i, arr)){
           return element
        }
    }
}

let a = [1,2,3,4,5,6,7,8,9,10.1,11]
let b = a.newFind(value => value % 3 === 0 )
console.log(b)