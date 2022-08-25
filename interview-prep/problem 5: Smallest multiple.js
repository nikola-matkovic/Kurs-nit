function smallestCommons(number) {
    let arr = [];
    for(let i = 1; i <= number; i++){
        arr.push(i);
    }
    let i = 1;
    while(1){
        if(arr.every( item => i % item == 0)){
            return i;
        }
        i++;
    }
    console.log(arr)
}
console.log(smallestCommons(5));