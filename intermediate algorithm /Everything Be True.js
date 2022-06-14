function truthCheck(collection, pre) {
    let elem;
    for(let i = 0; i < collection.length; i++) {
        elem = collection[i];
        if(!elem.hasOwnProperty(pre)) {
            return false;
        }
        if(!elem[pre]) {
            return false;   
        }
    }
    return true;
}

console.log(truthCheck([
    {name: "Pikachu", number: 25, caught: 3},
    {name: "Togepi", number: 175, caught: 1},
    {name: "MissingNo", number: NaN, caught: 0}], "number"))