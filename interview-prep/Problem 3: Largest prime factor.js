function isPrime (num){
    let s = Math.sqrt(num);
    for(let i = 2; i <= s; i++){
      if(num % i == 0) return false
    }
    return true;
  }
  
  function largestPrimeFactor(number) {
    if(isPrime(number)){
      return number;
    } 
    for(let i = Math.ceil(Math.sqrt(number)); i > 1; i--){
      if(number % i == 0 && isPrime(i)) return i
    }
  }
  
largestPrimeFactor(10);  