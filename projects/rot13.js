function rot13(str) {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newstr = "";
    for(let i = 0; i < str.length; i++) {
        if(/[a-zA-Z]/.test(str[i])) {
            let index = letters.indexOf(str.charAt(i));
            if(index < 13){
                newstr += letters[index + 13];
            }
            else{
                newstr += letters[index - 13];
            }
        }
        else{
            newstr += str[i];
        }
    }
    return newstr;
}


console.log(rot13("SERR PBQR PNZC"));