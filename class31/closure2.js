const outer = (a) => {
    return (b) => {
        return a + b;
    };
};


outer(10)(20) // 30

const a = outer(10)
const b = outer(20)

console.log(a(20))
console.log(b(20))