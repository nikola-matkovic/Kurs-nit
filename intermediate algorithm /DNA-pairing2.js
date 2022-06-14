function pairElement(str) {
    let arr = str.split("");
    let pairElement = {
        A: 'T',
        T: 'A',
        G: 'C',
        C: 'G'
    }
    return arr.map(char => [char, pairElement[char]]);
}
  
console.log(pairElement("GCG"))