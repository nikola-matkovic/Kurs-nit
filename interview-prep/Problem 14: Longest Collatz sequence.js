function longestCollatzSequence(limit) {
    let max = 0;
    let number;
    for (let i = 1; i <= limit; i++) {
        let n = i;
        let current = 1;
        while (n != 1) {
            if (n & 1) {
                n = n * 3 + 1;
            }
            else {
                n /= 2
            }
            current++;
        }
        if (current > max) {
            max = current;
            number = i;
        }
    }
    return number;
}
  
console.log(longestCollatzSequence(13));
