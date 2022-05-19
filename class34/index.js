const fetch = require("node-fetch");
const randomQuoteFromAuthor = async (author) => {
  try {
    const checkedAuthor = await authorCheck(author);

    if (!checkedAuthor) {
      return "That author doesn't exist";
    }
    const response = await fetch(
      `https://api.quotable.io/random${
        checkedAuthor ? `?author=${checkedAuthor}` : ""
      }`
    );
    const result = await response.json();

    return result.content + ", Author: " + result.author;
  } catch (error) {
    console.log(error);
  }
};

const authorCheck = async (author) => {
  try {
    const response = await fetch(
      `https://api.quotable.io/search/authors?query=${author}`
    );
    const result = await response.json();

    if (!result.count) {
      return false;
    }
    return result.results[0].name;
  } catch (error) {
    console.log(error);
  }
};

const createAdress = (...args) => {
    let address = `https://api.quotable.io/quotes`
    if(args.length === 0) {
        return address
    }
    address += `?`;
    let separator =  "&"
    let i = 0
    while(1){
        if(args[i]  === undefined){
            console.log(address)
            return address;
        }
        if( i == 0){
            address += `page=${args[i]}`
        }
        else if( i == 1){
            if(args[i] === "dateAdded" || args[i] === "dateModified" || args[i] === "author" || args[i] === "content" ){
                address += `${separator}sortBy=${args[i]}`
            }
        }
        else if(i == 2){
            if(args[i] === "asc" || args[i] == "desc"){
                address += `${separator}order=${args[i]}`
            }
        }
        i++;
    }
}
const getQuotes = async (...args) => {
  try {
    const address = createAdress(...args)
    const response = await fetch(address);
    const result = await response.json();
    return result.results;
  } catch (error) {
    console.log(error);
  }
};

getQuotes(2, "author", "desc").then( (value) => {
    value.forEach( ( res) => {
        console.log(`${res.content}     by: ${res.author}`)
    })
})