let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findElement(arr, func){
    return arr.find(func);
}

findElement( numbers, (val) => {
    console.log(val % 2 == 0) ;
})