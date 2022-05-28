Array.prototype.newForEach = function (callback){
    arr = this
    for(let i = 0; i < arr.length; i++){
        element = arr[i];
        callback(element, i, arr);
    }
}

let a = [1,2,3,4,5,6,7,8,9,10,11]
a.newForEach( (value, index, array) =>  {console.log(value, index, array)})