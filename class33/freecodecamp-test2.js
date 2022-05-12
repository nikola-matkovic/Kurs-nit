function sum(arr, n) {
    if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  }
let arr1 = [1,2,3,4];
console.log(sum(arr1, 4));