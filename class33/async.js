const promise = new Promise((res, rej) => {
    const random = Math.ceil(Math.random() * 1000)
    setTimeout(() => {
        res(random)
    }, random);
})

const promise2 = async () => {
    const randomNumber = await promise;
    console.log(randomNumber)
    const randomNumber2 = await promise;
    console.log(randomNumber2)
    const randomNumber3 = await promise;
    console.log(randomNumber3)
    const randomNumber4 = await promise;
    console.log(randomNumber4)
    const randomNumber5 = await promise;
    console.log(randomNumber5)
}

promise2();
console.log("main funkcija")