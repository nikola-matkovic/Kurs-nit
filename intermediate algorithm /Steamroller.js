function steamrollArray(arr){
    let arr2 = [];
    arr.forEach((value) => {
        if(Array.isArray(value)){
            arr2 =  [...arr2, ...steamrollArray(value)];
        }
        else{
            arr2.push(value)
        }
    })
    return arr2;
}

console.log(steamrollArray([1, 2, 3, [4, 5]]));