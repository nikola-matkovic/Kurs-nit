var a = ['a','b', 'c', 'd']
var b = ['a','b', 'f']

for(let i = 0; i<a.length; i++){
    for(let j = 0; j<b.length; j++){
        if(a[i] == b[j]){
            console.log(a[i]);
        }
    }
}