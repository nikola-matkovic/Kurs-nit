const outer = (a) => {
    return (b) => {
        return a + b;
    };
};


const inner = outer(10);

console.log(inner(20));
console.log(inner(40));
console.log(inner(90));