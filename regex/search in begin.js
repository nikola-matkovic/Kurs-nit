let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let result = calRegex.test(rickyAndCal);

//kada se ne koristi ^ i zagradama [] tada se odnosi na početak stringa,
// u zagradama se odnosi na negaciju.