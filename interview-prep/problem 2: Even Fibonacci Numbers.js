function fiboEvenSum(num) {
    let prew = 1;
    let prewPrew = 1;
    let temp;
    let sum = 0;
    while(prew <= num) {
      temp = prew;
      prew = prew + prewPrew;
      prewPrew = temp;
      if(prew % 2 == 0){
        sum += prew;
      }
    }
    return sum;
}
console.log(fiboEvenSum(10));