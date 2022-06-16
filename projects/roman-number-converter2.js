let romanNumbers = {
    "M" : 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "XL": 10,
    "IX": 9,
    "V": 5,
    "IV":4,
    "I": 1
}

function convertToRoman(num) {
    let roman = "";
    for (let i in romanNumbers){
        if(String(romanNumbers[i])[0] == 1){
            while(num / romanNumbers[i] >= 1  && num > romanNumbers[i]){
                roman += i;
                num -= romanNumbers[i];
            }
        }
        else if(num  >= romanNumbers[i]  && num > romanNumbers[i]){
            roman += i;
            num -= romanNumbers[i];
        }
    }
    return roman;
}
   
console.log(convertToRoman(12));