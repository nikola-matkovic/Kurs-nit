let petString = "Nikola has  a dog ";
let petRegex = /cat|dog|bird|fish/; 
let result = petRegex.test(petString);
if(result) {
    console.log("Yes", petString);
}