function specialPythagoreanTriplet(n) {
    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                if (i ** 2 + j ** 2 === k ** 2  && i + j + k === n) {
                    return i * j * k;
                }
            }
        }
    }
}

console.log(specialPythagoreanTriplet(24))
