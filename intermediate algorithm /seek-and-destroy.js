function destroyer(arr, ...args) {
    return arr.filter((value) => args.indexOf(value) === -1)
}
  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));