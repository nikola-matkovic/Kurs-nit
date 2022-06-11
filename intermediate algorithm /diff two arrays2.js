function diffArray(arr1, arr2) {
    let arr3 = arr1.concat(arr2);
    return arr3.filter( value =>  arr2.indexOf(value) == -1 || arr1.indexOf(value) == -1 )
}
console.log(diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]));