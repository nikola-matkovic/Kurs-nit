function largestOfFour(arr) {
    let number =  Math.max(...arr.map( subArr => (Math.max(...subArr))))
    arr.forEach((subArr) => {
        if(subArr.indexOf(number) != -1){
            console.log(subArr) ///Pitati suada;
            return subArr;
        }
    })
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));