Array.prototype.newFilter = function (callback){
    arr = this
    newArr = [];
    for(let i = 0; i < arr.length; i++){
        element = arr[i];
        if(callback(element, i, arr)){
            newArr.push(element)
        }
    }
    return newArr;
}

let a = [1,2,3,4,5,6,7,8,9,10,11]
let b = a.newFilter(value => value % 2 === 0)
console.log(b)