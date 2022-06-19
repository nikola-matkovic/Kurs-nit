
let text = "<h1>Winter is coming</h1>";
let myRegex1 = /<.*>/; 
let myRegex2 = /<.*?>/; 
let result1 = text.match(myRegex1); 
let result2 = text.match(myRegex2); 
console.log(result1, result2);