function palindrome(str) {
    let flag = true
    str = str.toLowerCase()
    .split(/\W|\_/)
    .join("")
    for(let i = 0; i < str.length; i++){
        if(str[i] != str[str.length - 1 - i]){
            flag = false
            break
        }
    }
    console.log(str)
    return flag;
}

console.log(palindrome("_e Y.----e"));