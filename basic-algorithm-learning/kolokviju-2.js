let string = "Nikola je  babo ovog jezika, mnogo voliM JavaScript!"
let samoglasici = ["a", "e", "i", "o", "u"]

const change = (string) => {
    let niz = string.split("");
    let noviString  = []
    niz.forEach( letter => {
        if (samoglasici.indexOf(letter.toLowerCase()) !== -1) {
           noviString.push(letter.toUpperCase()) 
        }
        else {
            noviString.push(letter.toLowerCase()) 
        }
    })
    return noviString.join("")
}

console.log(change(string));