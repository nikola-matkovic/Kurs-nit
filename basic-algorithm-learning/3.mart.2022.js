const dijagonala  = (ispod =[])  => [[1, 2, 3],[4, 5, 6],[7, 8, 9]].forEach((row, i) => row.forEach((element, j) => (i > j) && ispod.push(element)))

console.log(ispod.reduce( (sum, element) => sum + element) / ispod.length)