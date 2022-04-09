var arr = [1,2,3,4,5];

var n = 9;

let l = arr.length;

let found = false;

for(i=0; i<l; i++){
    if(arr[i] == n){
        console.log(i);
        found = true;
        break;
    }
}
if(!found){
    console.log(-1);
}