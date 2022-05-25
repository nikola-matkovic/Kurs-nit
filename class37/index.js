const array = [
    {id: 1, name: "suad", address : {street: "hotkovo", number : 26}},
    {id: 2, name: "nikola", address : {street: "prvomajka", number : 22}},
    {id: 3, name: "ramiz", address : {street: "stevana nemanje", number : 27}},
    {id: 4, name: "ahmed", address : {street: "rifata budžovića", number : 22}},
    {id: 5, name: "irfan", address : {street: "potok 2", number : 2}}
]

const strings =  array.filter( value =>  {return  value.address.number > 25 }).map(value =>   value.address)

console.log(strings)

Array.prototype.newMap = function (callback) {
    const arr = this;
    const newArray = [];
    for (let i = 0; i < array.length; i++ ){
        newArray.push(callback(array[i], i, this))
    }
    return newArray;
}

const strings2s =  array.filter( value =>  {return  value.address.number > 25 }).newMap(value =>   value.address)

console.log(strings2)
