function getIndexToIns(arr, num) {
    let arr2 = [...arr].sort( (a, b) => a - b);
    let i = 0;
    for(i; i<arr2.length; i++){
      if(num <= arr2[i]){
        break;
      }
    }
    return i;
  }
  
console.log(getIndexToIns([5, 3, 20, 3], 50));