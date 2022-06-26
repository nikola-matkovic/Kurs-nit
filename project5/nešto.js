let osoba = {
    ima : "nikola", 
    prezime : "Matković", 
    godine : 19,
    ljubimci : ["Pućko", "Garfild"],
    devojka :  {
        ima : "Jovana", 
        prezime : "Jovanović", 
        godine : 19,
        ljubimci : ["Zoi", "Leposava"],
    },
    skole : ["osnova", ["tehnička, gimnazija"], "fakultet"]
}

let json = JSON.stringify(osoba);

// console.log(osoba);
// console.log(json)


let a = 33292121
let text = "ajsdfkjakjf"
let tacno = true
let niz = [1,2,3,4,5,6,7,8,9,10]
let obj = {test: "test"}

let skup = new Set([1,2,3,4,5,6,7,8,1,2,3,5,2,10,11])
skup.add(1);
skup.add(1000)

let mapa = new Map( [
    ["ime", "Nikola"],
    [12 , "jedandva"],
    [true , "tačno"],
    ["godine", 19]
    ]
)

console.log(skup, mapa)

console.log(typeof skup, typeof mapa)

console.log(skup instanceof Set, obj instanceof Set)