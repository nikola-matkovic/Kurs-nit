class Animal {
    constructor(name = "Pućko", age = 9){
        this.name = name;
        this.age = age;
    }
    roar () {
        return "no idea for now";
    }
    eat() {
        return "give me food"
    }
}
class Wolf extends Animal {
    constructor(name, age, alpha = false){
        super(name, age)
    }
    roar () {
        return "auuuuuu!";
    }
    eat() {
        return "where is my meat"
    }
}
const  = new Animal( "ire", 25);
const wolf = new Wolf("Škabo", )
console.log(animalObj)