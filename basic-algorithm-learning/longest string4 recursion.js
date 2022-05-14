function findLongestWordLength(str) {
    let arr = str.split(" ");
    if(arr.length == 1){
        return arr[0].length;
    }
    return Math.max(
        arr[0].length,
        findLongestWordLength(arr.slice(1).join(" "))
    );
  }
  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));