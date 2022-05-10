// console.log("h1 1");

const fn = () => {
    console.log("Hi");
}

//setTimeout(fn, 3000);

const id = setInterval(fn, 1000)

setTimeout(() => {
    clearInterval(id)
}, 10000)

// console.log("h1 2");