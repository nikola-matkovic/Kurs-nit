const users = [{id: 1, name: "irfan", age: 25}, {id: 2, name : "Nikola", age :19}, {id:3 , name: "Hamza", age : 18}]

const filteredUsers = users.filter(  (value, index) => {
    return value.age < 20;
});


console.log(filteredUsers)