function pairElement(str) {
    let arr = [];
    let temp = [];
    for(let i = 0; i < str.length; i++) {
        temp = [];
        switch(str.charAt(i)) {
            case 'A':
                temp.push('A');
                temp.push('T');
                break
            case 'T':
                temp.push('T');
                temp.push('A');
                break
            case 'C':
                temp.push('C');
                temp.push('G');
                break
            case 'G':
                temp.push('G');
                temp.push('C');
        }
        arr.push(temp);
    }
    return arr;
}
  
console.log(pairElement("GCG"))