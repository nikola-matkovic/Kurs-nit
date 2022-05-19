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
        alpha = alpha
    }
    roar () {
        return "auuuuuu!";
    }
    eat() {
        return "where is my meat"
    }
}
const wolf = new Wolf("Nikola",  19, true)
console.log(wolf)