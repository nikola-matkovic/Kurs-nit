function sumPrimes(num) {
    let s = 0;
    let prime;
    for(let i = 2; i <= num; i++) {
        prime = true;
        for(let j = 2; j < i ; j++) {
            if(i % j == 0){
                prime = false;
                break;
            }
        }
        if(prime){
            console.log(i);
            s +=i;
        }
    }   
    return  s;
}

console.log(sumPrimes(977));