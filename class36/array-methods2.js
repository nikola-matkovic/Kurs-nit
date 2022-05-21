const users = [{id: 1, name: "irfan", age: 25}, {id: 2, name : "Nikola", age :19}, {id:3 , name: "Hamza", age : 18}]

const filteredUsers = users.filter(  (value, index) => {
    return value.age < 20;
});

Array.prototype.newFilter = function (cb){
    let array = this;
    const newArray = [];
    for (let i = 0; i < array.length; i++){
        const element = array[i];
        if(cb(element, i, array )){
            newArray.push(element);
        }
    }
    return newArray;
}




console.log( 
    users.newFilter( (value, index) => {
    return value.age < 20;
})
)