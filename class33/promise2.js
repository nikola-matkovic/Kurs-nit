const fetch = require("node-fetch")

fetch("https://api.quotable.io/random")
.then(response => {
    return response.json();
})
.then( (result) =>
    {
        console.log(result);
    }
);