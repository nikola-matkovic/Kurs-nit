var a = ['a','b', 'c', 'd']
var b = ['a','b', 'f']
var c = [];

let found = false;
for(let i = 0; i<a.length; i++){
    c.push(a[i]);
}
for(let i = 0; i<b.length; i++){
    c.push(b[i]);
}
for(let i = 0; i<c.length; i++){
    for(let j = i+1; j<c.length; j++){
        if(c[i] === c[j]){
            c.splice(j, 1);
        }
        else{
            
        }
    }
}
  console.log(c)