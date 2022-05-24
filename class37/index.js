const array = [
    {id: 1, name: "suad", address : {street: "hotkovo", number : 26}},
    {id: 2, name: "nikola", address : {street: "prvomajka", number : 22}},
    {id: 3, name: "ramiz", address : {street: "stevana nemanje", number : 27}},
    {id: 4, name: "ahmed", address : {street: "rifata budžovića", number : 22}},
    {id: 5, name: "irfan", address : {street: "potok 2", number : 2}}
]

const strings =  array.filter( value =>  {return  value.address.number > 25 }).map(value =>   value.address)

console.log(strings)

