function bouncer(arr) {
    return arr.filter( (a) => !a)
}
  
console.log(bouncer([7, "ate", "", false, 9, 0, null, NaN, undefined]));


// 0, false, "", NaN, null, undefined