removeFirst = (array) => {
    const arr2 = [...arr]
    arr2.shift();
    return arr2;
}

const arr = [1,2, 3, 4, 5];

removeFirst(arr);

console.log(arr);