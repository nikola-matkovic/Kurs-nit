function dropElements(arr, func) {
    while(!func(arr[0])){
        arr.shift();
    }
    return arr;
}
  
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));