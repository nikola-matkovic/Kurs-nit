function rangeOfNumbers(startNum, endNum) {
    if(startNum == endNum){return [endNum]}
    return [startNum, ...rangeOfNumbers(startNum+1, endNum)]
  };

  console.log(rangeOfNumbers(3,10))