function truthCheck(collection, pre) {
    return collection.every(value => value.hasOwnProperty(pre) && Boolean(value[pre]))
}

console.log(truthCheck([
        {name: "Quincy", role: "Founder", isBot: false},
        {name: "Naomi", role: "", isBot: false},
        {name: "Camperbot", role: "Bot", isBot: true}], "name"))