function sumSquareDifference(n) {
    let arr = []
    let sum = 0;
    let squareSum = 0;
    for(let i = 0; i <=n; i++){
        arr.push(i);
    }
    arr.forEach(item => {
        sum+= item;
        squareSum += item ** 2;
    });
    return sum ** 2 - squareSum;
}
  
console.log(sumSquareDifference(10))