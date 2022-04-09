var a = ['a','b', 'c', 'd']
var b = ['a','b', 'f']
var c = [];

for(let i = 0; i<a.length; i++){
    for(let j = 0; j<b.length; j++){
        if(a[i] == b[j]){
            c.push(a[i]);
        }
    }
}
console.log(c);