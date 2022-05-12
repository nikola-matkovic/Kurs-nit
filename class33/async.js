const promise2 = async () => {
    const random = Math.random() * 1000;
    return random;
}

promise2().then( (value) => console.log(value));
console.log("main funkcija")