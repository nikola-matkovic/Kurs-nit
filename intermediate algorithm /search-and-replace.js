function myReplace(str, before, after) {
    if(/^[A-Z]/.test(before)) {
        after = after[0].toUpperCase() + after.substr(1);
    }else{
        after = after[0].toLowerCase() + after.substr(1)
    }
    return str.replace(before, after);
  }
  
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));