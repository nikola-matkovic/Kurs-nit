// Only change code below this line
function countdown(n){
    if(n <= 1) return [n];
    return [n , ...countdown(n-1) ];
  }
  
  console.log(countdown(5))
