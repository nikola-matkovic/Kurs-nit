function addTogether(a, b) {
    if(arguments.length == 2){
        if(typeof(a) == "number" && typeof(b) == "number"){
            return a + b;
        }
        return undefined;
    }
    if(typeof(a) == "number"){
      return (secound) => addTogether(a, secound);
    }
}
  
console.log(addTogether(1)(2));
