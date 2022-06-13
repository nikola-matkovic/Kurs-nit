function whatIsInAName(collection, source) {
    let arr = [];
    let keys = Object.keys(source);
    collection.forEach( (object) => {
        if(keys.every( (key) => object[key]  == source[key])){
           arr.push(object);
        }
    })
    return arr;
}
console.log(whatIsInAName([{ "apple": 1, "bat": 2 },{ "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }],  { "apple": 1, "bat": 2 }));