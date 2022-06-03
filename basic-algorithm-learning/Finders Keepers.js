//crete array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
      num = arr[i];
      if (func(num)) {
        return num;
      }
    }
  }

findElement( numbers, (val) => {
    console.log(val % 2 == 0) ;
})
