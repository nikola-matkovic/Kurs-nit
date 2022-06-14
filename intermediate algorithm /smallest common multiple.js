function smallestCommons(arr) {
    let first = arr[0];
    let last = arr[1];
    if(first > last){
        [first, last] = [last, first];
    }
    let newArray = [];
    for(let i = first; i <= last; i++){
        newArray.push(i)        
    }
    let scm = 1;
    let i = 2;
    while (newArray.some( value => value != 1)) {
        while( newArray.some( value => value % i == 0))  {
            scm *= i;
            newArray.forEach( (value, index) => {
                if(value % i == 0){
                    newArray[index] = value / i;
                }
            })
        }
        i++;
    }
    return scm;
}
console.log(smallestCommons([10,12]));