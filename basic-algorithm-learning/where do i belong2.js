function getIndexToIns(arr, num) {
    return arr.filter(val => num > val).length;
  }
console.log(getIndexToIns([5, 3, 20, 3], 50));