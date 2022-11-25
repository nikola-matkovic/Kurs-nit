function largeSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      sum += Number(arr[i]);
    }
    sum = sum.toString().split("");
    let index = sum.indexOf(".");
    sum.splice(index, 1)
    return Number(sum.slice(0, 10).join(""));
  }
  
  // Only change code above this line
  
  const testNums = [
    '37107287533902102798797998220837590246510135740250',
    '46376937677490009712648124896970078050417018260538'
  ];
  
  console.log(largeSum(testNums));