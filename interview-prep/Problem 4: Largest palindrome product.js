function checkPalindrom(word){
    for(let i = 0; i < word.length; i++){
      if(word[i] != word[word.length-i-1]) {
        console.log(i, word[i], word[word.length-1-i] )
        return false
      }
    } 
    console.log(word.length)
    return true;
  }
  
  
  function largestPalindromeProduct(n) {
    let number = 0;
    for(let i = 1; i < Math.pow(10, n); i++){
      for(let j = 1; j < Math.pow(10, n); j++){
        number = i * j;
        checkPalindrom(number.toString())
      }
    }
  }
  
  console.log(checkPalindrom(9009));