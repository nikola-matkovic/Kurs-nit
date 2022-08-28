function isPrime (num){
    let s = Math.sqrt(num);
    for(let i = 2; i <= s; i++){
      if(num % i == 0) return false
    }
    return true;
}

function nthPrime(n) {
    let i = 0;
    let trenutni = 2;
    while(1){
        if(isPrime(trenutni)){
            i++;
        }
        if(i == n){
            return trenutni;
        }
        trenutni ++; 
    }
  }
  
console.log(nthPrime(10001));