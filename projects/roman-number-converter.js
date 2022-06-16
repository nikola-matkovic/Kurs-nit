function convertToRoman(num) {
    let roman = "";
    while(num  / 1000 >= 1){
        roman += "M";
        num -= 1000;
    }
    while(num  / 500 >= 1){
        roman += "D";
        num -= 500;
    }
    while(num  / 100 >= 1){
        roman += "M";
        num -= 1000;
    }
    return roman;
}
   
console.log(convertToRoman(3000));