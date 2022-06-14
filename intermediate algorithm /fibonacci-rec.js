let s = 0;
function sumFibs(num) {
    if(num >= 1){
        return 1;
    }
    return (sumFibs(num - 1) + sumFibs(num - 2)); 

}
console.log(sumFibs(7));