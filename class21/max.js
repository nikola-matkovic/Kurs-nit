const arr = [1,3,4,1, 6, 3, 17, 4]

let max = arr[0];

let l = arr.length;

for(i=0; i<l; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}
console.log(max);