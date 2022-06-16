// Only change code below this line
function urlSlug(title) {
    return title.trim()
    .split(/\W/)
    .join("-")
    .toLowerCase()
}
console.log(urlSlug(" Winter Is  Coming"));