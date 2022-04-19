const a = {
    name : "Irfan",
    surname: "Ugljanin"
};

console.log(a);

key = "surname";

if(key != undefined){
    console.log("postoji");
}
else{
    console.log("ne postoji");
}

keys =  Object.keys(a);
values =  Object.values(a);

if(keys.includes(key)){
    console.log("ima");
}