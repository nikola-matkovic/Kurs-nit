function diffArray(arr1, arr2) {
    const newArr = [];
    arr1.forEach((value) => {
        if(arr2.indexOf(value) == -1) {
            newArr.push(value);
            console.log(newArr)
        }
    })
    arr2.forEach((value) => {
        if(arr1.indexOf(value) == -1) {
            newArr.push(value);
        }
    })
    return newArr;
  }
  

  
  console.log(diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]));