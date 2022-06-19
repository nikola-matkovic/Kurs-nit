let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/ig;
let result = quoteSample.match(nonAlphabetRegex).length;

//[^A-Za-z0-9_]