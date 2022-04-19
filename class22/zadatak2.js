function concatarrays(array1, array2){
    let a, b;
    a = Array.isArray(array1);
    b = Array.isArray(array2);
    if(a & b){
        return array1.concat(array2);
    }
    return undefined;
}
a = [1,2,3];
b = [4,5,6];
let d = concatarrays(a, b);
console.log(d);
