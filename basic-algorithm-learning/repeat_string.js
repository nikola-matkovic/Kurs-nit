function repeatStringNumTimes(str, num) {
    let newstr = str;
    if(num < 1){
      return "";
    }
    for(let i = 1; i<num; i++){
        newstr += str;
    }
    return newstr;
  }
  
console.log(repeatStringNumTimes("*", 8));