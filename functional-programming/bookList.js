// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {
    let array = [...bookList];
    array.push(bookName);
    return array;
}

// Change code below this line
function remove(bookList, bookName) {
    let array = [...bookList];
    const book_index = array.indexOf(bookName);
    if (book_index >= 0) {
        array.splice(book_index, 1);
        return array;
    // Change code above this line
    }
}

console.log(add(bookList, "A Brief History of Time"))