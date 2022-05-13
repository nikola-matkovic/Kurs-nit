function reverseString(str) {
    let newStr = []
    let arr = Array.from(str);
    for(let i = arr.length-1; i>=0; i--){
        newStr.push(arr[i]);
    }
    return newStr.join("");
}

console.log(reverseString("hello"));