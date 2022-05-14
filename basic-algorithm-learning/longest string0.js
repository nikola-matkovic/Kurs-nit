function findLongestWordLength(str) {
    let arr = str.split(" ");
    let longest = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > longest){
            longest = arr[i].length;
        }
    }
    return longest;
  }
  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));