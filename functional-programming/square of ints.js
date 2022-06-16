const squareList = arr => {
    return arr.filter((value) =>  value == parseInt(value) && value > 0)
    .map(value => value * value)
  }
  
  const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
  console.log(squaredIntegers);