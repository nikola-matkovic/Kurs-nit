const promise = new Promise((res, rej) => {
    const random = Math.ceil(Math.random() * 1000)
    setTimeout(() => {
        if(random > 500){
            res(random);
        }
        else{
            rej(random)
        }
    }, random);
})

promise
.then(      (value)  => console.log("res",value))
.catch(    (value)   => console.log("rej",value))
.finally( () => console.log("finaly"));