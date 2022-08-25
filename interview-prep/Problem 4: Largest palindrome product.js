function checkPalindrom(word){
    for(let i = 0; i < word.length; i++){
      if(word[i] != word[word.length-i-1]) {
        return false
      }
    } 
    return true;
  }
  
  
  function largestPalindromeProduct(n) {
    let number = 0;
    let max = 0;
    for(let i =  Math.pow(10, n-1); i < Math.pow(10, n); i++){
      for(let j =  Math.pow(10, n-1); j < Math.pow(10, n); j++){
        number = i * j;
        if(checkPalindrom(number.toString()) && max < number){
          max = number;
        } 
      }
    }
    return max;
  }
  
console.log(largestPalindromeProduct(3));