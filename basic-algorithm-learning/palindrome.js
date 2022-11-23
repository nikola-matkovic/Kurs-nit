let string = "ana voli milovana"

const isPalindrome = (string) => string.split("").reverse().join("").toLowerCase().replace(/ +/g, "")
    === string.toLowerCase().replace(/ +/g, "")

console.log(isPalindrome(string))