let max;
function  maxF(...args){
    max = args[0];
    args.forEach(  (arg) =>{
        if(arg>max){
            max = arg;
        }
    });
}
maxF(1,7,3,6,5);
console.log(max);