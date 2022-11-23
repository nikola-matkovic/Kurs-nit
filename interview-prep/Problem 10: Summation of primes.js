function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++){
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function primeSummation(n) {
    let sum = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

console.log(primeSummation(2000000))