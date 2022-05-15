function confirmEnding(str, target) {
    return target == str.slice(-target.length);
}
console.log(confirmEnding("Abstraction", "action"));