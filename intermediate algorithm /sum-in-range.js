function sumAll(arr) {
    let s = 0;
    let min = (arr[0] < arr[1]) ? arr[0] : arr[1];
    let max = (arr[0] > arr[1]) ? arr[0] : arr[1];
    for(let i = 0; i <= max; i++){
      s += i;
    }
    return s;
  }
  
sumAll([1, 4]);