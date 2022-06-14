function fearNotLetter(str) {
    let letters = "abcdefghijklmnopqrstuvwxyz".split("");
    str = str.split('');
    let start = letters.indexOf(str[0]);
    for(let i = 0; i < str.length; i++) {
        if(letters[start + i] !== str[i]){
            return letters[start + i];
        }
    }
}
  
console.log(fearNotLetter("abce"));