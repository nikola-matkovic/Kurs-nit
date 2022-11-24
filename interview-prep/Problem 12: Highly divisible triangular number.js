function divisibleTriangleNumber(n) {
    let prew = 1; 
    let sum = 0;
    while (1) {
        let current = sum + prew;
        prew++;
        sum = current;
        let numberOfDivisions = 0;
        for (let i = 1; i < Math.sqrt(current); i++) {
            if (current % i === 0) {
                numberOfDivisions += 2;
            }
        }
        if (numberOfDivisions >= n) {
            return current;
        }
    }
}

console.log(divisibleTriangleNumber(5))