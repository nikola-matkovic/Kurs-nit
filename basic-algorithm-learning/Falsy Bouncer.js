function bouncer(arr) {
    let novi = [];
    arr.forEach( (elem, index) => {
        if(elem){
            novi.push(elem);
            console.log("true: ", elem, typeof elem);
        }
        else{
            console.log("false: ", elem, typeof elem);
        }
    })
    return novi;
}
  
console.log(bouncer([7, "ate", "", false, 9, 0, null, NaN, undefined]));


// 0, false, "", NaN, null, undefined