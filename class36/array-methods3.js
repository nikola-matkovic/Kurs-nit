const users = [{id: 1, name: "irfan", age: 25}, {id: 2, name : "Nikola", age :19}, {id:3 , name: "Hamza", age : 18}]


const foundUser = users.find( (user, index)  => {
    return user.name  = "irfan";
})

Array.prototype.newFind = function ( cb) {
    let result = [];  
    let arr = [...this];
    for(let i = 0; i < arr.length; i++){
        const element = arr[i]
        if(cb(element, i, arr)){
            result.push(arr[i]);
            break;
        }
    }
    return result;
}

console.log(users.newFind( (user, index) => {
    return user.name = "irfan"
}))