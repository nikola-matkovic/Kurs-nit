let chewieRegex = /Aa*/; 
console.log(typeof chewieRegex)
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!"
let result = chewieQuote.match(chewieRegex);

console.log(result)