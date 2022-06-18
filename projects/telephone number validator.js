function telephoneCheck(str) {
    let reducedString = "";
    let opened = false;
    let dashIndex = 0;
    let openedDash = false;
    let indexOfOpening = 0;
    if(str[0] == "-"){
        return false;
    }
    for(let i = 0; i < str.length; i++){
        if(!Number.isNaN(parseInt(str[i]))){
            reducedString = reducedString + str[i];
        }
        else if(str[i] == "-" || str[i] == "(" || str[i] == ")" || str[i] == " "){
            if(opened == false && str[i] == ")"){
                return false;
            }
            if(opened == true && str[i] == ")"){
                if(i - indexOfOpening != 4){
                    return false;
                }
                opened = false;
            }
            if(str[i] == "("){
                indexOfOpening = i;
                opened = true;
            }
            if(str[i] == "-"){
                if(openedDash == true){
                    if(i - dashIndex <= 3){
                        return false;
                    }
                }
                if(openedDash == false){
                    openedDash = true;
                    dashIndex = i;
                }
            }
        }
        else{
            return false;
        }
    }
    if(opened == true){
        return false;
    }
    if(reducedString.length == 11){
        if(reducedString[0] != '1'){
            return false;
        }
        else{
            return true;
        }
    }
    else if(reducedString.length == 10){
        return true;
    }
    return false;
}
console.log(telephoneCheck("55 55-55-555-5"));