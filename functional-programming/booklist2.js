const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(bookList, bookName) {
    return [...bookList, bookName];
}
function remove(bookList, bookName) {
    return bookList.filter((value) => value !== bookName);
}

console.log(add(bookList, "A Brief History of Time"))