function findLongestWordLength(str) {
    let arr = str.split(" ");
    let longest = 3;
    arr.forEach((value) => {
       (value.length > longest) && (longest = value.length);    
    })
    return longest;
  }
  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));