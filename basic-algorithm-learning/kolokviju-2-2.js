let string = "Nikola je  babo ovog jezika, mnogo voliM JavaScript!"
let samoglasici = ["a", "e", "i", "o", "u"]
const change = (string) => {
    string = string.toLowerCase()
    samoglasici.forEach( letter => string = string.replace(RegExp(letter, "g"), letter.toUpperCase()))
    return string;
}
console.log(change(string));