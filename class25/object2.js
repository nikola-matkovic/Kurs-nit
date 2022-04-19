const object = {
    name  : "Irfan",
    surname : "Ugljanin",
    address : {
        street: "osmana dervisurovica",
        number: "20",
        city: "Novi pazar"
    },
    friends : [
        {name: "suad"}, {name: "Daris"}
    ]
}


// object.fullname = `${object.name} ${object.surname}`
// delete object.name;
// object.address = undefined;
// object = undefined;
object.friends.push({name: "Nikola"})
console.log(object)