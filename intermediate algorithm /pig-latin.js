function translatePigLatin(str) {
    let newStr = "";
    let first = '';
    let ima_samoglasnik = false;
    let s;
    for(let i = 0; i < str.length; i++){
        s = str[i].toLowerCase()
        if(s == 'a' || s == 'e' || s == 'o' || s == 'i' || s == 'u'){
            console.log("tu");
            ima_samoglasnik = true;
        }
    }
    if(!ima_samoglasnik){
        console.log("ušo");
        return str+'ay';
    }


    switch(str[0].toUpperCase()){
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
        case 'Y': 
        case 'R':
            return str+"way" 
        default:
            let i = 0;
            while(1){
                let s = str[i].toLowerCase()
                if(s == 'a' || s == 'e' || s == 'o' || s == 'i' || s == 'u' || s == 'y'){
                    break;
                }
                first += str[i];
                i++;
            }
            for(i; i < str.length; i++){
                newStr += str[i];
            }
        return newStr + first + "ay";
    }
}
  
console.log(translatePigLatin("rhythm"));
