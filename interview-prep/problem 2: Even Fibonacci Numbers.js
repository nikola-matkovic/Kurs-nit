function sumFibs(num) {
    let first = 1;
    let secound = 1;
    let sum = 2;
    let temp = 0;
    while(first + secound <= num) {
        temp = first + secound;
        first = secound;
        secound = temp;
        console.log(temp)
        if(temp % 2 == 1){
            sum += temp;
        }
    }
    return sum;
}
console.log(sumFibs(75025));