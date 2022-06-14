function uniteUnique(...args) {
    let all =  [];
    args.forEach((value) => {
        value.forEach( (value2) => {
            if(!all.includes(value2)){
                all.push(value2);
            }
        })
    })
    return all;
}
  
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));