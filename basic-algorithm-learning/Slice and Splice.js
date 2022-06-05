function frankenSplice(arr1, arr2, n) {
    let arr3 = []
    for(let i = 0; i< n; i++){
      arr3.push(arr2[i]);
    }
    for(let i = 0; i < arr1.length; i++){
      arr3.push(arr1[i])
    }
    for(let i = n; i < arr2.length; i++){
      arr3.push(arr2[i]);
    } 
    return arr3;
}
  
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));