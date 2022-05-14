function confirmEnding(str, target) {
    console.log(str.length);
    console.log(target.length);
    console.log(str[str.length-target.length])
    j = 0;
    for(let i = str.length - target.length; i < str.length; i++ ){
        if(str[i] != target[j]){
            return false;
        }
        j++;
    }
    return true;
}
console.log(confirmEnding("Abstraction", "action"));