let array = [1, 2, 0, 0, 4, 0, 5];

let shiftZeros = (array) => {
    return [...array.filter(elem => elem !== 0), ...array.filter(elem => elem === 0)]
}

console.log(shiftZeros(array));