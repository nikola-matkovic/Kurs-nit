function titleCase(str) {
    let arr = []
    str.split(' ').forEach( (word) => {
        let newWord = word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
        arr.push(newWord);
    });
    return arr.join(' ');
}


console.log(titleCase("I'm a little tea pot"));