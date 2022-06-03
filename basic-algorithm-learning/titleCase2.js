function titleCase(str) {
    return str
    .toLowerCase()
    .split(' ')
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}


console.log(titleCase("I'm a little tea pot"));