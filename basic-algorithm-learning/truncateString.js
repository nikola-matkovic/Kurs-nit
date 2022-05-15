function truncateString(str, num) {
    let newString = "";
    if(num >= str.length) return str;
    for(let i = 0; i<num; i++){
      newString += str[i];
    }
    return newString+"...";
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);