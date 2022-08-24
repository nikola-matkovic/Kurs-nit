function multiplesOf3and5(number) {
    let s = 0;
    for(let i = 1; i<number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        s+=i;
      }
    }
    return s;
  }
  
  multiplesOf3and5(1000);